# File uploads: Uppy assessment and Kivora architecture

Status: first foreground Tus implementation added; advanced adapters remain proposed. Reviewed 2026-09-06.

## Recommendation

Build a common Kivora upload API with platform-specific engines and UI. Use Uppy behind the web adapter, and evaluate tus-js-client plus native file sources for React Native. Do not expose Uppy types as the shared public contract or assume its browser UI/plugins run on native.

The repository currently has Attachment, AttachmentMedia, AttachmentActions and progress primitives on both platforms. These display attachments; they do not select, transfer or persist files. Reuse them for the upload list. Keep upload dependencies optional through separate entry points/packages so existing component users do not pay the bundle or native installation cost.

## What Uppy contributes

Uppy Core manages state, events and restrictions, with plugins for transfer and sources. Its React integration offers hooks and composable components, allowing a Kivora-styled UI instead of embedding the stock Dashboard. Sources: [Core](https://uppy.io/docs/uppy/), [React](https://uppy.io/docs/react/).

Its ecosystem also covers camera capture, image editing/compression, localization and remote providers. These are distinct integrations rather than features of a file input. Source: [Uppy](https://uppy.io/).

| Capability | Web approach | Native approach |
| --- | --- | --- |
| Select multiple files | Browser input and Uppy | System document picker adapter |
| Photos and camera | Optional browser source plugins | Optional system photo/camera adapter |
| Drag and drop | Web dropzone | Document/photo selection; no artificial drag UI |
| Queue, limits, metadata | Normalize Uppy state/events | Native queue implementing the same contract |
| Preview, progress, remove, retry | Kivora Attachment UI | Kivora Attachment UI |
| POST/PUT uploads | Uppy XHR transport | Native-compatible transfer adapter |
| Pause and resume | Tus adapter | tus-js-client feasibility test on real devices |
| Direct storage uploads | S3 adapter | Signed upload adapter; multipart separately validated |
| Restore after restart | Optional Golden Retriever | Durable metadata plus access to the original file |
| Remote Drive/Dropbox sources | Companion integration | Separate authenticated provider flow; requires investigation |
| Background transfers | No guarantee after closing the browser | OS-managed native transfer implementation |
| Image editing | Optional Uppy/browser integration | Separate native editor integration |

This table is a target design, not a statement of existing Kivora support.

## Transfer and persistence boundaries

Tus is the preferred resumable protocol for a first reliable cross-platform implementation. It requires a compatible server; a normal multipart POST endpoint does not provide offset-based resume. Source: [Uppy Tus](https://uppy.io/docs/tus/).

tus-js-client explicitly supports React Native URI inputs. Its documentation warns that automatic upload URL storage is unavailable in Native. Therefore, test explicit session restoration rather than assuming browser fingerprint settings work. Store a server session identifier/URL and a durable file reference; verify the file and server offset before resuming. Large URI uploads must be profiled for memory use. Source: [tus-js-client runtime support](https://raw.githubusercontent.com/tus/tus-js-client/main/docs/installation.md).

Golden Retriever is browser recovery infrastructure, not native persistence. Test recovery with browser storage limits and missing file data. On Native, temporary picker URIs may need a retained permission or an app-owned file copy. Missing files must become an explicit needs-file state. Source: [Golden Retriever](https://uppy.io/docs/golden-retriever/).

Background uploading must be a separate advertised capability. A JavaScript upload continuing while a screen is mounted is not a background guarantee. Android has OS-managed user-initiated transfer jobs, available from API 34, with scheduling and notification requirements. Older Android versions and iOS require their own implementation and device validation before support is claimed. Source: [Android UIDT](https://developer.android.com/develop/background-work/background-tasks/uidt).

## Proposed package boundaries

- `@kivora/upload`: platform-neutral contracts, restrictions, normalized errors and adapter conformance tests. No DOM, React Native imports or binary serialization into state.
- Web upload entry point: Uppy instance ownership, subscriptions, source and transport plugins. Uppy owns its queue; Kivora projects that state instead of maintaining a second competing queue.
- Native upload entry point: queue controller, document/media sources, URI lifecycle, foreground transfer and persistence adapters.
- Platform UI: FileUpload, FileUploadTrigger, FileUploadList, FileUploadItem, FileUploadProgress and FileUploadActions. Compose existing Attachment primitives; use a BottomSheet for mobile source selection.

Expose `useFileUpload` with normalized items and operations: add, remove, upload, cancel, retry, pause and resume. Optional operations must be accompanied by capability flags. An HTTP-only adapter must not show a misleading resume button.

Each item needs a stable ID, name, optional size/MIME, source reference, metadata, status, transferred bytes, optional total bytes, normalized error and server result. Proposed states: queued, uploading, paused, success, error, canceled and needs-file. Model server-side processing separately from transfer completion. Unknown totals use indeterminate progress.

Async completions must carry an attempt identifier so canceled/retried work cannot overwrite newer state. Removing an item aborts its active transfer. Retry policy must distinguish transient failures from invalid files and authorization failures. The controller lifetime belongs to a provider/service rather than a recycled list row.

## Server contract

The application supplies its backend. Support a configured HTTP endpoint and a Tus endpoint first; do not choose a cloud provider on the consumer's behalf.

For S3, signing and multipart creation/completion/abort belong on the server. Keep signing secrets out of clients and refresh expired authorization through callbacks. Source: [Uppy AWS S3](https://uppy.io/docs/aws-s3/).

Remote sources such as Drive and Dropbox require Companion and provider configuration. They are not unlocked just by installing the React package. Source: [Companion](https://uppy.io/docs/companion/).

The backend must enforce file size/type/access rules, issue durable result IDs, handle duplicate completion safely, and clean up abandoned uploads. Client validation improves feedback but does not enforce storage policy. Distinguish local remove, transfer cancel and deletion of an already uploaded server object.

## Implementation order and acceptance criteria

1. Validate the platform boundary with a real local Tus server: upload the same fixture from Next.js and Android, interrupt the connection, resume and compare server bytes. Test native URI reads and memory before committing to an engine.
2. Ship a usable common baseline: multiple selection, restrictions, previews, queue, progress, cancellation, retry, Tus pause/resume, accessible controls and localized strings. Include real backend examples, not simulated completion timers.
3. Add restart recovery and signed storage uploads. Test expired authorization, unavailable local files and multipart cleanup.
4. Add optional camera/photo sources, editing/compression and Companion providers with documented platform coverage.
5. Implement background native transfers and validate OS suspension, termination and relaunch behavior separately on Android and iOS.

Required regression cases include cancel/retry races, concurrency limits, partial batch failure, unknown sizes, zero-byte files, loss of network, expired credentials, duplicate events, unmount/remount and corrupted recovery state. A full-potential claim requires large-file and recovery tests on both mobile platforms; the connected Android phone alone cannot establish iOS support.

The immediate next deliverable should be step 1 followed by the common baseline. This document adds no dependencies, backend deployment or upload implementation.

Implementation update: the initial release shares tus-js-client directly across both platforms rather than introducing Uppy as a second queue engine. FileUpload is present in both galleries. S3, Companion, editing, restart persistence and background transfer remain future work.

Android implementation update: a WorkManager transport now stores private file copies and Tus session URLs, retries interrupted work and posts native completion notifications. Web progress is hosted in a persistent shell overlay. Upload selection starts transfers automatically. iOS background transfer and execution after closing a browser tab are not implemented.
