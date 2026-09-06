# @kivora/init

Instala y configura Kivora en una aplicación existente. Requiere Node.js 20.19 o superior (además de los requisitos de tu framework).

```sh
npx @kivora/init
```

La versión inicial del instalador es `0.1.0`. Para completar una instalación desde npm también deben estar publicadas las librerías de Kivora que instala.

## Funcionamiento

1. Lee el `package.json` de la aplicación y detecta Next.js o React Native. Si encuentra ambos o ninguno, pregunta `nextjs` o `native`. La selección no instala ni migra el framework.
2. Detecta npm, pnpm, Yarn o Bun a partir de `packageManager` y los lockfiles, incluyendo los del workspace superior. Rechaza gestores en conflicto.
3. Prepara un plan completo y comprueba versiones, entradas y configuraciones antes de escribir archivos. Muestra archivos y comandos, y pide confirmación para aplicarlos.
4. Guarda copias, adapta los archivos e instala únicamente dependencias que faltan. Conserva las versiones declaradas de las dependencias existentes.

```sh
npx @kivora/init --dry-run
npx @kivora/init --cwd ./apps/web --framework nextjs --yes
npx @kivora/init --framework native --skip-install --yes
```

`--dry-run` muestra el contenido actual y propuesto sin escribir ni ejecutar instalaciones. `--skip-install` escribe la configuración y muestra los comandos pendientes. En CI, usa `--yes`; si la detección es ambigua, también `--framework`. `--package-manager npm|pnpm|yarn|bun` permite elegir el gestor cuando no hay uno definido; no permite sustituir el gestor existente.

## Next.js

Soporta Next.js 13+, React/React DOM 18+, Tailwind 4.1 y entradas `app/layout`, `src/app/layout`, `pages/_app` o `src/pages/_app` en TSX, JSX o JS. Puede integrar ambos routers cuando coexisten.

- Instala `@kivora/nextjs`, `tailwindcss` y `@tailwindcss/postcss` si faltan.
- Añade Kivora a `transpilePackages` y configura el plugin PostCSS conservando otras opciones estáticas.
- Genera `kivora-provider.tsx`/`.jsx` con una frontera `use client`, y `kivora.css` con la ruta `@source` correspondiente.
- Monta el provider dentro de `<body>` en App Router o alrededor del resultado del componente en Pages Router. Importa el CSS desde la entrada antes de sus estilos existentes.

No migra Tailwind 3. Las configuraciones con funciones, spreads u opciones dinámicas se rechazan con el archivo que necesita revisión. Las clases y variables de Kivora son globales: comprueba el aspecto de tu aplicación después de integrar los estilos.

## React Native

La primera receta se limita a React Native Community CLI **0.85.3–0.85.x**, React 19.2, NativeWind 4.2.6+, Reanimated 4.3.x y Worklets 0.8.3+. Es la combinación del ejemplo del repositorio. No migra Reanimated 3, NativeWind 5 ni proyectos Expo.

- Instala `@kivora/native`, NativeWind, Reanimated, Worklets, Gesture Handler, Safe Area Context, SVG, Keyboard Controller, Notifee y Tailwind 3.4.19 si faltan.
- Adapta Babel, Metro y Tailwind estáticos conservando plugins, opciones, colores y rutas existentes. Babel y Tailwind usan CommonJS, con `.cjs` para proyectos ESM.
- Reutiliza el archivo CSS de Metro si ya existe una llamada `withNativeWind` con `input` literal; en caso contrario crea `kivora.css` junto a `App`.
- Integra `App` o `src/App` (TSX, JSX o JS) con providers de gestos, safe area, teclado y Kivora, además de variables semánticas de color y tipos NativeWind.
- Añade el permiso Android `POST_NOTIFICATIONS` si existe el manifiesto y aún no lo declara.

Después, instala los pods en iOS con el procedimiento de tu proyecto, reinicia Metro y recompila la aplicación. Para las notificaciones, configura un icono Android existente. El CLI no ejecuta builds nativos ni modifica Gradle, Podfile o recursos gráficos. iOS no está validado. La verificación externa del parche local de `react-native-css-interop` sigue pendiente antes de publicar la receta nativa.

## Conservación y recuperación

Los archivos de usuario se analizan sin ejecutar sus configuraciones. Una configuración incompatible, una entrada no reconocida o un archivo generado con contenido diferente cancela el plan completo antes de escribir. Volver a ejecutar el CLI sobre su propia configuración no duplica imports, providers ni plugins. Si personalizas los archivos generados, el CLI los conserva y comunica el conflicto.

Las copias están en `.kivora/backups/<id>/`. `manifest.json` relaciona cada ruta original con su archivo `.bak`; `backup: null` indica que el archivo no existía. Para recuperar manualmente, copia cada `.bak` a su ruta original y elimina únicamente los archivos nuevos que quieras deshacer. Conserva estas copias hasta revisar los cambios; no las publiques porque pueden contener configuración privada.

Si el gestor devuelve un error, se restauran los archivos modificados, el manifiesto y los lockfiles de la aplicación y del gestor. `node_modules`, los efectos de scripts de instalación y una interrupción abrupta del proceso no son una transacción reversible. Ante esos casos, usa las copias y reinstala las dependencias con tu gestor.

## Desarrollo y publicación

Desde la raíz del repositorio:

```sh
node packages/init/src/cli.mjs --help
node packages/init/src/cli.mjs --cwd /ruta/a/una/app --dry-run
pnpm --filter @kivora/init test
pnpm --filter @kivora/init build
pnpm --dir packages/init pack
pnpm publish:init
```

El ejecutable se publica directamente como ESM con shebang; no necesita un bundle generado. Los scripts `build`, `typecheck` y `lint` verifican la sintaxis JavaScript. Los tests usan proyectos temporales e instalaciones simuladas; no sustituyen una instalación real desde npm ni la compilación de apps externas. Publica las librerías de plataforma y Theme antes de anunciar el comando.

Referencias de las recetas: [NativeWind 4](https://www.nativewind.dev/docs/getting-started/installation), [Tailwind con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs) y [compatibilidad de Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/guides/compatibility/).
