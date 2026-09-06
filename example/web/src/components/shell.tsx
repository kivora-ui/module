"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Bell,
  Boxes,
  ChevronDown,
  CircleHelp,
  FlaskConical,
  LayoutDashboard,
  Menu,
  Moon,
  Plus,
  ReceiptText,
  Search,
  Settings2,
  ShoppingBag,
  Sun,
  Tablet,
  Users,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Kbd,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@kivora/nextjs";
import { useRouter } from "next/navigation";
import { useStore } from "./store-provider";

const navigation = [
  { href: "/", label: "Vista general", icon: LayoutDashboard },
  { href: "/tpv", label: "Punto de venta", icon: ShoppingBag },
  { href: "/inventario", label: "Inventario", icon: Boxes },
  { href: "/ventas", label: "Ventas", icon: ReceiptText },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/ajustes", label: "Ajustes", icon: Settings2 },
  { href: "/componentes", label: "Componentes", icon: FlaskConical },
  { href: "/tablet", label: "Modo tablet", icon: Tablet },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { settings, products, ready, saveSettings } = useStore();
  const [search, setSearch] = useState(false);
  const [mobile, setMobile] = useState(false);
  const low = products.filter((p) => p.stock < p.minimum);
  const active = navigation.find((n) => n.href === pathname)?.label ?? "Página";
  if (pathname === "/tablet") return <>{children}</>;
  const sidebar = (
    <>
      <Link href="/" className="brand" onClick={() => setMobile(false)}>
        <span className="brand-mark">
          <Plus size={26} strokeWidth={3} />
        </span>
        <span>
          oliva<span className="brand-dot">.</span>
        </span>
      </Link>
      <div className="workspace-label">
        <span className="store-avatar">O</span>
        <div>
          <strong>{settings.name}</strong>
          <small>Tienda principal</small>
        </div>
        <ChevronDown size={15} />
      </div>
      <div className="nav-label">WORKSPACE</div>
      <nav aria-label="Navegación principal">
        {navigation.slice(0, 5).map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => setMobile(false)}
            className={`nav-link ${pathname === n.href ? "active" : ""}`}
            aria-current={pathname === n.href ? "page" : undefined}
          >
            <n.icon size={19} />
            {n.label}
            {n.href === "/inventario" && low.length > 0 && (
              <span className="nav-count">{low.length}</span>
            )}
          </Link>
        ))}
      </nav>
      <div className="nav-label mt-8">HERRAMIENTAS</div>
      <nav aria-label="Herramientas">
        {navigation.slice(5).map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => setMobile(false)}
            className={`nav-link ${pathname === n.href ? "active" : ""}`}
            aria-current={pathname === n.href ? "page" : undefined}
          >
            <n.icon size={19} />
            {n.label}
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card">
          <span className="help-symbol">
            <CircleHelp size={21} />
          </span>
          <strong>Todo bajo control</strong>
          <p>
            Una farmacia conectada.
            <br />
            Más tiempo para tus clientes.
          </p>
          <Link href="/componentes" onClick={() => setMobile(false)}>
            Explorar la demo <ArrowUpRight size={15} />
          </Link>
        </div>
        <Separator />
        <div className="profile">
          <Avatar>
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <strong>Ana Martín</strong>
            <small>Administradora · Demo</small>
          </div>
          <span className="online-dot" />
        </div>
      </div>
    </>
  );
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <aside className="sidebar">{sidebar}</aside>
      <div className="app-body">
        <header className="topbar">
          <div className="flex items-center gap-3">
            <Sheet open={mobile} onOpenChange={setMobile}>
              <SheetTrigger asChild>
                <Button
                  className="mobile-menu"
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir navegación"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="mobile-sidebar">
                <SheetTitle className="sr-only">Navegación</SheetTitle>
                <SheetDescription className="sr-only">
                  Páginas de la farmacia
                </SheetDescription>
                {sidebar}
              </SheetContent>
            </Sheet>
            <Breadcrumb>
              <BreadcrumbItem>Workspace</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{active}</BreadcrumbPage>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="topbar-actions">
            <Button
              variant="ghost"
              className="search-trigger"
              onClick={() => setSearch(true)}
            >
              <Search size={17} />
              <span>Buscar en Oliva</span>
              <Kbd>⌕</Kbd>
            </Button>
            <span className="topbar-divider" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={!ready}
                  aria-label={
                    settings.dark ? "Activar modo claro" : "Activar modo oscuro"
                  }
                  onClick={() =>
                    saveSettings({ ...settings, dark: !settings.dark })
                  }
                >
                  {settings.dark ? <Sun size={19} /> : <Moon size={19} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {settings.dark ? "Activar modo claro" : "Activar modo oscuro"}
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir laboratorio"
                >
                  <Link href="/componentes">
                    <CircleHelp size={19} />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Laboratorio de componentes</TooltipContent>
            </Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Notificaciones"
                  className="relative"
                >
                  <Bell size={19} />
                  {settings.alerts && low.length > 0 && (
                    <span className="notification-dot" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end">
                <strong>Centro de notificaciones</strong>
                <p className="muted mt-2">
                  {settings.alerts
                    ? `${low.length} productos necesitan reposición.`
                    : "Las alertas de stock están desactivadas."}
                </p>
                <Button asChild variant="link">
                  <Link href="/inventario">Revisar inventario</Link>
                </Button>
              </PopoverContent>
            </Popover>
            <Avatar className="h-8 w-8">
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main id="main" className="main-content">
          {children}
        </main>
        <footer className="app-footer">
          <span>Oliva · Hecho con Kivora UI</span>
          <span>
            <span className="online-dot" /> Entorno de demostración · Datos
            locales
          </span>
        </footer>
      </div>
      <Dialog open={search} onOpenChange={setSearch}>
        <DialogContent>
          <DialogTitle>Buscar en Oliva</DialogTitle>
          <DialogDescription>
            Accede a una página de tu farmacia.
          </DialogDescription>
          <Command>
            <CommandInput placeholder="Buscar página…" />
            <CommandList>
              <CommandEmpty>No se han encontrado páginas.</CommandEmpty>
              {navigation.map((n) => (
                <CommandItem
                  key={n.href}
                  onSelect={() => {
                    router.push(n.href);
                    setSearch(false);
                  }}
                >
                  <n.icon size={17} />
                  {n.label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}
