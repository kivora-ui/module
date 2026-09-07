import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import notifee from '@notifee/react-native';
import * as GoogleCast from 'react-native-google-cast';
import { Button as KivoraButton, Player, PlayerController, Progress, usePlayer, useAudioPlayer, useOfflineDownloads, type PlayerSource, type PlayerOrientation } from '@kivora/native';
import { getPlayerDownloads } from './player-downloads';

function Button({ children, ...props }: React.ComponentProps<typeof KivoraButton>) {
  return <KivoraButton {...props}><Text className={props.variant === 'outline' || props.variant === 'ghost' ? 'text-foreground' : 'text-primary-foreground'}>{children}</Text></KivoraButton>;
}

const poster = 'https://storage.googleapis.com/shaka-asset-icons/sintel.png';
const castAudio: PlayerSource = { id: 'cast-audio', title: 'T-Rex · Muestra de MDN', type: 'audio', src: 'https://developer.mozilla.org/shared-assets/audio/t-rex-roar.mp3', mimeType: 'audio/mpeg' };
const sources: PlayerSource[] = [
  { id: 'sintel', title: 'Sintel · DASH', src: 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd', mimeType: 'application/dash+xml', poster },
  { id: 'hls', title: 'Angel One · HLS', src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8', mimeType: 'application/x-mpegurl', cast: { hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' } },
  { id: 'mp4', title: 'Flower · MP4', src: 'https://developer.mozilla.org/shared-assets/videos/flower.mp4', mimeType: 'video/mp4' },
];
// Bundled synthetic samples work offline and do not depend on a local web server.
const audioAsset = require('../assets/player/audio.mp3');
const podcastUri = Image.resolveAssetSource(require('../assets/player/podcast.mp3')).uri;
const adAsset = require('../assets/player/ad.mp3');
import { Image } from 'react-native';
const audioUri = Image.resolveAssetSource(audioAsset).uri;
const adUri = Image.resolveAssetSource(adAsset).uri;
const introUri = Image.resolveAssetSource(require('../assets/player/intro.mp4')).uri;
const videoAdUri = Image.resolveAssetSource(require('../assets/player/ad.mp4')).uri;
const sampleUri = Image.resolveAssetSource(require('../assets/player/sample.mp4')).uri;
const loadingPoster = Image.resolveAssetSource(require('../assets/player/poster.png')).uri;
const episodes = ['01. El encuentro', '02. Un largo viaje', '03. El regreso'].map((title, index) => ({ id: String(index), title, subtitle: 'Episodio de ejemplo', image: poster }));
export function PlayerScreen({ onBack }: { onBack: () => void }) {
  const scroll = useRef<ScrollView>(null);
  const playerTop = useRef(0);
  const showPlayer = () => scroll.current?.scrollTo({ y: Math.max(0, playerTop.current - 8), animated: true });
  const [controller] = useState(() => new PlayerController());
  const state = usePlayer(controller);
  const audio = useAudioPlayer();
  const [downloadsManager] = useState(getPlayerDownloads);
  const downloads = useOfflineDownloads(downloadsManager);
  const [offlineSource, setOfflineSource] = useState<PlayerSource>();
  const [autoPlay, setAutoPlay] = useState(true);
  const [downloadError, setDownloadError] = useState('');
  const [format, setFormat] = useState(0);
  const [orientation, setOrientation] = useState<PlayerOrientation>('auto');
  const [episode, setEpisode] = useState(0);
  const [ads, setAds] = useState(false);
  const [demo, setDemo] = useState<{ mode: 'poster' | 'intro' | 'intro-ad' | 'cast'; run: number }>();
  const [sequence, setSequence] = useState<string[]>([]);
  useEffect(() => controller.on(event => {
    if (event.type === 'source-change') setSequence([]);
    if (['intro', 'ad', 'content'].includes(event.state.phase)) {
      const label = event.state.phase === 'intro' ? 'Marca' : event.state.phase === 'ad' ? 'Anuncio' : 'Vídeo';
      setSequence(previous => previous[previous.length - 1] === label ? previous : [...previous, label]);
    }
  }), [controller]);
  const demoSource = useMemo<PlayerSource | undefined>(() => demo ? demo.mode === 'cast' ? {
    ...sources[1]!, id: `cast-demo-${demo.run}`, title: 'Secuencia para TV', poster,
    intro: { src: sources[2]!.src, mimeType: 'video/mp4', title: 'Intro de prueba · Flower' },
    ads: { breaks: [{ id: 'cast-pre', src: sources[2]!.src, mimeType: 'video/mp4', at: 'pre', title: 'Anuncio de prueba · Flower', skipAfter: 2 }] },
  } : {
    id: `brand-demo-${demo.mode}-${demo.run}`, title: 'Kivora · Secuencia de inicio', src: sampleUri, mimeType: 'video/mp4', poster: loadingPoster,
    intro: demo.mode !== 'poster' ? { src: introUri, mimeType: 'video/mp4', title: 'Kivora · Intro de marca' } : undefined,
    ads: demo.mode === 'intro-ad' ? { breaks: [{ id: 'demo-pre', src: videoAdUri, mimeType: 'video/mp4', at: 'pre', title: 'Anuncio de prueba', skipAfter: 2 }] } : undefined,
  } : undefined, [demo]);
  const source = useMemo<PlayerSource>(() => ({ ...sources[format]!, startTime: format === 0 ? episode * 210 : 0, ads: ads ? { breaks: [{ id: 'pre', src: sources[2]!.src, mimeType: 'video/mp4', at: 'pre', duration: 6, skipAfter: 2, title: 'Anuncio de prueba' }] } : undefined }), [format, episode, ads]);
  const downloadVideo = async () => {
    setDownloadError('');
    try {
      await notifee.requestPermission();
      await downloadsManager.download(sources[format]!);
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : String(error));
    }
  };
  const downloadAll = async () => {
    setDownloadError('');
    try {
      await notifee.requestPermission();
      await Promise.all(sources.map(item => downloadsManager.download(item)));
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : String(error));
    }
  };
  const removeDownload = async (id: string) => {
    setDownloadError('');
    if (offlineSource?.id === id) {
      controller.close();
      setAutoPlay(false);
      setOfflineSource(undefined);
    }
    try {
      await downloadsManager.remove(id);
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : String(error));
    }
  };
  const playAudio = (withAds: boolean) => audio.play({ id: withAds ? 'audio-ads' : 'audio', title: 'Kivora · Audio de prueba', subtitle: 'Podcast de ejemplo', poster: loadingPoster, type: 'audio', src: audioUri, mimeType: 'audio/mpeg', ads: withAds ? { breaks: [{ id: 'audio-pre', src: adUri, mimeType: 'audio/mpeg', at: 'pre', duration: 6, skipAfter: 2, title: 'Anuncio de prueba' }] } : undefined });
  return <ScrollView ref={scroll} contentContainerStyle={{ padding: 16, gap: 16 }}>
    <Button variant="ghost" onPress={onBack}>Volver a Ajustes</Button>
    <Text className="text-2xl font-semibold text-foreground">Player nativo</Text>
    <Text className="text-sm text-muted-foreground">Vídeo, episodios, audio y anuncios. Sintel y Angel One: muestras de Shaka / Blender. Flower: muestra de MDN.</Text>
    <Text className="text-base font-semibold text-foreground">Orientación</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{(['auto', 'landscape'] as const).map(value => <Button key={value} size="sm" variant={orientation === value ? 'default' : 'outline'} onPress={() => setOrientation(value)}>{value === 'auto' ? 'Vertical y horizontal' : 'Horizontal (OTT)'}</Button>)}</View>
    <Player cast={GoogleCast} airPlay onLayout={event => { playerTop.current = event.nativeEvent.layout.y; }} source={offlineSource ?? demoSource ?? source} controller={controller} autoPlay={autoPlay} orientation={orientation} controlsVariant="series" program={{ title: offlineSource ? `${offlineSource.title} · Sin conexión` : demoSource?.title ?? sources[format]!.title, subtitle: !offlineSource && !demo && format === 0 ? episodes[episode]!.title : undefined }} queue={!offlineSource && !demo && format === 0 ? episodes : []} activeQueueId={String(episode)} onQueueSelect={item => { setEpisode(Number(item.id)); }} />
    {state.phase === 'idle' && state.source && <Button onPress={controller.play}>Volver a reproducir vídeo</Button>}
    <Text testID="player-status" className="text-xs text-muted-foreground">Estado: {state.phase} · {state.paused ? 'Pausado' : 'Reproduciendo'}{state.error ? ` · ${state.error}` : ''}</Text>
    {demo && !offlineSource && <Text testID="player-sequence" className="text-sm text-muted-foreground">Secuencia: {sequence.join(' → ') || 'Cargando imagen'}</Text>}
    <Text className="text-base font-semibold text-foreground">Pruebas de inicio</Text>
    <Text className="text-sm text-muted-foreground">Imagen hasta el primer fotograma, intro de marca opcional y después anuncio o contenido. Las muestras están incluidas en la app.</Text>
    {(['poster', 'intro', 'intro-ad'] as const).map((mode, index) => <Button key={mode} variant={demo?.mode === mode && !offlineSource ? 'default' : 'outline'} onPress={() => { setAutoPlay(true); setOfflineSource(undefined); setDemo(previous => ({ mode, run: (previous?.run ?? 0) + 1 })); showPlayer(); }}>{['Imagen y vídeo', 'Imagen, marca y vídeo', 'Imagen, marca, anuncio y vídeo'][index]}</Button>)}
    <Text className="text-base font-semibold text-foreground">Formato</Text>
    <Button variant="outline" onPress={() => { setAutoPlay(true); setOfflineSource(undefined); setDemo(previous => ({ mode: 'cast', run: (previous?.run ?? 0) + 1 })); showPlayer(); }}>Secuencia para Chromecast</Button>
    <Text className="text-sm text-muted-foreground">Chromecast: conecta el móvil y la TV a la misma Wi-Fi y usa el botón del player. Prueba los formatos de red; las descargas locales y las muestras incluidas no se envían a la TV.</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{['DASH','HLS','MP4'].map((label,index) => <Button key={label} size="sm" variant={!offlineSource && !demo && format === index ? 'default' : 'outline'} onPress={() => { setAutoPlay(true); setOfflineSource(undefined); setDemo(undefined); setFormat(index); setEpisode(0); }}>{label}</Button>)}</View>
    <Text className="text-lg font-semibold text-foreground">Descargas</Text>
    <Text className="text-sm text-muted-foreground">Guarda el vídeo seleccionado para verlo sin conexión. En Android también se descargan los segmentos HLS y DASH. La descarga continúa al salir de esta pantalla y avisa al terminar.</Text>
    <Button disabled={downloads.some(entry => entry.id === sources[format]!.id && entry.state !== 'error')} onPress={() => { void downloadVideo(); }}>Descargar {['DASH', 'HLS', 'MP4'][format]}</Button>
    <Button variant="outline" disabled={sources.every(item => downloads.some(entry => entry.id === item.id && entry.state !== 'error'))} onPress={() => { void downloadAll(); }}>Encolar DASH, HLS y MP4</Button>
    <Text className="text-sm text-muted-foreground">Una descarga activa. Las demás esperan su turno por orden de llegada.</Text>
    {downloadError !== '' && <Text accessibilityRole="alert" className="text-sm text-destructive">{downloadError}</Text>}
    {downloads.map(entry => <View key={entry.id} style={{ gap: 8 }}>
      <Text className="text-base font-semibold text-foreground">{entry.source.title}</Text>
      <Text testID={`download-status-${entry.id}`} className="text-sm text-muted-foreground">{entry.state === 'downloaded' ? 'Disponible sin conexión' : entry.state === 'queued' ? `En cola · posición ${downloads.filter(item => item.state === 'queued').findIndex(item => item.id === entry.id) + 1}` : entry.state === 'paused' ? 'Pausada' : entry.state === 'error' ? `Error: ${entry.error}` : `Descargando: ${Math.round(entry.progress * 100)}%`}</Text>
      <Progress value={entry.progress * 100} />
      {entry.state === 'downloaded' && <Button onPress={() => { setAutoPlay(true); setOfflineSource(downloadsManager.getPlaybackSource(entry.id)); showPlayer(); }}>Reproducir sin conexión</Button>}
      <Button variant="outline" onPress={() => { void removeDownload(entry.id); }}>{entry.state === 'downloading' || entry.state === 'queued' ? 'Cancelar descarga' : 'Eliminar descarga'}</Button>
    </View>)}
    <Button variant="outline" onPress={() => setAds(!ads)}>{ads ? 'Quitar anuncio de vídeo' : 'Añadir anuncio de vídeo'}</Button>
    <Text className="text-lg font-semibold text-foreground">Audio persistente</Text>
    <Text className="text-sm text-muted-foreground">Continúa al cambiar de pantalla. Iniciar audio cierra el vídeo anterior; iniciar vídeo cierra el audio. Los tonos son muestras de prueba.</Text>
    <Button onPress={() => playAudio(false)}>Reproducir audio</Button>
    <Button variant="outline" onPress={() => playAudio(true)}>Reproducir audio con anuncio</Button>
    <Button variant="ghost" onPress={audio.close}>Cerrar audio</Button>
    <Button variant="outline" onPress={() => audio.play({ id: 'background-podcast', title: 'Prueba de audio en segundo plano', subtitle: 'Muestra sintética · 2 minutos', type: 'audio', src: podcastUri, mimeType: 'audio/mpeg', poster: loadingPoster })}>Audio de 2 minutos: probar bloqueo</Button>
    <Button variant="outline" onPress={() => audio.play(castAudio)}>Audio para Chromecast</Button>
    <Button variant="outline" onPress={() => audio.play({ ...castAudio, id: 'cast-audio-ad', ads: { breaks: [{ id: 'audio-cast-pre', at: 'pre', src: castAudio.src, mimeType: 'audio/mpeg', title: 'Anuncio de prueba · T-Rex' }] } })}>Audio con anuncio para Chromecast</Button>
    <Text className="text-sm text-muted-foreground">Muestra corta de audio remoto de MDN. Usa Google Cast en los controles de audio; la prueba con anuncio reproduce la muestra dos veces.</Text>
  </ScrollView>;
}
