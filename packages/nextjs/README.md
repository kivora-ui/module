# @kivora/nextjs

**Next.js components with the same visual language as Kivora for React Native.**

A TypeScript library with neutral themes, light/dark modes, and responsive components for desktop, tablet, and mobile. Includes forms, navigation, tables, filters, calendars, carousels, and panels.

Building a native app too? Use **[@kivora/native](https://www.npmjs.com/package/@kivora/native)**. Both packages share **[@kivora/theme](https://www.npmjs.com/package/@kivora/theme)** without requiring you to install both renderers.

## Installation

### Using the installer

From your Next.js application directory:

```sh
npx @kivora/init
```

The installer sets up dependencies, styles, and the provider. Use `npx @kivora/init --dry-run` to review changes before applying them. See the [@kivora/init options and supported versions](https://www.npmjs.com/package/@kivora/init).

### Manual installation

In a Next.js project with React and React DOM 18 or later:

```sh
npm install @kivora/nextjs
```

`styles.css` ships compiled CSS, so Tailwind and PostCSS are not required in your application. `@kivora/theme` is installed as a dependency. If you import it directly, also add it to your application's dependencies.

## App Router setup

These examples assume an `app/` directory at the project root.

Import the compiled stylesheet once from your root layout (or from `pages/_app` for Pages Router):

```tsx
import '@kivora/nextjs/styles.css';
```

Alternatively, import it in `app/globals.css`:

```css
@import "@kivora/nextjs/styles.css";
```

The stylesheet includes the library's utility classes, theme tokens, base reset, and component styles. Fonts and images used by these styles are embedded. No `@source` or PostCSS configuration is needed.

### Projects that already use Tailwind

To generate your application's own utility classes, keep your existing Tailwind 4.1+ setup and use this entry **instead of** `styles.css`:

```css
@import "@kivora/nextjs/tailwind.css";
```

This optional source entry includes Tailwind, Kivora tokens and library class detection. Your own Tailwind setup compiles it. The compiled `styles.css` entry does not generate arbitrary classes passed through `className`; use regular CSS or inline styles for custom styling without Tailwind.

**`next.config.ts`**

```ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: ['@kivora/nextjs', '@kivora/theme'],
};

export default config;
```

**`app/providers.tsx`**

```tsx
'use client';

import type { ReactNode } from 'react';
import { KivoraProvider } from '@kivora/nextjs';

export default function Providers({ children }: { children: ReactNode }) {
  return <KivoraProvider colorMode="system">{children}</KivoraProvider>;
}
```

**`app/layout.tsx`**

```tsx
import type { ReactNode } from 'react';
import Providers from './providers';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

**`app/page.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@kivora/nextjs';

export default function Page() {
  const [saved, setSaved] = useState(false);
  return (
    <main style={{ padding: 24 }}>
      <Button onClick={() => setSaved(true)}>
        {saved ? 'Changes saved' : 'Save changes'}
      </Button>
    </main>
  );
}
```

The layout can remain a Server Component. Components that manage state or events must be inside a `'use client'` boundary.

## Pages Router setup

Use the same `transpilePackages` configuration. No PostCSS setup is required. Save the CSS above in `styles/globals.css` and mount the provider in `pages/_app.tsx`:

```tsx
import type { AppProps } from 'next/app';
import { KivoraProvider } from '@kivora/nextjs';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KivoraProvider colorMode="system">
      <Component {...pageProps} />
    </KivoraProvider>
  );
}
```

The global CSS import belongs in `_app.tsx`. No source-path configuration is needed.

## QR codes and barcodes

```tsx
import { QRCode, Barcode } from '@kivora/nextjs';

<QRCode value="https://example.com" size={200} />
<Barcode value="5901234123457" format="ean13" width={280} displayValue />
<Barcode value="KIVORA-12345" format="datamatrix" width={180} />
```

Generation is local. Both components support `foreground` and `background` as opaque `#RRGGBB` colors, `margin`, `displayValue`, `fallback`, and `onError`. QRCode accepts `size` and `errorCorrectionLevel` (`L`, `M`, `Q`, `H`; default `M`). Barcode accepts `width`, optional `height`, and `format` (default `code128`). Without a height, the intrinsic aspect ratio determines it.

Available formats: `qrcode`, `code128`, `code39`, `ean13`, `ean8`, `upca`, `interleaved2of5`, `datamatrix`, `pdf417`, and `azteccode`. EAN/UPC values must include the correct check digit. Use strings to preserve leading zeroes. Invalid input renders an error or your `fallback`, calls `onError` if supplied, and removes the previous code.

Colors default to black on white independently of the theme. Preserve the quiet zone and use a large enough size for scanning. `generateCode` and `barcodeFormats` are also exported for SVG generation outside React. No camera or scanning feature is included. See [@kivora/codes](https://www.npmjs.com/package/@kivora/codes) for format rules and limits.

Use the components within a `'use client'` boundary. They render SVG data URLs, so sites with a Content Security Policy must allow `data:` in `img-src`.

## Components and interaction

- **Forms:** Input, Select, Checkbox, Switch, RadioGroup, Slider, InputOTP, Calendar, and DatePicker.
- **Data:** Table and DataTable with search, filtering, sorting, and selection; Chart and empty states.
- **Panels:** Dialog, Sheet, Drawer, Popover, Tooltip, and menus.
- **Presentation:** Card, Badge, Avatar, Attachment, Accordion, Tabs, Carousel, and Typography.

DataTable filters adapt to a bottom sheet on mobile. The TypeScript declarations included in the package describe the props for each export.

## Themes

`KivoraProvider` accepts `colorMode="light"`, `"dark"`, or `"system"`. The resolved mode toggles the document's `dark` class. Use semantic classes such as `bg-background`, `text-foreground`, `bg-primary`, and `border-border`.

To customize rendered colors, override the theme's CSS variables after the import:

```css
:root {
  --color-primary: oklch(0.3 0 0);
  --color-primary-foreground: oklch(0.98 0 0);
}

.dark {
  --color-primary: oklch(0.9 0 0);
  --color-primary-foreground: oklch(0.2 0 0);
}
```

`themeOverrides` modifies the object exposed by `useKivoraTheme`; it does not automatically generate new CSS variables. Keep both representations aligned if you also use that object.

## React Native compatibility

[@kivora/native](https://www.npmjs.com/package/@kivora/native) provides similar names and patterns, with mobile gestures and controls. DOM props, table engines, and react-slick-specific options are not interchangeable with React Native. DropdownMenu and Resizable belong to the web package; the native library adds BottomSheet.

## Other Kivora packages

| Package | Purpose |
| --- | --- |
| [@kivora/native](https://www.npmjs.com/package/@kivora/native) | Native UI for React Native applications |
| [@kivora/theme](https://www.npmjs.com/package/@kivora/theme) | Shared themes, types, and utilities |
| [@kivora/init](https://www.npmjs.com/package/@kivora/init) | Assisted installation and configuration |

## File uploads

Advanced mode always queues selected files for review, regardless of the controller's `autoStart` setting. Users can edit or remove files and use **Clear all** before choosing **Upload**. Removing completed files clears the local list only; it does not delete server files.

The advanced modal offers grid and list views, per-file previews and status, and a bottom toolbar for switching views and adding files. Upload progress and errors remain inside the modal. View labels support the upload locale and message overrides.

`FileUpload` has two presentations, both using a Tus endpoint. Simple mode uploads automatically by default; advanced mode requires an explicit **Upload** action:

- `variant="simple"` (default): device selection and drag/drop, with progress in Sonner toasts. Mount `Toaster`; optionally mount `FileUploadStatus` in the application shell and pass `showStatus={false}` to picker views.
- `variant="advanced"`: a styled Uppy Dashboard inside a Kivora modal. Selection, previews, progress, completion and errors stay inside the modal. It never emits upload toasts. Clicking the backdrop does not close it; the close button and Escape do. Closing releases local capture devices, while transfers and results survive reopening and client navigation when the same controller is reused.

Keep the controller for the upload session; call `await controller.dispose()` to cancel transfers and release both engines. Advanced mode uses its own Uppy state, not `controller.getSnapshot()`. It reads endpoint, headers, restrictions and onComplete from the controller when its dashboard session is first opened. Custom `createTask` transports remain simple-mode only. Browser restart/tab-close recovery is not provided.

```tsx
const [controller] = useState(() => new UploadController({
  endpoint: 'https://uploads.example.com/files',
  maxFiles: 10,
  maxFileSize: 50 * 1024 * 1024,
}));

<FileUpload controller={controller} variant="advanced" locale="es" />
```

### Dashboard sources

Device selection, webcam photos/video, audio recording, screen capture and image editing use actual Uppy plugins. `camera={false}`, `dashboard.audio={false}`, `dashboard.screenCapture={false}` and `dashboard.imageEditor={false}` disable the corresponding features. Capture requires HTTPS/localhost, browser support and user permission. Uploaded image edits should not be treated as server-side replacement; use a deliberate pre-upload editing workflow if final image processing is required.

Remote sources are enabled only when configured. Supply a stable `dashboard` configuration for each controller/session:

```tsx
const dashboard = {
  companion: {
    companionUrl: 'https://companion.example.com',
    sources: ['Box', 'Dropbox', 'Facebook', 'GoogleDrive', 'OneDrive', 'Unsplash', 'Url', 'Zoom'],
    webdav: true,
  },
  googleDrivePicker: {
    companionUrl: 'https://companion.example.com',
    clientId: 'public-client-id', apiKey: 'restricted-browser-api-key', appId: 'project-number',
  },
  googlePhotosPicker: {
    companionUrl: 'https://companion.example.com', clientId: 'public-client-id',
  },
  imageGenerator: {
    assemblyOptions: async (prompt) => {
      const response = await fetch('/api/image-generation/options', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt }),
      });
      if (!response.ok) throw new Error('Image generation is unavailable');
      return response.json(); // signed Transloadit { params, signature }
    },
  },
} satisfies UploadDashboardOptions;

<FileUpload controller={controller} variant="advanced" dashboard={dashboard} locale="es" />
```

Companion must be deployed/configured by the application, with provider OAuth credentials, authorised origins and the Tus upload destination. Enable Google's picker endpoint as required. OAuth secrets and Transloadit signing keys stay on the server. The AI source uses Transloadit's signed image-generation API. Installing this UI does not create cloud accounts, register OAuth apps or enable a paid generation service. See [Companion](https://uppy.io/docs/companion/), [Google Drive Picker](https://uppy.io/docs/google-drive-picker/) and [image generation](https://uppy.io/docs/ai-image/) for server prerequisites.

### Custom sources and languages

Existing `sources: FileUploadSource[]` adapters remain supported. Supply `pickFiles(): Promise<UploadFile[]>` or `render({ addFiles, close, messages })` for custom content. Web adapters return Blob data. `addFiles` adds files to the advanced dashboard and leaves feedback visible. The source context's `close` returns to the dashboard rather than closing the modal. The application translates custom labels and descriptions.

`locale="en"` and `locale="es"` localise the shell and built-in dashboard; regional Spanish tags use Spanish. `messages` overrides the Kivora shell/simple-mode dictionary. For another language, also pass an Uppy locale pack through `dashboard.uppyLocale`. Import `@kivora/nextjs/styles.css` for the styled dashboard and plugin screens. The advanced JavaScript is loaded lazily.

## Video and audio Player

`Player` provides Shaka-powered web playback with Kivora controls. It supports
progressive media, HLS/DASH, manifest audio/text tracks, external captions,
quality selection, DRM configuration, VAST/VMAP or scheduled ads, splash media,
custom overlays, offline VOD storage and multiple analytics plugins.

```tsx
'use client';
import { Player, type PlayerSource } from '@kivora/nextjs';

const source: PlayerSource = {
  id: 'episode-1', title: 'Episode 1',
  src: 'https://media.example.com/manifest.mpd',
  mimeType: 'application/dash+xml',
  poster: '/cover.jpg',
  textTracks: [{ src: '/captions.vtt', language: 'en', label: 'English' }],
};

export function Episode() {
  return <Player source={source} locale="en" />;
}
```

Import `@kivora/nextjs/styles.css` once and keep `source` stable between renders.
Shaka loads only after mounting in the browser. Playback depends on browser
codecs, CORS and DRM capabilities; the component does not transcode media.
Configure license servers through `source.drm`, authenticated requests through
`requestFilter`/`responseFilter`, and advanced engine options through
`source.configuration`. FairPlay also requires its certificate and vendor setup.

Set `offline: { enabled: true }` for HLS/DASH VOD downloads. DRM offline playback
requires a supported persistent license and server authorization. Downloads use
browser storage and do not continue reliably after closing the browser. A
separate explicit `downloadUrl` exports clear progressive files; protected media
is never exported as a decrypted file.

`ads.tagUrl` accepts VAST/VMAP. `ads.breaks` accepts media breaks scheduled at
`'pre'`, `'post'` or a time in seconds. Set `splash` for an intro video before
content loading. `overlays` render custom React content by playback phase.
Use a stable `PlayerController({ plugins })` for analytics/SDK integrations;
each plugin receives the engine, media, event subscription and cleanup signal.

Video controls default to the `compact` overlay. Choose `controlsVariant="cinema"`
for a cinematic layout or `"series"` for program details and an episode rail.
Provide `program`, `queue`, `activeQueueId` and `onQueueSelect` for your own
catalogue and navigation. Switching layouts preserves playback. `"standard"`
retains controls below the video. Controls hide on inactivity and remain
accessible through pointer and keyboard interaction.

Seek thumbnails use manifest image tracks or `source.thumbnails: { src: '/preview.vtt' }`.
The WebVTT can reference individual images or sprite regions (`#xywh=x,y,w,h`).
Hover, touch scrubbing and keyboard seeking display the frame and timestamp.
Publish separate image tracks for DRM content; protected frames are not captured.
Missing thumbnails fall back to the timestamp without interrupting playback.

For persistent audio, wrap the shared layout in `AudioPlayerProvider` and call
`useAudioPlayer().play(source)`. Audio stays in the footer across client-side
navigation and expands into a bottom sheet without restarting playback. Reserve
space below the page for the fixed footer. Built-in labels support `en`, `es`
and custom `messages` dictionaries.

See the repository's `docs/web-player.md` for the full integration guide and
`/player` in the web example for generated clear/encrypted media, ads, offline
playback, subtitles and audio demonstrations. Commercial DRM/license services
and ad SDKs require integration testing with your deployment.
