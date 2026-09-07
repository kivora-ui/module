import * as React from 'react';
import { ActivityIndicator, AppState, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View, type ViewProps } from 'react-native';
import Video, { ResizeMode, SelectedTrackType, SelectedVideoTrackType, type VideoRef } from 'react-native-video';
import { OrientationLocker, LANDSCAPE, UNLOCK } from 'react-native-orientation-locker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Settings2, Maximize, ChevronDown, ListVideo, X, Music2, ChevronUp, EllipsisVertical } from 'lucide-react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { Slider } from '../slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../tabs';
import { BottomSheet } from '../bottom-sheet';
import { PlayerController, playerTime } from './controller';
import type { PlayerSource, PlayerControlsVariant, PlayerProgram, PlayerQueueItem, PlayerOrientation } from './types';

export interface PlayerProps extends ViewProps {
  source: PlayerSource;
  controller?: PlayerController;
  autoPlay?: boolean;
  /** Keep list available while trying the tabbed settings panel. */
  settingsLayout?: 'tabs' | 'list';
  /** auto allows portrait/landscape; landscape starts playback in locked fullscreen. */
  orientation?: PlayerOrientation;
  muted?: boolean;
  locale?: 'es' | 'en';
  controlsVariant?: PlayerControlsVariant;
  program?: PlayerProgram;
  queue?: PlayerQueueItem[];
  activeQueueId?: string;
  onQueueSelect?: (item: PlayerQueueItem) => void;
  onClose?: () => void;
  presentation?: 'inline' | 'footer';
}
export function usePlayer(controller: PlayerController) { return React.useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getServerSnapshot); }
const translations = {
  es: { play: 'Reproducir', pause: 'Pausar', back: 'Retroceder 10 segundos', forward: 'Avanzar 10 segundos', mute: 'Silenciar', unmute: 'Activar sonido', settings: 'Ajustes de reproducción', fullscreen: 'Pantalla completa', episodes: 'Episodios', next: 'A continuación', close: 'Cerrar', loading: 'Cargando', error: 'No se ha podido reproducir este contenido.', retry: 'Reintentar', ad: 'Publicidad', ads: 'Contiene anuncios', skip: 'Saltar anuncio', speed: 'Velocidad', audio: 'Audio', subtitles: 'Subtítulos', quality: 'Calidad', auto: 'Auto', off: 'Desactivados', expand: 'Ampliar reproductor', collapse: 'Contraer reproductor', seek: 'Posición de reproducción', volume: 'Volumen' },
  en: { play: 'Play', pause: 'Pause', back: 'Back 10 seconds', forward: 'Forward 10 seconds', mute: 'Mute', unmute: 'Unmute', settings: 'Playback settings', fullscreen: 'Fullscreen', episodes: 'Episodes', next: 'Up next', close: 'Close', loading: 'Loading', error: 'This media could not be played.', retry: 'Retry', ad: 'Advertisement', ads: 'Contains ads', skip: 'Skip ad', speed: 'Speed', audio: 'Audio', subtitles: 'Subtitles', quality: 'Quality', auto: 'Auto', off: 'Off', expand: 'Expand player', collapse: 'Collapse player', seek: 'Playback position', volume: 'Volume' },
};
function IconButton({ label, onPress, children, disabled = false, round = false, large = false }: { label: string; onPress: () => void; children: React.ReactNode; disabled?: boolean; round?: boolean; large?: boolean }) {
  const [pressed, setPressed] = React.useState(false);
  return <Pressable onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} accessibilityRole="button" accessibilityLabel={label} accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={[styles.icon, round && styles.roundIcon, large && styles.largeIcon, { opacity: disabled ? .3 : pressed ? .6 : 1 }]}>{children}</Pressable>;
}
export function Player({ source, controller: provided, autoPlay = false, settingsLayout = 'tabs', orientation = 'auto', muted = false, locale = 'es', controlsVariant = 'compact', program, queue = [], activeQueueId, onQueueSelect, onClose, presentation = 'inline', style, ...props }: PlayerProps) {
  const [local] = React.useState(() => new PlayerController());
  const controller = provided ?? local;
  const state = usePlayer(controller);
  const video = React.useRef<VideoRef>(null);
  const [queueOpen, setQueueOpen] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  // Audio-only: a further step up from the expanded sheet, a true full-screen Modal
  // that covers everything (including any bottom navigation the host app renders),
  // reached from and returning to the expanded sheet without stopping playback.
  const [audioFullscreen, setAudioFullscreen] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const insets = useSafeAreaInsets();
  // Hidden by default: the overlay only appears once the user explicitly taps the
  // video (see the full-screen `wake` Pressable below), never automatically.
  const [idle, setIdle] = React.useState(true);
  const [activity, setActivity] = React.useState(0);
  const t = translations[locale];
  const audio = source.type === 'audio';
  const [width, setWidth] = React.useState(0);
  const mobile = !audio && width <= 650;
  const gradientId = React.useId();
  const [mobileQueueOpen, setMobileQueueOpen] = React.useState(false);
  const changeQueue = mobile ? setMobileQueueOpen : setQueueOpen;
  const queueVisible = !audio && (mobile ? mobileQueueOpen : queueOpen) && queue.length > 0 && !state.ad;
  const wake = () => { setIdle(false); setActivity(value => value + 1); };
  React.useEffect(() => controller.connect(time => video.current?.seek(time), () => { video.current?.pause(); video.current?.dismissFullscreenPlayer(); }), [controller]);
  React.useEffect(() => controller.on(event => {
    if (event.type === 'close') { setFullscreen(false); setSettings(false); setExpanded(false); setAudioFullscreen(false); onClose?.(); }
  }), [controller, onClose]);
  React.useEffect(() => { controller.loadSource(source, autoPlay); }, [controller, source, autoPlay]);
  React.useEffect(() => {
    if (!audio && orientation === 'landscape' && !state.paused && state.mediaUri) setFullscreen(true);
  }, [audio, orientation, state.paused, state.mediaUri]);
  React.useEffect(() => { controller.setMuted(muted); }, [controller, muted]);
  React.useEffect(() => { setQueueOpen(!mobile && controlsVariant === 'series'); }, [controlsVariant, mobile]);
  React.useEffect(() => {
    if (audio) return;
    const subscription = AppState.addEventListener('change', next => { if (next !== 'active') controller.pause(); });
    return () => subscription.remove();
  }, [audio, controller]);
  React.useEffect(() => {
    // Only explicit UI state (settings sheet, an ad) keeps the overlay pinned visible;
    // loading/paused are not user actions and must not force it back on. `activity` is
    // bumped by `wake()`, the only path that reveals it, on every explicit tap/interaction.
    if (audio || settings || state.ad) { setIdle(false); return; }
    const timer = setTimeout(() => setIdle(true), 3000);
    return () => clearTimeout(timer);
  }, [audio, settings, state.ad, activity]);
  const revision = state.revision;
  const current = () => controller.getSnapshot().revision === revision;
  const nativeSource = React.useMemo(() => state.mediaUri ? {
    ...(!state.ad || state.ad.ima ? source.nativeSource : {}),
    uri: state.mediaUri,
    type: state.mediaMimeType?.includes('dash') ? 'mpd' : state.mediaMimeType?.includes('mpegurl') ? 'm3u8' : undefined,
    startPosition: state.startTime * 1000,
    ...(!state.ad && source.ads?.tagUrl ? { ad: { type: 'csai' as const, adTagUrl: source.ads.tagUrl } } : {}),
  } : undefined, [state.mediaUri, revision, source]);
  const toggle = () => { wake(); if (state.paused) controller.play(); else controller.pause(); };
  const adLabel = state.ad ? `${t.ad}${state.ad.title ? ` · ${state.ad.title}` : ''}${state.ad.remaining > 0 ? ` · ${playerTime(state.ad.remaining)}` : ''}` : t.ads;
  const containsAds = !!(source.ads?.tagUrl || source.ads?.breaks?.length);
  const transport = <>
    <IconButton label={state.paused ? t.play : t.pause} onPress={toggle} disabled={state.phase === 'error'}>{state.paused ? <Play color="white" size={23} /> : <Pause color="white" size={23} />}</IconButton>
    <IconButton label={t.back} onPress={() => controller.seek(state.currentTime - 10)} disabled={!!state.ad || state.phase !== 'content'}><RotateCcw color="white" size={21} /></IconButton>
    <IconButton label={t.forward} onPress={() => controller.seek(state.currentTime + 10)} disabled={!!state.ad || state.phase !== 'content'}><RotateCw color="white" size={21} /></IconButton>
  </>;
  // Shared across all three audio presentations (mini dock, expanded sheet, full screen)
  // so they all look and behave the same (cover, title, close button); each presentation
  // only differs by the extra `action` button it passes (e.g. maximize/collapse) and by
  // whether it shows this small thumbnail (mini) or the bigger cover below (expanded/full).
  const audioHeading = (action?: React.ReactNode, showThumbnail = true) => <View style={styles.audioHeading}>
    {showThumbnail && (source.poster ? <Image source={{ uri: source.poster }} style={styles.cover} /> : <Music2 color="white" size={32} />)}
    <Text style={[styles.white, styles.spacer]} numberOfLines={1}>{source.title}</Text>
    {action}
    {onClose && <IconButton label={t.close} onPress={onClose}><X color="white" size={20} /></IconButton>}
  </View>;
  // Bigger, protagonist cover art for the expanded sheet and full-screen presentations,
  // where there's room for it (the docked mini bar keeps the small thumbnail instead).
  const audioCover = <View style={styles.bigCoverWrap}>
    {source.poster ? <Image source={{ uri: source.poster }} style={styles.bigCover} /> : <View style={[styles.bigCover, styles.bigCoverPlaceholder]}><Music2 color="#a1a1a1" size={48} /></View>}
  </View>;
  const controls = <View style={styles.controls}>
    {(!!state.ad || (audio && containsAds)) && <View style={styles.adRow}><Text style={styles.adText}>{adLabel}</Text>{state.ad?.canSkip && <Pressable accessibilityRole="button" onPress={controller.skipAd} style={styles.pill}><Text style={styles.white}>{t.skip}</Text></Pressable>}</View>}
    <View style={styles.timeline}>
      <Text style={styles.time} testID={audio ? 'audio-time' : 'video-time'}>{playerTime(state.currentTime)}</Text>
      <View style={styles.seek}><Slider accessibilityLabel={t.seek} value={[state.currentTime]} min={0} max={state.duration || 1} step={1} disabled={!!state.ad || state.duration <= 0} onValueChange={values => { wake(); controller.seek(values[0] ?? 0); }} trackClassName="bg-white/30" rangeClassName="bg-rose-500" thumbClassName="bg-rose-500" /></View>
      <Text style={styles.time}>{playerTime(state.duration)}</Text>
    </View>
    <View style={styles.toolbar}>
      {transport}
      <IconButton label={state.muted ? t.unmute : t.mute} onPress={() => controller.setMuted(!state.muted)}>{state.muted ? <VolumeX color="white" size={21} /> : <Volume2 color="white" size={21} />}</IconButton>
      <View style={styles.spacer} />
      {!audio && queue.length > 0 && <IconButton label={t.episodes} onPress={() => { setQueueOpen(!queueOpen); wake(); }}><ListVideo color="white" size={21} /></IconButton>}
      <IconButton label={t.settings} onPress={() => { setSettings(true); wake(); }}><Settings2 color="white" size={21} /></IconButton>
      {!audio && <IconButton label={t.fullscreen} disabled={!!state.ad} onPress={() => setFullscreen(true)}><Maximize color="white" size={21} /></IconButton>}
      {audio && presentation === 'footer' && <IconButton label={t.expand} onPress={() => setExpanded(true)}><ChevronUp color="white" size={21} /></IconButton>}
    </View>
  </View>;
  const choices = (title: string, value: string, options: { value: string; label: string }[], select: (value: string) => void) => <View style={styles.choiceGroup}>
    <Text className="text-base font-semibold text-foreground">{title}</Text>
    <View style={settingsLayout === 'tabs' ? styles.optionList : styles.choices}>{options.map(option => <Pressable key={option.value} accessibilityRole="radio" accessibilityLabel={`${title}: ${option.label}`} accessibilityState={{ checked: value === option.value, disabled: !!state.ad }} disabled={!!state.ad} onPress={() => select(option.value)} style={[styles.choice, settingsLayout === 'tabs' && styles.optionRow, value === option.value && styles.selected]}><Text className="text-foreground">{option.label}</Text></Pressable>)}</View>
  </View>;
  const episodeItems = queue.map(item => <Pressable key={item.id} accessibilityRole="button" accessibilityLabel={item.title} accessibilityState={{ selected: item.id === activeQueueId, disabled: !onQueueSelect }} disabled={!onQueueSelect} onPress={() => { onQueueSelect?.(item); if (mobile) setMobileQueueOpen(false); wake(); }} style={[styles.episode, item.id === activeQueueId && styles.activeEpisode]}>
    {item.image && <Image source={{ uri: item.image }} style={styles.episodeImage} />}
    <View style={styles.episodeInfo}><Text numberOfLines={2} style={styles.white}>{item.title}</Text>{item.subtitle && <Text numberOfLines={1} style={styles.subtitle}>{item.subtitle}</Text>}</View>
  </Pressable>);
  const episodes = <View style={styles.queue}>
      <View style={styles.queueHeading}><Text style={styles.white}>{t.next}</Text><IconButton label={`${t.close} ${t.next}`} onPress={() => { changeQueue(false); wake(); }}><X color="white" size={18} /></IconButton></View>
      {/* Inside the mobile BottomSheet the sheet's own Scrollable already owns vertical
          scrolling/gestures; nesting another vertical ScrollView here would fight it for
          the pan gesture and never scroll. Only the desktop/tablet inline panel (which has
          no scrollable ancestor) needs its own bounded ScrollView. */}
      {mobile
        ? <View style={styles.episodeList}>{episodeItems}</View>
        : <ScrollView showsVerticalScrollIndicator={false} style={styles.episodeScroll} contentContainerStyle={styles.episodeList}>{episodeItems}</ScrollView>}
    </View>;
  if (state.phase === 'idle' && state.source) return null;
  return <View {...props} testID={props.testID ?? (audio ? 'audio-player' : 'video-player')} style={[styles.root, style]} onLayout={event => { setWidth(event.nativeEvent.layout.width); props.onLayout?.(event); }}>
    {!audio && (fullscreen || orientation === 'auto') && <OrientationLocker orientation={orientation === 'landscape' ? LANDSCAPE : UNLOCK} />}
    <View style={audio ? styles.audioStage : styles.stage}>
      <Video key={revision} ref={video} source={nativeSource} style={audio ? styles.audioMedia : StyleSheet.absoluteFill} resizeMode={ResizeMode.CONTAIN} controls={fullscreen || !!state.ad?.ima} fullscreen={fullscreen} fullscreenOrientation={orientation === 'landscape' ? 'landscape' : 'all'} fullscreenAutorotate={orientation === 'auto'} paused={state.paused} muted={state.muted} volume={state.volume} rate={state.ad ? 1 : state.rate} playInBackground={false} playWhenInactive={false} ignoreSilentSwitch="ignore" progressUpdateInterval={250}
        selectedAudioTrack={{ type: state.audioTrack === 'auto' ? SelectedTrackType.SYSTEM : SelectedTrackType.INDEX, value: state.audioTrack === 'auto' ? undefined : Number(state.audioTrack) }}
        selectedTextTrack={{ type: state.textTrack === 'off' ? SelectedTrackType.DISABLED : SelectedTrackType.INDEX, value: state.textTrack === 'off' ? undefined : Number(state.textTrack) }}
        selectedVideoTrack={{ type: state.videoTrack === 'auto' ? SelectedVideoTrackType.AUTO : SelectedVideoTrackType.RESOLUTION, value: state.videoTrack === 'auto' ? undefined : Number(state.videoTrack) }}
        onLoad={data => { if (current()) controller.loaded(data); }}
        onProgress={data => { if (current()) controller.progress(data.currentTime); }}
        onBuffer={data => { if (current()) controller.buffer(data.isBuffering); }}
        onEnd={() => { if (current()) controller.ended(); }}
        onError={data => { if (current()) controller.fail(data.error.errorString ?? t.error); }}
        onPlaybackStateChanged={data => { if (current() && !data.isSeeking) { if (data.isPlaying) controller.play(); if (fullscreen) controller.playback(data.isPlaying); } }}
        onFullscreenPlayerWillPresent={() => setFullscreen(true)}
        onFullscreenPlayerDidDismiss={() => { if (!current()) return; if (orientation === 'landscape') controller.pause(); setFullscreen(false); wake(); }}
        onAudioFocusChanged={data => { if (current() && !data.hasAudioFocus) controller.pause(); }}
        onAudioBecomingNoisy={controller.pause}
        onReceiveAdEvent={data => { if (current() && data.event) controller.imaEvent(data.event); }}
      />
      {audio ? audioHeading() : <>
        <Pressable accessibilityLabel={source.title} onPress={wake} style={StyleSheet.absoluteFill} />
        {!mobile && !idle && !state.ad && <View pointerEvents="none" style={styles.heading}><Text style={styles.title}>{program?.title ?? source.title}</Text>{program?.subtitle && <Text style={styles.subtitle}>{program.subtitle}</Text>}</View>}
        {!mobile && !idle && !queueVisible && !state.ad && !state.buffering && state.phase === 'content' && <View pointerEvents="box-none" style={styles.center}><IconButton label={state.paused ? t.play : t.pause} onPress={toggle}>{state.paused ? <Play color="white" size={38} fill="white" /> : <Pause color="white" size={38} />}</IconButton></View>}
      </>}
      {mobile && !idle && <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        <Svg pointerEvents="none" width="100%" height="100%" style={StyleSheet.absoluteFill}>
          <Defs><LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1"><Stop offset="0" stopColor="#000" stopOpacity={.25} /><Stop offset="0.4" stopColor="#000" stopOpacity={0} /><Stop offset="1" stopColor="#000" stopOpacity={.8} /></LinearGradient></Defs>
          <Rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </Svg>
        <View style={styles.mobileActions}>
          <IconButton round label={t.fullscreen} disabled={!!state.ad} onPress={() => setFullscreen(true)}><Maximize color="white" size={18} /></IconButton>
          {queue.length > 0 && <IconButton round label={t.episodes} disabled={!!state.ad} onPress={() => { setMobileQueueOpen(true); wake(); }}><ListVideo color="white" size={18} /></IconButton>}
          <IconButton round label={t.settings} onPress={() => { setSettings(true); wake(); }}><EllipsisVertical color="white" size={19} /></IconButton>
        </View>
        {!queueVisible && !state.ad && !state.buffering && ['content', 'ended'].includes(state.phase) && <View pointerEvents="box-none" style={[styles.center, styles.mobileTransport]}>
          <IconButton round label={t.back} onPress={() => { controller.seek(state.currentTime - 10); wake(); }}><RotateCcw color="white" size={23} /><Text style={styles.skipNumber}>10</Text></IconButton>
          <IconButton round large label={state.paused ? t.play : t.pause} onPress={toggle}>{state.paused ? <Play color="white" size={30} fill="white" /> : <Pause color="white" size={30} fill="white" />}</IconButton>
          <IconButton round label={t.forward} onPress={() => { controller.seek(state.currentTime + 10); wake(); }}><RotateCw color="white" size={23} /><Text style={styles.skipNumber}>10</Text></IconButton>
        </View>}
        <View style={styles.mobileBottom}>
          {state.ad ? <View style={styles.adRow}><IconButton label={state.paused ? t.play : t.pause} onPress={toggle}>{state.paused ? <Play color="white" size={20} /> : <Pause color="white" size={20} />}</IconButton><Text numberOfLines={1} style={styles.adText}>{adLabel}</Text>{state.ad.canSkip && <Pressable accessibilityRole="button" onPress={controller.skipAd} style={styles.pill}><Text style={styles.white}>{t.skip}</Text></Pressable>}</View> : <>
            <View style={styles.mobileCaption}><View style={styles.spacer}><Text numberOfLines={1} style={styles.mobileTitle}>{program?.title ?? source.title}</Text>{program?.subtitle && <Text numberOfLines={1} style={styles.mobileSubtitle}>{program.subtitle}</Text>}</View><Text style={styles.time} testID="video-time">{playerTime(state.currentTime)} / {playerTime(state.duration)}</Text></View>
            <Slider accessibilityLabel={t.seek} value={[state.currentTime]} min={0} max={state.duration || 1} step={1} disabled={state.duration <= 0} onValueChange={values => { wake(); controller.seek(values[0] ?? 0); }} style={styles.mobileSeek} trackClassName="h-0.5 bg-white/30" rangeClassName="bg-white" thumbClassName="h-2.5 w-2.5 bg-white border-white" />
          </>}
        </View>
      </View>}
      {(state.phase === 'loading' || state.buffering) && <View pointerEvents="none" style={styles.center}><ActivityIndicator accessibilityLabel={t.loading} color="white" /></View>}
      {state.phase === 'error' && <View style={styles.error}><Text style={styles.white}>{t.error}</Text><Pressable accessibilityRole="button" onPress={controller.retry} style={styles.pill}><Text style={styles.white}>{t.retry}</Text></Pressable></View>}
    </View>
    {!mobile && <View pointerEvents={idle && !audio && controlsVariant !== 'standard' ? 'none' : 'auto'} style={{ opacity: idle && !audio && controlsVariant !== 'standard' ? 0 : 1 }}>{controls}</View>}
    {queueVisible && !mobile && episodes}
    {mobile && <BottomSheet open={queueVisible} onOpenChange={setMobileQueueOpen}>{episodes}</BottomSheet>}
    <BottomSheet open={settings} onOpenChange={setSettings} keyboardAware={false}>
      <Text className="text-xl font-semibold text-foreground">{t.settings}</Text>
      {settingsLayout === 'list' ? <>
      {choices(t.speed, String(state.rate), [.5,.75,1,1.25,1.5,2].map(rate => ({ value: String(rate), label: `${rate}×` })), value => controller.setRate(Number(value)))}
      {!audio && choices(t.quality, state.videoTrack, [{ value: 'auto', label: t.auto }, ...Array.from(new Set(state.videoTracks.map(track => track.height).filter((height): height is number => !!height))).sort((a, b) => a - b).map(height => ({ value: String(height), label: `${height}p` }))], controller.selectQuality)}
      {choices(t.audio, state.audioTrack, [{ value: 'auto', label: t.auto }, ...state.audioTracks.map(track => ({ value: String(track.index), label: track.title || track.language || String(track.index + 1) }))], controller.selectAudio)}
      {!audio && choices(t.subtitles, state.textTrack, [{ value: 'off', label: t.off }, ...state.textTracks.map(track => ({ value: String(track.index), label: track.title || track.language || String(track.index + 1) }))], controller.selectText)}
      </> : <Tabs defaultValue={audio ? 'audio' : 'quality'}>
        <TabsList>{(audio ? ['audio', 'speed'] : ['quality', 'audio', 'subtitles', 'speed']).map(tab => <TabsTrigger key={tab} value={tab} className="px-1 py-3" textClassName="text-xs">{t[tab as 'quality' | 'audio' | 'subtitles' | 'speed']}</TabsTrigger>)}</TabsList>
        {!audio && <TabsContent value="quality">
          {choices(t.quality, state.videoTrack, [{ value: 'auto', label: t.auto }, ...Array.from(new Set(state.videoTracks.map(track => track.height).filter((height): height is number => !!height))).sort((a, b) => a - b).map(height => ({ value: String(height), label: `${height}p` }))], controller.selectQuality)}</TabsContent>}
        <TabsContent value="audio">
          {choices(t.audio, state.audioTrack, [{ value: 'auto', label: t.auto }, ...state.audioTracks.map(track => ({ value: String(track.index), label: track.title || track.language || String(track.index + 1) }))], controller.selectAudio)}</TabsContent>
        {!audio && <TabsContent value="subtitles">
          {choices(t.subtitles, state.textTrack, [{ value: 'off', label: t.off }, ...state.textTracks.map(track => ({ value: String(track.index), label: track.title || track.language || String(track.index + 1) }))], controller.selectText)}</TabsContent>}
        <TabsContent value="speed">
          {choices(t.speed, String(state.rate), [.5,.75,1,1.25,1.5,2].map(rate => ({ value: String(rate), label: `${rate}×` })), value => controller.setRate(Number(value)))}</TabsContent>
      </Tabs>}
    </BottomSheet>
    {audio && <BottomSheet open={expanded} onOpenChange={setExpanded}><View style={styles.root}>{audioCover}{audioHeading(<IconButton label={t.fullscreen} onPress={() => setAudioFullscreen(true)}><Maximize color="white" size={20} /></IconButton>, false)}{controls}</View></BottomSheet>}
    {/* A plain full-screen Modal, not another BottomSheet: it must cover the entire
        screen (any host bottom navigation included) rather than the sheet's partial
        80%-max height. `expanded` stays true underneath, so collapsing returns to it. */}
    {audio && audioFullscreen && <Modal visible statusBarTranslucent navigationBarTranslucent onRequestClose={() => setAudioFullscreen(false)}>
      <View style={[styles.audioFullscreen, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        {audioCover}
        {audioHeading(<IconButton label={t.collapse} onPress={() => setAudioFullscreen(false)}><ChevronDown color="white" size={20} /></IconButton>, false)}
        {controls}
      </View>
    </Modal>}
  </View>;
}
const styles = StyleSheet.create({
  roundIcon: { width: 40, height: 40, borderRadius: 22, backgroundColor: '#17171780' },
  largeIcon: { width: 56, height: 56, borderRadius: 30, backgroundColor: '#171717a0' },
  mobileActions: { position: 'absolute', top: 8, right: 8, flexDirection: 'row', gap: 6 },
  mobileTransport: { flexDirection: 'row', gap: 14 },
  skipNumber: { position: 'absolute', color: 'white', fontSize: 8, marginTop: 3 },
  mobileBottom: { position: 'absolute', bottom: 0, left: 12, right: 12 },
  mobileCaption: { flexDirection: 'row', alignItems: 'flex-end', gap: 10 },
  mobileTitle: { color: 'white', fontSize: 14, fontWeight: '500' },
  mobileSubtitle: { color: '#ffffffb0', fontSize: 10 },
  mobileSeek: { marginTop: -10, marginBottom: -8, marginHorizontal: -10, width: 'auto' },

  root: { borderRadius: 16, backgroundColor: '#171717', overflow: 'hidden' },
  audioFullscreen: { flex: 1, backgroundColor: '#171717' },
  stage: { aspectRatio: 16 / 9, backgroundColor: '#000' }, audioStage: { minHeight: 56 }, audioMedia: { width: 1, height: 1, position: 'absolute', opacity: 0 },
  audioHeading: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 12, paddingTop: 8 }, cover: { width: 36, height: 36, borderRadius: 6 },
  bigCoverWrap: { alignItems: 'center', paddingHorizontal: 12, paddingTop: 16, paddingBottom: 4 },
  bigCover: { width: 180, height: 180, borderRadius: 12, backgroundColor: '#262626' },
  bigCoverPlaceholder: { alignItems: 'center', justifyContent: 'center' },
  heading: { position: 'absolute', top: 14, left: 16, right: 16 }, title: { color: '#fff', fontSize: 18, fontWeight: '600', textShadowColor: '#000', textShadowRadius: 5 }, subtitle: { color: '#a1a1a1', fontSize: 11, marginTop: 4 }, white: { color: '#fff', fontSize: 13 },
  center: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }, error: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#171717dd', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12 },
  controls: { paddingHorizontal: 8, paddingBottom: 4 }, timeline: { flexDirection: 'row', alignItems: 'center', gap: 8 }, time: { color: '#ddd', fontSize: 10, fontVariant: ['tabular-nums'] }, seek: { flex: 1 },
  toolbar: { flexDirection: 'row', alignItems: 'center' }, icon: { width: 40, height: 44, alignItems: 'center', justifyContent: 'center' }, spacer: { flex: 1 },
  adRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingTop: 8 }, adText: { color: '#ffd779', fontSize: 12, flex: 1 }, pill: { padding: 8, borderRadius: 6, backgroundColor: '#262626' },
  queue: { paddingHorizontal: 12, paddingBottom: 12 }, queueHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, episodeScroll: { maxHeight: 260 }, episodeList: { gap: 10 }, episode: { flexDirection: 'row', alignItems: 'center', padding: 6, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }, activeEpisode: { borderColor: '#ff3763', borderWidth: 2 }, episodeImage: { width: 120, height: 68, borderRadius: 4, marginRight: 10 }, episodeInfo: { flex: 1, gap: 2 },
  optionList: { gap: 8 }, optionRow: { minHeight: 48, borderWidth: 0, borderRadius: 8, backgroundColor: '#88888812' },
  choiceGroup: { gap: 10, marginVertical: 12 }, choices: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, choice: { borderRadius: 8, borderWidth: 1, borderColor: '#737373', padding: 12 }, selected: { borderColor: '#ff3763', borderWidth: 2 },
});
