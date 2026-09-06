import * as React from 'react';
import { Text, View } from 'react-native';
import * as K from '@kivora/native';
import { useExampleState } from './example-state';

type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  active: boolean;
};
const products: Product[] = [
  {
    id: 'P01',
    name: 'Gasas estériles',
    category: 'Botiquín',
    stock: 24,
    active: true,
  },
  {
    id: 'P02',
    name: 'Termómetro digital',
    category: 'Botiquín',
    stock: 4,
    active: true,
  },
  {
    id: 'P03',
    name: 'Protector solar',
    category: 'Dermocosmética',
    stock: 12,
    active: true,
  },
  {
    id: 'P04',
    name: 'Crema hidratante',
    category: 'Dermocosmética',
    stock: 3,
    active: false,
  },
  {
    id: 'P05',
    name: 'Gel de manos',
    category: 'Higiene',
    stock: 18,
    active: true,
  },
  {
    id: 'P06',
    name: 'Cepillo dental',
    category: 'Higiene',
    stock: 0,
    active: false,
  },
];
const categories = ['Botiquín', 'Dermocosmética', 'Higiene'];
const text = 'text-base text-foreground';
type Mode = 'browse' | 'single' | 'multiple';
const orders = ['Nombre A–Z', 'Nombre Z–A', 'Menor stock', 'Mayor stock'];

function Choice({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <View className="gap-2">
      <Text className={text}>{label}</Text>
      <K.Select value={value} onValueChange={onChange}>
        <K.SelectTrigger accessibilityLabel={label} className="min-h-12">
          <K.SelectValue>{value}</K.SelectValue>
        </K.SelectTrigger>
        <K.SelectContent>
          {values.map(option => (
            <K.SelectItem
              key={option}
              value={option}
              accessibilityLabel={option}
            >
              <Text className={text}>{option}</Text>
            </K.SelectItem>
          ))}
        </K.SelectContent>
      </K.Select>
    </View>
  );
}

const ProductRow = React.memo(function ProductRow({
  product,
  mode,
  checked,
  onToggle,
}: {
  product: Product;
  mode: Mode;
  checked: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <K.TableRow className={checked ? 'bg-accent/50' : ''}>
      <View className="flex-1 gap-1 px-3 py-2">
        {mode === 'multiple' ? (
          <K.Checkbox
            label={product.name}
            checked={checked}
            onCheckedChange={() => onToggle(product.id)}
          />
        ) : mode === 'single' ? (
          <K.RadioGroupItem value={product.id} label={product.name} />
        ) : (
          <Text className={text}>{product.name}</Text>
        )}
        <Text className="text-sm text-muted-foreground">
          {product.category} · {product.active ? 'Activo' : 'Inactivo'}
        </Text>
      </View>
      <K.TableCell
        style={{ flex: 0, width: 66, textAlign: 'right' }}
        accessibilityLabel={`${product.name}: ${product.stock} unidades`}
      >
        {product.stock}
      </K.TableCell>
    </K.TableRow>
  );
});

const InteractiveTable = React.memo(function InteractiveTable({
  mode,
}: {
  mode: Mode;
}) {
  const key = `table:${mode}:`;
  const [query, setQuery] = useExampleState(key + 'query', '');
  const [status, setStatus] = useExampleState(key + 'status', 'Todos');
  const [selectedCategories, setCategories] = useExampleState<string[]>(
    key + 'categories',
    [],
  );
  const [low, setLow] = useExampleState(key + 'low', false);
  const [order, setOrder] = useExampleState(key + 'order', orders[0]!);
  const [selection, setSelection] = useExampleState<string[]>(
    key + 'selection',
    [],
  );
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const visible = React.useMemo(() => {
    const normalize = (s: string) =>
      s
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('es');
    return products
      .filter(
        p =>
          normalize(`${p.name} ${p.id}`).includes(normalize(query.trim())) &&
          (status === 'Todos' || p.active === (status === 'Activos')) &&
          (!selectedCategories.length ||
            selectedCategories.includes(p.category)) &&
          (!low || p.stock <= 5),
      )
      .sort((a, b) =>
        order === 'Menor stock'
          ? a.stock - b.stock
          : order === 'Mayor stock'
            ? b.stock - a.stock
            : (order === 'Nombre Z–A' ? -1 : 1) *
              a.name.localeCompare(b.name, 'es'),
      );
  }, [query, status, selectedCategories, low, order]);
  const toggle = React.useCallback(
    (id: string) =>
      setSelection(old =>
        old.includes(id) ? old.filter(value => value !== id) : [...old, id],
      ),
    [setSelection],
  );
  const allVisible =
    visible.length > 0 && visible.every(p => selection.includes(p.id));
  const selectedVisible = visible.filter(p => selection.includes(p.id)).length;
  const filterCount =
    selectedCategories.length + Number(status !== 'Todos') + Number(low);
  const clearFilters = () => {
    setStatus('Todos');
    setCategories([]);
    setLow(false);
  };
  const rows = (
    <K.Table>
      <K.TableHeader>
        <K.TableRow>
          <K.TableHead>Producto</K.TableHead>
          <K.TableHead style={{ flex: 0, width: 66, paddingHorizontal: 8 }}>
            Stock
          </K.TableHead>
        </K.TableRow>
      </K.TableHeader>
      <K.TableBody>
        {visible.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            mode={mode}
            checked={selection.includes(product.id)}
            onToggle={toggle}
          />
        ))}
      </K.TableBody>
    </K.Table>
  );
  return (
    <View className="gap-4">
      <K.Input
        accessibilityLabel="Buscar en la tabla"
        placeholder="Buscar producto o código…"
        value={query}
        onChangeText={setQuery}
        className="min-h-12"
      />
      <K.Button variant="outline" onPress={() => setOpen(true)}>
        <Text className={text}>
          Filtros de tabla{filterCount ? ` (${filterCount})` : ''}
        </Text>
      </K.Button>
      <Choice
        label="Ordenar tabla"
        value={order}
        values={orders}
        onChange={setOrder}
      />
      <Text
        accessibilityLiveRegion="polite"
        className="text-sm text-muted-foreground"
      >
        {visible.length} de {products.length} productos
      </Text>
      {mode === 'multiple' && (
        <K.Checkbox
          label={`Seleccionar visibles (${selectedVisible}/${visible.length})`}
          disabled={!visible.length}
          checked={allVisible}
          onCheckedChange={checked =>
            setSelection(old =>
              checked
                ? [...new Set([...old, ...visible.map(p => p.id)])]
                : old.filter(id => !visible.some(p => p.id === id)),
            )
          }
        />
      )}
      {mode === 'single' ? (
        <K.RadioGroup
          value={selection[0] ?? ''}
          onValueChange={id => setSelection([id])}
        >
          {rows}
        </K.RadioGroup>
      ) : (
        rows
      )}
      {!visible.length && (
        <Text className={text}>
          Sin productos. Cambia la búsqueda o los filtros.
        </Text>
      )}
      {mode !== 'browse' && (
        <View className="gap-2">
          <Text className={text} accessibilityLiveRegion="polite">
            {selection.length} seleccionados ·{' '}
            {selection.length - selectedVisible} fuera de los resultados
          </Text>
          <Text className="text-sm text-muted-foreground">
            {selection.length
              ? products
                  .filter(p => selection.includes(p.id))
                  .map(p => p.name)
                  .join(', ')
              : 'Pulsa una fila para seleccionar un producto.'}
          </Text>
          <K.Button
            disabled={!selection.length}
            onPress={() =>
              setMessage(
                `Lista de reposición preparada: ${selection.length} productos (ejemplo).`,
              )
            }
          >
            <Text className="text-base text-primary-foreground">
              Preparar reposición
            </Text>
          </K.Button>
          <K.Button
            variant="outline"
            disabled={!selection.length}
            onPress={() => {
              setSelection([]);
              setMessage('');
            }}
          >
            <Text className={text}>Limpiar selección</Text>
          </K.Button>
          {!!message && (
            <Text accessibilityRole="alert" className={text}>
              {message}
            </Text>
          )}
        </View>
      )}
      <K.BottomSheet
        open={open}
        onOpenChange={setOpen}
        className="gap-5 px-5 pb-2"
      >
        <K.CardTitle>Filtrar tabla</K.CardTitle>
        <Choice
          label="Estado del producto"
          value={status}
          values={['Todos', 'Activos', 'Inactivos']}
          onChange={setStatus}
        />
        <View className="gap-2">
          <Text className="text-sm font-semibold text-muted-foreground">
            Categorías
          </Text>
          <View className="rounded-xl border border-border px-3">
            {categories.map(category => (
              <K.Checkbox
                key={category}
                label={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={checked =>
                  setCategories(old =>
                    checked
                      ? [...old, category]
                      : old.filter(value => value !== category),
                  )
                }
              />
            ))}
          </View>
        </View>
        <View className="rounded-xl bg-muted/40 px-3">
          <K.Switch
            label="Solo poco stock (5 o menos)"
            checked={low}
            onCheckedChange={setLow}
          />
        </View>
        <View
          className="flex-row gap-3 border-t border-border"
          style={{ paddingTop: 16 }}
        >
          <K.Button
            className="flex-1 min-h-12"
            variant="outline"
            accessibilityLabel="Limpiar filtros de tabla"
            onPress={clearFilters}
          >
            <Text className={text}>Limpiar</Text>
          </K.Button>
          <K.Button className="flex-1 min-h-12" onPress={() => setOpen(false)}>
            <Text className="text-base text-primary-foreground">
              Ver {visible.length} resultados
            </Text>
          </K.Button>
        </View>
      </K.BottomSheet>
    </View>
  );
});

export const tableExamples = [
  {
    name: 'Table · Buscar y filtrar',
    description:
      'Búsqueda, categorías múltiples, estado, poco stock y ordenación.',
    content: <InteractiveTable mode="browse" />,
  },
  {
    name: 'Table · Selección simple',
    description:
      'Elige un producto con RadioGroup para preparar su reposición.',
    content: <InteractiveTable mode="single" />,
  },
  {
    name: 'Table · Selección múltiple',
    description:
      'Marca productos, selecciona los resultados visibles y prepara una reposición de ejemplo.',
    content: <InteractiveTable mode="multiple" />,
  },
];
