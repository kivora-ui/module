# Direction

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Provider de dirección LTR/RTL para adaptar componentes sensibles a lectura.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { DirectionProvider } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { DirectionProvider, useDirection } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `DirectionProvider`
- **Tipos de props:** `DirectionProviderProps`
- **Tipos relacionados:** `Direction`

### Native

- **Componentes y helpers visuales:** `DirectionProvider`, `useDirection`
- **Tipos de props:** `DirectionProviderProps`
- **Tipos relacionados:** `Direction`

## Ejemplos

### Web

```tsx
import { DirectionProvider } from "@kivora/nextjs";

export function Example() {
  return <DirectionProvider>Ejemplo básico</DirectionProvider>;
}
```

### Native

```tsx
import { DirectionProvider } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <DirectionProvider>
      <Text>Ejemplo básico</Text>
    </DirectionProvider>
  );
}
```

## Props

### Web

#### `DirectionProviderProps`

- **Definido en:** `packages/nextjs/src/components/direction.tsx`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `children` | `string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | null | undefined` | sí | — |
| `className` | `string | undefined` | sí | — |
| `dir` | `Direction | undefined` | sí | — |

### Native

#### `DirectionProviderProps`

- **Definido en:** `packages/native/src/components/direction.tsx`
- **Composición base:** `ViewProps`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `dir` | `"ltr" | "rtl"` | no | — |

<details>
<summary>Props heredadas o compuestas de `DirectionProviderProps` (116)</summary>

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

