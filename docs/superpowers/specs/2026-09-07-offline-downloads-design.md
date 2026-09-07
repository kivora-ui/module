# Player nativo — Descargas offline (MP4 sin DRM) y puntos de extensión para DRM/HLS/DASH

Fecha: 2026-09-07
Estado: aprobado por el usuario, pendiente de plan de implementación

## Contexto

`@kivora/native` expone un `Player` de vídeo/audio (`packages/native/src/components/player/`)
sobre `react-native-video@6.19.2`. El usuario quiere poder descargar contenido
para verlo sin conexión (por ejemplo, en un avión).

No existe hoy en el proyecto ningún certificado DRM ni módulo nativo de
descarga. Investigación relevante antes de diseñar:

- `react-native-video` soporta DRM **online** (Widevine/FairPlay/PlayReady vía
  `nativeSource.drm`), pero **no** ofrece descarga ni persistencia de licencia
  offline. Su propio código fuente lo confirma explícitamente: en iOS,
  `DRMManager+Persitable.swift` lanza `RCTVideoError.offlineDRMNotSupported`
  para cualquier flujo de licencia offline que no sea una clave embebida
  local, y enlaza a un issue abierto de la librería (`TheWidlarzGroup/react-native-video#3539`)
  pidiendo justo esta funcionalidad. En Android, `DRMManager.kt`/`DRMProps.kt`
  no mencionan descarga/offline en absoluto.
- Descargar streaming adaptativo (HLS/DASH) para reproducción offline completa
  requiere gestores nativos por segmentos: `ExoPlayer.DownloadService` +
  `OfflineLicenseHelper` en Android, `AVAssetDownloadTask` + claves FairPlay
  persistentes en iOS. Ninguno existe en este proyecto; escribirlos es un
  desarrollo nativo aparte, del mismo orden de magnitud que el propio DRM
  offline, y no verificable sin certificado ni dispositivo con contenido DRM
  real.
- Descargar un MP4 progresivo (byte a byte, sin segmentación ni licencia) sí es
  viable hoy, en JS/RN puro, sin depender de ningún certificado.
- React Native no tiene escritura de sistema de ficheros de serie, y ninguna
  dependencia actual del proyecto la cubre (`@kivora/upload` es para *subir*
  ficheros vía `tus-js-client`, no para descargarlos ni escribirlos a disco).

Decisión de alcance (confirmada con el usuario): **implementar de verdad** la
descarga y reproducción offline de fuentes MP4 progresivas sin DRM — es lo
único que se puede construir y probar hoy sin bloqueos externos. Para
HLS/DASH y para cualquier fuente con DRM, la interfaz pública queda **ya
conectada** (tipos, métodos, punto de extensión) pero el intento de descarga
**rechaza explícitamente** con un error claro, en vez de fingir que funciona o
quedarse colgado en progreso.

## Decisiones de diseño

- **Nuevo módulo `offline.ts`**, mismo patrón que `controller.ts`: una clase
  `OfflineDownloadManager` con estado inmutable + `subscribe`/`getSnapshot`
  (compatible con `React.useSyncExternalStore`, igual que `PlayerController`),
  y un hook `useOfflineDownloads(manager)` análogo a `usePlayer(controller)`.
- **Sin UI en el `Player`**: esta iteración solo expone la API/hook. La
  pantalla de catálogo o de "mis descargas" de la app real (fuera de este
  monorepo) es quien construye su propia UI sobre el hook. El `Player` no
  cambia visualmente.
- **Modelo de datos** (`types.ts`):
  ```ts
  export type OfflineDownloadState = 'queued' | 'downloading' | 'paused' | 'downloaded' | 'error';
  export interface OfflineDownloadEntry {
    id: string;
    source: PlayerSource;
    state: OfflineDownloadState;
    progress: number; // 0–1
    localUri?: string;
    error?: string;
  }
  ```
- **API de `OfflineDownloadManager`**:
  - `download(source: PlayerSource): Promise<void>` — encola y descarga.
    Rechaza de inmediato (antes de crear ninguna entrada) si la fuente no es
    soportada (ver más abajo), con un error tipado `OfflineUnsupportedError`.
  - `remove(id)` — cancela la descarga si está en curso (`RNFS.stopDownload`),
    borra el fichero local (si existe) y la entrada del manifest. Es también
    la forma de "cancelar" una descarga en progreso en esta iteración.
  - `getPlaybackSource(id): PlayerSource | undefined` — para una descarga
    `'downloaded'`, devuelve el `PlayerSource` original con `src` reescrito a
    `file://<localUri>` y sin `nativeSource.drm` (no aplica a contenido sin
    DRM), listo para pasarlo directo a `<Player source={...} />`.
  - `getSnapshot()` / `subscribe(listener)` — estado observable, mismo
    contrato que `PlayerController`.
- **Detección de "no soportado"**: una fuente se rechaza si:
  - `source.mimeType` indica un manifiesto segmentado (`dash`, `mpegurl`), o
  - `source.nativeSource?.drm` está definido, **y** no hay `drmProvider`
    inyectado (ver punto de extensión) capaz de resolverlo.

  El rechazo es síncrono/inmediato vía `Promise.reject(new OfflineUnsupportedError(...))`,
  con un campo `reason: 'segmented-format' | 'drm'` para que la app anfitriona
  pueda mostrar un mensaje específico ("Este contenido no se puede descargar
  todavía"). Nunca se crea una entrada `'queued'`/`'downloading'` que no vaya
  a progresar nunca.
- **Punto de extensión DRM** (sin implementación real, sin certificado para
  probarla):
  ```ts
  export interface OfflineDrmProvider {
    acquireLicense(source: PlayerSource): Promise<{ localUri: string }>;
    releaseLicense(source: PlayerSource): Promise<void>;
  }
  ```
  El constructor de `OfflineDownloadManager` acepta un `drmProvider?:
  OfflineDrmProvider` opcional. Sin él (el caso de hoy, valor por defecto
  `undefined`), cualquier fuente con `nativeSource.drm` se rechaza con
  `OfflineUnsupportedError(reason: 'drm')`. El día que exista un módulo nativo
  real (Widevine offline / FairPlay persistente) con certificado para
  probarlo, se inyecta implementando esta interfaz — sin tocar la API
  pública del manager ni del resto del módulo.
- **Persistencia del manifest**: JSON en
  `RNFS.DocumentDirectoryPath/kivora-downloads/manifest.json`, cargado al
  construir el manager y reescrito tras cada cambio de estado. Los ficheros
  de vídeo descargados viven en
  `RNFS.DocumentDirectoryPath/kivora-downloads/<id>.<extensión-por-mimeType>`.
- **Dependencia nueva**: `react-native-fs` (MIT, mismo patrón de
  `peerDependency` que `react-native-video`/`react-native-orientation-locker`
  en `package.json`). Justificación: RN no ofrece escritura de ficheros de
  serie; es la librería más establecida del ecosistema para exactamente este
  caso (`downloadFile` con progreso, `exists`/`unlink`/`moveFile`). Se evaluó
  `react-native-blob-util` como alternativa (también MIT, mantenida); se
  descarta por tener más superficie (blobs/uploads) de la que se necesita
  solo para descargar y leer un fichero.
- **Errores**: se define `OfflineUnsupportedError extends Error` (con
  `reason`) y se deja que los errores de red/disco de `RNFS.downloadFile`
  marquen la entrada como `'error'` con su mensaje, sin lanzar (para que la
  app pueda ofrecer "reintentar" sobre una entrada ya existente en vez de
  perderla).

## No objetivos de esta iteración

- Descarga real de HLS/DASH (streaming adaptativo).
- Adquisición o persistencia real de licencias DRM (Widevine offline,
  FairPlay persistente).
- Cualquier UI de descargas dentro del `Player` o del ejemplo (`example/app`).
- Descargas en segundo plano tras cerrar la app (background download tasks) —
  se descarga mientras la app está en primer plano; queda para una iteración
  futura si se necesita.
- Pausar/reanudar una descarga en curso — solo se puede cancelar (`remove`)
  o esperar a que termine; pausar+reanudar con `Range` requests queda para
  una iteración futura si se necesita.

## Testing

Sin infraestructura de tests de UI en este paquete (ver `controller.test.ts`,
que solo testea lógica, no componentes). `OfflineDownloadManager` sigue el
mismo patrón: lógica pura, mockeable, testeada con Vitest mockeando
`react-native-fs`. TDD estricto — los tests se escriben antes que la
implementación:

- Rechazo inmediato de fuente HLS/DASH (`reason: 'segmented-format'`).
- Rechazo inmediato de fuente con `nativeSource.drm` y sin `drmProvider`
  (`reason: 'drm'`).
- Descarga MP4 exitosa: transición `'queued' → 'downloading'` (con progreso
  creciente) `→ 'downloaded'`, `localUri` presente, `getPlaybackSource`
  devuelve el `PlayerSource` correcto.
- Error de red/disco durante la descarga: entrada pasa a `'error'` con
  mensaje, sin lanzar excepción no controlada.
- Persistencia: el manifest se guarda tras cada cambio de estado y se
  recupera correctamente al reconstruir el manager (simulando un reinicio de
  la app).
- `remove(id)`: borra el fichero local y la entrada del manifest; no falla si
  el fichero ya no existe (ENOENT).

## Archivos afectados

- `packages/native/src/components/player/offline.ts` (nuevo): manager + hook.
- `packages/native/src/components/player/offline.test.ts` (nuevo): tests.
- `packages/native/src/components/player/types.ts`: nuevos tipos
  (`OfflineDownloadState`, `OfflineDownloadEntry`, `OfflineDrmProvider`,
  `OfflineUnsupportedError`).
- `packages/native/src/index.ts`: exporta el nuevo hook/clase/tipos.
- `packages/native/package.json`: añade `react-native-fs` a
  `peerDependencies` y `devDependencies` (mismo patrón que el resto de
  dependencias nativas del paquete).
- `README.md` de `@kivora/native` (o `docs/native-player.md` si existe):
  documenta el nuevo hook y dónde queda documentado el punto de extensión
  DRM.
