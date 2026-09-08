# Card

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Contenedor estructurado con header, contenido y footer para módulos de UI.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`
- **Tipos de props:** —
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`
- **Tipos de props:** —
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen diario</CardTitle>
        <CardDescription>Pedidos y actividad del turno</CardDescription>
      </CardHeader>
      <CardContent>42 pedidos confirmados.</CardContent>
    </Card>
  );
}
```

### Native

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Text>Resumen diario</Text>
        </CardTitle>
        <CardDescription>
          <Text>Pedidos y actividad del turno</Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>42 pedidos confirmados.</Text>
      </CardContent>
    </Card>
  );
}
```

## Props

