import type shaka from 'shaka-player';
import type { PlayerControllerOptions, PlayerDownload, PlayerEvent, PlayerSnapshot, PlayerSource, PlayerThumbnail } from './types';

const initial: PlayerSnapshot = {
  phase: 'idle', paused: true, buffering: false, currentTime: 0, duration: 0, seekStart: 0, seekEnd: 0,
  live: false, volume: 1, muted: false, rate: 1, audioTracks: [], videoTracks: [], textTracks: [],
  automaticQuality: true, textVisible: false, downloading: false, offlineSupported: false, downloads: [],
};
type Connection = {
  media: HTMLVideoElement; intro: HTMLVideoElement; clientAds: HTMLElement; serverAds: HTMLElement;
  abort: AbortController; disposed: boolean; ready: boolean; cleanups: (() => void)[];
  engine?: shaka.Player; library?: typeof shaka; storage?: shaka.offline.Storage;
  download?: shaka.extern.IAbortableOperation<unknown>; done?: Promise<void>;
  requestFilter?: shaka.extern.RequestFilter; responseFilter?: shaka.extern.ResponseFilter;
  splashTimer?: ReturnType<typeof setTimeout>;
  adsReady: boolean;
};
export function playerTime(value: number): string {
  if (!Number.isFinite(value) || value < 0) return '0:00';
  const seconds = Math.floor(value);
  const hours = Math.floor(seconds / 3600);
  return `${hours ? `${hours}:` : ''}${hours ? String(Math.floor(seconds / 60) % 60).padStart(2, '0') : Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
export function validatePlayerSource(source: PlayerSource): void {
  if (!source.id || !source.src) throw new Error('A source requires id and src');
  for (const uri of [source.src, source.splash?.src, source.downloadUrl, source.thumbnails?.src, source.ads?.tagUrl, ...(source.ads?.breaks?.map(ad => ad.src) ?? [])]) {
    if (uri && !['http:', 'https:', 'blob:', 'offline:'].includes(new URL(uri, 'https://localhost/').protocol)) throw new Error('Unsupported media URL');
  }
  const ids = source.ads?.breaks?.map(ad => ad.id) ?? [];
  if (new Set(ids).size !== ids.length) throw new Error('Ad break ids must be unique');
}

/** Browser resources are created only by connect(), never during SSR. */
export class PlayerController {
  private state: PlayerSnapshot = initial;
  private listeners = new Set<() => void>();
  private events = new Set<(event: PlayerEvent) => void>();
  private connection?: Connection;
  private teardown: Promise<void> = Promise.resolve();
  private loadQueue: Promise<void> = Promise.resolve();
  private generation = 0;
  private source?: PlayerSource;
  private wantPlay = false;
  private options: PlayerControllerOptions;
  constructor(options: PlayerControllerOptions = {}) {
    const ids = options.plugins?.map(plugin => plugin.id) ?? [];
    if (new Set(ids).size !== ids.length) throw new Error('Player plugin ids must be unique');
    this.options = options;
  }
  getSnapshot = () => this.state;
  getServerSnapshot = () => initial;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  on = (listener: (event: PlayerEvent) => void) => { this.events.add(listener); return () => { this.events.delete(listener); }; };
  private patch(patch: Partial<PlayerSnapshot>) {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach(listener => listener());
  }
  private emit(type: string, detail?: Record<string, unknown>) {
    const event: PlayerEvent = { type, detail, sourceId: this.source?.id, phase: this.state.phase, time: this.state.currentTime, timestamp: Date.now() };
    for (const listener of [...this.events, ...(this.options.onEvent ? [this.options.onEvent] : [])]) {
      try { listener(event); } catch { /* Analytics failures cannot stop playback. */ }
    }
  }
  private report(error: unknown, fatal = true) {
    const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : 'PLAYBACK_ERROR';
    this.emit('error', { code, fatal });
    if (fatal) {
      this.pause();
      this.patch({ phase: 'error', buffering: false, error: { code, recoverable: true }, paused: true });
    }
  }
  connect(media: HTMLVideoElement, intro: HTMLVideoElement, clientAds: HTMLElement, serverAds: HTMLElement): () => void {
    if (this.connection) throw new Error('A PlayerController can have only one mounted Player');
    const c: Connection = { media, intro, clientAds, serverAds, disposed: false, ready: false, abort: new AbortController(), cleanups: [], adsReady: false };
    this.connection = c;
    const previousTeardown = this.teardown;
    c.done = (async () => {
      await previousTeardown;
      const { default: library } = await import('shaka-player');
      if (c.disposed) return;
      library.polyfill.installAll();
      await this.options.configureEngine?.(library);
      if (c.disposed) return;
      if (!library.Player.isBrowserSupported()) throw new Error('Unsupported browser');
      c.library = library;
      c.engine = new library.Player();
      await c.engine.attach(media);
      if (c.disposed) return;
      this.listen(c, media, 'timeupdate', () => this.updateMedia(c));
      for (const event of ['playing', 'pause', 'durationchange', 'volumechange', 'ratechange', 'progress', 'loadedmetadata', 'seeking', 'seeked']) {
        this.listen(c, media, event, () => { this.updateMedia(c); this.emit(event); });
      }
      this.listen(c, media, 'waiting', () => { if (this.state.phase === 'content') this.patch({ buffering: true }); this.emit('buffering'); });
      this.listen(c, media, 'ended', () => { if (!this.state.ad) this.patch({ phase: 'ended', paused: true }); this.emit('ended'); });
      this.listen(c, intro, 'ended', () => this.finishSplash(c));
      this.listen(c, intro, 'error', () => { this.emit('splash-error'); this.finishSplash(c); });
      this.listen(c, intro, 'play', () => this.patch({ paused: false }));
      this.listen(c, intro, 'pause', () => { if (this.state.phase === 'splash') this.patch({ paused: true }); });
      this.listen(c, c.engine, 'error', event => {
        const detail = (event as unknown as { detail: { code?: number; severity?: number } }).detail;
        // Unload/source replacement deliberately interrupts the previous load.
        if (!c.disposed && detail?.code !== 7000 && detail?.code !== 7001) this.report(detail, detail?.severity !== 1);
      });
      this.listen(c, c.engine, 'buffering', event => this.patch({ buffering: Boolean((event as unknown as { buffering: boolean }).buffering) }));
      for (const event of ['trackschanged', 'variantchanged', 'adaptation', 'textchanged']) this.listen(c, c.engine, event, () => { this.updateTracks(c); this.emit(event); });
      for (const event of ['metadata', 'timelineregionenter', 'drmsessionupdate', 'keystatuschanged']) this.listen(c, c.engine, event, () => this.emit(event));
      const ads = c.engine.getAdManager();
      if (ads) {
        ads.setContainers(clientAds, serverAds);
        for (const event of ['ad-started', 'ad-stopped', 'ad-complete', 'ad-skipped', 'ad-skip-state-changed', 'ad-progress-updated', 'ad-paused', 'ad-resumed']) {
          this.listen(c, ads, event, () => { this.updateAd(c); this.emit(event); });
        }
        this.listen(c, ads, 'ad-error', () => {
          this.emit('ad-error');
          if (this.source?.ads?.onError === 'stop') { this.pause(); this.report({ code: 'AD_ERROR' }); }
          else this.updateAd(c);
        });
      }
      for (const plugin of this.options.plugins ?? []) {
        if (c.disposed) break;
        const unsubscribe: (() => void)[] = [];
        c.cleanups.push(() => unsubscribe.forEach(off => off()));
        try {
          const setup = Promise.resolve(plugin.setup({ controller: this, engine: c.engine, media, signal: c.abort.signal, on: listener => {
            if (c.disposed) return () => {};
            const off = this.on(listener); unsubscribe.push(off); return off;
          } }));
          const cleanup = await new Promise<void | (() => void)>((resolve, reject) => {
            const abort = () => resolve();
            c.abort.signal.addEventListener('abort', abort, { once: true });
            setup.then(result => {
              c.abort.signal.removeEventListener('abort', abort);
              if (c.disposed) { try { result?.(); } catch { /* Isolate late plugin cleanup failures. */ } resolve(); } else resolve(result);
            }, error => { c.abort.signal.removeEventListener('abort', abort); reject(error); });
            if (c.disposed) resolve();
          });
          if (cleanup) c.cleanups.push(cleanup);
        } catch { unsubscribe.forEach(off => off()); this.emit('plugin-error', { pluginId: plugin.id }); }
      }
      if (c.disposed) return;
      c.ready = true;
      this.patch({ offlineSupported: library.offline.Storage.support() });
      if (this.source) await this.loadSource(this.source);
    })().catch(error => { if (!c.disposed) this.report(error); });
    return () => {
      c.disposed = true;
      c.abort.abort();
      clearTimeout(c.splashTimer);
      c.media.pause(); c.intro.pause();
      void c.engine?.unload().catch(() => {});
      this.generation++;
      if (this.connection === c) this.connection = undefined;
      this.teardown = (async () => {
        await c.done;
        for (const cleanup of c.cleanups.reverse()) { try { cleanup(); } catch { /* Isolate plugin cleanup failures. */ } }
        await c.download?.abort().catch(() => {});
        await c.storage?.destroy().catch(() => {});
        await c.engine?.destroy().catch(() => {});
        intro.removeAttribute('src'); intro.load();
      })();
    };
  }
  private listen(c: Connection, target: { addEventListener: Function; removeEventListener: Function }, event: string, handler: (event: Event) => void) {
    const guarded = (e: Event) => { if (!c.disposed) handler(e); };
    target.addEventListener(event, guarded);
    c.cleanups.push(() => target.removeEventListener(event, guarded));
  }
  loadSource = async (source: PlayerSource): Promise<void> => {
    validatePlayerSource(source);
    this.source = source;
    this.wantPlay = false;
    const generation = ++this.generation;
    const c = this.connection;
    this.patch({ ...initial, volume: this.state.volume, muted: this.state.muted, source,
      offlineSupported: this.state.offlineSupported, downloads: this.state.downloads,
      downloading: this.state.downloading, downloadProgress: this.state.downloadProgress,
      phase: source.splash ? 'splash' : 'loading' });
    if (!c?.ready || !c.engine) return;
    c.adsReady = false;
    clearTimeout(c.splashTimer);
    c.media.pause(); c.intro.pause();
    // Interrupt the previous load before applying a new source's DRM/network configuration.
    await c.engine.unload().catch(() => {});
    if (generation !== this.generation || c.disposed) return;
    this.emit('source-change');
    if (source.splash) {
      c.intro.src = source.splash.src;
      c.intro.poster = source.splash.poster ?? source.poster ?? '';
      c.intro.muted = this.state.muted;
      c.intro.volume = this.state.volume;
      c.intro.load();
    } else await this.loadContent(c, source, generation);
  };
  private async loadContent(c: Connection, source: PlayerSource, generation: number) {
    const job = async () => {
      if (c.disposed || generation !== this.generation || !c.engine) return;
      const engine = c.engine;
      this.patch({ phase: 'loading', buffering: true });
      engine.resetConfiguration();
      engine.configure(source.configuration ?? {});
      if (source.drm) engine.configure({ drm: source.drm });
      const network = engine.getNetworkingEngine();
      if (c.requestFilter) network?.unregisterRequestFilter(c.requestFilter);
      if (c.responseFilter) network?.unregisterResponseFilter(c.responseFilter);
      c.requestFilter = source.requestFilter; c.responseFilter = source.responseFilter;
      if (c.requestFilter) network?.registerRequestFilter(c.requestFilter);
      if (c.responseFilter) network?.registerResponseFilter(c.responseFilter);
      try {
        await engine.load(source.src, source.startTime ?? null, source.mimeType);
        if (c.disposed || generation !== this.generation) return;
        if (source.thumbnails) {
          try { await engine.addThumbnailsTrack(new URL(source.thumbnails.src, c.media.ownerDocument.baseURI).href, source.thumbnails.mimeType ?? 'text/vtt'); }
          catch (error) { if (!c.disposed && generation === this.generation) this.emit('thumbnail-error', { code: error && typeof error === 'object' && 'code' in error ? String(error.code) : 'THUMBNAIL_ERROR' }); }
          if (c.disposed || generation !== this.generation) return;
        }
        for (const text of source.textTracks ?? []) {
          const track = await engine.addTextTrackAsync(text.src, text.language, text.kind ?? 'subtitles', text.mimeType ?? 'text/vtt', undefined, text.label);
          if (c.disposed || generation !== this.generation) return;
          if (text.default) engine.selectTextTrack(track);
        }
        this.patch({ phase: 'content', buffering: false, error: undefined });
        this.updateTracks(c); this.updateMedia(c); this.emit('ready');
        if (this.wantPlay) await this.play();
      } catch (error) { if (!c.disposed && generation === this.generation) this.report(error); }
    };
    this.loadQueue = this.loadQueue.catch(() => {}).then(job);
    await this.loadQueue;
  }
  private finishSplash(c: Connection) {
    if (this.state.phase !== 'splash' || !this.source) return;
    clearTimeout(c.splashTimer);
    c.intro.pause(); c.intro.removeAttribute('src'); c.intro.load();
    this.emit('splash-ended');
    this.patch({ phase: 'loading' });
    void this.loadContent(c, this.source, this.generation);
  }
  private updateTracks(c: Connection) {
    if (!c.engine || c.disposed) return;
    this.patch({ audioTracks: c.engine.getAudioTracks(), videoTracks: c.engine.getVideoTracks(), textTracks: c.engine.getTextTracks(),
      automaticQuality: c.engine.getConfiguration().abr.enabled,
      textVisible: c.engine.getTextTracks().some(track => track.active) });
  }
  private updateMedia(c: Connection) {
    if (!c.engine || this.state.phase === 'splash') return;
    const range = c.engine.seekRange();
    const live = c.engine.isLive();
    this.patch({ currentTime: c.media.currentTime, duration: Number.isFinite(c.media.duration) ? c.media.duration : 0,
      paused: c.media.paused, volume: c.media.volume, muted: c.media.muted, rate: c.media.playbackRate,
      live, seekStart: range.start, seekEnd: Number.isFinite(range.end) ? range.end : 0,
      buffering: c.media.readyState < 3 && !c.media.paused });
    this.updateAd(c);
    this.emit('timeupdate');
  }
  private updateAd(c: Connection) {
    const ad = c.engine?.getAdManager()?.getCurrentAd();
    if (ad) {
      this.patch({ phase: ad.isLinear() ? 'ad' : 'content', ad: { title: ad.getTitle() || '', remaining: Math.max(0, ad.getRemainingTime()), canSkip: ad.canSkipNow(), linear: ad.isLinear() }, paused: ad.isPaused() });
    } else if (this.state.ad) this.patch({ ad: undefined, phase: c.media.ended ? 'ended' : 'content', paused: c.media.paused });
  }
  private async prepareAds(c: Connection) {
    if (c.adsReady || !c.engine) return;
    c.adsReady = true;
    const manager = c.engine.getAdManager();
    if (!manager) return;
    const options = this.source?.ads;
    for (const ad of options?.breaks ?? []) {
      manager.addCustomInterstitial({ id: ad.id, groupId: null, uri: ad.src, mimeType: ad.mimeType ?? null,
        startTime: typeof ad.at === 'number' ? ad.at : 0, endTime: null, pre: ad.at === 'pre', post: ad.at === 'post',
        isSkippable: ad.skipAfter !== undefined, skipOffset: ad.skipAfter ?? null, skipFor: null,
        canJump: false, resumeOffset: null, playoutLimit: ad.duration ?? null, once: true, timelineRange: false,
        loop: false, overlay: null, displayOnBackground: false, currentVideo: null, background: null, clickThroughUrl: null, tracking: null });
    }
    if (options?.tagUrl) {
      try { await manager.addAdUrlInterstitial(options.tagUrl); }
      catch (error) { this.emit('ad-error'); if (options.onError === 'stop') throw error; }
    }
  }
  play = async () => {
    this.wantPlay = true;
    const c = this.connection;
    const generation = this.generation;
    if (!c?.ready || c.disposed) return;
    try {
      if (this.state.phase === 'splash') {
        clearTimeout(c.splashTimer);
        c.splashTimer = setTimeout(() => this.finishSplash(c), (this.source?.splash?.maxDuration ?? 30) * 1000);
        await c.intro.play(); return;
      }
      if (this.state.phase === 'loading' || this.state.phase === 'error') return;
      await this.prepareAds(c);
      if (c.disposed || generation !== this.generation || !this.wantPlay) return;
      const ad = c.engine?.getAdManager()?.getCurrentAd();
      if (ad?.isLinear()) ad.play();
      else { await c.media.play(); if (!c.disposed && generation === this.generation) { this.patch({ phase: 'content' }); this.updateAd(c); } }
    } catch (error) {
      if (c.disposed || generation !== this.generation) return;
      this.wantPlay = false;
      this.patch({ paused: true });
      if (error instanceof DOMException && error.name === 'NotAllowedError') this.emit('autoplay-blocked');
      else this.report(error);
    }
  };
  pause = () => {
    this.wantPlay = false;
    const c = this.connection;
    c?.media.pause(); c?.intro.pause(); c?.engine?.getAdManager()?.getCurrentAd()?.pause();
    this.patch({ paused: true });
  };
  seek = (time: number) => {
    if (!Number.isFinite(time) || !this.connection || !['content', 'ended'].includes(this.state.phase) || this.state.ad?.linear) return;
    this.connection.media.currentTime = Math.max(this.state.seekStart, Math.min(time, this.state.seekEnd || this.state.duration));
  };
  setVolume = (volume: number) => { if (this.connection && Number.isFinite(volume)) { const value = Math.max(0, Math.min(1, volume)); this.connection.media.volume = value; this.connection.intro.volume = value; this.connection.engine?.getAdManager()?.getCurrentAd()?.setVolume(value); this.patch({ volume: value }); } };
  setMuted = (muted: boolean) => { if (this.connection) { this.connection.media.muted = muted; this.connection.intro.muted = muted; this.connection.engine?.getAdManager()?.getCurrentAd()?.setMuted(muted); this.patch({ muted }); } };
  setRate = (rate: number) => { if (this.connection && !this.state.ad && rate >= 0.25 && rate <= 4) this.connection.media.playbackRate = rate; };
  selectAudio = (index: number) => { const track = this.state.audioTracks[index]; if (track && !this.state.ad) this.connection?.engine?.selectAudioTrack(track); };
  selectText = (id: number | null) => { if (!this.state.ad) this.connection?.engine?.selectTextTrack(this.state.textTracks.find(track => track.id === id) ?? null); this.updateTracksIfConnected(); };
  selectQuality = (index: number | null) => {
    if (this.state.ad) return;
    const engine = this.connection?.engine;
    engine?.configure({ abr: { enabled: index === null } });
    const track = index === null ? undefined : this.state.videoTracks[index];
    if (track) engine?.selectVideoTrack(track, true);
    this.updateTracksIfConnected();
  };
  private updateTracksIfConnected() { if (this.connection) this.updateTracks(this.connection); }
  skipAd = () => { const ad = this.connection?.engine?.getAdManager()?.getCurrentAd(); if (ad?.canSkipNow()) ad.skip(); };
  retry = () => { if (this.source) return this.loadSource(this.source); return Promise.resolve(); };
  getMediaElement = () => this.connection?.media;
  getEngine = () => this.connection?.engine;
  getStats = () => this.connection?.engine?.getStats();
  getThumbnail = async (time: number): Promise<PlayerThumbnail | null> => {
    const generation = this.generation;
    const c = this.connection;
    if (!c?.ready || !Number.isFinite(time) || this.state.ad || !['content', 'ended'].includes(this.state.phase)) return null;
    try {
      const thumbnail = await c.engine?.getThumbnails(null, time);
      if (!thumbnail?.uris[0] || c.disposed || generation !== this.generation) return null;
      return { src: thumbnail.uris[0], width: thumbnail.width, height: thumbnail.height,
        x: thumbnail.positionX, y: thumbnail.positionY, sprite: thumbnail.sprite };
    } catch { return null; }
  };
  private storage() {
    const c = this.connection;
    if (!c?.ready || !c.library?.offline.Storage.support()) throw new Error('Offline storage unavailable');
    // Separate configuration prevents download choices from changing active playback.
    c.storage ??= new c.library.offline.Storage();
    return { c, storage: c.storage };
  }
  refreshDownloads = async () => {
    const { c, storage } = this.storage();
    const content = await storage.list();
    const downloads = content.filter(item => item.offlineUri && !item.isIncomplete).map(item => {
      const metadata = item.appMetadata as { title?: string; sourceId?: string; type?: 'video' | 'audio' } | null;
      return { uri: item.offlineUri!, title: metadata?.title ?? '', sourceId: metadata?.sourceId ?? '', type: metadata?.type, size: item.size, duration: item.duration, expiration: item.expiration };
    });
    if (!c.disposed) this.patch({ downloads });
    return downloads;
  };
  download = async () => {
    const source = this.source;
    if (!source?.offline?.enabled || this.state.live || this.state.downloading || this.state.ad || source.src.startsWith('offline:')) throw new Error('Download is not available');
    const { c, storage } = this.storage();
    storage.configure(c.engine!.getConfiguration());
    const network = storage.getNetworkingEngine();
    network?.clearAllRequestFilters(); network?.clearAllResponseFilters();
    if (source.requestFilter) network?.registerRequestFilter(source.requestFilter);
    if (source.responseFilter) network?.registerResponseFilter(source.responseFilter);
    storage.configure({ offline: { usePersistentLicense: source.offline.persistentLicense !== false,
      progressCallback: (_content: unknown, progress: number) => { if (!c.disposed) this.patch({ downloadProgress: progress }); },
      trackSelectionCallback: async (tracks: shaka.extern.Track[]) => {
        const variants = tracks.filter(track => track.type === 'variant' && (!source.offline?.maxHeight || (track.height ?? 0) <= source.offline.maxHeight));
        const best = variants.sort((a, b) => b.bandwidth - a.bandwidth)[0];
        if (!best) throw new Error('No compatible offline track');
        return [best, ...tracks.filter(track => track.type === 'text')];
      } } });
    this.patch({ downloading: true, downloadProgress: 0 }); this.emit('download-started');
    try {
      c.download = storage.store(source.src, { title: source.title, sourceId: source.id, type: source.type ?? 'video' }, source.mimeType, null,
        source.textTracks?.map(track => ({ uri: track.src, language: track.language, kind: track.kind ?? 'subtitles', mime: track.mimeType ?? 'text/vtt' })));
      await c.download.promise;
      if (!c.disposed) { await this.refreshDownloads(); this.emit('download-completed'); }
    } catch (error) { if (!c.disposed) this.emit('download-error'); throw error; }
    finally { c.download = undefined; if (!c.disposed) this.patch({ downloading: false, downloadProgress: undefined }); }
  };
  cancelDownload = async () => { await this.connection?.download?.abort(); this.emit('download-canceled'); };
  removeDownload = async (uri: string) => { const { storage } = this.storage(); await storage.remove(uri); await this.refreshDownloads(); this.emit('download-removed'); };
  playDownload = async (download: PlayerDownload) => {
    const matching = this.source?.id === download.sourceId ? this.source : undefined;
    await this.loadSource({ id: download.sourceId || download.uri, src: download.uri, title: download.title,
      type: download.type, drm: matching?.drm, requestFilter: matching?.requestFilter, responseFilter: matching?.responseFilter });
    await this.play();
  };
}
