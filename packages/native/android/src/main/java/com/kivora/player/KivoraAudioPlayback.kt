package com.kivora.player

import android.os.Handler
import android.os.Looper
import android.os.SystemClock
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import com.brentvatne.exoplayer.RNVExoplayerPlugin

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
internal class KivoraAudioPlayback(private val expired: (String) -> Unit) : RNVExoplayerPlugin {
    private val main = Handler(Looper.getMainLooper())
    private val players = mutableMapOf<ExoPlayer, Player.Listener>()
    private val wakeManaged = mutableSetOf<ExoPlayer>()
    private var owner: String? = null
    private var uri: String? = null
    private var deadline: Long? = null
    private var episode = false
    private var sleepExpired = false
    private val timeout = Runnable { checkDeadline() }

    fun configure(owner: String, uri: String, deadlineMillis: Long?, episode: Boolean) {
        main.removeCallbacks(timeout)
        this.owner = owner
        this.uri = uri
        this.deadline = deadlineMillis?.let { SystemClock.elapsedRealtime() + (it - System.currentTimeMillis()).coerceAtLeast(0) }
        this.episode = episode
        sleepExpired = false
        players.keys.forEach { updateWakeMode(it) }
        deadline?.let { main.postDelayed(timeout, (it - SystemClock.elapsedRealtime()).coerceAtLeast(0)) }
    }

    fun clear(owner: String) {
        if (this.owner != owner) return
        main.removeCallbacks(timeout)
        this.owner = null; uri = null; deadline = null; episode = false; sleepExpired = false
        wakeManaged.forEach { it.setWakeMode(C.WAKE_MODE_NONE) }
        wakeManaged.clear()
    }

    private fun matches(player: ExoPlayer) = uri != null && player.currentMediaItem?.localConfiguration?.uri?.toString() == uri

    private fun updateWakeMode(player: ExoPlayer) {
        if (matches(player)) { player.setWakeMode(C.WAKE_MODE_NETWORK); wakeManaged.add(player) }
        else if (wakeManaged.remove(player)) player.setWakeMode(C.WAKE_MODE_NONE)
    }

    private fun checkDeadline() {
        if (sleepExpired) { players.keys.filter { matches(it) }.forEach { it.pause() }; return }
        if (deadline?.let { it <= SystemClock.elapsedRealtime() } == true) finish()
    }

    private fun finish() {
        val currentOwner = owner ?: return
        main.removeCallbacks(timeout)
        deadline = null; episode = false; sleepExpired = true
        players.keys.filter { matches(it) }.forEach { it.pause() }
        expired(currentOwner)
    }

    override fun onInstanceCreated(id: String, player: ExoPlayer) {
        val listener = object : Player.Listener {
            override fun onMediaItemTransition(mediaItem: MediaItem?, reason: Int) {
                updateWakeMode(player)
                if (matches(player)) checkDeadline()
            }
            override fun onPlayWhenReadyChanged(playWhenReady: Boolean, reason: Int) {
                if (playWhenReady && matches(player)) checkDeadline()
            }
            override fun onPlaybackStateChanged(playbackState: Int) {
                if (episode && matches(player) && playbackState == Player.STATE_ENDED) finish()
            }
        }
        players[player] = listener
        player.addListener(listener)
        updateWakeMode(player)
    }

    override fun onInstanceRemoved(id: String, player: ExoPlayer) {
        players.remove(player)?.let { player.removeListener(it) }
        wakeManaged.remove(player)
    }

    fun dispose() {
        main.removeCallbacks(timeout)
        players.forEach { (player, listener) -> player.removeListener(listener) }
        wakeManaged.forEach { it.setWakeMode(C.WAKE_MODE_NONE) }; wakeManaged.clear()
        players.clear(); owner = null; uri = null; deadline = null; episode = false
    }
}
