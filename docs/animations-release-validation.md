# Validación de animaciones 0.3.0

Fecha: 10 de septiembre de 2026. Paquetes: `@kivora/native` y `@kivora/nextjs` 0.3.0.

Se han integrado las correcciones de distribución Native/Init 0.2.1 de `origin/main` antes de preparar esta versión. Theme, Codes y Upload permanecen en 0.1.0; Init permanece en 0.2.1. Sólo se publican los dos paquetes UI modificados.

## Comprobaciones

- `pnpm install --frozen-lockfile`, `pnpm typecheck` y `pnpm lint`: correctos.
- Tests de paquetes: Theme 12, Codes 17, Upload 6, Native 104, Next.js 250 e Init 31; 420 en total.
- `pnpm release:prepare`: seis paquetes compilados y empaquetados, tres tests del verificador correctos; manifiestos, exports, recursos y exclusión de archivos de desarrollo comprobados.
- `npm publish <tarball> --dry-run --access public`: correcto para ambos candidatos. El dry-run no confirma permisos de publicación.
- Instalación npm en un directorio temporal fuera del monorepo: correcta, sin force ni legacy-peer-deps. Native y Next.js proceden de los tarballs 0.3.0; Theme, Codes y Upload proceden de npm 0.1.0. Package-lock incluye integridades; no hay symlinks ni dependencias link para esos paquetes.
- Consumidor externo: React/React DOM 19.2.3, React Native 0.87.1, Reanimated 4.6.0, Worklets 0.12.2, NativeWind 4.2.6 y TypeScript 5.9.3. Typecheck de los cuatro componentes nuevos de Native correcto.
- Next.js 16.3.4 externo: compilación de producción y prerenderizado de una página App Router usando los cuatro componentes nuevos y el CSS del tarball correctos.

Los artefactos y sus SHA-256 están en `builds/release/manifest.json` (fuera de Git):

| Tarball | SHA-256 |
| --- | --- |
| `kivora-native-0.3.0.tgz` | `f56168296cb9f7b358023978a4031e4b93de2be6569a99b2f193508e2299566d` |
| `kivora-nextjs-0.3.0.tgz` | `ec9a8fb7293fd230e95dad8224843a01feab6bbc920033ff761e1107cd432db5` |

La ejecución y FPS en dispositivos Android/iOS no se han validado para esta release. El benchmark web y sus límites están en [animaciones](animations.md). Este informe documenta la preparación; no acredita la publicación en npm ni el push a GitHub, que requieren autenticación válida.
