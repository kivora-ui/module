import type { OnLoadData } from 'react-native-video';
import { PlayerController } from './controller';
import type { PlayerCastMediaOptions, PlayerSnapshot, PlayerSource } from './types';

export function castUnsupportedReason(source: PlayerSource): 'source' | 'native' | 'ads' | undefined {
  if (source.ads?.tagUrl) return 'ads';
  if (source.nativeSource?.drm || source.nativeSource?.headers || source.nativeSource?.textTracks) return 'native';
  const urls = [source.src, ...(source.type !== 'audio' && source.intro ? [source.intro.src] : []), ...(source.ads?.breaks?.map(ad => ad.src) ?? [])];
  if (urls.some(value => {
    try {
      const url = new URL(value);
      return !['http:', 'https:'].includes(url.protocol) || /^(localhost|127\..*|\[::1\]|0\.0\.0\.0|kivora-offline\.invalid)$/i.test(url.hostname) || !!url.username || !!url.password;
    } catch { return true; }
  })) return 'source';
}

interface CastMediaInfo {
  contentUrl?: string;
  contentType?: string;
  customData?: object;
  streamDuration?: number;
}
interface CastStatus {
  mediaInfo?: CastMediaInfo | null;
  playerState: 'buffering' | 'idle' | 'loading' | 'paused' | 'playing' | null;
  idleReason?: 'cancelled' | 'error' | 'finished' | 'interrupted' | null;
  streamPosition: number;
  volume: number;
  isMuted: boolean;
}
interface CastLoadRequest {
  autoplay: boolean;
  startTime: number;
  playbackRate: number;
  mediaInfo: CastMediaInfo & { contentUrl: string; metadata: { type: 'generic'; title: string } };
}
export interface CastClient {
  loadMedia(request: CastLoadRequest): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  seek(options: { position: number }): Promise<void>;
  setStreamVolume(volume: number): Promise<void>;
  setStreamMuted(muted: boolean): Promise<void>;
  setPlaybackRate(rate: number): Promise<void>;
  getMediaStatus(): Promise<CastStatus | null>;
  getStreamPosition(): Promise<number | null>;
  onMediaStatusUpdated(callback: (status: CastStatus | null) => void): { remove(): void };
}
let nextSession = 0;
export class CastBridge {
  private static owner?: CastBridge;
  private stopped = false;
  private generation = 0;
  private active = true;
  private applying = false;
  private revision = -1;
  private token = '';
  private ready = false;
  private previous: PlayerSnapshot;
  private chain = Promise.resolve();
  private readonly session = ++nextSession;
  private readonly unsubscribe: () => void;
  private readonly subscription: { remove(): void };
  private readonly timer: ReturnType<typeof setInterval>;
  constructor(private controller: PlayerController, private client: CastClient, private pauseLocal: () => void) {
    this.previous = controller.getSnapshot();
    this.subscription = client.onMediaStatusUpdated(this.status);
    this.unsubscribe = controller.subscribe(this.sync);
    this.timer = setInterval(() => {
      if (CastBridge.owner !== this) return;
      const token = this.token;
      void Promise.all([client.getMediaStatus(), client.getStreamPosition()]).then(([status, position]) => {
        if (token !== this.token || !status) return;
        this.status(position === null ? status : { ...status, streamPosition: position });
      }).catch(() => {});
    }, 1000);
    this.sync();
  }
  private command(action: () => Promise<void>, wait = true) {
    const token = this.token;
    const pending = this.chain.then(async () => {
      if (!this.active || CastBridge.owner !== this || token !== this.token) return;
      try { await action(); }
      catch { if (this.active && token === this.token) this.controller.castFailure('Cast could not play this media.'); }
    });
    if (wait) this.chain = pending;
  }
  private sync = () => {
    if (!this.active || this.applying) return;
    let state = this.controller.getSnapshot();
    if (CastBridge.owner !== this) {
      if (state.paused || !state.source || state.phase === 'idle') return;
      CastBridge.owner?.release();
      CastBridge.owner = this;
      this.applying = true;
      this.pauseLocal();
      this.controller.setCasting(true);
      this.applying = false;
      this.revision = -1;
      state = this.controller.getSnapshot();
    }
    if (this.stopped && !state.paused) { this.stopped = false; this.revision = -1; }
    const previous = this.previous;
    this.previous = state;
    if (state.revision !== this.revision) {
      this.revision = state.revision;
      this.token = `${this.session}:${this.revision}:${++this.generation}`;
      this.ready = false;
      if (!state.source || !state.mediaUri || state.phase === 'idle' || state.phase === 'ended') {
        this.command(() => this.client.stop()); return;
      }
      if (castUnsupportedReason(state.source)) {
        this.command(() => this.client.stop());
        this.controller.castFailure('This source requires local playback.'); return;
      }
      const mediaOptions = state.phase === 'intro' ? state.source.intro?.cast
        : state.ad ? state.source.ads?.breaks?.find(ad => ad.id === state.ad?.id)?.cast : state.source.cast;
      const request: CastLoadRequest & { mediaInfo: PlayerCastMediaOptions & { streamType: 'buffered' } } = {
        autoplay: !state.paused, startTime: state.currentTime,
        playbackRate: state.ad || state.phase === 'intro' ? 1 : Math.max(.5, Math.min(2, state.rate)),
        mediaInfo: { ...mediaOptions, streamType: 'buffered', contentUrl: state.mediaUri, contentType: state.mediaMimeType, customData: { kivoraCast: this.token }, metadata: { type: 'generic', title: state.phase === 'intro' ? state.source.intro?.title ?? state.source.title : state.ad?.title || state.source.title } },
      };
      this.command(() => this.client.loadMedia(request));
      this.command(() => this.client.setStreamVolume(state.volume), false);
      this.command(() => this.client.setStreamMuted(state.muted), false);
      return;
    }
    if (state.paused !== previous.paused) this.command(() => state.paused ? this.client.pause() : this.client.play());
    if (state.volume !== previous.volume) this.command(() => this.client.setStreamVolume(state.volume), false);
    if (state.muted !== previous.muted) this.command(() => this.client.setStreamMuted(state.muted), false);
    if (state.rate !== previous.rate) this.command(() => this.client.setPlaybackRate(Math.max(.5, Math.min(2, state.rate))), false);
  };
  seek = (position: number) => this.command(() => this.client.seek({ position }));
  stop = () => { if (CastBridge.owner === this) void this.client.stop().catch(() => {}); };
  private status = (status: CastStatus | null) => {
    if (!this.active || CastBridge.owner !== this || !status || (status.mediaInfo?.customData as { kivoraCast?: string } | undefined)?.kivoraCast !== this.token) return;
    const revision = this.revision;
    this.applying = true;
    try {
      if (status.idleReason === 'finished') {
        this.token = '';
        this.controller.ended();
      } else if (status.idleReason === 'error') this.controller.castFailure('Cast could not play this media.');
      else if (status.playerState === 'playing' || status.playerState === 'paused') {
        if (!this.ready) {
          this.ready = true;
          this.controller.loaded({ duration: status.mediaInfo?.streamDuration ?? 0, audioTracks: [], textTracks: [], videoTracks: [] } as unknown as OnLoadData);
        }
        this.controller.buffer(false);
        if (status.playerState === 'playing' && this.controller.getSnapshot().paused) this.controller.play();
        else this.controller.playback(status.playerState === 'playing');
        if (this.controller.getSnapshot().revision !== revision) return;
        this.controller.progress(status.streamPosition);
        if (this.controller.getSnapshot().revision === revision) {
          this.controller.setVolume(status.volume);
          this.controller.setMuted(status.isMuted);
        }
      } else if (status.playerState === 'buffering' || status.playerState === 'loading') this.controller.buffer(true);
      else if (status.idleReason === 'cancelled' || status.idleReason === 'interrupted') { this.stopped = true; this.controller.pause(); }
    } finally {
      this.applying = false;
      if (this.controller.getSnapshot().revision === revision) this.previous = this.controller.getSnapshot();
      this.sync();
    }
  };
  private release() {
    if (CastBridge.owner !== this) return;
    this.stop();
    CastBridge.owner = undefined;
    this.token = '';
    this.controller.setCasting(false);
  }
  disconnect = () => {
    if (!this.active) return;
    this.active = false;
    this.unsubscribe(); this.subscription.remove(); clearInterval(this.timer);
    this.release();
  };
}
