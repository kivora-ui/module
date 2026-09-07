import './global.css';
import * as GoogleCast from 'react-native-google-cast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { OrientationLocker, PORTRAIT } from 'react-native-orientation-locker';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  KivoraProvider,
  AudioPlayerProvider,
  KeyboardScrollView,
  Button,
  Card,
  CardTitle,
  CardDescription,
  Badge,
  Input,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Separator,
  Progress,
  BottomSheet,
  Toaster,
} from '@kivora/native';
import type { LucideIcon } from 'lucide-react-native';
import Check from 'lucide-react-native/icons/check';
import Home from 'lucide-react-native/icons/house';
import Package from 'lucide-react-native/icons/package';
import Plus from 'lucide-react-native/icons/plus';
import Minus from 'lucide-react-native/icons/minus';
import ReceiptText from 'lucide-react-native/icons/receipt-text';
import Settings from 'lucide-react-native/icons/settings';
import ShoppingBag from 'lucide-react-native/icons/shopping-bag';
import ShoppingCart from 'lucide-react-native/icons/shopping-cart';
import SlidersHorizontal from 'lucide-react-native/icons/sliders-horizontal';
import Sparkles from 'lucide-react-native/icons/sparkles';
import Sun from 'lucide-react-native/icons/sun';
import Moon from 'lucide-react-native/icons/moon';
import { money, type Product, type Sale } from './src/data';
import { cartTotal, checkout, restock, setQuantity } from './src/store';
import { useStore } from './src/use-store';
import { themeVariables } from './src/theme';
import { ComponentScreen } from './src/component-screen';
import { PlayerScreen } from './src/player-screen';
import { getPlayerDownloads } from './src/player-downloads';

type Screen =
  'Inicio' | 'Mostrador' | 'Inventario' | 'Ventas' | 'Ajustes' | 'Componentes' | 'Player';
const navigation: { name: Screen; icon: LucideIcon }[] = [
  { name: 'Inicio', icon: Home },
  { name: 'Mostrador', icon: ShoppingBag },
  { name: 'Inventario', icon: Package },
  { name: 'Ventas', icon: ReceiptText },
  { name: 'Ajustes', icon: Settings },
];
const muted = 'text-base leading-6 text-muted-foreground';
const body = 'text-base leading-6 text-foreground';

function FilterPanel({
  tablet,
  open,
  onOpenChange,
  children,
}: {
  tablet: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  if (tablet)
    return open ? <Card className="gap-4 p-4">{children}</Card> : null;
  return (
    <BottomSheet open={open} onOpenChange={onOpenChange}>
      {children}
    </BottomSheet>
  );
}

function Action({
  children,
  onPress,
  secondary = false,
  disabled = false,
  label,
}: {
  children: React.ReactNode;
  onPress: () => void;
  secondary?: boolean;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <Button
      accessibilityLabel={label}
      variant={secondary ? 'outline' : 'default'}
      disabled={disabled}
      onPress={onPress}
      className="min-h-12 h-auto rounded-xl px-4 py-3"
    >
      <Text
        className={`text-base font-semibold ${secondary ? 'text-foreground' : 'text-primary-foreground'}`}
      >
        {children}
      </Text>
    </Button>
  );
}
function Choice({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        accessibilityLabel={label}
        className="min-h-12 h-auto rounded-xl py-3"
      >
        <SelectValue className="text-base" />
      </SelectTrigger>
      <SelectContent>
        <Text className="px-3 py-3 text-lg font-semibold text-foreground">
          {label}
        </Text>
        {options.map(option => (
          <SelectItem
            key={option}
            value={option}
            accessibilityLabel={option}
            className="min-h-12 rounded-lg"
          >
            <Text className={body}>{option}</Text>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function App() {
  useEffect(() => { getPlayerDownloads(); }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KeyboardProvider statusBarTranslucent navigationBarTranslucent preload={false}>
          <Pharmacy />
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function Pharmacy() {
  const { state, ready, error, update } = useStore();
  const [screen, setScreen] = useState<Screen>('Inicio');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas las categorías');
  const [lowStock, setLowStock] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [method, setMethod] = useState<Sale['method']>('Tarjeta');
  const [customer, setCustomer] = useState('Cliente de mostrador');
  const [received, setReceived] = useState('');
  const [restocking, setRestocking] = useState<Product | null>(null);
  const [units, setUnits] = useState('10');
  const [receipt, setReceipt] = useState<Sale | null>(null);
  const { width } = useWindowDimensions();
  const tablet = width >= 768;
  const dark = state.settings.dark;
  const ink = dark ? '#ededed' : '#202020';
  const total = useMemo(() => cartTotal(state), [state.cart, state.products]);
  const count = Object.values(state.cart).reduce(
    (sum, value) => sum + value,
    0,
  );
  const low = useMemo(
    () => state.products.filter(p => p.stock <= p.minimum),
    [state.products],
  );
  const today = state.sales.filter(
    s => new Date(s.date).toDateString() === new Date().toDateString(),
  );
  const todayTotal = today.reduce((sum, sale) => sum + sale.total, 0);
  const categories = useMemo(
    () => [
      'Todas las categorías',
      ...new Set(state.products.map(p => p.category)),
    ],
    [state.products],
  );
  const normalizedQuery = query.trim().toLocaleLowerCase('es');
  const products = useMemo(
    () =>
      state.products.filter(
        p =>
          `${p.name} ${p.brand} ${p.id}`
            .toLocaleLowerCase('es')
            .includes(normalizedQuery) &&
          (category === categories[0] || p.category === category) &&
          (!lowStock || p.stock <= p.minimum),
      ),
    [state.products, normalizedQuery, category, categories, lowStock],
  );

  const navigate = useCallback(
    (next: Screen) => {
      setScreen(next);
      setQuery('');
      setCategory(categories[0]!);
      setLowStock(false);
      setCartOpen(false);
      setFiltersOpen(false);
      setReceipt(null);
      setRestocking(null);
    },
    [categories],
  );
  useEffect(() => {
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (receipt) setReceipt(null);
      else if (restocking) setRestocking(null);
      else if (cartOpen) setCartOpen(false);
      else if (screen === 'Componentes' || screen === 'Player') navigate('Ajustes');
      else if (screen !== 'Inicio') navigate('Inicio');
      else return false;
      return true;
    });
    return () => handler.remove();
  }, [receipt, restocking, cartOpen, screen, navigate]);
  const safely = (action: () => void) => {
    try {
      action();
    } catch (failure) {
      Alert.alert(
        'Revisa la operación',
        failure instanceof Error ? failure.message : 'No se pudo completar.',
      );
    }
  };
  const changeQuantity = (p: Product, delta: number) =>
    safely(() =>
      update(previous =>
        setQuantity(previous, p.id, (previous.cart[p.id] ?? 0) + delta),
      ),
    );
  const pay = () =>
    safely(() => {
      if (
        method === 'Efectivo' &&
        (!Number.isFinite(Number(received.replace(',', '.'))) ||
          Math.round(Number(received.replace(',', '.')) * 100) < total)
      )
        throw new Error('El importe recibido debe cubrir el total.');
      let completed: Sale | undefined;
      update(previous => {
        const next = checkout(previous, method, customer);
        completed = next.sales[0];
        return next;
      });
      if (completed) {
        setReceipt(completed);
        setCartOpen(false);
        setReceived('');
      }
    });

  return (
    <KivoraProvider colorMode={dark ? 'dark' : 'light'}>
      <View style={themeVariables(dark)} className="flex-1 bg-background">
        <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
        <SafeAreaView className="flex-1" edges={['top', 'bottom']}>
          <OrientationLocker orientation={PORTRAIT} />
          <AudioPlayerProvider cast={GoogleCast} airPlay bottomOffset={81}>
          {!ready ? (
            <View className="flex-1 items-center justify-center gap-4 p-6">
              <ActivityIndicator color={ink} />
              <Text className={body}>{error || 'Preparando tu farmacia…'}</Text>
            </View>
          ) : (
            <>
              <View className="flex-row items-center justify-between border-b border-border px-5 py-4">
                <View className="flex-1 flex-row items-center gap-3">
                  <View className="h-11 w-11 items-center justify-center rounded-xl bg-primary">
                    <Plus
                      size={28}
                      color={dark ? '#202020' : '#ffffff'}
                      strokeWidth={2.5}
                    />
                  </View>
                  <View className="flex-1">
                    <Text
                      className="text-lg font-bold text-foreground"
                      numberOfLines={1}
                    >
                      {state.settings.name}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      Gestión de mostrador
                    </Text>
                  </View>
                </View>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  accessibilityLabel={
                    dark ? 'Activar modo claro' : 'Activar modo oscuro'
                  }
                  onPress={() =>
                    update(s => ({
                      ...s,
                      settings: { ...s.settings, dark: !s.settings.dark },
                    }))
                  }
                >
                  {dark ? (
                    <Sun size={22} color={ink} />
                  ) : (
                    <Moon size={22} color={ink} />
                  )}
                </Button>
              </View>
              {!!error && (
                <Text
                  accessibilityRole="alert"
                  className="bg-secondary p-4 text-base text-destructive"
                >
                  {error}
                </Text>
              )}
              <View className="flex-1">
                {screen === 'Player' ? (<PlayerScreen onBack={() => navigate('Ajustes')} />) : screen === 'Componentes' ? (
                  <ComponentScreen onBack={() => navigate('Ajustes')} />
                ) : (
                  <KeyboardScrollView
                    bottomOffset={24}
                    key={`${screen}-${cartOpen}-${!!receipt}-${!!restocking}`}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                      padding: tablet ? 28 : 20,
                      gap: 20,
                      paddingBottom: 28,
                      width: '100%',
                      maxWidth: 1200,
                      alignSelf: 'center',
                    }}
                  >
                    <View className="gap-2">
                      <Text className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        {screen === 'Inicio'
                          ? 'Tu farmacia, al día'
                          : state.settings.name + ' / ' + screen}
                      </Text>
                      <Text
                        accessibilityRole="header"
                        className="text-3xl font-bold text-foreground"
                      >
                        {receipt
                          ? 'Venta completada'
                          : restocking
                            ? 'Recibir mercancía'
                            : cartOpen
                              ? 'Revisar venta'
                              : screen === 'Inicio'
                                ? 'Buen día, equipo.'
                                : screen}
                      </Text>
                      <Text className={muted}>
                        {screen === 'Inicio'
                          ? new Date().toLocaleDateString('es-ES', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long',
                            })
                          : screen === 'Mostrador'
                            ? 'Una atención cercana. Una venta sencilla.'
                            : screen === 'Inventario'
                              ? 'Existencias y reposición, bajo control.'
                              : screen === 'Ventas'
                                ? 'Consulta los tickets de esta farmacia.'
                                : 'Tu espacio de trabajo.'}
                      </Text>
                    </View>

                    {receipt ? (
                      <Card className="gap-4 p-5">
                        <Check size={32} color={ink} />
                        <CardTitle>Cobro registrado</CardTitle>
                        <Text className={muted}>
                          {receipt.id} · {receipt.method}
                        </Text>
                        {receipt.lines.map(line => (
                          <View
                            key={line.productId}
                            className="flex-row justify-between gap-4"
                          >
                            <Text className={`${body} flex-1`}>
                              {line.quantity} × {line.name}
                            </Text>
                            <Text className={body}>
                              {money(line.price * line.quantity)}
                            </Text>
                          </View>
                        ))}
                        <Separator />
                        <Text className="text-3xl font-bold text-foreground">
                          {money(receipt.total)}
                        </Text>
                        <Text className={muted}>{receipt.customer}</Text>
                        <Text className={muted}>{state.settings.receipt}</Text>
                        <Action
                          onPress={() => {
                            setReceipt(null);
                            setScreen('Mostrador');
                          }}
                        >
                          Nueva venta
                        </Action>
                      </Card>
                    ) : restocking ? (
                      <Card className="gap-4 p-5">
                        <CardTitle>{restocking.name}</CardTitle>
                        <CardDescription>
                          Stock actual: {restocking.stock} unidades
                        </CardDescription>
                        <Text className={body}>Unidades recibidas</Text>
                        <Input
                          accessibilityLabel="Unidades recibidas"
                          keyboardType="number-pad"
                          value={units}
                          onChangeText={setUnits}
                          className="h-12 text-base"
                        />
                        <Action
                          onPress={() =>
                            safely(() => {
                              update(s =>
                                restock(s, restocking.id, Number(units)),
                              );
                              setRestocking(null);
                            })
                          }
                        >
                          Confirmar entrada
                        </Action>
                        <Action secondary onPress={() => setRestocking(null)}>
                          Cancelar
                        </Action>
                      </Card>
                    ) : cartOpen ? (
                      <>
                        {state.products
                          .filter(p => state.cart[p.id])
                          .map(p => (
                            <Card key={p.id} className="gap-3 p-4">
                              <CardTitle>{p.name}</CardTitle>
                              <View className="flex-row items-center justify-between">
                                <Text className={body}>
                                  {money(p.price * state.cart[p.id]!)}
                                </Text>
                                <View className="flex-row items-center gap-4">
                                  <Button
                                    variant="outline"
                                    className="h-12 w-12"
                                    accessibilityLabel={`Quitar uno de ${p.name}`}
                                    onPress={() => changeQuantity(p, -1)}
                                  >
                                    <Minus color={ink} size={18} />
                                  </Button>
                                  <Text className="text-lg font-bold text-foreground">
                                    {state.cart[p.id]}
                                  </Text>
                                  <Button
                                    variant="outline"
                                    className="h-12 w-12"
                                    disabled={state.cart[p.id]! >= p.stock}
                                    accessibilityLabel={`Añadir uno de ${p.name}`}
                                    onPress={() => changeQuantity(p, 1)}
                                  >
                                    <Plus color={ink} size={18} />
                                  </Button>
                                </View>
                              </View>
                            </Card>
                          ))}
                        {!count && (
                          <Text className={muted}>
                            El carrito está vacío. Añade productos para
                            continuar.
                          </Text>
                        )}
                        <Card className="gap-4 p-5">
                          <CardTitle>Total · {money(total)}</CardTitle>
                          <Text className={body}>Cliente</Text>
                          <Choice
                            label="Cliente de la venta"
                            value={customer}
                            onChange={setCustomer}
                            options={[
                              'Cliente de mostrador',
                              ...state.customers.map(c => c.name),
                            ]}
                          />
                          <Text className={body}>Forma de pago</Text>
                          <Choice
                            label="Forma de pago"
                            value={method}
                            onChange={v => setMethod(v as Sale['method'])}
                            options={['Tarjeta', 'Efectivo']}
                          />
                          {method === 'Efectivo' && (
                            <>
                              <Input
                                accessibilityLabel="Efectivo recibido"
                                placeholder="Importe recibido en euros"
                                keyboardType="decimal-pad"
                                value={received}
                                onChangeText={setReceived}
                                className="h-12 text-base"
                              />
                              <Text className={muted}>
                                Cambio:{' '}
                                {money(
                                  Math.max(
                                    0,
                                    Math.round(
                                      (Number(received.replace(',', '.')) ||
                                        0) * 100,
                                    ) - total,
                                  ),
                                )}
                              </Text>
                            </>
                          )}
                          <Text className="text-sm leading-5 text-muted-foreground">
                            Venta de demostración: registra el ticket y
                            descuenta existencias. No realiza cargos bancarios.
                          </Text>
                          <Action disabled={!count} onPress={pay}>
                            Confirmar cobro · {money(total)}
                          </Action>
                          <Action secondary onPress={() => setCartOpen(false)}>
                            Volver a productos
                          </Action>
                        </Card>
                      </>
                    ) : (
                      <>
                        {screen === 'Inicio' && (
                          <>
                            <Card className="gap-5 p-5">
                              <View className="flex-row items-center justify-between">
                                <Badge variant="secondary" className="text-sm">
                                  RESUMEN DE HOY
                                </Badge>
                                <Sparkles color={ink} size={22} />
                              </View>
                              <Text className={muted}>Ventas en tienda</Text>
                              <Text className="text-5xl font-bold text-foreground">
                                {money(todayTotal)}
                              </Text>
                              <Text className={muted}>
                                {today.length} tickets · {state.products.length}{' '}
                                referencias
                              </Text>
                              <Action onPress={() => navigate('Mostrador')}>
                                Abrir mostrador ↗
                              </Action>
                            </Card>
                            <View className="flex-row gap-3">
                              <Card className="flex-1 gap-3 p-4">
                                <ShoppingCart color={ink} size={22} />
                                <Text className="text-3xl font-bold text-foreground">
                                  {count}
                                </Text>
                                <Text className={muted}>En el carrito</Text>
                              </Card>
                              <Card className="flex-1 gap-3 p-4">
                                <Package color={ink} size={22} />
                                <Text className="text-3xl font-bold text-foreground">
                                  {low.length}
                                </Text>
                                <Text className={muted}>Para reponer</Text>
                              </Card>
                            </View>
                            {state.settings.alerts && (
                              <Card className="gap-4 p-5">
                                <CardTitle>
                                  Prepara tu siguiente turno
                                </CardTitle>
                                <Text className={muted}>
                                  {low.length
                                    ? `${low.length} productos están por debajo del stock recomendado.`
                                    : 'Todas las referencias tienen stock suficiente.'}
                                </Text>
                                {low.slice(0, 3).map(p => (
                                  <View
                                    key={p.id}
                                    className="flex-row justify-between gap-3"
                                  >
                                    <Text className={`${body} flex-1`}>
                                      {p.name}
                                    </Text>
                                    <Badge variant="outline">
                                      {p.stock} uds.
                                    </Badge>
                                  </View>
                                ))}
                                <Action
                                  secondary
                                  onPress={() => {
                                    navigate('Inventario');
                                    setLowStock(true);
                                  }}
                                >
                                  Revisar existencias
                                </Action>
                              </Card>
                            )}
                            <Text className="text-sm leading-5 text-muted-foreground">
                              Espacio de demostración · datos guardados en este
                              dispositivo.
                            </Text>
                          </>
                        )}

                        {(screen === 'Mostrador' ||
                          screen === 'Inventario') && (
                          <>
                            <Input
                              accessibilityLabel="Buscar productos"
                              placeholder="Buscar producto, marca o código…"
                              value={query}
                              onChangeText={setQuery}
                              className="h-14 rounded-xl text-base"
                            />
                            <View className="flex-row items-center justify-between">
                              <Text className={muted}>
                                {products.length} productos
                              </Text>
                              <Button
                                variant="outline"
                                onPress={() => setFiltersOpen(!filtersOpen)}
                                accessibilityLabel="Mostrar filtros"
                                className="h-12 gap-2 rounded-xl"
                              >
                                <SlidersHorizontal size={18} color={ink} />
                                <Text className={body}>
                                  Filtros
                                  {lowStock || category !== categories[0]
                                    ? ' · activos'
                                    : ''}
                                </Text>
                              </Button>
                            </View>
                            <FilterPanel
                              tablet={tablet}
                              open={filtersOpen}
                              onOpenChange={setFiltersOpen}
                            >
                              <CardTitle>Filtrar productos</CardTitle>
                              <Text className={body}>Categoría</Text>
                              <Choice
                                label="Categoría"
                                value={category}
                                onChange={setCategory}
                                options={categories}
                              />
                              <Switch
                                label="Solo poco stock"
                                accessibilityLabel="Solo poco stock"
                                checked={lowStock}
                                onCheckedChange={setLowStock}
                                hitSlop={12}
                              />
                              <Action
                                secondary
                                onPress={() => {
                                  setCategory(categories[0]!);
                                  setLowStock(false);
                                }}
                              >
                                Limpiar filtros
                              </Action>
                              <Action onPress={() => setFiltersOpen(false)}>
                                Ver {products.length} productos
                              </Action>
                            </FilterPanel>
                            {!products.length && (
                              <Card className="gap-3 p-5">
                                <CardTitle>Sin resultados</CardTitle>
                                <CardDescription>
                                  Prueba otra búsqueda o limpia los filtros.
                                </CardDescription>
                              </Card>
                            )}
                            <View className="flex-row flex-wrap gap-3">
                              {products.map(p => (
                                <Card
                                  key={p.id}
                                  style={{ width: tablet ? '48.5%' : '100%' }}
                                  className="gap-4 p-4"
                                >
                                  <View className="flex-row gap-3">
                                    <View className="h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                                      <Package size={24} color={ink} />
                                    </View>
                                    <View className="flex-1 gap-1">
                                      <Text className="text-lg font-semibold text-foreground">
                                        {p.name}
                                      </Text>
                                      <Text className="text-sm text-muted-foreground">
                                        {p.brand} · {p.category}
                                      </Text>
                                    </View>
                                  </View>
                                  <View className="flex-row items-center justify-between">
                                    <Text className="text-xl font-bold text-foreground">
                                      {money(p.price)}
                                    </Text>
                                    <Badge
                                      variant={
                                        p.stock <= p.minimum
                                          ? 'outline'
                                          : 'secondary'
                                      }
                                      className="shrink-0 text-sm"
                                      numberOfLines={1}
                                      accessibilityLabel={`${p.stock} unidades en stock`}
                                    >
                                      {p.stock === 0
                                        ? 'Agotado'
                                        : `${p.stock} uds.`}
                                    </Badge>
                                  </View>
                                  {screen === 'Inventario' ? (
                                    <>
                                      <Progress
                                        value={Math.min(
                                          100,
                                          (p.stock /
                                            Math.max(1, p.minimum * 3)) *
                                            100,
                                        )}
                                      />
                                      <Text className="text-sm text-muted-foreground">
                                        Mínimo: {p.minimum} · Código {p.id}
                                      </Text>
                                      <Action
                                        secondary
                                        onPress={() => {
                                          setRestocking(p);
                                          setUnits('10');
                                        }}
                                      >
                                        Recibir unidades
                                      </Action>
                                    </>
                                  ) : (
                                    <Action
                                      secondary
                                      disabled={
                                        (state.cart[p.id] ?? 0) >= p.stock
                                      }
                                      onPress={() => changeQuantity(p, 1)}
                                      label={`Añadir ${p.name}`}
                                    >
                                      {state.cart[p.id]
                                        ? `Añadir otro · ${state.cart[p.id]} en carrito`
                                        : p.stock
                                          ? 'Añadir a la venta'
                                          : 'Sin existencias'}
                                    </Action>
                                  )}
                                </Card>
                              ))}
                            </View>
                          </>
                        )}

                        {screen === 'Ventas' && (
                          <>
                            <Card className="gap-2 p-5">
                              <CardDescription>
                                Total registrado en este dispositivo
                              </CardDescription>
                              <Text className="text-3xl font-bold text-foreground">
                                {money(
                                  state.sales.reduce(
                                    (sum, sale) => sum + sale.total,
                                    0,
                                  ),
                                )}
                              </Text>
                              <Text className={muted}>
                                {state.sales.length} tickets
                              </Text>
                            </Card>
                            <Input
                              accessibilityLabel="Buscar tickets"
                              placeholder="Buscar ticket o cliente…"
                              value={query}
                              onChangeText={setQuery}
                              className="h-12 rounded-xl text-base"
                            />
                            {!state.sales.length && (
                              <Card className="gap-4 p-5">
                                <ReceiptText color={ink} size={30} />
                                <CardTitle>
                                  Tu primer ticket empieza aquí
                                </CardTitle>
                                <CardDescription>
                                  Las ventas que registres en mostrador
                                  aparecerán en este historial.
                                </CardDescription>
                                <Action onPress={() => navigate('Mostrador')}>
                                  Crear una venta
                                </Action>
                              </Card>
                            )}
                            {state.sales
                              .filter(s =>
                                `${s.id} ${s.customer}`
                                  .toLowerCase()
                                  .includes(normalizedQuery),
                              )
                              .map(s => (
                                <Card key={s.id} className="gap-3 p-5">
                                  <View className="flex-row justify-between gap-3">
                                    <Text className="flex-1 text-lg font-semibold text-foreground">
                                      {s.customer}
                                    </Text>
                                    <Text className="text-lg font-bold text-foreground">
                                      {money(s.total)}
                                    </Text>
                                  </View>
                                  <Text className={muted}>
                                    {new Date(s.date).toLocaleString('es-ES')} ·{' '}
                                    {s.method}
                                  </Text>
                                  <Action
                                    secondary
                                    onPress={() => setReceipt(s)}
                                  >
                                    Ver ticket
                                  </Action>
                                </Card>
                              ))}
                          </>
                        )}
                        {screen === 'Ajustes' && (
                          <>
                            <Card className="gap-4 p-5">
                              <CardTitle>Componentes de Kivora</CardTitle>
                              <CardDescription>
                                Explora y prueba los controles de la librería
                                nativa.
                              </CardDescription>
                              <Action onPress={() => navigate('Componentes')}>
                                Ver componentes
                              </Action>
                              <Action onPress={() => navigate('Player')}>Probar player</Action>
                            </Card>
                            <Card className="gap-4 p-5">
                              <CardTitle>Apariencia y avisos</CardTitle>
                              <Switch
                                label="Modo oscuro"
                                accessibilityLabel="Modo oscuro"
                                checked={dark}
                                onCheckedChange={value =>
                                  update(s => ({
                                    ...s,
                                    settings: { ...s.settings, dark: value },
                                  }))
                                }
                                hitSlop={12}
                              />
                              <Separator />
                              <Switch
                                label="Avisos de poco stock"
                                accessibilityLabel="Avisos de poco stock"
                                checked={state.settings.alerts}
                                onCheckedChange={value =>
                                  update(s => ({
                                    ...s,
                                    settings: { ...s.settings, alerts: value },
                                  }))
                                }
                                hitSlop={12}
                              />
                            </Card>
                            <Card className="gap-4 p-5">
                              <CardTitle>Datos de la farmacia</CardTitle>
                              <Text className={body}>Nombre comercial</Text>
                              <Input
                                accessibilityLabel="Nombre comercial"
                                value={state.settings.name}
                                onChangeText={name =>
                                  update(s => ({
                                    ...s,
                                    settings: { ...s.settings, name },
                                  }))
                                }
                                className="h-12 text-base"
                              />
                              <Text className={body}>Mensaje del ticket</Text>
                              <Input
                                accessibilityLabel="Mensaje del ticket"
                                value={state.settings.receipt}
                                onChangeText={text =>
                                  update(s => ({
                                    ...s,
                                    settings: { ...s.settings, receipt: text },
                                  }))
                                }
                                multiline
                                className="min-h-20 text-base"
                              />
                              <Text className="text-sm text-muted-foreground">
                                Los cambios se guardan automáticamente.
                              </Text>
                            </Card>
                            <Card className="gap-3 p-5">
                              <CardTitle>Clientes de la farmacia</CardTitle>
                              {state.customers.map(c => (
                                <View key={c.id} className="gap-1 py-2">
                                  <Text className="text-base font-semibold text-foreground">
                                    {c.name}
                                  </Text>
                                  <Text className={muted}>{c.phone}</Text>
                                </View>
                              ))}
                            </Card>
                            <Text className="text-sm leading-5 text-muted-foreground">
                              Kivora · ejemplo Android. Catálogo de demostración
                              compartido con la temática web; los cambios se
                              guardan localmente y no se sincronizan con ella.
                            </Text>
                          </>
                        )}
                      </>
                    )}
                  </KeyboardScrollView>
                )}
              </View>
              {screen === 'Mostrador' && !cartOpen && !receipt && count > 0 && (
                <View className="border-t border-border px-5 py-3">
                  <Action onPress={() => setCartOpen(true)}>
                    Revisar venta · {count} uds. · {money(total)}
                  </Action>
                </View>
              )}
              <View
                accessibilityRole="tablist"
                className="flex-row border-t border-border bg-card px-1 py-2"
              >
                {navigation.map(({ name, icon: Icon }) => {
                  const selected =
                    screen === name ||
                    ((screen === 'Componentes' || screen === 'Player') && name === 'Ajustes');
                  return (
                    <Button
                      key={name}
                      variant="ghost"
                      accessibilityRole="tab"
                      accessibilityLabel={name}
                      accessibilityState={{ selected }}
                      onPress={() => navigate(name)}
                      className={`h-auto min-h-16 flex-1 flex-col gap-1 rounded-xl px-0 py-2 ${selected ? 'bg-secondary' : ''}`}
                    >
                      <Icon size={22} color={selected ? ink : '#888888'} />
                      <Text
                        className={`text-xs ${selected ? 'font-bold text-foreground' : 'text-muted-foreground'}`}
                      >
                        {name}
                      </Text>
                    </Button>
                  );
                })}
              </View>
            </>
          )}
        </AudioPlayerProvider>
        </SafeAreaView>
        <Toaster smallIcon="ic_notification" channelName="Farmacia Oliva" />
      </View>
    </KivoraProvider>
  );
}
