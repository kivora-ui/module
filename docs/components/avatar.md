# Avatar

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Avatar con imagen y fallback para identidad de usuario o entidad.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `Avatar`, `AvatarFallback`, `AvatarImage`
- **Tipos de props:** —
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `Avatar`, `AvatarFallback`, `AvatarImage`
- **Tipos de props:** —
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@kivora/nextjs";

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="Ana Torres" />
      <AvatarFallback>AT</AvatarFallback>
    </Avatar>
  );
}
```

### Native

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Avatar>
      <AvatarImage source={{ uri: "https://example.com/avatar.jpg" }} accessibilityLabel="Ana Torres" />
      <AvatarFallback>
        <Text>AT</Text>
      </AvatarFallback>
    </Avatar>
  );
}
```

## Props

