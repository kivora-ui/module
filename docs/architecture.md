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
  estilados con NativeWind 4 y Tailwind 3.4.19. La receta Community CLI
  0.87.1 usa Reanimated 4.6 y Worklets 0.12; ver [instalación](native-installation.md).
- `storybook` — documenta visualmente `@kivora/nextjs`.

## Flujo del theme

`KivoraProvider(colorMode, theme?, themeOverrides?)` resuelve el modo de
color (`resolveColorMode`), calcula el theme activo mergeando
`lightTheme`/`darkTheme` con `themeOverrides` (`mergeTheme`), y aplica el
estado visual: en web, clase `dark` + atributo `data-theme` en `<html>`;
en native, `nativewind`'s `useColorScheme().setColorScheme(...)`. Las clases Tailwind con
variants (`dark:`, `child:`, responsive) las resuelve el CSS compartido de
`@kivora/theme/tailwind.css`, no el Context.
