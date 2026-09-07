# Native player

`@kivora/native` exports `Player`, `PlayerController`, `usePlayer`,
`AudioPlayerProvider` and `useAudioPlayer`. Media playback uses
[`react-native-video` v6](https://docs.thewidlarzgroup.com/react-native-video/docs/v6/intro/)
(ExoPlayer on Android, AVPlayer on Apple platforms).

Install `react-native-video@6.19.2` and `react-native-orientation-locker@1.7.0` in the consuming app and rebuild its native
binary. The example already includes it. This component has been implemented
for React Native; device verification currently targets Android.

```tsx
import { Player, type PlayerSource } from '@kivora/native';

const source: PlayerSource = {
  id: 'episode-1', title: 'Episode 1',
  src: 'https://media.example.com/episode.mpd',
  mimeType: 'application/dash+xml',
};

export function Watch() {
  return <Player source={source} controlsVariant="series" locale="en" />;
}
```

Keep `source` stable (module constant or `useMemo`). Replacing it deliberately
loads a new source. `autoPlay` defaults to false. Mount one `Player` per
controller. Unmounting releases the native view and pauses its controller.

## Controls and episodes

The player includes play/pause, ten-second jumps, seek position, mute, volume,
speed, available audio/subtitle tracks and Android quality selection. Settings
open in the native bottom sheet instead of a menu clipped by the video.
Fullscreen uses the native player's presentation and controls.

### Orientation

`orientation="auto"` (default) allows portrait and landscape, including in
fullscreen. `orientation="landscape"` is the OTT mode: starting video enters
fullscreen and locks landscape, including during ads. Leaving fullscreen
pauses playback and releases the orientation override. Audio never locks
orientation. This setting is independent of `controlsVariant`.

```tsx
<Player source={film} orientation="landscape" controlsVariant="cinema" />
<Player source={clip} orientation="auto" />
```

Keep the application's baseline orientation in an `OrientationLocker` mounted
before the navigator; player overrides are removed on close/unmount. For
example, `<OrientationLocker orientation={PORTRAIT} />` restores portrait for
the rest of an OTT app. Both exports come from `react-native-orientation-locker`.
Follow the library's [native setup](https://github.com/wonday/react-native-orientation-locker#installation):
Android needs the activity configuration callback and application lifecycle
registration (already configured in the example); iOS needs the AppDelegate
orientation hook and supported orientations. The example currently targets Android.

`controlsVariant="series"` opens `queue` by default on large players. Supply `activeQueueId`
and `onQueueSelect` to change the source/episode. The central play button is
hidden while the episode list is open. At widths up to 650 layout points, video
and controls share a single 16:9 card. Circular transport sits over the picture;
fullscreen, episodes and settings sit at the top, with title and a thin seek
bar at the bottom. Episodes start closed on mobile and open in a bottom sheet,
so neither episodes nor settings increase the height of the video card. `compact` and `cinema` start with the list closed;
`standard` keeps transport controls visible. Video pauses when the application
leaves the foreground or loses audio focus.

## Persistent audio

Wrap the navigator in `AudioPlayerProvider`, inside `KivoraProvider` and the
safe-area layout. It lays out the audio dock below its children, reserving space
instead of covering navigation controls.

```tsx
<AudioPlayerProvider locale="es">
  <AppNavigator />
</AudioPlayerProvider>
```

Call `useAudioPlayer().play({ id, title, src, type: 'audio' })` or `.close()`.
Audio survives screen changes within that provider. Starting any player closes
the previous mounted player, in either direction, including ads and fullscreen.
This applies to standalone players too, even outside `AudioPlayerProvider`.
The old native media view is removed and `onClose` is called. An inline video
can be explicitly reopened with `controller.play()` (resuming its saved content
position) or by supplying a new source. `controller.close()` releases media and
hides the player; pause alone keeps it visible.
This first implementation does not provide an Android
foreground audio service or lock-screen media controls; persistence means
in-app navigation, not guaranteed background playback.

## Advertising

Audio and video accept `ads.breaks`: local or remote media at `pre`, `post`, or
a numeric content time. The player shows “Publicidad” / “Advertisement”, the
remaining time and a skip action after `skipAfter`. Seeking and playback-speed
changes are disabled during an ad. Content resumes from the saved position.
Ad failures continue content unless `ads.onError` is `stop`.

```tsx
const source: PlayerSource = {
  id: 'podcast', title: 'Podcast', type: 'audio', src: 'https://example.com/show.mp3',
  ads: { breaks: [{
    id: 'sponsor', src: 'https://example.com/sponsor.mp3', mimeType: 'audio/mpeg',
    at: 'pre', skipAfter: 5, title: 'Sponsor',
  }] },
};
```

VAST/VMAP can be passed as `ads.tagUrl`; this uses the native Google IMA SDK,
including its ad controls. Enable `RNVideo_useExoplayerIMA=true` in the Android
app's `gradle.properties` and rebuild (already enabled in the example). The
custom-break flow and the IMA flow are separate: do not combine both on one
source. IMA integration requires validation with the app's actual ad tags.

## DRM and platform differences

`nativeSource` forwards react-native-video source options such as `headers`,
`drm`, `textTracks` and `bufferConfig`. Configure valid DRM licenses for the
target platform. Web Shaka configurations and plugins are not portable to
ExoPlayer/AVPlayer. No DRM persistence (offline licenses), thumbnail preview
or Picture-in-Picture UI is exposed by this initial native API — see
"Offline downloads" below for what offline support does and does not cover
today.

## Offline downloads

`useOfflineDownloads(manager)` + `createOfflineDownloadManager()` download
progressive MP4 sources for offline playback and persist the download
registry across app restarts (`react-native-fs` under the hood). HLS/DASH
sources and any source with `nativeSource.drm` reject immediately with
`OfflineUnsupportedError` (`reason: 'segmented-format' | 'drm'`) instead of
getting stuck — true offline HLS/DASH and DRM license persistence need a
native download manager (ExoPlayer `DownloadService` / `AVAssetDownloadTask`)
this package does not ship yet. Pass a `drmProvider` implementing
`OfflineDrmProvider` (`acquireLicense`/`releaseLicense`) to
`createOfflineDownloadManager` once one exists.

Consumers must install `@kesha-antonov/react-native-background-downloader` and
`react-native-fs` themselves (both are peer dependencies; the former is
optional at the package-manager level but required at runtime by
`useOfflineDownloads`/`createOfflineDownloadManager`) and rebuild their native
app before using offline downloads.

```tsx
import { createOfflineDownloadManager, useOfflineDownloads } from '@kivora/native';

const [manager] = useState(() => createOfflineDownloadManager());
const downloads = useOfflineDownloads(manager);

await manager.download(source); // rejects for HLS/DASH/DRM sources
manager.getPlaybackSource(source.id); // PlayerSource with a local file:// src, once downloaded
await manager.remove(source.id);
```

### Background downloads and completion notifications

Downloads started via `useOfflineDownloads`/`createOfflineDownloadManager` continue
after the app is closed and resume automatically the next time it opens — no action
required from the app. This is backed by
[`@kesha-antonov/react-native-background-downloader`](https://github.com/kesha-antonov/react-native-background-downloader),
which uses a real OS-level background session (`URLSession` on iOS,
`WorkManager`/`DownloadManager` on Android) instead of a JS-thread transfer.

A local notification ("Descarga completada") fires automatically via
`@notifee/react-native` when a download finishes; pass your own
`onDownloadComplete` to `createOfflineDownloadManager` to replace or extend that
behavior.

**Android:** on Android 14+, the background-downloader library requires its own
foreground-service notification while a transfer is in progress — this is an
OS requirement, not optional, and is separate from the completion notification
above. The library also pulls in `com.tencent:mmkv-shared` as a native
dependency; if your app already depends on a different MMKV version, pin it
explicitly in your app's `build.gradle` to avoid a version conflict.

**iOS:** background sessions require registering a completion handler in your
app's `AppDelegate`. Add to `AppDelegate.swift` (or the equivalent in
Objective-C):

```swift
func application(_ application: UIApplication, handleEventsForBackgroundURLSession identifier: String, completionHandler: @escaping () -> Void) {
  RNBackgroundDownloader.setCompletionHandlerWithIdentifier(identifier, completionHandler: completionHandler)
}
```

> This iOS integration step is implemented per the library's documented
> requirement but has not been verified on a real iOS device or simulator in
> this environment — the same caveat that already applies to the offline DRM
> extension point. Verify manually on iOS before shipping.

## Android example

Open **Ajustes → Probar player**. It includes DASH, HLS, MP4, episode selection,
a video ad, bundled synthetic audio and a distinct synthetic audio ad. Both
audio files work without the web server. With a debug APK they are served by
Metro; release bundles package them into the APK.

```sh
pnpm dev:app
pnpm --filter @kivora/example-app exec node scripts/android.mjs assembleDebug -PreactNativeArchitectures=arm64-v8a
pnpm --filter @kivora/native exec vitest run src/components/player/controller.test.ts
```

## Validation

Verified on a physical Android V2440: DASH and HLS playback, MP4 loading,
episode seeking, settings, fullscreen playback and preserving pause on entry.
The episode list hides the central transport. Bundled audio plays its ad with
a countdown, resumes content, survives screen navigation, and closes when
video starts. Also verified: OTT playback forces landscape despite a portrait
rotation request, exiting restores portrait and pauses, starting audio removes
the old video, and reopening video removes the audio dock and resumes its position.
The automatic policy uses the physical orientation sensor; sensor-driven rotation
still needs a manual device turn (the automation rotation command changes a system
setting, not the physical sensor).

The Android debug build, native package build, example TypeScript check and
seven controller tests pass. The broader native suite still has an existing
component-coverage failure for `upload-camera`, unrelated to this player.
iOS devices and production IMA ad tags have not been verified.

### Settings layout

`settingsLayout="tabs"` (default) groups settings into Quality, Audio, Subtitles
and Speed, with scrollable options for long track lists. Native audio exposes
Audio and Speed. On web this applies to the mobile bottom sheet.
Use `settingsLayout="list"` to restore the previous settings layout.
Circular video controls use translucent backgrounds without outline borders.
