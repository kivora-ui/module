# Toggle con contenido según el estado

`children` admite contenido estático o una función `(pressed: boolean) => ReactNode`. Puedes cambiar texto, icono o ambos:

```tsx
import { Toggle } from "@kivora/nextjs";
import { Heart, Check } from "lucide-react";

<Toggle aria-label="Favorito">
  {(pressed) => (
    <>
      {pressed ? <Check aria-hidden="true" /> : <Heart aria-hidden="true" />}
      {pressed ? "En favoritos" : "Favorito"}
    </>
  )}
</Toggle>
```

Sin `pressed`, el componente mantiene su estado; `defaultPressed` permite iniciarlo activo. Para controlarlo desde el padre, utiliza `pressed={favorite}` y `onPressedChange={setFavorite}`. El contenido refleja siempre el estado actual, incluso si el padre lo modifica.

Mantén un `aria-label` estable cuando cambie el texto visible: `aria-pressed` comunica si está activado. También puedes seguir usando `<Toggle>Favorito</Toggle>` para contenido fijo. Funciona con teclado y respeta `disabled`.
