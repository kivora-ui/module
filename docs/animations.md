# Animaciones

`@kivora/nextjs` y `@kivora/native` exportan una familia de animaciones para textos, elementos, SVG y estados de carga. Las galerías de componentes de web y app incluyen una demo «Animaciones» con controles para repetir y desactivar el movimiento.

| Componente | Uso |
| --- | --- |
| `Animation` | Entrada de cualquier contenido: `fade`, `fade-up`, `fade-down`, `scale` |
| `AnimatedText` | Aparición escalonada por `words` (predeterminado) o `characters`, con los mismos presets |
| `AnimatedPath` | Dibujo progresivo de un path SVG |
| `AnimatedLoader` | Bucle de puntos (`dots`) o barras (`bars`) |

```tsx
import { Animation, AnimatedText, AnimatedPath, AnimatedLoader } from '@kivora/nextjs';

<AnimatedText split="characters" stagger={40}>Hola Kivora</AnimatedText>
<Animation preset="scale" duration={600}><MiTarjeta /></Animation>
<AnimatedPath d="M5 12 L10 17 L20 7" label="Completado" />
<AnimatedLoader variant="bars" label="Guardando" />
```

En React Native cambia el import por `@kivora/native`. Para `AnimatedPath` añade `pathLength={22}` en el ejemplo: debe cubrir la longitud completa del trazado en unidades SVG. Web calcula la longitud con Motion. Native permite estilizar el texto mediante `textStyle`; web mediante `className` o `style`. `Animation` añade un contenedor exterior para tus estilos y otro interior para el movimiento.

`duration`, `delay` y `stagger` se expresan en milisegundos. Las entradas se ejecutan al montar; cambia `replayKey` para repetirlas. `disabled` muestra el estado final sin movimiento. Los loaders aceptan `duration`, `size`, `color`, `label` y `disabled`; se repiten mientras están montados y activos. Para retirarlos cuando termina una carga, renderízalos condicionalmente.

Se respeta la preferencia del sistema de reducir movimiento. Los textos se presentan a accesibilidad como una frase completa y los SVG sin `label` son decorativos. En native se usa Reanimated y se cancelan las animaciones al desmontar; en web se usa Motion. No se añaden dependencias.

Esta primera familia cubre entradas y loaders, no salidas, animaciones por scroll, morphing, rotación de palabras ni importación de proyectos de Jitter. La separación por caracteres usa puntos de código Unicode: para emoji compuestos o escrituras con ligaduras, utiliza `split="words"`. En native, usa textos breves porque cada fragmento crea vistas animadas; la composición por fragmentos no conserva el flujo tipográfico de un único `Text`.

Referencias de inspiración: [texto de Indie UI](https://ui.indie-starter.dev/docs/text-animation) y [plantillas de Jitter](https://jitter.video/templates/all/). Implementación propia; no incluye plantillas ni assets de esos servicios.

## Storybook

Ejecuta `pnpm storybook` y abre `http://localhost:6006/?path=/story/animations-text--letters-up`. La sección **Animations → Text** incluye once historias: los cuatro efectos por letras y por palabras, un párrafo, un título con subtítulo y el estado sin movimiento. Cada muestra permite repetir la entrada; Controls permite editar el texto y los tiempos. **Components → Animation** conserva las muestras de elementos, SVG y loaders.

## Rendimiento: objetivo 60 fps

El objetivo de diseño es 60 fps (16,7 ms por frame), con 30 fps como umbral mínimo de aceptación en los dispositivos que se validen (33,3 ms por frame). No hay un límite artificial de 30/60 fps: el motor puede seguir una pantalla de mayor frecuencia. La librería por sí sola no garantiza un mínimo en cualquier equipo o bajo cualquier carga.

- **Web: Motion.** Texto, entradas y loaders usan `opacity` y el `transform` completo para que Motion pueda delegarlos a Web Animations API. Los espacios no crean animaciones independientes. Evita animar tamaño, posición de layout o filtros grandes sin medir el coste.
- **App: Reanimated.** Los estilos animados se calculan en el hilo de UI. Los SVG usan `react-native-svg` con props animadas. No hace falta cambiar de motor para estos efectos. La implementación nativa no ha sido perfilada en dispositivo en esta revisión.
- **SVG:** dibujar trazados cambia el stroke y puede requerir repintado; no tiene las mismas garantías de composición que `transform` y `opacity`. Valida la complejidad y el tamaño del SVG.

Para detectar regresiones web:

```sh
pnpm build:storybook
# Otra terminal: servir la compilación, sin el coste del servidor de desarrollo.
python3 -m http.server 6007 --bind 127.0.0.1 --directory storybook/storybook-static
# Chrome instalado; no ejecutar compilaciones ni otros benchmarks a la vez.
pnpm perf:animations
```

El script mide texto por letras, palabras, loaders y SVG, con CPU normal y ralentizada 4×. Devuelve cadencia `requestAnimationFrame`, percentil 95 de los intervalos, máximo, frames superiores a 34,3 ms (33,3 ms más 1 ms de tolerancia), tareas largas y propiedades delegadas al navegador. `ANIMATION_BENCH_URL`, `ANIMATION_BENCH_CHANNEL` y `ANIMATION_BENCH_HEADED=1` permiten cambiar servidor, navegador Chromium instalado y modo visible.

Es una comprobación de cadencia del hilo principal, **no una medición de frames presentados por GPU**. La ralentización de CPU no simula la GPU, memoria ni temperatura de un móvil. Para aceptar el mínimo de 30 fps, prueba las pantallas reales en builds de producción, en un Android de gama baja y en los dispositivos iOS soportados, con carga concurrente y durante varios ciclos. Revisa también los frames lentos: una media de 60 fps puede ocultar tirones. En native mide el hilo de UI, no solo el FPS de JavaScript.

Referencias: [rendimiento de Motion](https://motion.dev/docs/performance) y [rendimiento de Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/guides/performance/).

### Medición local de esta revisión

[Datos antes y después](animation-performance.json): Chrome 152 headless, macOS ARM64, Storybook compilado, viewport 1280×800. Cuatro historias, CPU 1× y 4×, una muestra de dos segundos por caso después de calentamiento (incluye entrada y estado final). Ambas versiones muestran aproximadamente 60 callbacks rAF/s, p95 de 16,7–16,8 ms y ningún intervalo por encima del umbral de 30 fps. No se observa una mejora de FPS en estos casos: ya estaban al ritmo de refresco. La mejora verificada es que `transform` se delega ahora a WAAPI junto con `opacity` para texto y loaders, en lugar de actualizarlo desde JavaScript. El SVG permanece con su implementación anterior. Estos datos no certifican rendimiento nativo ni móviles físicos.
