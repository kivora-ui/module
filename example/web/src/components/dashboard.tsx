"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ChevronRight,
  CreditCard,
  Euro,
  Plus,
  ReceiptText,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  Badge,
  Button,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@kivora/nextjs";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { money, type Sale } from "@/lib/data";
import { useStore } from "./store-provider";
import { PageHeading, Panel, ProductArt } from "./ui";

export function exportSales(sales: Sale[]) {
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const content =
    "\uFEFFTicket,Fecha,Cliente,Método,Total EUR\r\n" +
    sales
      .map((s) =>
        [s.id, s.date, s.customer, s.method, (s.total / 100).toFixed(2)]
          .map(escape)
          .join(","),
      )
      .join("\r\n");
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/csv;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = "ventas-oliva.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function Dashboard() {
  const { sales, products, settings } = useStore();
  const [period, setPeriod] = useState("week");
  // Anchor the seeded demo to its latest sale, including new transactions.
  const latest = sales.reduce(
    (max, s) => Math.max(max, Date.parse(s.date)),
    Date.parse("2026-09-05T12:00:00+02:00"),
  );
  const dayKey = (date: number | string) =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid" }).format(
      new Date(date),
    );
  const today = sales.filter((s) => dayKey(s.date) === dayKey(latest));
  const total = today.reduce((sum, s) => sum + s.total, 0);
  const low = products.filter((p) => p.stock < p.minimum);
  const chart = useMemo(
    () =>
      Array.from({ length: period === "week" ? 7 : 30 }, (_, i) => {
        const date = latest - ((period === "week" ? 6 : 29) - i) * 86400000;
        return {
          day: new Intl.DateTimeFormat("es-ES", {
            day: "numeric",
            month: "short",
            timeZone: "Europe/Madrid",
          }).format(date),
          ventas: sales
            .filter((s) => dayKey(s.date) === dayKey(date))
            .reduce((sum, s) => sum + s.total / 100, 0),
        };
      }),
    [sales, period, latest],
  );
  const best = products
    .map((p) => ({
      ...p,
      sold: sales.reduce(
        (sum, s) =>
          sum +
          s.lines
            .filter((l) => l.productId === p.id)
            .reduce((n, l) => n + l.quantity, 0),
        0,
      ),
    }))
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 4);
  return (
    <>
      <PageHeading
        eyebrow="TU FARMACIA, EN EQUILIBRIO"
        title="Un buen día para cuidar."
        description="Aquí tienes el pulso de tu farmacia. Todo lo que necesitas, en un solo lugar."
      >
        <Button variant="outline" onClick={() => exportSales(sales)}>
          <ArrowDownToLine size={16} /> Exportar
        </Button>
        <Button asChild>
          <Link href="/tpv">
            <Plus size={17} /> Nueva venta
          </Link>
        </Button>
      </PageHeading>
      <div className="welcome-strip">
        <div className="flex items-center gap-3">
          <span className="welcome-icon">
            <Sparkles size={18} />
          </span>
          <span>
            <strong>Bienvenida, Ana.</strong> Tu mostrador está listo para
            empezar.
          </span>
        </div>
        <Badge variant="outline" className="open-badge">
          <span className="status-dot" /> Tienda abierta
        </Badge>
      </div>
      <div className="stats-grid">
        {[
          {
            title: "Ventas del día",
            value: money(total),
            icon: Euro,
            detail: "Importe de los tickets registrados",
            accent: "mint",
          },
          {
            title: "Operaciones",
            value: String(today.length).padStart(2, "0"),
            icon: ReceiptText,
            detail: "Tickets en la última jornada",
            accent: "blue",
          },
          {
            title: "Ticket medio",
            value: money(today.length ? Math.round(total / today.length) : 0),
            icon: ShoppingBag,
            detail: "Por cada visita al mostrador",
            accent: "peach",
          },
          {
            title: "Productos activos",
            value: String(products.length),
            icon: Boxes,
            detail: `${low.length} referencias necesitan reposición`,
            accent: "yellow",
          },
        ].map((s) => (
          <div className="stat-card" key={s.title}>
            <div className="stat-top">
              <span>{s.title}</span>
              <span className={`stat-icon ${s.accent}`}>
                <s.icon size={18} />
              </span>
            </div>
            <strong className="stat-value">{s.value}</strong>
            <p className="stat-detail">{s.detail}</p>
          </div>
        ))}
      </div>
      <div className="dashboard-middle">
        <Panel
          title="Evolución de ventas"
          action={
            <Tabs value={period} onValueChange={setPeriod}>
              <TabsList>
                <TabsTrigger value="week">7 días</TabsTrigger>
                <TabsTrigger value="month">30 días</TabsTrigger>
              </TabsList>
            </Tabs>
          }
        >
          <div className="chart-summary">
            <strong>
              {money(
                Math.round(chart.reduce((sum, d) => sum + d.ventas, 0) * 100),
              )}
            </strong>
            <span className="muted">en el periodo seleccionado</span>
          </div>
          <ChartContainer
            className="sales-chart"
            config={{ ventas: { label: "Ventas", color: "var(--color-chart)" } }}
          >
            <AreaChart
              data={chart}
              margin={{ top: 16, right: 12, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="sales-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-chart)" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="var(--color-chart)" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="4 5" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tickMargin={12}
                minTickGap={25}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v} €`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(v) => money(Math.round(Number(v) * 100))}
                  />
                }
              />
              <Area
                isAnimationActive={false}
                type="monotone"
                dataKey="ventas"
                name="Ventas"
                stroke="var(--color-chart)"
                strokeWidth={2.5}
                fill="url(#sales-fill)"
              />
            </AreaChart>
          </ChartContainer>
          <div className="chart-caption">
            <span className="legend-dot" /> Ventas de la tienda física
            <span className="ml-auto">
              Última jornada:{" "}
              {new Intl.DateTimeFormat("es-ES", {
                day: "numeric",
                month: "long",
                timeZone: "Europe/Madrid",
              }).format(latest)}
            </span>
          </div>
        </Panel>
        <Panel
          title="Tu atención, aquí"
          action={<Badge variant="secondary">{low.length}</Badge>}
        >
          <div className="attention-heading">
            <span className="attention-icon">
              <Boxes size={23} />
            </span>
            <div>
              <strong>Un pequeño repaso al stock</strong>
              <p className="muted">Anticípate a la próxima visita.</p>
            </div>
          </div>
          <div className="stock-alerts">
            {low.map((p) => (
              <Link href="/inventario" key={p.id} className="stock-alert-row">
                <span
                  className={`alert-indicator ${p.stock === 0 ? "empty-stock" : ""}`}
                />
                <div>
                  <strong>{p.name}</strong>
                  <small>
                    {p.stock === 0
                      ? "Sin unidades disponibles"
                      : `Quedan ${p.stock} · Mínimo ${p.minimum}`}
                  </small>
                </div>
                <ChevronRight size={16} />
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" className="w-full mt-4">
            <Link href="/inventario">
              Gestionar inventario <ArrowRight size={15} />
            </Link>
          </Button>
          <div className="stock-note">
            <span className="online-dot" />
            <span>
              {settings.alerts
                ? "Alertas de inventario activadas"
                : "Alertas de inventario desactivadas"}
            </span>
          </div>
        </Panel>
      </div>
      <div className="dashboard-bottom">
        <Panel
          title="Últimas ventas"
          action={
            <Link className="text-link" href="/ventas">
              Ver todas <ArrowUpRight size={15} />
            </Link>
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket / Cliente</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Importe</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.slice(0, 5).map((s) => (
                <TableRow key={s.id}>
                  <TableCell>
                    <strong className="table-primary">{s.id}</strong>
                    <span className="table-secondary">{s.customer}</span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-2 muted">
                      {s.method === "Tarjeta" ? (
                        <CreditCard size={15} />
                      ) : (
                        <Wallet size={15} />
                      )}
                      {s.method}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="status-green">
                      Completada
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {money(s.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
        <Panel
          title="Los favoritos del mostrador"
          action={<TrendingUp size={18} className="muted" />}
        >
          <div className="best-products">
            {best.map((p, index) => (
              <div key={p.id} className="best-product">
                <span className="product-rank">0{index + 1}</span>
                <ProductArt product={p} compact />
                <div className="min-w-0 flex-1">
                  <strong>{p.name}</strong>
                  <small>
                    {p.brand} · {p.sold} unidades
                  </small>
                  <Progress
                    className="mt-2 h-1"
                    value={(p.sold / Math.max(best[0].sold, 1)) * 100}
                  />
                </div>
                <span className="best-price">{money(p.price)}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <div className="closing-note">
        <span className="brand-mark small">
          <Plus size={16} />
        </span>
        <p>Cuidar de tu negocio también es cuidar de los demás.</p>
        <span>Oliva, contigo cada día.</span>
      </div>
    </>
  );
}
