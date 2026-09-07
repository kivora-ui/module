# @kivora/theme

**Kivora's shared design foundation for web and React Native.**

Light and dark themes, TypeScript types, breakpoints, and utilities with no React or React Native dependencies. This package provides data and helpers; components are available in **[@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs)** and **[@kivora/native](https://www.npmjs.com/package/@kivora/native)**.

## Installation

```sh
npm install @kivora/theme
```

## Usage

```ts
import {
  lightTheme,
  darkTheme,
  mergeTheme,
  getBreakpoint,
  resolveColorMode,
  cn,
} from '@kivora/theme';

const theme = mergeTheme(lightTheme, {
  color: { primary: '#262626', primaryForeground: '#ffffff' },
});

theme.color.primary;                   // '#262626'
darkTheme.color.background;            // dark theme background color
getBreakpoint(900);                    // 'tablet'
resolveColorMode('system', 'dark');     // 'dark'
cn('p-2', false && 'hidden', 'p-4');     // 'p-4'
```

`mergeTheme` preserves base theme values that are not overridden and returns a new object when overrides are provided. It does not modify styles or apply a theme on its own.

## API

| Export | Purpose |
| --- | --- |
| `lightTheme`, `darkTheme` | Objects containing `color`, `radius`, `spacing`, and `fontSize` |
| `mergeTheme(base, override?)` | Merge a theme with partial overrides |
| `breakpoints` | `{ mobile: 0, tablet: 768, desktop: 1024 }` |
| `getBreakpoint(width)` | Resolve `mobile`, `tablet`, or `desktop` from a width |
| `resolveColorMode(mode, systemMode)` | Resolve `light`, `dark`, or `system` without reading device APIs |
| `cn(...inputs)` | Combine conditional classes and resolve conflicts using clsx and tailwind-merge |

Exported types include `KivoraTheme`, `KivoraColorTokens`, `ColorMode`, `DeepPartial`, and `Breakpoint`, among others. ESM, CommonJS, and TypeScript declarations are included.

Breakpoints are numeric values: use CSS pixels on the web and React Native layout width in native apps. The helper does not register resize listeners.

## Web styles with Tailwind CSS 4

In an application with Tailwind CSS 4 configured, add these imports to your global CSS:

```css
@import "tailwindcss";
@import "@kivora/theme/tailwind.css";
```

The stylesheet exposes semantic colors and dark mode styles. If you use `@kivora/nextjs/styles.css`, that import already includes the theme and Tailwind.

The JavaScript object and CSS variables are separate representations. Updating an object with `mergeTheme` does not rewrite browser variables. Customize the CSS to change Tailwind classes.

## React Native

Theme objects and helpers can be used in React Native. The `tailwind.css` file is for the web: configure NativeWind and color variables following the [@kivora/native](https://www.npmjs.com/package/@kivora/native) README.

There is no exported Tailwind preset or object named `tokens`. Use `lightTheme`, `darkTheme`, and the exports documented above.

## The Kivora ecosystem

| Package | Purpose |
| --- | --- |
| [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) | Next.js components for desktop, tablet, and mobile web |
| [@kivora/native](https://www.npmjs.com/package/@kivora/native) | React Native components, gestures, and bottom sheets |

Use [@kivora/init](https://www.npmjs.com/package/@kivora/init) to configure platform components in an existing application. Theme can also be used independently, without installing the components.
