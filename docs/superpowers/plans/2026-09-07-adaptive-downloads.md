# Adaptive downloads implementation plan

> Execute task-by-task with the executing-plans skill. Update each check when done.

**Goal:** HLS and DASH downloads and cache-only playback in the Android player.
**Architecture:** Media3 download service plus a react-native-video plugin, routed
through the existing OfflineDownloadManager. MP4 keeps its background transport.
**Tech stack:** Kotlin, Media3 1.8.0, React Native 0.85 / react-native-video 6.19.2, TypeScript.
**Spec:** ../specs/2026-09-07-adaptive-downloads-design.md

## Constraints

- Preserve existing working-tree changes and MP4 behavior.
- Android VOD without DRM; default video up to 720p with audio.
- Offline playback must not access the network.
- Native progress/completion notices; no duplicate JS notifications.

## 1. Transport contract and registry

- [x] Add failing manager tests for segmented support, transport playback URI,
  headers, awaiting native removal, and restart reconciliation.
- [x] Extend offline.ts and its transport contract; retain unsupported errors on
  platforms without an adaptive backend. Run offline/controller tests.

## 2. Native download and playback

- [x] Add Media3 dependencies, persistent download/cache owner, service and bridge
  under android/src/main/java/com/kivora/player; register module in the existing package.
- [x] Add cache-only ExoPlayer plugin using DownloadRequest media items and stream keys.
- [x] Route HLS/DASH from offline-native.ts to native events and snapshots, retain MP4.
- [x] Add native tests for cache isolation / offline routing and compile Android.

## 3. App and device validation

- [x] Update example download actions to selected format; preserve notifications for MP4.
- [x] Build, install, test both adaptive formats offline, restart and cancellation;
  use bounded local media fixtures if public samples are too large.
- [x] Run type-check, lint, relevant tests, review diff, document verified limits.
