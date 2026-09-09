# Publicación en npm y versionado

## Corrección Native / Init 0.2.1

Native 0.1.1 se publicó con `workspace:*` en Codes, Theme y Upload. npm no entiende ese protocolo y aborta incluso con `--dry-run --ignore-scripts`. Native 0.2.1 utiliza las versiones publicadas `0.1.0` de los tres paquetes. Next.js puede conservar `workspace:*` en el workspace: `pnpm pack` lo transforma y el verificador inspecciona el manifiesto del tarball, no sólo el fuente.

No se puede sobrescribir Native 0.1.1. Esta corrección prepara Native 0.2.1 e Init 0.2.1. La rama 0.2 también contiene los cambios de API descritos en CHANGELOG: revisar la migración desde 0.1 antes de actualizar un consumidor.

## Preparar y verificar

Desde la raíz, con Node y pnpm 9.15.0:

```sh
pnpm install --frozen-lockfile
pnpm release:prepare
pnpm typecheck
pnpm lint
pnpm --filter "./packages/**" test
```

`release:prepare` compila los seis paquetes, ejecuta las regresiones del verificador y empaqueta con pnpm. `scripts/release.mjs` abre los .tgz con tar y verifica:

- Ausencia de protocolos workspace/file/link en dependencias, peers, opcionales y devDependencies.
- Versiones semánticas válidas para dependencias internas y un candidato compatible en el conjunto preparado.
- Existencia de exports, entradas ESM/CJS, tipos, entrada React Native y binarios CLI.
- Recursos CSS, licencia de bwip-js, podspec, bridges iOS y archivos Android.
- Ausencia de tests, node_modules y cachés de IDE/Gradle.

Los artefactos y `manifest.json` con SHA-256 se escriben en `builds/release/` (ignorado por Git). No modificarlos tras validar. Si cambia código o documentación incluida, regenerarlos y repetir las comprobaciones afectadas.

La preparación no publica ni cambia versiones automáticamente. Los hooks `prepublishOnly` impiden publicar un directorio por error. El flujo soportado publica el tarball verificado; no ejecutar `npm publish` ni `pnpm publish` desde un paquete.

## Validación externa obligatoria

Usar una aplicación fuera del monorepo sin npm link, aliases ni resoluciones a archivos fuente. La [receta RN 0.87.1](native-installation.md) y el [informe](native-release-validation.md) describen el consumidor y los límites por plataforma.

Instalar Native e Init desde sus .tgz. Codes/Theme/Upload 0.1.0 pueden venir de npm: revisar `resolved`, `integrity` y ausencia de `link: true` en package-lock. Ejecutar npm install sin force/legacy-peer-deps, repetir Init, comprobar dry-run, tipos, lint, bundle y las pruebas nativas disponibles.

El build del monorepo y una simulación npm no sustituyen la instalación externa:

```sh
npm publish ./builds/release/kivora-native-0.2.1.tgz --dry-run --access public
npm publish ./builds/release/kivora-init-0.2.1.tgz --dry-run --access public
```

## Orden de publicación

1. Theme, Codes y Upload, si una release cambia sus versiones. Para esta corrección se reutilizan sus versiones 0.1.0 ya publicadas; no republicarlas.
2. Native 0.2.1.
3. Init 0.2.1, una vez disponible Native.

Next.js 0.2.1 ya está publicado y no necesita otra publicación por esta incidencia. Que se prepare un tarball para verificar el flujo común no autoriza a sobrescribir una versión del registro.

Después de revisar los resultados y obtener confirmación explícita:

```sh
pnpm publish:native
pnpm publish:init
```

Cada script vuelve a inspeccionar el archivo, comprueba el SHA-256 contra manifest.json y que su versión coincide con package.json. Verifica en npm las dependencias internas y publica exactamente ese tarball. Estos comandos sí publican; no ejecutarlos durante la preparación.

## Verificación posterior a publicar

```sh
npm view @kivora/native@0.2.1 version dependencies --json
npm view @kivora/init@0.2.1 version --json
```

Repetir la instalación desde versiones npm en otra app limpia y conservar el nuevo package-lock. Sólo entonces anunciar los comandos de instalación del README. La publicación de varios paquetes no es atómica: si falla Init después de Native, revisar el registro antes de reintentar.

Referencias: [pnpm workspace publishing](https://pnpm.io/workspaces#publishing-workspace-packages), [npm publish](https://docs.npmjs.com/cli/commands/npm-publish).
