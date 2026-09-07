const en = {
  play: 'Play', pause: 'Pause', seek: 'Playback position', volume: 'Volume', mute: 'Mute', unmute: 'Unmute',
  fullscreen: 'Fullscreen', exitFullscreen: 'Exit fullscreen', pip: 'Picture in picture', settings: 'Playback settings',
  quality: 'Quality', audio: 'Audio', subtitles: 'Subtitles', speed: 'Speed', auto: 'Auto', off: 'Off',
  live: 'Live', goLive: 'Go live', loading: 'Loading', splash: 'Opening video', ad: 'Advertisement', containsAds: 'Contains ads', skipAd: 'Skip ad',
  error: 'This media could not be played.', retry: 'Retry', download: 'Save offline', cancelDownload: 'Cancel download',
  downloads: 'Downloads', remove: 'Remove', playOffline: 'Play offline', downloading: 'Downloading',
  close: 'Close', expand: 'Expand player', collapse: 'Minimize player', exportFile: 'Download file',
  emptyDownloads: 'No saved media', expired: 'License expired', back: 'Back 10 seconds', forward: 'Forward 10 seconds',
  downloadError: 'Could not save this media. Check storage space and offline license permissions.',
  actionError: 'This action is not available. Try again.',
  upNext: 'Up next', nowPlaying: 'Now playing', episodes: 'Episodes', previous: 'Previous episode', next: 'Next episode',
};
export type PlayerMessages = typeof en;
const es: PlayerMessages = {
  play: 'Reproducir', pause: 'Pausar', seek: 'Posici\u00f3n de reproducci\u00f3n', volume: 'Volumen', mute: 'Silenciar', unmute: 'Activar sonido',
  fullscreen: 'Pantalla completa', exitFullscreen: 'Salir de pantalla completa', pip: 'Imagen en imagen', settings: 'Ajustes de reproducci\u00f3n',
  quality: 'Calidad', audio: 'Audio', subtitles: 'Subt\u00edtulos', speed: 'Velocidad', auto: 'Auto', off: 'Desactivados',
  live: 'En directo', goLive: 'Ir al directo', loading: 'Cargando', splash: 'V\u00eddeo de inicio', ad: 'Publicidad', containsAds: 'Contiene anuncios', skipAd: 'Saltar anuncio',
  error: 'No se ha podido reproducir este contenido.', retry: 'Reintentar', download: 'Guardar sin conexi\u00f3n', cancelDownload: 'Cancelar descarga',
  downloads: 'Descargas', remove: 'Eliminar', playOffline: 'Ver sin conexi\u00f3n', downloading: 'Descargando',
  close: 'Cerrar', expand: 'Ampliar reproductor', collapse: 'Minimizar reproductor', exportFile: 'Descargar archivo',
  emptyDownloads: 'No hay contenido guardado', expired: 'Licencia caducada', back: 'Retroceder 10 segundos', forward: 'Avanzar 10 segundos',
  downloadError: 'No se pudo guardar. Revisa el espacio disponible y los permisos de la licencia sin conexi\u00f3n.',
  actionError: 'Esta acci\u00f3n no est\u00e1 disponible. Int\u00e9ntalo de nuevo.',
  upNext: 'A continuación', nowPlaying: 'Ahora', episodes: 'Episodios', previous: 'Episodio anterior', next: 'Siguiente episodio',
};
export function getPlayerMessages(locale = 'en', messages?: Partial<PlayerMessages>): PlayerMessages {
  return { ...(locale.toLowerCase().split(/[-_]/)[0] === 'es' ? es : en), ...messages };
}
