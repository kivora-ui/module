# Field

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Primitivas de campo de formulario con label, descripción, error y agrupación.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `Field`, `FieldContent`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldLabel`, `FieldLegend`, `FieldSeparator`, `FieldSet`
- **Tipos de props:** `FieldContentProps`, `FieldDescriptionProps`, `FieldErrorProps`, `FieldGroupProps`, `FieldLabelProps`, `FieldLegendProps`, `FieldProps`, `FieldSeparatorProps`, `FieldSetProps`
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `Field`, `FieldContent`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldLabel`, `FieldLegend`, `FieldSeparator`, `FieldSet`
- **Tipos de props:** `FieldContentProps`, `FieldDescriptionProps`, `FieldErrorProps`, `FieldGroupProps`, `FieldLabelProps`, `FieldLegendProps`, `FieldProps`, `FieldSeparatorProps`, `FieldSetProps`
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { Field } from "@kivora/nextjs";

export function Example() {
  return <Field>Ejemplo básico</Field>;
}
```

### Native

```tsx
import { Field } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Field>
      <Text>Ejemplo básico</Text>
    </Field>
  );
}
```

## Props

### Web

#### `FieldContentProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLDivElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldContentProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldDescriptionProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLParagraphElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldDescriptionProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLParagraphElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLParagraphElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldErrorProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLParagraphElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldErrorProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLParagraphElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLParagraphElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLParagraphElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldGroupProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLDivElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldGroupProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldLabelProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.LabelHTMLAttributes<HTMLLabelElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldLabelProps` (280)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `form` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `htmlFor` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLLabelElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLLabelElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLLabelElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldLegendProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLLegendElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldLegendProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLLegendElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLLegendElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLLegendElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLDivElement>`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" | "vertical" | "responsive" | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `FieldProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldSeparatorProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLDivElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldSeparatorProps` (278)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLDivElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `FieldSetProps`

- **Definido en:** `packages/nextjs/src/components/field.tsx`
- **Composición base:** `React.FieldsetHTMLAttributes<HTMLFieldSetElement>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldSetProps` (281)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dir` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `form` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inert` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inlist` | `any` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `inputMode` | `"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined` | sí | Hints at the type of data that might be entered by the user while editing the element or its contents | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `is` | `string | undefined` | sí | Specify that a standard HTML element should behave like a defined custom built-in element | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemID` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemProp` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemRef` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemScope` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `itemType` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `name` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `nonce` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbort` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLFieldSetElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLFieldSetElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLFieldSetElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `part` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popover` | `"" | "auto" | "manual" | "hint" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTarget` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `popoverTargetAction` | `"toggle" | "show" | "hide" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `prefix` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `property` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `radioGroup` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rel` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `resource` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `results` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `rev` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `role` | `AriaRole | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `security` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

### Native

#### `FieldContentProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `ViewProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldContentProps` (116)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hitSlop` | `RectOrSize | undefined` | sí | This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. > The touch area never extends past the parent view bounds and the Z-index > of sibling views always takes precedence if a touch hits two overlapping > views. See https://reactnative.dev/docs/view#hitslop | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `id` | `string | undefined` | sí | Used to locate this view from native classes. Has precedence over `nativeID` prop. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#id | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | Invoked on mount and layout changes with: `{nativeEvent: { layout: {x, y, width, height}}}` This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress. See https://reactnative.dev/docs/view#onlayout | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
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
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `View` can be the target of touch events. - `'auto'`: The view can be the target of touch events. - `'none'`: The view is never the target of touch events. - `'box-none'`: The view is never the target of touch events but its subviews can be. - `'box-only'`: The view can be the target of touch events but its subviews cannot be. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | Used to locate this view in end-to-end tests. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#testid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |

</details>

#### `FieldDescriptionProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `TextProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldDescriptionProps` (74)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `adjustsFontSizeToFit` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `allowFontScaling` | `boolean | undefined` | sí | Whether fonts should scale to respect Text Size accessibility settings. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `android_hyphenationFrequency` | `"none" | "normal" | "full" | undefined` | sí | Sets automatic hyphenation frequency. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `dataDetectorType` | `"none" | "link" | "phoneNumber" | "email" | "all" | undefined` | sí | Types of data converted to clickable URLs in the text element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `disabled` | `boolean | undefined` | sí | Specifies the disabled state of the text view for testing purposes. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `dynamicTypeRamp` | `"caption2" | "caption1" | "footnote" | "subheadline" | "callout" | "body" | "headline" | "title3" | "title2" | "title1" | "largeTitle" | undefined` | sí | The [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/textstyle) ramp to apply. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `ellipsizeMode` | `"clip" | "head" | "middle" | "tail" | undefined` | sí | How text is truncated when `numberOfLines` is set. On Android with `numberOfLines` greater than 1, only `'tail'` works correctly. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `lineBreakStrategyIOS` | `"none" | "standard" | "hangul-word" | "push-out" | undefined` | sí | Line break strategy on iOS. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `maxFontSizeMultiplier` | `number | undefined` | sí | Largest possible font scale when `allowFontScaling` is enabled. `null`/`undefined` inherits from the parent node or the global default (0). `0` means no max (ignores parent/global default). `>= 1` sets the `maxFontSizeMultiplier` of this node to this value. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `minimumFontScale` | `number | undefined` | sí | Smallest possible font scale when `adjustsFontSizeToFit` is enabled (values 0.01-1.0). | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `nativeID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `numberOfLines` | `number | undefined` | sí | Truncate text with an ellipsis after this many lines. `0` means no restriction. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onAccessibilityAction` | `((event: AccessibilityActionEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLongPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on long press. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onMoveShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerEnter` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerLeave` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerMove` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on press, triggered after `onPressOut`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressIn` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called immediately when a touch is engaged. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressOut` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called when a touch is released. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderGrant` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderMove` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderRelease` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminate` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminationRequest` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onStartShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onTextLayout` | `((event: TextLayoutEvent) => unknown) | undefined` | sí | Invoked on text layout change. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `Text` can be the target of touch events. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pressRetentionOffset` | `Readonly<{ top: number; left: number; bottom: number; right: number; }> | undefined` | sí | Defines how far your touch may move off of the button, before deactivating the button. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `selectable` | `boolean | undefined` | sí | Lets the user select text for native copy and paste. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `selectionColor` | `____ColorValue_Internal | undefined` | sí | Highlight color of the text when selected. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `style` | `____TextStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `suppressHighlighting` | `boolean | undefined` | sí | When `true`, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `testID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `textBreakStrategy` | `"balanced" | "highQuality" | "simple" | undefined` | sí | Text break strategy on Android. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |

</details>

#### `FieldErrorProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `TextProps`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `errors` | `({ message?: string; } | undefined)[] | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `FieldErrorProps` (74)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `adjustsFontSizeToFit` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `allowFontScaling` | `boolean | undefined` | sí | Whether fonts should scale to respect Text Size accessibility settings. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `android_hyphenationFrequency` | `"none" | "normal" | "full" | undefined` | sí | Sets automatic hyphenation frequency. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `dataDetectorType` | `"none" | "link" | "phoneNumber" | "email" | "all" | undefined` | sí | Types of data converted to clickable URLs in the text element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `disabled` | `boolean | undefined` | sí | Specifies the disabled state of the text view for testing purposes. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `dynamicTypeRamp` | `"caption2" | "caption1" | "footnote" | "subheadline" | "callout" | "body" | "headline" | "title3" | "title2" | "title1" | "largeTitle" | undefined` | sí | The [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/textstyle) ramp to apply. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `ellipsizeMode` | `"clip" | "head" | "middle" | "tail" | undefined` | sí | How text is truncated when `numberOfLines` is set. On Android with `numberOfLines` greater than 1, only `'tail'` works correctly. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `lineBreakStrategyIOS` | `"none" | "standard" | "hangul-word" | "push-out" | undefined` | sí | Line break strategy on iOS. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `maxFontSizeMultiplier` | `number | undefined` | sí | Largest possible font scale when `allowFontScaling` is enabled. `null`/`undefined` inherits from the parent node or the global default (0). `0` means no max (ignores parent/global default). `>= 1` sets the `maxFontSizeMultiplier` of this node to this value. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `minimumFontScale` | `number | undefined` | sí | Smallest possible font scale when `adjustsFontSizeToFit` is enabled (values 0.01-1.0). | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `nativeID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `numberOfLines` | `number | undefined` | sí | Truncate text with an ellipsis after this many lines. `0` means no restriction. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onAccessibilityAction` | `((event: AccessibilityActionEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLongPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on long press. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onMoveShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerEnter` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerLeave` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerMove` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on press, triggered after `onPressOut`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressIn` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called immediately when a touch is engaged. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressOut` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called when a touch is released. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderGrant` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderMove` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderRelease` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminate` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminationRequest` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onStartShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onTextLayout` | `((event: TextLayoutEvent) => unknown) | undefined` | sí | Invoked on text layout change. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `Text` can be the target of touch events. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pressRetentionOffset` | `Readonly<{ top: number; left: number; bottom: number; right: number; }> | undefined` | sí | Defines how far your touch may move off of the button, before deactivating the button. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `selectable` | `boolean | undefined` | sí | Lets the user select text for native copy and paste. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `selectionColor` | `____ColorValue_Internal | undefined` | sí | Highlight color of the text when selected. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `style` | `____TextStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `suppressHighlighting` | `boolean | undefined` | sí | When `true`, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `testID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `textBreakStrategy` | `"balanced" | "highQuality" | "simple" | undefined` | sí | Text break strategy on Android. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |

</details>

#### `FieldGroupProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `ViewProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldGroupProps` (116)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hitSlop` | `RectOrSize | undefined` | sí | This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. > The touch area never extends past the parent view bounds and the Z-index > of sibling views always takes precedence if a touch hits two overlapping > views. See https://reactnative.dev/docs/view#hitslop | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `id` | `string | undefined` | sí | Used to locate this view from native classes. Has precedence over `nativeID` prop. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#id | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | Invoked on mount and layout changes with: `{nativeEvent: { layout: {x, y, width, height}}}` This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress. See https://reactnative.dev/docs/view#onlayout | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
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
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `View` can be the target of touch events. - `'auto'`: The view can be the target of touch events. - `'none'`: The view is never the target of touch events. - `'box-none'`: The view is never the target of touch events but its subviews can be. - `'box-only'`: The view can be the target of touch events but its subviews cannot be. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | Used to locate this view in end-to-end tests. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#testid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |

</details>

#### `FieldLabelProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `TextProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldLabelProps` (74)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `adjustsFontSizeToFit` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `allowFontScaling` | `boolean | undefined` | sí | Whether fonts should scale to respect Text Size accessibility settings. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `android_hyphenationFrequency` | `"none" | "normal" | "full" | undefined` | sí | Sets automatic hyphenation frequency. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `dataDetectorType` | `"none" | "link" | "phoneNumber" | "email" | "all" | undefined` | sí | Types of data converted to clickable URLs in the text element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `disabled` | `boolean | undefined` | sí | Specifies the disabled state of the text view for testing purposes. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `dynamicTypeRamp` | `"caption2" | "caption1" | "footnote" | "subheadline" | "callout" | "body" | "headline" | "title3" | "title2" | "title1" | "largeTitle" | undefined` | sí | The [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/textstyle) ramp to apply. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `ellipsizeMode` | `"clip" | "head" | "middle" | "tail" | undefined` | sí | How text is truncated when `numberOfLines` is set. On Android with `numberOfLines` greater than 1, only `'tail'` works correctly. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `lineBreakStrategyIOS` | `"none" | "standard" | "hangul-word" | "push-out" | undefined` | sí | Line break strategy on iOS. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `maxFontSizeMultiplier` | `number | undefined` | sí | Largest possible font scale when `allowFontScaling` is enabled. `null`/`undefined` inherits from the parent node or the global default (0). `0` means no max (ignores parent/global default). `>= 1` sets the `maxFontSizeMultiplier` of this node to this value. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `minimumFontScale` | `number | undefined` | sí | Smallest possible font scale when `adjustsFontSizeToFit` is enabled (values 0.01-1.0). | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `nativeID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `numberOfLines` | `number | undefined` | sí | Truncate text with an ellipsis after this many lines. `0` means no restriction. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onAccessibilityAction` | `((event: AccessibilityActionEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLongPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on long press. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onMoveShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerEnter` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerLeave` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerMove` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on press, triggered after `onPressOut`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressIn` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called immediately when a touch is engaged. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressOut` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called when a touch is released. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderGrant` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderMove` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderRelease` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminate` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminationRequest` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onStartShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onTextLayout` | `((event: TextLayoutEvent) => unknown) | undefined` | sí | Invoked on text layout change. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `Text` can be the target of touch events. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pressRetentionOffset` | `Readonly<{ top: number; left: number; bottom: number; right: number; }> | undefined` | sí | Defines how far your touch may move off of the button, before deactivating the button. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `selectable` | `boolean | undefined` | sí | Lets the user select text for native copy and paste. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `selectionColor` | `____ColorValue_Internal | undefined` | sí | Highlight color of the text when selected. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `style` | `____TextStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `suppressHighlighting` | `boolean | undefined` | sí | When `true`, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `testID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `textBreakStrategy` | `"balanced" | "highQuality" | "simple" | undefined` | sí | Text break strategy on Android. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |

</details>

#### `FieldLegendProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `TextProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldLegendProps` (74)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `adjustsFontSizeToFit` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `allowFontScaling` | `boolean | undefined` | sí | Whether fonts should scale to respect Text Size accessibility settings. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `android_hyphenationFrequency` | `"none" | "normal" | "full" | undefined` | sí | Sets automatic hyphenation frequency. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `dataDetectorType` | `"none" | "link" | "phoneNumber" | "email" | "all" | undefined` | sí | Types of data converted to clickable URLs in the text element. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `disabled` | `boolean | undefined` | sí | Specifies the disabled state of the text view for testing purposes. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `dynamicTypeRamp` | `"caption2" | "caption1" | "footnote" | "subheadline" | "callout" | "body" | "headline" | "title3" | "title2" | "title1" | "largeTitle" | undefined` | sí | The [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/textstyle) ramp to apply. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `ellipsizeMode` | `"clip" | "head" | "middle" | "tail" | undefined` | sí | How text is truncated when `numberOfLines` is set. On Android with `numberOfLines` greater than 1, only `'tail'` works correctly. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `id` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `lineBreakStrategyIOS` | `"none" | "standard" | "hangul-word" | "push-out" | undefined` | sí | Line break strategy on iOS. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `maxFontSizeMultiplier` | `number | undefined` | sí | Largest possible font scale when `allowFontScaling` is enabled. `null`/`undefined` inherits from the parent node or the global default (0). `0` means no max (ignores parent/global default). `>= 1` sets the `maxFontSizeMultiplier` of this node to this value. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `minimumFontScale` | `number | undefined` | sí | Smallest possible font scale when `adjustsFontSizeToFit` is enabled (values 0.01-1.0). | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `nativeID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `numberOfLines` | `number | undefined` | sí | Truncate text with an ellipsis after this many lines. `0` means no restriction. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onAccessibilityAction` | `((event: AccessibilityActionEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onLongPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on long press. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onMoveShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerEnter` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerLeave` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPointerMove` | `((event: PointerEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPress` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called on press, triggered after `onPressOut`. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressIn` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called immediately when a touch is engaged. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onPressOut` | `((event: GestureResponderEvent) => unknown) | undefined` | sí | Called when a touch is released. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderGrant` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderMove` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderRelease` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminate` | `((event: GestureResponderEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onResponderTerminationRequest` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onStartShouldSetResponder` | `(() => boolean) | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `onTextLayout` | `((event: TextLayoutEvent) => unknown) | undefined` | sí | Invoked on text layout change. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `Text` can be the target of touch events. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `pressRetentionOffset` | `Readonly<{ top: number; left: number; bottom: number; right: number; }> | undefined` | sí | Defines how far your touch may move off of the button, before deactivating the button. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `selectable` | `boolean | undefined` | sí | Lets the user select text for native copy and paste. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `selectionColor` | `____ColorValue_Internal | undefined` | sí | Highlight color of the text when selected. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `style` | `____TextStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `suppressHighlighting` | `boolean | undefined` | sí | When `true`, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `testID` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |
| `textBreakStrategy` | `"balanced" | "highQuality" | "simple" | undefined` | sí | Text break strategy on Android. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Text/TextProps.d.ts` |

</details>

#### `FieldProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `ViewProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldProps` (116)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hitSlop` | `RectOrSize | undefined` | sí | This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. > The touch area never extends past the parent view bounds and the Z-index > of sibling views always takes precedence if a touch hits two overlapping > views. See https://reactnative.dev/docs/view#hitslop | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `id` | `string | undefined` | sí | Used to locate this view from native classes. Has precedence over `nativeID` prop. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#id | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | Invoked on mount and layout changes with: `{nativeEvent: { layout: {x, y, width, height}}}` This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress. See https://reactnative.dev/docs/view#onlayout | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
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
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `View` can be the target of touch events. - `'auto'`: The view can be the target of touch events. - `'none'`: The view is never the target of touch events. - `'box-none'`: The view is never the target of touch events but its subviews can be. - `'box-only'`: The view can be the target of touch events but its subviews cannot be. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | Used to locate this view in end-to-end tests. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#testid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |

</details>

#### `FieldSeparatorProps`

- **Definido en:** `packages/native/src/components/field.tsx`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldSeparatorProps` (118)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `decorative` | `boolean | undefined` | sí | — | `packages/native/src/components/separator.tsx` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hitSlop` | `RectOrSize | undefined` | sí | This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. > The touch area never extends past the parent view bounds and the Z-index > of sibling views always takes precedence if a touch hits two overlapping > views. See https://reactnative.dev/docs/view#hitslop | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `id` | `string | undefined` | sí | Used to locate this view from native classes. Has precedence over `nativeID` prop. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#id | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | Invoked on mount and layout changes with: `{nativeEvent: { layout: {x, y, width, height}}}` This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress. See https://reactnative.dev/docs/view#onlayout | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
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
| `orientation` | `"horizontal" | "vertical" | undefined` | sí | — | `packages/native/src/components/separator.tsx` |
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `View` can be the target of touch events. - `'auto'`: The view can be the target of touch events. - `'none'`: The view is never the target of touch events. - `'box-none'`: The view is never the target of touch events but its subviews can be. - `'box-only'`: The view can be the target of touch events but its subviews cannot be. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | Used to locate this view in end-to-end tests. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#testid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |

</details>

#### `FieldSetProps`

- **Definido en:** `packages/native/src/components/field.tsx`
- **Composición base:** `ViewProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `FieldSetProps` (116)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `accessibilityActions` | `readonly Readonly<{ name: AccessibilityActionName | string; label?: string | undefined; }>[] | undefined` | sí | Provides an array of custom actions available for accessibility. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityElementsHidden` | `boolean | undefined` | sí | A value indicating whether the accessibility elements contained within this accessibility element are hidden. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityHint` | `string | undefined` | sí | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. See https://reactnative.dev/docs/view#accessibilityHint | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityIgnoresInvertColors` | `boolean | undefined` | sí | Prevents view from being inverted if set to true and color inversion is turned on. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `accessibilityLabel` | `string | undefined` | sí | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space. See https://reactnative.dev/docs/view#accessibilitylabel | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `accessible` | `boolean | undefined` | sí | When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible. See https://reactnative.dev/docs/view#accessible | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `collapsable` | `boolean | undefined` | sí | Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `collapsableChildren` | `boolean | undefined` | sí | Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `cssInterop` | `boolean | undefined` | sí | — | `node_modules/.pnpm/react-native-css@3.0.7_@expo+metr_oenahyriom53hilkvdgp47tdly/node_modules/react-native-css/types.d.ts` |
| `experimental_accessibilityOrder` | `string[] | undefined` | sí | Defines the order in which descendant elements receive accessibility focus. The elements in the array represent nativeID values for the respective descendant elements. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `focusable` | `boolean | undefined` | sí | Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hasTVPreferredFocus` | `boolean | undefined` | sí | Whether to force the Android TV focus engine to move focus to this view. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `hitSlop` | `RectOrSize | undefined` | sí | This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. > The touch area never extends past the parent view bounds and the Z-index > of sibling views always takes precedence if a touch hits two overlapping > views. See https://reactnative.dev/docs/view#hitslop | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `id` | `string | undefined` | sí | Used to locate this view from native classes. Has precedence over `nativeID` prop. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#id | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `importantForAccessibility` | `"auto" | "yes" | "no" | "no-hide-descendants" | undefined` | sí | Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references. Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
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
| `onLayout` | `((event: LayoutChangeEvent) => unknown) | undefined` | sí | Invoked on mount and layout changes with: `{nativeEvent: { layout: {x, y, width, height}}}` This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress. See https://reactnative.dev/docs/view#onlayout | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
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
| `pointerEvents` | `"none" | "auto" | "box-none" | "box-only" | undefined` | sí | Controls whether the `View` can be the target of touch events. - `'auto'`: The view can be the target of touch events. - `'none'`: The view is never the target of touch events. - `'box-none'`: The view is never the target of touch events but its subviews can be. - `'box-only'`: The view can be the target of touch events but its subviews cannot be. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `removeClippedSubviews` | `boolean | undefined` | sí | This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews). See https://reactnative.dev/docs/view#removeclippedsubviews | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `renderToHardwareTextureAndroid` | `boolean | undefined` | sí | Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU. On Android, this is useful for animations and interactions that only modify opacity, rotation, translation and/or scale: in those cases, the view does not have to be redrawn and display lists do not need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to `false` at the end of the interaction/ animation. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `role` | `Role | undefined` | sí | Alias for accessibilityRole | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `screenReaderFocusable` | `boolean | undefined` | sí | Enables the view to be screen reader focusable, not keyboard focusable. This has lower priority than focusable or accessible props. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewAccessibility.d.ts` |
| `shouldRasterizeIOS` | `boolean | undefined` | sí | Whether this `View` should be rendered as a bitmap before compositing. On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to skip re-rendering the view frame and re-use the cached bitmap. Rasterization incurs an offscreen drawing pass and the bitmap consumes memory. Test and measure when using this property. | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `style` | `____ViewStyleProp_Internal | undefined` | sí | — | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `tabIndex` | `0 | -1 | undefined` | sí | Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex for more details. Supports the following values: - 0 (View is focusable) - -1 (View is not focusable) | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |
| `testID` | `string | undefined` | sí | Used to locate this view in end-to-end tests. > This disables the 'layout-only view removal' optimization for this view! See https://reactnative.dev/docs/view#testid | `node_modules/.pnpm/react-native@0.87.1_@babel+core@7_d6nkc5uxvkoft4blgp3l52moe4/node_modules/react-native/types_generated/Libraries/Components/View/ViewPropTypes.d.ts` |

</details>

