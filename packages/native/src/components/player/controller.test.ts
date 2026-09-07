import { describe, expect, it, vi } from 'vitest';
import type { OnLoadData } from 'react-native-video';
import { PlayerController, playerTime } from './controller';
import type { PlayerSource } from './types';
const loaded = (duration: number) => ({ duration, currentTime: 0, naturalSize: { width: 640, height: 360, orientation: 'landscape' }, audioTracks: [], textTracks: [], videoTracks: [] }) as OnLoadData;
const source: PlayerSource = { id: 'film', title: 'Film', src: 'https://example.com/film.mp4' };
describe('native player lifecycle', () => {
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
