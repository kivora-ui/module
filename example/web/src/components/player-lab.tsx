"use client";
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { publicPlayerSources, type PlayerDemoSource } from './player-demo-sources';
import { Player, PlayerController, Button, Select, useAudioPlayer, type PlayerSource, type PlayerEvent, type PlayerOverlay, type PlayerControlsVariant, type PlayerQueueItem } from '@kivora/nextjs';

const sources: PlayerDemoSource[] = [
  ...publicPlayerSources,
  { id: 'mp4', title: 'Kivora · MP4', src: '/player-fixtures/sample.mp4', mimeType: 'video/mp4', downloadUrl: '/player-fixtures/sample.mp4' },
  { id: 'hls', title: 'Kivora · HLS', src: '/player-fixtures/hls/master.m3u8', mimeType: 'application/x-mpegurl', offline: { enabled: true } },
  { id: 'dash', title: 'Kivora · DASH', src: '/player-fixtures/dash/manifest.mpd', mimeType: 'application/dash+xml', offline: { enabled: true, maxHeight: 360 } },
  { id: 'clearkey', title: 'Kivora · Clear Key (test)', src: '/player-fixtures/drm/manifest.mpd', mimeType: 'application/dash+xml', drm: { clearKeys: { '11223344556677889900aabbccddeeff': '00112233445566778899aabbccddeeff' } }, offline: { enabled: true, persistentLicense: false } },
];
const poster = '/player-fixtures/poster.png';
export function PlayerLab() {
  const [format, setFormat] = useState('sintel-public');
  const [controlsVariant, setControlsVariant] = useState<PlayerControlsVariant>('series');
  const [episode, setEpisode] = useState(0);
  const [episodeStart, setEpisodeStart] = useState<number>();
  const [queuePlayback, setQueuePlayback] = useState(false);
  const [locale, setLocale] = useState('es');
  const [splash, setSplash] = useState(false);
  const [ads, setAds] = useState('none');
  const [events, setEvents] = useState<PlayerEvent[]>([]);
  const [customUrl, setCustomUrl] = useState('');
  const [custom, setCustom] = useState<PlayerSource>();
  const [license, setLicense] = useState('');
  const [keySystem, setKeySystem] = useState('com.widevine.alpha');
  const [error, setError] = useState('');
  const audio = useAudioPlayer();
  const [controller] = useState(() => new PlayerController({ plugins: [{
    id: 'demo-analytics', setup: ({ on }) => on(event => {
      if (!['timeupdate', 'progress'].includes(event.type)) setEvents(previous => [event, ...previous].slice(0, 10));
    }),
  }] }));
  const selected: PlayerDemoSource = custom ?? sources.find(item => item.id === format)!;
  const localFixture = selected.src.startsWith('/player-fixtures/');
  const source = useMemo<PlayerSource>(() => ({
    ...selected, poster: selected.poster ?? (localFixture ? poster : undefined),
    startTime: episodeStart ?? selected.startTime,
    thumbnails: selected.thumbnails ?? (localFixture ? { src: '/player-fixtures/thumbnails.vtt' } : undefined),
    textTracks: selected.textTracks ?? (localFixture ? [{ src: '/player-fixtures/captions-es.vtt', language: 'es', label: 'Español' }, { src: '/player-fixtures/captions-en.vtt', language: 'en', label: 'English' }] : undefined),
    splash: splash ? { src: '/player-fixtures/intro.mp4', poster, maxDuration: 5 } : undefined,
    ads: ads === 'none' ? undefined : ads === 'vast' ? { tagUrl: '/player-fixtures/ad.xml' } : { breaks: [{ id: 'pre', src: '/player-fixtures/ad.mp4', mimeType: 'video/mp4', at: 'pre', skipAfter: 1 }, { id: 'mid', src: '/player-fixtures/ad.mp4', mimeType: 'video/mp4', at: 8, skipAfter: 1 }] },
  }), [selected, localFixture, splash, ads, episodeStart]);
  const episodeNames = locale === 'es' ? ['El encuentro', 'Un largo viaje', 'El regreso'] : ['The encounter', 'A long journey', 'The return'];
  const queue: PlayerQueueItem[] = episodeNames.map((name, index) => ({ id: String(index), title: `${String(index + 1).padStart(2, '0')}. ${name}`,
    subtitle: locale === 'es' ? `${index === episode ? 'Ahora' : 'Episodio de ejemplo'} · 15 min` : `${index === episode ? 'Now playing' : 'Sample episode'} · 15 min`,
    image: `/player-thumbnails/sintel/${[3, 7, 11][index]}.jpg`, progress: index === episode ? 0.34 : 0,
  }));
  const overlays = useMemo<PlayerOverlay[]>(() => [
    { id: 'brand', phases: ['content', 'loading', 'splash', 'ended'], render: () => controlsVariant === 'compact' || controlsVariant === 'standard' ? <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold tracking-widest text-white">KIVORA PLAY</span> : null },
    { id: 'advertising', phases: ['ad'], render: () => <span className="absolute left-4 top-4 rounded bg-amber-400 px-3 py-1 text-xs font-semibold text-black">{locale === 'es' ? 'Publicidad · Demo' : 'Advertisement · Demo'}</span> },
  ], [locale, controlsVariant]);
  return <div className="mx-auto grid max-w-5xl gap-6 pb-60">
    <div><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Kivora / OTT</p><h1 className="mt-2 text-3xl font-semibold">Player</h1><p className="mt-2 text-sm text-muted-foreground">Vídeo, audio, pistas, anuncios y reproducción sin conexión.</p></div>
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={locale === 'es' ? 'Diseño del reproductor' : 'Player design'}>
      {(['compact', 'cinema', 'series'] as const).map((variant, index) => <Button key={variant} size="sm" variant={controlsVariant === variant ? 'default' : 'ghost'} aria-pressed={controlsVariant === variant} onClick={() => setControlsVariant(variant)}>{locale === 'es' ? ['Compacto', 'Cine', 'Series'][index] : ['Compact', 'Cinema', 'Series'][index]}</Button>)}
      <Button size="sm" variant="ghost" aria-pressed={controlsVariant === 'standard'} onClick={() => setControlsVariant('standard')}>{locale === 'es' ? 'Clásico' : 'Classic'}</Button>
    </div>
    <Player source={source} controller={controller} locale={locale} overlays={overlays} controlsVariant={controlsVariant} autoPlay={queuePlayback}
      program={{ title: selected.title, subtitle: `${locale === 'es' ? 'Episodio' : 'Episode'} ${episode + 1}: ${episodeNames[episode]}`,
        metadata: locale === 'es' ? 'Temporada 1 · 2026 · Aventura · HD' : 'Season 1 · 2026 · Adventure · HD', badge: locale === 'es' ? 'Temporada 1' : 'Season 1',
        description: locale === 'es' ? 'Un encuentro inesperado inicia un viaje lleno de descubrimientos. Acompaña a nuestra protagonista en su próxima aventura.' : 'An unexpected encounter begins a journey of discovery. Follow our protagonist into her next adventure.',
      }} queue={queue} activeQueueId={String(episode)} onQueueSelect={item => { const index = Number(item.id); setEpisode(index); setEpisodeStart(controller.getSnapshot().duration * [0, 0.3, 0.65][index]!); setQueuePlayback(true); }} />
    <p className="text-xs text-muted-foreground">{locale === 'es' ? 'La programación y los episodios son de ejemplo; las tarjetas abren distintos puntos del vídeo de prueba.' : 'The schedule and episodes are examples; cards open different points in the sample video.'}</p>
    {selected.reference && <p className="text-xs text-muted-foreground"><a href={selected.reference} target="_blank" rel="noreferrer" className="underline">{selected.attribution}</a>{selected.drm && ' · Requiere un navegador compatible con el DRM seleccionado.'}</p>}
    <div className="grid gap-4 rounded-xl bg-muted/40 p-4 sm:grid-cols-3">
      <label className="grid gap-2 text-sm">Vídeo / formato<Select instanceId="player-demo-format" aria-label="Formato" isSearchable={false} options={sources.map(item => ({ value: item.id, label: item.label ?? item.id.toUpperCase() }))} value={{ value: format, label: sources.find(item => item.id === format)?.label ?? format.toUpperCase() }} onChange={option => { if (option) { setFormat(option.value); setCustom(undefined); setEpisode(0); setEpisodeStart(undefined); setQueuePlayback(false); } }} /></label>
      <label className="grid gap-2 text-sm">Anuncios<Select instanceId="player-demo-ads" aria-label="Anuncios" isSearchable={false} options={[{ value: 'none', label: 'Sin anuncios' }, { value: 'breaks', label: 'Pre-roll + mid-roll' }, { value: 'vast', label: 'VAST' }]} value={{ value: ads, label: ads === 'none' ? 'Sin anuncios' : ads === 'vast' ? 'VAST' : 'Pre-roll + mid-roll' }} onChange={option => option && setAds(option.value)} /></label>
      <label className="grid gap-2 text-sm">Idioma<Select instanceId="player-demo-language" aria-label="Idioma" isSearchable={false} options={[{ value: 'es', label: 'Español' }, { value: 'en', label: 'English' }]} value={{ value: locale, label: locale === 'es' ? 'Español' : 'English' }} onChange={option => option && setLocale(option.value)} /></label>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={splash} onChange={event => setSplash(event.target.checked)} />Vídeo de inicio</label>
    </div>
    <details className="rounded-xl border border-border p-4"><summary className="cursor-pointer font-medium">Probar un stream / DRM</summary>
      <form className="mt-4 grid gap-3" onSubmit={event => {
        event.preventDefault(); setError('');
        try { const url = new URL(customUrl); if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
          setEpisode(0); setEpisodeStart(undefined); setQueuePlayback(false);
          setCustom({ id: 'custom', title: 'Stream personalizado', src: url.href, drm: license ? { servers: { [keySystem]: license } } : undefined });
        } catch { setError('Introduce una URL HTTP o HTTPS válida.'); }
      }}>
        <label className="grid gap-1 text-sm">URL del vídeo<input className="rounded-md border border-input bg-background p-2" value={customUrl} onChange={event => setCustomUrl(event.target.value)} placeholder="https://…/manifest.mpd" /></label>
        <label className="grid gap-1 text-sm">Servidor de licencias (opcional)<input className="rounded-md border border-input bg-background p-2" value={license} onChange={event => setLicense(event.target.value)} placeholder="https://…" /></label>
        <Select instanceId="player-demo-drm" aria-label="DRM" options={['com.widevine.alpha', 'com.microsoft.playready', 'com.apple.fps'].map(value => ({ value, label: value }))} value={{ value: keySystem, label: keySystem }} onChange={option => option && setKeySystem(option.value)} />
        <Button type="submit" className="justify-self-start">Cargar stream</Button>{error && <p role="alert">{error}</p>}
      </form>
    </details>
    <section className="rounded-xl bg-muted/40 p-4"><h2 className="font-semibold">Audio persistente</h2><p className="my-2 text-sm text-muted-foreground">Se mantiene en el footer al navegar y puede contener anuncios. Pulsa la flecha para ampliar el reproductor.</p><div className="flex flex-wrap gap-2"><Button onClick={() => audio.play({ id: 'audio-demo', title: 'Kivora · Audio de prueba', src: '/player-fixtures/audio.mp3', mimeType: 'audio/mpeg', poster })}>Reproducir audio</Button><Button variant="outline" onClick={() => audio.play({ id: 'audio-demo-ads', title: 'Kivora · Audio de prueba', src: '/player-fixtures/audio.mp3', mimeType: 'audio/mpeg', poster, ads: { breaks: [{ id: 'audio-preroll', src: '/player-fixtures/audio.mp3', mimeType: 'audio/mpeg', at: 'pre', duration: 6, skipAfter: 2 }] } })}>Reproducir audio con anuncio</Button><Button variant="outline" onClick={audio.close}>Cerrar audio</Button><Link href="/componentes" className="p-2 text-sm underline">Ir a componentes</Link></div></section>
    <details><summary className="cursor-pointer text-sm font-medium">Eventos del plugin de analítica</summary><ol className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">{events.map((event, index) => <li key={`${event.timestamp}-${index}`}>{event.type} · {event.phase} · {event.time.toFixed(1)} s</li>)}</ol></details>
  </div>;
}
