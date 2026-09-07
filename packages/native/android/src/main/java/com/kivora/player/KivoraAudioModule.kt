package com.kivora.player

import android.os.Handler
import android.os.Looper
import com.brentvatne.react.ReactNativeVideoManager
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
class KivoraAudioModule(private val context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    private val main = Handler(Looper.getMainLooper())
    private val playback = KivoraAudioPlayback { owner ->
        if (context.hasActiveReactInstance()) context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("KivoraAudioSleepExpired", Arguments.createMap().apply { putString("owner", owner) })
    }
    override fun getName() = "KivoraAudio"
    override fun initialize() {
        super.initialize()
        main.post { ReactNativeVideoManager.getInstance().registerPlugin(playback) }
    }
    @ReactMethod
    fun configure(owner: String, uri: String, deadline: Double?, episode: Boolean) {
        main.post { playback.configure(owner, uri, deadline?.toLong(), episode) }
    }
    @ReactMethod
    fun clear(owner: String) { main.post { playback.clear(owner) } }
    @ReactMethod
    fun addListener(event: String) = Unit
    @ReactMethod
    fun removeListeners(count: Int) = Unit
    override fun invalidate() {
        main.post { playback.dispose(); ReactNativeVideoManager.getInstance().unregisterPlugin(playback) }
        super.invalidate()
    }
}
