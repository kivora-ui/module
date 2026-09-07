package com.kivora.player

import android.content.Context
import android.net.Uri
import androidx.core.app.NotificationManagerCompat
import androidx.media3.database.StandaloneDatabaseProvider
import androidx.media3.datasource.DefaultHttpDataSource
import androidx.media3.datasource.cache.CacheDataSource
import androidx.media3.datasource.cache.CacheKeyFactory
import androidx.media3.datasource.cache.NoOpCacheEvictor
import androidx.media3.datasource.cache.SimpleCache
import androidx.media3.exoplayer.offline.DefaultDownloadIndex
import androidx.media3.exoplayer.offline.DefaultDownloaderFactory
import androidx.media3.exoplayer.offline.Download
import androidx.media3.exoplayer.offline.DownloadManager
import androidx.media3.exoplayer.offline.DownloaderFactory
import androidx.media3.exoplayer.offline.DownloadNotificationHelper
import com.brentvatne.react.ReactNativeVideoManager
import org.json.JSONObject
import java.io.File
import java.util.concurrent.Executors

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
internal class KivoraDownloads private constructor(val context: Context) {
    val database = StandaloneDatabaseProvider(context)
    val cache = SimpleCache(File(context.filesDir, "kivora-adaptive-cache"), NoOpCacheEvictor(), database)
    private val executor = Executors.newFixedThreadPool(3)
    private val notices = context.getSharedPreferences("kivora-adaptive-notices", Context.MODE_PRIVATE)
    val notificationHelper = DownloadNotificationHelper(context, CHANNEL)
    val listeners = mutableSetOf<(Download, Boolean) -> Unit>()
    val manager = DownloadManager(context, DefaultDownloadIndex(database), DownloaderFactory { request ->
        val metadata = JSONObject(String(request.data, Charsets.UTF_8))
        val headers = metadata.optJSONObject("headers") ?: JSONObject()
        val headerMap = headers.keys().asSequence().associateWith { headers.getString(it) }
        DefaultDownloaderFactory(
            CacheDataSource.Factory().setCache(cache).setCacheKeyFactory(cacheKeyFactory(request.id)).setUpstreamDataSourceFactory(httpFactory(headerMap)),
            executor,
        ).createDownloader(request)
    })

    init {
        manager.maxParallelDownloads = 1
        manager.addListener(object : DownloadManager.Listener {
            override fun onDownloadChanged(manager: DownloadManager, download: Download, finalException: Exception?) {
                if (download.state == Download.STATE_COMPLETED || download.state == Download.STATE_FAILED) {
                    val terminal = download.state.toString()
                    if (notices.getString(download.request.id, null) != terminal) {
                        val notification = if (download.state == Download.STATE_COMPLETED) {
                            notificationHelper.buildDownloadCompletedNotification(context, android.R.drawable.stat_sys_download_done, null, title(download))
                        } else {
                            notificationHelper.buildDownloadFailedNotification(context, android.R.drawable.stat_notify_error, null, title(download))
                        }
                        if (NotificationManagerCompat.from(context).areNotificationsEnabled()) {
                            NotificationManagerCompat.from(context).notify(download.request.id, TERMINAL_NOTIFICATION, notification)
                        }
                        notices.edit().putString(download.request.id, terminal).apply()
                    }
                } else {
                    notices.edit().remove(download.request.id).apply()
                }
                listeners.toList().forEach { it(download, false) }
            }

            override fun onDownloadRemoved(manager: DownloadManager, download: Download) {
                notices.edit().remove(download.request.id).apply()
                NotificationManagerCompat.from(context).cancel(download.request.id, TERMINAL_NOTIFICATION)
                listeners.toList().forEach { it(download, true) }
            }
        })
        ReactNativeVideoManager.getInstance().registerPlugin(KivoraOfflinePlugin(this))
    }

    fun cacheOnlyFactory(id: String) = cacheOnlyFactory(cache, id)

    fun snapshots(): List<Download> {
        val downloads = linkedMapOf<String, Download>()
        manager.downloadIndex.getDownloads().use { cursor ->
            while (cursor.moveToNext()) downloads[cursor.download.request.id] = cursor.download
        }
        manager.currentDownloads.forEach { downloads[it.request.id] = it }
        return downloads.values.toList()
    }

    companion object {
        const val CHANNEL = "kivora-adaptive-downloads"
        private const val TERMINAL_NOTIFICATION = 8232
        @Volatile private var instance: KivoraDownloads? = null
        fun get(context: Context): KivoraDownloads = instance ?: synchronized(this) {
            instance ?: KivoraDownloads(context.applicationContext).also { instance = it }
        }
        fun httpFactory(headers: Map<String, String>) = DefaultHttpDataSource.Factory().setDefaultRequestProperties(headers)
        fun cacheKeyFactory(id: String) = CacheKeyFactory { spec -> "${id.length}:$id:${CacheKeyFactory.DEFAULT.buildCacheKey(spec)}" }
        fun cacheOnlyFactory(cache: SimpleCache, id: String) = CacheDataSource.Factory().setCache(cache).setCacheKeyFactory(cacheKeyFactory(id))
            .setUpstreamDataSourceFactory(null).setCacheWriteDataSinkFactory(null)
        fun localUri(id: String) = "https://kivora-offline.invalid/" + Uri.encode(id)
        fun offlineId(uri: Uri?): String? = if (uri?.scheme == "https" && uri.host == "kivora-offline.invalid") uri.path?.removePrefix("/") else null
        fun title(download: Download): String = JSONObject(String(download.request.data, Charsets.UTF_8)).getString("title")
    }
}
