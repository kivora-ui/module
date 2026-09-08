# Date Picker

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Selector de fecha o rango con presets y composición sobre calendario.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { DatePicker } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { DatePicker } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `DatePicker`
- **Tipos de props:** `DatePickerProps`
- **Tipos relacionados:** `DatePickerMode`, `DatePickerPreset`, `DatePickerValue`, `DatePickerView`

### Native

- **Componentes y helpers visuales:** `DatePicker`
- **Tipos de props:** `DatePickerProps`
- **Tipos relacionados:** `DatePickerMode`, `DatePickerPreset`, `DatePickerValue`

## Ejemplos

### Web

```tsx
import { DatePicker } from "@kivora/nextjs";
import { useState } from "react";

export function Example() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return <DatePicker value={value} onValueChange={setValue} />;
}
```

### Native

```tsx
import { DatePicker } from "@kivora/native";
import { useState } from "react";

export function Example() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return <DatePicker value={value} onValueChange={setValue} />;
}
```

## Props

### Web

#### `DatePickerProps`

- **Definido en:** `packages/nextjs/src/components/date-picker.tsx`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `calendarClassName` | `string | undefined` | sí | — |
| `className` | `string | undefined` | sí | — |
| `defaultValue` | `Date | DateRange | undefined` | sí | — |
| `disabled` | `boolean | undefined` | sí | — |
| `locale` | `Locale | undefined` | sí | — |
| `localeCode` | `string | undefined` | sí | — |
| `mode` | `DatePickerMode | undefined` | sí | — |
| `numberOfMonths` | `number | undefined` | sí | — |
| `onValueChange` | `((date: DatePickerValue) => void) | undefined` | sí | — |
| `placeholder` | `string | undefined` | sí | — |
| `presets` | `DatePickerPreset[] | undefined` | sí | — |
| `showFooter` | `boolean | undefined` | sí | — |
| `showPresets` | `boolean | undefined` | sí | — |
| `startView` | `DatePickerView | undefined` | sí | — |
| `timeFormat` | `"12h" | "24h" | undefined` | sí | Hour cycle used by both the editor and the formatted value. Defaults to 12h. |
| `value` | `Date | DateRange | undefined` | sí | — |
| `withTime` | `boolean | undefined` | sí | — |

### Native

#### `DatePickerProps`

- **Definido en:** `packages/native/src/components/date-picker.tsx`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `calendarClassName` | `string | undefined` | sí | — |
| `className` | `string | undefined` | sí | — |
| `defaultValue` | `Date | DateRange | undefined` | sí | — |
| `disabled` | `boolean | undefined` | sí | — |
| `localeCode` | `string | undefined` | sí | — |
| `maxDate` | `Date | undefined` | sí | — |
| `minDate` | `Date | undefined` | sí | — |
| `mode` | `DatePickerMode | undefined` | sí | — |
| `onValueChange` | `((value: DatePickerValue) => void) | undefined` | sí | — |
| `placeholder` | `string | undefined` | sí | — |
| `presets` | `DatePickerPreset[] | undefined` | sí | — |
| `showFooter` | `boolean | undefined` | sí | — |
| `showPresets` | `boolean | undefined` | sí | — |
| `timeFormat` | `"12h" | "24h" | undefined` | sí | — |
| `value` | `Date | DateRange | undefined` | sí | — |
| `withTime` | `boolean | undefined` | sí | — |

