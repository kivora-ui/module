package com.kivora.player

import android.os.Looper
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.RuntimeEnvironment
import org.robolectric.Shadows.shadowOf
import org.robolectric.annotation.Config
import java.time.Duration

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [28])
@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
class KivoraAudioTest {
    @Test
    fun deadlinePausesOnlyTheBoundAudioWithoutJavascript() {
        val events = mutableListOf<String>()
        val audio = KivoraAudioPlayback { events.add(it) }
        val player = ExoPlayer.Builder(RuntimeEnvironment.getApplication()).build()
        val other = ExoPlayer.Builder(RuntimeEnvironment.getApplication()).build()
        audio.onInstanceCreated("audio", player)
        audio.onInstanceCreated("video", other)
        player.setMediaItem(MediaItem.fromUri("https://example.com/audio.mp3"))
        other.setMediaItem(MediaItem.fromUri("https://example.com/video.mp4"))
        player.play(); other.play()
        audio.configure("owner", "https://example.com/audio.mp3", System.currentTimeMillis() + 1000, false)
        shadowOf(Looper.getMainLooper()).idleFor(Duration.ofSeconds(2))
        assertFalse(player.playWhenReady)
        assertTrue(other.playWhenReady)
        assertEquals(listOf("owner"), events)
        audio.dispose(); player.release(); other.release()
    }

    @Test
    fun replacingAndCancellingDeadlineDoesNotPauseTheNextOwner() {
        val audio = KivoraAudioPlayback {}
        val player = ExoPlayer.Builder(RuntimeEnvironment.getApplication()).build()
        audio.onInstanceCreated("audio", player)
        player.setMediaItem(MediaItem.fromUri("https://example.com/audio.mp3")); player.play()
        audio.configure("old", "https://example.com/audio.mp3", System.currentTimeMillis() + 1000, false)
        audio.configure("next", "https://example.com/audio.mp3", null, false)
        audio.clear("old")
        shadowOf(Looper.getMainLooper()).idleFor(Duration.ofSeconds(2))
        assertTrue(player.playWhenReady)
        audio.dispose(); player.release()
    }
}
