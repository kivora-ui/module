# Farmacia Oliva · Android

Ejemplo de `@kivora/native` con React Native Community CLI, sin Expo ni proyecto iOS. Interfaz en español, colores neutros, modo oscuro inicial y diseño adaptable a teléfono y tablet.

## Arrancar en Windows

Requisitos: Node 22.11 o superior, pnpm 9, Java 17 y Android Studio con SDK 36, Build Tools 36.0.0 y NDK 27.1.12297006. `JAVA_HOME` y `ANDROID_HOME` deben apuntar a sus instalaciones. Consulta la [guía oficial de entorno Android](https://reactnative.dev/docs/set-up-your-environment).

Desde la raíz del repositorio:

```powershell
pnpm install
pnpm dev:app
```

Deja Metro abierto. En otra terminal, arranca un emulador desde Android Studio → Device Manager y ejecuta:

```powershell
pnpm android:app
```

El CLI compila, instala y abre `Farmacia Oliva`. También funciona con un Android conectado por USB y depuración activada. En este PC se ha creado `Kivora_Pharmacy_API_36` con 8 GB para el ejemplo; el emulador anterior tenía poco espacio libre.

```powershell
& "$env:ANDROID_HOME/emulator/emulator.exe" -avd Kivora_Pharmacy_API_36
```

## Funcionalidades

El player incluye Google Cast para enviar los vídeos de red a un Chromecast o TV
compatible en la misma Wi-Fi. El SDK se configura en Android y se pasa al player
con `cast={GoogleCast}`; las muestras locales y las descargas privadas no se envían.
La integración y los requisitos de AirPlay, CarPlay y Android Auto están en la
[guía del player](../../docs/native-player.md#chromecast-airplay-and-car-integrations).

- **Inicio:** ventas del día, carrito pendiente y avisos de reposición.
- **Mostrador:** búsqueda por nombre, marca o código; categoría y poco stock; carrito con cantidades limitadas al stock; cliente; tarjeta o efectivo con cálculo de cambio; ticket.
- **Inventario:** consulta de existencias, mínimos y recepción de unidades.
- **Ventas:** historial, búsqueda por cliente o ticket y detalle.
- **Ajustes:** tema claro/oscuro, avisos, nombre comercial y mensaje del ticket. Directorio de clientes de ejemplo.
- **Componentes:** acceso desde «Ver componentes» en Ajustes, con búsqueda y ejemplos interactivos de la librería nativa. Los ejemplos usan estado independiente de los datos de la farmacia.

Los cobros son simulados: no hay conexión a un banco. Una venta confirmada descuenta stock y genera un ticket. AsyncStorage conserva inventario, ventas, carrito y ajustes tras cerrar la app. La clave es `kivora-pharmacy-android-v1`.

El catálogo inicial replica el de la web. **Los datos son locales e independientes:** no hay backend ni sincronización entre web y Android. El historial empieza vacío para distinguir las operaciones realizadas en esta app.

## Componentes y configuración

La galería incluye 57 ejemplos para 56 familias nativas. DropdownMenu, Resizable, Command, ContextMenu y NavigationMenu se excluyen de la versión nativa y BottomSheet es propio de esta plataforma. La galería usa FlashList 2, con estado aislado por ejemplo y valores conservados al buscar o reciclar filas. Consulta la [cobertura y las diferencias de API](../../docs/native-component-coverage.md) y la [revisión de rendimiento](../../docs/native-performance.md). Los filtros de Mostrador e Inventario se abren en un panel inferior en móvil.

El carrusel permite `slidesToShow: 1.25` y otros decimales. La cabecera del calendario abre las páginas de meses y años. Code resalta la sintaxis con temas claro/oscuro. Toast usa notificaciones locales de Notifee: la primera prueba solicita el permiso del sistema y los avisos aparecen en la bandeja de Android.

Los paneles inferiores usan Gorhom v5. Puedes probar gestos, teclado y contenido largo en **Ajustes → Ver componentes → BottomSheet**. Consulta la [guía del componente](../../docs/native-bottom-sheet.md). Tras instalar sus dependencias, ejecuta `pnpm android:app` para actualizar el binario Android.

La app consume `@kivora/native`: Provider, Button, Card, Badge, Input, Select, Switch, Separator y Progress. Los textos mantienen el escalado del sistema y los botones de acción tienen un mínimo de 48 unidades.

- `App.tsx`: pantallas y navegación; el botón Atrás de Android cierra primero el detalle o vuelve a Inicio.
- `src/store.ts`: operaciones puras de carrito, venta y reposición.
- `src/use-store.ts`: persistencia local con escrituras ordenadas.
- `src/theme.ts`: variables de los temas neutros.
- `metro.config.js`: resolución de dependencias únicas en el monorepo y NativeWind 4.

Se utiliza NativeWind 4.2.6 para trabajar con Metro de React Native sin Expo. La librería también mantiene su compatibilidad con NativeWind 5. El parche versionado de `react-native-css-interop` evita que una dependencia de otro paquete del monorepo haga detectar falsamente esta aplicación como Expo.

La raíz incluye `virtual-store-dir-max-length=60` en `.npmrc` para evitar rutas de cabeceras C++ demasiado largas para Ninja en Windows. Conserva esta configuración al instalar las dependencias.

## Verificar y compilar

La APK autónoma se genera con `node scripts/android.mjs assembleRelease` desde esta carpeta. La versión 1.0.1 incorpora desplazamiento automático para mantener los campos visibles con el teclado Android y una etiqueta de slider compacta que sigue al pulgar. La firma de esta app de ejemplo sigue siendo la de desarrollo.

Con la APK instalada y un teléfono desbloqueado (o un emulador con teclado en pantalla), ejecuta desde la raíz `python example/app/tests/keyboard-smoke.py` y `python example/app/tests/slider-smoke.py`, uno después del otro. Las pruebas miden los campos frente al teclado real y la geometría del indicador. No cambian los datos de la farmacia. Guardan capturas en `example/app/build/keyboard-checks`. Usa `ANDROID_SERIAL` si hay varios dispositivos conectados.

```powershell
pnpm test:app
pnpm --filter @kivora/example-app typecheck
pnpm --filter @kivora/example-app bundle
pnpm build:app
```

El APK de desarrollo se genera en `android/app/build/outputs/apk/debug/app-debug.apk` y necesita Metro. La firma incluida es únicamente la de desarrollo. La primera compilación descarga y compila dependencias nativas; las siguientes reutilizan la caché.

Para compilar solo la arquitectura del emulador durante el desarrollo:

```powershell
pnpm --filter @kivora/example-app exec node scripts/android.mjs assembleDebug -PreactNativeArchitectures=x86_64
```

Para probar manualmente: añade un producto en Mostrador, confirma el cobro, consulta el ticket en Ventas y comprueba que el stock ha bajado en Inventario. Recibe unidades, cambia el tema y reinicia la app para verificar la persistencia.

Con Python 3 y el emulador de ejemplo abierto, `python example/app/tests/android-smoke.py` desde la raíz recorre ese flujo por accesibilidad. Crea una venta y una entrada de mercancía de demostración; guarda una captura en `example/app/build/android-smoke.png`. Ejecuta una sola prueba de UI a la vez.

## Player nativo

En **Ajustes → Probar player** puedes probar DASH, HLS, MP4, episodios, ajustes,
pantalla completa y anuncios. El audio persiste al navegar y se cierra al
reproducir vídeo. Las muestras de audio y publicidad vienen incluidas en la app.

El audio Android continúa con la pantalla bloqueada o al cambiar de aplicación,
con controles de reproducción en la notificación del sistema. Usa **Audio de
2 minutos: probar bloqueo** para comprobarlo. El temporizador de audio local
se ejecuta en ExoPlayer de forma nativa, sin depender de JavaScript para pausar.
Forzar el cierre de la app o retirar su tarea detiene esta sesión; no equivale
a bloquear la pantalla. La implementación iOS requiere un host con Background
Audio y todavía no dispone del temporizador nativo.
**Pruebas de inicio** incluye imagen/vídeo, imagen/marca/vídeo e
imagen/marca/anuncio/vídeo, con muestras locales y la secuencia de fases visible.
La sección **Descargas** permite guardar el formato seleccionado: MP4 y, en
Android, HLS/DASH VOD sin DRM con vídeo hasta 720p y audio. Permite ver el progreso,
cancelar, reproducir sin conexión y eliminar la descarga. El gestor persiste al navegar y
restaura las descargas al arrancar. **Encolar DASH, HLS y MP4** permite probar la cola FIFO: una activa
y las demás pendientes. La activa continúa nativamente en segundo plano; si el
sistema suspende JavaScript, la siguiente arranca al volver a la app. El permiso
de notificaciones se solicita antes de descargar. HLS/DASH usan avisos nativos de progreso y finalización de Media3.
Para MP4, Android 16+ usa el aviso nativo de finalización y las versiones
anteriores usan Notifee cuando JavaScript recibe la finalización.
Consulta [la guía del player nativo](../../docs/native-player.md).
