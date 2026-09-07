# Android HLS and DASH offline downloads

Extend the existing native download flow to HLS and DASH VOD without DRM.
Use Media3 1.8.0 DownloadHelper, DownloadManager, DownloadService and a persistent
SimpleCache with NoOpCacheEvictor. Keep the progressive MP4 transport unchanged.
Select a single video rendition up to 720p and the default audio track using
DownloadHelper track parameters. Reject live and DRM content before downloading.

Register a react-native-video ExoPlayer plugin. Offline playback identifiers select
the persisted DownloadRequest, including its stream keys. The plugin supplies a
cache-only data source and the original media item; a missing segment must fail,
never silently stream from the network. No local HTTP proxy or manifest rewriting.

The existing JS manager keeps the public registry and hooks. Extend its transport
contract for MIME type, request headers, final playback URI, native progress and
async cancellation. Native snapshots reconcile completed/failed downloads on restart.
The native service owns adaptive progress/completion notifications, avoiding duplicates.
Deleting adaptive downloads removes Media3's stored segments and registry entry.

The example exposes download for the selected DASH, HLS or MP4 sample. Device
verification covers HLS/DASH completion, notifications, restart, offline playback
and seeking, plus cancellation and MP4 regression. Keep all existing uncommitted work.
iOS adaptive downloads and offline DRM licenses are not part of this change.
