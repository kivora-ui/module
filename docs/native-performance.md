# Rendimiento y movimiento en React Native

## Revisión

La revisión cubre las 56 familias públicas de `@kivora/native`, sus contextos y la galería Android. No se han añadido esperas ni debounce al cambio de selección. Los eventos siguen las convenciones de React Native: `onPress` confirma al soltar, sin convertir un gesto de desplazamiento en una selección.

| Grupo | Resultado |
| --- | --- |
| Checkbox, Switch, RadioGroup, Toggle, ToggleGroup, Tabs | Cambios lógicos inmediatos; transiciones visuales de 120 ms mediante Reanimated. RadioGroup y Tabs omiten seleccionar de nuevo el valor activo. Tabs controlado no actualiza estado interno. |
| Accordion, HoverCard | Altura animada de 200 ms; contenido cerrado sin interacción ni acceso para lectores de pantalla. Se mide la altura natural para soportar contenido variable. |
| Popover | Panel flotante anclado, con opacidad/escala de 160 ms y respeto de reducir movimiento. Mide al abrir, cambiar la ventana o aparecer el teclado, sin un bucle continuo de medición. Cierra al tocar fuera o pulsar Atrás. |
| BottomSheet, Select móvil, Drawer, Sheet inferior, Menu | Comparten Gorhom y montaje inmediato del modal. Transición de 180 ms. Los contextos de selección, menús y paneles se estabilizan cuando sus datos no cambian. |
| Dialog, Sheet lateral, Carousel, MessageScroller | Se conserva el movimiento nativo existente y se respeta reducir movimiento. Carousel evita el avance automático con esa preferencia. |
| Slider, Progress, AttachmentProgress | Slider omite movimientos que no cambian de paso; no se interpola el arrastre para evitar que el indicador persiga al dedo. Progress interpola 120 ms, sin retrasar su valor accesible. |
| Input, Textarea, InputOTP, DatePicker, Calendar, Questionnaire | Estado de los ejemplos aislado por formulario. Calendar memoriza las etiquetas y los días por mes/idioma; seleccionar una fecha no reconstruye decenas de formateadores. |
| Chart, Pagination, Tooltip, Toast, Button, ButtonGroup | Interacciones limitadas a su ejemplo. Button mantiene su respuesta de pulsación y respeta reducir movimiento. Tooltip usa un temporizador de cierre. Toast delega la entrega y la permanencia a las notificaciones locales del sistema. |
| ScrollArea, Table, Message, Code, Carousel | Los contenedores pequeños mantienen su composición. ScrollArea virtualized sigue usando FlatList. La galería usa FlashList 2 sin un ScrollView vertical exterior. |
| Alert, Avatar, AspectRatio, Badge, Breadcrumb, Bubble, Card, Direction, Empty, Field, InputGroup, Item, Kbd, Label, Marker, Separator, Skeleton, Spinner, Typography | No se añaden animaciones continuas ni estados auxiliares a componentes de presentación. Spinner conserva el indicador nativo de actividad. |

Resizable, Command, ContextMenu y NavigationMenu se retiran de las exportaciones, archivos y ejemplos nativos por decisión de producto. Siguen disponibles en web. La prueba de cobertura registra expresamente estas excepciones.

## Galería y listas

Antes, varios estados residían en `ComponentScreen` y `useExtendedComponentExamples`: escribir, mover el slider o seleccionar una fecha reconstruía toda la colección de ejemplos. Ahora las definiciones son estáticas y cada ejemplo tiene su propio componente memoizado. La búsqueda filtra metadatos; no ejecuta los componentes descartados.

FlashList 2.3.2 está instalada en `example/app`. Usa claves estables y un tipo de fila por familia para no reciclar una estructura como otra distinta. Un almacén por visita a la galería conserva los valores editables sin suscribir a todos los ejemplos a cada cambio. El estado transitorio interno de componentes no controlados puede reiniciarse al desmontarlos; no se persisten diálogos abiertos.

La aplicación también memoriza los filtros de productos, categorías y total del carrito, y mantiene la suscripción a Atrás mientras no cambien sus dependencias. Las listas pequeñas de demostración de la tienda siguen usando ScrollView; no se ha migrado toda la aplicación a FlashList.

## Validación y límites

- `pnpm --filter @kivora/example-app test:components`: verifica que cambiar un ejemplo no renderiza su hermano, omite valores idénticos y restaura el valor tras desmontaje/remontaje.
- `pnpm --filter @kivora/native test`: fechas y cobertura de familias soportadas.
- `selection-smoke.py`, `motion-smoke.py`, `bottom-sheet-smoke.py`, `component-parity-smoke.py` y `filters-smoke.py` en `example/app/tests`: comprobaciones funcionales por accesibilidad en Android. La prueba de movimiento cierra el teclado tras buscar para que su barra flotante no tape los controles.
- Build nativo, TypeScript de la app y bundle Android de producción.

Estas comprobaciones no son una medición de latencia táctil ni de FPS. Para comparar cifras hay que perfilar una compilación release en el mismo dispositivo y con el mismo conjunto de datos. Shopify recomienda medir FlashList fuera del modo desarrollo: [guía de rendimiento](https://shopify.github.io/flash-list/docs/fundamentals/performance/).
