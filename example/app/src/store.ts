import { initialStore, type Store, type Sale } from './data.ts';

export type Cart = Record<string, number>;
export type AppState = Store & { cart: Cart };
export function createStore(): AppState {
  return {
    ...JSON.parse(JSON.stringify(initialStore)),
    settings: { ...initialStore.settings, dark: true },
    sales: [],
    cart: {},
  };
}
export function cartTotal(state: AppState) {
  return state.products.reduce(
    (sum, product) => sum + product.price * (state.cart[product.id] ?? 0),
    0,
  );
}
export function setQuantity(
  state: AppState,
  id: string,
  quantity: number,
): AppState {
  const product = state.products.find(p => p.id === id);
  if (
    !product ||
    !Number.isInteger(quantity) ||
    quantity < 0 ||
    quantity > product.stock
  )
    throw new Error('No hay stock suficiente.');
  const cart = { ...state.cart };
  if (quantity === 0) delete cart[id];
  else cart[id] = quantity;
  return { ...state, cart };
}
export function checkout(
  state: AppState,
  method: Sale['method'],
  customer: string,
  now = new Date(),
): AppState {
  const entries = Object.entries(state.cart);
  if (!entries.length) throw new Error('Añade algún producto a la venta.');
  const lines = entries.map(([id, quantity]) => {
    const product = state.products.find(p => p.id === id);
    if (
      !product ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > product.stock
    )
      throw new Error('Revisa el stock del carrito.');
    return {
      productId: id,
      name: product.name,
      quantity,
      price: product.price,
    };
  });
  const sale: Sale = {
    id: `VT-${now.getTime()}-${state.sales.length + 1}`,
    date: now.toISOString(),
    customer,
    method,
    lines,
    total: cartTotal(state),
  };
  return {
    ...state,
    cart: {},
    sales: [sale, ...state.sales],
    products: state.products.map(p => ({
      ...p,
      stock: p.stock - (state.cart[p.id] ?? 0),
    })),
  };
}
export function restock(state: AppState, id: string, amount: number): AppState {
  if (!Number.isInteger(amount) || amount < 1 || amount > 10000)
    throw new Error('Introduce entre 1 y 10.000 unidades.');
  if (!state.products.some(p => p.id === id))
    throw new Error('Producto no encontrado.');
  return {
    ...state,
    products: state.products.map(p =>
      p.id === id ? { ...p, stock: p.stock + amount } : p,
    ),
  };
}
export function restoreStore(raw: string): AppState {
  const state = JSON.parse(raw) as AppState;
  if (
    !Array.isArray(state.products) ||
    !Array.isArray(state.sales) ||
    !Array.isArray(state.customers) ||
    typeof state.settings?.dark !== 'boolean' ||
    !state.cart ||
    typeof state.cart !== 'object'
  )
    throw new Error('Datos guardados no válidos.');
  if (
    state.products.some(
      p =>
        typeof p.id !== 'string' ||
        typeof p.name !== 'string' ||
        !Number.isInteger(p.stock) ||
        p.stock < 0 ||
        !Number.isInteger(p.price) ||
        p.price < 0,
    )
  )
    throw new Error('Inventario guardado no válido.');
  for (const [id, quantity] of Object.entries(state.cart))
    setQuantity(state, id, quantity);
  return state;
}
