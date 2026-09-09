# React Native Community CLI 0.87.1

Esta receta integra `@kivora/native@0.2.1` en una aplicación existente sin Expo. El inicializador correspondiente es `@kivora/init@0.2.1`. No utilizar Native 0.1.1: su manifiesto publicado contiene `workspace:*` y npm no puede instalarlo.

## Versiones compatibles de React Native

Estos rangos corresponden a Native e Init **0.2.1**, para Community CLI con New Architecture y sin Expo:

| React Native admitido | Reanimated / Worklets de la receta | Validación realizada |
| --- | --- | --- |
| `>=0.85.3 <0.86` (0.85.3 y posteriores parches 0.85.x) | 4.3.0 / 0.8.3 | Receta anterior conservada; no se ha repetido su validación nativa en esta entrega. |
| `>=0.87.1 <0.88` (0.87.1 y posteriores parches 0.87.x) | 4.6.0 / 0.12.2 | Probada exactamente con 0.87.1: instalación npm, tipos, lint, bundles Android/iOS y compilación y ejecución Android. Compilación y ejecución iOS pendientes. |

React Native 0.86.x, 0.87.0, versiones anteriores a 0.85.3 y versiones desde 0.88 quedan fuera de los rangos admitidos. Esto no demuestra que sean imposibles de integrar: no están cubiertas por las recetas del instalador. Los parches incluidos en un rango no se han probado individualmente.

Ambas recetas utilizan NativeWind 4.2.6 y Tailwind 3.4.19; el preset Babel y la configuración Metro deben corresponder a la misma línea de React Native. El instalador exige React `>=19.2.3 <20`. Los comandos siguientes corresponden exclusivamente a la receta **0.87.1**.

## Versiones de la receta

| Dependencia | Versión utilizada |
| --- | --- |
| Node.js | 24.16.0 |
| React Native / Babel preset / Metro config | 0.87.1 |
| React | 19.2.3 |
| TypeScript | 6.0.3 |
| NativeWind / CSS Interop | 4.2.6 / 0.2.6 |
| Tailwind CSS | 3.4.19 |
| Reanimated / Worklets | 4.6.0 / 0.12.2 |
| Gesture Handler | 2.32.0 |
| Safe Area Context | 5.9.1, resuelto desde el `^5.5.2` existente |
| SVG / Keyboard Controller | 15.15.5 / 1.22.4 |
| Notifee | 9.1.8 |
| Video / Orientation Locker | 6.19.2 / 1.7.0 |
| FS / Background Downloader | 2.20.0 / 4.6.2 |
| Reanimated Carousel | 4.0.3 |

Reanimated 4.6 soporta RN 0.87 y requiere Worklets 0.12; Reanimated 4.3 no soporta RN 0.87. Consulta la [tabla de Software Mansion](https://docs.swmansion.com/react-native-reanimated/docs/guides/compatibility/). NativeWind 4 utiliza Tailwind 3, presets Babel y `withNativeWind`: [instalación oficial](https://www.nativewind.dev/docs/getting-started/installation). No mezclar esta receta con NativeWind 5/Tailwind 4 ni Reanimated 3.

La aceptación de un rango por npm no demuestra compatibilidad nativa. Consulta los resultados por fase en el [informe de validación](native-release-validation.md). RN 0.85 mantiene su receta anterior Reanimated 4.3 / Worklets 0.8; no se ha migrado el ejemplo del repositorio.

## Integración asistida

Desde el directorio del consumidor:

```sh
npx @kivora/init@0.2.1 --framework native --dry-run
npx @kivora/init@0.2.1 --framework native --yes
```

El primer comando no modifica el proyecto ni instala dependencias en él; npx puede descargar el ejecutable en la caché de npm. El segundo instala las dependencias que faltan y guarda las versiones nuevas de la receta de forma exacta. No cambia React Native, React ni dependencias existentes. Rechaza combinaciones incompatibles antes de escribir.

Init conserva opciones estáticas de Babel, Metro y Tailwind, reutiliza el CSS de una integración NativeWind existente y genera los tipos para imports CSS de TypeScript 6. Añade una sola envoltura Kivora y reutiliza providers reconocidos en App/index, incluso con imports renombrados. Conserva el provider generado si después lo personalizas. Los providers ocultos detrás de componentes propios o configuraciones dinámicas requieren revisión manual.

## Instalación manual

Conserva `react-native-safe-area-context: ^5.5.2` si ya está declarado. Añádelo solamente si falta.

```sh
npm install --save-exact @kivora/native@0.2.1 nativewind@4.2.6 react-native-reanimated@4.6.0 react-native-worklets@0.12.2 react-native-gesture-handler@2.32.0 react-native-svg@15.15.5 react-native-keyboard-controller@1.22.4 @notifee/react-native@9.1.8 react-native-video@6.19.2 react-native-fs@2.20.0 react-native-orientation-locker@1.7.0 @kesha-antonov/react-native-background-downloader@4.6.2
npm install --save-dev --save-exact tailwindcss@3.4.19
```

Babel: conserva los demás presets/plugins y coloca Worklets al final de la lista explícita de plugins.

```js
module.exports = {
  presets: [
    ['module:@react-native/babel-preset', {jsxImportSource: 'nativewind'}],
    'nativewind/babel',
  ],
  plugins: ['react-native-worklets/plugin'],
};
```

Metro: envuelve la configuración existente; no reemplaces sus resolvers ni transformers.

```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const config = mergeConfig(getDefaultConfig(__dirname), {});
module.exports = withNativeWind(config, {
  input: './kivora.css',
  inlineRem: 16,
  disableTypeScriptGeneration: true,
});
```

`kivora-nativewind.d.ts`, incluido por TypeScript o referenciado desde el provider:

```ts
/// <reference types="nativewind/types" />
declare module '*.css';
```

`kivora.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind debe incluir `./node_modules/@kivora/native/src/**/*.{ts,tsx}`, `nativewind/preset`, `darkMode: 'class'` y los colores semánticos. Aplica `vars()` a la vista raíz junto a KivoraProvider: el provider por sí solo no define las variables CSS. La [receta completa del paquete](../packages/native/README.md#nativewind-4-setup) muestra los colores y providers; Init genera esa configuración automáticamente.

Una pantalla mínima dentro del provider generado:

```tsx
import {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Input} from '@kivora/native';

export default function Screen() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  return (
    <View className="flex-1 justify-center gap-4 p-6">
      <Input accessibilityLabel="Nombre" placeholder="Nombre" value={name} onChangeText={setName} />
      <Button accessibilityLabel="Guardar" onPress={() => setSaved(true)}>
        <Text className="text-primary-foreground">Guardar</Text>
      </Button>
      {saved && <Text>Guardado: {name}</Text>}
    </View>
  );
}
```

## Dependencias obligatorias y funcionalidades opcionales

Button/Input usan React Native, NativeWind, Reanimated y Theme. Sin embargo, **la entrada `@kivora/native` exporta el catálogo completo**: Metro recorre también los imports de Bottom Sheet, teclado, notificaciones, vídeo y descargas. Por ello, Gesture Handler, Safe Area, SVG, Keyboard Controller, Notifee, Video, Orientation Locker, FS y Background Downloader son dependencias de instalación obligatorias. Un `require()` dentro de una función también es resuelto por Metro.

Google Cast sí es opcional: la aplicación proporciona su SDK a través de la prop `cast`; la librería no lo importa en ejecución. Los selectores de documentos/cámara/galería también son adaptadores suministrados por la aplicación. No se instala Expo, Firebase ni un SDK de almacenamiento en la nube.

Usar notificaciones, rotación o transferencias en segundo plano requiere su configuración funcional, aunque los módulos deban instalarse para resolver la entrada principal.

## Android

Mantén la New Architecture y las versiones SDK/NDK/Gradle del proyecto RN 0.87.1. Configura `ANDROID_HOME`, Java y el SDK de acuerdo con la plantilla. No uses enlaces manuales: Community CLI descubre `react-native.config.cjs`, el paquete Android y los demás módulos mediante autolinking.

```sh
cd android
./gradlew assembleDebug
cd ..
npm run android
```

En Windows utiliza `gradlew.bat`. Init añade `POST_NOTIFICATIONS` una sola vez. Antes de usar toast, proporciona un icono de notificación real y solicita el permiso cuando corresponda.

Para la rotación del Player, incorpora el callback `onConfigurationChanged` de MainActivity y el registro de `OrientationActivityLifecycle` de MainApplication según [Orientation Locker](https://github.com/wonday/react-native-orientation-locker#configuration). Conserva los callbacks que ya tenga la aplicación. No es necesario activar rotación ni notificaciones para probar Button/Input.

## iOS

Se necesita macOS con Xcode y el entorno Ruby/CocoaPods del proyecto:

```sh
bundle install
cd ios
bundle exec pod install
cd ..
npm run ios
```

El tarball contiene el podspec y los bridges Swift/Objective-C. No sustituyas AppDelegate. Para descargas en segundo plano, integra el callback `handleEventsForBackgroundURLSession` y el completion handler indicado por [Background Downloader](https://github.com/kesha-antonov/react-native-background-downloader#installation). Para rotación del Player, integra `supportedInterfaceOrientationsFor` siguiendo Orientation Locker. Configura las capacidades y permisos únicamente para las funciones que use tu aplicación.

Generar el bundle iOS en Windows no prueba CocoaPods, compilación ni ejecución iOS.

## Probar antes de publicar

Ejecuta `pnpm release:prepare` en Kivora. En una app externa usa las rutas absolutas de los tarballs Native e Init en lugar de sus versiones npm. Codes, Theme y Upload 0.1.0 ya están publicados y se resolverán desde el registro. No uses `npm link`, aliases al código fuente, `--force` ni `--legacy-peer-deps`.

Comprueba `package-lock.json`: Native debe apuntar al `.tgz`, sus dependencias internas al registro o a tarballs candidatos explícitos, y ninguna entrada debe tener `link: true`.
