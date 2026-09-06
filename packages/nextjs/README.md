# @kivora/nextjs

Instalación asistida, una vez publicado el CLI: ejecuta `npx @kivora/init` dentro de tu aplicación. Usa `--dry-run` para revisar el plan. Consulta [las opciones y compatibilidad de @kivora/init](https://www.npmjs.com/package/@kivora/init).

**Componentes para Next.js con el mismo lenguaje visual que Kivora para React Native.**

Una librería TypeScript con temas neutros, modo claro/oscuro y componentes responsive para escritorio, tablet y móvil. Incluye formularios, navegación, tablas, filtros, calendarios, carruseles y paneles.

¿También construyes una app? Usa **[@kivora/native](https://www.npmjs.com/package/@kivora/native)**. Ambos módulos comparten la base de **[@kivora/theme](https://www.npmjs.com/package/@kivora/theme)**, sin obligarte a instalar los dos renderizadores.

## Instalación

En un proyecto Next.js con React y React DOM 18 o superiores:

```sh
pnpm add @kivora/nextjs tailwindcss@^4.1
pnpm add -D @tailwindcss/postcss@^4.1
```

`@kivora/theme` se instala como dependencia. Si lo importas directamente, añádelo también a las dependencias de tu aplicación.

## Configuración con App Router

Estos ejemplos asumen una carpeta `app/` en la raíz del proyecto.

**`postcss.config.mjs`**

```js
export default {
  plugins: { '@tailwindcss/postcss': {} },
};
```

**`app/globals.css`**

```css
@import "@kivora/nextjs/styles.css";
@source "../node_modules/@kivora/nextjs/dist";
```

El CSS del paquete incluye Tailwind, los tokens de Kivora y los estilos del carousel. `@source` permite generar las clases usadas por la librería. La ruta es relativa a este archivo: si usas `src/app/globals.css`, escribe `../../node_modules/@kivora/nextjs/dist`.

**`next.config.ts`**

```ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: ['@kivora/nextjs', '@kivora/theme'],
};

export default config;
```

**`app/layout.tsx`**

```tsx
import type { ReactNode } from 'react';
import { KivoraProvider } from '@kivora/nextjs';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <KivoraProvider colorMode="system">{children}</KivoraProvider>
      </body>
    </html>
  );
}
```

**`app/page.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@kivora/nextjs';

export default function Page() {
  const [saved, setSaved] = useState(false);
  return (
    <main className="min-h-screen bg-background p-6 text-foreground">
      <Button onClick={() => setSaved(true)}>
        {saved ? 'Cambios guardados' : 'Guardar cambios'}
      </Button>
    </main>
  );
}
```

El layout puede seguir siendo un Server Component. Los componentes que gestionan estado o eventos deben estar dentro de una frontera `'use client'`.

## Componentes e interacción

- **Formularios:** Input, Select, Checkbox, Switch, RadioGroup, Slider, InputOTP, Calendar y DatePicker.
- **Datos:** Table y DataTable, con búsqueda, filtros, ordenación y selección; Chart y estados vacíos.
- **Paneles:** Dialog, Sheet, Drawer, Popover, Tooltip y menús.
- **Presentación:** Card, Badge, Avatar, Attachment, Accordion, Tabs, Carousel y Typography.

Los filtros de DataTable se adaptan a panel inferior en móvil. El catálogo web tiene 60 familias; las declaraciones TypeScript publicadas describen las props de cada exportación.

## Temas

`KivoraProvider` acepta `colorMode="light"`, `"dark"` o `"system"`. El modo resuelto activa la clase `dark` en el documento. Utiliza clases semánticas como `bg-background`, `text-foreground`, `bg-primary` y `border-border`.

Para personalizar los colores renderizados, sobrescribe las variables CSS del tema después del import:

```css
:root {
  --color-primary: oklch(0.3 0 0);
  --color-primary-foreground: oklch(0.98 0 0);
}

.dark {
  --color-primary: oklch(0.9 0 0);
  --color-primary-foreground: oklch(0.2 0 0);
}
```

`themeOverrides` modifica el objeto disponible mediante `useKivoraTheme`; no genera automáticamente nuevas variables CSS. Mantén ambas representaciones alineadas si consumes también ese objeto.

## Compatibilidad con React Native

[@kivora/native](https://www.npmjs.com/package/@kivora/native) mantiene nombres y patrones similares, con gestos y controles propios de móvil. Las props DOM, los motores de tablas y las opciones específicas de react-slick no son intercambiables con React Native. DropdownMenu y Resizable pertenecen al catálogo web; la librería nativa añade BottomSheet.

El monorepo incluye Farmacia Oliva en `example/web` y `example/app`, con capturas de escritorio, web móvil, tablet y Android en su README principal. La versión nativa del ejemplo usa React Native sin Expo.

## Otros módulos de Kivora

| Paquete | Uso |
| --- | --- |
| [@kivora/native](https://www.npmjs.com/package/@kivora/native) | Interfaz nativa para aplicaciones React Native |
| [@kivora/theme](https://www.npmjs.com/package/@kivora/theme) | Temas, tipos y utilidades compartidas |
