import * as React from 'react';
import { ActivityIndicator, Image, Modal, Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUnstableNativeVariable } from 'nativewind';
import { ChevronDown, Maximize, Moon, Music2, Pause, Play, RotateCcw, RotateCw, X, type LucideIcon } from 'lucide-react-native';
import { BottomSheet } from '../bottom-sheet';
import { Slider } from '../slider';
import { playerTime, type PlayerController } from './controller';
import type { PlayerSnapshot, PlayerSource } from './types';
import type { PlayerCast } from './cast-connection';
import { castUnsupportedReason } from './cast';

interface Props {
  source: PlayerSource;
  state: PlayerSnapshot;
  controller: PlayerController;
  cast?: PlayerCast;
  locale: 'es' | 'en';
  onClose?: () => void;
  footer: boolean;
}

function useToken(name: string) {
  const value = (useUnstableNativeVariable as (name: string) => unknown)(name);
  return typeof value === 'string' && /^\d+\s+\d+\s+\d+$/.test(value) ? `rgb(${value.split(/\s+/).join(',')})` : value as string;
}

export function AudioPresentation({ source, state, controller, cast, locale, onClose, footer }: Props) {
  const [expanded, setExpanded] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const [panel, setPanel] = React.useState<'timer' | 'settings'>();
  const [now, setNow] = React.useState(Date.now);
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const foreground = useToken('--foreground');
  const contrast = useToken('--primary-foreground');
  const primary = useToken('--primary');
  const es = locale === 'es';
  React.useEffect(() => {
    if (state.sleepTimer?.mode !== 'deadline') return;
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [state.sleepTimer]);
  const sleepLabel = state.sleepTimer?.mode === 'episode' ? (es ? 'Fin del episodio' : 'End of episode')
    : state.sleepTimer?.mode === 'deadline' ? playerTime(Math.ceil(Math.max(0, state.sleepTimer.deadline - now) / 1000)) : (es ? 'Temporizador' : 'Sleep timer');
  const toggle = () => state.paused ? controller.play() : controller.pause();
  const status = state.castError ? (es ? 'Cast no ha podido reproducir el audio.' : 'Cast could not play this audio.')
    : state.error ? (es ? 'No se ha podido reproducir. Pulsa reproducir para reintentar.' : 'Playback failed. Press play to retry.')
    : state.casting ? (es ? 'Reproduciendo en Google Cast' : 'Playing on Google Cast')
    : cast && castUnsupportedReason(source) ? (es ? 'Este audio solo está disponible en el dispositivo.' : 'This audio is only available on this device.') : undefined;
  const close = () => { setExpanded(false); setFullscreen(false); onClose?.(); };
  const CastButton = cast?.CastButton;
  const route = CastButton && <CastButton accessibilityLabel="Google Cast" tintColor={foreground} style={{ width: 44, height: 44 }} />;
  const iconButton = (Icon: LucideIcon, label: string, onPress: () => void, disabled = false) => <Pressable accessibilityRole="button" accessibilityLabel={label} accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={{ minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center', opacity: disabled ? .35 : 1 }}><Icon size={24} color={foreground} /></Pressable>;
  const playButton = (large: boolean) => <Pressable accessibilityRole="button" accessibilityLabel={state.paused ? (es ? 'Reproducir' : 'Play') : (es ? 'Pausar' : 'Pause')} onPress={toggle} className={large ? 'bg-primary rounded-full' : ''} style={{ width: large ? 76 : 44, height: large ? 76 : 44, alignItems: 'center', justifyContent: 'center' }}>{state.paused ? <Play size={large ? 34 : 24} color={large ? contrast : foreground} fill={large ? contrast : foreground} /> : <Pause size={large ? 34 : 24} color={large ? contrast : foreground} fill={large ? contrast : foreground} />}</Pressable>;
  const cover = (size: number) => source.poster ? <Image source={{ uri: source.poster }} accessibilityLabel={source.title} style={{ width: size, height: size, borderRadius: size > 60 ? 20 : 8 }} /> : <View className="bg-secondary" style={{ width: size, height: size, borderRadius: size > 60 ? 20 : 8, alignItems: 'center', justifyContent: 'center' }}><Music2 color={primary} size={size > 60 ? 80 : 24} /></View>;
  const chooseTimer = (value: 15 | 30 | 45 | 60 | 'episode' | null) => { controller.setSleepTimer(value); setPanel(undefined); };
  const option = (label: string, selected: boolean, action: () => void) => <Pressable key={label} accessibilityRole="radio" accessibilityState={{ checked: selected }} onPress={action} className={selected ? 'bg-primary rounded-xl px-4 py-3' : 'bg-secondary rounded-xl px-4 py-3'} style={{ minHeight: 48 }}><Text className={selected ? 'text-primary-foreground text-base' : 'text-foreground text-base'}>{label}</Text></Pressable>;
  const content = (full: boolean) => <View style={{ gap: full ? 24 : 16, width: '100%', maxWidth: 520, alignSelf: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {iconButton(ChevronDown, panel ? (es ? 'Volver al reproductor' : 'Back to player') : (es ? 'Contraer reproductor' : 'Collapse player'), () => panel ? setPanel(undefined) : full ? setFullscreen(false) : setExpanded(false))}
      <Text className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">{panel === 'timer' ? (es ? 'Temporizador' : 'Sleep timer') : panel === 'settings' ? (es ? 'Ajustes' : 'Settings') : (es ? 'Reproduciendo' : 'Now playing')}</Text>
      {full ? (onClose ? iconButton(X, es ? 'Cerrar audio' : 'Close audio', close) : <View style={{ width: 44 }} />) : iconButton(Maximize, es ? 'Pantalla completa' : 'Full screen', () => setFullscreen(true))}
    </View>
    {!panel && <>
    <View style={{ alignItems: 'center' }}>{cover(Math.max(120, Math.min(width - 80, full ? height * .37 : 220, 360)))}</View>
    <View style={{ gap: 6 }}>
      <Text className="text-foreground text-2xl font-bold text-center" numberOfLines={2}>{source.title}</Text>
      {source.subtitle && <Text className="text-primary text-base text-center" numberOfLines={2}>{source.subtitle}</Text>}
    </View>
    <View>
      <Slider accessibilityLabel={es ? 'Posición de reproducción' : 'Playback position'} value={[state.currentTime]} max={state.duration || 1} disabled={!!state.ad || state.duration <= 0} onValueChange={value => controller.seek(value[0] ?? 0)} trackClassName="bg-secondary" rangeClassName="bg-primary" thumbClassName="bg-primary border-primary" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text className="text-muted-foreground text-xs">{playerTime(state.currentTime)}</Text><Text className="text-muted-foreground text-xs">−{playerTime(Math.max(0, state.duration - state.currentTime))}</Text></View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <View style={{ alignItems: 'center' }}>{iconButton(RotateCcw, es ? 'Retroceder 15 segundos' : 'Back 15 seconds', () => controller.seek(state.currentTime - 15), !!state.ad)}<Text className="text-muted-foreground text-xs">15 s</Text></View>
      {playButton(true)}
      <View style={{ alignItems: 'center' }}>{iconButton(RotateCw, es ? 'Avanzar 30 segundos' : 'Forward 30 seconds', () => controller.seek(state.currentTime + 30), !!state.ad)}<Text className="text-muted-foreground text-xs">30 s</Text></View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
      <Pressable accessibilityRole="button" accessibilityLabel={`${es ? 'Temporizador' : 'Sleep timer'}: ${sleepLabel}`} onPress={() => setPanel(panel === 'timer' ? undefined : 'timer')} style={{ minHeight: 48, flexDirection: 'row', alignItems: 'center', gap: 8 }}><Moon color={state.sleepTimer ? primary : foreground} size={22} /><Text className="text-foreground text-sm">{sleepLabel}</Text></Pressable>
      <Pressable accessibilityRole="button" accessibilityLabel={es ? 'Ajustes de audio y velocidad' : 'Audio and speed settings'} onPress={() => setPanel(panel === 'settings' ? undefined : 'settings')} disabled={state.casting} style={{ minWidth: 48, minHeight: 48, alignItems: 'center', justifyContent: 'center', opacity: state.casting ? .35 : 1 }}><Text className="text-foreground text-base font-semibold">{state.rate}×</Text></Pressable>
      {route}
    </View>
    {state.ad && <View className="bg-secondary rounded-xl p-3" style={{ gap: 8 }}><Text className="text-foreground text-sm">{es ? 'Publicidad' : 'Advertisement'} · {state.ad.title} · {playerTime(state.ad.remaining)}</Text>{state.ad.canSkip && <Pressable accessibilityRole="button" onPress={controller.skipAd}><Text className="text-primary font-semibold">{es ? 'Saltar anuncio' : 'Skip ad'}</Text></Pressable>}</View>}
    {state.buffering && <ActivityIndicator accessibilityLabel={es ? 'Cargando audio' : 'Loading audio'} color={foreground} />}
    {status && <Text accessibilityLiveRegion="polite" className="text-muted-foreground text-sm text-center">{status}</Text>}
    </>}
    {panel === 'timer' && <View testID="audio-sleep-options" style={{ gap: 8 }}>
      <Text className="text-foreground text-lg font-semibold">{es ? 'Pausar el audio' : 'Pause audio'}</Text>
      {([15, 30, 45, 60] as const).map(minutes => option(`${minutes} min`, false, () => chooseTimer(minutes)))}
      {option(es ? 'Al terminar el episodio' : 'At end of episode', state.sleepTimer?.mode === 'episode', () => chooseTimer('episode'))}
      {option(es ? 'Desactivar temporizador' : 'Turn off timer', !state.sleepTimer, () => chooseTimer(null))}
    </View>}
    {panel === 'settings' && <View style={{ gap: 8 }}>
      <Text className="text-foreground text-lg font-semibold">{es ? 'Velocidad' : 'Speed'}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{[.5, .75, 1, 1.25, 1.5, 2].map(rate => option(`${rate}×`, state.rate === rate, () => controller.setRate(rate)))}</View>
      <Text className="text-foreground text-lg font-semibold">Audio</Text>
      {option(es ? 'Automático' : 'Automatic', state.audioTrack === 'auto', () => controller.selectAudio('auto'))}
      {state.audioTracks.map(track => option(track.title || track.language || String(track.index + 1), state.audioTrack === String(track.index), () => controller.selectAudio(String(track.index))))}
      {option(es ? (state.muted ? 'Activar sonido' : 'Silenciar') : (state.muted ? 'Unmute' : 'Mute'), state.muted, () => controller.setMuted(!state.muted))}
    </View>}
  </View>;
  return <>
    {footer ? <View className="bg-card border border-border rounded-2xl overflow-hidden" testID="audio-mini">
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8 }}>
        <Pressable accessibilityRole="button" accessibilityLabel={es ? 'Ampliar reproductor' : 'Expand player'} onPress={() => setExpanded(true)} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10, minHeight: 48 }}>
          {cover(44)}<View style={{ flex: 1, gap: 3 }}><Text className="text-foreground text-sm font-semibold" numberOfLines={1}>{source.title}</Text><Text className="text-muted-foreground text-xs" numberOfLines={1}>{state.sleepTimer ? sleepLabel : state.ad ? (es ? 'Publicidad' : 'Advertisement') : source.subtitle || (es ? 'Toca para ampliar' : 'Tap to expand')}</Text></View>
        </Pressable>
        {state.buffering && <ActivityIndicator color={foreground} />}{route}{playButton(false)}{onClose && iconButton(X, es ? 'Cerrar audio' : 'Close audio', close)}
      </View>
      <View className="bg-secondary" style={{ height: 3 }}><View className="bg-primary" style={{ height: 3, width: `${Math.min(100, state.duration ? state.currentTime / state.duration * 100 : 0)}%` }} /></View>
    </View> : <View className="bg-card p-4">{content(false)}</View>}
    <BottomSheet open={expanded} onOpenChange={setExpanded} keyboardAware={false}>{content(false)}</BottomSheet>
    <Modal visible={fullscreen} onRequestClose={() => setFullscreen(false)} animationType="slide" statusBarTranslucent navigationBarTranslucent>
      <View className="bg-background" style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}><ScrollView contentContainerStyle={{ padding: 24, flexGrow: 1, justifyContent: 'space-between' }}>{content(true)}</ScrollView></View>
    </Modal>
  </>;
}
