import { describe, expect, it } from 'vitest';
import type { DRMType } from 'react-native-video';
import { OfflineDownloadManager, OfflineUnsupportedError, type OfflineFileSystem, type OfflineTransport } from './offline';
import type { OfflineDownloadEntry, PlayerSource } from './types';

function createFakeFileSystem(): OfflineFileSystem & { files: Map<string, string> } {
  const files = new Map<string, string>();
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
  };
}

type FakeJob = { id: string; toFile: string; onProgress: (p: { bytesWritten: number; contentLength: number }) => void; onDone: () => void; onError: (message: string) => void };

/** Fake transport: by default it "succeeds instantly" on `start`, writing the file
 * into the shared `files` map. Tests override `startImpl` to simulate progress,
 * failures, or a never-resolving in-flight job. */
function createFakeTransport(files: Map<string, string>) {
  const stopped: string[] = [];
  const jobs = new Map<string, FakeJob>();
  let startImpl: (job: FakeJob) => void = job => {
    job.onProgress({ bytesWritten: 100, contentLength: 100 });
    files.set(job.toFile, 'fake-mp4-bytes');
    job.onDone();
  };
  const transport: OfflineTransport & { stopped: string[]; setStartImpl: (impl: (job: FakeJob) => void) => void } = {
    stopped,
    setStartImpl: impl => { startImpl = impl; },
    start: ({ id, fromUrl, toFile, onProgress, onDone, onError }) => {
      const job: FakeJob = { id, toFile, onProgress, onDone, onError };
      jobs.set(id, job);
      void fromUrl;
      startImpl(job);
    },
    stop: id => { stopped.push(id); jobs.delete(id); },
    resumeExisting: async () => [],
  };
  return transport;
}

const dashSource: PlayerSource = { id: 'dash', title: 'Sintel', src: 'https://example.com/dash.mpd', mimeType: 'application/dash+xml' };
const hlsSource: PlayerSource = { id: 'hls', title: 'Angel One', src: 'https://example.com/hls.m3u8', mimeType: 'application/x-mpegurl' };
const drmSource: PlayerSource = { id: 'drm-film', title: 'Protected film', src: 'https://example.com/film.mp4', mimeType: 'video/mp4', nativeSource: { drm: { type: 'widevine' as DRMType } } };
const mp4Source: PlayerSource = { id: 'flower', title: 'Flower', src: 'https://example.com/flower.mp4', mimeType: 'video/mp4' };

describe('OfflineDownloadManager — unsupported sources', () => {
  it('rejects DASH sources immediately with reason "segmented-format"', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(dashSource)).rejects.toMatchObject({ reason: 'segmented-format', sourceId: 'dash' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects HLS sources immediately with reason "segmented-format"', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(hlsSource)).rejects.toBeInstanceOf(OfflineUnsupportedError);
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects DRM sources immediately when no drmProvider is configured', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(drmSource)).rejects.toMatchObject({ reason: 'drm', sourceId: 'drm-film' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('does not reject a plain progressive MP4 source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(mp4Source)).resolves.toBeUndefined();
  });
});

describe('OfflineDownloadManager — downloading a supported MP4 source', () => {
  it('transitions queued → downloading → downloaded and exposes a playable local source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
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
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => {
      job.onProgress({ bytesWritten: 25, contentLength: 100 });
      job.onProgress({ bytesWritten: 100, contentLength: 100 });
      fs.files.set(job.toFile, 'fake-mp4-bytes');
      job.onDone();
    });
    const manager = new OfflineDownloadManager(fs, transport);
    const progressValues: number[] = [];
    manager.subscribe(() => { progressValues.push(manager.getSnapshot()[0]!.progress); });

    await manager.download(mp4Source);

    expect(progressValues).toContain(0.25);
    expect(progressValues[progressValues.length - 1]).toBe(1);
  });

  it('does not start a second download for an id already downloaded', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    let startCalls = 0;
    const original = transport.start;
    transport.start = options => { startCalls++; original(options); };
    const manager = new OfflineDownloadManager(fs, transport);

    await manager.download(mp4Source);
    await manager.download(mp4Source);

    expect(startCalls).toBe(1);
  });
});

describe('OfflineDownloadManager — download failures', () => {
  it('marks the entry as errored on a transport error, without throwing', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('HTTP 404'));
    const manager = new OfflineDownloadManager(fs, transport);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'HTTP 404' });
  });

  it('marks the entry as errored when the transport reports a network failure', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('network offline'));
    const manager = new OfflineDownloadManager(fs, transport);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'network offline' });
  });

  it('retries a previously errored download', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    let attempt = 0;
    transport.setStartImpl(job => {
      attempt++;
      if (attempt === 1) { job.onError('server error'); return; }
      fs.files.set(job.toFile, 'fake-mp4-bytes');
      job.onDone();
    });
    const manager = new OfflineDownloadManager(fs, transport);

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error' });

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'downloaded' });
  });
});

describe('OfflineDownloadManager — persisting in-flight downloads', () => {
  it('persists the downloading state before the transfer starts, so a fresh manager resumes it after a real app kill', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(() => {}); // never calls onDone/onError — stays in-flight, like a real transfer surviving a kill

    const manager = new OfflineDownloadManager(fs, transport);
    const pending = manager.download(mp4Source);
    void pending; // deliberately left unresolved: this download is still "in flight" when the app is killed

    // Let the manifest write inside download() settle before simulating the restart.
    await new Promise(resolve => setTimeout(resolve, 0));

    // The manifest on disk must already carry the still-downloading entry —
    // this is what a fresh launch's resumeAll() reads to decide what to
    // resume, and it must be written *before* the transfer starts, not only
    // once it finishes.
    const manifestRaw = fs.files.get('/fake/documents/kivora-downloads/manifest.json');
    expect(manifestRaw).toBeDefined();
    const manifest = JSON.parse(manifestRaw!) as OfflineDownloadEntry[];
    expect(manifest).toMatchObject([{ id: 'flower', state: 'downloading' }]);

    // Simulate a real app kill + relaunch: a brand-new manager over the same
    // file system/manifest, with its own fresh, instrumented fake transport
    // that records whether resumeExisting was called and with which
    // still-downloading ids the manager expected to resume.
    const resumeCalledWithIds: string[] = [];
    const freshTransport = createFakeTransport(fs.files);
    freshTransport.resumeExisting = async () => {
      // The manager doesn't pass ids as an argument — it derives which ids to
      // ask about from the manifest already loaded into `this.state`, then
      // unconditionally invokes resumeExisting(). Record that this happened,
      // and independently assert (above) that the manifest driving it names
      // the right id.
      resumeCalledWithIds.push('flower');
      return [];
    };

    const restarted = new OfflineDownloadManager(fs, freshTransport);
    await new Promise(resolve => setTimeout(resolve, 0));

    // resumeExisting must have been invoked (proving resumeAll() did not bail
    // out early on an empty/stale manifest) for the still-downloading id.
    expect(resumeCalledWithIds).toEqual(['flower']);
    expect(restarted.getSnapshot().some(entry => entry.id === 'flower')).toBe(true);
  });
});

describe('OfflineDownloadManager — resuming after app restart', () => {
  it('re-attaches to a transfer that survived a restart and completes it', async () => {
    const fs = createFakeFileSystem();
    // Seed the manifest with a downloading entry
    const entry: OfflineDownloadEntry = { id: 'flower', source: mp4Source, state: 'downloading', progress: 0.5, localUri: '/fake/documents/kivora-downloads/flower.mp4' };
    await fs.writeFile('/fake/documents/kivora-downloads/manifest.json', JSON.stringify([entry]));

    const transport = createFakeTransport(fs.files);
    let resumeCallbacks: any;
    transport.resumeExisting = async callbacks => {
      resumeCallbacks = callbacks;
      return ['flower']; // found this transfer
    };
    const manager = new OfflineDownloadManager(fs, transport);
    await new Promise(resolve => setTimeout(resolve, 0)); // let resume settle

    // Simulate the transfer completing
    resumeCallbacks.onProgress('flower', { bytesWritten: 100, contentLength: 100 });
    fs.files.set(entry.localUri!, 'fake-mp4-bytes');
    resumeCallbacks.onDone('flower');
    await new Promise(resolve => setTimeout(resolve, 0)); // let handlers settle

    const [result] = manager.getSnapshot();
    expect(result).toMatchObject({ id: 'flower', state: 'downloaded', progress: 1, localUri: '/fake/documents/kivora-downloads/flower.mp4' });
  });

  it('marks a lost transfer as interrupted when it was not found on resume', async () => {
    const fs = createFakeFileSystem();
    // Seed the manifest with a downloading entry
    const entry: OfflineDownloadEntry = { id: 'flower', source: mp4Source, state: 'downloading', progress: 0.3, localUri: '/fake/documents/kivora-downloads/flower.mp4' };
    await fs.writeFile('/fake/documents/kivora-downloads/manifest.json', JSON.stringify([entry]));

    const transport = createFakeTransport(fs.files);
    transport.resumeExisting = async () => []; // found no transfers

    const manager = new OfflineDownloadManager(fs, transport);
    await new Promise(resolve => setTimeout(resolve, 0)); // let resume settle

    const [result] = manager.getSnapshot();
    expect(result).toMatchObject({ id: 'flower', state: 'error', error: 'Download interrupted' });

    // Verify the error is persisted
    const restarted = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(restarted.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'Download interrupted' });
  });

  it('does not throw when resumeExisting rejects, and marks pending entries as interrupted', async () => {
    const fs = createFakeFileSystem();
    // Seed the manifest with a downloading entry
    const entry: OfflineDownloadEntry = { id: 'flower', source: mp4Source, state: 'downloading', progress: 0, localUri: '/fake/documents/kivora-downloads/flower.mp4' };
    await fs.writeFile('/fake/documents/kivora-downloads/manifest.json', JSON.stringify([entry]));

    const transport = createFakeTransport(fs.files);
    transport.resumeExisting = async () => { throw new Error('resume service down'); };

    const manager = new OfflineDownloadManager(fs, transport);
    await new Promise(resolve => setTimeout(resolve, 0)); // let resume settle (should not throw)

    const [result] = manager.getSnapshot();
    expect(result).toMatchObject({ id: 'flower', state: 'error', error: 'Download interrupted' });

    // Manager should still be usable: a new download should not throw
    const anotherSource: PlayerSource = { id: 'garden', title: 'Garden', src: 'https://example.com/garden.mp4', mimeType: 'video/mp4' };
    await expect(manager.download(anotherSource)).resolves.toBeUndefined();
    expect(manager.getSnapshot().length).toBe(2);
  });

  it('invokes onDownloadComplete when a resumed transfer completes', async () => {
    const fs = createFakeFileSystem();
    const entry: OfflineDownloadEntry = { id: 'flower', source: mp4Source, state: 'downloading', progress: 0, localUri: '/fake/documents/kivora-downloads/flower.mp4' };
    await fs.writeFile('/fake/documents/kivora-downloads/manifest.json', JSON.stringify([entry]));

    const transport = createFakeTransport(fs.files);
    let resumeCallbacks: any;
    transport.resumeExisting = async callbacks => {
      resumeCallbacks = callbacks;
      return ['flower'];
    };

    const onCompleteCalls: OfflineDownloadEntry[] = [];
    const manager = new OfflineDownloadManager(fs, transport, undefined, (entry) => onCompleteCalls.push(entry));
    await new Promise(resolve => setTimeout(resolve, 0)); // let resume settle

    // Simulate the transfer completing
    fs.files.set(entry.localUri!, 'fake-mp4-bytes');
    resumeCallbacks.onDone('flower');
    await new Promise(resolve => setTimeout(resolve, 0)); // let handlers settle

    expect(onCompleteCalls).toHaveLength(1);
    expect(onCompleteCalls[0]).toMatchObject({ id: 'flower', state: 'downloaded' });
  });
});

describe('OfflineDownloadManager — manifest persistence', () => {
  it('persists a downloaded entry and reloads it in a fresh manager instance', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);

    // Simulate an app restart: a brand-new manager over the same file system.
    const restarted = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0)); // let the async manifest load settle
    expect(restarted.getSnapshot()).toMatchObject([{ id: 'flower', state: 'downloaded' }]);
  });

  it('starts empty when no manifest file exists yet', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(manager.getSnapshot()).toEqual([]);
  });
});

describe('OfflineDownloadManager — remove', () => {
  it('deletes the local file and the manifest entry for a downloaded item', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);
    const [entry] = manager.getSnapshot();
    const localUri = entry!.localUri!;

    await manager.remove('flower');

    expect(manager.getSnapshot()).toEqual([]);
    expect(fs.files.has(localUri)).toBe(false);

    const restarted = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(restarted.getSnapshot()).toEqual([]);
  });

  it('cancels an in-flight download job before removing it', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(() => {}); // never calls onDone/onError — stays in flight
    const manager = new OfflineDownloadManager(fs, transport);

    const pending = manager.download(mp4Source);
    await manager.remove('flower');

    expect(transport.stopped).toEqual(['flower']);
    expect(manager.getSnapshot()).toEqual([]);
    // remove() must settle the caller's download() promise even though the
    // stopped transport job never calls onDone/onError itself.
    await expect(pending).resolves.toBeUndefined();
  });

  it('does not throw when removing an id whose file is already gone', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);
    const [entry] = manager.getSnapshot();
    fs.files.delete(entry!.localUri!); // simulate the file having disappeared out-of-band

    await expect(manager.remove('flower')).resolves.toBeUndefined();
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('is a no-op for an id that was never downloaded', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.remove('does-not-exist')).resolves.toBeUndefined();
  });
});

describe('OfflineDownloadManager — completion callback', () => {
  it('calls onDownloadComplete exactly once, with the finished entry, on success', async () => {
    const fs = createFakeFileSystem();
    const completed: OfflineDownloadEntry[] = [];
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files), undefined, entry => completed.push(entry));

    await manager.download(mp4Source);

    expect(completed).toHaveLength(1);
    expect(completed[0]).toMatchObject({ id: 'flower', state: 'downloaded' });
  });

  it('does not call onDownloadComplete when the download errors', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('network offline'));
    const completed: OfflineDownloadEntry[] = [];
    const manager = new OfflineDownloadManager(fs, transport, undefined, entry => completed.push(entry));

    await manager.download(mp4Source);

    expect(completed).toEqual([]);
  });
});
