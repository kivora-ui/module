# Kbd

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Representación visual de teclas o atajos de teclado.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { Kbd } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { Kbd } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `Kbd`
- **Tipos de props:** `KbdProps`
- **Tipos relacionados:** —

### Native

- **Componentes y helpers visuales:** `Kbd`
- **Tipos de props:** `KbdProps`
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { Kbd } from "@kivora/nextjs";

export function Example() {
  return <Kbd>Ejemplo básico</Kbd>;
}
```

### Native

```tsx
import { Kbd } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Kbd>
      <Text>Ejemplo básico</Text>
    </Kbd>
  );
}
```

## Props

### Web

#### `KbdProps`

- **Definido en:** `packages/nextjs/src/components/kbd.tsx`
- **Composición base:** `React.HTMLAttributes<HTMLElement> & VariantProps<typeof kbdVariants>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `KbdProps` (280)</summary>

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
| `onAbort` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAbortCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEnd` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationEndCapture` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIteration` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationIterationCapture` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStart` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAnimationStartCapture` | `AnimationEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClick` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onAuxClickCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInput` | `InputEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeInputCapture` | `InputEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBeforeToggle` | `ToggleEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlur` | `FocusEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onBlurCapture` | `FocusEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlay` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThrough` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCanPlayThroughCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChange` | `ChangeEventHandler<HTMLElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onChangeCapture` | `ChangeEventHandler<HTMLElement, Element> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClick` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onClickCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEnd` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionEndCapture` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStart` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionStartCapture` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdate` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCompositionUpdateCapture` | `CompositionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenu` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onContextMenuCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopy` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCopyCapture` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCut` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onCutCapture` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClick` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDoubleClickCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrag` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnd` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEndCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnter` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragEnterCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExit` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragExitCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeave` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragLeaveCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOver` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragOverCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStart` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDragStartCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDrop` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDropCapture` | `DragEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChange` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onDurationChangeCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptied` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEmptiedCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncrypted` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEncryptedCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEnded` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onEndedCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onError` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onErrorCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocus` | `FocusEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalid` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInvalidCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDown` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyDownCapture` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPress` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyPressCapture` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUp` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onKeyUpCapture` | `KeyboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoad` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedData` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedDataCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadata` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadedMetadataCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStart` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLoadStartCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onLostPointerCaptureCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDown` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseDownCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseEnter` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseLeave` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMove` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseMoveCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOut` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOutCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOver` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseOverCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUp` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onMouseUpCapture` | `MouseEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPaste` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPasteCapture` | `ClipboardEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPause` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPauseCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlay` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlaying` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPlayingCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancel` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerCancelCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDown` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerDownCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerEnter` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerLeave` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMove` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerMoveCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOut` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOutCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOver` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerOverCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUp` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onPointerUpCapture` | `PointerEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgress` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onProgressCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChange` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onRateChangeCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onReset` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onResetCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScroll` | `UIEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollCapture` | `UIEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEnd` | `UIEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onScrollEndCapture` | `UIEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeked` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekedCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeeking` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSeekingCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelect` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSelectCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalled` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onStalledCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmit` | `SubmitEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSubmitCapture` | `SubmitEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspend` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onSuspendCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdate` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTimeUpdateCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onToggle` | `ToggleEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancel` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchCancelCapture` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEnd` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchEndCapture` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMove` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchMoveCapture` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStart` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTouchStartCapture` | `TouchEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancel` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionCancelCapture` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEnd` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionEndCapture` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRun` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionRunCapture` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStart` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onTransitionStartCapture` | `TransitionEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChange` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `size` | `"sm" | "lg" | "md" | null | undefined` | sí | — | `packages/nextjs/src/components/kbd.tsx` |
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
| `variant` | `"default" | "outline" | "solid" | null | undefined` | sí | — | `packages/nextjs/src/components/kbd.tsx` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

### Native

#### `KbdProps`

- **Definido en:** `packages/native/src/components/kbd.tsx`
- **Composición base:** `TextProps`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `KbdProps` (74)</summary>

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

