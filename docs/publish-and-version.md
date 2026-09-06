# Publicación en npm y versionado

Esta guía describe cómo preparar y publicar los paquetes de Kivora desde la raíz del monorepo. No es necesario entrar en cada paquete para publicarlo.

Todos los comandos están pensados para ejecutarse desde `F:\personal\kivora` con PowerShell. Ejecuta cada paso solo si el anterior termina correctamente.

## Estado de la revisión

Revisión realizada el 6 de septiembre de 2026:

| Paquete | Build y TypeScript | Tests | Empaquetado |
| --- | --- | --- | --- |
| `@kivora/theme` | Correctos | 12 pasan | Correcto |
| `@kivora/nextjs` | Correctos | 222 pasan | Correcto |
| `@kivora/native` | Correctos | 17 pasan | Correcto |

Los tres paquetes tienen exportaciones, tipos, README y `publishConfig.access` configurado como `public`. La raíz, las aplicaciones de ejemplo y Storybook están marcados como privados.

Estos resultados corresponden al estado revisado; hay que repetir las comprobaciones para cada release. La revisión no publicó paquetes ni instaló Changesets.

## 1. Resolver los pendientes de la primera publicación

- **Next.js:** el bundle generado pierde la directiva `"use client"`. Configurar `tsup` para que las entradas compiladas que usan funcionalidades de cliente la conserven. Comprobar después el uso de `KivoraProvider` desde un layout de App Router, tal como indica el README. Consulta el [requisito de Next.js para autores de librerías](https://nextjs.org/docs/app/getting-started/server-and-client-components#third-party-components).
- **Native:** el monorepo aplica `patches/react-native-css-interop@0.2.6.patch`. Ese parche local no se aplica automáticamente en los proyectos que instalan `@kivora/native`. Verificar si la configuración soportada lo necesita y resolver o documentar su instalación antes de publicar.
- **Metadatos:** completar `license` y los datos del repositorio en los paquetes, y añadir el archivo de la licencia elegida.
- **Versionado:** los tres paquetes están en `0.0.0`. Configurar Changesets y preparar la versión inicial siguiendo los pasos de esta guía.
- **Instalación externa:** probar los archivos `.tgz` en aplicaciones fuera del workspace. Los tests del código fuente no sustituyen esta comprobación.

## 2. Preparar la cuenta de npm

Para publicar bajo `@kivora`, necesitas controlar ese scope mediante el usuario correspondiente o una organización de npm en la que tengas permisos de publicación. La revisión local no comprueba la disponibilidad del scope ni los permisos de tu cuenta.

```powershell
npm login
npm whoami
```

Configura la autenticación de dos factores requerida para publicar con tu cuenta y completa los desafíos de autenticación que solicite npm.

Los paquetes ya contienen:

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

Referencia: [crear y publicar paquetes públicos con scope en npm](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/).

## 3. Configurar Changesets una sola vez

Usar versiones independientes: un cambio en Native no obliga por sí solo a incrementar Next.js. Changesets administra las versiones, los changelogs y las actualizaciones necesarias entre paquetes dependientes.

El proyecto utiliza `pnpm@9.15.0`. Para mantener esa versión, esta guía utiliza Changesets 2. La documentación de Changesets 3 consultada requiere pnpm 10 o superior; una migración a esa versión debe revisar también los requisitos de Node.js.

```powershell
pnpm add -Dw @changesets/cli@2
pnpm exec changeset init
```

En `.changeset/config.json`, ajustar estos campos conservando las demás opciones generadas:

```json
{
  "access": "public",
  "baseBranch": "main",
  "fixed": [],
  "linked": []
}
```

Los arrays vacíos mantienen el versionado independiente. La versión del `package.json` privado de la raíz no determina las versiones publicadas de los paquetes.

Referencias: [flujo de Changesets 2](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) y [requisitos actuales de Changesets](https://changesets.dev/guide/getting-started).

## 4. Preparar la primera versión

Empezar por `0.1.0` mientras la API siga evolucionando.

```powershell
pnpm exec changeset
```

En el asistente:

1. Seleccionar `@kivora/theme`, `@kivora/nextjs` y `@kivora/native`.
2. Elegir un incremento `minor` para los tres.
3. Describir la primera publicación.

Después, aplicar el versionado y actualizar el lockfile:

```powershell
pnpm exec changeset version
pnpm install
```

Partiendo de `0.0.0` y sin otros changesets pendientes, los tres deben quedar en `0.1.0`. Revisar los `package.json`, los changelogs y `pnpm-lock.yaml`.

### Dependencias internas

Mantener la referencia local a Theme:

```json
{
  "dependencies": {
    "@kivora/theme": "workspace:*"
  }
}
```

Al empaquetar o publicar con pnpm, `workspace:*` se transforma en la versión exacta de Theme. Si Theme está en `0.1.0`, el paquete publicado contiene:

```json
{
  "dependencies": {
    "@kivora/theme": "0.1.0"
  }
}
```

No significa que el consumidor reciba cualquier versión de Theme. Cuando este cambie, revisar las actualizaciones que Changesets proponga para sus consumidores.

Referencia: [publicación de paquetes del workspace](https://pnpm.io/workspaces#publishing-workspace-packages).

## 5. Validar y probar el paquete real

```powershell
pnpm --filter "./packages/*" build
pnpm --filter "./packages/*" typecheck
pnpm --filter "./packages/*" test
```

El filtro selecciona las tres librerías y evita ejecutar estos comandos sobre las aplicaciones de ejemplo y Storybook. La compilación debe hacerse antes de empaquetar o publicar: actualmente los paquetes no tienen un hook que garantice automáticamente este paso.

Generar los archivos que se instalarán en las aplicaciones de prueba:

```powershell
pnpm --dir packages/theme pack
pnpm --dir packages/nextjs pack
pnpm --dir packages/native pack
```

Cada comando muestra la ruta de su `.tgz`. Conservar esos archivos fuera del commit de la release.

Probar en aplicaciones externas al monorepo:

- **Web:** instalar los tarballs de Theme y Next.js, configurar lo indicado en el README y ejecutar una compilación de producción con App Router. Comprobar el provider, los componentes y los estilos.
- **Native:** instalar los tarballs de Theme y Native, las dependencias nativas y la configuración del README. Compilar la aplicación y comprobar estilos, gestos, animaciones y notificaciones. Verificar específicamente la necesidad del parche local.

Instalar también el tarball de Theme evita depender de una versión todavía inexistente en npm. Comprobar que el proyecto de prueba resuelve esa copia local; si su gestor intenta descargar Theme del registro, ajustar la resolución de la prueba para usar el tarball.

## 6. Guardar y simular la release

Revisar y guardar en Git los cambios que forman parte de la release: código, configuración de Changesets, versiones, changelogs y lockfile. Dejar `main` limpio y sincronizado con el remoto.

```powershell
git status
pnpm --filter "./packages/*" -r publish --access public --publish-branch main --dry-run
```

`--dry-run` permite revisar lo que se publicaría sin subir los paquetes. No garantiza que la publicación real vaya a disponer de los permisos necesarios.

Si pnpm rechaza el estado de Git, resolver el motivo antes de publicar.

## 7. Publicar desde la raíz

Para publicar un paquete individual, los scripts del `package.json` raíz ejecutan **typecheck → build → publish**. Si falla un paso, los siguientes no se ejecutan:

```powershell
pnpm publish:theme
pnpm publish:nextjs
pnpm publish:native
```

Los scripts de Next.js y Native comprueban y compilan también sus dependencias locales, pero publican únicamente el paquete indicado. Si necesitan una versión nueva de Theme, publicarla primero con `pnpm publish:theme`. Estos scripts no incrementan versiones ni ejecutan los tests; preparar las versiones y completar los tests siguiendo los pasos anteriores.

Este comando realiza la publicación real en npm:

```powershell
pnpm --filter "./packages/*" -r publish --access public --publish-branch main
```

pnpm publica los paquetes seleccionados cuyas versiones todavía no estén publicadas. No necesitas entrar en cada directorio. Theme es una dependencia de los otros dos paquetes y debe quedar disponible para que los consumidores puedan instalarlos.

La publicación de varios paquetes no es una transacción atómica: si uno falla, otro puede haberse publicado. Revisar el resultado, resolver el error y volver a ejecutar el comando; las versiones ya publicadas se omiten. No intentar sobrescribir una versión existente con contenido diferente: para corregir contenido publicado hay que incrementar la versión.

Referencia: [publicación recursiva de pnpm](https://pnpm.io/cli/publish).

### Verificar el resultado

```powershell
npm view @kivora/theme version
npm view @kivora/nextjs version
npm view @kivora/native version
```

Para la primera release, comprobar que los tres muestran `0.1.0`. Después, verificar una instalación desde npm en los proyectos externos de prueba.

## 8. Flujo habitual para las siguientes versiones

Con cada cambio que deba publicarse:

```powershell
pnpm exec changeset
```

Seleccionar los paquetes afectados, el incremento y una descripción útil para el changelog. Guardar el archivo generado junto con el cambio de código. No hace falta crear una release por cada commit; se pueden acumular varios changesets.

Cuando se decida publicar:

```powershell
pnpm exec changeset version
pnpm install
pnpm --filter "./packages/*" build
pnpm --filter "./packages/*" typecheck
pnpm --filter "./packages/*" test
```

Revisar las versiones y los changelogs, repetir las pruebas de integración que correspondan y guardar la release en Git. Después ejecutar la simulación y publicación de los pasos 6 y 7.

Usar Changesets para calcular versiones y pnpm para publicar es el flujo elegido en esta guía. No hace falta ejecutar además `changeset publish`.

### Política de versiones

Durante `0.x`, adoptar y documentar esta política:

| Cambio | Incremento | Ejemplo |
| --- | --- | --- |
| Corrección compatible | `patch` | `0.1.0` → `0.1.1` |
| Nueva funcionalidad | `minor` | `0.1.1` → `0.2.0` |
| Cambio incompatible | `minor`, con instrucciones de migración | `0.2.0` → `0.3.0` |
| Compromiso con una API estable | Publicación de `1.0.0` | `0.x.y` → `1.0.0` |

La política para cambios incompatibles en `0.x` es una decisión del proyecto. Hay que seleccionar el incremento correspondiente al crear el changeset; la herramienta no deduce la compatibilidad del código.

Desde `1.0.0`, usar versionado semántico: `patch` para correcciones compatibles, `minor` para funcionalidades compatibles y `major` para cambios incompatibles.

Es normal que los paquetes terminen con versiones distintas. Por ejemplo, un arreglo exclusivo de Native puede dejar `@kivora/native` en `0.1.1` y los otros dos en `0.1.0`.
