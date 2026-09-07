# @kivora/upload

Shared file upload controller with pluggable transports for Kivora web and React Native components. Uses `tus-js-client` and requires a Tus-compatible server.

```ts
import { UploadController } from '@kivora/upload';
const controller = new UploadController({
  endpoint: 'https://uploads.example.com/files',
  maxFiles: 5,
  maxFileSize: 50 * 1024 * 1024,
  accept: ['image/*', '.pdf'],
});
```

Use `add(files)` to validate and automatically start a batch. Set `autoStart: false` for manual operation. `onComplete(item)` runs once per successful attempt. `start(id)` starts or resumes an individual item. `pause(id)`, `cancel(id)`, `remove(id)` and `dispose()` return promises. Subscribe with `subscribe(listener)` and read the stable immutable snapshot with `getSnapshot()` (compatible with React `useSyncExternalStore`). Own the controller above UI that may unmount; dispose it when that upload session ends.

Files have `name`, known `size`, `type`, and `data`: a browser Blob/File or a native `{ uri, name, type }` source. Unknown sizes are rejected. Limits default to 10 files and 50 MiB per file. Batch validation is atomic. Uploaded items expose a Tus resource URL, not a public download URL. Provide authentication via `headers` and enforce limits/authorization on your server.

This version supports automatic uploads, progress, retry, pause/resume within a session and cancellation. The default JavaScript transport does not persist sessions across reloads or guarantee background transfers, refresh authentication automatically, or provide S3/Companion/image editing. Cancel stops transfer without deleting remote resources; remove removes the local entry. Configure abandoned-resource cleanup on your backend.

## Local demo

From the Kivora repository root run `pnpm dev:uploads` and `pnpm dev:web`. Open `/componentes` and search for FileUpload. The demo stores real files under `.uploads/` on this computer and accepts at most 50 MiB per file. It listens on loopback and has no production authentication.

For Android, use `adb reverse tcp:1080 tcp:1080`, then open FileUpload in the app gallery. The example uses `@react-native-documents/picker` and hands selected URIs to the background module, which copies them into private app storage before scheduling transfer. The app's network configuration allows local HTTP only. Use HTTPS for a deployed backend. iOS requires installing the picker pods and configuring a reachable development endpoint; this demo has not been device-tested on iOS.

FileUpload shows local image thumbnails and file-type icons for PDF, documents, spreadsheets, archives, audio, video and other files. Unsupported or unreadable images fall back to an image icon. Previews do not upload file contents; browser object URLs are released when the preview unmounts.


## Android background transport

`@kivora/native` exports `createBackgroundUploadController(options)`. Its Android WorkManager implementation copies files to app-owned storage, persists upload URLs, sends Tus chunks, retries transient failures and posts system progress/completion notifications. Call it once when the upload session is created; it restores recent jobs on launch. Keep the controller above navigation and do not dispose it when a screen unmounts. `dispose()` explicitly cancels tracked uploads. The background transport supports cancellation, not manual pause.

Rebuild Android after installing the native package. Notification permission is requested by the example before file selection. Transfers can continue when the activity is backgrounded or removed from Recents, subject to Android scheduling, battery restrictions and job quotas. Force stop from system settings prevents execution until the user reopens the app. No iOS background adapter is included; the standard controller remains a foreground Tus client on iOS. Completed job records and private file copies currently remain in application storage; applications must account for this retention until an explicit history cleanup API is provided.

In web apps, mount one `FileUploadStatus` in the persistent application shell and pass `showStatus={false}` to individual FileUpload views. It displays progress across client-side navigation and a completion toast. Mount the existing Toaster alongside it. Closing the browser tab stops the JavaScript transfer; web background execution after tab closure is not promised.

Web upload cards are rendered inside Sonner toasts, including the preview, single-line filename, status, size and progress. The same toast updates on completion and dismisses after five seconds; errors remain until dismissed. The FileUpload view only renders the picker/dropzone and selection errors. Mount Toaster in the application.

## Localisation

`getUploadMessages({ locale, messages })` supplies typed English/Spanish dictionaries shared by the platform UIs. Unknown language tags fall back to English, and custom messages override the dictionary. This does not translate server errors or the controller's diagnostic exceptions; the UI supplies a translated selection error and custom providers are responsible for their own text.
