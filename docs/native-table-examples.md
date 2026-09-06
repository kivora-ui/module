# Ejemplos de tablas nativas

En Android: **Ajustes → Ver componentes → buscar «Table»**. Hay cuatro tarjetas: la tabla básica y tres ejemplos interactivos.

- **Buscar y filtrar**: búsqueda por nombre o código sin distinguir acentos; estado con Select; categorías múltiples con Checkbox; Switch de poco stock; orden ascendente/descendente por nombre o existencias.
- **Selección simple**: RadioGroup permite elegir un producto pulsando su etiqueta o indicador.
- **Selección múltiple**: Checkbox por producto, selección de los resultados visibles, limpieza y acción de reposición simulada.

Los filtros se combinan con AND; las categorías marcadas se combinan con OR. Sin categorías marcadas se muestran todas. «Poco stock» significa cinco unidades o menos. El buscador permanece fuera del panel de filtros.

La selección se guarda por identificador y sobrevive a búsqueda, filtros y ordenación. El resumen distingue los seleccionados fuera de los resultados. Seleccionar o desmarcar todos los visibles conserva los seleccionados ocultos. Limpiar selección elimina todos. Limpiar filtros no borra la búsqueda ni la selección.

Implementación: `example/app/src/table-examples.tsx`. Se compone Table con Input, Select, BottomSheet, Switch, Checkbox y RadioGroup; no se añade una API DataTable al paquete nativo. Los seis productos y las acciones son de demostración, sin modificar inventario ni ventas. Las filas están memoizadas y el filtrado/ordenación solo se recalculan al cambiar sus entradas.

Validación Android: `python -X utf8 example/app/tests/table-examples-smoke.py`.
