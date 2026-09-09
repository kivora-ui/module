# Cobertura de componentes React Native

La biblioteca incluye **56 familias nativas y 57 ejemplos**. Next.js tiene 60 familias: Resizable, Command, ContextMenu y NavigationMenu se han retirado deliberadamente de React Native; BottomSheet es una familia propia de la plataforma. Los helpers internos de animación no cuentan como familias.

La galería usa FlashList 2 y ejemplos con estado independiente. Acceso: Ajustes → Ver componentes. Los valores editables se conservan al buscar y reciclar filas.

## Familias añadidas

`aspect-ratio`, `attachment`, `breadcrumb`, `bubble`, `button-group`, `calendar`, `carousel`, `chart`, `code`, `date-picker`, `direction`, `drawer`, `empty`, `field`, `input-group`, `input-otp`, `item`, `kbd`, `marker`, `menu`, `message`, `message-scroller`, `pagination`, `questionnaire`, `scroll-area`, `sheet`, `spinner`, `toast`, `toggle`, `toggle-group`, `typography`.

Son 31 familias nuevas. Drawer y Sheet inferior utilizan Gorhom; ScrollArea utiliza ScrollView, ScrollArea virtualized utiliza FlatList y Spinner utiliza ActivityIndicator. FlashList se instala en la app de ejemplo; ScrollArea virtualized conserva FlatList para compatibilidad con la API nativa.

## API y adaptación a React Native

- Table nativo aporta composición visual; no incluye DataTable con ordenación, paginación, selección y filtros.
- Tooltip se abre con pulsación o pulsación larga y se cierra automáticamente tras cinco segundos.
- Popover flota sobre la pantalla, anclado al trigger o a PopoverAnchor, sin desplazar el contenido. Admite side, align, offsets, colisiones, asChild y cierre exterior/Atrás. Se ajusta al teclado y permite desplazar su contenido.
- HoverCard solo está disponible en web; en nativo utiliza Popover o Tooltip.
- Los eventos táctiles son `onPress`, los campos usan `onChangeText` y los contenedores reciben `ViewProps`. No se pueden trasladar propiedades DOM ni hijos de Recharts directamente a React Native.
- ChartContainer nativo recibe `data: { label, value, key? }[]`, dibuja barras táctiles y comparte la selección con ChartTooltip. No incorpora el motor Recharts ni todos sus tipos de gráfico.
- Calendar recibe `localeCode`, `selected`, `onSelect`, `minDate`, `maxDate` y `disabled`. Usa fechas locales y ofrece selección simple, múltiple y de rango. DatePicker añade aplicación/cancelación, mes, año y hora de 12/24 horas.
- Code presenta texto seleccionable, numeración de líneas y compartir mediante Android. No incorpora resaltado sintáctico ni el portapapeles web.
- ScrollBar y SheetOverlay conservan los puntos de composición; sus indicadores/overlay los gestiona el anfitrión nativo. No dibujan elementos adicionales.
- BreadcrumbLink abre `href` con Linking o ejecuta `onPress`. Kbd es una etiqueta para teclados físicos, no un registro de atajos.
- InputOTP usa un campo nativo único para el pegado, borrado, autocompletado y lectura accesible; las casillas son la representación visual del mismo valor.
- `toast`, `toast.success`, `toast.error` y `toast.dismiss` gestionan notificaciones locales mediante Notifee. Toaster es un helper opcional de configuración sin interfaz; la entrega y el permiso corresponden al sistema operativo.
- La igualdad de familias no implica igualdad completa de todas las propiedades o variantes de escritorio. Estas diferencias forman parte de la API nativa y deben tenerse en cuenta al portar una pantalla.

## Validación

- `pnpm --filter @kivora/native build` genera JavaScript y declaraciones públicas.
- `pnpm --filter @kivora/native test` comprueba fechas y cobertura de exportaciones/ejemplos.
- `pnpm --filter @kivora/example-app typecheck` verifica los ejemplos.
- `python -X utf8 example/app/tests/component-parity-smoke.py` ejercita interacciones en el emulador abierto.

## Filtros adaptables

En la app, Mostrador e Inventario usan Gorhom BottomSheet en móvil y un panel integrado en tablet. El selector de categoría conserva su propio panel; los filtros se aplican inmediatamente y el botón de resultados cierra el panel.

En DataTable web, el breakpoint móvil usa Sheet inferior, con altura limitada, desplazamiento y cierre. En tablet/escritorio conserva Popover. Se comparte el estado de filtros entre ambas presentaciones.
