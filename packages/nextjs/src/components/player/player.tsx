"use client";
import * as React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, PictureInPicture2, Settings2, Download, FolderDown, X, ChevronUp, RotateCcw, RotateCw, LoaderCircle, Music2, ListVideo, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@kivora/theme';
import { Button } from '../button';
import { Select } from '../select';
import { Progress } from '../progress';
import { Slider } from '../slider';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../sheet';
import { PlayerController, playerTime } from './controller';
import { getPlayerMessages, type PlayerMessages } from './locale';
import { PlayerTimeline } from './timeline';
import type { PlayerControllerOptions, PlayerOverlay, PlayerSource, PlayerControlsVariant, PlayerProgram, PlayerQueueItem } from './types';

export interface PlayerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onError'> {
  source: PlayerSource;
  controller?: PlayerController;
  /** Stable initial options. For dynamic plugins, create a new controller. */
  options?: PlayerControllerOptions;
  locale?: string;
  messages?: Partial<PlayerMessages>;
  overlays?: PlayerOverlay[];
  controlsVariant?: PlayerControlsVariant;
  program?: PlayerProgram;
  queue?: PlayerQueueItem[];
  activeQueueId?: string;
  onQueueSelect?: (item: PlayerQueueItem) => void;
  /** Audio players can live in the footer and expand into a bottom sheet. */
  presentation?: 'inline' | 'footer' | 'sheet';
  autoPlay?: boolean;
  muted?: boolean;
}
export function usePlayer(controller: PlayerController) {
  return React.useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getServerSnapshot);
}
export function Player({ source, controller: provided, options, locale = 'en', messages, overlays = [], controlsVariant = 'compact', program, queue = [], activeQueueId, onQueueSelect, presentation = 'inline', autoPlay = false, muted = false, className, ...props }: PlayerProps) {
  const [local] = React.useState(() => new PlayerController(options));
  const controller = provided ?? local;
  const state = usePlayer(controller);
  const t = getPlayerMessages(locale, messages);
  const media = React.useRef<HTMLVideoElement>(null);
  const intro = React.useRef<HTMLVideoElement>(null);
  const clientAds = React.useRef<HTMLDivElement>(null);
  const serverAds = React.useRef<HTMLDivElement>(null);
  const root = React.useRef<HTMLDivElement>(null);
  const queueViewport = React.useRef<HTMLDivElement>(null);
  const [settings, setSettings] = React.useState(false);
  const [downloads, setDownloads] = React.useState(false);
  const [expanded, setExpanded] = React.useState(presentation === 'sheet');
  const [actionError, setActionError] = React.useState('');
  const [fullscreen, setFullscreen] = React.useState(false);
  const [queueOpen, setQueueOpen] = React.useState(controlsVariant === 'series');
  const [idle, setIdle] = React.useState(false);
  const [activity, setActivity] = React.useState(0);
  const [keyboardActive, setKeyboardActive] = React.useState(false);
  const [pointerActive, setPointerActive] = React.useState(false);
  const id = React.useId();
  const audio = source.type === 'audio';
  const docked = audio && presentation !== 'inline';
  const immersive = !audio && controlsVariant !== 'standard';
  const activeIndex = queue.findIndex(item => item.id === (activeQueueId ?? state.source?.id));
  const canSelectQueue = !!onQueueSelect && !state.ad && state.phase !== 'splash';
  const wake = () => { setIdle(false); setActivity(value => value + 1); };
  React.useEffect(() => {
    const viewport = queueViewport.current;
    const current = viewport?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!viewport || !current) return;
    const containerRect = viewport.getBoundingClientRect();
    const itemRect = current.getBoundingClientRect();
    if (itemRect.top < containerRect.top) viewport.scrollTop -= containerRect.top - itemRect.top;
    else if (itemRect.bottom > containerRect.bottom) viewport.scrollTop += itemRect.bottom - containerRect.bottom;
  }, [queueOpen, activeQueueId, state.source?.id]);
  React.useEffect(() => { setQueueOpen(controlsVariant === 'series'); wake(); }, [controlsVariant]);
  React.useEffect(() => {
    if (!pointerActive) return;
    const release = () => { setPointerActive(false); wake(); };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);
    return () => {
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', release);
    };
  }, [pointerActive]);
  React.useEffect(() => {
    setIdle(false);
    // A stationary pointer or an open episode queue must not pin the overlay.
    // Keep controls accessible while navigating settings, using keys or dragging.
    if (!immersive || state.phase !== 'content' || settings || downloads || keyboardActive || pointerActive) return;
    const timer = setTimeout(() => setIdle(true), 3000);
    return () => clearTimeout(timer);
  }, [immersive, activity, state.paused, state.phase, settings, downloads, keyboardActive, pointerActive]);
  React.useEffect(() => controller.connect(media.current!, intro.current!, clientAds.current!, serverAds.current!), [controller]);
  React.useEffect(() => { void controller.loadSource(source).catch(() => setActionError(t.error)); }, [controller, source]);
  React.useEffect(() => { controller.setMuted(muted); }, [controller, muted]);
  React.useEffect(() => {
    if (autoPlay && (state.phase === 'splash' || state.phase === 'content') && state.currentTime === 0) void controller.play();
  }, [controller, autoPlay, state.phase]);
  React.useEffect(() => {
    const update = () => setFullscreen(document.fullscreenElement === root.current);
    document.addEventListener('fullscreenchange', update);
    return () => document.removeEventListener('fullscreenchange', update);
  }, []);
  const act = (task: () => unknown, error = t.actionError) => { setActionError(''); void Promise.resolve().then(task).catch(() => setActionError(error)); };
  const toggle = () => state.paused ? void controller.play() : controller.pause();
  const switchFullscreen = () => act(() => document.fullscreenElement ? document.exitFullscreen() : root.current?.requestFullscreen());
  const controls = (suffix: string) => <div className="kivora-player-controls">
    <PlayerTimeline controller={controller} state={state} messages={t} />
    <div className="kivora-player-toolbar">
      <Button type="button" size="icon" variant="ghost" aria-label={state.paused ? t.play : t.pause} onClick={toggle} disabled={state.phase === 'error'}>{state.paused ? <Play size={20} /> : <Pause size={20} />}</Button>
      <Button type="button" size="icon" variant="ghost" aria-label={t.back} onClick={() => controller.seek(state.currentTime - 10)} disabled={state.phase !== 'content'}><RotateCcw size={18} /></Button>
      <Button type="button" size="icon" variant="ghost" aria-label={t.forward} onClick={() => controller.seek(state.currentTime + 10)} disabled={state.phase !== 'content'}><RotateCw size={18} /></Button>
      <Button type="button" size="icon" variant="ghost" aria-label={state.muted ? t.unmute : t.mute} onClick={() => controller.setMuted(!state.muted)}>{state.muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</Button>
      <Slider className="kivora-player-volume" aria-label={t.volume} min={0} max={1} step={0.05} value={[state.volume]} onValueChange={values => controller.setVolume(values[0] ?? 0)} />
      <span className="flex-1" />
      {immersive && controlsVariant === 'cinema' && <div className="kivora-player-transport">
        <Button type="button" size="icon" variant="ghost" aria-label={t.previous} disabled={!canSelectQueue || activeIndex <= 0} onClick={() => onQueueSelect?.(queue[activeIndex - 1]!)}><SkipBack size={19} /></Button>
        <Button type="button" size="icon" variant="ghost" aria-label={t.next} disabled={!canSelectQueue || activeIndex < 0 || activeIndex >= queue.length - 1} onClick={() => onQueueSelect?.(queue[activeIndex + 1]!)}><SkipForward size={19} /></Button>
      </div>}
      {state.phase === 'ad' && <span className="text-xs">{t.ad} · {playerTime(state.ad?.remaining ?? 0)}</span>}
      {state.ad?.canSkip && <Button type="button" size="sm" variant="secondary" className="kivora-player-skip-ad" onClick={controller.skipAd}>{t.skipAd}</Button>}
      {immersive && queue.length > 0 && <Button type="button" size="icon" variant="ghost" aria-label={t.episodes} aria-expanded={queueOpen} disabled={!canSelectQueue} onClick={() => { setQueueOpen(!queueOpen); setSettings(false); setDownloads(false); }}><ListVideo size={19} /></Button>}
      <Button type="button" size="icon" variant="ghost" aria-label={t.settings} aria-expanded={settings} onClick={() => { setSettings(!settings); setDownloads(false); setQueueOpen(false); }}><Settings2 size={18} /></Button>
      {state.offlineSupported && <Button type="button" size="icon" variant="ghost" aria-label={t.downloads} aria-expanded={downloads} onClick={() => { setDownloads(!downloads); setSettings(false); setQueueOpen(false); act(controller.refreshDownloads); }}><FolderDown size={18} /></Button>}
      {!audio && <>
        <Button type="button" className="kivora-player-pip" size="icon" variant="ghost" aria-label={t.pip} disabled={state.phase === 'ad' || state.phase === 'splash'} onClick={() => act(() => document.pictureInPictureElement ? document.exitPictureInPicture() : media.current?.requestPictureInPicture())}><PictureInPicture2 size={18} /></Button>
        <Button type="button" size="icon" variant="ghost" aria-label={fullscreen ? t.exitFullscreen : t.fullscreen} onClick={switchFullscreen}>{fullscreen ? <Minimize size={18} /> : <Maximize size={18} />}</Button>
      </>}
      {docked && suffix === 'main' && <Button type="button" size="icon" variant="ghost" aria-label={t.expand} onClick={() => setExpanded(true)}><ChevronUp size={20} /></Button>}
    </div>
    {settings && <div className="kivora-player-settings" aria-label={t.settings}>
      <label>{t.quality}<Select instanceId={`${id}-${suffix}-quality`} aria-label={t.quality} mobileSheetTitle={t.quality} menuPlacement="auto" isSearchable={false} isDisabled={!!state.ad}
        options={[{ value: 'auto', label: t.auto }, ...state.videoTracks.map((track, index) => ({ value: String(index), label: track.height ? `${track.height}p${track.hdr ? ` ${track.hdr}` : ''}` : track.label ?? String(Math.round(track.bandwidth / 1000)) + ' kbps' }))]}
        value={state.automaticQuality ? { value: 'auto', label: t.auto } : (() => { const index = state.videoTracks.findIndex(track => track.active); const track = state.videoTracks[index]; return { value: String(index), label: track?.height ? `${track.height}p` : t.auto }; })()}
        onChange={option => controller.selectQuality(!option || option.value === 'auto' ? null : Number(option.value))} /></label>
      <label>{t.audio}<Select instanceId={`${id}-${suffix}-audio`} aria-label={t.audio} placeholder="—" mobileSheetTitle={t.audio} menuPlacement="auto" isSearchable={false} isDisabled={!state.audioTracks.length || !!state.ad}
        options={state.audioTracks.map((track, index) => ({ value: String(index), label: track.label || track.language || String(index + 1) }))}
        value={(() => { const index = state.audioTracks.findIndex(track => track.active); const track = state.audioTracks[index]; return track ? { value: String(index), label: track.label || track.language || String(index + 1) } : null; })()}
        onChange={option => option && controller.selectAudio(Number(option.value))} /></label>
      <label>{t.subtitles}<Select instanceId={`${id}-${suffix}-text`} aria-label={t.subtitles} mobileSheetTitle={t.subtitles} menuPlacement="auto" isSearchable={false} isDisabled={!!state.ad}
        options={[{ value: 'off', label: t.off }, ...state.textTracks.map(track => ({ value: String(track.id), label: track.label || track.language }))]}
        value={(() => { const track = state.textTracks.find(track => track.active); return track ? { value: String(track.id), label: track.label || track.language } : { value: 'off', label: t.off }; })()}
        onChange={option => controller.selectText(!option || option.value === 'off' ? null : Number(option.value))} /></label>
      <label>{t.speed}<Select instanceId={`${id}-${suffix}-rate`} aria-label={t.speed} mobileSheetTitle={t.speed} menuPlacement="auto" isSearchable={false} isDisabled={!!state.ad}
        options={[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => ({ value: String(rate), label: `${rate}×` }))} value={{ value: String(state.rate), label: `${state.rate}×` }} onChange={option => option && controller.setRate(Number(option.value))} /></label>
    </div>}
    {(!immersive || downloads) && <>
    {state.downloading ? <div className="flex items-center gap-3 py-2"><Progress aria-label={t.downloading} value={(state.downloadProgress ?? 0) * 100} className="flex-1" /><Button type="button" variant="ghost" onClick={() => act(controller.cancelDownload)}>{t.cancelDownload}</Button></div> : source.offline?.enabled && state.offlineSupported && !state.live && <Button type="button" variant="outline" size="sm" disabled={state.phase !== 'content'} onClick={() => act(controller.download, t.downloadError)}><Download size={16} />{t.download}</Button>}
    {source.downloadUrl && !source.drm && !source.configuration?.drm && !controller.getEngine()?.drmInfo() && <a className="ml-3 text-sm underline" href={source.downloadUrl} download rel="noreferrer">{t.exportFile}</a>}
    </>}
    {downloads && <div className="kivora-player-downloads">
      {!state.downloads.length && <p className="text-sm text-muted-foreground">{t.emptyDownloads}</p>}
      {state.downloads.map(item => <div key={item.uri} className="flex min-w-0 flex-wrap items-center gap-2 py-2">
        <span className="min-w-0 flex-1 truncate text-sm">{item.title} · {(item.size / 1048576).toFixed(1)} MB</span>
        <Button type="button" size="sm" variant="secondary" disabled={item.expiration < Date.now()} onClick={() => act(() => controller.playDownload(item))}>{item.expiration < Date.now() ? t.expired : t.playOffline}</Button>
        <Button type="button" size="icon" variant="ghost" aria-label={`${t.remove}: ${item.title}`} onClick={() => act(() => controller.removeDownload(item.uri))}><X size={16} /></Button>
      </div>)}
    </div>}
    {actionError && <p role="alert" className="py-2 text-sm text-destructive">{actionError}</p>}
  </div>;
  return <div {...props} ref={root} data-player-phase={state.phase} data-player-source={state.source?.id} data-controls-variant={immersive ? controlsVariant : 'standard'} data-controls-idle={idle ? 'true' : 'false'} className={cn('kivora-player', immersive && 'kivora-player-immersive', audio && 'kivora-player-audio', docked && 'kivora-player-footer', className)}
    onPointerEnter={event => { props.onPointerEnter?.(event); setKeyboardActive(false); wake(); }}
    onPointerMove={event => { props.onPointerMove?.(event); setKeyboardActive(false); wake(); }}
    onPointerDown={event => { props.onPointerDown?.(event); setKeyboardActive(false); setPointerActive(true); wake(); }}
    onKeyDownCapture={event => { props.onKeyDownCapture?.(event); setKeyboardActive(true); wake(); }}
    onFocusCapture={event => { props.onFocusCapture?.(event); wake(); }}
    onBlurCapture={event => { props.onBlurCapture?.(event); if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardActive(false); }}
    onKeyDown={event => {
      props.onKeyDown?.(event);
      if (event.defaultPrevented) return;
      if (event.key === 'Escape') { setSettings(false); setDownloads(false); setQueueOpen(false); return; }
      if ((event.target as HTMLElement).closest('button,input,select,textarea,[role="combobox"],[role="slider"],[contenteditable]')) return;
      if (event.key === ' ') { event.preventDefault(); toggle(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); controller.seek(state.currentTime + 10); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); controller.seek(state.currentTime - 10); }
    }}>
    <div className="kivora-player-stage" tabIndex={0} aria-label={state.source?.title ?? source.title}>
      <video ref={media} playsInline preload="metadata" poster={source.poster} className={state.phase === 'splash' ? 'invisible' : ''} />
      <video ref={intro} playsInline preload="metadata" className={state.phase === 'splash' ? 'kivora-player-intro' : 'hidden'} />
      {audio && <div className="kivora-player-art">{source.poster ? <img src={source.poster} alt="" /> : <Music2 size={48} />}<span>{state.source?.title ?? source.title}</span></div>}
      {(state.phase === 'loading' || state.buffering) && <div className="kivora-player-center pointer-events-none" role="status"><LoaderCircle className="motion-safe:animate-spin" aria-label={t.loading} size={32} /></div>}
      {state.phase === 'error' && <div className="kivora-player-center"><p role="alert">{t.error}</p><Button type="button" onClick={() => act(controller.retry)}>{t.retry}</Button></div>}
      {!state.buffering && ['splash', 'content', 'ended'].includes(state.phase) && !audio && (state.paused || (immersive && controlsVariant !== 'compact')) && <div className={cn('kivora-player-center kivora-player-central-play pointer-events-none', idle && 'kivora-player-ui-hidden', queueOpen && 'kivora-player-center-with-queue')}>
        {immersive && controlsVariant !== 'compact' && <Button type="button" variant="ghost" size="icon" className="pointer-events-auto" aria-label={t.back} disabled={state.phase !== 'content'} onClick={() => controller.seek(state.currentTime - 10)}><RotateCcw size={26} /><span className="kivora-player-skip-label">10</span></Button>}
        <Button type="button" size="icon" className="pointer-events-auto kivora-player-play-large" aria-label={state.paused ? t.play : t.pause} onClick={toggle}>{state.paused ? <Play size={32} fill="currentColor" /> : <Pause size={32} fill="currentColor" />}</Button>
        {immersive && controlsVariant !== 'compact' && <Button type="button" variant="ghost" size="icon" className="pointer-events-auto" aria-label={t.forward} disabled={state.phase !== 'content'} onClick={() => controller.seek(state.currentTime + 10)}><RotateCw size={26} /><span className="kivora-player-skip-label">10</span></Button>}
      </div>}
      <div ref={clientAds} className="kivora-player-ad-container" /><div ref={serverAds} className="kivora-player-ad-container" />
      <div className={cn('kivora-player-overlays', immersive && idle && 'kivora-player-ui-hidden')}>{overlays.filter(overlay => !overlay.phases || overlay.phases.includes(state.phase)).map(overlay => <React.Fragment key={overlay.id}>{overlay.render({ controller, state })}</React.Fragment>)}</div>
      {immersive && <div className={cn('kivora-player-chrome', idle && 'kivora-player-ui-hidden')}>
        {controlsVariant !== 'compact' && !state.ad && !settings && !downloads && <div className="kivora-player-heading"><div><strong>{program?.title ?? source.title}</strong>{program?.subtitle && <span>{program.subtitle}</span>}</div>{program?.badge && <span className="kivora-player-badge">{program.badge}</span>}</div>}
        {controlsVariant === 'series' && !state.ad && !settings && !downloads && <div className={cn('kivora-player-program', queueOpen && 'kivora-player-program-with-queue')}>
          <span className="kivora-player-eyebrow">{t.nowPlaying}</span><p>{program?.metadata}</p><h2>{program?.subtitle ?? program?.title ?? source.title}</h2>{program?.description && <p className="kivora-player-description">{program.description}</p>}
        </div>}
        {queueOpen && !state.ad && queue.length > 0 && <aside className="kivora-player-queue" aria-label={t.upNext}>
          <div className="kivora-player-queue-heading"><span>{t.upNext}</span><Button type="button" size="icon" variant="ghost" aria-label={t.close} onClick={() => setQueueOpen(false)}><X size={16} /></Button></div>
          <div ref={queueViewport} className="kivora-player-queue-items">{queue.map(item => <button type="button" key={item.id} className="kivora-player-episode" aria-current={item.id === (activeQueueId ?? state.source?.id) ? 'true' : undefined} disabled={!canSelectQueue} onClick={() => onQueueSelect?.(item)}>
            {item.image && <img src={item.image} alt="" />}<div><strong>{item.title}</strong><span>{item.subtitle}</span>{item.progress !== undefined && <Progress value={Math.max(0, Math.min(1, item.progress)) * 100} className="kivora-player-episode-progress" />}</div>
          </button>)}</div>
        </aside>}
        {controls('main')}
      </div>}
    </div>
    {!immersive && controls('main')}
    {docked && <Sheet open={expanded} onOpenChange={setExpanded}><SheetContent side="bottom" closeLabel={t.close} className="max-h-[90dvh] overflow-auto">
      <SheetTitle>{state.source?.title ?? source.title}</SheetTitle><SheetDescription className="sr-only">{t.audio}</SheetDescription>
      <div className="kivora-player-sheet-art">{source.poster ? <img src={source.poster} alt="" /> : <Music2 size={80} />}</div>
      {controls('sheet')}
    </SheetContent></Sheet>}
  </div>;
}
