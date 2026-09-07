package com.kivora.player

import android.net.Uri
import androidx.media3.database.StandaloneDatabaseProvider
import androidx.media3.datasource.DataSpec
import androidx.media3.datasource.cache.NoOpCacheEvictor
import androidx.media3.datasource.cache.SimpleCache
import org.junit.Assert.assertArrayEquals
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Assert.assertThrows
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.RuntimeEnvironment
import org.robolectric.annotation.Config
import java.io.IOException
import java.nio.file.Files

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [28])
@androidx.annotation.OptIn(androidx.media3.common.util.UnstableApi::class)
class KivoraOfflineTest {
    @Test
    fun offlineIdentifiersRoundTripWithoutInterceptingRemoteHosts() {
        val id = "video/á space?part=1#track"
        assertEquals(id, KivoraDownloads.offlineId(Uri.parse(KivoraDownloads.localUri(id))))
        assertNull(KivoraDownloads.offlineId(Uri.parse("https://example.com/clip.m3u8")))
        assertNull(KivoraDownloads.offlineId(Uri.parse("https://kivora-offline.invalid.attacker.test/id")))
        assertNull(KivoraDownloads.offlineId(Uri.parse("http://kivora-offline.invalid/id")))
    }

    @Test
    fun cachedSegmentsReadAndMissingSegmentsFailWithoutUpstream() {
        val directory = Files.createTempDirectory("kivora-cache-test").toFile()
        val database = StandaloneDatabaseProvider(RuntimeEnvironment.getApplication())
        val cache = SimpleCache(directory, NoOpCacheEvictor(), database)
        val uri = Uri.parse("https://example.com/segment.ts")
        val bytes = byteArrayOf(1, 2, 3, 4)
        val spec = DataSpec.Builder().setUri(uri).setLength(bytes.size.toLong()).build()
        for (id in listOf("A", "B")) {
            val key = KivoraDownloads.cacheKeyFactory(id).buildCacheKey(spec)
            val hole = cache.startReadWrite(key, 0, bytes.size.toLong())
            val file = cache.startFile(key, 0, bytes.size.toLong())
            file.writeBytes(bytes)
            cache.commitFile(file, bytes.size.toLong())
            cache.releaseHoleSpan(hole)
        }
        cache.removeResource(KivoraDownloads.cacheKeyFactory("A").buildCacheKey(spec))
        val source = KivoraDownloads.cacheOnlyFactory(cache, "B").createDataSource()
        try {
            source.open(DataSpec.Builder().setUri(uri).setLength(bytes.size.toLong()).build())
            val actual = ByteArray(bytes.size)
            assertEquals(bytes.size, source.read(actual, 0, actual.size))
            assertArrayEquals(bytes, actual)
            source.close()
            assertThrows(IOException::class.java) {
                source.open(DataSpec.Builder().setUri("https://example.com/missing.ts").build())
            }
            assertEquals(bytes.size.toLong(), cache.cacheSpace)
        } finally {
            source.close()
            cache.release()
            database.close()
            directory.deleteRecursively()
        }
    }
}
