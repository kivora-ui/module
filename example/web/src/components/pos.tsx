"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CreditCard,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  Wallet,
} from "lucide-react";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Empty,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Select,
  Separator,
  toast,
} from "@kivora/nextjs";
import { money, type Sale } from "@/lib/data";
import { useStore } from "./store-provider";
import { PageHeading, ProductArt } from "./ui";

export function POS({ tablet = false }: { tablet?: boolean }) {
  const { products, customers, checkout, ready, settings } = useStore();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [customer, setCustomer] = useState("Cliente de mostrador");
  const [method, setMethod] = useState<Sale["method"]>("Tarjeta");
  const [payment, setPayment] = useState(false);
  const [cash, setCash] = useState("");
  const [receipt, setReceipt] = useState<Sale>();
  const [availableOnly, setAvailableOnly] = useState(false);
  const lines = products.filter((p) => cart[p.id]);
  const total = lines.reduce((sum, p) => sum + p.price * cart[p.id], 0);
  const received = Math.round(Number(cash) * 100);
  const results = products.filter(
    (p) =>
      (!availableOnly || p.stock > 0) &&
      (category === "Todos" || p.category === category) &&
      `${p.name} ${p.brand} ${p.id}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  function change(id: string, delta: number) {
    setCart((current) => {
      const next = { ...current };
      const count = (next[id] ?? 0) + delta;
      if (count > (products.find((p) => p.id === id)?.stock ?? 0)) {
        return current;
      }
      if (count <= 0) delete next[id];
      else next[id] = count;
      return next;
    });
  }
  function pay() {
    if (
      method === "Efectivo" &&
      (!Number.isFinite(received) || received < total)
    )
      return;
    const sale = checkout(cart, method, customer);
    if (sale) {
      setReceipt(sale);
      setPayment(false);
      setCart({});
      setCash("");
      toast.success("Venta registrada y stock actualizado");
    }
  }
  const heading = (
    <PageHeading
      eyebrow="MOSTRADOR"
      title={tablet ? "¿Qué necesita tu cliente?" : "Punto de venta"}
      description={
        tablet
          ? "Toca un producto para añadirlo al ticket."
          : "Una atención cercana. Una venta sencilla."
      }
    >
      <Badge variant="secondary" className="status-green">
        Caja 01 · Abierta
      </Badge>
    </PageHeading>
  );
  return (
    <>
      {!tablet && heading}
      <div className="pos-layout">
        <section>
          {tablet && heading}
          <InputGroup>
            <InputGroupAddon>
              <Search size={18} />
            </InputGroupAddon>
            <Input
              aria-label="Buscar productos"
              placeholder="Buscar producto, marca o código…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
          {tablet && (
            <div className="tablet-catalog-tools">
              <span>{results.length} productos</span>
              <Button
                variant="outline"
                aria-pressed={availableOnly}
                onClick={() => setAvailableOnly(!availableOnly)}
              >
                <Check size={18} />{" "}
                {availableOnly
                  ? "Solo disponibles"
                  : "Mostrar solo disponibles"}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("tablet-ticket")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <ShoppingBag size={18} /> Ver ticket ·{" "}
                {Object.values(cart).reduce((sum, value) => sum + value, 0)}
              </Button>
            </div>
          )}
          <div className="category-tabs" aria-label="Categorías">
            {["Todos", ...new Set(products.map((p) => p.category))].map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="product-grid">
            {results.map((p) => (
              <button
                key={p.id}
                className="product-card"
                disabled={!ready || !p.stock || (cart[p.id] ?? 0) >= p.stock}
                onClick={() => change(p.id, 1)}
                aria-label={`Añadir ${p.name}`}
              >
                <ProductArt product={p} />
                {tablet && !!cart[p.id] && (
                  <span className="tablet-product-count">
                    {cart[p.id]} en el ticket
                  </span>
                )}
                <div className="product-card-content">
                  <span className="product-brand">
                    {p.brand} / {p.category}
                  </span>
                  <strong>{p.name}</strong>
                  <div className="product-card-bottom">
                    <b>{money(p.price)}</b>
                    <span
                      className={
                        p.stock < p.minimum ? "low-stock-text" : "muted"
                      }
                    >
                      {p.stock} uds.
                    </span>
                    <span className="add-product">
                      <Plus size={16} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {!results.length && (
            <Empty>
              <EmptyTitle>No hay coincidencias</EmptyTitle>
              <EmptyDescription>
                Prueba otro nombre o cambia la categoría.
              </EmptyDescription>
            </Empty>
          )}
        </section>
        <aside
          className="cart-panel"
          id={tablet ? "tablet-ticket" : undefined}
          aria-label="Ticket de venta"
        >
          <div className="cart-heading">
            <div>
              <ShoppingBag size={20} />
              <strong>Venta en curso</strong>
            </div>
            <Badge variant="secondary">
              {Object.values(cart).reduce((a, b) => a + b, 0)}
            </Badge>
          </div>
          <div className="cart-customer">
            <Label htmlFor="sale-customer">Cliente</Label>
            <Select
              instanceId="sale-customer"
              inputId="sale-customer"
              value={{ label: customer, value: customer }}
              options={[
                {
                  label: "Cliente de mostrador",
                  value: "Cliente de mostrador",
                },
                ...customers.map((c) => ({ label: c.name, value: c.name })),
              ]}
              onChange={(option) =>
                setCustomer(option?.value ?? "Cliente de mostrador")
              }
            />
          </div>
          <ScrollArea className="cart-lines">
            {lines.length ? (
              lines.map((p) => (
                <div className="cart-line" key={p.id}>
                  <ProductArt product={p} compact />
                  <div className="flex-1 min-w-0">
                    <strong>{p.name}</strong>
                    <small>{money(p.price)}</small>
                    <div className="quantity-control">
                      <Button
                        size="icon"
                        variant="outline"
                        aria-label={`Quitar una unidad de ${p.name}`}
                        onClick={() => change(p.id, -1)}
                      >
                        <Minus size={12} />
                      </Button>
                      <span aria-label={`Cantidad de ${p.name}`}>
                        {cart[p.id]}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        disabled={cart[p.id] >= p.stock}
                        aria-label={`Añadir una unidad de ${p.name}`}
                        onClick={() => change(p.id, 1)}
                      >
                        <Plus size={12} />
                      </Button>
                    </div>
                  </div>
                  <strong>{money(p.price * cart[p.id])}</strong>
                </div>
              ))
            ) : (
              <Empty className="cart-empty">
                <EmptyIcon>
                  <ShoppingBag />
                </EmptyIcon>
                <EmptyTitle>Tu próxima venta empieza aquí</EmptyTitle>
                <EmptyDescription>
                  Añade productos al ticket desde el catálogo.
                </EmptyDescription>
              </Empty>
            )}
          </ScrollArea>
          <div className="cart-total">
            <div>
              <span>Artículos</span>
              <span>{Object.values(cart).reduce((a, b) => a + b, 0)}</span>
            </div>
            <Separator />
            <div className="total-line">
              <strong>Total</strong>
              <strong data-testid="cart-total">{money(total)}</strong>
            </div>
            <small className="muted">Precios finales de demostración.</small>
            <Button
              className="w-full mt-5"
              size="lg"
              disabled={!lines.length || !ready}
              onClick={() => setPayment(true)}
            >
              <CreditCard size={17} /> Cobrar {money(total)}
            </Button>
            <Button
              variant="ghost"
              className="w-full mt-2"
              disabled={!lines.length}
              onClick={() => setCart({})}
            >
              <Trash2 size={15} /> Vaciar ticket
            </Button>
          </div>
        </aside>
      </div>
      <Dialog open={payment} onOpenChange={setPayment}>
        <DialogContent className={tablet ? "tablet-dialog" : undefined}>
          <DialogHeader>
            <DialogTitle>Completar venta</DialogTitle>
            <DialogDescription>
              Cobro simulado de {money(total)}. Selecciona el método de pago.
            </DialogDescription>
          </DialogHeader>
          <RadioGroup
            value={method}
            onValueChange={(v) => setMethod(v as Sale["method"])}
            className="payment-methods"
          >
            {(["Tarjeta", "Efectivo"] as const).map((m) => (
              <Label key={m} className="payment-choice">
                <RadioGroupItem value={m} />
                {m === "Tarjeta" ? (
                  <CreditCard size={21} />
                ) : (
                  <Wallet size={21} />
                )}
                {m}
              </Label>
            ))}
          </RadioGroup>
          {method === "Efectivo" && (
            <div className="form-field">
              <Label htmlFor="cash">Efectivo recibido (€)</Label>
              <Input
                id="cash"
                type="number"
                inputMode="decimal"
                min={total / 100}
                step="0.01"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
              />
              <p aria-live="polite">
                Cambio: {money(Math.max(0, received - total))}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPayment(false)}>
              Cancelar
            </Button>
            <Button
              disabled={
                !ready ||
                (method === "Efectivo" &&
                  (!cash || !Number.isFinite(received) || received < total))
              }
              onClick={pay}
            >
              Confirmar cobro
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!receipt}
        onOpenChange={(open) => {
          if (!open) setReceipt(undefined);
        }}
      >
        <DialogContent className={tablet ? "tablet-dialog" : undefined}>
          <DialogHeader>
            <span className="receipt-check">
              <Check />
            </span>
            <DialogTitle>Venta completada</DialogTitle>
            <DialogDescription>
              {receipt?.id} · {receipt?.customer}
            </DialogDescription>
          </DialogHeader>
          <div className="receipt-lines">
            {receipt?.lines.map((l) => (
              <div key={l.productId}>
                <span>
                  {l.quantity} × {l.name}
                </span>
                <strong>{money(l.quantity * l.price)}</strong>
              </div>
            ))}
            <Separator />
            <div>
              <strong>Total · {receipt?.method}</strong>
              <strong>{money(receipt?.total ?? 0)}</strong>
            </div>
          </div>
          <p className="muted text-center">{settings.receipt}</p>
          <DialogFooter>
            {!tablet && (
              <Button asChild variant="outline">
                <Link href="/ventas">Ver ventas</Link>
              </Button>
            )}
            <Button onClick={() => setReceipt(undefined)}>Nueva venta</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
