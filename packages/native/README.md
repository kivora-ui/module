# @kivora/native

Instalación asistida, una vez publicado el CLI: ejecuta `npx @kivora/init` dentro de tu aplicación. La primera receta admite React Native Community CLI 0.85.3–0.85.x con NativeWind 4; otras combinaciones requieren configuración manual. Usa `--dry-run` para revisar el plan. Consulta [@kivora/init](https://www.npmjs.com/package/@kivora/init).

**Componentes React Native con el mismo lenguaje visual que Kivora para Next.js.**

Formularios, tablas, calendarios, paneles y carruseles en TypeScript, con temas neutros, modo oscuro, gestos y animaciones. El ejemplo Android utiliza React Native Community CLI, **sin Expo**.

¿También construyes una web? Usa **[@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs)**. Los dos módulos comparten la base de **[@kivora/theme](https://www.npmjs.com/package/@kivora/theme)**; no necesitas instalar el paquete web en tu aplicación nativa.

## Instalación

Instala el paquete en una aplicación React Native existente. Esta receta corresponde a la configuración del ejemplo: React Native 0.85.3, React 19.2.3, NativeWind 4.2.6 y Reanimated 4.3.0, con la nueva arquitectura.

```sh
pnpm add @kivora/native nativewind@4.2.6
pnpm add react-native-gesture-handler@^2.30.0 react-native-safe-area-context@^5 react-native-svg@^15
pnpm add react-native-reanimated@4.3.0 react-native-worklets@0.8.3
pnpm add react-native-keyboard-controller@^1.22.0
pnpm add @notifee/react-native@^9.1.8
pnpm add -D tailwindcss@3.4.19
```

El paquete ya depende de Gorhom Bottom Sheet, Reanimated Carousel y `@kivora/theme`. Las dependencias nativas requieren volver a compilar la aplicación; recargar Metro no basta.

Los rangos de peers del paquete admiten React 18+, React Native 0.74+, NativeWind 4.2.6 o 5 preview y Reanimated 3.16+. Esto no significa que todas las combinaciones sean compatibles entre sí. La receta siguiente usa NativeWind 4 y Reanimated 4; no mezcles su configuración con la de NativeWind 5 o Reanimated 3.

## Configuración con NativeWind 4

### Carrusel, calendario, código y notificaciones

`PopoverContent` se muestra flotando junto a `PopoverTrigger` (o un `PopoverAnchor` explícito), sin modificar la altura de la página. Comparte con web el ancho predeterminado de 288, separación de 8, borde, radio y animación de 160 ms. Admite `side="top|bottom|left|right"`, `align="start|center|end"`, `sideOffset`, `alignOffset`, `collisionPadding` y `avoidCollisions`. Trigger, Anchor y Close permiten `asChild` con un hijo que reenvíe su ref nativo. Se cierra al tocar fuera, con Atrás en Android o con PopoverClose; `onInteractOutside` permite cancelar ese cierre mediante `preventDefault()`. El panel se limita al espacio disponible, con desplazamiento interno para formularios y teclado. Se presenta en un Modal nativo transparente, por lo que los gestos exteriores cierran el panel antes de interactuar con la pantalla de fondo.

`<Carousel settings={{ slidesToShow: 1.25 }}>` muestra una tarjeta completa y parte de la siguiente. Acepta otros decimales y funciona con bucle, flechas y gestos. Sin bucle, la última posición se ajusta al final del contenido.

En `Calendar` y en `DatePicker` de días/rangos, pulsa la cabecera para abrir los meses, y el año para abrir una página de 12 años. Elegir año vuelve a meses; elegir mes vuelve a días. La selección se confirma al elegir un día y aplicar. Se respetan `minDate` y `maxDate` al navegar.

`Code` resalta JSON, JavaScript, TypeScript, JSX/TSX, HTML, CSS, Python, Bash y SQL mediante tokens Prism renderizados como `Text` nativo. Conserva líneas y espacios, admite temas claro/oscuro/sistema y deja como texto plano los lenguajes desconocidos.

`toast`, `toast.success` y `toast.error` muestran **notificaciones locales del sistema**. Devuelven `Promise<string | undefined>`: el ID permite `await toast.dismiss(id)`; `undefined` indica permiso denegado. Los errores de entrega se propagan al llamante. No necesitan servidor ni Firebase. Configura `toast.configure({ smallIcon: 'ic_notification', channelName: 'Mi app' })` o monta el helper opcional `<Toaster smallIcon="ic_notification" />`. El icono debe existir como recurso Android. Declara `android.permission.POST_NOTIFICATIONS` en el manifiesto y recompila; en iOS instala los pods.

El permiso se solicita al enviar la primera notificación, no al montar `Toaster`. El usuario puede desactivarlas desde el sistema. Por defecto permanecen en la bandeja hasta cerrarlas; `duration` solo configura el tiempo de retirada en Android. La API anterior de acciones con callbacks y posicionamiento visual se ha retirado: usa `data` para identificar acciones de aplicación y los eventos de Notifee si necesitas gestionar aperturas. Command, ContextMenu y NavigationMenu quedan disponibles únicamente en el paquete web.

Para formularios, envuelve la aplicación en `KeyboardProvider` y usa `KeyboardAwareScrollView`, ambos de `react-native-keyboard-controller`. En FlashList usa `renderScrollComponent` con un ref reenviado. Reducir la altura con `KeyboardAvoidingView` por sí solo no garantiza que el campo enfocado quede visible. Los modales de `BottomSheet`, `Dialog` y `Sheet` integran su propio desplazamiento consciente del teclado. Consulta [la integración de teclado y paneles](../../docs/native-bottom-sheet.md).

### 1. Babel

**`babel.config.js`**

```js
module.exports = {
  presets: [
    ['module:@react-native/babel-preset', { jsxImportSource: 'nativewind' }],
    'nativewind/babel',
  ],
  plugins: ['react-native-worklets/plugin'],
};
```

Mantén el plugin de Worklets al final. Esta configuración es para Reanimated 4; una aplicación con Reanimated 3 utiliza su propio plugin y debe elegir versiones compatibles con su React Native.

### 2. Metro

**`metro.config.js`**

```js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {});
module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
```

### 3. Tailwind y colores semánticos

**`tailwind.config.js`**

```js
const colors = [
  'background', 'foreground', 'card', 'card-foreground',
  'popover', 'popover-foreground', 'primary', 'primary-foreground',
  'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
  'accent', 'accent-foreground', 'destructive', 'destructive-foreground',
  'border', 'input', 'ring',
];

module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@kivora/native/src/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: Object.fromEntries(colors.map(name => [
        name, `rgb(var(--${name}) / <alpha-value>)`,
      ])),
    },
  },
  plugins: [],
};
```

Incluye el código fuente de Kivora en `content`: el paquete lo distribuye para que Metro y NativeWind puedan procesarlo. En un monorepo, ajusta esa ruta a la ubicación del paquete.

**`global.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**`nativewind-env.d.ts`**

```ts
/// <reference types="nativewind/types" />
```

### 4. Provider y ejemplo funcional

El provider resuelve el modo de color. Las variables de NativeWind definen los colores que dibujan los componentes: aplica ambas cosas en la raíz.

**`App.tsx`**

```tsx
import './global.css';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, KivoraProvider } from '@kivora/native';

function themeVariables(dark: boolean) {
  const foreground = dark ? '245 245 245' : '24 24 24';
  const card = dark ? '30 30 30' : '255 255 255';
  const secondary = dark ? '43 43 43' : '235 235 233';
  const border = dark ? '62 62 62' : '216 216 214';

  return vars({
    '--background': dark ? '20 20 20' : '247 247 245',
    '--foreground': foreground,
    '--card': card,
    '--card-foreground': foreground,
    '--popover': card,
    '--popover-foreground': foreground,
    '--primary': dark ? '237 237 237' : '30 30 30',
    '--primary-foreground': dark ? '24 24 24' : '255 255 255',
    '--secondary': secondary,
    '--secondary-foreground': foreground,
    '--muted': secondary,
    '--muted-foreground': dark ? '170 170 170' : '100 100 100',
    '--accent': secondary,
    '--accent-foreground': foreground,
    '--destructive': dark ? '248 113 113' : '185 28 28',
    '--destructive-foreground': '255 255 255',
    '--border': border,
    '--input': border,
    '--ring': dark ? '170 170 170' : '100 100 100',
  });
}

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KivoraProvider colorMode={dark ? 'dark' : 'light'}>
          <View style={themeVariables(dark)} className="flex-1 bg-background">
            <SafeAreaView style={{ flex: 1 }}>
              <View className="gap-4 p-6">
                <Text className="text-xl font-semibold text-foreground">
                  Farmacia Oliva
                </Text>
                <Button onPress={() => setDark(value => !value)}>
                  <Text className="text-primary-foreground">
                    {dark ? 'Activar modo claro' : 'Activar modo oscuro'}
                  </Text>
                </Button>
              </View>
            </SafeAreaView>
          </View>
        </KivoraProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

En React Native, coloca los textos dentro de `Text`. `themeOverrides` cambia el objeto del contexto de Kivora; no sustituye las variables aplicadas con `vars`.

Reinicia Metro con su caché limpia después de configurar Babel, Metro y Tailwind, y ejecuta el comando Android de tu proyecto para reconstruir el binario.

## Qué incluye

- **Formularios:** Input, Select, Checkbox, Switch, RadioGroup, Slider, Calendar y DatePicker.
- **Presentación:** Card, Badge, Avatar, Attachment, Typography y estados de carga.
- **Interacción:** Accordion, Tabs, Dialog, Sheet, BottomSheet y Carousel.
- **Datos:** Table, paginación y controles para componer búsqueda, filtros, ordenación y selección.

El catálogo tiene **59 familias nativas**. El ejemplo Farmacia Oliva ofrece 60 demostraciones en **Ajustes → Ver componentes**, incluyendo tres ejemplos de tabla. La galería usa FlashList 2; FlashList no es un requisito de instalación de esta librería.

Los paneles inferiores utilizan Gorhom v5. El carousel usa Reanimated Carousel, con navegación táctil, flechas, indicadores, reproducción automática, bucle y orientación vertical. Los componentes adaptan sus animaciones a la interacción nativa; consulta las props TypeScript para las opciones de cada uno.

## Compatibilidad con la web

Comparte nombres, patrones de composición y diseño con [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs), con diferencias según la plataforma:

| Área | React Native |
| --- | --- |
| Menús de filtros en móvil | Panel inferior con gestos |
| Table | Primitivos de composición; no es el DataTable de TanStack de la web |
| Carousel | Opciones comunes y API de navegación; no replica todas las opciones de react-slick |
| Chart | Visualizaciones nativas sencillas; no reproduce toda la API de Recharts |
| DropdownMenu / Resizable | Exclusivos del paquete web |
| BottomSheet | Componente específico del paquete nativo |

La aplicación de referencia está validada en **Android sin Expo**. iOS no se ha validado. El README principal del monorepo incluye capturas reales de la app, la web responsive y el modo tablet; el ejemplo nativo se encuentra en `example/app`.

## Otros módulos de Kivora

| Paquete | Uso |
| --- | --- |
| [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) | Componentes para Next.js y web responsive |
| [@kivora/theme](https://www.npmjs.com/package/@kivora/theme) | Temas, tipos, breakpoints y utilidades comunes |
