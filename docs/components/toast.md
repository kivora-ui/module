# Toast

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Notificaciones efímeras y apilables para feedback no bloqueante.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { toast, Toaster } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { toast, Toaster } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `toast`, `Toaster`
- **Tipos de props:** `ToasterProps`
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `toast`, `Toaster`
- **Tipos de props:** `ToasterProps`
- **Tipos relacionados:** `ToastOptions`

## Ejemplos

### Web

```tsx
import { Button, Toast, ToastAction, ToastDescription, ToastTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Toast>
      <div>
        <ToastTitle>Subida completada</ToastTitle>
        <ToastDescription>El archivo ya está disponible.</ToastDescription>
      </div>
      <ToastAction altText="Ver">Ver</ToastAction>
    </Toast>
  );
}
```

### Native

```tsx
import { Toast, ToastDescription, ToastTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Toast>
      <ToastTitle>
        <Text>Subida completada</Text>
      </ToastTitle>
      <ToastDescription>
        <Text>El archivo ya está disponible.</Text>
      </ToastDescription>
    </Toast>
  );
}
```

## Props

### Web

#### `ToasterProps`

- **Definido en:** `packages/nextjs/src/components/toast.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof SonnerToaster>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `ToasterProps` (22)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `closeButton` | `boolean | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `containerAriaLabel` | `string | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `customAriaLabel` | `string | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `dir` | `"auto" | "ltr" | "rtl" | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `duration` | `number | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `expand` | `boolean | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `gap` | `number | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `hotkey` | `string[] | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `icons` | `ToastIcons | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `invert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `mobileOffset` | `Offset | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `offset` | `Offset | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `position` | `Position | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `richColors` | `boolean | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `style` | `React.CSSProperties | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `swipeDirections` | `SwipeDirection[] | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `theme` | `"light" | "dark" | "system" | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `toastOptions` | `ToastOptions | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |
| `visibleToasts` | `number | undefined` | sí | — | `node_modules/.pnpm/sonner@2.0.8_@types+react@19.2.18_4yqttomkvt5v6ohbvq5firtvpq/node_modules/sonner/dist/index.d.mts` |

</details>

### Native

#### `ToasterProps`

- **Definido en:** `packages/native/src/components/toast.tsx`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `channelId` | `string | undefined` | sí | — |
| `channelName` | `string | undefined` | sí | — |
| `smallIcon` | `string | undefined` | sí | Android drawable resource, falling back to the app launcher icon. |

