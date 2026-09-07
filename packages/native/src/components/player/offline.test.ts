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

describe('OfflineDownloadManager — downloading a supported MP4 source', () => {
  it('transitions queued → downloading → downloaded and exposes a playable local source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
    const snapshots: string[][] = [];
    manager.subscribe(() => snapshots.push(manager.getSnapshot().map(entry => entry.state)));

    await manager.download(mp4Source);

    expect(snapshots).toContainEqual(['queued']);
    expect(snapshots).toContainEqual(['downloading']);
    expect(snapshots).toContainEqual(['downloaded']);
    const [entry] = manager.getSnapshot();
    expect(entry).toMatchObject({ id: 'flower', state: 'downloaded', progress: 1 });
    expect(entry!.localUri).toContain('flower');
    expect(fs.files.has(entry!.localUri!)).toBe(true);

    const playable = manager.getPlaybackSource('flower');
    expect(playable).toMatchObject({ id: 'flower', title: 'Flower' });
    expect(playable!.src).toBe(`file://${entry!.localUri}`);
  });

  it('reports growing progress while the download is in flight', async () => {
    const fs = createFakeFileSystem();
    fs.downloadFile = ({ toFile, progress }) => {
      const promise = (async () => {
        progress?.({ bytesWritten: 25, contentLength: 100 });
        progress?.({ bytesWritten: 100, contentLength: 100 });
        fs.files.set(toFile, 'fake-mp4-bytes');
        return { statusCode: 200 };
      })();
      return { jobId: 1, promise };
    };
    const manager = new OfflineDownloadManager(fs);
    const progressValues: number[] = [];
    manager.subscribe(() => { progressValues.push(manager.getSnapshot()[0]!.progress); });

    await manager.download(mp4Source);

    expect(progressValues).toContain(0.25);
    expect(progressValues[progressValues.length - 1]).toBe(1);
  });

  it('does not start a second download for an id already downloaded', async () => {
    const fs = createFakeFileSystem();
    let downloadCalls = 0;
    const originalDownloadFile = fs.downloadFile;
    fs.downloadFile = options => { downloadCalls++; return originalDownloadFile(options); };
    const manager = new OfflineDownloadManager(fs);

    await manager.download(mp4Source);
    await manager.download(mp4Source);

    expect(downloadCalls).toBe(1);
  });
});

describe('OfflineDownloadManager — download failures', () => {
  it('marks the entry as errored on a non-2xx HTTP status, without throwing', async () => {
    const fs = createFakeFileSystem();
    fs.downloadFile = () => ({ jobId: 1, promise: Promise.resolve({ statusCode: 404 }) });
    const manager = new OfflineDownloadManager(fs);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'HTTP 404' });
  });

  it('marks the entry as errored when the download promise rejects, without throwing', async () => {
    const fs = createFakeFileSystem();
    fs.downloadFile = () => ({ jobId: 1, promise: Promise.reject(new Error('network offline')) });
    const manager = new OfflineDownloadManager(fs);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'network offline' });
  });

  it('retries a previously errored download', async () => {
    const fs = createFakeFileSystem();
    let attempt = 0;
    fs.downloadFile = ({ toFile }) => {
      attempt++;
      if (attempt === 1) return { jobId: 1, promise: Promise.resolve({ statusCode: 500 }) };
      fs.files.set(toFile, 'fake-mp4-bytes');
      return { jobId: 2, promise: Promise.resolve({ statusCode: 200 }) };
    };
    const manager = new OfflineDownloadManager(fs);

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error' });

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'downloaded' });
  });
});
