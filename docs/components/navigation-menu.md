# Navigation Menu

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Menú de navegación web para secciones complejas y contenido expandido.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** no disponible

## Imports

### @kivora/nextjs

```tsx
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@kivora/nextjs";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `NavigationMenu`, `NavigationMenuContent`, `NavigationMenuIndicator`, `NavigationMenuItem`, `NavigationMenuLink`, `NavigationMenuList`, `NavigationMenuTrigger`, `NavigationMenuViewport`
- **Tipos de props:** `NavigationMenuProps`
- **Tipos relacionados:** —

## Ejemplos

### Web

```tsx
import { NavigationMenu } from "@kivora/nextjs";

export function Example() {
  return <NavigationMenu>Ejemplo básico</NavigationMenu>;
}
```

## Props

### Web

#### `NavigationMenuProps`

- **Definido en:** `packages/nextjs/src/components/navigation-menu.tsx`
- **Composición base:** `React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>`

**Props propias**

_Sin props documentadas en este nivel._

<details>
<summary>Props heredadas o compuestas de `NavigationMenuProps` (285)</summary>

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
| `defaultValue` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
| `delayDuration` | `number | undefined` | sí | The duration from when the pointer enters the trigger until the tooltip gets opened. | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
| `dir` | `Direction | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
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
| `onValueChange` | `((value: string) => void) | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
| `onVolumeChange` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onVolumeChangeCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaiting` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWaitingCapture` | `ReactEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheel` | `WheelEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `onWheelCapture` | `WheelEventHandler<HTMLElement> | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |
| `orientation` | `Orientation | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
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
| `skipDelayDuration` | `number | undefined` | sí | How much time a user has to enter another trigger without incurring a delay again. | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
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
| `value` | `string | undefined` | sí | — | `node_modules/.pnpm/@radix-ui+react-navigation-menu@1_7bsxc266kroj23i34nbhbqw7li/node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts` |
| `vocab` | `string | undefined` | sí | — | `node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts` |

</details>

