# Validación Native / Init 0.2.1

Fecha: 9 de septiembre de 2026. Rama: `fix/native-npm-rn-087`, desde `3715cf5` de main. Este informe recoge la validación previa a la publicación.

## Causa raíz

Reproducción fuera del monorepo:

```sh
npm install @kivora/native@0.1.1 --dry-run --ignore-scripts
```

Resultado: `EUNSUPPORTEDPROTOCOL`, `Unsupported URL Type "workspace:": workspace:*`. El registro devuelve ese protocolo para `@kivora/codes`, `@kivora/theme` y `@kivora/upload`. La publicación anterior no transformó las referencias del workspace. Los scripts que sólo compilan o comprueban el código fuente no detectan este fallo.

Además, la receta anterior sólo permitía RN 0.85 y fijaba Reanimated 4.3, incompatible con RN 0.87. El inicializador omitía dependencias de vídeo/descargas que Metro necesita resolver desde el índice público. Background Downloader estaba marcado opcional aunque contiene un require literal alcanzable.

## Cambios

- Native depende de Codes, Theme y Upload 0.1.0, versiones existentes en npm. El flujo común usa `pnpm pack`, inspecciona los tarballs y publica esos mismos archivos verificados por SHA-256. Se bloquea la publicación directa de directorios.
- Los seis tarballs se revisan: exports, ESM/CJS, declaraciones, fuentes React Native, bin del inicializador, estilos, licencia bwip-js, Android y bridges iOS. Se excluyen tests nativos y archivos de desarrollo.
- Native e Init se preparan en 0.2.1. No se requiere republicar Codes, Theme, Upload ni Next.js.
- La receta RN 0.87.1 usa NativeWind 4.2.6, Tailwind 3.4.19, Reanimated 4.6.0 y Worklets 0.12.2. No se rebaja RN, React ni TypeScript.
- Se retiran casts que convertían los componentes animados en View/Pressable ordinarios: el tipo AnimatedStyleHandle de Reanimated 4.6 ya no es asignable a esos casts.
- Init instala todos los peers obligatorios, conserva Safe Area Context `^5.5.2`, guarda nuevos paquetes exactamente y declara imports CSS para TypeScript 6.
- Se conservan opciones estáticas existentes y providers reconocibles que cubren el árbol montado. Providers parciales requieren revisión manual; una función no montada no suprime un provider global. Repetir Init conserva el provider generado incluso tras personalizarlo.

## Consumidores independientes

`F:/personal/kivora-rn087-smoke`: creado mediante Community CLI 20.2.0 con RN 0.87.1. npm y package-lock, React 19.2.3, TypeScript 6.0.3, Babel/Metro config 0.87.1. Se instalaron los tarballs candidatos y todos los peers de la [receta](native-installation.md).

`F:/personal/kivora-rn087-init-smoke`: segunda copia limpia de la plantilla. `scripts/test-native-release.mjs` instaló el inicializador empaquetado, comprobó dry-run mediante hashes, aplicó su plan con el tarball Native, repitió el CLI y verificó instalación y tipos. La revisión final del inicializador se reinstaló y volvió a ejecutar sin cambios pendientes.

En ambos consumidores, package-lock confirma:

| Paquete | Procedencia |
| --- | --- |
| Native 0.2.1 | Archivo `.tgz` candidato |
| Init 0.2.1 | Archivo `.tgz` candidato |
| Codes 0.1.0 | `https://registry.npmjs.org/@kivora/codes/-/codes-0.1.0.tgz` |
| Theme 0.1.0 | `https://registry.npmjs.org/@kivora/theme/-/theme-0.1.0.tgz` |
| Upload 0.1.0 | `https://registry.npmjs.org/@kivora/upload/-/upload-0.1.0.tgz` |

Se comprobaron `resolved`, `integrity`, ausencia de `link: true` y ausencia de symlinks en los cuatro paquetes de ejecución. No se usaron npm link, aliases, `--force`, `--legacy-peer-deps`, parches al node_modules consumidor ni resoluciones hacia fuentes del monorepo. La instalación Native no añadió vulnerabilidades al conteo de npm audit de la plantilla: ésta ya reportaba nueve de severidad alta. No se ejecutó audit fix.

## Resultados por fase

| Comprobación | Resultado |
| --- | --- |
| Builds de los seis paquetes | Correctos |
| `pnpm typecheck` y `pnpm lint` | Correctos |
| Tests de paquetes | Codes 17, Theme 12, Upload 6, Native 104, Next.js 247; Init final 31 |
| Regresiones de empaquetado | 3 correctas, más inspección real de seis tarballs |
| npm install externo / npm ls | Correctos, sin ocultar conflictos de peers |
| TypeScript 6.0.3 externo | Correcto |
| ESLint consumidor | Sin errores después de aplicar formato; dos avisos por estilos inline en el provider |
| Init dry-run y segunda ejecución | Sin modificaciones; versiones nuevas exactas; sin duplicar configuración/providers |
| Metro Android, producción | Bundle generado |
| Metro iOS, producción | Bundle generado |
| Android `assembleDebug`, arm64-v8a | Correcto: 450 tareas, APK generada |
| Android instalación y ejecución | APK instalada; pantalla con KivoraProvider, Input y Button; entrada «Prueba Kivora» y resultado «Guardado: Prueba Kivora» comprobados |
| iOS CocoaPods / compilación / ejecución | No ejecutados: entorno Windows sin Xcode |

Android se compiló con la plantilla RN 0.87.1: Java 17, SDK 37, build-tools 37.0.0, NDK 27.1.12297006, Kotlin 2.2.0 y Gradle 9.4.1. Los avisos de APIs Gradle/Android obsoletas de dependencias no impidieron el build.

Metro emitió un aviso de acceso a `react-native/src/private/featureflags/ReactNativeFeatureFlags` desde dependencias; resolvió el archivo y terminó ambos bundles. La instalación Community CLI probada no necesitó el parche de detección de Expo que conserva el ejemplo pnpm del repositorio.

La ejecución mínima no acredita todas las funcionalidades del catálogo, descargas en segundo plano, Google Cast, rotación ni notificaciones. Éstas requieren sus pruebas funcionales y configuración propia. Tampoco se declara RN 0.85 revalidado en dispositivo por esta tarea.

## Reproducir

Desde el repositorio:

```sh
pnpm release:prepare
npx @react-native-community/cli@20.2.0 init KivoraSmoke --version 0.87.1 --directory /ruta/fuera/del/monorepo --skip-install
node scripts/test-native-release.mjs /ruta/fuera/del/monorepo
```

El script exige una aplicación desechable sin Kivora. Para validar componentes, usar la pantalla mínima de la guía dentro del provider generado. Desde el consumidor:

```sh
node node_modules/typescript/bin/tsc --noEmit
npm run lint
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android-smoke.bundle --assets-dest android-smoke-assets --max-workers 2
npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios-smoke.bundle --assets-dest ios-smoke-assets --max-workers 2
cd android
./gradlew assembleDebug -PreactNativeArchitectures=arm64-v8a
```

En Windows: `gradlew.bat`. Ajusta la arquitectura al dispositivo. La prueba Android utilizó la APK debug y Metro en el puerto 8083. La captura de evidencia y los tarballs están en `builds/release/`; el segundo consumidor conserva `kivora-release-validation.json` con las resoluciones comprobadas. Los archivos de ejecución del tarball final se comparan con los instalados para distinguir cambios de README de cambios de código.

## Orden de publicación

Orden: reutilizar Theme/Codes/Upload 0.1.0; publicar **Native 0.2.1**, después **Init 0.2.1**. Publicación autorizada por el usuario el 9 de septiembre de 2026. Tras publicar, verificar otra instalación desde el registro. Los [comandos exactos de integración](native-installation.md) y la [guía de publicación](publish-and-version.md) indican qué pasos requieren esa publicación previa.
