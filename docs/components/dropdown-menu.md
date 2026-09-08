# Dropdown Menu

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Menú desplegable web anclado a un trigger con items, checks y submenús.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** no disponible

## Imports

### @kivora/nextjs

```tsx
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@kivora/nextjs";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `DropdownMenu`, `DropdownMenuCheckboxItem`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuPortal`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuTrigger`
- **Tipos de props:** `DropdownMenuCheckboxItemProps`, `DropdownMenuContentProps`, `DropdownMenuItemProps`, `DropdownMenuLabelProps`, `DropdownMenuProps`, `DropdownMenuRadioItemProps`, `DropdownMenuSeparatorProps`, `DropdownMenuSubContentProps`, `DropdownMenuSubTriggerProps`
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { DropdownMenu } from "@kivora/nextjs";

export function Example() {
  return <DropdownMenu>Ejemplo básico</DropdownMenu>;
}
```

## Props

### Web

#### `DropdownMenuCheckboxItemProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuCheckboxItemProps` (284)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `checked` | `CheckedState | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `onCheckedChange` | `((checked: boolean) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onSelect` | `((event: Event) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `textValue` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `DropdownMenuContentProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuContentProps` (297)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `align` | `"center" | "start" | "end" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `alignOffset` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
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
| `arrowPadding` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `avoidCollisions` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `collisionBoundary` | `Boundary | Boundary[] | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `collisionPadding` | `number | Partial<Record<"top" | "right" | "bottom" | "left", number>> | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `forceMount` | `true | undefined` | sí | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hideWhenDetached` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `loop` | `boolean | undefined` | sí | Whether keyboard navigation should loop around | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onCloseAutoFocus` | `((event: Event) => void) | undefined` | sí | Event handler called when auto-focusing on close. Can be prevented. | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onEscapeKeyDown` | `((event: KeyboardEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInteractOutside` | `((event: PointerDownOutsideEvent | FocusOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `side` | `"top" | "right" | "bottom" | "left" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `sideOffset` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `sticky` | `"partial" | "always" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `updatePositionStrategy` | `"always" | "optimized" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `DropdownMenuItemProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `inset` | `boolean | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `DropdownMenuItemProps` (282)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
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
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `onSelect` | `((event: Event) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `textValue` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `DropdownMenuLabelProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `inset` | `boolean | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `DropdownMenuLabelProps` (280)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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

#### `DropdownMenuProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuProps` (6)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |
| `defaultOpen` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |
| `dir` | `Direction | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |
| `modal` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |
| `onOpenChange` | `((open: boolean) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |
| `open` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1_onnt7ndgnc3dmr2muw3kdlg35m/node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts` |

</details>

#### `DropdownMenuRadioItemProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuRadioItemProps` (283)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
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
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `onSelect` | `((event: Event) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `textValue` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `value` | `string` | no | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `DropdownMenuSeparatorProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuSeparatorProps` (280)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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

#### `DropdownMenuSubContentProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `DropdownMenuSubContentProps` (295)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `about` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `accessKey` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `align` | `AlignSubContent | undefined` | sí | Controls the direction the subcontent appears from its anchor menu item Default: start | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `alignOffset` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
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
| `arrowPadding` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
| `autoCapitalize` | `"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {}) | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoCorrect` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoFocus` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `autoSave` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `avoidCollisions` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `children` | `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `className` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `collisionBoundary` | `Boundary | Boundary[] | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `collisionPadding` | `number | Partial<Record<"top" | "right" | "bottom" | "left", number>> | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `color` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `content` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contentEditable` | `Booleanish | "inherit" | "plaintext-only" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `contextMenu` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `dangerouslySetInnerHTML` | `{ __html: string | TrustedHTML; } | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `datatype` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultChecked` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `defaultValue` | `string | number | readonly string[] | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `draggable` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `enterKeyHint` | `"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `exportparts` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `forceMount` | `true | undefined` | sí | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `hidden` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `hideWhenDetached` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `lang` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `loop` | `boolean | undefined` | sí | Whether keyboard navigation should loop around | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onEscapeKeyDown` | `((event: KeyboardEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `onFocus` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusCapture` | `FocusEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `onGotPointerCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onGotPointerCaptureCapture` | `PointerEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInput` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInputCapture` | `InputEventHandler<HTMLDivElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onInteractOutside` | `((event: PointerDownOutsideEvent | FocusOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `sideOffset` | `number | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `slot` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `spellCheck` | `Booleanish | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `sticky` | `"partial" | "always" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `style` | `CSSProperties | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressContentEditableWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `suppressHydrationWarning` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `tabIndex` | `number | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `updatePositionStrategy` | `"always" | "optimized" | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@typ_scwriyh6cf576jwpxckjykluna/node_modules/@radix-ui/react-popper/dist/index.d.mts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

#### `DropdownMenuSubTriggerProps`

- **Definido en:** `packages/nextjs/src/components/dropdown-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `inset` | `boolean | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `DropdownMenuSubTriggerProps` (282)</summary>

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
| `asChild` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-primitive@2.1.10__ilk3mkgkqvorozbeftascnooci/node_modules/@radix-ui/react-primitive/dist/index.d.mts` |
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
| `disabled` | `boolean | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
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
| `key` | `Key | null | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
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
| `textValue` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@type_6wcfjcfdxmb53qw7tt63dpg7m4/node_modules/@radix-ui/react-menu/dist/index.d.mts` |
| `title` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `translate` | `"yes" | "no" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `typeof` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `unselectable` | `"off" | "on" | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

