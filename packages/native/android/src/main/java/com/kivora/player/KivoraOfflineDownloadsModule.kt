package com.kivora.player

import android.os.Handler
import android.os.Looper
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.MimeTypes
import androidx.media3.exoplayer.DefaultRenderersFactory
import androidx.media3.exoplayer.hls.HlsManifest
import androidx.media3.exoplayer.offline.Download
import androidx.media3.exoplayer.offline.DownloadHelper
import androidx.media3.exoplayer.offline.DownloadService
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import org.json.JSONObject
import java.io.IOException

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
class KivoraOfflineDownloadsModule(private val context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    private val main = Handler(Looper.getMainLooper())
    private val downloads by lazy { KivoraDownloads.get(context) }
    private data class Preparation(val helper: DownloadHelper, val promise: Promise)
    private val preparations = mutableMapOf<String, Preparation>()
    private val enqueues = mutableMapOf<String, Promise>()
    private val removals = mutableMapOf<String, MutableList<Promise>>()
    private var listenerCount = 0
    private val listener: (Download, Boolean) -> Unit = { download, removed ->
        if (!removed) enqueues.remove(download.request.id)?.resolve(null)
        if (removed) removals.remove(download.request.id)?.forEach { it.resolve(null) }
        emit(snapshot(download, removed))
    }
    private val progress = object : Runnable {
        override fun run() {
            if (listenerCount > 0) {
                downloads.manager.currentDownloads.forEach { emit(snapshot(it)) }
                main.postDelayed(this, 500)
            }
        }
    }

    override fun getName() = "KivoraOfflineDownloads"

    override fun initialize() {
        super.initialize()
        main.post {
            downloads.listeners.add(listener)
            DownloadService.start(context, KivoraDownloadService::class.java)
        }
    }

    @ReactMethod
    fun start(options: ReadableMap, promise: Promise) {
        main.post {
            try {
                val id = requireNotNull(options.getString("id"))
                val url = requireNotNull(options.getString("url"))
                val requestedMimeType = requireNotNull(options.getString("mimeType"))
                val mimeType = when {
                    requestedMimeType.equals(MimeTypes.APPLICATION_M3U8, ignoreCase = true) || requestedMimeType.equals("application/vnd.apple.mpegurl", ignoreCase = true) -> MimeTypes.APPLICATION_M3U8
                    requestedMimeType.equals(MimeTypes.APPLICATION_MPD, ignoreCase = true) -> MimeTypes.APPLICATION_MPD
                    else -> throw IllegalArgumentException("Only HLS and DASH are supported")
                }
                require(id.isNotBlank() && preparations[id] == null && enqueues[id] == null && removals[id] == null) { "Download is already preparing or being removed" }
                val uri = android.net.Uri.parse(url)
                require(uri.scheme == "https" || uri.scheme == "http") { "Download URL must use HTTP or HTTPS" }
                val headers = if (options.hasKey("headers")) options.getMap("headers")?.toHashMap()?.mapValues { (_, value) -> value as String } ?: emptyMap() else emptyMap()
                val metadata = JSONObject().put("title", options.getString("title") ?: id).put("headers", JSONObject(headers))
                val parameters = DownloadHelper.DEFAULT_TRACK_SELECTOR_PARAMETERS.buildUpon()
                    .setMaxVideoSize(1280, 720).setExceedVideoConstraintsIfNecessary(false)
                    .setForceHighestSupportedBitrate(true).setTrackTypeDisabled(C.TRACK_TYPE_TEXT, true).build()
                val helper = DownloadHelper.Factory().setDataSourceFactory(KivoraDownloads.httpFactory(headers))
                    .setRenderersFactory(DefaultRenderersFactory(context)).setTrackSelectionParameters(parameters)
                    .create(MediaItem.Builder().setUri(url).setMimeType(mimeType).build())
                preparations[id] = Preparation(helper, promise)
                helper.prepare(object : DownloadHelper.Callback {
                    override fun onPrepared(helper: DownloadHelper, tracksInfoAvailable: Boolean) {
                        if (preparations[id]?.helper !== helper) return
                        try {
                            require(tracksInfoAvailable && helper.periodCount > 0) { "No downloadable tracks found" }
                            val manifest = helper.manifest
                            if (manifest is HlsManifest) {
                                require(manifest.multivariantPlaylist.sessionKeyDrmInitData.isEmpty() && manifest.mediaPlaylist.protectionSchemes == null) { "DRM downloads are not supported" }
                            }
                            for (period in 0 until helper.periodCount) {
                                val tracks = helper.getTracks(period)
                                require(tracks.groups.none { group -> (0 until group.length).any { group.getTrackFormat(it).drmInitData != null } }) { "DRM downloads are not supported" }
                                require(tracks.groups.any { it.isSelected }) { "No supported tracks within download limits" }
                                val video = tracks.groups.filter { it.type == C.TRACK_TYPE_VIDEO }
                                require(video.isEmpty() || video.any { it.isSelected }) { "No supported video track within 720p download limit" }
                            }
                            val request = helper.getDownloadRequest(id, metadata.toString().toByteArray(Charsets.UTF_8))
                            enqueues[id] = promise
                            DownloadService.sendAddDownload(context, KivoraDownloadService::class.java, request, true)
                        } catch (error: Exception) {
                            enqueues.remove(id)
                            promise.reject("E_ADAPTIVE_PREPARE", error.message, error)
                        } finally {
                            preparations.remove(id)
                            helper.release()
                        }
                    }

                    override fun onPrepareError(helper: DownloadHelper, error: IOException) {
                        if (preparations[id]?.helper !== helper) return
                        preparations.remove(id)
                        helper.release()
                        promise.reject("E_ADAPTIVE_PREPARE", error.message ?: "Live content is not supported", error)
                    }
                })
            } catch (error: Exception) {
                promise.reject("E_ADAPTIVE_START", error.message, error)
            }
        }
    }

    @ReactMethod
    fun remove(id: String, promise: Promise) {
        main.post {
            preparations.remove(id)?.let {
                it.helper.release()
                it.promise.reject("E_ADAPTIVE_CANCELLED", "Download cancelled")
            }
            val enqueue = enqueues.remove(id)
            enqueue?.reject("E_ADAPTIVE_CANCELLED", "Download cancelled")
            try {
                val exists = enqueue != null || downloads.manager.currentDownloads.any { it.request.id == id } || downloads.manager.downloadIndex.getDownload(id) != null
                if (!exists) {
                    promise.resolve(null)
                } else {
                    removals.getOrPut(id) { mutableListOf() }.add(promise)
                    DownloadService.sendRemoveDownload(context, KivoraDownloadService::class.java, id, true)
                }
            } catch (error: Exception) {
                removals.remove(id)?.forEach { it.reject("E_ADAPTIVE_REMOVE", error.message, error) } ?: promise.reject("E_ADAPTIVE_REMOVE", error.message, error)
            }
        }
    }

    @ReactMethod
    fun getDownloads(promise: Promise) {
        main.post {
            try {
                promise.resolve(Arguments.createArray().apply { downloads.snapshots().forEach { pushMap(snapshot(it)) } })
            } catch (error: Exception) {
                promise.reject("E_ADAPTIVE_LIST", error.message, error)
            }
        }
    }

    @ReactMethod
    fun addListener(eventName: String) {
        main.post {
            if (listenerCount++ == 0) main.post(progress)
        }
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        main.post {
            listenerCount = (listenerCount - count).coerceAtLeast(0)
            if (listenerCount == 0) main.removeCallbacks(progress)
        }
    }

    override fun invalidate() {
        main.post {
            main.removeCallbacks(progress)
            downloads.listeners.remove(listener)
            preparations.values.forEach { it.helper.release(); it.promise.reject("E_ADAPTIVE_CANCELLED", "Native module closed") }
            preparations.clear()
            enqueues.values.forEach { it.reject("E_ADAPTIVE_CANCELLED", "Native module closed") }
            enqueues.clear()
            removals.values.flatten().forEach { it.reject("E_ADAPTIVE_CANCELLED", "Native module closed") }
            removals.clear()
        }
        super.invalidate()
    }

    private fun emit(value: WritableMap) {
        if (listenerCount > 0 && context.hasActiveReactInstance()) {
            context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit("KivoraOfflineDownload", value)
        }
    }

    private fun snapshot(download: Download, removed: Boolean = false): WritableMap = Arguments.createMap().apply {
        putString("id", download.request.id)
        putString("state", if (removed) "removed" else when (download.state) {
            Download.STATE_COMPLETED -> "downloaded"
            Download.STATE_FAILED -> "error"
            Download.STATE_DOWNLOADING -> "downloading"
            Download.STATE_STOPPED -> "paused"
            else -> "queued"
        })
        putDouble("progress", if (download.state == Download.STATE_COMPLETED) 1.0 else (download.percentDownloaded.toDouble() / 100).coerceIn(0.0, 1.0))
        if (download.state == Download.STATE_COMPLETED && !removed) putString("localUri", KivoraDownloads.localUri(download.request.id))
        if (download.state == Download.STATE_FAILED) putString("error", "Adaptive download failed (${download.failureReason})")
    }
}
