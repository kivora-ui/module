# Primitivos

- **Web**: cuando un componente necesita comportamiento accesible complejo
  (foco, teclado, aria, portales), se construye sobre **Radix UI
  Primitives** (`@radix-ui/react-*`). `Button` usa `@radix-ui/react-slot`
  para soportar `asChild`. `Card` no necesita ningún primitivo — es
  contenido estático.
- **Native**: no existe Radix para React Native. Los componentes se
  construyen sobre los primitivos de React Native (`Pressable`, `View`,
  `Text`) con los atributos de accesibilidad puestos a mano
  (`accessibilityRole`, `accessibilityState`, `accessibilityLabel`).
- **Nomenclatura**: en ambos paquetes el nombre público del componente es
  el nombre "de diseño" (`Button`, `Card`), nunca el nombre del primitivo
  subyacente (`Pressable`, `View`, `Slot`).
