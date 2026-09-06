import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  cartTotal,
  checkout,
  createStore,
  restock,
  restoreStore,
  setQuantity,
} from './store.ts';

test('una venta conserva el precio, descuenta stock y vacía el carrito', () => {
  const initial = createStore();
  const product = initial.products[0]!;
  const cart = setQuantity(initial, product.id, 2);
  assert.equal(cartTotal(cart), product.price * 2);
  const paid = checkout(cart, 'Tarjeta', 'Cliente de mostrador');
  assert.equal(paid.products[0]!.stock, product.stock - 2);
  assert.equal(paid.sales[0]!.total, product.price * 2);
  assert.deepEqual(paid.cart, {});
  assert.equal(initial.products[0]!.stock, product.stock);
});
test('impide vender sin existencias, cantidades inválidas y cobros vacíos', () => {
  const state = createStore();
  assert.throws(() => setQuantity(state, state.products[0]!.id, 999));
  assert.throws(() => setQuantity(state, state.products[0]!.id, 0.5));
  assert.throws(() => checkout(state, 'Efectivo', 'Mostrador'));
  assert.throws(() =>
    checkout({ ...state, cart: { missing: 1 } }, 'Efectivo', 'Mostrador'),
  );
});
test('reposición y persistencia mantienen inventario y carrito', () => {
  const state = createStore();
  const product = state.products.find(p => p.stock === 0)!;
  const next = setQuantity(restock(state, product.id, 5), product.id, 3);
  assert.deepEqual(restoreStore(JSON.stringify(next)), next);
  assert.throws(() => restock(state, product.id, -1));
  assert.throws(() => restoreStore('{}'));
});
