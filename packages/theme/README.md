# @kivora/theme

**La base de diseño compartida por Kivora para web y React Native.**

Temas claro y oscuro, tipos TypeScript, breakpoints y utilidades sin dependencias de React ni React Native. Este paquete contiene datos y helpers; los componentes se encuentran en **[@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs)** y **[@kivora/native](https://www.npmjs.com/package/@kivora/native)**.

## Instalación

```sh
pnpm add @kivora/theme
```

## Uso

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
darkTheme.color.background;            // color de fondo del tema oscuro
getBreakpoint(900);                    // 'tablet'
resolveColorMode('system', 'dark');     // 'dark'
cn('p-2', false && 'hidden', 'p-4');     // 'p-4'
```

`mergeTheme` conserva los valores no sobrescritos del tema base y devuelve un nuevo objeto cuando recibe overrides. No modifica estilos ni aplica un tema por sí solo.

## API

| Exportación | Función |
| --- | --- |
| `lightTheme`, `darkTheme` | Objetos con `color`, `radius`, `spacing` y `fontSize` |
| `mergeTheme(base, override?)` | Combinar un tema con valores parciales |
| `breakpoints` | `{ mobile: 0, tablet: 768, desktop: 1024 }` |
| `getBreakpoint(width)` | Resolver `mobile`, `tablet` o `desktop` a partir del ancho |
| `resolveColorMode(mode, systemMode)` | Resolver `light`, `dark` o `system` sin leer APIs del dispositivo |
| `cn(...inputs)` | Combinar clases condicionales y resolver conflictos con clsx y tailwind-merge |

También se exportan los tipos `KivoraTheme`, `KivoraColorTokens`, `ColorMode`, `DeepPartial` y `Breakpoint`, entre otros. Hay salidas ESM, CommonJS y declaraciones TypeScript.

Los breakpoints son valores numéricos: usa píxeles CSS en web y el ancho de layout de React Native en la app. El helper no instala listeners de resize.

## Estilos web con Tailwind CSS 4

```css
@import "tailwindcss";
@import "@kivora/theme/tailwind.css";
```

El archivo expone colores semánticos y estilos para modo oscuro. Si utilizas `@kivora/nextjs/styles.css`, ese import ya incluye el tema y Tailwind.

El objeto JavaScript y las variables CSS son representaciones separadas. Cambiar un objeto con `mergeTheme` no reescribe las variables del navegador. Personaliza el CSS para cambiar las clases de Tailwind.

## React Native

Los objetos de tema y los helpers se pueden consumir desde React Native. El archivo `tailwind.css` es para web: configura NativeWind y las variables de color siguiendo el README de [@kivora/native](https://www.npmjs.com/package/@kivora/native).

No se exporta un preset Tailwind ni un objeto llamado `tokens`. Usa `lightTheme`, `darkTheme` y las exportaciones documentadas arriba.

## El ecosistema Kivora

| Paquete | Uso |
| --- | --- |
| [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) | Componentes Next.js para escritorio, tablet y web móvil |
| [@kivora/native](https://www.npmjs.com/package/@kivora/native) | Componentes React Native, gestos y paneles inferiores |

El monorepo muestra ambos módulos en Farmacia Oliva, con ejemplos de gestión y venta en tienda. La base visual es compartida; cada renderer conserva las interacciones de su plataforma.
