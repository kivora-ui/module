"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Boxes,
  CreditCard,
  Moon,
  PackagePlus,
  Plus,
  ReceiptText,
  Search,
  ShoppingBag,
  Sun,
} from "lucide-react";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  Empty,
  EmptyDescription,
  EmptyTitle,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Separator,
} from "@kivora/nextjs";
import { money, type Product, type Sale } from "@/lib/data";
import { useStore } from "./store-provider";
import { POS } from "./pos";
import { PageHeading, ProductArt, StockBadge } from "./ui";

type View = "sale" | "stock" | "tickets";
const views = [
  { id: "sale", title: "Vender", icon: ShoppingBag },
  { id: "stock", title: "Consultar stock", icon: Boxes },
  { id: "tickets", title: "Últimos tickets", icon: ReceiptText },
] as const;

export function TabletWorkspace() {
  const { products, sales, settings, ready, saveSettings, restock } =
    useStore();
  const [view, setView] = useState<View>("sale");
  const [query, setQuery] = useState("");
  const [lowOnly, setLowOnly] = useState(false);
  const [receiving, setReceiving] = useState<Product>();
  const [quantity, setQuantity] = useState("10");
  const [ticket, setTicket] = useState<Sale>();
  const matches = products.filter(
    (p) =>
      `${p.name} ${p.brand} ${p.id}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (!lowOnly || p.stock < p.minimum),
  );

  return (
    <div className="tablet-workspace">
      <a href="#tablet-main" className="skip-link">
        Saltar al contenido
      </a>
      <header className="tablet-header">
        <div className="tablet-identity">
          <span className="brand-mark">
            <Plus size={26} strokeWidth={3} />
          </span>
          <div>
            <strong>{settings.name}</strong>
            <span>Mostrador · Ana Martín</span>
          </div>
        </div>
        <nav className="tablet-navigation" aria-label="Tareas del mostrador">
          {views.map((item) => (
            <Button
              key={item.id}
              variant={view === item.id ? "default" : "ghost"}
              aria-pressed={view === item.id}
              aria-controls={`tablet-${item.id}`}
              onClick={() => setView(item.id)}
            >
              <item.icon size={21} />
              <span>{item.title}</span>
            </Button>
          ))}
        </nav>
        <div className="tablet-header-actions">
          <Button
            variant="outline"
            size="icon"
            disabled={!ready}
            aria-label={
              settings.dark ? "Activar modo claro" : "Activar modo oscuro"
            }
            onClick={() => saveSettings({ ...settings, dark: !settings.dark })}
          >
            {settings.dark ? <Sun size={21} /> : <Moon size={21} />}
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft size={19} />
              <span>Panel</span>
            </Link>
          </Button>
        </div>
      </header>
      <main id="tablet-main" className="tablet-main">
        {/* Keep the sale mounted so staff can check stock or tickets without losing the cart. */}
        <section
          id="tablet-sale"
          hidden={view !== "sale"}
          aria-label="Venta en mostrador"
        >
          <POS tablet />
        </section>
        <section
          id="tablet-stock"
          hidden={view !== "stock"}
          aria-label="Consulta de existencias"
        >
          <PageHeading
            eyebrow="ALMACÉN"
            title="Encuentra lo que necesitas."
            description="Consulta existencias o registra una entrada sin salir del mostrador."
          />
          <div className="tablet-stock-toolbar">
            <InputGroup>
              <InputGroupAddon>
                <Search size={22} />
              </InputGroupAddon>
              <Input
                aria-label="Buscar existencias"
                placeholder="Nombre, marca o código de producto…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>
            <Button
              variant={lowOnly ? "default" : "outline"}
              aria-pressed={lowOnly}
              onClick={() => setLowOnly(!lowOnly)}
            >
              Necesitan reposición
            </Button>
          </div>
          <p className="tablet-result-count">
            {matches.length} productos encontrados
          </p>
          <div className="tablet-stock-grid">
            {matches.map((p) => (
              <article className="tablet-stock-card" key={p.id}>
                <div className="tablet-stock-product">
                  <ProductArt product={p} compact />
                  <div>
                    <h2>{p.name}</h2>
                    <p>
                      {p.brand} · {p.id}
                    </p>
                  </div>
                </div>
                <div className="tablet-stock-summary">
                  <div>
                    <strong>{p.stock}</strong>
                    <span>unidades · mínimo {p.minimum}</span>
                  </div>
                  <StockBadge product={p} />
                </div>
                <div className="tablet-stock-footer">
                  <strong>{money(p.price)}</strong>
                  <Button
                    variant="outline"
                    disabled={!ready}
                    aria-label={`Recibir ${p.name}`}
                    onClick={() => {
                      setReceiving(p);
                      setQuantity("10");
                    }}
                  >
                    <PackagePlus size={20} /> Recibir stock
                  </Button>
                </div>
              </article>
            ))}
          </div>
          {!matches.length && (
            <Empty>
              <EmptyTitle>No hay productos en esta selección</EmptyTitle>
              <EmptyDescription>
                Cambia la búsqueda o el filtro de reposición.
              </EmptyDescription>
            </Empty>
          )}
        </section>
        <section
          id="tablet-tickets"
          hidden={view !== "tickets"}
          aria-label="Tickets del mostrador"
        >
          <PageHeading
            eyebrow="VENTAS"
            title="Las últimas atenciones."
            description="Toca un ticket para consultar su detalle. Tu venta en curso sigue guardada mientras cambias de pestaña."
          />
          <div className="tablet-ticket-list">
            {sales.slice(0, 20).map((sale) => (
              <button
                className="tablet-ticket-card"
                key={sale.id}
                onClick={() => setTicket(sale)}
              >
                <span className="tablet-ticket-icon">
                  <ReceiptText size={26} />
                </span>
                <div>
                  <strong>{sale.id}</strong>
                  <span>{sale.customer}</span>
                  <small>
                    {new Intl.DateTimeFormat("es-ES", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "Europe/Madrid",
                    }).format(new Date(sale.date))}{" "}
                    · {sale.method}
                  </small>
                </div>
                <strong className="tablet-ticket-amount">
                  {money(sale.total)}
                </strong>
              </button>
            ))}
          </div>
          {!sales.length && (
            <Empty>
              <EmptyTitle>Todavía no hay ventas</EmptyTitle>
              <EmptyDescription>
                Los tickets aparecerán aquí al completar un cobro.
              </EmptyDescription>
            </Empty>
          )}
        </section>
        <p className="tablet-demo-note">
          Modo de trabajo · Cobros simulados · Datos guardados en este navegador
        </p>
      </main>
      <Dialog
        open={!!receiving}
        onOpenChange={(open) => {
          if (!open) setReceiving(undefined);
        }}
      >
        <DialogContent className="tablet-dialog">
          <DialogTitle>Recibir stock</DialogTitle>
          <DialogDescription>
            {receiving?.name} · Registra las unidades que entran en la tienda.
          </DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              restock(receiving!.id, Number(quantity));
              setReceiving(undefined);
            }}
          >
            <div className="form-field">
              <Label htmlFor="tablet-stock-quantity">Unidades recibidas</Label>
              <Input
                id="tablet-stock-quantity"
                type="number"
                inputMode="numeric"
                required
                min="1"
                max="10000"
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setReceiving(undefined)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={!ready}>
                Registrar entrada
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!ticket}
        onOpenChange={(open) => {
          if (!open) setTicket(undefined);
        }}
      >
        <DialogContent className="tablet-dialog">
          <DialogTitle>Detalle del ticket</DialogTitle>
          <DialogDescription>
            {ticket?.id} · {ticket?.customer}
          </DialogDescription>
          <Badge variant="secondary" className="w-fit">
            <CreditCard size={17} />
            {ticket?.method}
          </Badge>
          <div className="receipt-lines">
            {ticket?.lines.map((line) => (
              <div key={line.productId}>
                <span>
                  {line.quantity} × {line.name}
                </span>
                <strong>{money(line.quantity * line.price)}</strong>
              </div>
            ))}
            <Separator />
            <div>
              <strong>Total</strong>
              <strong>{money(ticket?.total ?? 0)}</strong>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setTicket(undefined)}>
              Volver al mostrador
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
