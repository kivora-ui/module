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

## Configurar NativeWind 4 en Community CLI

La receta actual usa NativeWind 4.2.6 y Tailwind 3.4.19. Para RN 0.87.1,
Reanimated 4.6.0 y Worklets 0.12.2. No importar el partial Tailwind 4 del
paquete Theme en este pipeline. Configurar los colores con variables RGB
y aplicar vars() a la vista ra?z, junto a KivoraProvider.

Consulta [instalaci?n nativa](native-installation.md) para Babel, Metro,
tipos CSS y providers, y el [README Native](../packages/native/README.md)
para la lista completa de colores sem?nticos.
