# Filtros de DataTable

La prop `filters` declara qué controles aparecen y a qué columnas filtran. No necesitas mantener un estado para cada campo: `DataTable` conecta los controles, filtra las filas y vuelve a la primera página al cambiar un filtro.

```tsx
import { DataTable, type DataTableColumnDef, type DataTableFilter } from "@kivora/nextjs";

type Product = {
  name: string;
  status: "active" | "paused";
  needsRestock: boolean;
};

const columns: DataTableColumnDef<Product>[] = [
  { accessorKey: "name", header: "Producto" },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ getValue }) => getValue() === "active" ? "Activo" : "Pausado",
  },
  {
    accessorKey: "needsRestock",
    header: "Reposición",
    cell: ({ getValue }) => getValue() ? "Necesaria" : "Al día",
  },
];

const filters = [
  {
    columnId: "status",
    type: "select",
    label: "Estado",
    placeholder: "Todos los estados",
    options: [
      { label: "Activo", value: "active" },
      { label: "Pausado", value: "paused" },
    ],
  },
  {
    columnId: "needsRestock",
    type: "switch",
    label: "Solo para reponer",
    description: "Activado: necesita reposición. Desactivado: todos los productos.",
  },
] satisfies DataTableFilter[];

export function Products({ data }: { data: Product[] }) {
  return <DataTable columns={columns} data={data} filters={filters} searchable paginated />;
}
```

## Qué hace cada tipo

En este ejemplo, el buscador principal permite buscar por nombre. El panel contiene criterios adicionales: estado y necesidad de reposición. Evita duplicar la búsqueda por nombre con otro campo en los filtros. El tipo `text` sigue disponible para búsquedas específicas por columna cuando sean necesarias.

| Tipo | Control | Comparación predeterminada | Cómo se quita |
| --- | --- | --- | --- |
| `text` | Campo de texto | Contiene el texto, sin distinguir mayúsculas | Vaciar el campo |
| `select` | Componente `Select` de Kivora | Igualdad exacta con `option.value` | Elegir «All» o el `placeholder` |
| `switch` | Interruptor | Activado: valor de columna igual a `true` | Desactivarlo muestra todos |

Los filtros se combinan con **AND**: «Estado activo» + «Solo para reponer» muestra únicamente productos activos que necesitan reposición. La búsqueda general también se combina con ellos. Todo se aplica inmediatamente; cerrar el panel conserva los filtros. Las etiquetas bajo la barra permiten quitar cada filtro y **Clear** limpia los filtros de columna, manteniendo la búsqueda general.

Un switch desactivado significa **sin filtro**, no «solo falsos». Para distinguir «Todos / Sí / No», utiliza `select` con opciones de valor `true` y `false`. Las opciones admiten `string`, `number` y `boolean`; `0`, `false` y `""` son valores válidos y no se confunden con «Todos».

## Columnas y reglas personalizadas

- `columnId` debe coincidir con el `id` de la columna; normalmente es su `accessorKey`. Si utilizas `accessorFn`, declara un `id` explícito. El encabezado visible no es el identificador.
- Los filtros comparan el dato obtenido por el accessor, no el texto renderizado en `cell`. Por ejemplo, se filtra por `"active"` aunque la celda muestre «Activo».
- Si una columna define `filterFn`, se conserva esa función en lugar de la comparación predeterminada. Recibe el valor del control: texto, valor original de la opción o `true` para el switch.
- Cada filtro corresponde a una columna. Para un switch «Solo con stock», puedes crear un accessor booleano como `accessorFn: product => product.stock > 0` con un `id` explícito.
- `enableColumnFilter: false` excluye una columna. Un `columnId` inexistente genera un error con el nombre del filtro para detectar una configuración incorrecta.

## Compatibilidad y alcance

Pasar `filters` activa el panel sin necesitar `advanced` ni `filterable`. `filterable={false}` lo desactiva. `filters={[]}` evita generar controles automáticos. Sin `filters`, se conserva el comportamiento anterior de `filterable`/`advanced`: campos de texto para las columnas filtrables. Para nuevas tablas, declara los filtros explícitamente.

`filterMenuOpen` y `onFilterMenuOpenChange` siguen disponibles para controlar la apertura. El panel usa un popover con controles de formulario y etiquetas accesibles.

En escritorio, las opciones de `Select` se renderizan en un portal sobre el panel, sin aumentar su altura ni generar scroll en los filtros. En móvil se mantiene el panel de opciones de Kivora.

El filtrado ocurre en el navegador sobre las filas de `data`. No realiza peticiones ni filtra registros que no se hayan cargado. Para paginación o filtros en servidor, el consumidor debe gestionar la consulta y usar controles externos; esta API no implementa ese flujo.

Puedes probar el ejemplo en `/componentes`, buscando «DataTable».
