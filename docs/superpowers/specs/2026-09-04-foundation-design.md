# Kivora UI — Fundación (theme, providers, Button/Card, Storybook)

Fecha: 2026-09-04
Estado: aprobado por el usuario, pendiente de plan de implementación

## Contexto

Kivora UI es un monorepo pnpm que publica dos librerías de componentes con el
mismo lenguaje visual: `@kivora/nextjs` (React + Tailwind) y `@kivora/native`
(React Native + nativewind), inspiradas en el enfoque de shadcn/ui pero **sin depender de
shadcn**. Comparten tokens y contratos a través de `@kivora/theme`.

El repo ya tiene scaffolding (package.json, tsconfig, Storybook, pnpm
workspace) para `@kivora/nextjs`, `@kivora/native` y `@kivora/storybook`, pero:

- `@kivora/theme` no existe como paquete (solo hay un symlink roto en
  `node_modules/@kivora/theme` apuntando a `packages/theme`, inexistente).
- `src/` de `nextjs` y `native` está vacío.
- Los docs referenciados en el README (`architecture.md`, `primitives.md`,
  `theming.md`, `accessibility.md`, `responsive.md`,
  `component-roadmap.md`, `storybook.md`) no existen.

Este spec cubre el primer sub-proyecto: la fundación completa (theme,
providers, tooling) validada con dos componentes de referencia (`Button` y
`Card`). El resto de componentes se especificarán en iteraciones
posteriores siguiendo el roadmap que este spec deja documentado.

## Decisiones de diseño

- **Tokens estilo shadcn/Radix**: escala semántica de color
  (`background`, `foreground`, `primary`, `muted`, `destructive`, ...) más
  radius y spacing, sin capa de primitivos crudos separada.
- **Contrato de props compartido en `@kivora/theme`**: los tipos de props
  por componente (`ButtonProps`, `CardProps`, `variant`, `size`, ...) viven
  en `@kivora/theme` junto a los tokens, de modo que `nextjs` y `native`
  implementan la misma superficie de API.
- **Nomenclatura**: los componentes se llaman igual que en shadcn/web
  (`Button`, `Card`, `Dialog`...) en **ambos** paquetes. En
  `@kivora/native` nunca se exponen nombres de primitivos RN
  (`Pressable`, `View`) como nombre público de componente.
- **Base de accesibilidad web**: Radix UI Primitives (`@radix-ui/react-*`)
  para foco/teclado/aria. Es una dependencia distinta de shadcn — shadcn
  también se apoya en Radix, pero copiar su código fuente no es lo mismo
  que depender de su paquete. No se usa el paquete `shadcn`/`shadcn-ui`.
- **Base de accesibilidad native**: no existe Radix para RN. Primitivos
  propios sobre `Pressable`/`View` con `accessibilityRole` /
  `accessibilityState` / tamaño táctil mínimo 44×44.
- **Motor de variantes**: `class-variance-authority` (CVA) +
  `tailwind-merge`, en ambos paquetes. En native funcionan igual porque
  solo generan strings de clases; quien las interpreta es NativeWind.
- **Tailwind CSS v4 (CSS-first) en toda la librería**: v4 elimina
  `tailwind.config.js`/`presets`/`addVariant` como forma principal de
  configurar — ahora se configura en CSS con `@theme`, `@custom-variant`
  y `@plugin`, procesados tras `@import "tailwindcss"`. `@kivora/theme`
  deja de exportar una función `kivoraTailwindPreset`; en su lugar
  publica un partial CSS (`@kivora/theme/tailwind.css`) con los tokens
  como `@theme { --color-primary: ...; }` y el variant `dark` predefinido:
  `@custom-variant dark (&:where(.dark, .dark *));`. Los consumidores
  hacen `@import "@kivora/theme/tailwind.css";` en su propio CSS global.
- **Multi-theme por variants de Tailwind**: además del override parcial
  de tokens (ver siguiente punto), el theming visual se expresa con
  variants de Tailwind al estilo `dark:text-white`. Un theme custom
  (nombre libre elegido por el consumidor, ej. `child`) se declara con
  una línea de CSS v4 en la app consumidora:
  `@custom-variant child (&:where([data-theme="child"], [data-theme="child"] *));`
  y se usa igual que `dark:`: `child:text-blue-500`. `docs/theming.md`
  documenta este patrón de una línea por theme custom. `KivoraProvider`
  recibe `theme?: string` (nombre del theme activo) y pone ese nombre
  como `data-theme` en la raíz (web) / variable de contexto que
  NativeWind traduce a la misma clase (native).
- **NativeWind v5 (preview) para poder usar Tailwind v4 en native**:
  NativeWind estable (v4) solo soporta Tailwind v3; la versión
  compatible con Tailwind v4 es NativeWind v5, publicada bajo el
  dist-tag `next` en npm (ej. `nativewind@next`, con preview builds
  tipo `5.0.0-preview.x` — verificar la última al implementar). Es una
  dependencia en preview, no estable; se documenta el riesgo en
  `docs/theming.md` y en el README (posible necesidad de subir de
  versión antes de la v1.0 de Kivora). v5 no requiere plugin de Babel
  (lo aplica `withNativewind` en `metro.config.js`) y usa un
  `global.css` con:
  ```css
  @import "tailwindcss/theme.css" layer(theme);
  @import "tailwindcss/preflight.css" layer(base);
  @import "tailwindcss/utilities.css";
  @import "nativewind/theme";
  @import "@kivora/theme/tailwind.css";
  ```
- **Override de tokens en runtime**: `KivoraProvider` acepta además
  `themeOverrides?: DeepPartial<KivoraTheme>`, un override parcial que
  se mergea sobre `lightTheme`/`darkTheme` para casos que necesiten
  cambiar valores por JS (no solo por clase) — ej. pasar el token a un
  componente nativo que no soporta className. Sin `theme` ni
  `themeOverrides`, se usa el default (light/dark).
- **Native usa NativeWind**: `@kivora/native` no tiene un motor de
  estilos propio (StyleSheet + resolver manual); usa `nativewind` v5
  para compilar el mismo `className` que en web sobre el mismo
  `@kivora/theme/tailwind.css`, así los componentes en ambos paquetes
  aceptan clases Tailwind idénticas y el mismo mecanismo de variants
  (`dark:`, `child:`, breakpoints responsive) funciona en las dos
  plataformas.
- **Animación**: `motion` en web, `react-native-reanimated` en native
  (NativeWind no sustituye la animación, solo el estilado estático).

## Arquitectura de paquetes

### `@kivora/theme` (nuevo paquete, sin dependencia de React)

- `src/tokens.ts` — color, spacing, radius, tipografía, shadow (valores
  crudos por escala semántica).
- `src/breakpoints.ts` — `mobile`, `tablet`, `desktop` (ya referenciado en
  README).
- `src/themes.ts` — `lightTheme`, `darkTheme` como objetos `KivoraTheme`
  que consumen los tokens.
- `src/types.ts` — `KivoraTheme`, `ColorMode`, `DeepPartial<T>`, y por
  componente: `ButtonProps`/`ButtonVariant`/`ButtonSize`,
  `CardProps`, etc. (contratos, no implementación).
- `src/merge.ts` — `mergeTheme(base, override)` (deep merge para los
  overrides parciales del provider).
- `src/index.ts` — barrel export.
- `src/tailwind.css` — partial Tailwind v4 (`@theme { ... }` generado a
  partir de `tokens.ts`/`themes.ts` + `@custom-variant dark ...`),
  publicado como export `./tailwind.css` en `package.json` para que
  `nextjs`, `native` y `storybook` hagan
  `@import "@kivora/theme/tailwind.css";`.
- Build: `tsup` para el JS/d.ts (sin JSX, ESM+CJS), copia directa de
  `src/tailwind.css` a `dist/tailwind.css` (sin build de PostCSS —
  es un partial que el consumidor procesa con su propio Tailwind).
  Sin dependencias de runtime.

### `@kivora/nextjs`

- `src/provider.tsx` — `KivoraProvider`: Context con `theme`,
  `colorMode`, `resolvedColorMode`; sincroniza clase `dark` en `<html>`;
  incluye script inline anti-flash (like shadcn) que lee
  `localStorage`/`prefers-color-scheme` antes de hidratar.
- `src/styles.css` — `@import "@kivora/theme/tailwind.css";` +
  `@import "tailwindcss";` + preflight/reset propio si hace falta. Es
  el único CSS que la app consumidora importa (`@kivora/nextjs/styles.css`,
  como ya documenta el README).
- `src/components/button.tsx` — un archivo, usa `@radix-ui/react-slot` o
  primitivo Radix pertinente + CVA + `motion`.
- `src/components/card.tsx` — un archivo, primitivo propio (Card no
  necesita Radix, es contenido estático) + CVA.
- `src/hooks/use-breakpoint.ts`.
- `src/index.ts` — barrel export (provider, tokens re-exportados,
  componentes).

### `@kivora/native`

- Usa `nativewind` v5 preview (peerDependency: `nativewind: "next"`,
  `react-native-css`, `tailwindcss: ">=4.1"`) para compilar `className`
  contra el mismo Tailwind v4 que web — no hay motor de estilos propio.
- `src/provider.tsx` — `KivoraProvider`: Context, escucha
  `Appearance.addChangeListener` cuando `colorMode==="system"`; aplica
  `dark`/`data-theme` a través de NativeWind (`colorScheme.set(...)` y
  clase/atributo equivalentes en el nodo raíz) en vez de manipular
  `<html>`.
- `src/hooks/use-kivora-theme.ts`, `src/hooks/use-breakpoint.ts` (ya
  referenciados en README, usa `Dimensions`/`useWindowDimensions`).
- `src/components/button.tsx` — un archivo, `Pressable` + `Animated`
  (reanimated) para estado de presión, `accessibilityRole="button"`,
  variantes vía CVA + `className` (NativeWind), igual patrón que en web.
- `src/components/card.tsx` — un archivo, `View` con `className`
  (NativeWind) + CVA.
- `src/index.ts` — barrel export.
- La app consumidora (Expo/RN) necesita `metro.config.js` con
  `withNativewind` (de `nativewind/metro`), un `global.css` con los
  imports de Tailwind v4 + `nativewind/theme` + `@kivora/theme/tailwind.css`
  (ver bloque en "Decisiones de diseño"), y `postcss.config.mjs`. Se
  documenta paso a paso en `docs/theming.md`, incluida la nota de que
  NativeWind v5 es preview.

### `storybook`

- `src/stories/button.stories.tsx`, `src/stories/card.stories.tsx` — un
  archivo por componente, historias por variante/size/estado
  (disabled, loading si aplica), addon-a11y activo para verificar AA.
- Stories documentan solo `@kivora/nextjs` (React Native no renderiza en
  Storybook web sin `react-native-web`; fuera de alcance de esta
  fundación — se deja anotado en `docs/storybook.md` como limitación
  conocida, no se introduce `react-native-web` en este spec).
- Con Tailwind v4 + Vite, se usa el plugin oficial `@tailwindcss/vite`
  en `main.ts` en vez de `postcss.config.cjs` + `tailwind.config.ts`
  (que quedan obsoletos con v4 y se eliminan). `storybook/src/styles/tailwind.css`
  pasa a `@import "tailwindcss"; @import "@kivora/theme/tailwind.css";`.
  `preview.tsx` usa la clase `dark` (no `kivora-dark`/`kivora-light`,
  que era un nombre provisional del scaffold inicial) para quedar
  alineado con el variant `dark` definido en `@kivora/theme/tailwind.css`.

## Flujo de datos del theme

```
KivoraProvider(colorMode, theme?, themeOverrides?)
  → resolvedColorMode = colorMode === "system" ? matchMedia/Appearance : colorMode
  → activeTheme = mergeTheme(resolvedColorMode === "dark" ? darkTheme : lightTheme, themeOverrides)
  → Context.Provider value={{ theme: activeTheme, resolvedColorMode, themeName }}
  → (web) pone clase "dark" (si aplica) y data-theme="<theme>" en <html>
    vía useEffect + script anti-flash inline
  → (native) aplica el mismo estado vía NativeWind (colorScheme + variable
    de theme) sobre el nodo raíz
```

Las clases Tailwind con variants (`dark:text-white`, `child:text-blue-500`,
responsive) se resuelven en build-time por el partial CSS compartido de
`@kivora/theme` — el Context solo decide **qué** clase/atributo activar
(`dark`, `data-theme="child"`), no reimplementa la resolución de estilos.

`useKivoraTheme()` expone `{ theme, resolvedColorMode }` en ambos
paquetes. `useBreakpoint()` deriva el breakpoint activo a partir de
`breakpoints` de `@kivora/theme` y el ancho de viewport/ventana.

## Accesibilidad y responsive

- Web: Radix cubre foco/teclado/aria/roles. Contraste de color AA
  verificado en los tokens de `lightTheme`/`darkTheme` (documentado en
  `docs/accessibility.md`). Storybook `addon-a11y` corre en CI/local para
  cada historia.
- Native: `accessibilityRole`, `accessibilityState` (`disabled`,
  `busy`), área táctil mínima 44×44dp, `accessibilityLabel` cuando el
  contenido no es texto plano.
- Responsive: mismos breakpoints (`mobile`/`tablet`/`desktop`) en
  `@kivora/theme`; en web vía utilidades Tailwind responsive, en native
  vía `useBreakpoint()`.

## Testing

- `vitest` ya configurado por paquete (`test: vitest run
--passWithNoTests`). Para la fundación: tests unitarios de
  `mergeTheme`/`cn` (en `@kivora/theme`) y render/a11y básico de
  `Button`/`Card` con `@testing-library/react` en `@kivora/nextjs`.
  En `@kivora/native` no se usa `@testing-library/react-native`:
  requiere el preset de Jest de React Native (mocks de `NativeModules`,
  `Appearance`, etc.) que este monorepo no tiene porque usa Vitest en
  todos los paquetes; montar ese preset queda fuera de alcance de la
  fundación. Los tests de `@kivora/native` cubren solo la lógica pura
  extraída (`getBreakpoint`, reexport de `mergeTheme`/`cn`); el render
  de `Button`/`Card` en native se verifica manualmente en una app
  Expo/RN de ejemplo (limitación documentada en `docs/storybook.md`,
  junto a la ya existente de que Storybook tampoco cubre native).
- Storybook con `addon-a11y` sirve como verificación visual/a11y
  complementaria, no sustituye los tests unitarios.

## Build y publish

- Cada paquete (`@kivora/theme`, `@kivora/nextjs`, `@kivora/native`) se
  compila con `tsup` (ya configurado en `nextjs`/`native`; se añade en
  `theme`) y se publica por separado en npm bajo el scope `@kivora`
  (`publishConfig.access: public`, ya presente).
- Orden de build/publish: `theme` primero (dependencia de los otros dos).

## Documentación

Se crean/rellenan los docs ya listados en el README:

- `docs/architecture.md` — estructura de paquetes y flujo de theme (este
  spec resumido).
- `docs/primitives.md` — qué primitivo de base usa cada componente
  (Radix en web / propio en native).
- `docs/theming.md` — tokens, `KivoraProvider`, overrides parciales,
  cómo declarar y usar un theme custom vía `dark:`/`child:`-style
  variants, y cómo configurar NativeWind en la app consumidora.
- `docs/accessibility.md` — checklist AA por plataforma.
- `docs/responsive.md` — breakpoints y su uso en cada plataforma.
- `docs/component-roadmap.md` — Button y Card como fundación; lista de
  próximos componentes a especificar en iteraciones futuras (a definir
  con el usuario en la siguiente iteración, no en este spec).
- `docs/storybook.md` — cómo correr Storybook, limitación conocida de
  que no cubre `@kivora/native` en esta fundación.

## Fuera de alcance de este spec

- Componentes más allá de `Button`/`Card`.
- `react-native-web` / Storybook para native.
- CI/CD de publicación automática a npm (se documenta el flujo manual;
  automatizarlo es una iteración futura).
- Internacionalización / RTL.
