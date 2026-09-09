# @kivora/init

Install and configure Kivora in an existing application. Requires Node.js 20.19 or later, in addition to your framework's requirements.

```sh
npx @kivora/init
```

Run the command in the application directory containing its `package.json`. The installer adds [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) or [@kivora/native](https://www.npmjs.com/package/@kivora/native), depending on the platform.

## How it works

1. Reads the application's `package.json` and detects Next.js or React Native. If it finds both or neither, it asks you to choose `nextjs` or `native`. This selection does not install or migrate the framework.
2. Detects npm, pnpm, Yarn, or Bun from `packageManager` and lockfiles, including those in a parent workspace. Conflicting package managers are rejected.
3. Prepares a complete plan and checks versions, entry points, and configuration before writing files. Shows the files and commands, then asks for confirmation.
4. Creates backups, updates the files, and installs only missing dependencies. Preserves the declared versions of existing dependencies.

```sh
npx @kivora/init --dry-run
npx @kivora/init --cwd ./apps/web --framework nextjs --yes
npx @kivora/init --framework native --skip-install --yes
```

`--dry-run` shows the current and proposed content without writing files or installing packages. `--skip-install` writes the configuration and shows the remaining install commands. In CI, use `--yes` and also `--framework` if detection is ambiguous. `--package-manager npm|pnpm|yarn|bun` lets you choose a manager when none is defined; it does not replace an existing manager.

## Next.js

The setup requires Next.js 13+ and React/React DOM 18+. Tailwind and PostCSS are not required. It recognizes `app/layout`, `src/app/layout`, `pages/_app`, and `src/pages/_app` entry points in TSX, JSX, or JS. It can integrate both routers when they coexist.

- Installs only `@kivora/nextjs` if missing.
- Adds Kivora to `transpilePackages` while preserving other static options. Leaves existing Tailwind and PostCSS configuration unchanged.
- Generates `kivora-provider.tsx`/`.jsx` with a `use client` boundary, and `kivora.css` importing the compiled stylesheet.
- Mounts the provider inside `<body>` for App Router or around the component's output for Pages Router. Imports CSS from the entry point before its existing styles.

It does not install or migrate Tailwind. Configurations containing functions, spreads, or dynamic options are rejected with a message identifying the file to review. Kivora's classes and variables are global: check your application's appearance after integrating the styles.

## React Native

The setup uses React Native Community CLI and accepts these ranges:

| Dependency | Supported versions |
| --- | --- |
| React Native | `>=0.85.3 <0.86` |
| React | `>=19.2 <20` |
| NativeWind | `>=4.2.6 <5` |
| Reanimated | `>=4.3.0 <4.4` |
| Worklets | `>=0.8.3 <0.9` |
| Tailwind CSS | `>=3.4.17 <4` |

The application must have `@react-native/babel-preset` and `@react-native/metro-config` from the 0.85 series. The installer does not migrate Reanimated 3, NativeWind 5, or Expo projects. If an existing dependency declares a range extending beyond the supported limits, installation stops so you can review compatibility.

- Installs `@kivora/native`, NativeWind, Reanimated, Worklets, Gesture Handler, Safe Area Context, SVG, Keyboard Controller, Notifee, and Tailwind 3.4.19 if missing.
- Updates static Babel, Metro, and Tailwind configurations while preserving existing plugins, options, colors, and paths. Babel and Tailwind use CommonJS, with `.cjs` files for ESM projects.
- Reuses Metro's CSS file when an existing `withNativeWind` call has a literal `input`; otherwise, creates `kivora.css` next to `App`.
- Integrates `App` or `src/App` (TSX, JSX, or JS) with gesture, safe area, keyboard, and Kivora providers, plus semantic color variables and NativeWind types.
- Adds the Android `POST_NOTIFICATIONS` permission if the manifest exists and does not already declare it.

Afterward, install iOS pods using your project's workflow, restart Metro, and rebuild the application. Configure an existing Android icon for notifications. The CLI does not run native builds or modify Gradle, Podfile, or image resources. iOS has not been validated. See the [Native compatibility notes](https://www.npmjs.com/package/@kivora/native#compatibility).

## Preserving files and recovering changes

User files are parsed without executing their configurations. An incompatible configuration, an unrecognized entry point, or a generated file with different content cancels the entire plan before writing. Running the CLI again on its own configuration does not duplicate imports, providers, or plugins. If you customize generated files, the CLI preserves them and reports the conflict.

Backups are stored in `.kivora/backups/<id>/`. `manifest.json` maps each original path to its `.bak` file; `backup: null` means the file did not previously exist. To recover manually, copy each `.bak` to its original path and remove only the newly created files you want to undo. Keep these backups until you have reviewed the changes; do not publish them, as they may contain private configuration.

If the package manager returns an error, the modified files, manifest, and application and package manager lockfiles are restored. Changes to `node_modules`, installation script side effects, and abrupt process termination are not a reversible transaction. In those cases, use the backups and reinstall dependencies with your package manager.

## Help and troubleshooting

```sh
npx @kivora/init --help
npx @kivora/init --cwd ./my-app --dry-run
```

- **No unique platform detected:** use `--framework nextjs` or `--framework native` inside an application that already has that framework installed.
- **Unrecognized configuration:** review the reported file. Functions, spreads, and dynamic exports may require manual integration following the platform package's README.
- **Conflicting package managers:** keep the lockfile for your project's package manager and check `packageManager` before running the command again.
- **Incompatible dependency:** review the declared range; the installer does not replace existing versions to force installation.
- **Installation error:** check the package manager's error and the backups. Review dependencies before running the command again.

Setup references: [NativeWind 4](https://www.nativewind.dev/docs/getting-started/installation), [Tailwind with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs), and [Reanimated compatibility](https://docs.swmansion.com/react-native-reanimated/docs/guides/compatibility/).
