# Icon

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Icono Lucide con tamaño, color, grosor de trazo y etiqueta accesible. Importa el icono de Lucide y pásalo mediante icon; omite label si es decorativo.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { Icon } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { Icon } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `Icon`
- **Tipos de props:** `IconProps`
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `Icon`
- **Tipos de props:** `IconProps`
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { Icon } from "@kivora/nextjs";
import { Check } from "lucide-react";

export function Example() {
  return <Icon icon={Check} size={24} color="#16a34a" strokeWidth={2} label="Completado" />;
}
```

### Native

```tsx
import { Icon } from "@kivora/native";
import Check from "lucide-react-native/icons/check";

// Renderiza dentro de KivoraProvider para adaptar el color al modo claro u oscuro.
export function Example() {
  return <Icon icon={Check} size={24} color="#16a34a" strokeWidth={2} label="Completado" />;
}
```

## Props

### Web

#### `IconProps`

- **Definido en:** `packages/nextjs/src/components/icon.tsx`
- **Composición base:** `Omit<LucideProps, "ref">`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `icon` | `React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>` | no | Lucide component to render, imported from lucide-react. |
| `label` | `string | undefined` | sí | Accessible name. Omit for decorative icons. |

<details>
<summary>Props heredadas o compuestas de `IconProps` (489)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `absoluteStrokeWidth` | `boolean | undefined` | sí | — | `node_modules/.pnpm/lucide-react@1.40.0_react@19.2.8/node_modules/lucide-react/dist/lucide-react.d.ts` |
| `accentHeight` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accumulate` | `"none" | "sum" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `additive` | `"sum" | "replace" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `alignmentBaseline` | `"inherit" | "auto" | "alphabetic" | "hanging" | "ideographic" | "mathematical" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `allowReorder` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `alphabetic` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `amplitude` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `arabicForm` | `"initial" | "medial" | "terminal" | "isolated" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-activedescendant` | `string | undefined` | sí | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-atomic` | `Booleanish | undefined` | sí | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-autocomplete` | `"none" | "list" | "inline" | "both" | undefined` | sí | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-braillelabel` | `string | undefined` | sí | Defines a string value that labels the current element, which is intended to be converted into Braille. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-brailleroledescription` | `string | undefined` | sí | Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-busy` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-checked` | `boolean | "true" | "false" | "mixed" | undefined` | sí | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-colcount` | `number | undefined` | sí | Defines the total number of columns in a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-colindex` | `number | undefined` | sí | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-colindextext` | `string | undefined` | sí | Defines a human readable text alternative of aria-colindex. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-colspan` | `number | undefined` | sí | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-controls` | `string | undefined` | sí | Identifies the element (or elements) whose contents or presence are controlled by the current element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-current` | `boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined` | sí | Indicates the element that represents the current item within a container or set of related elements. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-describedby` | `string | undefined` | sí | Identifies the element (or elements) that describes the object. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-description` | `string | undefined` | sí | Defines a string value that describes or annotates the current element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-details` | `string | undefined` | sí | Identifies the element that provides a detailed, extended description for the object. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-disabled` | `Booleanish | undefined` | sí | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-dropeffect` | `"link" | "none" | "copy" | "execute" | "move" | "popup" | undefined` | sí | Indicates what functions can be performed when a dragged object is released on the drop target. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-errormessage` | `string | undefined` | sí | Identifies the element that provides an error message for the object. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-expanded` | `Booleanish | undefined` | sí | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-flowto` | `string | undefined` | sí | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-grabbed` | `Booleanish | undefined` | sí | Indicates an element's "grabbed" state in a drag-and-drop operation. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-haspopup` | `boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined` | sí | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-hidden` | `Booleanish | undefined` | sí | Indicates whether the element is exposed to an accessibility API. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-invalid` | `boolean | "true" | "false" | "grammar" | "spelling" | undefined` | sí | Indicates the entered value does not conform to the format expected by the application. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-keyshortcuts` | `string | undefined` | sí | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-label` | `string | undefined` | sí | Defines a string value that labels the current element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-labelledby` | `string | undefined` | sí | Identifies the element (or elements) that labels the current element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-level` | `number | undefined` | sí | Defines the hierarchical level of an element within a structure. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-live` | `"off" | "assertive" | "polite" | undefined` | sí | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-modal` | `Booleanish | undefined` | sí | Indicates whether an element is modal when displayed. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-multiline` | `Booleanish | undefined` | sí | Indicates whether a text box accepts multiple lines of input or only a single line. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-multiselectable` | `Booleanish | undefined` | sí | Indicates that the user may select more than one item from the current selectable descendants. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-orientation` | `"horizontal" | "vertical" | undefined` | sí | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-owns` | `string | undefined` | sí | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-placeholder` | `string | undefined` | sí | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-posinset` | `number | undefined` | sí | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-pressed` | `boolean | "true" | "false" | "mixed" | undefined` | sí | Indicates the current "pressed" state of toggle buttons. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-readonly` | `Booleanish | undefined` | sí | Indicates that the element is not editable, but is otherwise operable. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-relevant` | `"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined` | sí | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-required` | `Booleanish | undefined` | sí | Indicates that user input is required on the element before a form may be submitted. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-roledescription` | `string | undefined` | sí | Defines a human-readable, author-localized description for the role of an element. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-rowcount` | `number | undefined` | sí | Defines the total number of rows in a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-rowindex` | `number | undefined` | sí | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-rowindextext` | `string | undefined` | sí | Defines a human readable text alternative of aria-rowindex. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-rowspan` | `number | undefined` | sí | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-selected` | `Booleanish | undefined` | sí | Indicates the current "selected" state of various widgets. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-setsize` | `number | undefined` | sí | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-sort` | `"none" | "ascending" | "descending" | "other" | undefined` | sí | Indicates if items in a table or grid are sorted in ascending or descending order. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-valuemax` | `number | undefined` | sí | Defines the maximum allowed value for a range widget. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-valuemin` | `number | undefined` | sí | Defines the minimum allowed value for a range widget. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-valuenow` | `number | undefined` | sí | Defines the current value for a range widget. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `aria-valuetext` | `string | undefined` | sí | Defines the human readable text alternative of aria-valuenow for a range widget. | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `ascent` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `attributeName` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `attributeType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoReverse` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `azimuth` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `baseFrequency` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `baselineShift` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `baseProfile` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `bbox` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `begin` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `bias` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `by` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `calcMode` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `capHeight` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `clip` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `clipPath` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `clipPathUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `clipRule` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `colorInterpolation` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `colorInterpolationFilters` | `"inherit" | "auto" | "sRGB" | "linearRGB" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `colorProfile` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `colorRendering` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentScriptType` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentStyleType` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `crossOrigin` | `"" | "anonymous" | "use-credentials" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `cursor` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `cx` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `cy` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `d` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `decelerate` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `descent` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `diffuseConstant` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `direction` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `display` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `divisor` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dominantBaseline` | `"inherit" | "auto" | "alphabetic" | "hanging" | "ideographic" | "mathematical" | "text-before-edge" | "middle" | "central" | "text-after-edge" | "use-script" | "no-change" | "reset-size" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dur` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dx` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dy` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `edgeMode` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `elevation` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enableBackground` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `end` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exponent` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `externalResourcesRequired` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fill` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fillOpacity` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fillRule` | `"inherit" | "nonzero" | "evenodd" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `filter` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `filterRes` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `filterUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `floodColor` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `floodOpacity` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `focusable` | `Booleanish | "auto" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontFamily` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontSize` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontSizeAdjust` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontStretch` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontStyle` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontVariant` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fontWeight` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `format` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fr` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `from` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fx` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `fy` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `g1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `g2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `glyphName` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `glyphOrientationHorizontal` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `glyphOrientationVertical` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `glyphRef` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `gradientTransform` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `gradientUnits` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hanging` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `height` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `horizAdvX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `horizOriginX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `href` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `ideographic` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `imageRendering` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `in` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `in2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `intercept` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `k` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `k1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `k2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `k3` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `k4` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `kernelMatrix` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `kernelUnitLength` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `kerning` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `keyPoints` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `keySplines` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `keyTimes` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lengthAdjust` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `letterSpacing` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lightingColor` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `limitingConeAngle` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `local` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerEnd` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerHeight` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerMid` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerStart` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `markerWidth` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `mask` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `maskContentUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `maskUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `mathematical` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `max` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `media` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `method` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `min` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `mode` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `name` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `numOctaves` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `offset` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<SVGSVGElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<SVGSVGElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<SVGSVGElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `opacity` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `operator` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `order` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `orient` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `orientation` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `origin` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `overflow` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `overlinePosition` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `overlineThickness` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `paintOrder` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `panose1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `path` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `pathLength` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `patternContentUnits` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `patternTransform` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `patternUnits` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `pointerEvents` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `points` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `pointsAtX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `pointsAtY` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `pointsAtZ` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `preserveAlpha` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `preserveAspectRatio` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `primitiveUnits` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `r` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radius` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `refX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `refY` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `renderingIntent` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `repeatCount` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `repeatDur` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `requiredExtensions` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `requiredFeatures` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `restart` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `result` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rotate` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rx` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `ry` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `scale` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `seed` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `shapeRendering` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `size` | `string | number | undefined` | sí | — | `node_modules/.pnpm/lucide-react@1.40.0_react@19.2.8/node_modules/lucide-react/dist/lucide-react.d.ts` |
| `slope` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spacing` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `specularConstant` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `specularExponent` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `speed` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spreadMethod` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `startOffset` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stdDeviation` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stemh` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stemv` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stitchTiles` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stopColor` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stopOpacity` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strikethroughPosition` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strikethroughThickness` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `string` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `stroke` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeDasharray` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeDashoffset` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeLinecap` | `"inherit" | "butt" | "round" | "square" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeLinejoin` | `"inherit" | "round" | "miter" | "bevel" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeMiterlimit` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeOpacity` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `strokeWidth` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `surfaceScale` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `systemLanguage` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tableValues` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `target` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `targetX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `targetY` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `textAnchor` | `"inherit" | "start" | "end" | "middle" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `textDecoration` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `textLength` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `textRendering` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `to` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `transform` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `type` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `u1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `u2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `underlinePosition` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `underlineThickness` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unicode` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unicodeBidi` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unicodeRange` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unitsPerEm` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vAlphabetic` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `values` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vectorEffect` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `version` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vertAdvY` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vertOriginX` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vertOriginY` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vHanging` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vIdeographic` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `viewBox` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `viewTarget` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `visibility` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vMathematical` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `width` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `widths` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `wordSpacing` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `writingMode` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `x` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `x1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `x2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xChannelSelector` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xHeight` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkActuate` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkArcrole` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkHref` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkRole` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkShow` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkTitle` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xlinkType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xmlBase` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xmlLang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xmlns` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xmlnsXlink` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `xmlSpace` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `y` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `y1` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `y2` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `yChannelSelector` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `z` | `string | number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `zoomAndPan` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

### Native

#### `IconProps`

- **Definido en:** `packages/native/src/components/icon.tsx`
- **Composición base:** `Omit<LucideProps, "ref">`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `icon` | `React.ForwardRefExoticComponent<LucideProps>` | no | Lucide component to render, imported from lucide-react-native. |
| `label` | `string | undefined` | sí | Accessible name. Omit for decorative icons. |

<details>
<summary>Props heredadas o compuestas de `IconProps` (185)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `absoluteStrokeWidth` | `boolean | undefined` | sí | — | `node_modules/.pnpm/lucide-react-native@1.40.0_react-_ehirodzc2gwl7nhesvqdyohs3m/node_modules/lucide-react-native/dist/types/lucide-react-native.d.ts` |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `accessibilityLabelledBy` | `string | string[] | undefined` | sí | Identifies the element that labels the element it is applied to. When the assistive technology focuses on the component with this props, the text is read aloud. The value should should match the nativeID of the related element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLanguage` | `string | undefined` | sí | Indicates to the accessibility services that the UI component is in a specific language. The provided string should be formatted following the BCP 47 specification (https://www.rfc-editor.org/info/bcp47). | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLargeContentTitle` | `string | undefined` | sí | When `accessibilityShowsLargeContentViewer` is set, this string will be used as title for the large content viewer. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLiveRegion` | `"none" | "polite" | "assertive" | undefined` | sí | Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityRespondsToUserInteraction` | `boolean | undefined` | sí | Blocks the user from interacting with the component through keyboard while still allowing screen reader to interact with it if this View is still accessible. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityRole` | `string | undefined` | sí | Indicates to accessibility services to treat UI component like a specific role. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityShowsLargeContentViewer` | `boolean | undefined` | sí | A Boolean value that indicates whether or not to show the item in the large content viewer. Available on iOS 13.0+ | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityState` | `AccessibilityState | undefined` | sí | Indicates to accessibility services that UI Component is in a specific State. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityValue` | `Readonly<{ min?: number | undefined; max?: number | undefined; now?: number | undefined; text?: string | undefined; }> | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityViewIsModal` | `boolean | undefined` | sí | A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is `false`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessible` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `aria-busy` | `boolean | undefined` | sí | alias for accessibilityState see https://reactnative.dev/docs/accessibility#accessibilitystate | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-checked` | `boolean | "mixed" | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-expanded` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-hidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. See https://reactnative.dev/docs/view#aria-hidden | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-label` | `string | undefined` | sí | Alias for accessibilityLabel https://reactnative.dev/docs/view#accessibilitylabel https://github.com/facebook/react-native/issues/34424 | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-labelledby` | `string | undefined` | sí | Identifies the element that labels the element it is applied to. When the assistive technology focuses on the component with this props, the text is read aloud. The value should should match the nativeID of the related element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-live` | `"polite" | "assertive" | "off" | undefined` | sí | Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-modal` | `boolean | undefined` | sí | The aria-modal attribute indicates content contained within a modal with aria-modal="true" should be accessible to the user. Default is `false`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-selected` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-valuemax` | `number | undefined` | sí | alias for accessibilityState It represents textual description of a component's value, or for range-based components, such as sliders and progress bars. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-valuemin` | `number | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-valuenow` | `number | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `aria-valuetext` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/G.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `clipPath` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `clipRule` | `FillRule | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `color` | `____ColorValue_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `data-testid` | `string | undefined` | sí | — | `node_modules/.pnpm/lucide-react-native@1.40.0_react-_ehirodzc2gwl7nhesvqdyohs3m/node_modules/lucide-react-native/dist/types/lucide-react-native.d.ts` |
| `delayLongPress` | `number | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `delayPressIn` | `number | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `delayPressOut` | `number | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `fill` | `____ColorValue_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fillOpacity` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fillRule` | `FillRule | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `filter` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `font` | `FontObject | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontFamily` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontFeatureSettings` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontSize` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontStretch` | `FontStretch | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontStyle` | `FontStyle | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontVariant` | `FontVariant | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontVariantLigatures` | `FontVariantLigatures | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontVariationSettings` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `fontWeight` | `FontWeight | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `height` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `hitSlop` | `number | Readonly<{ bottom?: number | undefined; left?: number | undefined; right?: number | undefined; top?: number | undefined; }> | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `kerning` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `letterSpacing` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `marker` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `markerEnd` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `markerMid` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `markerStart` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `mask` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `nativeBackgroundAndroid` | `AndroidDrawable | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nativeForegroundAndroid` | `AndroidDrawable | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nativeID` | `string | undefined` | sí | Used to locate this view from native classes. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#nativeid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `needsOffscreenAlphaCompositing` | `boolean | undefined` | sí | Whether this `View` needs to be rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (`false`) falls back to drawing the component and its children with reduced alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the `View` you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping `View`s, or text and a background). Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nextFocusDown` | `number | undefined` | sí | Designates the next view to receive focus when the user navigates down. The value is the `nativeID` of the target view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nextFocusForward` | `number | undefined` | sí | Designates the next view to receive focus when the user navigates forward. The value is the `nativeID` of the target view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nextFocusLeft` | `number | undefined` | sí | Designates the next view to receive focus when the user navigates left. The value is the `nativeID` of the target view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nextFocusRight` | `number | undefined` | sí | Designates the next view to receive focus when the user navigates right. The value is the `nativeID` of the target view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `nextFocusUp` | `number | undefined` | sí | Designates the next view to receive focus when the user navigates up. The value is the `nativeID` of the target view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onAccessibilityAction` | `((event: AccessibilityActionEvent) => unknown) | undefined` | sí | When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onAccessibilityEscape` | `(() => unknown) | undefined` | sí | When `accessible` is `true`, the system will invoke this function when the user performs the escape gesture. See https://reactnative.dev/docs/view#onaccessibilityescape | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onAccessibilityTap` | `(() => unknown) | undefined` | sí | When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture. See https://reactnative.dev/docs/view#onaccessibilitytap | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onBlur` | `((event: BlurEvent) => void) | undefined` | sí | Callback that is called when the view is blurred. Note: This will only be called if the view is focusable. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onBlurCapture` | `((event: BlurEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onClick` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onClickCapture` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onFocus` | `((event: FocusEvent) => void) | undefined` | sí | Callback that is called when the view is focused. Note: This will only be called if the view is focusable. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onFocusCapture` | `((event: FocusEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onGotPointerCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onGotPointerCaptureCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onKeyDown` | `((event: KeyDownEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onKeyDownCapture` | `((event: KeyDownEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onKeyUp` | `((event: KeyUpEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onKeyUpCapture` | `((event: KeyUpEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onLayout` | `((event: LayoutChangeEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `onLongPress` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `onLostPointerCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onLostPointerCaptureCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onMagicTap` | `(() => unknown) | undefined` | sí | When `accessible` is `true`, the system will invoke this function when the user performs the magic tap gesture. See https://reactnative.dev/docs/view#onmagictap | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onMouseEnter` | `((event: MouseEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onMouseLeave` | `((event: MouseEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onMoveShouldSetResponder` | `((e: GestureResponderEvent) => boolean) | undefined` | sí | Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder. `View.props.onMoveShouldSetResponder: (event) => [true \| false]`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onmoveshouldsetresponder | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onMoveShouldSetResponderCapture` | `((e: GestureResponderEvent) => boolean) | undefined` | sí | If a parent `View` wants to prevent a child `View` from becoming responder on a move, it should have this handler which returns `true`. `View.props.onMoveShouldSetResponderCapture: (event) => [true \| false]`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onMoveShouldsetrespondercapture | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerCancel` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerCancelCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerDown` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerDownCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerEnter` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerEnterCapture` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerLeave` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerLeaveCapture` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerMove` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerMoveCapture` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerOut` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerOutCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerOver` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerOverCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerUp` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPointerUpCapture` | `((e: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onPress` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `onPressIn` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `onPressOut` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `onResponderEnd` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderGrant` | `((e: GestureResponderEvent) => void | boolean) | undefined` | sí | The View is now responding for touch events. This is the time to highlight and show the user what is happening. `View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic touch event as described above. Return true from this callback to prevent any other native components from becoming responder until this responder terminates (Android-only). See https://reactnative.dev/docs/view#onrespondergrant | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderMove` | `((e: GestureResponderEvent) => void) | undefined` | sí | The user is moving their finger. `View.props.onResponderMove: (event) => {}`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onrespondermove | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderReject` | `((e: GestureResponderEvent) => void) | undefined` | sí | Another responder is already active and will not release it to that `View` asking to be the responder. `View.props.onResponderReject: (event) => {}`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onresponderreject | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderRelease` | `((e: GestureResponderEvent) => void) | undefined` | sí | Fired at the end of the touch. `View.props.onResponderRelease: (event) => {}`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onresponderrelease | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderStart` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderTerminate` | `((e: GestureResponderEvent) => void) | undefined` | sí | The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS) `View.props.onResponderTerminate: (event) => {}`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onresponderterminate | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onResponderTerminationRequest` | `((e: GestureResponderEvent) => boolean) | undefined` | sí | Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release. `View.props.onResponderTerminationRequest: (event) => {}`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onresponderterminationrequest | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onStartShouldSetResponder` | `((e: GestureResponderEvent) => boolean) | undefined` | sí | Does this view want to become responder on the start of a touch? `View.props.onStartShouldSetResponder: (event) => [true \| false]`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onstartshouldsetresponder | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onStartShouldSetResponderCapture` | `((e: GestureResponderEvent) => boolean) | undefined` | sí | If a parent `View` wants to prevent a child `View` from becoming responder on a touch start, it should have this handler which returns `true`. `View.props.onStartShouldSetResponderCapture: (event) => [true \| false]`, where `event` is a synthetic touch event as described above. See https://reactnative.dev/docs/view#onstartshouldsetrespondercapture | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchCancel` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchCancelCapture` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchEnd` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchEndCapture` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchMove` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchMoveCapture` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchStart` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `onTouchStartCapture` | `((e: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `opacity` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/G.d.ts` |
| `origin` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `originX` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `originY` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `preserveAspectRatio` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `rotation` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `scale` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `scaleX` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `scaleY` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `size` | `string | number | undefined` | sí | — | `node_modules/.pnpm/lucide-react-native@1.40.0_react-_ehirodzc2gwl7nhesvqdyohs3m/node_modules/lucide-react-native/dist/types/lucide-react-native.d.ts` |
| `skew` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `skewX` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `skewY` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `stroke` | `____ColorValue_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeDasharray` | `NumberProp | readonly NumberProp[] | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeDashoffset` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeLinecap` | `Linecap | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeLinejoin` | `Linejoin | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeMiterlimit` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeOpacity` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `strokeWidth` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `textAnchor` | `TextAnchor | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `textDecoration` | `TextDecoration | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `transform` | `string | ColumnMajorTransformMatrix | readonly Readonly<MaximumOneOf<MergeUnion<{ readonly perspective: number | AnimatedNode; } | { readonly rotate: string | AnimatedNode; } | { readonly rotateX: string | AnimatedNode; } | { readonly rotateY: string | AnimatedNode; } | { readonly rotateZ: string | AnimatedNode; } | { readonly scale: number | AnimatedNode; } | { readonly scaleX: number | AnimatedNode; } | { readonly scaleY: number | AnimatedNode; } | { readonly translateX: number | string | AnimatedNode; } | { readonly translateY: number | string | AnimatedNode; } | { readonly translate: [number | string | AnimatedNode, number | string | AnimatedNode] | AnimatedNode; } | { readonly skewX: string | AnimatedNode; } | { readonly skewY: string | AnimatedNode; } | { readonly matrix: ReadonlyArray<number | AnimatedNode> | AnimatedNode; }>>>[] | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `translate` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `translateX` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `translateY` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `vectorEffect` | `VectorEffect | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `viewBox` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `width` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/elements/Svg.d.ts` |
| `wordSpacing` | `NumberProp | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `x` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |
| `y` | `NumberArray | undefined` | sí | — | `node_modules/.pnpm/react-native-svg@15.15.5_react-na_5lyzupp4nlht7njf5kipzzlgfm/node_modules/react-native-svg/lib/typescript/lib/extract/types.d.ts` |

</details>

