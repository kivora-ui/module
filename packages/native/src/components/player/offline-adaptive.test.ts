import { describe, expect, it, vi } from 'vitest';
import { createAdaptiveTransport, type AdaptiveDownload } from './offline-adaptive';

function setup(downloads: AdaptiveDownload[] = []) {
  let listener: (download: AdaptiveDownload) => void = () => {};
  const native = { start: vi.fn(async () => {}), remove: vi.fn(async () => {}), getDownloads: vi.fn(async () => downloads) };
  const transport = createAdaptiveTransport(native, callback => { listener = callback; });
  const callbacks = { onProgress: vi.fn(), onDone: vi.fn(), onError: vi.fn() };
  const start = () => transport.start({ id: 'hls', fromUrl: 'https://example.com/master.m3u8', toFile: '/unused', title: 'Film', mimeType: 'application/x-mpegurl', headers: { Authorization: 'Bearer test' }, ...callbacks });
  return { native, transport, callbacks, start, emit: (download: AdaptiveDownload) => listener(download) };
}

describe('adaptive download bridge', () => {
  it('forwards request metadata and reports native completion once', () => {
    const { native, callbacks, start, emit } = setup();
    start();
    expect(native.start).toHaveBeenCalledWith({ id: 'hls', url: 'https://example.com/master.m3u8', title: 'Film', mimeType: 'application/x-mpegurl', headers: { Authorization: 'Bearer test' } });
    emit({ id: 'hls', state: 'downloading', progress: 0.5 });
    expect(callbacks.onProgress).toHaveBeenCalledWith({ bytesWritten: 0.5, contentLength: 1 });
    const done: AdaptiveDownload = { id: 'hls', state: 'downloaded', progress: 1, localUri: 'https://kivora-offline.invalid/hls' };
    emit(done);
    emit(done);
    expect(callbacks.onDone).toHaveBeenCalledOnce();
    expect(callbacks.onDone).toHaveBeenCalledWith(done.localUri, true);
  });

  it('recovers completed downloads and subscribes to active downloads after restart', async () => {
    const done: AdaptiveDownload = { id: 'hls', state: 'downloaded', progress: 1, localUri: 'https://kivora-offline.invalid/hls' };
    const { transport, emit } = setup([done, { id: 'dash', state: 'queued', progress: 0 }]);
    const callbacks = { onProgress: vi.fn(), onDone: vi.fn(), onError: vi.fn() };
    expect(await transport.resumeExisting(callbacks)).toEqual(['hls', 'dash']);
    expect(callbacks.onDone).toHaveBeenCalledWith('hls', done.localUri, true);
    emit({ id: 'dash', state: 'error', progress: 0, error: 'No space' });
    expect(callbacks.onError).toHaveBeenCalledWith('dash', 'No space');
  });

  it('waits for native removal and ignores preparation errors after cancellation', async () => {
    const { native, transport, callbacks, start, emit } = setup();
    let rejectStart!: (error: Error) => void;
    native.start.mockImplementation(() => new Promise((_, reject) => { rejectStart = reject; }));
    let finishRemoval!: () => void;
    native.remove.mockImplementation(() => new Promise(resolve => { finishRemoval = resolve; }));
    start();
    const removed = vi.fn();
    const pending = Promise.resolve(transport.stop('hls')).then(removed);
    rejectStart(new Error('Cancelled'));
    emit({ id: 'hls', state: 'error', progress: 0, error: 'Cancelled' });
    await Promise.resolve();
    expect(removed).not.toHaveBeenCalled();
    expect(callbacks.onError).not.toHaveBeenCalled();
    finishRemoval();
    await pending;
    expect(removed).toHaveBeenCalledOnce();
  });

  it('reports preparation failures', async () => {
    const { native, callbacks, start } = setup();
    native.start.mockRejectedValue(new Error('Live streams are unsupported'));
    start();
    await Promise.resolve();
    expect(callbacks.onError).toHaveBeenCalledWith('Live streams are unsupported');
  });

  it('retains completion arriving while restart snapshots are being fetched', async () => {
    const { native, transport, emit } = setup();
    let resolveSnapshots!: (downloads: AdaptiveDownload[]) => void;
    native.getDownloads.mockImplementation(() => new Promise(resolve => { resolveSnapshots = resolve; }));
    const callbacks = { onProgress: vi.fn(), onDone: vi.fn(), onError: vi.fn() };
    const pending = transport.resumeExisting(callbacks);
    emit({ id: 'hls', state: 'downloaded', progress: 1, localUri: 'https://kivora-offline.invalid/hls' });
    resolveSnapshots([{ id: 'hls', state: 'downloading', progress: 0.9 }]);
    await pending;
    expect(callbacks.onDone).toHaveBeenCalledWith('hls', 'https://kivora-offline.invalid/hls', true);
  });

  it('settles an interrupted removal recovered after restart', async () => {
    const { transport, emit } = setup([{ id: 'hls', state: 'queued', progress: 0.5 }]);
    const callbacks = { onProgress: vi.fn(), onDone: vi.fn(), onError: vi.fn() };
    await transport.resumeExisting(callbacks);
    emit({ id: 'hls', state: 'removed', progress: 0.5 });
    expect(callbacks.onError).toHaveBeenCalledWith('hls', 'Download removed');
  });
});
