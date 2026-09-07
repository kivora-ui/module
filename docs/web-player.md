# Web Player

`@kivora/nextjs` exports `Player`, `PlayerController`, `usePlayer`,
`AudioPlayerProvider` and `useAudioPlayer`. Shaka Player is loaded on the client
when a player mounts. The controller can be constructed during server rendering;
media, DRM sessions and network activity start only after connection.

## Basic playback

Import `@kivora/nextjs/styles.css` once in the application stylesheet or layout,
alongside the usual Kivora theme setup. Keep source objects stable: changing the
source object deliberately reloads playback.

```tsx
'use client';
import { Player, type PlayerSource } from '@kivora/nextjs';

const source: PlayerSource = {
  id: 'episode-1',
  title: 'Episode 1',
  src: 'https://media.example.com/episode/manifest.mpd',
  mimeType: 'application/dash+xml',
  poster: '/episode-cover.jpg',
  textTracks: [
    { src: '/captions/en.vtt', language: 'en', label: 'English', default: true },
    { src: '/captions/es.vtt', language: 'es', label: 'Español' },
  ],
};

export function Episode() {
  return <Player source={source} locale="en" />;
}
```

The controls include seeking, live-edge seeking, pause, volume, speed, automatic
or manual quality, audio tracks, captions, fullscreen and picture-in-picture.
Track choices come from the manifest. External text defaults to WebVTT; specify
`mimeType` for other formats supported by the installed Shaka parsers. Playback
speed and seeking are restricted during linear advertising. Browser autoplay
policy still applies; an `autoplay-blocked` event allows the application to react.

| Media | Behavior and requirements |
| --- | --- |
| MP4, MP3 and other progressive media | Browser-supported containers and codecs; supply `mimeType` when the URL has no useful extension. |
| HLS and MPEG-DASH | Adaptive playback, VOD and live/DVR through Shaka and the browser media stack. |
| Encrypted HLS/DASH | Compatible DRM system, HTTPS, correctly packaged content and an authorized license service. |
| Audio and text tracks | Manifest tracks plus optional external captions; available formats depend on the engine/browser. |
| Local files | Pass an application-owned `URL.createObjectURL(file)` and revoke it after disconnecting/replacing that source. |

This is not a universal codec converter. Unsupported formats require server-side
transcoding/packaging or an appropriate engine plugin. All cross-origin media,
manifests, segments, captions, ads and licenses need compatible CORS responses.

## Control layouts, episode overlays and thumbnails

Video defaults to `controlsVariant="compact"`, with controls over the picture.
Use `"cinema"` for a title header, central transport and white seek bar, or
`"series"` for current-program information and an episode rail. `"standard"`
keeps the controls below the picture. Audio always uses the standard layout.
Changing the layout does not replace the controller, reload media or reset time.
Controls, custom overlays and the video cursor fade out after three seconds of
inactivity, including when paused or the episode queue is open. Entering the player,
moving the pointer, tapping or using the keyboard reveals them again. Controls stay
visible during ads, while settings/download panels are open, during a drag or while
using keyboard controls. Audio and the standard layout do not auto-hide.

```tsx
<Player
  source={{ ...source, thumbnails: { src: '/thumbnails/episode.vtt' } }}
  controlsVariant="series"
  program={{
    title: 'The journey', subtitle: 'Episode 1: The encounter',
    metadata: 'Season 1 · Adventure · HD', badge: 'Season 1',
    description: 'An unexpected encounter changes everything.',
  }}
  queue={[
    { id: 'episode-1', title: '01. The encounter', image: '/episode-1.jpg', progress: 0.3 },
    { id: 'episode-2', title: '02. The journey', image: '/episode-2.jpg' },
  ]}
  activeQueueId={selectedEpisodeId}
  onQueueSelect={episode => selectEpisode(episode.id)}
/>
```

`selectedEpisodeId` and `selectEpisode` are application state/logic. Queue items
are controlled presentation data; selection calls the application to change the
source. The library does not invent schedules or automatically advance episodes.
The web lab explicitly uses fictional episode descriptions and positions within
the same sample video. Labels are translated with `locale`/`messages`; program
and episode content is supplied by the application. Custom `overlays` continue
to render independently of the chosen control layout.

Seek previews read manifest image tracks automatically, or an external WebVTT
track configured as `source.thumbnails`. They work with individual images or
sprites using `#xywh=x,y,width,height`. Image URLs resolve relative to the VTT.

```vtt
WEBVTT

00:00:00.000 --> 00:00:10.000
sprite.jpg#xywh=0,0,160,90

00:00:10.000 --> 00:00:20.000
sprite.jpg#xywh=160,0,160,90
```

Previews appear on hover, during touch scrubbing and keyboard seeking. Requests
are debounced and stale results are discarded after a source change. Missing
images fall back to the timestamp; optional thumbnail failures do not stop video.
Ad and splash phases disable content previews. Live previews use image tracks
from the live manifest; external VTT tracks are for finite presentations.
DRM streams need separately published thumbnails; the player does not extract
protected video frames. External thumbnails are not included in offline downloads.

The demo includes small Sintel stills with attribution under CC BY 3.0. Regenerate
them using `node scripts/create-player-thumbnails.mjs` while the demo is running.
Local synthetic fixtures also include a sprite track. Run
`node scripts/check-player-overlays.mjs` to check the three layouts and previews.

## DRM and authenticated requests

```tsx
const protectedSource: PlayerSource = {
  id: 'protected-episode',
  title: 'Protected episode',
  src: 'https://media.example.com/protected/manifest.mpd',
  drm: {
    servers: {
      'com.widevine.alpha': 'https://license.example.com/widevine',
      'com.microsoft.playready': 'https://license.example.com/playready',
    },
  },
  requestFilter: async (type, request) => {
    // Shaka RequestType.LICENSE is 2. Request short-lived application tokens.
    if (type === 2) request.headers.Authorization = `Bearer ${await getLicenseToken()}`;
  },
};
```

`getLicenseToken` above is supplied by the application. Use `responseFilter` for
license response wrapping when required by the license vendor. Source filters
are removed before another source is loaded, so credentials are not inherited by
the next stream. Plugins that install their own filters own their cleanup.

FairPlay uses `com.apple.fps`, a server certificate (`drm.advanced`), and sometimes
vendor-specific init-data/license transformations. Pass these through the typed
DRM settings and networking filters. A license URL alone is not a complete
FairPlay integration. See the official [DRM configuration](https://shaka-project.github.io/shaka-player/docs/api/tutorial-drm-config.html)
and [FairPlay setup](https://shaka-project.github.io/shaka-player/docs/api/tutorial-fairplay.html).

Clear Key is available for development. The demo uses a generated, encrypted
DASH fixture with public test keys. It does not contain commercial content or
production secrets. Widevine, PlayReady and FairPlay must be validated against
the application's actual packaging, licenses and target browsers/devices.

## Downloads

Enable `offline: { enabled: true, persistentLicense: true, maxHeight: 720 }` on a
VOD HLS/DASH source. The UI exposes progress, cancellation, a stored-content list,
playback and removal. Storage is separate from the active playback engine so
choosing download tracks does not change the playing quality. It selects one
compatible variant up to `maxHeight` and includes text tracks. It does not
download every audio language or quality. External text tracks are passed to
Shaka storage as well.

DRM downloads use persistent licenses by default and require both browser/CDM
support and license-server permission. Expired licenses disable playback in the
download list. `persistentLicense: false` stores media without requiring a
persistent license; subsequent playback can still require the license server.
Removing a stored item delegates media/license cleanup to Shaka. See
[Shaka offline storage](https://shaka-project.github.io/shaka-player/docs/api/tutorial-offline.html).

Stored media stays in browser storage, subject to quota, eviction and origin.
The application must cache its own app shell to launch while offline. An active
download does not continue reliably after closing the tab/browser. This component
does not install a service worker or implement OS background transfer. License
authentication on offline playback after a new session must be supplied again
when the license workflow needs network access.

For a clear progressive file, explicitly supply `downloadUrl` instead. That
renders a normal browser download link; browser download/header policy applies.
The link is suppressed for configured/detected DRM. Encrypted media is never
converted into an unprotected downloadable file by this API.

## Splash, advertising and overlays

```tsx
const sourceWithAds: PlayerSource = {
  ...source,
  splash: { src: '/intro.mp4', poster: '/intro.jpg', maxDuration: 15 },
  ads: {
    breaks: [
      { id: 'pre', src: '/ad.mp4', at: 'pre', skipAfter: 5 },
      { id: 'mid', src: '/ad.mp4', at: 120 },
      { id: 'post', src: '/ad.mp4', at: 'post' },
    ],
    // Alternatively supply tagUrl for a VAST/VMAP response.
    onError: 'continue',
  },
};
```

The splash video plays before loading the main stream. Its poster can differ
from the main `poster`; timeout or an intro error proceeds to the content.
Configured ad requests start only after playback is requested. `autoPlay` also
counts as an application request; applications must gate it on their consent
workflow when applicable. Ad failures continue by default; `onError: 'stop'`
shows a playback error. Shaka manages ad media, scheduled breaks, skipping rules
and return to content. The default VAST/VMAP path uses Shaka interstitials, not a
bundled Google IMA SDK. Vendor SDKs and SSAI-specific integrations belong in a
plugin; they require vendor-specific configuration and validation. See
[Shaka ad monetization](https://shaka-project.github.io/shaka-player/docs/api/tutorial-ad_monetization.html).

Overlays receive live state and the controller. Omit `phases` to render in all
phases, or target `idle`, `splash`, `loading`, `content`, `ad`, `ended`, `error`.
Place interactive controls inside the returned content. Root overlay children
receive pointer events; the surrounding overlay layer does not block playback.

```tsx
<Player source={sourceWithAds} overlays={[
  {
    id: 'brand', phases: ['content'],
    render: () => <span className="absolute right-4 top-4">My channel</span>,
  },
  {
    id: 'ad-message', phases: ['ad'],
    render: ({ state }) => <span className="absolute left-4 top-4">
      Advertisement · {Math.ceil(state.ad?.remaining ?? 0)}s
    </span>,
  },
]} />
```

## Plugins and analytics

```tsx
const [controller] = useState(() => new PlayerController({
  plugins: [
    {
      id: 'analytics-one',
      setup: ({ on, signal, engine }) => {
        const unsubscribe = on(event => analyticsOne.track(event));
        // engine.getStats() provides detailed engine statistics if needed.
        // Use signal to cancel asynchronous work on disconnection.
        return unsubscribe;
      },
    },
    { id: 'analytics-two', setup: ({ on }) => on(event => analyticsTwo.track(event)) },
  ],
}));
```

`analyticsOne` and `analyticsTwo` are application adapters. Plugin IDs must be
unique. Setup runs before media load and may be asynchronous. Return cleanup
functions and honor `signal` for SDK/network work. Controller event listeners
registered through the plugin context are automatically removed. Listener/setup
failures are isolated from playback; arbitrary plugin mutations of the engine
remain the plugin author's responsibility.

Options are fixed for a controller's lifetime. Use `configureEngine(library)`
for global Shaka parser/text-displayer registration before player creation.
Source configuration is reset on each load: use `source.configuration` for
per-stream engine options, rather than configuring them once in plugin setup.
A controller connects to one mounted Player at a time. `usePlayer(controller)`
subscribes to its snapshot; controller methods expose playback, seeking, track
selection, skipping, retries and downloads.

Events include `ready`, media playback events, `source-change`, ad events,
`error`, `plugin-error`, and download events. Standard event payloads exclude
license bodies, credentials and signed URLs. Analytics destinations and consent
are controlled by the host application; no analytics service is enabled by default.

## Persistent audio

Mount the provider inside a shared client layout that survives route navigation:

```tsx
<AudioPlayerProvider locale="en" presentation="footer">
  {children}
</AudioPlayerProvider>
```

```tsx
const audio = useAudioPlayer();
<button onClick={() => audio.play({
  id: 'podcast-1', title: 'Podcast', src: '/podcast.mp3', poster: '/cover.jpg',
})}>Listen</button>
```

The footer expands into a bottom sheet without replacing the playing media
element. `presentation="sheet"` opens the sheet initially. `audio.close()` pauses
and unmounts the player. Reserve page-bottom space for the fixed footer in the
application layout. Persistence covers client-side route changes, not a full
page reload or closing the browser.

## Languages and validation

Built-in controls support English and Spanish (including regional locale tags).
Pass `messages: Partial<PlayerMessages>` to override labels or supply another
language. Overlay content, source titles and track labels are application-owned.

The demo is at `/player` in `example/web` and opens with the public Sintel DASH
sample. Its video selector also includes Angel One HLS, Flower MP4,
Angel One Widevine and Tears of Steel Widevine/PlayReady, with attribution links
to the official Shaka/Axinom and MDN samples. Real streams retain their manifest
captions/audio; synthetic captions are added only to the local fixtures. Public
sample license URLs are preconfigured for the corresponding test assets.
Availability depends on the publishers and the browser's installed DRM module;
these are integration samples, not production media or license services.

Run `node scripts/check-player-public.mjs` for an opt-in network playback check
using installed Chrome (`KIVORA_BROWSER=msedge` selects Edge). Unsupported DRM
systems are reported as skipped, not successful. This test requires no local
media fixtures when ads/intro are disabled.

On 2026-09-06, Sintel DASH, Angel One HLS and Flower MP4 played in the automated
browser checks. The Axinom Tears of Steel sample also acquired a license and
played with PlayReady in installed Edge. Widevine was unavailable in the
automated browser profiles, so its playback remains unverified. These checks do
not validate commercial persistent-license downloads or FairPlay.

Generate local, synthetic test media
with FFmpeg on PATH and Shaka Packager on PATH (or set `KIVORA_PACKAGER` to its
executable path):

```sh
node scripts/create-player-fixtures.mjs
pnpm --filter @kivora/nextjs build
pnpm --filter @kivora/example-web dev
# In another terminal, with the app listening on port 3000:
node scripts/check-player-web.mjs
node scripts/check-player-layout.mjs
```

Fixtures are ignored by Git. Packager can be obtained from the official
[Shaka Packager releases](https://github.com/shaka-project/shaka-packager/releases).
The browser smoke test covers clear MP4/HLS/DASH, real Clear Key decryption,
manual quality, external captions, clear and Clear Key encrypted offline
storage/playback with the network disabled, intro playback, VAST/local ads and
persistent audio navigation. Encrypted offline tests supply public Clear Key
test keys again at playback; they do not validate a commercial persistent license.
The layout test covers 320/375 px controls, settings, ad skipping, mid-roll
interruption, error recovery and dark theme rendering.
Controller unit tests cover lifecycle cleanup, plugin failures, source isolation,
ad initialization and error handling. Commercial DRM, persistent commercial
licenses, live delivery, vendor ad integrations and Safari/Firefox/device matrices
need integration testing with the deployment's media services.
