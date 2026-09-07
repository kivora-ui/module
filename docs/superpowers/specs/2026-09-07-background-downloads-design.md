# Descargas en segundo plano + notificación — Design

## Contexto

`@kivora/native` ya tiene un `OfflineDownloadManager` (`packages/native/src/components/player/offline.ts`)
que descarga fuentes MP4 progresivas (sin DRM) usando `react-native-fs` a través del
adaptador `offline-native.ts`. Esa implementación cubre el caso "la app está abierta
en primer plano" pero no sobrevive a que el usuario cierre la app: `react-native-fs`
ejecuta la transferencia en un hilo nativo atado al proceso de la app, no a una sesión
de sistema.

El usuario pidió explícitamente:
1. Que la descarga continúe si la app se cierra.
2. Que se reanude sola al reabrir la app, sin intervención del usuario.
3. Una notificación cuando la descarga termina.

## Alcance

Dentro de alcance:
- Sustituir el transporte de descarga por uno que sobreviva al cierre de la app en
  Android e iOS.
- Reenganchar automáticamente las descargas en curso al arrancar la app.
- Notificación local al completar una descarga.
- Mantener intacta la superficie pública existente (`useOfflineDownloads`,
  `createOfflineDownloadManager`, `OfflineDownloadEntry`, etc.) — este es un cambio de
  implementación interna, no de API.

Fuera de alcance (no-goals):
- Sincronización con un backend de notificaciones push.
- Descarga de streams segmentados (HLS/DASH) o con DRM — sigue rechazada
  explícitamente por `OfflineUnsupportedError`, sin cambios aquí.
- Límite de descargas concurrentes, cola con prioridad, o descarga por Wi-Fi únicamente
  (se puede añadir después; no lo pidió el usuario).
- Verificación en dispositivo iOS real: no hay Mac/dispositivo iOS disponible en este
  entorno. Se implementa igual que el certificado DRM — con el mismo cuidado, pero sin
  poder probarlo end-to-end; ver "Riesgos".

## Dependencia nueva

`@kesha-antonov/react-native-background-downloader` (fork activo del abandonado
`react-native-background-downloader`; ver vetado ya compartido con el usuario:
Apache-2.0, sin sub-dependencias, actualizado activamente, 0 issues abiertos).
Se añade como `peerDependency` + `devDependency`, igual que `react-native-fs`.

## Arquitectura

```
offline.ts (puro, sin RN)
  OfflineDownloadManager
    - usa OfflineFileSystem para mkdir/unlink/manifiesto (sin cambios)
    - usa OfflineTransport (NUEVO) para iniciar/reanudar/cancelar la transferencia real
    - acepta un onDownloadComplete? callback (NUEVO) — se llama tras marcar 'downloaded'

offline-native.ts (único archivo que toca módulos nativos)
  - construye el OfflineFileSystem de siempre (RNFS, sin cambios: mkdir/unlink/manifest)
  - construye un OfflineTransport respaldado por @kesha-antonov/react-native-background-downloader
  - createOfflineDownloadManager() reengancha tareas existentes al construir el manager
    (resumePendingDownloads), y pasa un onDownloadComplete que llama a
    notifyDownloadComplete() de offline-notifications.ts

offline-notifications.ts (NUEVO, único archivo que toca @notifee/react-native)
  - notifyDownloadComplete(title: string): Promise<void>
  - require('@notifee/react-native') perezoso, mismo patrón que RNFS en offline-native.ts
```

### `OfflineTransport` (nueva interfaz en `offline.ts`)

Reemplaza el uso directo de `OfflineFileSystem.downloadFile`/`stopDownload` dentro de
`OfflineDownloadManager`. `OfflineFileSystem` pierde esos dos métodos (pasan a
`OfflineTransport`); conserva `documentDirectoryPath`, `exists`, `mkdir`, `readFile`,
`writeFile`, `unlink` — siguen siendo responsabilidad de RNFS.

```ts
export interface OfflineTransport {
  /** Inicia una descarga nueva. `id` es el id de la entrada (source.id) — se usa
   * como jobId estable para poder reenganchar tras un reinicio. */
  start(options: {
    id: string;
    fromUrl: string;
    toFile: string;
    onProgress: (progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: () => void;
    onError: (message: string) => void;
  }): void;
  /** Cancela una descarga en curso. No-op si `id` no tiene tarea activa. */
  stop(id: string): void;
  /** Se llama una vez al construir el manager. Devuelve los ids de tareas que
   * sobrevivieron a un cierre de la app, para que el manager reenganche sus
   * callbacks (onProgress/onDone/onError) a las entradas 'downloading' del
   * manifiesto que compartan ese id. */
  resumeExisting(callbacks: {
    onProgress: (id: string, progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: (id: string) => void;
    onError: (id: string, message: string) => void;
  }): Promise<string[]>;
}
```

### Cambios en `OfflineDownloadManager`

- Constructor pasa a `(fs: OfflineFileSystem, transport: OfflineTransport, drmProvider?: OfflineDrmProvider, onDownloadComplete?: (entry: OfflineDownloadEntry) => void)`.
- `download()`: en vez de `this.fs.downloadFile(...)`, llama a
  `this.transport.start({ id: source.id, fromUrl: source.src, toFile, onProgress, onDone, onError })`.
  `onDone` marca `state: 'downloaded'`, guarda el manifiesto y llama a
  `onDownloadComplete?.(entry)` si está presente.
- `remove()`: usa `this.transport.stop(id)` en vez de `this.fs.stopDownload(jobId)`; ya
  no hace falta el `Map<string, number>` de `jobId`s internos (el `id` de la entrada
  hace ese papel de forma estable, lo que además es lo que permite reenganchar tras un
  reinicio).
- Nuevo método privado `resumeAll()`, llamado desde el constructor tras `loadManifest()`
  (se encadena en `this.ready`): para cada entrada `downloading` en el manifiesto tras
  cargarlo, llama a `transport.resumeExisting(...)`. Si el id de una entrada
  `downloading` no aparece entre los ids devueltos por `resumeExisting`, la tarea se
  perdió (la reanudación falló o el SO la descartó) — se marca esa entrada como
  `{ state: 'error', error: 'Download interrupted' }` y se persiste el manifiesto.

### `offline-native.ts`

```ts
function backgroundDownloaderTransport(): OfflineTransport {
  const downloader = require('@kesha-antonov/react-native-background-downloader');
  // start(): downloader.download({ id, url: fromUrl, destination: toFile })
  //   .progress(({ bytesDownloaded, bytesTotal }) => onProgress({ bytesWritten: bytesDownloaded, contentLength: bytesTotal }))
  //   .done(() => onDone())
  //   .error(({ error }) => onError(error))
  // stop(): downloader.checkForExistingDownloads() no hace falta aquí — stop cancela
  //   directamente la tarea en curso vía task.stop() sobre la tarea guardada en un Map.
  // resumeExisting(): downloader.checkForExistingDownloads() devuelve las tareas vivas;
  //   se reengancha .progress/.done/.error a cada una y se devuelve la lista de ids.
}
```

`createOfflineDownloadManager` pasa este transport y un `onDownloadComplete` que llama
a `notifyDownloadComplete(entry.source.title)` de `offline-notifications.ts`.

### `offline-notifications.ts`

```ts
export async function notifyDownloadComplete(title: string): Promise<void> {
  const notifee = (require('@notifee/react-native').default ?? require('@notifee/react-native'));
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'kivora-downloads', name: 'Descargas' });
  await notifee.displayNotification({
    title: 'Descarga completada',
    body: title,
    android: { channelId, smallIcon: 'ic_launcher' },
  });
}
```

## Notificaciones durante la descarga (Android 14+)

`@kesha-antonov/react-native-background-downloader` exige por sí misma un
foreground-service con notificación en Android 14+ (`showNotificationsEnabled`,
activado por defecto — es un requisito del propio sistema operativo, no se puede
desactivar sin romper la descarga en background). Esa notificación de progreso la
gestiona la librería; `offline-notifications.ts`/notifee solo dispara la notificación
**de finalización**, para no duplicar avisos durante la descarga.

## iOS — paso de integración nativa requerido

Igual que con el certificado DRM (documentado como "implementado pero no probable en
este entorno"): las sesiones en background de iOS exigen registrar
`application:handleEventsForBackgroundURLSession:completionHandler:` en el
`AppDelegate` nativo de cada app consumidora. Se documenta el snippet exacto en
`docs/native-player.md`, junto a una nota explícita de que no se pudo verificar en un
dispositivo iOS real (sin Mac/dispositivo disponible), tal como se hizo con DRM.

## Manejo de errores

- Tarea perdida tras reinicio (no aparece en `resumeExisting`): `state: 'error'`,
  `error: 'Download interrupted'`. El usuario puede reintentar llamando a `download()`
  de nuevo (ya soportado: `download()` reintenta cualquier entrada en `error`).
- Fallo de red durante la descarga: lo reporta la librería vía `onError`; mismo camino
  que hoy (`state: 'error'`, mensaje del error).
- Fallo al mostrar la notificación (p. ej. permiso denegado): `notifyDownloadComplete`
  no debe romper el flujo de descarga — se envuelve en `try/catch` y se ignora
  silenciosamente (el archivo ya está descargado igualmente; la notificación es
  una mejora, no un requisito funcional).

## Testing

Mismo patrón que `offline.test.ts`: un `OfflineTransport` fake en memoria (sin RN),
que permite simular `onProgress`/`onDone`/`onError`, y "reinicios" (construir un
manager nuevo sobre el mismo manifiesto persistido y un transport fake que declara
qué tareas "sobrevivieron").

Casos nuevos a cubrir:
1. Reanudación exitosa: manifiesto con una entrada `downloading`, `resumeExisting`
   devuelve su id → la entrada sigue en `downloading` y seguirá recibiendo progreso.
2. Tarea perdida: manifiesto con una entrada `downloading`, `resumeExisting` no la
   devuelve → pasa a `error: 'Download interrupted'`.
3. `onDownloadComplete` se llama exactamente una vez, solo al pasar a `downloaded`,
   nunca en `error`.
4. `remove()` sigue cancelando (`transport.stop`) y limpiando el archivo igual que hoy.

`offline-notifications.ts` no se testea con notifee real (no es testable sin el
módulo nativo) — se mantiene sin tests directos, igual que el resto de wrappers
"solo nativos" del paquete (`offline-native.ts` tampoco tiene test propio); su
contrato queda cubierto por el test de `onDownloadComplete` en `offline.test.ts`
(usando un fake que verifica que se llama con los datos correctos).

## Riesgos

- **No verificable en iOS real en este entorno** — mismo riesgo aceptado que con DRM.
  Mitigado documentando el paso de `AppDelegate` con precisión y dejando claro en el
  PR/commit que falta prueba manual en dispositivo iOS.
- **Verificación en Android real**: si hay dispositivo Android conectado, sí se puede
  probar el ciclo completo (cerrar app a mitad de descarga → reabrir → ver que
  continúa/reanuda → notificación al terminar).
- La librería exige `com.tencent:mmkv-shared` en Android (dependencia transitiva
  nativa) — se documenta en `docs/native-player.md` por si el consumidor tiene algún
  conflicto de versión de MMKV en su propio `build.gradle`.
