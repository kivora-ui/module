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

## Loading image and brand intro

`poster` displays an image over the inline player until the current media emits
its first-frame event, including when moving between intro, ad and content.
An optional `intro` runs before pre-roll advertising and content; its time does
not affect content resume position or mid-roll scheduling. It has its own
`intro` phase, supports pause/play, and does not expose ad skipping. If the
intro cannot load, playback continues to the pre-roll or content. Audio ignores
`intro`. Native fullscreen uses the native player's loading presentation.

```tsx
const film: PlayerSource = {
  id: 'film', title: 'Film', src: 'https://example.com/film.mpd',
  mimeType: 'application/dash+xml', poster: 'https://example.com/loading.jpg',
  intro: { src: 'https://example.com/brand.mp4', mimeType: 'video/mp4', title: 'Brand' },
  ads: { breaks: [{ id: 'pre', at: 'pre', src: 'https://example.com/ad.mp4' }] },
};
```

Content headers/DRM and IMA tags are not applied to the intro. Offline playback
omits remote intros and ads; the download itself contains the selected content.

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

The audio UI follows the host's `background`, `card`, `foreground`, `primary`,
`primary-foreground`, `secondary` and `muted-foreground` theme tokens in all
three presentations: compact bottom dock, expanded sheet and full-screen view.
The dock shows artwork, title, optional `source.subtitle`, Cast and play/pause;
tap its title/artwork to expand. Larger views show prominent artwork, a seek
slider with remaining time, a central play button, 15-second rewind and
30-second forward, audio/speed settings and a sleep timer. The full-screen view
scrolls on small screens. No decorative waveform or inactive favorite buttons
are presented. Configure `bottomOffset` to place the dock above host navigation.

`controller.setSleepTimer(15 | 30 | 45 | 60 | 'episode' | null)` sets or cancels
the audio sleep timer. Minute values use elapsed wall time, including manual
pauses; the UI shows a countdown. Expiry pauses without discarding the playback
position. Episode mode stops at content completion, not at the end of a pre-roll,
and does not start post-roll ads. Replacing the source, closing or unmounting the
player clears its timer. Cast receives the same pause command as local playback.

On Android, local audio uses the native Media3 playback service and media-session
notification. It keeps playing when the screen locks or the app backgrounds.
The Kivora audio plugin holds ExoPlayer's playback wake lock and schedules sleep
expiry natively, pausing ExoPlayer without waiting for JavaScript. Episode mode
also listens for native content completion. The UI reconciles native expiry and
notification play/pause events when JavaScript resumes. Force-stopping the app or
removing its task is not supported as a playback-persistence mechanism.

On iOS, background/notification props are enabled for audio, but an iOS host must
enable Background Audio in Xcode; this repository has no iOS host for validation
or native sleep-timer implementation. Cast sleep timing remains sender-managed
and still needs receiver-owned scheduling for independence from mobile JS.

Verification (2026-09-07): Android device inspection of the three presentations;
automated tests for expiry, replacement, cancellation, source reset, overdue
resume, episode/ad boundaries and the Cast pause command.
On the physical V2440, the two-minute audio sample continued with power state
`Asleep`, advancing from 5.9 to 17.9 seconds. System media controls paused it at
32.1 seconds and resumed it to 49.9 seconds before the screen was woken.
The Android foreground media service and playback wake lock were active.
Native Robolectric tests verify timer expiry without JS and owner cancellation;
the minute-based timer has not been timed end-to-end on the physical device.

Wrap the navigator in `AudioPlayerProvider`, inside `KivoraProvider` and the
safe-area layout. The audio dock floats above its children; set `bottomOffset`
to the measured bottom-navigation height to keep navigation controls accessible.

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
Android provides foreground audio playback and system media controls through
React Native Video's `VideoPlaybackService`. The library manifest declares the
media-playback foreground service and wake-lock permissions. Audio source title,
subtitle and artwork populate notification metadata. Video retains its existing
foreground-only behavior unless using an external playback route.

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
progressive MP4 sources and, on Android, HLS/DASH VOD without DRM. The registry
persists across app restarts (`react-native-fs`). Android adaptive downloads use
Media3 1.8.0 `DownloadService`, selecting one supported video track up to 720p
and default audio; subtitles are excluded. Live streams, DRM and videos with
no supported rendition within that limit fail explicitly. HLS/DASH on iOS still
reject with `OfflineUnsupportedError` (`reason: 'segmented-format'`). Offline
DRM license persistence is not implemented.

Starting an adaptive download needs connectivity to inspect its manifest. A
preparation failure becomes an error entry that can be retried; once enqueued,
Media3 handles background transfer and connectivity requirements.

Adaptive segments are stored in a persistent cache isolated by download ID.
The react-native-video plugin reads both manifests and segments exclusively
from that cache, with no network fallback. `getPlaybackSource()` returns an
internal HTTPS marker for adaptive content; pass it to `Player` unchanged.
Request headers come from `source.nativeSource.headers` and are persisted per
download for background recovery. Treat that application-private storage as
sensitive when supplying authorization headers.

Consumers must install `@kesha-antonov/react-native-background-downloader` and
`react-native-fs` themselves (both are peer dependencies; the former is
optional at the package-manager level but required at runtime by
`useOfflineDownloads`/`createOfflineDownloadManager`) and rebuild their native
app before using offline downloads.

```tsx
import { createOfflineDownloadManager, useOfflineDownloads } from '@kivora/native';

const [manager] = useState(() => createOfflineDownloadManager());
const downloads = useOfflineDownloads(manager);

await manager.download(source);
manager.getPlaybackSource(source.id); // Offline PlayerSource, once downloaded
await manager.remove(source.id);
```

### Background downloads and completion notifications

Downloads started via `useOfflineDownloads`/`createOfflineDownloadManager` use
native background transfers. Keep one manager alive across navigation and create
it at app startup to restore the registry and reattach to pending transfers.
Downloads share a persistent FIFO queue across MP4, HLS and DASH: one active
entry, with all others `queued` in insertion order. Completion, failure or
cancellation releases the next entry. Cancelling a queued entry removes it
before transfer. Media3 also limits adaptive concurrency to one.

The active transfer continues natively in the background. Starting the next
queued transfer requires JavaScript execution; if the OS suspends JS, it waits
until the app returns. On foreground entry, the manager reconciles native
snapshots, including completion events missed while suspended, then advances
the queue. Keep a single manager per application.
Background execution remains subject to OS restrictions; explicitly force-stopping
the app is different from moving it to the background. Android HLS/DASH uses
Media3 foreground progress and terminal notifications independently of JavaScript;
these downloads suppress the JS completion callback to avoid duplicate notices.
The following progressive MP4 integration is backed by
[`@kesha-antonov/react-native-background-downloader`](https://github.com/kesha-antonov/react-native-background-downloader),
which uses a real OS-level background session (`URLSession` on iOS,
`WorkManager`/`DownloadManager` on Android) instead of a JS-thread transfer.

A local notification ("Descarga completada") is requested via
`@notifee/react-native` when the manager receives completion. This callback needs
JavaScript to be running or the manager to reattach after restart. Request
notification permission from the foreground before starting downloads. The second
argument to `createOfflineDownloadManager` replaces the completion callback.

**Android MP4:** [version 4.6.2](https://github.com/kesha-antonov/react-native-background-downloader/tree/v4.6.2)
uses user-initiated data transfer jobs on Android 14+
and foreground services on earlier versions. The consuming app must supply
`implementation 'com.tencent:mmkv-shared:1.3.16'` (or a compatible existing MMKV
dependency) in `app/build.gradle`; the downloader declares it as `compileOnly`.
The example enables native progress notifications and, on Android 16+, completion notifications
using `setConfig({ showNotificationsEnabled: true, showCompletionNotification: true })`
and replaces the manager callback with a no-op to avoid duplicate notifications.
On earlier Android versions it retains the Notifee callback: Android 14/15 can
fall back to DownloadManager, which does not use the library's completion notification.
These callbacks require JavaScript execution or reattachment at startup. Native completion
notifications open the downloaded file with the system viewer.

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

The **Descargas** section downloads the selected MP4, HLS or DASH video on
Android, displays progress, cancels pending downloads, plays completed media
locally, and removes downloads. DRM remains unsupported. The example initializes one manager
at startup, so leaving the player screen does not interrupt a download.
**Encolar DASH, HLS y MP4** adds missing formats in that order and shows queue
positions. Existing completed downloads are retained; remove them to repeat.
**Pruebas de inicio** provides image/content, image/brand/content and
image/brand/ad/content cases using included synthetic media, with a visible
phase sequence. The brand video lasts six seconds and the ad four seconds.

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

### Offline device verification (2026-09-07)

Verified on a physical V2440 with Android 16: MP4 download and a single native
completion notification; registry restoration after app restart; playback through
to completion with Wi-Fi and mobile data disabled; removing the local file without
starting remote playback; cancelling a download waiting for connectivity; and
completion after starting without connectivity, moving the app to the background,
then restoring connectivity. Wi-Fi and mobile data were restored after testing.

The Android arm64 debug APK and native package build pass, as do native/example
type-check and lint, 24 offline manager tests and 7 player controller tests.
The cancellation regression covers cancellation during the initial manifest write:
the transfer must not start later or restore an obsolete downloading entry.
Force-stop during transfer, Android 14/15 notification behavior, and iOS were not
device-tested in this pass.

### HLS/DASH device verification (2026-09-07)

Verified on the physical V2440 / Android 16: public Angel One HLS and Sintel
DASH downloads, native completion notifications with the app in the background,
and restoration of a completed native DASH download whose JS registry still
said `downloading` before restart. With Wi-Fi and mobile data disabled, both
played from their offline sources and accepted forward seeks; HLS also reached
the end. The native index contains exactly one video and one audio selection:
768×576 AVC with English audio for HLS (11.8 MB), and 1280×546 VP9 with English
AAC for DASH (138.6 MB).

Also verified: deleting HLS preserves DASH; deleting the playing DASH source
leaves playback paused and releases its cache; cancelling a new DASH transfer
removes its registry entry and partial segments; initial HLS preparation without
connectivity produces a retryable error entry. Wi-Fi and mobile data were
restored. iOS adaptive downloads, DRM, live content, and force-stop during an
active adaptive transfer were not device-tested.

Validation: 42 player/manager/bridge tests, two Android cache/URI tests, Android
lint, native/example type-check and lint, native package build and Android arm64
debug APK. Cache tests cover isolated IDs sharing the same segment URI and a
missing segment failing without network fallback. Bridge tests cover completion
during restart reconciliation and restoration of an interrupted removal.

### Intro and FIFO verification (2026-09-07)

Verified on the physical V2440 / Android 16: all three bundled startup demos
(image/content, image/brand/content, image/brand/ad/content). A device recording
shows the poster during loading and the brand followed by the ad and content.
Enqueuing DASH, HLS and MP4 produced one downloading entry and two queued entries;
all three subsequently completed in order. The example displays queue positions.
Also verified: moving the app to the background with DASH active and HLS queued,
then returning to the app; DASH completed and HLS advanced and completed.

Validation: 59 controller/manager/bridge tests, native/example type-check and lint,
native package build and Android arm64 debug APK. Queue tests cover cancellation,
restart reconciliation, preparation races and advancing after completion or error.
The active native transfer continues in the background; advancing the queue
requires JavaScript execution and reconciles when the app returns to the foreground.

### Chromecast, AirPlay and car integrations

Google Cast is opt-in. Install `react-native-google-cast@4.9.1` in the host app
and pass the SDK to the player, so apps without Cast do not load its native module:

```tsx
import * as GoogleCast from 'react-native-google-cast';

<Player source={source} cast={GoogleCast} airPlay />
```

Follow the [Cast host setup](https://react-native-google-cast.github.io/docs/getting-started/setup).
The Android example initializes Cast in `MainActivity`, declares the options
provider and pins `play-services-cast-framework` to 22.3.1. A receiver with
Google Cast and the phone must share the same network. The receiver fetches the
media URLs itself: private downloaded files and localhost assets are not castable.
The example's network MP4/HLS/DASH sources are the intended Cast samples.
`Secuencia para Chromecast` uses the public Flower clip as intro and ad followed
by Angel One HLS, so the receiver does not depend on Metro or bundled assets.
For HLS, declare the actual segment formats using `source.cast`, for example
`{ hlsSegmentFormat: 'FMP4', hlsVideoSegmentFormat: 'FMP4' }` for the Angel One
sample. Intro and ad media have their own optional `cast` settings; content
settings are not inherited by a different intro or ad. See Google's
[HLS format requirements](https://developers.google.com/cast/docs/media/streaming_protocols).
Disconnecting returns the latest confirmed position to the local player, paused.
Explicit intro/ad sequencing remains sender-managed: JavaScript must be running
to advance the sequence, and the default receiver does not enforce ad playback
against external controls. Production ad enforcement needs a custom receiver.
IMA tags, native DRM, custom headers and external text tracks are rejected by
this default-receiver integration rather than silently discarded.

#### Audio and downloaded media over Cast

Audio uses the same Cast bridge and transport controls as video. Enable it on
the persistent dock with `<AudioPlayerProvider cast={GoogleCast} airPlay>` and
provide `type: 'audio'`, a receiver-accessible URL and the correct `mimeType`.
The example now enables this provider and includes **Audio para Chromecast**
and **Audio con anuncio para Chromecast**, using MDN's public MP3 sample.
The bundled offline tones remain local samples. Automated tests cover audio
handoff, pause/play, seeking, disconnect position and audio pre-roll completion;
these new audio samples have not yet been verified on a physical receiver.
See Google's [supported audio formats](https://developers.google.com/cast/docs/media).

Downloaded audio and video are currently local-only. Cast cannot access a phone's
`file://` files or the private Media3 HLS/DASH cache. Choosing the original remote
URL could allow online casting, but would stream from the server again and would
not use the download; this switch is not implemented automatically.

Future investigation: serve a selected download from the phone over the local
network with session-scoped access, HTTP range requests, correct MIME/CORS and
native background lifetime. Adaptive downloads additionally need exported or
rewritten manifests and access to all cached segments; passing a cache URI is
insufficient. Stop access when the session ends and never expose arbitrary files.
This is not implemented. A local media server would still require a shared
network, and does not guarantee a Cast session can start without Internet:
receiver loading and device services must be tested separately.

#### Pending: custom Cast receiver, overlays and advertising

Deferred by the user on 2026-09-07. The custom receiver is not implemented or
registered yet; the current integration still uses Google's default receiver.

Build a hosted HTML/CSS/JavaScript Web Receiver using the Cast Application
Framework for both audio and video, including audio titles/artwork on TVs and
audio-only device capability checks.
It will own the TV interface (brand logo, loading image, titles,
overlays and playback controls) and the intro/ad/content sequence. Move ad
scheduling to the receiver so it can continue when the mobile app's JavaScript
is suspended. Support direct media ads and VAST/VMAP through the Ad Breaks API,
including pre-roll, mid-roll, post-roll, countdown and configured skip rules.
Synchronize receiver playback and ad status back to the mobile controller;
disable the sender's duplicate ad sequencing for this receiver.

Registration and release checklist:

- [ ] Host the receiver at an HTTPS URL accessible to Cast devices.
- [ ] Open the [Google Cast SDK Developer Console](https://cast.google.com/publish/)
  and select **Add New Application → Custom Receiver**. Enter its name and URL.
- [ ] Save the resulting **Application ID**. Configure it in the Android sender
  instead of the default receiver ID, and in the iOS sender when that host exists.
- [ ] Register the test Chromecast under **Devices → Add New Device** using its
  Cast serial number. Unpublished receivers are limited to registered test devices.
- [ ] Test overlays, loading image, intro/ad/content transitions, ad skipping and
  seeking rules, reconnects, sender background/suspension, and MP4/HLS/DASH.
  Include fMP4 HLS and several device generations and screen resolutions.
- [ ] Publish the receiver in the Cast console and release the mobile app with
  its Application ID. Publishing only the mobile app does not publish the receiver.

After publication, compatible Cast devices launched from our app using that
Application ID load the same hosted receiver. End users do not register their
devices. Branding and overlay logic are shared, with layout adapted to the
screen; codec support, maximum resolution and performance still vary by device.
This does not change the interface used by other apps casting to the same TV.

References: [receiver choices](https://developers.google.com/cast/docs/web_receiver),
[registration and publication](https://developers.google.com/cast/docs/registration),
[ad breaks](https://developers.google.com/cast/docs/web_receiver/ad_breaks).

#### Apple and car integrations

AirPlay is an iOS route provided by AVPlayer. The `airPlay` prop opts into external
playback; select a route using the iOS system controls or native fullscreen player.
An iOS host needs audio background mode for playback while backgrounded. This
repository's example currently has no iOS target, so Apple playback has not been
compiled or device-tested here.

CarPlay and Android Auto are separate app integrations, not video output buttons.
For a car audio app, expose a browsable audio catalog and playback controls through
the platform's media session and car templates. CarPlay requires an iOS app,
Apple's [audio entitlement](https://developer.apple.com/documentation/carplay/requesting-carplay-entitlements),
and macOS/Xcode for the [CarPlay simulator](https://developer.apple.com/documentation/carplay/using-the-carplay-simulator).
It is not implemented by enabling AirPlay.

Android Auto uses [Desktop Head Unit](https://developer.android.com/training/cars/testing/dhu)
with a connected Android phone. This Windows SDK already contains
`extras/google/auto/desktop-head-unit.exe`, and the connected V2440 has Android
Auto installed. The player does not yet expose an Android Auto media browser.

#### Cast verification (2026-09-07)

On the V2440 / Android 16, the native picker discovered and connected to
`Chromecast TV`. Receiver status confirmed DASH playback and increasing position;
the network demo then completed its MP4 intro and MP4 ad and started HLS content.
Both receiver and controller reported a paused position of 19.127 seconds, then
29.127 after seeking forward ten seconds. Verification used native receiver
status; no screenshot of the television itself was captured.

Device testing exposed two interoperability requirements now covered by tests:
declare `streamType: 'buffered'` for VOD and configure fMP4 HLS segment formats.
A pending volume request no longer blocks transport or the next load. Temporary
diagnostic code was removed after verification.

Validation: 79 player/Cast/download tests, native/example type-check and lint,
native package build and Android arm64 debug APK. Device interaction stopped
when the phone entered a call; disconnect handoff remains unit-tested, without
a final visual device check in this pass. AirPlay and CarPlay have no iOS build
or device validation in this repository yet.
