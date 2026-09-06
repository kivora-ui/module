# Kivora UI Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the shared foundation of Kivora UI — the `@kivora/theme` package, the `KivoraProvider`/hooks in `@kivora/nextjs` and `@kivora/native`, two reference components (`Button`, `Card`) in both, Storybook stories, and the docs referenced by the README — so every later component follows the same pattern.

**Architecture:** `@kivora/theme` is a React-free package holding design tokens (in shadcn's public oklch palette), theme types, cross-platform pure helpers (`mergeTheme`, `cn`, `getBreakpoint`, `resolveColorMode`), and a Tailwind v4 CSS partial (`@kivora/theme/tailwind.css`). `@kivora/nextjs` and `@kivora/native` each import that partial into their own Tailwind v4 setup, expose a `KivoraProvider` that toggles a `dark` class/`data-theme` attribute, and implement `Button`/`Card` with the same variant vocabulary (Radix Slot + CVA + `motion` on web, `Pressable`/`View` + CVA + `react-native-reanimated` via NativeWind on native). Storybook documents the web components only.

**Tech Stack:** pnpm workspaces, TypeScript 5.9 (strict), tsup, Vitest, Tailwind CSS v4 (CSS-first), `@radix-ui/react-slot`, `class-variance-authority`, `tailwind-merge`, `motion`, NativeWind v5 (preview, Tailwind v4 track), `react-native-reanimated`, Storybook 8 + `@tailwindcss/vite`.

**Spec:** [docs/superpowers/specs/2026-09-04-foundation-design.md](../specs/2026-09-04-foundation-design.md)

## Global Constraints

- React peer `>=18` (workspace has 19.2.8 installed); React Native peer `>=0.74` (workspace has 0.87.1 installed).
- Tailwind CSS v4 (`>=4.1`), CSS-first config everywhere — no `tailwind.config.js`, no `presets`, no `addVariant` JS plugins.
- NativeWind v5 (preview, npm dist-tag `preview`) is required to get Tailwind v4 on native; it is **not** production-stable — document this risk everywhere it's installed.
- Components are named like the web/shadcn vocabulary in **both** packages (`Button`, `Card`, ...) — never expose a React Native primitive name (`Pressable`, `View`) as a public component name.
- Cross-platform, framework-free logic (`mergeTheme`, `cn`, `getBreakpoint`, `resolveColorMode`) and the `ButtonVariant`/`ButtonSize` contract types live in `@kivora/theme`, not duplicated per package.
- Every package publishes independently to npm under the `@kivora` scope (`publishConfig.access: "public"`, already set) and builds with `tsup`.
- `@kivora/native` has no automated component-render tests in this foundation: `@testing-library/react-native` needs Jest's React Native preset (mocks for `NativeModules`, `Appearance`, etc.), which this Vitest-only monorepo doesn't have. Only pure logic gets unit tests there; component rendering is verified manually in an Expo/RN app.
- Storybook documents `@kivora/nextjs` only — no `react-native-web` in this foundation.
- `tsconfig.base.json` has `strict: true` — no `any`, no unjustified non-null assertions.

---

### Task 1: `@kivora/theme` — package scaffold, tokens, types, themes

**Files:**
- Create: `packages/theme/package.json`
- Create: `packages/theme/tsconfig.json`
- Create: `packages/theme/src/tokens.ts`
- Create: `packages/theme/src/breakpoints.ts`
- Create: `packages/theme/src/types.ts`
- Create: `packages/theme/src/themes.ts`
- Create: `packages/theme/src/index.ts`
- Test: `packages/theme/src/themes.test.ts`

**Interfaces:**
- Produces: `ColorMode = "light" | "dark" | "system"`, `KivoraColorTokens`, `KivoraRadiusTokens`, `KivoraSpacingTokens`, `KivoraFontSizeTokens`, `KivoraTheme`, `DeepPartial<T>`, `ButtonVariant`, `ButtonSize` (all from `./types`); `breakpoints: { mobile: 0, tablet: 768, desktop: 1024 }`, `Breakpoint = keyof typeof breakpoints` (from `./breakpoints`); `lightTheme: KivoraTheme`, `darkTheme: KivoraTheme` (from `./themes`).

- [ ] **Step 1: Create the package manifest**

`packages/theme/package.json`:

```json
{
  "name": "@kivora/theme",
  "version": "0.0.0",
  "description": "Shared design tokens, theme contracts and Tailwind v4 partial for Kivora UI.",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./tailwind.css": "./dist/tailwind.css"
  },
  "files": ["dist", "README.md"],
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts && node scripts/copy-css.mjs",
    "typecheck": "tsc --noEmit",
    "lint": "tsc --noEmit",
    "test": "vitest run --passWithNoTests"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.7.0"
  },
  "devDependencies": {
    "tsup": "^8.5.1",
    "typescript": "^5.9.3",
    "vitest": "^2.1.9"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

- [ ] **Step 2: Create the package tsconfig**

`packages/theme/tsconfig.json`:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

- [ ] **Step 3: Write the token data**

`packages/theme/src/tokens.ts` (values are shadcn's public default oklch palette, verified AA-compliant, so Kivora's default look matches the shadcn aesthetic without depending on the `shadcn` package):

```ts
export const colorTokens = {
  light: {
    background: "oklch(1 0 0)",
    foreground: "oklch(0.145 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.145 0 0)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.145 0 0)",
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    secondary: "oklch(0.97 0 0)",
    secondaryForeground: "oklch(0.205 0 0)",
    muted: "oklch(0.97 0 0)",
    mutedForeground: "oklch(0.556 0 0)",
    accent: "oklch(0.97 0 0)",
    accentForeground: "oklch(0.205 0 0)",
    destructive: "oklch(0.577 0.245 27.325)",
    destructiveForeground: "oklch(0.985 0 0)",
    border: "oklch(0.922 0 0)",
    input: "oklch(0.922 0 0)",
    ring: "oklch(0.708 0 0)"
  },
  dark: {
    background: "oklch(0.145 0 0)",
    foreground: "oklch(0.985 0 0)",
    card: "oklch(0.205 0 0)",
    cardForeground: "oklch(0.985 0 0)",
    popover: "oklch(0.205 0 0)",
    popoverForeground: "oklch(0.985 0 0)",
    primary: "oklch(0.922 0 0)",
    primaryForeground: "oklch(0.205 0 0)",
    secondary: "oklch(0.269 0 0)",
    secondaryForeground: "oklch(0.985 0 0)",
    muted: "oklch(0.269 0 0)",
    mutedForeground: "oklch(0.708 0 0)",
    accent: "oklch(0.269 0 0)",
    accentForeground: "oklch(0.985 0 0)",
    destructive: "oklch(0.704 0.191 22.216)",
    destructiveForeground: "oklch(0.985 0 0)",
    border: "oklch(1 0 0 / 10%)",
    input: "oklch(1 0 0 / 15%)",
    ring: "oklch(0.556 0 0)"
  }
} as const;

export const radiusTokens = {
  sm: "calc(0.625rem - 4px)",
  md: "calc(0.625rem - 2px)",
  lg: "0.625rem",
  xl: "calc(0.625rem + 4px)"
} as const;

export const spacingTokens = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24
} as const;

export const fontSizeTokens = {
  sm: 14,
  base: 16,
  lg: 18
} as const;
```

- [ ] **Step 4: Write the breakpoints**

`packages/theme/src/breakpoints.ts`:

```ts
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
} as const;

export type Breakpoint = keyof typeof breakpoints;
```

- [ ] **Step 5: Write the shared types**

`packages/theme/src/types.ts`:

```ts
export type ColorMode = "light" | "dark" | "system";

export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

export interface KivoraColorTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

export interface KivoraRadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface KivoraSpacingTokens {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface KivoraFontSizeTokens {
  sm: number;
  base: number;
  lg: number;
}

export interface KivoraTheme {
  color: KivoraColorTokens;
  radius: KivoraRadiusTokens;
  spacing: KivoraSpacingTokens;
  fontSize: KivoraFontSizeTokens;
}

// Shared across @kivora/nextjs and @kivora/native so both Button
// implementations are forced to cover the same variant/size set.
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";
```

- [ ] **Step 6: Write the theme objects and a smoke test**

`packages/theme/src/themes.ts`:

```ts
import { colorTokens, fontSizeTokens, radiusTokens, spacingTokens } from "./tokens";
import type { KivoraTheme } from "./types";

export const lightTheme: KivoraTheme = {
  color: colorTokens.light,
  radius: radiusTokens,
  spacing: spacingTokens,
  fontSize: fontSizeTokens
};

export const darkTheme: KivoraTheme = {
  color: colorTokens.dark,
  radius: radiusTokens,
  spacing: spacingTokens,
  fontSize: fontSizeTokens
};
```

`packages/theme/src/themes.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { darkTheme, lightTheme } from "./themes";

describe("lightTheme / darkTheme", () => {
  it("expose the same token keys so no platform can read an undefined value", () => {
    expect(Object.keys(lightTheme.color).sort()).toEqual(Object.keys(darkTheme.color).sort());
  });

  it("use different background colors for light and dark", () => {
    expect(lightTheme.color.background).not.toBe(darkTheme.color.background);
  });
});
```

- [ ] **Step 7: Write the barrel export**

`packages/theme/src/index.ts`:

```ts
export * from "./types";
export * from "./breakpoints";
export { lightTheme, darkTheme } from "./themes";
```

- [ ] **Step 8: Install and run the new test**

Run: `pnpm install`
Run: `pnpm --filter @kivora/theme test`
Expected: PASS (2 tests)

- [ ] **Step 9: Typecheck**

Run: `pnpm --filter @kivora/theme typecheck`
Expected: no errors

- [ ] **Step 10: Commit**

```bash
git add packages/theme/package.json packages/theme/tsconfig.json packages/theme/src pnpm-lock.yaml
git commit -m "feat(theme): add tokens, breakpoints, theme types and light/dark themes"
```

---

### Task 2: `@kivora/theme` — cross-platform pure helpers

**Files:**
- Create: `packages/theme/src/merge.ts`
- Test: `packages/theme/src/merge.test.ts`
- Create: `packages/theme/src/cn.ts`
- Test: `packages/theme/src/cn.test.ts`
- Create: `packages/theme/src/get-breakpoint.ts`
- Test: `packages/theme/src/get-breakpoint.test.ts`
- Create: `packages/theme/src/resolve-color-mode.ts`
- Test: `packages/theme/src/resolve-color-mode.test.ts`
- Modify: `packages/theme/src/index.ts`

**Interfaces:**
- Consumes: `KivoraTheme`, `DeepPartial<T>`, `ColorMode` (Task 1's `./types`); `breakpoints`, `Breakpoint` (Task 1's `./breakpoints`); `lightTheme` (Task 1's `./themes`, test only).
- Produces: `mergeTheme(base: KivoraTheme, override?: DeepPartial<KivoraTheme>): KivoraTheme`; `cn(...inputs: ClassValue[]): string`; `getBreakpoint(width: number): Breakpoint`; `resolveColorMode(colorMode: ColorMode, systemColorMode: "light" | "dark"): "light" | "dark"`. All four are re-exported from `@kivora/theme`'s barrel and consumed by both `@kivora/nextjs` and `@kivora/native` in later tasks.

- [ ] **Step 1: Write the failing `mergeTheme` test**

`packages/theme/src/merge.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { mergeTheme } from "./merge";
import { lightTheme } from "./themes";

describe("mergeTheme", () => {
  it("returns the base theme unchanged when no override is given", () => {
    expect(mergeTheme(lightTheme)).toEqual(lightTheme);
  });

  it("merges a partial color override on top of the base theme", () => {
    const result = mergeTheme(lightTheme, { color: { primary: "oklch(0.6 0.2 260)" } });
    expect(result.color.primary).toBe("oklch(0.6 0.2 260)");
    expect(result.color.background).toBe(lightTheme.color.background);
  });

  it("does not mutate the base theme", () => {
    mergeTheme(lightTheme, { color: { primary: "oklch(0.6 0.2 260)" } });
    expect(lightTheme.color.primary).toBe("oklch(0.205 0 0)");
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

Run: `pnpm --filter @kivora/theme exec vitest run src/merge.test.ts`
Expected: FAIL — `Cannot find module './merge'`

- [ ] **Step 3: Implement `mergeTheme`**

`packages/theme/src/merge.ts`:

```ts
import type { DeepPartial, KivoraTheme } from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function mergeTheme(base: KivoraTheme, override?: DeepPartial<KivoraTheme>): KivoraTheme {
  if (!override) return base;

  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override) as Array<keyof KivoraTheme>) {
    const overrideValue = override[key];
    const baseValue = base[key];
    if (isPlainObject(overrideValue) && isPlainObject(baseValue)) {
      result[key] = { ...baseValue, ...overrideValue };
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  return result as KivoraTheme;
}
```

- [ ] **Step 4: Run the test again**

Run: `pnpm --filter @kivora/theme exec vitest run src/merge.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Write the failing `cn` test**

`packages/theme/src/cn.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("resolves conflicting Tailwind classes, keeping the last one", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("drops falsy values", () => {
    expect(cn("text-sm", false, undefined, "font-medium")).toBe("text-sm font-medium");
  });
});
```

- [ ] **Step 6: Run it and confirm it fails**

Run: `pnpm --filter @kivora/theme exec vitest run src/cn.test.ts`
Expected: FAIL — `Cannot find module './cn'`

- [ ] **Step 7: Implement `cn`**

`packages/theme/src/cn.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 8: Run the test again**

Run: `pnpm --filter @kivora/theme exec vitest run src/cn.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 9: Write the failing `getBreakpoint` test**

`packages/theme/src/get-breakpoint.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { getBreakpoint } from "./get-breakpoint";

describe("getBreakpoint", () => {
  it("returns mobile below the tablet threshold", () => {
    expect(getBreakpoint(500)).toBe("mobile");
  });

  it("returns tablet at and above the tablet threshold", () => {
    expect(getBreakpoint(768)).toBe("tablet");
    expect(getBreakpoint(900)).toBe("tablet");
  });

  it("returns desktop at and above the desktop threshold", () => {
    expect(getBreakpoint(1024)).toBe("desktop");
    expect(getBreakpoint(1440)).toBe("desktop");
  });
});
```

- [ ] **Step 10: Run it and confirm it fails**

Run: `pnpm --filter @kivora/theme exec vitest run src/get-breakpoint.test.ts`
Expected: FAIL — `Cannot find module './get-breakpoint'`

- [ ] **Step 11: Implement `getBreakpoint`**

`packages/theme/src/get-breakpoint.ts`:

```ts
import { breakpoints } from "./breakpoints";
import type { Breakpoint } from "./breakpoints";

export function getBreakpoint(width: number): Breakpoint {
  if (width >= breakpoints.desktop) return "desktop";
  if (width >= breakpoints.tablet) return "tablet";
  return "mobile";
}
```

- [ ] **Step 12: Run the test again**

Run: `pnpm --filter @kivora/theme exec vitest run src/get-breakpoint.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 13: Write the failing `resolveColorMode` test**

`packages/theme/src/resolve-color-mode.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { resolveColorMode } from "./resolve-color-mode";

describe("resolveColorMode", () => {
  it("returns the explicit mode when it is light or dark", () => {
    expect(resolveColorMode("dark", "light")).toBe("dark");
    expect(resolveColorMode("light", "dark")).toBe("light");
  });

  it("falls back to the system color mode when set to system", () => {
    expect(resolveColorMode("system", "dark")).toBe("dark");
    expect(resolveColorMode("system", "light")).toBe("light");
  });
});
```

- [ ] **Step 14: Run it and confirm it fails**

Run: `pnpm --filter @kivora/theme exec vitest run src/resolve-color-mode.test.ts`
Expected: FAIL — `Cannot find module './resolve-color-mode'`

- [ ] **Step 15: Implement `resolveColorMode`**

`packages/theme/src/resolve-color-mode.ts`:

```ts
import type { ColorMode } from "./types";

export function resolveColorMode(
  colorMode: ColorMode,
  systemColorMode: "light" | "dark"
): "light" | "dark" {
  return colorMode === "system" ? systemColorMode : colorMode;
}
```

- [ ] **Step 16: Run the test again**

Run: `pnpm --filter @kivora/theme exec vitest run src/resolve-color-mode.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 17: Update the barrel export**

`packages/theme/src/index.ts` — add these four lines under the existing exports:

```ts
export { mergeTheme } from "./merge";
export { cn } from "./cn";
export { getBreakpoint } from "./get-breakpoint";
export { resolveColorMode } from "./resolve-color-mode";
```

- [ ] **Step 18: Run the full test suite and typecheck**

Run: `pnpm --filter @kivora/theme test && pnpm --filter @kivora/theme typecheck`
Expected: PASS, no type errors

- [ ] **Step 19: Commit**

```bash
git add packages/theme/src
git commit -m "feat(theme): add mergeTheme, cn, getBreakpoint and resolveColorMode"
```

---

### Task 3: `@kivora/theme` — Tailwind v4 CSS partial

**Files:**
- Create: `packages/theme/src/tailwind.css`
- Create: `packages/theme/scripts/copy-css.mjs`

**Interfaces:**
- Produces: `@kivora/theme/tailwind.css` (published path `dist/tailwind.css`, `package.json` `exports["./tailwind.css"]` already wired in Task 1) — a Tailwind v4 partial consumed via `@import "@kivora/theme/tailwind.css";` by `@kivora/nextjs`, `@kivora/native`'s consumer apps, and `storybook` in later tasks.

- [ ] **Step 1: Write the CSS partial**

`packages/theme/src/tailwind.css` — token values match `src/tokens.ts` exactly (kept in sync by hand for this foundation; codegen is out of scope). The base tokens under `@theme` generate the `bg-primary`/`text-primary-foreground`/etc. utilities Tailwind v4 derives from `--color-*` variables; reassigning the same variables under `.dark` is what actually switches the palette — `@custom-variant dark` stays as an escape hatch for one-off utilities that aren't covered by a semantic token (e.g. `dark:shadow-none`):

```css
@theme {
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.145 0 0);
  --color-card: oklch(1 0 0);
  --color-card-foreground: oklch(0.145 0 0);
  --color-popover: oklch(1 0 0);
  --color-popover-foreground: oklch(0.145 0 0);
  --color-primary: oklch(0.205 0 0);
  --color-primary-foreground: oklch(0.985 0 0);
  --color-secondary: oklch(0.97 0 0);
  --color-secondary-foreground: oklch(0.205 0 0);
  --color-muted: oklch(0.97 0 0);
  --color-muted-foreground: oklch(0.556 0 0);
  --color-accent: oklch(0.97 0 0);
  --color-accent-foreground: oklch(0.205 0 0);
  --color-destructive: oklch(0.577 0.245 27.325);
  --color-destructive-foreground: oklch(0.985 0 0);
  --color-border: oklch(0.922 0 0);
  --color-input: oklch(0.922 0 0);
  --color-ring: oklch(0.708 0 0);

  --radius-sm: calc(0.625rem - 4px);
  --radius-md: calc(0.625rem - 2px);
  --radius-lg: 0.625rem;
  --radius-xl: calc(0.625rem + 4px);
}

.dark {
  --color-background: oklch(0.145 0 0);
  --color-foreground: oklch(0.985 0 0);
  --color-card: oklch(0.205 0 0);
  --color-card-foreground: oklch(0.985 0 0);
  --color-popover: oklch(0.205 0 0);
  --color-popover-foreground: oklch(0.985 0 0);
  --color-primary: oklch(0.922 0 0);
  --color-primary-foreground: oklch(0.205 0 0);
  --color-secondary: oklch(0.269 0 0);
  --color-secondary-foreground: oklch(0.985 0 0);
  --color-muted: oklch(0.269 0 0);
  --color-muted-foreground: oklch(0.708 0 0);
  --color-accent: oklch(0.269 0 0);
  --color-accent-foreground: oklch(0.985 0 0);
  --color-destructive: oklch(0.704 0.191 22.216);
  --color-destructive-foreground: oklch(0.985 0 0);
  --color-border: oklch(1 0 0 / 10%);
  --color-input: oklch(1 0 0 / 15%);
  --color-ring: oklch(0.556 0 0);
}

@custom-variant dark (&:where(.dark, .dark *));
```

- [ ] **Step 2: Write the dist copy script**

`packages/theme/scripts/copy-css.mjs`:

```js
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const from = join(root, "..", "src", "tailwind.css");
const to = join(root, "..", "dist", "tailwind.css");

mkdirSync(dirname(to), { recursive: true });
copyFileSync(from, to);
console.log("copied tailwind.css to dist/");
```

- [ ] **Step 3: Build the package and verify the output**

Run: `pnpm --filter @kivora/theme build`
Expected: `packages/theme/dist/index.js`, `dist/index.cjs`, `dist/index.d.ts` and `dist/tailwind.css` all exist.

Verify: `ls packages/theme/dist`

- [ ] **Step 4: Commit**

```bash
git add packages/theme/src/tailwind.css packages/theme/scripts/copy-css.mjs
git commit -m "feat(theme): publish a Tailwind v4 CSS partial with tokens and dark variant"
```

---

### Task 4: `@kivora/nextjs` — dependencies, global styles, test setup

**Files:**
- Modify: `packages/nextjs/package.json`
- Create: `packages/nextjs/src/styles.css`
- Create: `packages/nextjs/scripts/copy-styles.mjs`
- Create: `packages/nextjs/vitest.config.ts`
- Create: `packages/nextjs/vitest.setup.ts`

**Interfaces:**
- Consumes: `@kivora/theme/tailwind.css` (Task 3).
- Produces: `packages/nextjs/dist/styles.css` (the single CSS import documented in the README as `import "@kivora/nextjs/styles.css";`); a jsdom Vitest environment other tasks' web tests rely on.

- [ ] **Step 1: Update the package manifest**

Replace `packages/nextjs/package.json` dependencies/devDependencies/peerDependencies with:

```json
{
  "dependencies": {
    "@kivora/theme": "workspace:*",
    "@radix-ui/react-slot": "^1.2.0",
    "class-variance-authority": "^0.7.1",
    "lucide-react": "^1.40.0",
    "motion": "^13.2.0"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "tailwindcss": ">=4.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^19.2.18",
    "jsdom": "^25.0.1",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3",
    "vitest": "^2.1.9"
  }
}
```

Keep `name`, `version`, `description`, `main`, `module`, `types`, `exports`, `files`, `scripts`, `publishConfig` as they already are.

- [ ] **Step 2: Write the global stylesheet**

`packages/nextjs/src/styles.css`:

```css
@import "tailwindcss";
@import "@kivora/theme/tailwind.css";
```

- [ ] **Step 3: Write the dist copy script**

`packages/nextjs/scripts/copy-styles.mjs` (the existing `build` script already calls this file, it just didn't exist yet):

```js
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const from = join(root, "..", "src", "styles.css");
const to = join(root, "..", "dist", "styles.css");

mkdirSync(dirname(to), { recursive: true });
copyFileSync(from, to);
console.log("copied styles.css to dist/");
```

- [ ] **Step 4: Configure Vitest for DOM testing**

`packages/nextjs/vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"]
  }
});
```

`packages/nextjs/vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Install and verify the build**

Run: `pnpm install`
Run: `pnpm --filter @kivora/nextjs build`
Expected: `packages/nextjs/dist/styles.css` exists and contains the two `@import` lines.

- [ ] **Step 6: Commit**

```bash
git add packages/nextjs/package.json packages/nextjs/src/styles.css packages/nextjs/scripts packages/nextjs/vitest.config.ts packages/nextjs/vitest.setup.ts pnpm-lock.yaml
git commit -m "feat(nextjs): move to Tailwind v4, wire the theme partial and DOM test setup"
```

---

### Task 5: `@kivora/nextjs` — `KivoraProvider`

**Files:**
- Create: `packages/nextjs/src/provider.tsx`
- Test: `packages/nextjs/src/provider.test.tsx`

**Interfaces:**
- Consumes: `lightTheme`, `darkTheme`, `mergeTheme`, `resolveColorMode`, `ColorMode`, `DeepPartial<KivoraTheme>`, `KivoraTheme` (from `@kivora/theme`, Tasks 1-2).
- Produces: `KivoraProvider({ children, colorMode?, theme?, themeOverrides? }): JSX.Element`; `useKivoraTheme(): { theme: KivoraTheme; colorMode: ColorMode; resolvedColorMode: "light" | "dark"; themeName?: string }`. Both are re-exported from `@kivora/nextjs`'s barrel in Task 8 and used by `Button`/`Card` stories/tests.

- [ ] **Step 1: Write the failing tests**

`packages/nextjs/src/provider.test.tsx`:

```tsx
// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KivoraProvider, useKivoraTheme } from "./provider";

function Probe() {
  const { resolvedColorMode } = useKivoraTheme();
  return <span>{resolvedColorMode}</span>;
}

describe("KivoraProvider", () => {
  it("resolves an explicit dark colorMode and applies the dark class", () => {
    render(
      <KivoraProvider colorMode="dark">
        <Probe />
      </KivoraProvider>
    );
    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("sets data-theme when a custom theme name is passed", () => {
    render(
      <KivoraProvider colorMode="light" theme="child">
        <Probe />
      </KivoraProvider>
    );
    expect(document.documentElement.getAttribute("data-theme")).toBe("child");
  });

  it("throws when useKivoraTheme is used outside a KivoraProvider", () => {
    function Broken() {
      useKivoraTheme();
      return null;
    }
    expect(() => render(<Broken />)).toThrow(/KivoraProvider/);
  });
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/provider.test.tsx`
Expected: FAIL — `Cannot find module './provider'`

- [ ] **Step 3: Implement the provider**

`packages/nextjs/src/provider.tsx`:

```tsx
"use client";

import * as React from "react";
import { darkTheme, lightTheme, mergeTheme, resolveColorMode } from "@kivora/theme";
import type { ColorMode, DeepPartial, KivoraTheme } from "@kivora/theme";

interface KivoraContextValue {
  theme: KivoraTheme;
  colorMode: ColorMode;
  resolvedColorMode: "light" | "dark";
  themeName?: string;
}

const KivoraContext = React.createContext<KivoraContextValue | null>(null);

export interface KivoraProviderProps {
  children: React.ReactNode;
  colorMode?: ColorMode;
  theme?: string;
  themeOverrides?: DeepPartial<KivoraTheme>;
}

function getSystemColorMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function KivoraProvider({
  children,
  colorMode = "system",
  theme,
  themeOverrides
}: KivoraProviderProps) {
  const [systemColorMode, setSystemColorMode] = React.useState<"light" | "dark">(
    getSystemColorMode
  );

  React.useEffect(() => {
    if (colorMode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setSystemColorMode(media.matches ? "dark" : "light");
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [colorMode]);

  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedColorMode === "dark");
    if (theme) {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [resolvedColorMode, theme]);

  const activeTheme = React.useMemo(
    () => mergeTheme(resolvedColorMode === "dark" ? darkTheme : lightTheme, themeOverrides),
    [resolvedColorMode, themeOverrides]
  );

  const value = React.useMemo<KivoraContextValue>(
    () => ({ theme: activeTheme, colorMode, resolvedColorMode, themeName: theme }),
    [activeTheme, colorMode, resolvedColorMode, theme]
  );

  return <KivoraContext.Provider value={value}>{children}</KivoraContext.Provider>;
}

export function useKivoraTheme(): KivoraContextValue {
  const ctx = React.useContext(KivoraContext);
  if (!ctx) {
    throw new Error("useKivoraTheme must be used within a KivoraProvider");
  }
  return ctx;
}
```

- [ ] **Step 4: Run the tests again**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/provider.test.tsx`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add packages/nextjs/src/provider.tsx packages/nextjs/src/provider.test.tsx
git commit -m "feat(nextjs): add KivoraProvider and useKivoraTheme"
```

---

### Task 6: `@kivora/nextjs` — `useBreakpoint`

**Files:**
- Create: `packages/nextjs/src/hooks/use-breakpoint.ts`
- Test: `packages/nextjs/src/hooks/use-breakpoint.test.ts`

**Interfaces:**
- Consumes: `getBreakpoint`, `Breakpoint` (from `@kivora/theme`, Task 2).
- Produces: `useBreakpoint(): Breakpoint`, re-exported from `@kivora/nextjs`'s barrel in Task 8.

- [ ] **Step 1: Write the failing test**

`packages/nextjs/src/hooks/use-breakpoint.test.ts`:

```ts
// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useBreakpoint } from "./use-breakpoint";

function setWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  window.dispatchEvent(new Event("resize"));
}

describe("useBreakpoint", () => {
  afterEach(() => setWidth(1024));

  it("returns mobile below the tablet breakpoint", () => {
    setWidth(500);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("mobile");
  });

  it("updates on resize", () => {
    setWidth(500);
    const { result } = renderHook(() => useBreakpoint());
    act(() => setWidth(1280));
    expect(result.current).toBe("desktop");
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/hooks/use-breakpoint.test.ts`
Expected: FAIL — `Cannot find module './use-breakpoint'`

- [ ] **Step 3: Implement the hook**

`packages/nextjs/src/hooks/use-breakpoint.ts`:

```ts
"use client";

import * as React from "react";
import { getBreakpoint } from "@kivora/theme";
import type { Breakpoint } from "@kivora/theme";

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>(() =>
    typeof window === "undefined" ? "mobile" : getBreakpoint(window.innerWidth)
  );

  React.useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
```

- [ ] **Step 4: Run the test again**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/hooks/use-breakpoint.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add packages/nextjs/src/hooks
git commit -m "feat(nextjs): add useBreakpoint"
```

---

### Task 7: `@kivora/nextjs` — `Button`

**Files:**
- Create: `packages/nextjs/src/components/button.tsx`
- Test: `packages/nextjs/src/components/button.test.tsx`

**Interfaces:**
- Consumes: `cn`, `ButtonVariant`, `ButtonSize` (from `@kivora/theme`, Tasks 1-2).
- Produces: `Button` (forwardRef component, props `ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }`), re-exported from `@kivora/nextjs`'s barrel in Task 8 and used by Storybook in Task 13.

- [ ] **Step 1: Write the failing tests**

`packages/nextjs/src/components/button.test.tsx`:

```tsx
// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("renders as a native button with an accessible name", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });

  it("calls onClick when pressed", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Guardar</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is disabled and does not fire onClick when disabled is set", async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Guardar
      </Button>
    );
    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders the child element instead of a button when asChild is set", () => {
    render(
      <Button asChild>
        <a href="/docs">Ver docs</a>
      </Button>
    );
    expect(screen.getByRole("link", { name: "Ver docs" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/components/button.test.tsx`
Expected: FAIL — `Cannot find module './button'`

- [ ] **Step 3: Implement the component**

`packages/nextjs/src/components/button.tsx`. `variantClasses`/`sizeClasses` are typed as `Record<ButtonVariant, string>`/`Record<ButtonSize, string>` from `@kivora/theme` so TypeScript fails the build if web and native ever drift on the variant/size vocabulary:

```tsx
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "@kivora/theme";
import type { ButtonSize, ButtonVariant } from "@kivora/theme";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10"
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: { variant: variantClasses, size: sizeClasses },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      );
    }
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

- [ ] **Step 4: Run the tests again**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/components/button.test.tsx`
Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add packages/nextjs/src/components/button.tsx packages/nextjs/src/components/button.test.tsx
git commit -m "feat(nextjs): add Button"
```

---

### Task 8: `@kivora/nextjs` — `Card` and barrel export

**Files:**
- Create: `packages/nextjs/src/components/card.tsx`
- Test: `packages/nextjs/src/components/card.test.tsx`
- Create: `packages/nextjs/src/index.ts`

**Interfaces:**
- Consumes: `cn` (from `@kivora/theme`).
- Produces: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (all `React.HTMLAttributes<HTMLDivElement>`/`HTMLHeadingElement`/`HTMLParagraphElement` forwardRef components); `@kivora/nextjs`'s full public barrel (`KivoraProvider`, `useKivoraTheme`, `useBreakpoint`, `Button`, `ButtonProps`, `Card` family, plus theme re-exports `lightTheme`, `darkTheme`, `breakpoints`, `tokens` naming used by the README) consumed by Storybook (Task 13).

- [ ] **Step 1: Write the failing test**

`packages/nextjs/src/components/card.test.tsx`:

```tsx
// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

describe("Card", () => {
  it("renders its header and content", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
        </CardHeader>
        <CardContent>Contenido</CardContent>
      </Card>
    );
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/components/card.test.tsx`
Expected: FAIL — `Cannot find module './card'`

- [ ] **Step 3: Implement the component**

`packages/nextjs/src/components/card.tsx`:

```tsx
import * as React from "react";
import { cn } from "@kivora/theme";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
```

- [ ] **Step 4: Run the test again**

Run: `pnpm --filter @kivora/nextjs exec vitest run src/components/card.test.tsx`
Expected: PASS (1 test)

- [ ] **Step 5: Write the barrel export**

`packages/nextjs/src/index.ts`:

```ts
export { KivoraProvider, useKivoraTheme } from "./provider";
export type { KivoraProviderProps } from "./provider";
export { useBreakpoint } from "./hooks/use-breakpoint";
export { Button } from "./components/button";
export type { ButtonProps } from "./components/button";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./components/card";
export { lightTheme, darkTheme, breakpoints } from "@kivora/theme";
```

- [ ] **Step 6: Run the full test suite, typecheck, and build**

Run: `pnpm --filter @kivora/nextjs test && pnpm --filter @kivora/nextjs typecheck && pnpm --filter @kivora/nextjs build`
Expected: PASS, no type errors, `dist/index.js`/`dist/index.cjs`/`dist/index.d.ts`/`dist/styles.css` exist.

- [ ] **Step 7: Commit**

```bash
git add packages/nextjs/src/components/card.tsx packages/nextjs/src/components/card.test.tsx packages/nextjs/src/index.ts
git commit -m "feat(nextjs): add Card and the package barrel export"
```

---

### Task 9: `@kivora/native` — dependencies and `KivoraProvider`

**Files:**
- Modify: `packages/native/package.json`
- Create: `packages/native/src/nativewind-env.d.ts`
- Create: `packages/native/src/provider.tsx`

**Interfaces:**
- Consumes: `lightTheme`, `darkTheme`, `mergeTheme`, `resolveColorMode`, `ColorMode`, `DeepPartial<KivoraTheme>`, `KivoraTheme` (from `@kivora/theme`).
- Produces: `KivoraProvider({ children, colorMode?, theme?, themeOverrides? }): JSX.Element`; `useKivoraTheme(): { theme: KivoraTheme; colorMode: ColorMode; resolvedColorMode: "light" | "dark"; themeName?: string }` — same contract shape as `@kivora/nextjs`'s (Task 5), re-exported from `@kivora/native`'s barrel in Task 12.

- [ ] **Step 1: Update the package manifest**

Replace `packages/native/package.json` dependencies/devDependencies/peerDependencies with:

```json
{
  "dependencies": {
    "@kivora/theme": "workspace:*",
    "class-variance-authority": "^0.7.1",
    "lucide-react-native": "^1.40.0"
  },
  "peerDependencies": {
    "nativewind": "preview",
    "react": ">=18",
    "react-native": ">=0.74",
    "react-native-css": ">=1.0.0",
    "react-native-reanimated": ">=3.16",
    "react-native-svg": ">=15"
  },
  "devDependencies": {
    "@types/react": "^19.2.18",
    "nativewind": "preview",
    "react-native-css": "latest",
    "react-native-reanimated": "^3.16.0",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3",
    "vitest": "^2.1.9"
  }
}
```

Keep `name`, `version`, `description`, `main`, `module`, `types`, `react-native`, `exports`, `files`, `scripts`, `publishConfig` as they already are. NativeWind v5 is preview software (npm dist-tag `preview`) — this is the risk documented in the spec and in `docs/theming.md` (Task 14).

- [ ] **Step 2: Add the NativeWind type augmentation**

Without this, `className` isn't a valid prop on `Pressable`/`View`/`Text` as far as TypeScript is concerned, and every component in Tasks 11-12 fails to typecheck.

`packages/native/src/nativewind-env.d.ts`:

```ts
/// <reference types="nativewind/types" />
```

- [ ] **Step 3: Implement the provider**

`packages/native/src/provider.tsx` — same contract and merge/resolve logic as the web provider (Task 5), adapted to `Appearance` instead of `matchMedia` and to setting NativeWind's color scheme instead of a DOM class:

```tsx
import * as React from "react";
import { Appearance } from "react-native";
import { useColorScheme as useNativewindColorScheme } from "nativewind";
import { darkTheme, lightTheme, mergeTheme, resolveColorMode } from "@kivora/theme";
import type { ColorMode, DeepPartial, KivoraTheme } from "@kivora/theme";

interface KivoraContextValue {
  theme: KivoraTheme;
  colorMode: ColorMode;
  resolvedColorMode: "light" | "dark";
  themeName?: string;
}

const KivoraContext = React.createContext<KivoraContextValue | null>(null);

export interface KivoraProviderProps {
  children: React.ReactNode;
  colorMode?: ColorMode;
  theme?: string;
  themeOverrides?: DeepPartial<KivoraTheme>;
}

export function KivoraProvider({
  children,
  colorMode = "system",
  theme,
  themeOverrides
}: KivoraProviderProps) {
  const { setColorScheme } = useNativewindColorScheme();
  const [systemColorMode, setSystemColorMode] = React.useState<"light" | "dark">(
    () => Appearance.getColorScheme() ?? "light"
  );

  React.useEffect(() => {
    if (colorMode !== "system") return;
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemColorMode(colorScheme ?? "light");
    });
    return () => subscription.remove();
  }, [colorMode]);

  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);

  React.useEffect(() => {
    setColorScheme(resolvedColorMode);
  }, [resolvedColorMode, setColorScheme]);

  const activeTheme = React.useMemo(
    () => mergeTheme(resolvedColorMode === "dark" ? darkTheme : lightTheme, themeOverrides),
    [resolvedColorMode, themeOverrides]
  );

  const value = React.useMemo<KivoraContextValue>(
    () => ({ theme: activeTheme, colorMode, resolvedColorMode, themeName: theme }),
    [activeTheme, colorMode, resolvedColorMode, theme]
  );

  return <KivoraContext.Provider value={value}>{children}</KivoraContext.Provider>;
}

export function useKivoraTheme(): KivoraContextValue {
  const ctx = React.useContext(KivoraContext);
  if (!ctx) {
    throw new Error("useKivoraTheme must be used within a KivoraProvider");
  }
  return ctx;
}
```

- [ ] **Step 4: Install and typecheck**

Run: `pnpm install`
Run: `pnpm --filter @kivora/native typecheck`
Expected: no type errors. (No render test here — see the Global Constraints note on native component testing.)

- [ ] **Step 5: Commit**

```bash
git add packages/native/package.json packages/native/src/nativewind-env.d.ts packages/native/src/provider.tsx pnpm-lock.yaml
git commit -m "feat(native): move to NativeWind v5/Tailwind v4 deps and add KivoraProvider"
```

---

### Task 10: `@kivora/native` — `useKivoraTheme` re-export and `useBreakpoint`

**Files:**
- Create: `packages/native/src/hooks/use-breakpoint.ts`

**Interfaces:**
- Consumes: `getBreakpoint`, `Breakpoint` (from `@kivora/theme`, already unit-tested in Task 2).
- Produces: `useBreakpoint(): Breakpoint`, re-exported from `@kivora/native`'s barrel in Task 12.

- [ ] **Step 1: Implement the hook**

`packages/native/src/hooks/use-breakpoint.ts` — thin wrapper: the branching logic itself (`getBreakpoint`) is already covered by Task 2's unit tests, so this file has nothing new to unit-test in isolation (it only calls a React Native hook that needs a real device/simulator to run):

```ts
import { useWindowDimensions } from "react-native";
import { getBreakpoint } from "@kivora/theme";
import type { Breakpoint } from "@kivora/theme";

export function useBreakpoint(): Breakpoint {
  const { width } = useWindowDimensions();
  return getBreakpoint(width);
}
```

- [ ] **Step 2: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no type errors

- [ ] **Step 3: Commit**

```bash
git add packages/native/src/hooks
git commit -m "feat(native): add useBreakpoint"
```

---

### Task 11: `@kivora/native` — `Button`

**Files:**
- Create: `packages/native/src/components/button.tsx`

**Interfaces:**
- Consumes: `cn`, `ButtonVariant`, `ButtonSize` (from `@kivora/theme`).
- Produces: `Button` (forwardRef component wrapping `Pressable`, props `ButtonProps = Omit<PressableProps, "children"> & VariantProps<typeof buttonVariants> & { children?: React.ReactNode; accessibilityLabel?: string }`), re-exported from `@kivora/native`'s barrel in Task 12.

- [ ] **Step 1: Implement the component**

`packages/native/src/components/button.tsx`. Same `Record<ButtonVariant, string>`/`Record<ButtonSize, string>` typing trick as the web Button (Task 7) so the two implementations can't silently drift on which variants/sizes exist. `hitSlop` compensates for the `sm`/`default` visual heights being under the 44dp minimum touch target:

```tsx
import * as React from "react";
import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { ButtonSize, ButtonVariant } from "@kivora/theme";

// react-native-reanimated's generated prop types for `style` trigger TS2589
// ("Type instantiation is excessively deep and possibly infinite") on this
// exact typescript/react-native/reanimated version combination — cast to a
// plain, non-recursive component type so TS never has to resolve them.
const AnimatedPressable = Animated.createAnimatedComponent(Pressable) as unknown as React.ComponentType<
  PressableProps & { style?: StyleProp<ViewStyle> } & React.RefAttributes<React.ComponentRef<typeof Pressable>>
>;

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary",
  destructive: "bg-destructive",
  outline: "border border-input bg-background",
  secondary: "bg-secondary",
  ghost: "bg-transparent",
  link: "bg-transparent"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10"
};

const buttonVariants = cva("flex-row items-center justify-center gap-2 rounded-md", {
  variants: { variant: variantClasses, size: sizeClasses },
  defaultVariants: { variant: "default", size: "default" }
});

export interface ButtonProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  accessibilityLabel?: string;
}

// Explicit return type: once AnimatedPressable is cast above, TS can no
// longer portably infer Button's type without referencing a non-exported
// react-native internal type (TS2742) - name it explicitly instead.
export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, disabled, accessibilityLabel, children, ...props }, ref) => {
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

    return (
      <AnimatedPressable
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled: !!disabled }}
        disabled={disabled}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        onPressIn={() => {
          scale.value = withTiming(0.97, { duration: 100 });
        }}
        onPressOut={() => {
          scale.value = withTiming(1, { duration: 100 });
        }}
        className={cn(buttonVariants({ variant, size, className }), disabled && "opacity-50")}
        style={animatedStyle}
        {...props}
      >
        {children}
      </AnimatedPressable>
    );
  }
);
Button.displayName = "Button";
```

- [ ] **Step 2: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no type errors

- [ ] **Step 3: Commit**

```bash
git add packages/native/src/components/button.tsx
git commit -m "feat(native): add Button"
```

---

### Task 12: `@kivora/native` — `Card` and barrel export

**Files:**
- Create: `packages/native/src/components/card.tsx`
- Create: `packages/native/src/index.ts`

**Interfaces:**
- Consumes: `cn` (from `@kivora/theme`).
- Produces: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (forwardRef `View`/`Text` components); `@kivora/native`'s full public barrel (`KivoraProvider`, `useKivoraTheme`, `useBreakpoint`, `Button`, `ButtonProps`, `Card` family, `lightTheme`, `darkTheme`, `breakpoints`) matching `@kivora/nextjs`'s barrel shape from Task 8.

- [ ] **Step 1: Implement the component**

`packages/native/src/components/card.tsx`:

```tsx
import * as React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export const Card = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("gap-1.5 rounded-xl border bg-card p-6", className)} {...props} />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("gap-1.5", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("text-lg font-semibold text-card-foreground", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("flex-row items-center", className)} {...props} />
));
CardFooter.displayName = "CardFooter";
```

- [ ] **Step 2: Write the barrel export**

`packages/native/src/index.ts`:

```ts
export { KivoraProvider, useKivoraTheme } from "./provider";
export type { KivoraProviderProps } from "./provider";
export { useBreakpoint } from "./hooks/use-breakpoint";
export { Button } from "./components/button";
export type { ButtonProps } from "./components/button";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./components/card";
export { lightTheme, darkTheme, breakpoints } from "@kivora/theme";
```

- [ ] **Step 3: Typecheck and build**

Run: `pnpm --filter @kivora/native typecheck && pnpm --filter @kivora/native build`
Expected: no type errors, `packages/native/dist/index.js`/`dist/index.cjs`/`dist/index.d.ts` exist.

- [ ] **Step 4: Commit**

```bash
git add packages/native/src/components/card.tsx packages/native/src/index.ts
git commit -m "feat(native): add Card and the package barrel export"
```

---

### Task 13: Storybook — Tailwind v4 migration and Button/Card stories

**Files:**
- Modify: `storybook/package.json`
- Modify: `storybook/.storybook/main.ts`
- Modify: `storybook/.storybook/preview.tsx`
- Modify: `storybook/src/styles/tailwind.css`
- Delete: `storybook/tailwind.config.ts`
- Delete: `storybook/postcss.config.cjs`
- Create: `storybook/src/stories/button.stories.tsx`
- Create: `storybook/src/stories/card.stories.tsx`

**Interfaces:**
- Consumes: `Button`, `ButtonProps`, `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (from `@kivora/nextjs`, Task 8).

- [ ] **Step 1: Update the Storybook package manifest**

In `storybook/package.json`, remove `autoprefixer`, `postcss`, and `tailwindcss` (`^3.4.18`) from `devDependencies`, and add:

```json
{
  "@tailwindcss/vite": "^4.1.0",
  "tailwindcss": "^4.1.0"
}
```

- [ ] **Step 2: Delete the obsolete Tailwind v3 config files**

```bash
git rm storybook/tailwind.config.ts storybook/postcss.config.cjs
```

- [ ] **Step 3: Register the Tailwind v4 Vite plugin**

`storybook/.storybook/main.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins ?? [];
    viteConfig.plugins.push(tailwindcss());
    return viteConfig;
  }
};

export default config;
```

- [ ] **Step 4: Update the global stylesheet**

`storybook/src/styles/tailwind.css`:

```css
@import "tailwindcss";
@import "@kivora/theme/tailwind.css";
```

- [ ] **Step 5: Fix the preview decorator to use the real `dark` class**

In `storybook/.storybook/preview.tsx`, replace the decorator's class expression (`kivora-dark`/`kivora-light` were a placeholder name from the initial scaffold, before the `dark` variant was implemented):

```tsx
  decorators: [
    (Story, context) => (
      <div
        className={`${context.globals.theme === "dark" ? "dark" : ""} min-h-screen bg-background text-foreground antialiased`}
      >
        <main className="p-6">
          <Story />
        </main>
      </div>
    )
  ]
```

- [ ] **Step 6: Write the Button stories**

`storybook/src/stories/button.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@kivora/nextjs";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Disabled: Story = { args: { disabled: true } };
```

- [ ] **Step 7: Write the Card stories**

`storybook/src/stories/card.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kivora/nextjs";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Kivora UI</CardTitle>
        <CardDescription>Componentes accesibles para web y native.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Contenido de ejemplo dentro de la card.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Aceptar</Button>
      </CardFooter>
    </Card>
  )
};
```

- [ ] **Step 8: Install, build Storybook, and check it manually**

Run: `pnpm install`
Run: `pnpm build:storybook`
Expected: build succeeds with no errors.

Run: `pnpm storybook`, open the local URL, open Button and Card, toggle the Theme toolbar between Light/Dark, and check the Accessibility panel (from `addon-a11y`) reports no violations on either story.

- [ ] **Step 9: Commit**

```bash
git add storybook
git commit -m "feat(storybook): migrate to Tailwind v4 and add Button/Card stories"
```

---

### Task 14: Documentation

**Files:**
- Create: `docs/architecture.md`
- Create: `docs/primitives.md`
- Create: `docs/theming.md`
- Create: `docs/accessibility.md`
- Create: `docs/responsive.md`
- Create: `docs/component-roadmap.md`
- Create: `docs/storybook.md`

**Interfaces:**
- Consumes: nothing (documentation only); describes the public API built in Tasks 1-13.

- [ ] **Step 1: Write `docs/architecture.md`**

```markdown
# Arquitectura

Kivora UI es un monorepo pnpm con tres paquetes publicables y un workspace
de Storybook:

- `@kivora/theme` — sin dependencia de React. Tokens (`tokens.ts`),
  breakpoints, tipos (`KivoraTheme`, `ButtonVariant`, `ButtonSize`, ...),
  helpers puros (`mergeTheme`, `cn`, `getBreakpoint`, `resolveColorMode`)
  y el partial `tailwind.css` con los tokens en formato Tailwind v4.
- `@kivora/nextjs` — `KivoraProvider`, `useBreakpoint`, `Button`, `Card`,
  construidos con Radix UI Primitives + `class-variance-authority` + `motion`,
  estilados con Tailwind v4.
- `@kivora/native` — mismos componentes y mismo provider, sobre
  `Pressable`/`View` + `class-variance-authority` + `react-native-reanimated`,
  estilados con NativeWind v5 (preview) contra el mismo Tailwind v4.
- `storybook` — documenta visualmente `@kivora/nextjs`.

## Flujo del theme

`KivoraProvider(colorMode, theme?, themeOverrides?)` resuelve el modo de
color (`resolveColorMode`), calcula el theme activo mergeando
`lightTheme`/`darkTheme` con `themeOverrides` (`mergeTheme`), y aplica el
estado visual: en web, clase `dark` + atributo `data-theme` en `<html>`;
en native, `nativewind`'s `useColorScheme().setColorScheme(...)`. Las clases Tailwind con
variants (`dark:`, `child:`, responsive) las resuelve el CSS compartido de
`@kivora/theme/tailwind.css`, no el Context.
```

- [ ] **Step 2: Write `docs/primitives.md`**

```markdown
# Primitivos

- **Web**: cuando un componente necesita comportamiento accesible complejo
  (foco, teclado, aria, portales), se construye sobre **Radix UI
  Primitives** (`@radix-ui/react-*`). `Button` usa `@radix-ui/react-slot`
  para soportar `asChild`. `Card` no necesita ningún primitivo — es
  contenido estático.
- **Native**: no existe Radix para React Native. Los componentes se
  construyen sobre los primitivos de React Native (`Pressable`, `View`,
  `Text`) con los atributos de accesibilidad puestos a mano
  (`accessibilityRole`, `accessibilityState`, `accessibilityLabel`).
- **Nomenclatura**: en ambos paquetes el nombre público del componente es
  el nombre "de diseño" (`Button`, `Card`), nunca el nombre del primitivo
  subyacente (`Pressable`, `View`, `Slot`).
```

- [ ] **Step 3: Write `docs/theming.md`**

```markdown
# Theming

## Tokens

`@kivora/theme` exporta `lightTheme`/`darkTheme` (objetos `KivoraTheme`)
y el mismo diseño en CSS (`@kivora/theme/tailwind.css`, tokens bajo
`@theme` y `.dark`). Los valores por defecto son la paleta pública de
shadcn en oklch — verificada AA — para que el aspecto por defecto de
Kivora sea reconocible sin depender del paquete `shadcn`.

## Modo claro/oscuro

```tsx
import { KivoraProvider } from "@kivora/nextjs";

<KivoraProvider colorMode="system">{children}</KivoraProvider>;
```

`colorMode` acepta `"light"`, `"dark"` o `"system"` (por defecto). En
`"system"`, el provider escucha `prefers-color-scheme` (web) /
`Appearance` (native) y aplica la clase `dark` (web) / el color scheme de
NativeWind (native).

## Themes custom

Kivora resuelve el color de cada token vía variables CSS
(`--color-primary`, ...). Para un theme con nombre propio (ej. `child`),
basta con redefinir esas variables bajo un selector `data-theme`, en el
CSS de la app consumidora:

```css
[data-theme="child"] {
  --color-primary: oklch(0.7 0.15 250);
  --color-primary-foreground: oklch(0.98 0 0);
}
```

```tsx
<KivoraProvider theme="child">{children}</KivoraProvider>
```

Si además quieres poder escribir utilidades condicionadas a ese theme más
allá de los tokens (ej. `child:shadow-lg`), declara el variant una vez en
tu CSS con la sintaxis de Tailwind v4:

```css
@custom-variant child (&:where([data-theme="child"], [data-theme="child"] *));
```

```tsx
<div className="child:text-blue-500">...</div>
```

## Override de tokens en runtime

Para casos que necesiten cambiar un token por JS (no solo por CSS):

```tsx
<KivoraProvider themeOverrides={{ color: { primary: "oklch(0.6 0.2 260)" } }}>
  {children}
</KivoraProvider>
```

## Configurar NativeWind v5 (preview) en la app consumidora

NativeWind v5 es la única versión que soporta Tailwind v4 y está en
**preview** (dist-tag `preview` en npm) — no es una dependencia estable de
producción todavía. `metro.config.js`:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

module.exports = withNativewind(getDefaultConfig(__dirname), {
  input: "./global.css"
});
```

`global.css`:

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";
@import "@kivora/theme/tailwind.css";
```

No hace falta configurar Babel: `withNativewind` ya aplica el plugin
necesario.
```

- [ ] **Step 4: Write `docs/accessibility.md`**

```markdown
# Accesibilidad (AA)

## Web

- Los componentes con interacción compleja se apoyan en Radix UI
  Primitives, que ya gestiona foco, teclado y atributos aria.
- `Button` mantiene el elemento `<button>` nativo (excepto con
  `asChild`, donde delega el rol al elemento hijo).
- El contraste de los tokens de color (`lightTheme`/`darkTheme`) sigue la
  paleta AA de shadcn.
- Storybook corre con `addon-a11y`: revisa el panel de accesibilidad en
  cada historia antes de dar un componente por terminado.

## Native

- `accessibilityRole="button"` y `accessibilityState={{ disabled }}` en
  `Button`.
- Área táctil mínima de 44×44dp: `Button` usa `hitSlop` para compensar
  los tamaños `sm`/`default` (36-40dp de alto visual).
- `accessibilityLabel` opcional en `Button` para los casos donde el
  contenido no es texto plano (iconos).

## Verificación manual pendiente

El render de `Button`/`Card` en native no tiene test automático en esta
fundación (ver `docs/storybook.md`): verifica accesibilidad con
VoiceOver/TalkBack en una app Expo/RN de ejemplo antes de publicar.
```

- [ ] **Step 5: Write `docs/responsive.md`**

```markdown
# Responsive

`@kivora/theme` define los breakpoints compartidos:

```ts
export const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };
```

- **Web**: usa las utilidades responsive de Tailwind (`md:`, `lg:`, que
  Tailwind v4 deriva de los mismos valores) o el hook `useBreakpoint()`
  para lógica condicional en JS.
- **Native**: `useBreakpoint()` (basado en `useWindowDimensions`) es la
  única vía — NativeWind también soporta `md:`/`lg:` si se prefiere CSS
  sobre JS condicional.
- La función pura `getBreakpoint(width)` (en `@kivora/theme`) es la
  fuente de verdad de ambos hooks y tiene tests unitarios.
```

- [ ] **Step 6: Write `docs/component-roadmap.md`**

```markdown
# Roadmap de componentes

## Fundación (este spec)

- `Button`
- `Card` (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`,
  `CardFooter`)

## Próximas iteraciones (a definir con el usuario, sin spec todavía)

Cada componente nuevo sigue el mismo patrón que Button/Card: contrato de
variant/size en `@kivora/theme`, implementación en `@kivora/nextjs`
(Radix + CVA + `motion`) y en `@kivora/native` (primitivos RN + CVA +
`react-native-reanimated`), historia de Storybook, y verificación AA.
Candidatos típicos de un sistema tipo shadcn: `Input`, `Label`,
`Checkbox`, `Switch`, `Select`, `Dialog`, `Tooltip`, `Tabs`, `Badge`,
`Avatar`.
```

- [ ] **Step 7: Write `docs/storybook.md`**

```markdown
# Storybook

```bash
pnpm storybook       # dev server, http://localhost:6006
pnpm build:storybook  # build estático
```

Storybook usa Tailwind v4 vía el plugin oficial `@tailwindcss/vite`
(`storybook/.storybook/main.ts`) y el mismo partial de
`@kivora/theme/tailwind.css` que consume `@kivora/nextjs`. El toolbar
"Theme" alterna la clase `dark` para probar modo claro/oscuro; el panel
de `addon-a11y` reporta violaciones de accesibilidad por historia.

## Limitación conocida

Storybook solo documenta `@kivora/nextjs`. `@kivora/native` no se
renderiza aquí porque eso requeriría `react-native-web`, fuera de
alcance de esta fundación — sus componentes se verifican manualmente en
una app Expo/RN de ejemplo.
```

- [ ] **Step 8: Commit**

```bash
git add docs/architecture.md docs/primitives.md docs/theming.md docs/accessibility.md docs/responsive.md docs/component-roadmap.md docs/storybook.md
git commit -m "docs: document architecture, theming, accessibility, responsive and roadmap"
```

---

### Task 15: Whole-monorepo verification

**Files:** none (verification only).

**Interfaces:** none — this task only runs the scripts produced by Tasks 1-14.

- [ ] **Step 1: Clean install**

Run: `pnpm install`
Expected: no errors, `pnpm-lock.yaml` unchanged from what Tasks 1-13 already committed (or updated if this is the first install after all package.json edits — commit it if so).

- [ ] **Step 2: Typecheck every package**

Run: `pnpm typecheck`
Expected: PASS for `@kivora/theme`, `@kivora/nextjs`, `@kivora/native`, `@kivora/storybook`.

- [ ] **Step 3: Run every test suite**

Run: `pnpm test`
Expected: PASS. `@kivora/theme` and `@kivora/nextjs` run real tests; `@kivora/native` and `@kivora/storybook` pass with `--passWithNoTests`.

- [ ] **Step 4: Build every package**

Run: `pnpm build`
Expected: PASS — `@kivora/theme`, `@kivora/nextjs`, `@kivora/native` all produce `dist/`.

- [ ] **Step 5: Build Storybook**

Run: `pnpm build:storybook`
Expected: PASS.

- [ ] **Step 6: Fix anything that surfaced, then commit if any file changed**

If any of the previous steps required a fix (e.g. a lockfile update), stage exactly those files and commit:

```bash
git add -A
git commit -m "chore: verify typecheck/test/build across the monorepo"
```

If nothing changed, skip this step — the foundation is done.
