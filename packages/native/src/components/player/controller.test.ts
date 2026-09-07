import { describe, expect, it, vi } from 'vitest';
import type { OnLoadData } from 'react-native-video';
import { PlayerController, playerTime } from './controller';
import type { PlayerSource } from './types';
const loaded = (duration: number) => ({ duration, currentTime: 0, naturalSize: { width: 640, height: 360, orientation: 'landscape' }, audioTracks: [], textTracks: [], videoTracks: [] }) as OnLoadData;
const source: PlayerSource = { id: 'film', title: 'Film', src: 'https://example.com/film.mp4' };
describe('native player lifecycle', () => {
  it('accepts native sleep expiry before the delayed content-end event', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, type: 'audio', ads: { breaks: [{ id: 'post', at: 'post', src: '/post.mp3' }] } }, true);
    player.loaded(loaded(120)); player.setSleepTimer('episode');
    player.finishSleepTimer(); player.ended();
    expect(player.getSnapshot()).toMatchObject({ paused: true, phase: 'ended', ad: undefined, sleepTimer: undefined });
  });
  it('pauses audio at its sleep deadline and preserves the position', () => {
    vi.useFakeTimers();
    const player = new PlayerController();
    player.loadSource({ ...source, type: 'audio' }, true); player.loaded(loaded(3600)); player.progress(120);
    player.setSleepTimer(15);
    vi.advanceTimersByTime(15 * 60_000);
    expect(player.getSnapshot()).toMatchObject({ paused: true, currentTime: 120, sleepTimer: undefined });
    vi.useRealTimers();
  });
  it('replaces and cancels sleep timers and clears them on source change', () => {
    vi.useFakeTimers();
    const player = new PlayerController();
    player.loadSource({ ...source, type: 'audio' }, true);
    player.setSleepTimer(15); player.setSleepTimer(30);
    vi.advanceTimersByTime(15 * 60_000); expect(player.getSnapshot().paused).toBe(false);
    player.setSleepTimer(null); vi.advanceTimersByTime(30 * 60_000); expect(player.getSnapshot().paused).toBe(false);
    player.setSleepTimer(15); player.loadSource({ ...source, type: 'audio', id: 'next' }, true);
    vi.advanceTimersByTime(15 * 60_000); expect(player.getSnapshot().paused).toBe(false);
    expect(player.getSnapshot().sleepTimer).toBeUndefined();
    vi.useRealTimers();
  });
  it('expires an overdue timer on resume and ignores video timers', () => {
    vi.useFakeTimers();
    const player = new PlayerController(); player.loadSource(source, true);
    player.setSleepTimer(15); expect(player.getSnapshot().sleepTimer).toBeUndefined();
    player.loadSource({ ...source, type: 'audio' }, true); player.setSleepTimer(15);
    vi.setSystemTime(Date.now() + 16 * 60_000); player.checkSleepTimer();
    expect(player.getSnapshot()).toMatchObject({ paused: true, sleepTimer: undefined });
    vi.useRealTimers();
  });
  it('ends an episode timer at content end, not at the end of its pre-roll', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, type: 'audio', ads: { breaks: [{ id: 'pre', at: 'pre', src: '/ad.mp3' }, { id: 'post', at: 'post', src: '/post.mp3' }] } }, true);
    player.setSleepTimer('episode'); player.ended();
    expect(player.getSnapshot().sleepTimer?.mode).toBe('episode');
    player.loaded(loaded(3600)); player.ended();
    expect(player.getSnapshot()).toMatchObject({ phase: 'ended', paused: true, ad: undefined, sleepTimer: undefined });
  });
  it('plays brand intro, pre-roll, then content at its requested position', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, startTime: 30, intro: { src: '/brand.mp4', mimeType: 'video/mp4' }, ads: { breaks: [{ id: 'pre', at: 'pre', src: '/ad.mp4' }] } }, true);
    expect(player.getSnapshot()).toMatchObject({ phase: 'intro', mediaUri: '/brand.mp4', startTime: 0, ad: undefined });
    player.loaded(loaded(2)); player.progress(1); player.pause(); player.play();
    expect(player.getSnapshot().phase).toBe('intro');
    player.ended();
    expect(player.getSnapshot()).toMatchObject({ phase: 'ad', mediaUri: '/ad.mp4' });
    player.loaded(loaded(4)); player.ended(); player.loaded(loaded(90));
    expect(player.getSnapshot()).toMatchObject({ phase: 'content', mediaUri: source.src, startTime: 30, duration: 90 });
  });
  it('keeps intro separate from content seeking, tracks and mid-roll timing', () => {
    const player = new PlayerController(); const seek = vi.fn(); const disconnect = player.connect(seek);
    player.loadSource({ ...source, intro: { src: '/brand.mp4' }, ads: { breaks: [{ id: 'mid', at: 1, src: '/ad.mp4' }] } }, true);
    player.loaded(loaded(5)); player.seek(3); player.setRate(2); player.progress(2);
    expect(seek).not.toHaveBeenCalled();
    expect(player.getSnapshot()).toMatchObject({ phase: 'intro', rate: 1, ad: undefined });
    player.ended(); player.loaded(loaded(90)); player.progress(2);
    expect(player.getSnapshot().ad?.id).toBe('mid');
    disconnect();
  });
  it('continues after an unavailable intro and does not attach IMA during intro', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, intro: { src: '/missing.mp4' }, ads: { tagUrl: 'https://example.com/vast' } }, true);
    player.imaEvent('STARTED'); expect(player.getSnapshot().phase).toBe('intro');
    player.fail('intro missing');
    expect(player.getSnapshot()).toMatchObject({ phase: 'loading', mediaUri: source.src, error: undefined });
    player.imaEvent('STARTED'); expect(player.getSnapshot().ad?.ima).toBe(true);
  });
  it('keeps content resume position when closed during intro and resets intro for new sources', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, startTime: 30, intro: { src: '/brand.mp4' } }, true);
    player.loaded(loaded(5)); player.progress(2); player.close();
    expect(player.getSnapshot().currentTime).toBe(30);
    player.loadSource(source, true); player.loaded(loaded(90));
    expect(player.getSnapshot()).toMatchObject({ phase: 'content', mediaUri: source.src, startTime: 0 });
  });
  it('closes video before audio starts, then closes audio when video is reopened', () => {
    const video = new PlayerController(); const audio = new PlayerController();
    const stopVideo = vi.fn(); const stopAudio = vi.fn();
    const disconnectVideo = video.connect(vi.fn(), stopVideo);
    const disconnectAudio = audio.connect(vi.fn(), stopAudio);
    video.loadSource(source, true); video.loaded(loaded(90)); video.progress(25);
    audio.loadSource({ id: 'audio', title: 'Audio', type: 'audio', src: '/audio.mp3' });
    audio.on(event => { if (event.type === 'play') expect(stopVideo).toHaveBeenCalled(); });
    audio.play();
    expect(video.getSnapshot()).toMatchObject({ phase: 'idle', paused: true, mediaUri: undefined, currentTime: 25 });
    expect(audio.getSnapshot().paused).toBe(false);
    video.play();
    expect(stopAudio).toHaveBeenCalled();
    expect(audio.getSnapshot()).toMatchObject({ phase: 'idle', paused: true, mediaUri: undefined });
    expect(video.getSnapshot()).toMatchObject({ paused: false, startTime: 25, mediaUri: source.src });
    disconnectVideo(); disconnectAudio();
  });
  it('closes ads and invalidates old native callbacks when another video starts', () => {
    const first = new PlayerController(); const second = new PlayerController();
    const disconnectFirst = first.connect(vi.fn()); const disconnectSecond = second.connect(vi.fn());
    first.loadSource({ ...source, startTime: 30, ads: { breaks: [{ id: 'pre', src: '/ad.mp4', at: 'pre' }] } }, true);
    const revision = first.getSnapshot().revision;
    second.loadSource({ ...source, id: 'second' }, true);
    expect(first.getSnapshot()).toMatchObject({ phase: 'idle', ad: undefined, mediaUri: undefined, currentTime: 30 });
    expect(first.getSnapshot().revision).toBeGreaterThan(revision);
    disconnectFirst(); disconnectSecond();
  });
  it('loads paused, clamps seeking and keeps volume and rate bounded', () => {
    const player = new PlayerController(); const seek = vi.fn(); const disconnect = player.connect(seek);
    player.loadSource(source); player.loaded(loaded(90));
    expect(player.getSnapshot().paused).toBe(true);
    player.play(); player.seek(100); expect(seek).toHaveBeenCalledWith(90);
    player.seek(-5); expect(seek).toHaveBeenLastCalledWith(0);
    player.setVolume(2); expect(player.getSnapshot().volume).toBe(1);
    player.setRate(NaN); expect(player.getSnapshot().rate).toBe(1);
    player.pause(); expect(player.getSnapshot().paused).toBe(true);
    expect(player.getSnapshot().phase).toBe('content'); disconnect();
  });
  it('plays pre-roll only after play, enforces skip offset and resumes the requested start time', () => {
    const player = new PlayerController(); const seek = vi.fn(); const disconnect = player.connect(seek);
    player.loadSource({ ...source, startTime: 30, ads: { breaks: [{ id: 'pre', src: '/ad.mp3', at: 'pre', skipAfter: 2 }] } });
    expect(player.getSnapshot().ad).toBeUndefined();
    player.play(); player.loaded(loaded(6)); player.seek(40); player.setRate(2); player.skipAd();
    expect(player.getSnapshot().phase).toBe('ad'); expect(seek).not.toHaveBeenCalled(); expect(player.getSnapshot().rate).toBe(1);
    player.progress(2); player.skipAd(); expect(player.getSnapshot().mediaUri).toBe(source.src); expect(player.getSnapshot().startTime).toBe(30);
    player.loaded(loaded(90)); player.pause(); player.play(); expect(player.getSnapshot().ad).toBeUndefined();
    disconnect();
  });
  it('resumes from a mid-roll, runs post-roll and can replay the content', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, ads: { breaks: [{ id: 'mid', src: '/mid.mp4', at: 10, duration: 4 }, { id: 'post', src: '/post.mp4', at: 'post' }] } }, true);
    player.loaded(loaded(90)); player.progress(12); expect(player.getSnapshot().ad?.id).toBe('mid');
    player.loaded(loaded(20)); player.progress(4); expect(player.getSnapshot().startTime).toBe(12);
    player.loaded(loaded(90)); player.ended(); expect(player.getSnapshot().ad?.id).toBe('post');
    player.loaded(loaded(5)); player.ended(); expect(player.getSnapshot().phase).toBe('ended'); expect(player.getSnapshot().paused).toBe(true);
    player.play(); expect(player.getSnapshot().startTime).toBe(0); expect(player.getSnapshot().paused).toBe(false);
  });
  it('handles ad failures and forgets old ad state when changing sources', () => {
    const player = new PlayerController();
    player.loadSource({ ...source, ads: { breaks: [{ id: 'pre', src: '/broken', at: 'pre' }] } }, true);
    player.fail('network'); expect(player.getSnapshot().mediaUri).toBe(source.src); expect(player.getSnapshot().error).toBeUndefined();
    player.loadSource({ ...source, id: 'new', ads: { onError: 'stop', breaks: [{ id: 'pre', src: '/broken', at: 'pre' }] } }, true);
    player.fail('network'); expect(player.getSnapshot().phase).toBe('error');
    player.loadSource(source); expect(player.getSnapshot().ad).toBeUndefined(); expect(player.getSnapshot().error).toBeUndefined();
  });
  it('pauses when the native view disconnects and formats unknown durations', () => {
    const player = new PlayerController(); const disconnect = player.connect(vi.fn());
    player.loadSource(source, true); disconnect(); expect(player.getSnapshot().paused).toBe(true);
    expect(playerTime(Infinity)).toBe('0:00'); expect(playerTime(3661)).toBe('1:01:01');
  });
});
