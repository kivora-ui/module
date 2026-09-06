"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  Boxes,
  Check,
  Mail,
  PackagePlus,
  Plus,
  UserRound,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  DataTable,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
  Label,
  Select,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  type DataTableColumnDef,
} from "@kivora/nextjs";
import { money, type Product, type Sale, type Settings } from "@/lib/data";
import { useStore } from "./store-provider";
import { PageHeading, Panel, ProductArt, StockBadge } from "./ui";
import { exportSales } from "./dashboard";

export function Inventory() {
  const { products, restock, ready } = useStore();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Product>();
  const [quantity, setQuantity] = useState("10");
  const data = products.filter(
    (p) =>
      filter === "all" ||
      (filter === "low" ? p.stock < p.minimum : p.stock === 0),
  );
  const columns: DataTableColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: "Producto",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <ProductArt product={row.original} compact />
          <div>
            <strong className="table-primary">{row.original.name}</strong>
            <span className="table-secondary">
              {row.original.brand} · {row.original.id}
            </span>
          </div>
        </div>
      ),
    },
    { accessorKey: "category", header: "Categoría" },
    {
      accessorKey: "stock",
      header: "Unidades",
      cell: ({ row }) => (
        <span className="font-semibold">
          {row.original.stock}{" "}
          <span className="muted font-normal">
            / mín. {row.original.minimum}
          </span>
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: "PVP",
      cell: ({ row }) => money(row.original.price),
    },
    {
      accessorKey: "expiry",
      header: "Caducidad",
      cell: ({ row }) =>
        new Intl.DateTimeFormat("es-ES", {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(row.original.expiry)),
    },
    {
      id: "status",
      header: "Estado",
      cell: ({ row }) => <StockBadge product={row.original} />,
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          disabled={!ready}
          aria-label={`Reponer ${row.original.name}`}
          onClick={() => {
            setSelected(row.original);
            setQuantity("10");
          }}
        >
          <PackagePlus size={15} /> Reponer
        </Button>
      ),
    },
  ];
  return (
    <>
      <PageHeading
        eyebrow="ALMACÉN"
        title="Cada producto, en su sitio."
        description="Consulta existencias, detecta faltantes y registra nuevas entradas."
      />
      <div className="mini-stats">
        <div>
          <Boxes />
          <span>
            Referencias<strong>{products.length}</strong>
          </span>
        </div>
        <div>
          <PackagePlus />
          <span>
            Unidades en tienda
            <strong>{products.reduce((n, p) => n + p.stock, 0)}</strong>
          </span>
        </div>
        <div>
          <span className="alert-indicator" />
          <span>
            Necesitan reposición
            <strong>
              {products.filter((p) => p.stock < p.minimum).length}
            </strong>
          </span>
        </div>
      </div>
      <Panel title="Inventario de productos">
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="mb-5">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="low">Stock bajo</TabsTrigger>
            <TabsTrigger value="empty">Agotados</TabsTrigger>
          </TabsList>
        </Tabs>
        <DataTable
          key={filter}
          data={data}
          columns={columns}
          advanced
          searchable
          paginated
          pageSize={8}
          emptyMessage="No hay productos en esta selección."
        />
      </Panel>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(undefined);
        }}
      >
        <DialogContent>
          <DialogTitle>Registrar entrada de stock</DialogTitle>
          <DialogDescription>
            {selected?.name} · {selected?.stock} unidades disponibles
          </DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              restock(selected!.id, Number(quantity));
              setSelected(undefined);
            }}
          >
            <div className="form-field">
              <Label htmlFor="restock-quantity">Unidades recibidas</Label>
              <Input
                id="restock-quantity"
                type="number"
                min="1"
                max="10000"
                step="1"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelected(undefined)}
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
    </>
  );
}

export function Sales() {
  const { sales } = useStore();
  const [method, setMethod] = useState("Todos");
  const [selected, setSelected] = useState<Sale>();
  const filtered = sales.filter(
    (s) => method === "Todos" || s.method === method,
  );
  const columns: DataTableColumnDef<Sale>[] = [
    {
      accessorKey: "id",
      header: "Ticket",
      cell: ({ row }) => (
        <Button
          variant="link"
          className="px-0"
          onClick={() => setSelected(row.original)}
        >
          {row.original.id}
        </Button>
      ),
    },
    {
      accessorKey: "date",
      header: "Fecha",
      cell: ({ row }) =>
        new Intl.DateTimeFormat("es-ES", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Madrid",
        }).format(new Date(row.original.date)),
    },
    { accessorKey: "customer", header: "Cliente" },
    { accessorKey: "method", header: "Método" },
    {
      id: "status",
      header: "Estado",
      cell: () => (
        <Badge variant="secondary" className="status-green">
          Completada
        </Badge>
      ),
    },
    {
      accessorKey: "total",
      header: "Importe",
      cell: ({ row }) => <strong>{money(row.original.total)}</strong>,
    },
  ];
  return (
    <>
      <PageHeading
        eyebrow="ACTIVIDAD"
        title="Cada venta cuenta."
        description="Todos los tickets del mostrador, ordenados y a mano."
      >
        <Button variant="outline" onClick={() => exportSales(filtered)}>
          <ArrowDownToLine size={16} /> Exportar ventas
        </Button>
      </PageHeading>
      <div className="mini-stats">
        <div>
          <span>
            Facturación total
            <strong>
              {money(filtered.reduce((sum, s) => sum + s.total, 0))}
            </strong>
          </span>
        </div>
        <div>
          <span>
            Tickets registrados<strong>{filtered.length}</strong>
          </span>
        </div>
        <div>
          <span>
            Ticket medio
            <strong>
              {money(
                filtered.length
                  ? Math.round(
                      filtered.reduce((sum, s) => sum + s.total, 0) /
                        filtered.length,
                    )
                  : 0,
              )}
            </strong>
          </span>
        </div>
      </div>
      <Panel
        title="Historial de ventas"
        action={
          <div className="w-44">
            <Select
              instanceId="sales-method"
              aria-label="Filtrar método de pago"
              value={{ label: method, value: method }}
              options={["Todos", "Tarjeta", "Efectivo"].map((m) => ({
                label: m,
                value: m,
              }))}
              onChange={(v) => setMethod(v?.value ?? "Todos")}
            />
          </div>
        }
      >
        <DataTable
          key={method}
          data={filtered}
          columns={columns}
          advanced
          searchable
          paginated
          pageSize={8}
          emptyMessage="Todavía no hay ventas."
        />
      </Panel>
      <Sheet
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(undefined);
        }}
      >
        <SheetContent className="receipt-sheet">
          <SheetTitle>Detalle del ticket</SheetTitle>
          <SheetDescription>{selected?.id} · Venta completada</SheetDescription>
          <div className="mt-6 grid gap-3">
            <strong>{selected?.customer}</strong>
            <Badge variant="secondary" className="status-green w-fit">
              {selected?.method}
            </Badge>
            <Separator />
            <div className="receipt-lines">
              {selected?.lines.map((l) => (
                <div key={l.productId}>
                  <span>
                    {l.quantity} × {l.name}
                  </span>
                  <strong>{money(l.quantity * l.price)}</strong>
                </div>
              ))}
              <Separator />
              <div>
                <strong>Total</strong>
                <strong>{money(selected?.total ?? 0)}</strong>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function Customers() {
  const { customers, sales, addCustomer, ready } = useStore();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHeading
        eyebrow="PERSONAS"
        title="Siempre cerca de tus clientes."
        description="Una agenda sencilla para una atención más personal."
      >
        <Button onClick={() => setOpen(true)} disabled={!ready}>
          <Plus size={17} /> Nuevo cliente
        </Button>
      </PageHeading>
      <div className="mb-6 max-w-md">
        <Input
          aria-label="Buscar clientes"
          placeholder="Buscar por nombre o correo…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="customer-grid">
        {customers
          .filter((c) =>
            `${c.name} ${c.email}`.toLowerCase().includes(query.toLowerCase()),
          )
          .map((c) => {
            const history = sales.filter((s) => s.customer === c.name);
            return (
              <Panel
                key={c.id}
                title={c.name}
                action={
                  <Avatar>
                    <AvatarFallback>
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                }
              >
                <div className="customer-contact">
                  <p>
                    <Mail size={15} />
                    {c.email}
                  </p>
                  <p>
                    <UserRound size={15} />
                    {c.phone || "Sin teléfono"}
                  </p>
                </div>
                <Separator />
                <div className="customer-summary">
                  <span>{history.length} visitas registradas</span>
                  <strong>
                    {money(history.reduce((sum, s) => sum + s.total, 0))}
                  </strong>
                </div>
              </Panel>
            );
          })}
      </div>
      {!customers.some((c) =>
        `${c.name} ${c.email}`.toLowerCase().includes(query.toLowerCase()),
      ) && <p className="muted">No se han encontrado clientes.</p>}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Nuevo cliente</DialogTitle>
          <DialogDescription>
            Añade un contacto de prueba a la agenda de la demo.
          </DialogDescription>
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              addCustomer({
                name: String(form.get("name")).trim(),
                email: String(form.get("email")).trim(),
                phone: String(form.get("phone")).trim(),
              });
              setOpen(false);
            }}
          >
            <Field>
              <FieldLabel htmlFor="customer-name">Nombre completo</FieldLabel>
              <Input
                name="name"
                id="customer-name"
                required
                pattern=".*\S.*"
                maxLength={100}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="customer-email">
                Correo electrónico
              </FieldLabel>
              <Input
                name="email"
                id="customer-email"
                type="email"
                required
                maxLength={200}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="customer-phone">Teléfono</FieldLabel>
              <Input
                name="phone"
                id="customer-phone"
                type="tel"
                maxLength={30}
              />
            </Field>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={!ready}>
                Guardar cliente
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

function SettingsForm({ settings }: { settings: Settings }) {
  const { saveSettings } = useStore();
  const [draft, setDraft] = useState(settings);
  useEffect(() => {
    setDraft((current) => ({ ...current, dark: settings.dark }));
  }, [settings.dark]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveSettings(draft);
      }}
    >
      <Tabs defaultValue="store">
        <TabsList className="mb-6">
          <TabsTrigger value="store">Mi farmacia</TabsTrigger>
          <TabsTrigger value="preferences">Preferencias</TabsTrigger>
          <TabsTrigger value="receipt">Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="store">
          <Panel title="Información de la tienda">
            <div className="settings-fields">
              <Field>
                <FieldLabel htmlFor="store-name">
                  Nombre de la farmacia
                </FieldLabel>
                <Input
                  id="store-name"
                  required
                  pattern=".*\S.*"
                  maxLength={80}
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="store-address">Dirección</FieldLabel>
                <Input
                  id="store-address"
                  required
                  maxLength={200}
                  value={draft.address}
                  onChange={(e) =>
                    setDraft({ ...draft, address: e.target.value })
                  }
                />
                <FieldDescription>
                  Se guarda únicamente en este navegador.
                </FieldDescription>
              </Field>
            </div>
          </Panel>
        </TabsContent>
        <TabsContent value="preferences">
          <Panel title="Tu espacio de trabajo">
            <div className="settings-row">
              <div>
                <Label htmlFor="dark-mode">Modo oscuro</Label>
                <p className="muted">
                  Una apariencia más suave para el turno de tarde.
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={draft.dark}
                onCheckedChange={(dark) => setDraft({ ...draft, dark })}
              />
            </div>
            <Separator />
            <div className="settings-row">
              <div>
                <Label htmlFor="stock-alerts">Alertas de stock</Label>
                <p className="muted">
                  Muestra avisos en el centro de notificaciones.
                </p>
              </div>
              <Switch
                id="stock-alerts"
                checked={draft.alerts}
                onCheckedChange={(alerts) => setDraft({ ...draft, alerts })}
              />
            </div>
          </Panel>
        </TabsContent>
        <TabsContent value="receipt">
          <Panel title="Un detalle al final de cada compra">
            <Field>
              <FieldLabel htmlFor="receipt-message">
                Mensaje del ticket
              </FieldLabel>
              <Textarea
                id="receipt-message"
                maxLength={250}
                value={draft.receipt}
                onChange={(e) =>
                  setDraft({ ...draft, receipt: e.target.value })
                }
              />
              <FieldDescription>
                Se muestra al completar una venta en el TPV.
              </FieldDescription>
            </Field>
          </Panel>
        </TabsContent>
      </Tabs>
      <div className="mt-6 flex justify-end">
        <Button type="submit">
          <Check size={16} /> Guardar cambios
        </Button>
      </div>
    </form>
  );
}

export function StoreSettings() {
  const { settings, ready } = useStore();
  return (
    <>
      <PageHeading
        eyebrow="CONFIGURACIÓN"
        title="Tu farmacia, a tu manera."
        description="Los pequeños detalles que hacen tu día más fácil."
      />
      <div className="max-w-4xl">
        {ready ? (
          <SettingsForm settings={settings} />
        ) : (
          <p role="status">Cargando preferencias…</p>
        )}
      </div>
    </>
  );
}
