import React, { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button as KivoraButton, Player, PlayerController, usePlayer, useAudioPlayer, type PlayerSource, type PlayerOrientation } from '@kivora/native';

function Button({ children, ...props }: React.ComponentProps<typeof KivoraButton>) {
  return <KivoraButton {...props}><Text className={props.variant === 'outline' || props.variant === 'ghost' ? 'text-foreground' : 'text-primary-foreground'}>{children}</Text></KivoraButton>;
}

const poster = 'https://storage.googleapis.com/shaka-asset-icons/sintel.png';
const sources: PlayerSource[] = [
  { id: 'sintel', title: 'Sintel · DASH', src: 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd', mimeType: 'application/dash+xml', poster },
  { id: 'hls', title: 'Angel One · HLS', src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8', mimeType: 'application/x-mpegurl' },
  { id: 'mp4', title: 'Flower · MP4', src: 'https://developer.mozilla.org/shared-assets/videos/flower.mp4', mimeType: 'video/mp4' },
];
// Bundled synthetic samples work offline and do not depend on a local web server.
const audioAsset = require('../assets/player/audio.mp3');
const adAsset = require('../assets/player/ad.mp3');
import { Image } from 'react-native';
const audioUri = Image.resolveAssetSource(audioAsset).uri;
const adUri = Image.resolveAssetSource(adAsset).uri;
const episodes = ['01. El encuentro', '02. Un largo viaje', '03. El regreso'].map((title, index) => ({ id: String(index), title, subtitle: 'Episodio de ejemplo', image: poster }));
export function PlayerScreen({ onBack }: { onBack: () => void }) {
  const [controller] = useState(() => new PlayerController());
  const state = usePlayer(controller);
  const audio = useAudioPlayer();
  const [format, setFormat] = useState(0);
  const [orientation, setOrientation] = useState<PlayerOrientation>('auto');
  const [episode, setEpisode] = useState(0);
  const [ads, setAds] = useState(false);
  const source = useMemo<PlayerSource>(() => ({ ...sources[format]!, startTime: format === 0 ? episode * 210 : 0, ads: ads ? { breaks: [{ id: 'pre', src: sources[2]!.src, mimeType: 'video/mp4', at: 'pre', duration: 6, skipAfter: 2, title: 'Anuncio de prueba' }] } : undefined }), [format, episode, ads]);
  const playAudio = (withAds: boolean) => audio.play({ id: withAds ? 'audio-ads' : 'audio', title: 'Kivora · Audio de prueba', type: 'audio', src: audioUri, mimeType: 'audio/mpeg', ads: withAds ? { breaks: [{ id: 'audio-pre', src: adUri, mimeType: 'audio/mpeg', at: 'pre', duration: 6, skipAfter: 2, title: 'Anuncio de prueba' }] } : undefined });
  return <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
    <Button variant="ghost" onPress={onBack}>Volver a Ajustes</Button>
    <Text className="text-2xl font-semibold text-foreground">Player nativo</Text>
    <Text className="text-sm text-muted-foreground">Vídeo, episodios, audio y anuncios. Sintel y Angel One: muestras de Shaka / Blender. Flower: muestra de MDN.</Text>
    <Text className="text-base font-semibold text-foreground">Orientación</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{(['auto', 'landscape'] as const).map(value => <Button key={value} size="sm" variant={orientation === value ? 'default' : 'outline'} onPress={() => setOrientation(value)}>{value === 'auto' ? 'Vertical y horizontal' : 'Horizontal (OTT)'}</Button>)}</View>
    <Player source={source} controller={controller} autoPlay orientation={orientation} controlsVariant="series" program={{ title: sources[format]!.title, subtitle: format === 0 ? episodes[episode]!.title : undefined }} queue={format === 0 ? episodes : []} activeQueueId={String(episode)} onQueueSelect={item => { setEpisode(Number(item.id)); }} />
    {state.phase === 'idle' && state.source && <Button onPress={controller.play}>Volver a reproducir vídeo</Button>}
    <Text testID="player-status" className="text-xs text-muted-foreground">Estado: {state.phase} · {state.paused ? 'Pausado' : 'Reproduciendo'}{state.error ? ` · ${state.error}` : ''}</Text>
    <Text className="text-base font-semibold text-foreground">Formato</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{['DASH','HLS','MP4'].map((label,index) => <Button key={label} size="sm" variant={format === index ? 'default' : 'outline'} onPress={() => { setFormat(index); setEpisode(0); }}>{label}</Button>)}</View>
    <Button variant="outline" onPress={() => setAds(!ads)}>{ads ? 'Quitar anuncio de vídeo' : 'Añadir anuncio de vídeo'}</Button>
    <Text className="text-lg font-semibold text-foreground">Audio persistente</Text>
    <Text className="text-sm text-muted-foreground">Continúa al cambiar de pantalla. Iniciar audio cierra el vídeo anterior; iniciar vídeo cierra el audio. Los tonos son muestras de prueba.</Text>
    <Button onPress={() => playAudio(false)}>Reproducir audio</Button>
    <Button variant="outline" onPress={() => playAudio(true)}>Reproducir audio con anuncio</Button>
    <Button variant="ghost" onPress={audio.close}>Cerrar audio</Button>
  </ScrollView>;
}
