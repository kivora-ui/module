# Migración de componentes

Los siguientes cambios eliminan exports antiguos en lugar de mantener alias. Afectan a los componentes y a sus tipos de props.

| Antes | Ahora |
| --- | --- |
| `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` | `Accordion type="single" collapsible` con `AccordionItem`, `AccordionTrigger` y `AccordionContent` |
| `DropdownMenu` y `DropdownMenu*` (web) | `Menu` y `Menu*` |
| `Menubar` | `Menu variant="bar"` |
| `MenubarMenu` | `MenuDropdown` |
| Otros `Menubar*` | Los correspondientes `Menu*` |
| `VirtualScrollArea` | `ScrollArea virtualized` |
| `QRCode` | `Barcode format="qrcode"` |
| `QRCode size={200}` | `Barcode format="qrcode" width={200} height={200}` |

## Menu

`Menu` abre un desplegable de acciones en web y un panel inferior en native. `Menu variant="bar"` agrupa varios `MenuDropdown`. En web conserva la navegación entre menús mediante las flechas del teclado. Se comparten `MenuTrigger`, `MenuContent`, `MenuItem`, checkbox, radio y submenús.

```tsx
<Menu variant="bar">
  <MenuDropdown>
    <MenuTrigger>Archivo</MenuTrigger>
    <MenuContent>
      <MenuItem onSelect={crearDocumento}>Nuevo</MenuItem>
    </MenuContent>
  </MenuDropdown>
</Menu>
```

En native, coloca el texto del trigger en un componente `Text`. La variante desplegable conserva `open`, `defaultOpen` y `onOpenChange`; la barra web conserva `value`, `defaultValue` y `onValueChange`.

## ScrollArea

Sin `virtualized`, continúa aceptando contenido mediante `children`.

En web, `virtualized` conserva `items`, `renderItem`, `estimateSize`, `getItemKey`, `overscan`, `horizontal` y `measureItems`. El ref apunta al contenedor raíz.

En native, `virtualized` utiliza `FlatList` y conserva sus props (`data`, `renderItem`, `keyExtractor`, etc.). El ref apunta a `FlatList`; sin virtualización apunta a `ScrollView`. Define una altura o un contenedor con altura limitada.

## Accordion y Barcode

Para un único bloque plegable, utiliza un `AccordionItem` con un `value` estable dentro de `Accordion type="single" collapsible`. El estado controlado pasa de un booleano a `value` / `onValueChange` (cadena vacía cuando está cerrado).

`Barcode format="qrcode"` conserva `value`, colores, margen, nivel de corrección, `onError` y `fallback`. Los tamaños se expresan con `width` y `height`.
