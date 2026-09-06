# DatePicker

## Formato de hora

```tsx
<DatePicker withTime timeFormat="12h" /> // 01–12 y selector AM/PM (predeterminado)
<DatePicker withTime timeFormat="24h" /> // 00–23, sin AM/PM
```

`timeFormat` controla el editor, el texto del campo y el resumen antes de aplicar. La medianoche se representa como `00:00` en 24 horas y `12:00 AM` en 12 horas. Cambiar el formato conserva la hora seleccionada. `localeCode` sigue controlando el idioma y el formato de la fecha.

`DatePicker` admite `single`, `range`, `month` y `year`. `withTime` añade hora y minutos al modo `single`. Para seleccionar varias fechas independientes o restringir días con `disabled`, utiliza `Calendar`, que expone las propiedades de DayPicker.

## Confirmación y cancelación

Con pie de acciones (por defecto en rango y fecha con hora), la selección es provisional hasta pulsar **Apply**. Solo entonces se llama a `onValueChange`. **Cancel**, Escape y cerrar pulsando fuera descartan los cambios. **Clear** vacía la selección provisional; se confirma con Apply. Un rango con solo fecha inicial no se puede aplicar; pulsar dos veces el mismo día permite un rango de un día.

Este comportamiento corrige el anterior, que publicaba los cambios aunque se pulsara Cancel. Para recibir las selecciones inmediatamente, utiliza `showFooter={false}`. En ese caso un rango publica primero `{ from, to: undefined }` y después el rango completo.

La selección de fecha simple, mes y año sin pie se confirma inmediatamente. Un rango completado se reinicia al pulsar otro día. Si la segunda fecha es anterior a la primera, los extremos se ordenan automáticamente.

## Valores controlados y formato

Si proporcionas `value`, incluso `value={undefined}`, el componente es controlado: el padre debe actualizarlo en `onValueChange`. Sin `value`, utiliza `defaultValue` para inicializar el estado interno. Al abrir, el calendario y la hora se sincronizan con el valor guardado más reciente.

Utiliza fechas locales, por ejemplo `new Date(2026, 8, 3)`, para representar el 3 de septiembre. `locale` configura el calendario y su código se utiliza como formato del campo salvo que se indique `localeCode`. Las etiquetas de acciones y los presets predeterminados siguen en inglés; `presets` permite proporcionar rangos con etiquetas propias.

`startView` permite empezar por la elección de mes o año. `numberOfMonths` controla los meses visibles y `showPresets` los accesos rápidos del rango. En pantallas estrechas los meses se apilan y el panel permite desplazarse.
