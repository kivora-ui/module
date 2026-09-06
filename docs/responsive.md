# Responsive

`@kivora/theme` define los breakpoints compartidos:

```ts
export const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };
```

- **Web**: usa las utilidades responsive de Tailwind (`md:`, `lg:`, que
  Tailwind v4 deriva de los mismos valores) o el hook `useBreakpoint()`
  para lógica condicional en JS.
- **Native**: `useBreakpoint()` (basado en `useWindowDimensions`) es la
  única vía — NativeWind también soporta `md:`/`lg:` si se prefiere CSS
  sobre JS condicional.
- La función pura `getBreakpoint(width)` (en `@kivora/theme`) es la
  fuente de verdad de ambos hooks y tiene tests unitarios.
