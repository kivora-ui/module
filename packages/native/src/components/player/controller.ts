import type { OnLoadData } from 'react-native-video';
import type { PlayerAdBreak, PlayerEvent, PlayerSnapshot, PlayerSource } from './types';

const initial: PlayerSnapshot = { ad: undefined, error: undefined, phase: 'idle', paused: true, buffering: false, currentTime: 0, duration: 0, volume: 1, muted: false, rate: 1, revision: 0, startTime: 0, audioTracks: [], textTracks: [], videoTracks: [], audioTrack: 'auto', textTrack: 'off', videoTrack: 'auto' };
export function playerTime(value: number) {
  const seconds = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  return seconds >= 3600 ? `${Math.floor(seconds / 3600)}:${String(Math.floor(seconds / 60) % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}` : `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
/** Platform independent state and ad sequencing; the Player owns native resources. */
export class PlayerController {
  private static connected = new Set<PlayerController>();
  private state: PlayerSnapshot = { ...initial };
  private listeners = new Set<() => void>();
  private events = new Set<(event: PlayerEvent) => void>();
  private seekNative?: (time: number) => void;
  private pauseNative?: () => void;
  private played = new Set<string>();
  private activeAd?: PlayerAdBreak;
  private resumeTime = 0;
  private contentDuration = 0;
  private finishing = false;
  getSnapshot = () => this.state;
  getServerSnapshot = () => this.state;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  on = (listener: (event: PlayerEvent) => void) => { this.events.add(listener); return () => { this.events.delete(listener); }; };
  private patch(values: Partial<PlayerSnapshot>, type = 'change') {
    this.state = { ...this.state, ...values };
    this.listeners.forEach(listener => listener());
    this.events.forEach(listener => listener({ type, state: this.state }));
  }
  connect = (seek: (time: number) => void, pause?: () => void) => {
    this.seekNative = seek;
    this.pauseNative = pause;
    PlayerController.connected.add(this);
    return () => { if (this.seekNative === seek) { this.pauseNative?.(); this.seekNative = undefined; this.pauseNative = undefined; PlayerController.connected.delete(this); this.patch({ paused: true }); } };
  };
  /** Release the previous media, including ads, before another player starts. */
  close = () => {
    if (this.state.phase === 'idle') return;
    this.pauseNative?.();
    const currentTime = this.state.ad ? this.resumeTime : this.state.currentTime;
    this.activeAd = undefined;
    this.patch({ phase: 'idle', paused: true, buffering: false, mediaUri: undefined, ad: undefined, currentTime, revision: this.state.revision + 1 }, 'close');
  };
  loadSource = (source: PlayerSource, autoPlay = false) => {
    this.played.clear(); this.activeAd = undefined; this.finishing = false; this.contentDuration = 0;
    this.resumeTime = Math.max(0, source.startTime ?? 0);
    this.patch({ ...initial, source, phase: 'loading', mediaUri: source.src, mediaMimeType: source.mimeType, startTime: this.resumeTime, currentTime: this.resumeTime, volume: this.state.volume, muted: this.state.muted, revision: this.state.revision + 1 }, 'source-change');
    if (autoPlay) this.play();
  };
  private pending(at: PlayerAdBreak['at']) { return this.state.source?.ads?.breaks?.find(ad => ad.at === at && !this.played.has(ad.id)); }
  private startAd(ad: PlayerAdBreak) {
    this.played.add(ad.id); this.activeAd = ad;
    this.patch({ phase: 'ad', buffering: true, currentTime: 0, duration: ad.duration ?? 0, mediaUri: ad.src, mediaMimeType: ad.mimeType, startTime: 0, revision: this.state.revision + 1, ad: { id: ad.id, title: ad.title ?? '', remaining: ad.duration ?? 0, canSkip: ad.skipAfter === 0 } }, 'ad-started');
  }
  private finishAd() {
    const next = this.activeAd && this.pending(this.activeAd.at);
    if (next) { this.startAd(next); return; }
    this.activeAd = undefined;
    this.patch({ ad: undefined, phase: this.finishing ? 'ended' : 'loading', paused: this.finishing || this.state.paused, buffering: !this.finishing, mediaUri: this.state.source?.src, mediaMimeType: this.state.source?.mimeType, currentTime: this.resumeTime, startTime: this.resumeTime, duration: this.contentDuration, revision: this.state.revision + 1 }, 'ad-ended');
  }
  play = () => {
    if (!this.state.source) return;
    for (const other of PlayerController.connected) if (other !== this) other.close();
    if (this.state.phase === 'idle') { this.loadSource({ ...this.state.source, startTime: this.state.currentTime }, true); return; }
    if (this.state.phase === 'error') { this.retry(); return; }
    if (this.state.phase === 'ended') { this.loadSource(this.state.source, true); return; }
    this.patch({ paused: false }, 'play');
    const pre = !this.activeAd && this.pending('pre');
    if (pre) this.startAd(pre);
  };
  pause = () => this.patch({ paused: true }, 'pause');
  seek = (time: number) => {
    if (this.state.ad || !Number.isFinite(time) || this.state.duration <= 0) return;
    const target = Math.max(0, Math.min(time, this.state.duration));
    this.seekNative?.(target); this.patch({ currentTime: target });
  };
  setVolume = (volume: number) => { if (Number.isFinite(volume)) this.patch({ volume: Math.max(0, Math.min(1, volume)) }); };
  setMuted = (muted: boolean) => this.patch({ muted });
  setRate = (rate: number) => { if (!this.state.ad && Number.isFinite(rate) && rate >= 0.25 && rate <= 4) this.patch({ rate }); };
  selectAudio = (audioTrack: string) => { if (!this.state.ad) this.patch({ audioTrack }); };
  selectText = (textTrack: string) => { if (!this.state.ad) this.patch({ textTrack }); };
  selectQuality = (videoTrack: string) => { if (!this.state.ad) this.patch({ videoTrack }); };
  retry = () => { if (this.state.source) this.loadSource(this.state.source, true); };
  skipAd = () => { if (this.activeAd && this.state.ad?.canSkip) this.finishAd(); };
  loaded = (data: OnLoadData) => {
    const duration = Number.isFinite(data.duration) ? data.duration : 0;
    if (!this.activeAd) this.contentDuration = duration;
    this.patch({ duration: this.activeAd?.duration ? Math.min(duration || this.activeAd.duration, this.activeAd.duration) : duration, buffering: false, phase: this.state.ad ? 'ad' : this.finishing ? 'ended' : 'content', ...(!this.activeAd ? { audioTracks: data.audioTracks ?? [], textTracks: data.textTracks ?? [], videoTracks: data.videoTracks ?? [] } : {}) }, 'ready');
  };
  progress = (time: number) => {
    if (!Number.isFinite(time)) return;
    if (this.activeAd) {
      const ad = this.activeAd;
      if (this.state.duration > 0 && time >= this.state.duration) { this.finishAd(); return; }
      this.patch({ currentTime: time, ad: { id: ad.id, title: ad.title ?? '', remaining: Math.max(0, this.state.duration - time), canSkip: ad.skipAfter !== undefined && time >= ad.skipAfter } }, 'timeupdate');
      return;
    }
    this.patch({ currentTime: time }, 'timeupdate');
    const mid = this.state.source?.ads?.breaks?.find(ad => typeof ad.at === 'number' && ad.at <= time && !this.played.has(ad.id));
    if (mid && !this.state.paused) { this.resumeTime = time; this.startAd(mid); }
  };
  ended = () => {
    if (this.activeAd) { this.finishAd(); return; }
    const post = this.pending('post');
    this.finishing = true; this.resumeTime = this.contentDuration;
    if (post) this.startAd(post);
    else this.patch({ phase: 'ended', paused: true, buffering: false }, 'ended');
  };
  buffer = (buffering: boolean) => this.patch({ buffering });
  playback = (playing: boolean) => { if (!this.state.buffering) this.patch({ paused: !playing }, playing ? 'playing' : 'pause'); };
  fail = (error: string) => {
    if (this.activeAd && this.state.source?.ads?.onError !== 'stop') { this.finishAd(); return; }
    this.patch({ phase: 'error', error, paused: true, buffering: false }, 'error');
  };
  imaEvent = (event: string) => {
    if (['CONTENT_PAUSE_REQUESTED', 'AD_BREAK_STARTED', 'STARTED'].includes(event)) this.patch({ phase: 'ad', ad: { id: 'ima', title: '', remaining: 0, canSkip: false, ima: true } });
    if (['CONTENT_RESUME_REQUESTED', 'ALL_ADS_COMPLETED', 'AD_BREAK_ENDED', 'ERROR'].includes(event)) this.patch({ phase: 'content', ad: undefined });
  };
}
