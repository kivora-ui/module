# Changelog

## Pending — Native and Init 0.2.1

- Fix Native's npm manifest: replace unresolved internal workspace protocols with published 0.1.0 versions.
- Build, inspect and hash release tarballs; reject unresolved protocols, missing exports/resources and accidental development files. Publish the inspected tarball rather than the source directory.
- Add the RN 0.87.1 recipe with NativeWind 4.2.6, Tailwind 3.4.19, Reanimated 4.6.0 and Worklets 0.12.2; retain the separate RN 0.85 recipe.
- Install all dependencies reachable through Native's root entry. Background Downloader is required by Metro; Google Cast remains an injected optional SDK.
- Remove obsolete animation type casts incompatible with Reanimated 4.6.
- Preserve existing providers/configuration, save new recipe dependencies exactly, support TypeScript 6 CSS imports and keep dry-run read-only.
- Document external npm installation and platform validation limits. Native/Init 0.2.1 have not been published by this change.

## 0.2.1 — 2026-09-09

Package: `@kivora/nextjs`.

- Keep FileUpload transport failures inside the advanced dashboard with readable, localized alerts and retry/remove actions.
- Stop rendering Tus response bodies, HTML and technical details in file cards and Uppy informer tooltips.
- Avoid sending handled upload failures to the framework development error overlay.
- Add regression coverage for error presentation and recovery.

## 0.2.0 — 2026-09-09

Released packages: `@kivora/nextjs`, `@kivora/native`, and `@kivora/init`.

- Consolidate asynchronous and creatable selection into `Select` with `loadOptions` and `isCreatable` on web.
- Replace `DropdownMenu` and `Menubar` with `Menu`, including `variant="bar"`.
- Replace `VirtualScrollArea` with `ScrollArea virtualized`.
- Remove `Collapsible` in favor of `Accordion` and `QRCode` in favor of `Barcode format="qrcode"`.
- Add `Icon` for Lucide icons on web and React Native.
- Fix the positioning of `NavigationMenu` dropdowns.
- Ship compiled web styles: install only `@kivora/nextjs` and import `@kivora/nextjs/styles.css`. Tailwind and PostCSS are no longer consumer requirements. Projects using Tailwind 4 can opt into `@kivora/nextjs/tailwind.css`.
- Update the initializer for compiled styles and reject older installed Kivora versions that lack them.
- Limit Android package contents to build configuration and source files.

These API removals require migration; see [the component migration guide](docs/component-consolidation.md).
