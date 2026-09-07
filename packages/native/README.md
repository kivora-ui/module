# @kivora/native

**React Native components with the same visual language as Kivora for Next.js.**

Forms, tables, calendars, panels, and carousels in TypeScript, with neutral themes, dark mode, gestures, and animations. The documented setup uses React Native Community CLI, **without Expo**.

Building a website too? Use **[@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs)**. Both packages share **[@kivora/theme](https://www.npmjs.com/package/@kivora/theme)**; you do not need to install the web package in your native application.

## Installation

### Using the installer

From your application directory:

```sh
npx @kivora/init
```

The [@kivora/init](https://www.npmjs.com/package/@kivora/init) setup supports React Native Community CLI 0.85.3-0.85.x with NativeWind 4. Use `npx @kivora/init --dry-run` to review its changes. Other combinations require a compatibility review and manual configuration.

### Manual installation

This setup uses React Native 0.85.3, React 19.2.3, NativeWind 4.2.6, and Reanimated 4.3.0 with the New Architecture. Add any missing dependencies to your application; review existing versions before changing them.

```sh
npm install @kivora/native nativewind@4.2.6
npm install react-native-gesture-handler@^2.30.0 react-native-safe-area-context@^5 react-native-svg@^15
npm install react-native-reanimated@4.3.0 react-native-worklets@0.8.3
npm install react-native-keyboard-controller@^1.22.0
npm install @notifee/react-native@^9.1.8
npm install -D tailwindcss@3.4.19
```

The package already depends on Gorhom Bottom Sheet, Reanimated Carousel, and `@kivora/theme`. If you import Theme directly, also add it to your application's dependencies. Native dependencies require rebuilding the application; reloading Metro is not enough.

## Compatibility

The package's peer ranges allow React 18+, React Native 0.74+, NativeWind 4.2.6 or 5 preview, and Reanimated 3.16+. This does not mean every combination is compatible. The setup below uses NativeWind 4 and Reanimated 4; do not mix it with NativeWind 5 or Reanimated 3 configuration.

The reference integration has been validated on Android without Expo; iOS has not been validated. The reference environment applies a patch to `react-native-css-interop@0.2.6` to fix Expo detection. That patch is not automatically distributed with this package; whether external installations need it remains to be verified.

## NativeWind 4 setup

### 1. Babel

**`babel.config.js`**

```js
module.exports = {
  presets: [
    ['module:@react-native/babel-preset', { jsxImportSource: 'nativewind' }],
    'nativewind/babel',
  ],
  plugins: ['react-native-worklets/plugin'],
};
```

Keep the Worklets plugin last. This configuration is for Reanimated 4; applications using Reanimated 3 use its own plugin and must choose versions compatible with their React Native version.

The Babel, Metro, and Tailwind examples use CommonJS. If your `package.json` declares `"type": "module"`, use the `.cjs` extension for these files. Preserve your application's existing options and plugins.

### 2. Metro

**`metro.config.js`**

```js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {});
module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
```

### 3. Tailwind and semantic colors

**`tailwind.config.js`**

```js
const colors = [
  'background', 'foreground', 'card', 'card-foreground',
  'popover', 'popover-foreground', 'primary', 'primary-foreground',
  'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
  'accent', 'accent-foreground', 'destructive', 'destructive-foreground',
  'border', 'input', 'ring',
];

module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@kivora/native/src/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: Object.fromEntries(colors.map(name => [
        name, `rgb(var(--${name}) / <alpha-value>)`,
      ])),
    },
  },
  plugins: [],
};
```

Include Kivora's source code in `content`: the package ships it so Metro and NativeWind can process it. In a monorepo, adjust the path to the package's location.

**`global.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**`nativewind-env.d.ts`**

```ts
/// <reference types="nativewind/types" />
```

### 4. Provider and working example

The provider resolves the color mode. NativeWind variables define the colors rendered by components: apply both at the root.

**`App.tsx`**

```tsx
import './global.css';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Button, KivoraProvider } from '@kivora/native';

function themeVariables(dark: boolean) {
  const foreground = dark ? '245 245 245' : '24 24 24';
  const card = dark ? '30 30 30' : '255 255 255';
  const secondary = dark ? '43 43 43' : '235 235 233';
  const border = dark ? '62 62 62' : '216 216 214';

  return vars({
    '--background': dark ? '20 20 20' : '247 247 245',
    '--foreground': foreground,
    '--card': card,
    '--card-foreground': foreground,
    '--popover': card,
    '--popover-foreground': foreground,
    '--primary': dark ? '237 237 237' : '30 30 30',
    '--primary-foreground': dark ? '24 24 24' : '255 255 255',
    '--secondary': secondary,
    '--secondary-foreground': foreground,
    '--muted': secondary,
    '--muted-foreground': dark ? '170 170 170' : '100 100 100',
    '--accent': secondary,
    '--accent-foreground': foreground,
    '--destructive': dark ? '248 113 113' : '185 28 28',
    '--destructive-foreground': '255 255 255',
    '--border': border,
    '--input': border,
    '--ring': dark ? '170 170 170' : '100 100 100',
  });
}

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <KivoraProvider colorMode={dark ? 'dark' : 'light'}>
            <View style={themeVariables(dark)} className="flex-1 bg-background">
              <SafeAreaView style={{ flex: 1 }}>
                <View className="gap-4 p-6">
                  <Text className="text-xl font-semibold text-foreground">
                    My application
                  </Text>
                  <Button onPress={() => setDark(value => !value)}>
                    <Text className="text-primary-foreground">
                      {dark ? 'Switch to light mode' : 'Switch to dark mode'}
                    </Text>
                  </Button>
                </View>
              </SafeAreaView>
            </View>
          </KivoraProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

In React Native, place text inside `Text`. `themeOverrides` changes the Kivora context object; it does not replace the variables applied through `vars`.

Restart Metro with a cleared cache after configuring Babel, Metro, and Tailwind, then run your project's Android command to rebuild the binary.

## QR codes and barcodes

```tsx
import { QRCode, Barcode } from '@kivora/native';

<QRCode value="https://example.com" size={200} />
<Barcode value="5901234123457" format="ean13" width={280} displayValue />
<Barcode value="KIVORA-12345" format="datamatrix" width={180} />
```

Generation is local. Both components support `foreground` and `background` as opaque `#RRGGBB` colors, `margin`, `displayValue`, `fallback`, and `onError`. QRCode accepts `size` and `errorCorrectionLevel` (`L`, `M`, `Q`, `H`; default `M`). Barcode accepts `width`, optional `height`, and `format` (default `code128`). Without a height, the intrinsic aspect ratio determines it.

Available formats: `qrcode`, `code128`, `code39`, `ean13`, `ean8`, `upca`, `interleaved2of5`, `datamatrix`, `pdf417`, and `azteccode`. EAN/UPC values must include the correct check digit. Use strings to preserve leading zeroes. Invalid input renders an error or your `fallback`, calls `onError` if supplied, and removes the previous code.

Colors default to black on white independently of the theme. Preserve the quiet zone and use a large enough size for scanning. `generateCode` and `barcodeFormats` are also exported for SVG generation outside React. No camera or scanning feature is included. See [@kivora/codes](https://www.npmjs.com/package/@kivora/codes) for format rules and limits.

Rendering uses `react-native-svg`, already a peer dependency of this package. Dimensions use native layout units.

## Included components

- **Forms:** Input, Select, Checkbox, Switch, RadioGroup, Slider, Calendar, and DatePicker.
- **Presentation:** Card, Badge, Avatar, Attachment, Typography, and loading states.
- **Interaction:** Accordion, Tabs, Dialog, Sheet, BottomSheet, and Carousel.
- **Data:** Table, pagination, and controls for composing search, filtering, sorting, and selection.

The TypeScript declarations included in the package describe component props. FlashList is not required to install this library.

Bottom sheets use Gorhom v5. The carousel uses Reanimated Carousel, with touch navigation, arrows, indicators, autoplay, looping, and vertical orientation. Components adapt their animations to native interaction; see the TypeScript props for available options.

## Carousel, calendar, code, and notifications

### BottomSheet animation

`BottomSheet` opens in 320 ms and closes in 380 ms by default, using `Easing.out(Easing.cubic)` to slow down gradually as it reaches its destination. Set `animationDuration` for opening and `closingAnimationDuration` for closing (milliseconds, minimum 1). Closing defaults to the opening duration plus 60 ms. `animationEasing` controls the curve for both:

```tsx
import { Easing } from 'react-native-reanimated';
import { BottomSheet } from '@kivora/native';

<BottomSheet
  open={open}
  onOpenChange={setOpen}
  animationDuration={420}
  closingAnimationDuration={480}
  animationEasing={Easing.inOut(Easing.cubic)}
>
  {children}
</BottomSheet>
```

Keep the component mounted and control visibility through `open` so its exit animation can finish. These settings also apply when dismissing through the backdrop or Android Back and when the sheet settles after a drag; the drag itself follows the user's finger. The system's reduced-motion preference is respected.

### Component behavior

`PopoverContent` floats next to `PopoverTrigger` (or an explicit `PopoverAnchor`) without changing the page height. It shares the web version's default width of 288, gap of 8, border, radius, and 160 ms animation. Supports `side="top|bottom|left|right"`, `align="start|center|end"`, `sideOffset`, `alignOffset`, `collisionPadding`, and `avoidCollisions`. Trigger, Anchor, and Close support `asChild` with a child that forwards its native ref. It closes on outside taps, Android Back, or PopoverClose; `onInteractOutside` can prevent closing through `preventDefault()`. The panel is constrained to the available space, with internal scrolling for forms and the keyboard. It renders in a transparent native Modal, so outside gestures close the panel before interacting with the underlying screen.

`<Carousel settings={{ slidesToShow: 1.25 }}>` displays one full card and part of the next. It accepts other fractional values and works with looping, arrows, and gestures. Without looping, the final position aligns with the end of the content.

In `Calendar` and day/range `DatePicker` views, tap the header to open month selection, then the year to open a page of 12 years. Choosing a year returns to months; choosing a month returns to days. Confirm the selection by choosing a day and applying it. Navigation respects `minDate` and `maxDate`.

`Code` highlights JSON, JavaScript, TypeScript, JSX/TSX, HTML, CSS, Python, Bash, and SQL using Prism tokens rendered as native `Text`. It preserves lines and spacing, supports light/dark/system themes, and displays unknown languages as plain text.

`toast`, `toast.success`, and `toast.error` display **local system notifications**. They return `Promise<string | undefined>`: use the ID with `await toast.dismiss(id)`; `undefined` means permission was denied. Delivery errors propagate to the caller. No server or Firebase is required. Configure `toast.configure({ smallIcon: 'ic_notification', channelName: 'My app' })` or mount the optional `<Toaster smallIcon="ic_notification" />` helper. The icon must exist as an Android resource. Declare `android.permission.POST_NOTIFICATIONS` in the manifest and rebuild; install pods on iOS.

Permission is requested when the first notification is sent, not when `Toaster` mounts. Users can disable notifications through system settings. By default, notifications stay in the tray until dismissed; `duration` only controls removal timing on Android. The previous callback-based action and visual positioning API has been removed: use `data` to identify application actions and Notifee events to handle notification opens. Command, ContextMenu, and NavigationMenu are available only in the web package.

For forms, wrap the application in `KeyboardProvider` and use `KeyboardAwareScrollView`, both from `react-native-keyboard-controller`. In FlashList, use `renderScrollComponent` with a forwarded ref. Reducing height with `KeyboardAvoidingView` alone does not guarantee that the focused field stays visible. BottomSheet, Dialog, and Sheet modals integrate their own keyboard-aware scrolling.

Checkbox and Radio indicators are 24 units tall, matching Switch. Tabs fill their container and divide the available width between triggers. Collapsible triggers include a rotating indicator; set `showIndicator={false}` to supply your own. Accordion uses a 320 ms eased transition and respects reduced motion.

HoverCard is no longer exported by the native package. Use Popover or Tooltip for contextual information on touch screens.

For an inline tooltip, nest a `Text` trigger inside the sentence and use `asChild`. This preserves normal text wrapping with no button height or padding. Anchor the popover to the outer paragraph so positioning does not depend on measuring a nested text span:

```tsx
<Tooltip>
  <PopoverAnchor asChild>
    <Text>
      Configure the{' '}
      <TooltipTrigger asChild>
        <Text className="rounded-sm bg-primary/10 px-0.5 font-semibold text-primary underline">minimum stock</Text>
      </TooltipTrigger>
      {' '}to receive replenishment alerts.
    </Text>
  </PopoverAnchor>
  <TooltipContent>The threshold for replenishment alerts.</TooltipContent>
</Tooltip>
```

## Web compatibility

Shares names, composition patterns, and design with [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs), with platform-specific differences:

| Area | React Native |
| --- | --- |
| Mobile filter menus | Bottom sheet with gestures |
| Table | Composable primitives; not the web package's TanStack DataTable |
| Carousel | Shared options and navigation API; does not replicate every react-slick option |
| Chart | Simple native visualizations; does not reproduce the full Recharts API |
| DropdownMenu / Resizable / HoverCard | Web package only |
| BottomSheet | Native package only |

## Other Kivora packages

| Package | Purpose |
| --- | --- |
| [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) | Next.js components and responsive web UI |
| [@kivora/theme](https://www.npmjs.com/package/@kivora/theme) | Shared themes, types, breakpoints, and utilities |
| [@kivora/init](https://www.npmjs.com/package/@kivora/init) | Assisted installation and configuration |

## File uploads

`FileUpload` starts uploads automatically and hides the inline file list by default. Use `createBackgroundUploadController` on Android for local system notifications with progress, cancellation and completion or failure alerts. Set `showStatus` to `true` to opt in to the inline list, including when using a foreground-only controller. Create an `UploadController` with your Tus endpoint and pass it as `controller`. On Native, also provide `pickFiles: () => Promise<UploadFile[]>` using your document or media picker. The example app includes a document picker adapter. Keep the controller alive for the upload session and call `dispose()` when it ends. The default JavaScript transport is foreground-only. The Android background controller described below persists its jobs. See [@kivora/upload](https://www.npmjs.com/package/@kivora/upload) for the controller contract.

With `showStatus={true}`, FileUpload shows local image thumbnails and file-type icons for PDF, documents, spreadsheets, archives, audio, video and other files. Unsupported or unreadable images fall back to an image icon. Previews do not upload file contents; browser object URLs are released when the preview unmounts.

Uploads now start automatically. File names use one line with ellipsis; status and formatted size appear underneath. Use `createBackgroundUploadController` for persistent Android uploads and system completion notifications. Rebuild the native app after installation. iOS background transfers are not implemented.

### Advanced file sources

Set `variant="advanced"` to open a BottomSheet when the user presses Choose files. The sheet includes the default `pickFiles` source and any configured `sources: FileUploadSource[]`. Each source has a stable `id`, a `label`, an optional React `icon`, and `pickFiles(): Promise<UploadFile[]>`. Return an empty array on cancellation, or reject to display an error. Selection starts uploading automatically; the inline status list remains hidden by default.

```tsx
<FileUpload
  controller={controller}
  variant="advanced"
  pickFiles={pickDocuments}
  sources={[
    { id: 'camera', label: 'Camera', pickFiles: takePhoto },
    { id: 'photos', label: 'Photos and videos', pickFiles: pickMedia },
    { id: 'drive', label: 'Company drive', pickFiles: pickCompanyFiles },
  ]}
/>
```

The application supplies the adapters and their permission handling. The Android example uses `react-native-image-picker` for camera/gallery and the system document picker for files (including installed document providers). Camera/gallery adapters return local file URIs. Remote adapters must obtain authorized local files before submitting them to the background controller. No cloud credentials or OAuth flows are bundled. The example's persistent upload transport is Android-only; iOS camera integrations also require the relevant Info.plist usage descriptions and a pod installation.

### Source screens and localisation

The advanced BottomSheet navigates from source tiles to a dedicated source screen, with a back action. A source may provide `render({ addFiles, close, messages })` to embed a custom provider screen, or `pickFiles()` to open a system picker. The latter closes the sheet before launching the picker.

Use `locale="es"` or `locale="en"` (default), and `messages: Partial<UploadMessages>` for overrides or additional languages. Translate custom provider labels, descriptions and screens in the application. The Android background notification uses native string resources (English and Spanish) according to the system locale, independently of the component locale. Applications can provide translated `kivora_upload_*` Android resources for more languages.
