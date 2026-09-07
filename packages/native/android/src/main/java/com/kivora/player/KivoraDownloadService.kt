package com.kivora.player

import android.app.Notification
import androidx.media3.exoplayer.offline.Download
import androidx.media3.exoplayer.offline.DownloadService
import androidx.media3.exoplayer.scheduler.PlatformScheduler
import androidx.media3.exoplayer.scheduler.Scheduler
import com.kivora.upload.R

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
class KivoraDownloadService : DownloadService(8231, 500L, KivoraDownloads.CHANNEL, R.string.kivora_download_channel, 0) {
    override fun getDownloadManager() = KivoraDownloads.get(this).manager
    override fun getScheduler(): Scheduler = PlatformScheduler(this, 8233)
    override fun getForegroundNotification(downloads: MutableList<Download>, notMetRequirements: Int): Notification {
        val message = downloads.joinToString("\n") { "${KivoraDownloads.title(it)} · ${it.request.uri.host.orEmpty()}" }
        return KivoraDownloads.get(this).notificationHelper.buildProgressNotification(
            this, android.R.drawable.stat_sys_download, null, message, downloads, notMetRequirements,
        )
    }
}
