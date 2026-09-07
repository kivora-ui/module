# FileUpload dashboard and Uppy review

## Current web implementation

The web advanced view now uses real Uppy Dashboard plugins within a styled Kivora modal. Progress, file previews and errors remain inside this modal; no advanced upload toast is emitted. Backdrop clicks do not dismiss it. Escape and the explicit close button remain available. The simple view keeps its existing toast workflow. Native has not been changed by this web revision.

Local sources include device selection, webcam photo/video, audio and screen capture. The image editor is installed. RemoteSources integrates Box, Dropbox, Facebook, Google Drive, OneDrive, Unsplash, URL and Zoom; WebDAV and both Google picker plugins have separate configuration. The AI image generator uses signed Transloadit assembly options supplied by the application. These cloud plugins are real implementations, but end-to-end cloud validation and activation require the application's Companion/OAuth/Transloadit configuration. They are not shown when unconfigured.

The Uppy session is retained with the supplied UploadController. Advanced mode reads its transport options but owns a separate file state; disposing the controller destroys both sessions. Custom source adapters remain supported. Provider configuration is fixed at first dashboard creation; use a new controller for a new account/backend configuration.

Validation: real local Tus upload, in-modal failure feedback, no advanced toasts, reopening with retained results, camera/microphone cleanup, EN/ES and viewport widths 1100/375/320. Cloud OAuth, AI generation and actual desktop screen selection require integration testing with configured services/user permission.

## Earlier capability review (before the web integration)

Reviewed on 2026-09-06: [interactive examples](https://uppy.io/examples/), [quick start](https://uppy.io/docs/quick-start/), [Dashboard](https://uppy.io/docs/dashboard/), [core](https://uppy.io/docs/uppy/), [localisation](https://uppy.io/docs/locales/) and [Companion](https://uppy.io/docs/companion/).

The live example separates configuration controls from the upload UI. Its controls enable remote/local plugins, small/disabled/dark presentations, restrictions, recovery and locale. These are application configuration, not settings an end user must understand before selecting a file.

Kivora now uses an advanced modal on web and a BottomSheet on Native. Both start with sources and navigate to a dedicated source screen with a back action. Device selection, web camera capture and injected provider screens are separate views. A source may provide `render({ addFiles, close, messages })` for authentication, browsing, search and configuration UI, or `pickFiles()` to open an external picker. The application owns provider permissions and credentials.

| Capability | Kivora status |
| --- | --- |
| Simple selection and web drag/drop | Implemented |
| Modal dashboard, source navigation, custom source screens | Implemented; Native uses BottomSheet |
| Camera | Browser photo capture; Native demo uses system camera |
| Gallery and document providers | Native demo uses system pickers |
| Preview and progress | Web toast; optional Native inline list; Android system progress notification |
| Automatic upload, cancellation, count/size/type validation | Shared controller |
| Resumable transport | Tus; Android persistent WorkManager transport |
| Multiple languages | English/Spanish UI, dictionary overrides for additional languages; Android notification resources follow system language |
| Google Drive, Dropbox, OneDrive, Box, Google Photos, Unsplash, Zoom | Source extension points only; no bundled OAuth or hosted provider implementation |
| Companion server-to-server transfers | Not implemented; adapters currently return file data/local URIs |
| Metadata forms and image editing | Custom source screens can host these; no bundled editor or metadata workflow |
| Audio/video recording and screen recording | Not implemented; camera currently takes photos |
| Compression and thumbnail preprocessing | No preprocessing pipeline; local image previews only |
| Golden Retriever/browser reload recovery | Not implemented; keeping the controller alive survives client navigation only |
| S3 multipart, XHR and Transloadit processing | Not implemented; Tus only |
| iOS background uploads | Not implemented |
| Folders, remote search, account switching and remote logout | Provider adapter responsibility; no bundled remote browser |

Web advanced mode queues files for review and requires an explicit Upload action. Files can be removed individually or cleared together before uploading. Simple mode keeps automatic uploads. Closing the selector does not dispose the controller or cancel ongoing transfers. It stops camera tracks. Selection errors remain visible in the selector. Provider labels, descriptions, custom screens and backend error details remain the integrator's localisation responsibility.

Next substantial steps toward Uppy parity are authenticated provider adapters and a server-side remote-transfer contract, followed by metadata/image editing, recording plugins, browser recovery and additional transports. None should be represented as a working cloud source until credentials, permissions and end-to-end transfers are validated.
