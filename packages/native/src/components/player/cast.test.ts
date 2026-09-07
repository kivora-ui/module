import { describe, expect, it, vi } from 'vitest';
import type { MediaLoadRequest, MediaStatus } from 'react-native-google-cast';
import { PlayerController } from './controller';
import { CastBridge, castUnsupportedReason } from './cast';
import type { PlayerSource } from './types';
const source: PlayerSource = { id: 'film', title: 'Film', src: 'https://example.com/film.mp4' };
function setup(input = source) {
  const controller = new PlayerController();
  controller.loadSource(input, true);
  let listener: (status: MediaStatus | null) => void = () => {};
  const client = {
    loadMedia: vi.fn(async (_request: MediaLoadRequest) => {}),
    play: vi.fn(async () => {}), pause: vi.fn(async () => {}), stop: vi.fn(async () => {}),
    seek: vi.fn(async (_options: { position: number }) => {}), setStreamVolume: vi.fn(async () => {}),
    setStreamMuted: vi.fn(async () => {}), setPlaybackRate: vi.fn(async () => {}),
    getStreamPosition: vi.fn(async (): Promise<number | null> => 0),
    getMediaStatus: vi.fn(async (): Promise<MediaStatus | null> => null),
    onMediaStatusUpdated: (callback: typeof listener) => { listener = callback; return { remove() {} }; },
  };
  const pauseLocal = vi.fn();
  const bridge = new CastBridge(controller, client, pauseLocal);
  const emit = (values: Partial<MediaStatus> = {}, request = client.loadMedia.mock.calls.at(-1)?.[0]) => listener({
    mediaInfo: { ...request?.mediaInfo, streamDuration: 100 }, playerState: 'playing', streamPosition: 12,
    isMuted: false, volume: 1, playbackRate: 1, queueItems: [], ...values,
  } as MediaStatus);
  return { controller, client, bridge, pauseLocal, emit };
}
const flush = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };
describe('Cast handoff', () => {
  it('pauses Cast when the audio sleep timer expires', async () => {
    vi.useFakeTimers();
    const { controller, bridge, client, emit } = setup({ ...source, type: 'audio', src: 'https://example.com/audio.mp3', mimeType: 'audio/mpeg' });
    await flush(); emit(); controller.setSleepTimer(15);
    await vi.advanceTimersByTimeAsync(15 * 60_000);
    expect(client.pause).toHaveBeenCalledOnce();
    expect(controller.getSnapshot()).toMatchObject({ paused: true, sleepTimer: undefined });
    bridge.disconnect(); vi.useRealTimers();
  });
  it('casts audio with its MIME type and routes transport controls', async () => {
    const audio: PlayerSource = { id: 'audio', title: 'Episode', type: 'audio', src: 'https://example.com/episode.mp3', mimeType: 'audio/mpeg' };
    const { controller, bridge, client, emit, pauseLocal } = setup(audio);
    const disconnect = controller.connect(bridge.seek, bridge.stop);
    await flush(); emit();
    expect(castUnsupportedReason(audio)).toBeUndefined();
    expect(pauseLocal).toHaveBeenCalledOnce();
    expect(client.loadMedia.mock.calls[0]?.[0].mediaInfo).toMatchObject({ contentUrl: audio.src, contentType: 'audio/mpeg' });
    controller.pause(); await flush();
    expect(client.pause).toHaveBeenCalledOnce();
    controller.play(); controller.seek(35); await flush();
    expect(client.play).toHaveBeenCalledOnce();
    expect(client.seek).toHaveBeenCalledWith({ position: 35 });
    emit({ streamPosition: 36 }); bridge.disconnect(); disconnect();
    expect(controller.getSnapshot()).toMatchObject({ casting: false, paused: true, startTime: 36 });
  });
  it('advances a remote audio advertisement to audio content', async () => {
    const { bridge, client, emit } = setup({ id: 'audio', title: 'Episode', type: 'audio', src: 'https://example.com/episode.mp3', mimeType: 'audio/mpeg', ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/sponsor.mp3', mimeType: 'audio/mpeg' }] } });
    await flush();
    expect(client.loadMedia.mock.calls.at(-1)?.[0].mediaInfo).toMatchObject({ contentUrl: 'https://example.com/sponsor.mp3', contentType: 'audio/mpeg' });
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)?.[0].mediaInfo).toMatchObject({ contentUrl: 'https://example.com/episode.mp3', contentType: 'audio/mpeg' });
    bridge.disconnect();
  });
  it('stops local playback before loading remote media and restores its latest position paused', async () => {
    const { controller, bridge, pauseLocal, client, emit } = setup();
    expect(pauseLocal).toHaveBeenCalledOnce();
    expect(controller.getSnapshot().casting).toBe(true);
    await flush(); emit();
    expect(controller.getSnapshot()).toMatchObject({ currentTime: 12, phase: 'content', paused: false });
    controller.pause(); await flush(); expect(client.pause).toHaveBeenCalledOnce();
    bridge.disconnect();
    expect(controller.getSnapshot()).toMatchObject({ casting: false, startTime: 12, paused: true });
    emit({ streamPosition: 99 });
    expect(controller.getSnapshot().currentTime).toBe(12);
  });
  it('preserves intro and advertising and ignores the previous media ending again', async () => {
    const { controller, bridge, client, emit } = setup({ ...source, startTime: 30, intro: { src: 'https://example.com/intro.mp4' }, ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/ad.mp4' }] } });
    await flush(); const introRequest = client.loadMedia.mock.calls.at(-1)![0];
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(controller.getSnapshot().ad?.id).toBe('pre');
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>, introRequest);
    expect(controller.getSnapshot().ad?.id).toBe('pre');
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0]).toMatchObject({ startTime: 30, mediaInfo: { contentUrl: source.src } });
    bridge.disconnect();
  });
  it('does not load a new source after disconnect while a previous load is pending', async () => {
    const { controller, client, bridge } = setup();
    let resolve!: () => void;
    client.loadMedia.mockImplementationOnce(() => new Promise<void>(done => { resolve = done; }));
    await flush(); controller.loadSource({ ...source, src: 'https://example.com/next.mp4' }, true);
    bridge.disconnect(); resolve(); await flush();
    expect(client.loadMedia).toHaveBeenCalledTimes(1);
  });
  it('routes seeks to the receiver and stops it when the player closes', async () => {
    const { controller, bridge, client, emit } = setup();
    const disconnect = controller.connect(bridge.seek, bridge.stop);
    await flush(); emit(); controller.seek(45); await flush();
    expect(client.seek).toHaveBeenCalledWith({ position: 45 });
    controller.close(); bridge.disconnect(); await flush();
    expect(client.stop).toHaveBeenCalled();
    expect(controller.getSnapshot()).toMatchObject({ phase: 'idle', paused: true });
    disconnect();
  });
  it('preserves content time through a remote mid-roll', async () => {
    const { controller, bridge, client, emit } = setup({ ...source, ads: { breaks: [{ id: 'mid', at: 10, src: 'https://example.com/ad.mp4' }] } });
    await flush(); emit({ streamPosition: 12 }); await flush();
    expect(controller.getSnapshot().ad?.id).toBe('mid');
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].startTime).toBe(12);
    bridge.disconnect();
  });
  it('starts mandatory pre-roll when playback is started with receiver controls', async () => {
    const { controller, bridge, emit } = setup();
    controller.loadSource({ ...source, ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/ad.mp4' }] } });
    await flush(); emit({ streamPosition: 1 }); await flush();
    expect(controller.getSnapshot()).toMatchObject({ phase: 'ad', ad: { id: 'pre' }, currentTime: 0 });
    bridge.disconnect();
  });
  it('reports a failed load and clears that error for a new source', async () => {
    const { controller, bridge, client } = setup();
    client.loadMedia.mockRejectedValueOnce(new Error('unavailable'));
    await flush();
    expect(controller.getSnapshot().castError).toBeTruthy();
    controller.loadSource({ ...source, id: 'next', src: 'https://example.com/next.mp4' }, true);
    await flush();
    expect(controller.getSnapshot()).toMatchObject({ casting: true, castError: undefined });
    bridge.disconnect();
  });
  it('polls the approximate stream position even when Android media status is unchanged', async () => {
    vi.useFakeTimers();
    const { controller, bridge, client } = setup();
    await flush();
    client.getMediaStatus.mockResolvedValue({ mediaInfo: { ...client.loadMedia.mock.calls.at(-1)![0].mediaInfo, streamDuration: 100 }, playerState: 'playing', streamPosition: 0, volume: 1, isMuted: false, playbackRate: 1, queueItems: [] } as MediaStatus);
    client.getStreamPosition.mockResolvedValue(25);
    await vi.advanceTimersByTimeAsync(1000);
    expect(controller.getSnapshot().currentTime).toBe(25);
    bridge.disconnect(); vi.useRealTimers();
  });
  it('keeps one Cast owner and does not stop it when an inactive player unmounts', async () => {
    const first = setup(); await flush();
    const second = setup(); await flush();
    expect(first.controller.getSnapshot()).toMatchObject({ casting: false, paused: true });
    expect(second.controller.getSnapshot().casting).toBe(true);
    const stopCount = first.client.stop.mock.calls.length;
    first.bridge.stop(); first.bridge.disconnect(); await flush();
    expect(first.client.stop.mock.calls.length).toBe(stopCount);
    expect(second.controller.getSnapshot().casting).toBe(true);
    second.bridge.disconnect();
  });
  it('reloads its media from the last position after a receiver STOP', async () => {
    const { controller, bridge, client, emit } = setup(); await flush(); emit({ streamPosition: 25 });
    emit({ idleReason: 'cancelled', playerState: 'idle' } as Partial<MediaStatus>);
    controller.play(); await flush();
    expect(client.loadMedia).toHaveBeenCalledTimes(2);
    expect(client.loadMedia.mock.calls.at(-1)![0].startTime).toBe(25);
    bridge.disconnect();
  });
  it('declares buffered VOD and keeps transport usable when a volume request never resolves', async () => {
    const { controller, bridge, client } = setup();
    client.setStreamVolume.mockImplementationOnce(() => new Promise<void>(() => {}));
    await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo?.streamType).toBe('buffered');
    controller.pause(); await flush();
    expect(client.pause).toHaveBeenCalledOnce();
    controller.loadSource({ ...source, src: 'https://example.com/next.mp4' }, true); await flush();
    expect(client.loadMedia).toHaveBeenCalledTimes(2);
    bridge.disconnect();
  });
  it('applies HLS segment formats only to the content, not its MP4 intro or advertisement', async () => {
    const { bridge, client, emit } = setup({ ...source, src: 'https://example.com/film.m3u8', cast: { hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' }, intro: { src: 'https://example.com/intro.mp4' }, ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/ad.mp4' }] } });
    await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo?.hlsSegmentFormat).toBeUndefined();
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo?.hlsVideoSegmentFormat).toBeUndefined();
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo).toMatchObject({ hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' });
    bridge.disconnect();
  });
  it('uses the independent HLS configuration of an intro and an advertisement', async () => {
    const { bridge, client, emit } = setup({ ...source, intro: { src: 'https://example.com/intro.m3u8', cast: { hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' } }, ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/ad.m3u8', cast: { hlsSegmentFormat: 'TS', hlsVideoSegmentFormat: 'MPEG2-TS' } }] } });
    await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo).toMatchObject({ hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' });
    emit({ idleReason: 'finished', playerState: 'idle' } as Partial<MediaStatus>); await flush();
    expect(client.loadMedia.mock.calls.at(-1)![0].mediaInfo).toMatchObject({ hlsSegmentFormat: 'TS', hlsVideoSegmentFormat: 'MPEG2-TS' });
    bridge.disconnect();
  });
  it.each([
    { ...source, src: 'file:///movie.mp4' }, { ...source, src: 'https://kivora-offline.invalid/id' },
    { ...source, src: 'http://127.0.0.1:8081/audio.mp3' }, { ...source, nativeSource: { headers: { Authorization: 'secret' } } },
    { ...source, nativeSource: { drm: { type: 'widevine', licenseServer: 'https://example.com/license' } } },
    { ...source, ads: { tagUrl: 'https://example.com/vast' } },
    { ...source, intro: { src: 'file:///intro.mp4' } },
  ] as PlayerSource[])('blocks receiver-incompatible requirements', input => {
    expect(castUnsupportedReason(input)).toBeTruthy();
  });
});
