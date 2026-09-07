package com.kivora.player

import androidx.media3.common.MediaItem
import androidx.media3.datasource.DataSource
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.exoplayer.source.DefaultMediaSourceFactory
import androidx.media3.exoplayer.source.MediaSource
import com.brentvatne.common.api.Source
import com.brentvatne.exoplayer.RNVExoplayerPlugin

@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
internal class KivoraOfflinePlugin(private val downloads: KivoraDownloads) : RNVExoplayerPlugin {
    override fun overrideMediaDataSourceFactory(source: Source, mediaDataSourceFactory: DataSource.Factory): DataSource.Factory? =
        KivoraDownloads.offlineId(source.uri)?.let { downloads.cacheOnlyFactory(it) }

    override fun overrideMediaSourceFactory(source: Source, mediaSourceFactory: MediaSource.Factory, mediaDataSourceFactory: DataSource.Factory): MediaSource.Factory? =
        KivoraDownloads.offlineId(source.uri)?.let { DefaultMediaSourceFactory(downloads.cacheOnlyFactory(it)) }

    override fun overrideMediaItemBuilder(source: Source, mediaItemBuilder: MediaItem.Builder): MediaItem.Builder? {
        val id = KivoraDownloads.offlineId(source.uri) ?: return null
        val request = downloads.manager.downloadIndex.getDownload(id)?.request
        return request?.toMediaItem()?.buildUpon() ?: mediaItemBuilder
    }

    override fun shouldDisableCache(source: Source) = KivoraDownloads.offlineId(source.uri) != null
    override fun onInstanceCreated(id: String, player: ExoPlayer) = Unit
    override fun onInstanceRemoved(id: String, player: ExoPlayer) = Unit
}
