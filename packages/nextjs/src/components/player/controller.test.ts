import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PlayerController, playerTime, validatePlayerSource } from './controller';
import type { PlayerEvent } from './types';

const mocks = vi.hoisted(() => ({ players: [] as any[], load: vi.fn(async () => {}), ad: null as any }));
vi.mock('shaka-player', () => {
  class Engine extends EventTarget {
    static isBrowserSupported = () => true;
    media?: HTMLVideoElement;
    config: any = { abr: { enabled: true }, drm: {} };
    network = { registerRequestFilter: vi.fn(), unregisterRequestFilter: vi.fn(), registerResponseFilter: vi.fn(), unregisterResponseFilter: vi.fn() };
    ads = Object.assign(new EventTarget(), { setContainers: vi.fn(), addCustomInterstitial: vi.fn(), addAdUrlInterstitial: vi.fn(async () => {}), getCurrentAd: () => mocks.ad });
    destroy = vi.fn(async () => {});
    constructor() { super(); mocks.players.push(this); }
    attach = async (media: HTMLVideoElement) => { this.media = media; };
    load = mocks.load;
    addThumbnailsTrack = vi.fn(async () => ({}));
    getThumbnails = vi.fn(async () => null as any);
    unload = vi.fn(async () => {});
    resetConfiguration = vi.fn(() => { this.config = { abr: { enabled: true }, drm: {} }; });
    configure = vi.fn((config: any) => { Object.assign(this.config, config); return true; });
    getConfiguration = () => this.config;
    getNetworkingEngine = () => this.network;
    getAdManager = () => this.ads;
    getAudioTracks = () => [];
    getVideoTracks = () => [];
    getTextTracks = () => [];
    seekRange = () => ({ start: 5, end: 100 });
    isLive = () => false;
    getStats = () => ({});
  }
  return { default: { Player: Engine, polyfill: { installAll: vi.fn() }, offline: { Storage: { support: () => true } } } };
});
beforeEach(() => {
  mocks.players.length = 0;
  mocks.ad = null;
  mocks.load.mockReset().mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function () { return Promise.resolve(); });
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
});
const source = { id: 'one', src: 'https://media.example/a.mpd', title: 'One' };
function connect(controller: PlayerController) {
  const media = document.createElement('video');
  const intro = document.createElement('video');
  const disconnect = controller.connect(media, intro, document.createElement('div'), document.createElement('div'));
  return { media, intro, disconnect };
}
describe('PlayerController lifecycle and policy', () => {
  it('does not create browser resources on construction, and validates URLs and duplicate plugins', () => {
    const controller = new PlayerController();
    expect(controller.getSnapshot().phase).toBe('idle');
    expect(mocks.players).toHaveLength(0);
    expect(() => validatePlayerSource({ ...source, src: 'javascript:alert(1)' })).toThrow();
    expect(() => new PlayerController({ plugins: [{ id: 'a', setup() {} }, { id: 'a', setup() {} }] })).toThrow();
    expect(playerTime(Infinity)).toBe('0:00');
    expect(playerTime(3661)).toBe('1:01:01');
  });
  it('waits for explicit play before requesting ads and clamps seeking to the DVR range', async () => {
    const controller = new PlayerController();
    const { disconnect, media } = connect(controller);
    await controller.loadSource({ ...source, ads: { tagUrl: 'https://ads.example/vast' } });
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    const engine = mocks.players[0];
    expect(engine.ads.addAdUrlInterstitial).not.toHaveBeenCalled();
    controller.seek(-10); expect(media.currentTime).toBe(5);
    controller.seek(999); expect(media.currentTime).toBe(100);
    await controller.play(); await controller.play();
    expect(engine.ads.addAdUrlInterstitial).toHaveBeenCalledTimes(1);
    disconnect();
    await vi.waitFor(() => expect(engine.destroy).toHaveBeenCalledTimes(1));
  });
  it('clears DRM and only the source network filters when moving to clear content', async () => {
    const controller = new PlayerController();
    const { disconnect } = connect(controller);
    const requestFilter = vi.fn();
    await controller.loadSource({ ...source, drm: { servers: { 'com.widevine.alpha': 'https://license.example' } }, requestFilter });
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    const engine = mocks.players[0];
    expect(engine.config.drm.servers).toBeDefined();
    await controller.loadSource({ ...source, id: 'clear', src: '/clear.mp4' });
    expect(engine.config.drm).toEqual({});
    expect(engine.network.unregisterRequestFilter).toHaveBeenCalledWith(requestFilter);
    disconnect();
  });
  it('does not start a replacement source when a previous ad request resolves', async () => {
    const controller = new PlayerController();
    const { disconnect, media } = connect(controller);
    await controller.loadSource({ ...source, ads: { tagUrl: 'https://ads.example/vast' } });
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    let finish!: () => void;
    mocks.players[0].ads.addAdUrlInterstitial.mockImplementation(() => new Promise<void>(resolve => { finish = resolve; }));
    const playing = controller.play();
    await controller.loadSource({ ...source, id: 'replacement', src: '/replacement.mp4' });
    const callsBeforeResolve = vi.mocked(media.play).mock.calls.length;
    finish(); await playing;
    expect(media.play).toHaveBeenCalledTimes(callsBeforeResolve);
    expect(controller.getSnapshot().source?.id).toBe('replacement');
    disconnect();
  });
  it('isolates failing analytics and unsubscribes even if plugin setup throws', async () => {
    const failedListener = vi.fn();
    const received: PlayerEvent[] = [];
    const cleanup = vi.fn();
    const controller = new PlayerController({ plugins: [
      { id: 'broken', setup({ on }) { on(failedListener); throw new Error('plugin failure'); } },
      { id: 'one', setup({ on }) { on(() => { throw new Error('analytics unavailable'); }); } },
      { id: 'two', setup({ on }) { on(event => received.push(event)); return cleanup; } },
    ] });
    const { disconnect } = connect(controller);
    await controller.loadSource(source);
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    expect(failedListener).not.toHaveBeenCalled();
    expect(received.some(event => event.type === 'ready')).toBe(true);
    expect(JSON.stringify(received)).not.toContain('media.example');
    disconnect();
    await vi.waitFor(() => expect(cleanup).toHaveBeenCalledTimes(1));
  });
  it('cancels a pending plugin setup without blocking a new connection', async () => {
    let resolve!: (cleanup: () => void) => void;
    const lateCleanup = vi.fn();
    let setupCount = 0;
    const controller = new PlayerController({ plugins: [{ id: 'async', setup() {
      setupCount++;
      if (setupCount === 1) return new Promise<() => void>(done => { resolve = done; });
    } }] });
    const first = connect(controller);
    await vi.waitFor(() => expect(setupCount).toBe(1));
    first.disconnect();
    const second = connect(controller);
    await controller.loadSource(source);
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    resolve(lateCleanup);
    await vi.waitFor(() => expect(lateCleanup).toHaveBeenCalledTimes(1));
    second.disconnect();
  });
  it('does not load main content before the splash finishes', async () => {
    const controller = new PlayerController();
    const { disconnect, intro } = connect(controller);
    await controller.loadSource({ ...source, splash: { src: '/intro.mp4' } });
    await vi.waitFor(() => expect(intro.src).toContain('intro.mp4'));
    expect(mocks.load).not.toHaveBeenCalled();
    intro.dispatchEvent(new Event('ended'));
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    expect(mocks.load).toHaveBeenCalledTimes(1);
    disconnect();
  });
  it('preserves playback during recoverable engine errors', async () => {
    const controller = new PlayerController(); const { disconnect } = connect(controller);
    await controller.loadSource(source);
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    mocks.players[0].dispatchEvent(new CustomEvent('error', { detail: { code: 1002, severity: 1 } }));
    expect(controller.getSnapshot().phase).toBe('content');
    mocks.players[0].dispatchEvent(new CustomEvent('error', { detail: { code: 6001, severity: 2 } }));
    expect(controller.getSnapshot().phase).toBe('error');
    disconnect();
  });
  it('resolves image tracks against the document and tolerates missing thumbnails', async () => {
    const controller = new PlayerController(); const { disconnect, media } = connect(controller);
    await controller.loadSource({ ...source, thumbnails: { src: '/thumbs/track.vtt' } });
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    const engine = mocks.players[0];
    expect(engine.addThumbnailsTrack).toHaveBeenCalledWith(new URL('/thumbs/track.vtt', media.ownerDocument.baseURI).href, 'text/vtt');
    engine.addThumbnailsTrack.mockRejectedValueOnce(new Error('Missing optional image track'));
    await controller.loadSource({ ...source, thumbnails: { src: '/missing.vtt' } });
    expect(controller.getSnapshot().phase).toBe('content');
    engine.getThumbnails.mockRejectedValueOnce(new Error('Missing image'));
    expect(await controller.getThumbnail(10)).toBeNull();
    disconnect();
  });
  it('maps sprite crops and discards thumbnails from a replaced source', async () => {
    const controller = new PlayerController(); const { disconnect } = connect(controller);
    await controller.loadSource(source);
    await vi.waitFor(() => expect(controller.getSnapshot().phase).toBe('content'));
    const engine = mocks.players[0];
    const thumbnail = { uris: ['https://media.example/sprite.jpg'], width: 160, height: 90, positionX: 320, positionY: 90, sprite: true };
    engine.getThumbnails.mockResolvedValueOnce(thumbnail);
    expect(await controller.getThumbnail(10)).toEqual({ src: thumbnail.uris[0], width: 160, height: 90, x: 320, y: 90, sprite: true });
    let finish!: (result: unknown) => void;
    engine.getThumbnails.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const pending = controller.getThumbnail(12);
    await controller.loadSource({ ...source, id: 'next' });
    finish(thumbnail);
    expect(await pending).toBeNull();
    disconnect();
  });
});
