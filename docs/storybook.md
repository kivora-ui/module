# Storybook

```bash
pnpm storybook       # dev server, http://localhost:6006
pnpm build:storybook  # build estático
```

Storybook usa Tailwind v4 vía el plugin oficial `@tailwindcss/vite`
(`storybook/.storybook/main.ts`) y el mismo partial de
`@kivora/theme/tailwind.css` que consume `@kivora/nextjs`. El toolbar
"Theme" alterna la clase `dark` para probar modo claro/oscuro; el panel
de `addon-a11y` reporta violaciones de accesibilidad por historia.

## Limitación conocida

Storybook solo documenta `@kivora/nextjs`. `@kivora/native` no se
renderiza aquí porque eso requeriría `react-native-web`, fuera de
alcance de esta fundación — sus componentes se verifican manualmente en
una app Expo/RN de ejemplo.
