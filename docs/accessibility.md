# Accesibilidad (AA)

## Web

- Los componentes con interacción compleja se apoyan en Radix UI
  Primitives, que ya gestiona foco, teclado y atributos aria.
- `Button` mantiene el elemento `<button>` nativo (excepto con
  `asChild`, donde delega el rol al elemento hijo).
- El contraste de los tokens de color (`lightTheme`/`darkTheme`) sigue la
  paleta AA de shadcn.
- Storybook corre con `addon-a11y`: revisa el panel de accesibilidad en
  cada historia antes de dar un componente por terminado.

## Native

- `accessibilityRole="button"` y `accessibilityState={{ disabled }}` en
  `Button`.
- Área táctil mínima de 44×44dp: `Button` usa `hitSlop` para compensar
  los tamaños `sm`/`default` (36-40dp de alto visual).
- `accessibilityLabel` opcional en `Button` para los casos donde el
  contenido no es texto plano (iconos).

## Verificación manual pendiente

El render de `Button`/`Card` en native no tiene test automático en esta
fundación (ver `docs/storybook.md`): verifica accesibilidad con
VoiceOver/TalkBack en una app Expo/RN de ejemplo antes de publicar.
