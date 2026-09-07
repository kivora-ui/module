import { describe, expect, it } from 'vitest';
import type { DRMType } from 'react-native-video';
import { OfflineDownloadManager, OfflineUnsupportedError, type OfflineFileSystem } from './offline';
import type { PlayerSource } from './types';

function createFakeFileSystem(): OfflineFileSystem & { files: Map<string, string> } {
  const files = new Map<string, string>();
  let nextJobId = 1;
  return {
    files,
    documentDirectoryPath: '/fake/documents',
    exists: async path => files.has(path),
    mkdir: async () => {},
    readFile: async path => {
      const value = files.get(path);
      if (value === undefined) throw new Error('ENOENT: no such file');
      return value;
    },
    writeFile: async (path, contents) => { files.set(path, contents); },
    unlink: async path => {
      if (!files.has(path)) throw new Error('ENOENT: no such file');
      files.delete(path);
    },
    downloadFile: ({ toFile, progress }) => {
      const jobId = nextJobId++;
      const promise = (async () => {
        progress?.({ bytesWritten: 100, contentLength: 100 });
        files.set(toFile, 'fake-mp4-bytes');
        return { statusCode: 200 };
      })();
      return { jobId, promise };
    },
    stopDownload: () => {},
  };
}

const dashSource: PlayerSource = { id: 'dash', title: 'Sintel', src: 'https://example.com/dash.mpd', mimeType: 'application/dash+xml' };
const hlsSource: PlayerSource = { id: 'hls', title: 'Angel One', src: 'https://example.com/hls.m3u8', mimeType: 'application/x-mpegurl' };
const drmSource: PlayerSource = { id: 'drm-film', title: 'Protected film', src: 'https://example.com/film.mp4', mimeType: 'video/mp4', nativeSource: { drm: { type: 'widevine' as DRMType } } };
const mp4Source: PlayerSource = { id: 'flower', title: 'Flower', src: 'https://example.com/flower.mp4', mimeType: 'video/mp4' };

describe('OfflineDownloadManager — unsupported sources', () => {
  it('rejects DASH sources immediately with reason "segmented-format"', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(dashSource)).rejects.toMatchObject({ reason: 'segmented-format', sourceId: 'dash' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects HLS sources immediately with reason "segmented-format"', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(hlsSource)).rejects.toBeInstanceOf(OfflineUnsupportedError);
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects DRM sources immediately when no drmProvider is configured', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(drmSource)).rejects.toMatchObject({ reason: 'drm', sourceId: 'drm-film' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('does not reject a plain progressive MP4 source', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(mp4Source)).resolves.toBeUndefined();
  });
});
