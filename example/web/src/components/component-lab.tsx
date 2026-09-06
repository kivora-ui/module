"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import * as K from "@kivora/nextjs";
import { es } from "date-fns/locale";
import { Area, AreaChart, XAxis } from "recharts";
import { Check, FileText, Heart, Plus, Search, X } from "lucide-react";
import { PageHeading } from "./ui";

const options = [
  { label: "Dermocosmética", value: "dermo" },
  { label: "Higiene", value: "higiene" },
  { label: "Bienestar", value: "bienestar" },
];
const notify = () => K.toast.success("Acción de prueba completada");

function DateDemo() {
  const [date, setDate] = useState<K.DatePickerValue>();
  return (
    <div className="grid gap-3">
      <K.DatePicker
        locale={es}
        localeCode="es-ES"
        value={date}
        onValueChange={setDate}
        placeholder="Fecha de recepción"
      />
      <K.DatePicker
        mode="range"
        locale={es}
        localeCode="es-ES"
        placeholder="Periodo de ventas"
      />
      <K.DatePicker
        mode="month"
        locale={es}
        localeCode="es-ES"
        placeholder="Mes"
      />
      <K.DatePicker
        mode="year"
        locale={es}
        localeCode="es-ES"
        placeholder="Año"
      />
      <K.DatePicker
        withTime
        timeFormat="24h"
        locale={es}
        localeCode="es-ES"
        placeholder="Fecha y hora (24 h)"
      />
      <K.DatePicker
        withTime
        locale={es}
        localeCode="es-ES"
        placeholder="Fecha y hora"
      />
    </div>
  );
}
function CalendarDemo() {
  const [date, setDate] = useState<Date>();
  return (
    <K.Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 8, 1)}
      locale={es}
    />
  );
}
function PaginationDemo() {
  const [page, setPage] = useState(1);
  return (
    <>
      <p className="muted mb-3" aria-live="polite">
        Página {page} de 3
      </p>
      <K.Pagination>
        <K.PaginationContent>
          {[1, 2, 3].map((p) => (
            <K.PaginationItem key={p}>
              <K.PaginationButton
                isActive={p === page}
                onClick={() => setPage(p)}
              >
                {p}
              </K.PaginationButton>
            </K.PaginationItem>
          ))}
        </K.PaginationContent>
      </K.Pagination>
    </>
  );
}
function SliderDemo() {
  const [value, setValue] = useState([30]);
  return (
    <div className="grid gap-5">
      <K.Label>Umbral de stock: {value[0]} unidades</K.Label>
      <K.Slider
        aria-label="Umbral de stock"
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
      />
    </div>
  );
}
function ThemeDemo() {
  const { resolvedColorMode } = K.useKivoraTheme();
  const breakpoint = K.useBreakpoint();
  return (
    <p className="muted">
      Tema: {resolvedColorMode} · Breakpoint: {breakpoint}. Cambia la apariencia
      desde Ajustes.
    </p>
  );
}

type Example = { name: string; description: string; render: () => ReactNode };
// One entry per source component family. The E2E suite checks this list against
// packages/nextjs/src/components so new families cannot silently lose coverage.
export const examples: Record<string, Example> = {
  accordion: {
    name: "Accordion",
    description: "Información desplegable",
    render: () => (
      <K.Accordion type="single" collapsible>
        <K.AccordionItem value="stock">
          <K.AccordionTrigger>¿Cómo registro una entrada?</K.AccordionTrigger>
          <K.AccordionContent>
            Abre Inventario y pulsa Reponer en el producto.
          </K.AccordionContent>
        </K.AccordionItem>
        <K.AccordionItem value="ticket">
          <K.AccordionTrigger>¿Dónde están mis tickets?</K.AccordionTrigger>
          <K.AccordionContent>
            En Ventas encontrarás el historial completo.
          </K.AccordionContent>
        </K.AccordionItem>
      </K.Accordion>
    ),
  },
  alert: {
    name: "Alert",
    description: "Avisos de la farmacia",
    render: () => (
      <K.Alert>
        <K.AlertTitle>Revisa el botiquín</K.AlertTitle>
        <K.AlertDescription>
          Hay tres referencias por debajo del mínimo.
        </K.AlertDescription>
      </K.Alert>
    ),
  },
  "aspect-ratio": {
    name: "AspectRatio",
    description: "Contenido con proporción estable",
    render: () => (
      <K.AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
        <div className="h-full grid place-items-center text-primary">
          <Plus size={46} />
        </div>
      </K.AspectRatio>
    ),
  },
  attachment: {
    name: "Attachment",
    description: "Albaranes adjuntos",
    render: () => (
      <K.Attachment>
        <K.AttachmentMedia>
          <FileText />
        </K.AttachmentMedia>
        <K.AttachmentContent>
          <K.AttachmentTitle>Albarán de recepción</K.AttachmentTitle>
          <K.AttachmentDescription>
            PDF · Ejemplo visual
          </K.AttachmentDescription>
          <K.AttachmentProgress value={75} />
        </K.AttachmentContent>
      </K.Attachment>
    ),
  },
  avatar: {
    name: "Avatar",
    description: "Identidad del equipo",
    render: () => (
      <div className="flex gap-3">
        <K.Avatar>
          <K.AvatarImage src="/avatar.svg" alt="Perfil de Ana" />
          <K.AvatarFallback>AM</K.AvatarFallback>
        </K.Avatar>
        <K.Avatar>
          <K.AvatarFallback>LR</K.AvatarFallback>
        </K.Avatar>
      </div>
    ),
  },
  badge: {
    name: "Badge",
    description: "Estados y etiquetas",
    render: () => (
      <div className="flex flex-wrap gap-2">
        <K.Badge>Disponible</K.Badge>
        <K.Badge variant="secondary">Pendiente</K.Badge>
        <K.Badge variant="outline">Recibido</K.Badge>
        <K.Badge variant="destructive">Agotado</K.Badge>
      </div>
    ),
  },
  breadcrumb: {
    name: "Breadcrumb",
    description: "Ubicación dentro de la app",
    render: () => (
      <K.Breadcrumb>
        <K.BreadcrumbItem>
          <K.BreadcrumbLink href="/">Inicio</K.BreadcrumbLink>
        </K.BreadcrumbItem>
        <K.BreadcrumbSeparator />
        <K.BreadcrumbItem>
          <K.BreadcrumbPage>Laboratorio</K.BreadcrumbPage>
        </K.BreadcrumbItem>
      </K.Breadcrumb>
    ),
  },
  bubble: {
    name: "Bubble",
    description: "Burbujas de conversación",
    render: () => (
      <K.Bubble>
        <K.BubbleContent>El pedido está listo para recibir.</K.BubbleContent>
      </K.Bubble>
    ),
  },
  button: {
    name: "Button",
    description: "Acciones, variantes y estado desactivado",
    render: () => (
      <div className="flex flex-wrap gap-2">
        <K.Button onClick={notify}>Guardar</K.Button>
        <K.Button variant="outline" onClick={notify}>
          Revisar
        </K.Button>
        <K.Button variant="secondary" onClick={notify}>
          Secundario
        </K.Button>
        <K.Button variant="ghost" onClick={notify}>
          Más
        </K.Button>
        <K.Button disabled>Desactivado</K.Button>
      </div>
    ),
  },
  "button-group": {
    name: "ButtonGroup",
    description: "Acciones relacionadas",
    render: () => (
      <K.ButtonGroup>
        <K.Button variant="outline" onClick={notify}>
          Recibir
        </K.Button>
        <K.Button variant="outline" onClick={notify}>
          Archivar
        </K.Button>
      </K.ButtonGroup>
    ),
  },
  calendar: {
    name: "Calendar",
    description: "Selección de un día",
    render: CalendarDemo,
  },
  card: {
    name: "Card",
    description: "Contenedores de información",
    render: () => (
      <K.Card>
        <K.CardHeader>
          <K.CardTitle>Objetivo diario</K.CardTitle>
          <K.CardDescription>Una atención excelente.</K.CardDescription>
        </K.CardHeader>
        <K.CardContent>24 visitas al mostrador</K.CardContent>
        <K.CardFooter>
          <K.Badge variant="secondary">En marcha</K.Badge>
        </K.CardFooter>
      </K.Card>
    ),
  },
  carousel: {
    name: "Carousel",
    description: "Navegación entre campañas",
    render: () => (
      <K.Carousel settings={{ arrows: false, infinite: false }}>
        <K.CarouselContent>
          {["Cuida tu piel", "Bienestar diario", "Vuelta a la rutina"].map(
            (text) => (
              <K.CarouselItem key={text}>
                <div className="bg-muted rounded-lg p-8 text-center font-medium">
                  {text}
                </div>
              </K.CarouselItem>
            ),
          )}
        </K.CarouselContent>
        <K.CarouselControls className="mt-4">
          <K.CarouselPrevious className="static translate-x-0 translate-y-0" />
          <K.CarouselNext className="static translate-x-0 translate-y-0" />
        </K.CarouselControls>
      </K.Carousel>
    ),
  },
  chart: {
    name: "Chart",
    description: "Gráficos con Recharts y tooltip",
    render: () => (
      <K.ChartContainer
        style={{ height: 140 }}
        config={{ sales: { label: "Ventas", color: "var(--color-chart)" } }}
      >
        <AreaChart
          data={[
            { day: "Lun", sales: 14 },
            { day: "Mar", sales: 28 },
            { day: "Mié", sales: 21 },
          ]}
        >
          <XAxis dataKey="day" />
          <K.ChartTooltip content={<K.ChartTooltipContent />} />
          <K.ChartLegend />
          <Area
            dataKey="sales"
            stroke="var(--color-chart)"
            fill="var(--color-muted)"
          />
        </AreaChart>
      </K.ChartContainer>
    ),
  },
  checkbox: {
    name: "Checkbox",
    description: "Selección independiente",
    render: () => (
      <K.Label className="flex gap-3 items-center">
        <K.Checkbox defaultChecked /> Incluir en el próximo pedido
      </K.Label>
    ),
  },
  code: {
    name: "Code",
    description: "Código con copia al portapapeles",
    render: () => (
      <K.Code filename="example.tsx" copyable>
        {"<Button>Registrar venta</Button>"}
      </K.Code>
    ),
  },
  collapsible: {
    name: "Collapsible",
    description: "Detalles opcionales",
    render: () => (
      <K.Collapsible>
        <K.CollapsibleTrigger asChild>
          <K.Button variant="outline">Ver lote del producto</K.Button>
        </K.CollapsibleTrigger>
        <K.CollapsibleContent className="pt-4">
          Lote OL-2026 · 24 unidades recibidas.
        </K.CollapsibleContent>
      </K.Collapsible>
    ),
  },
  command: {
    name: "Command",
    description: "Buscar y ejecutar una acción",
    render: () => (
      <K.Command>
        <K.CommandInput placeholder="Buscar acción…" />
        <K.CommandList>
          <K.CommandEmpty>No hay resultados.</K.CommandEmpty>
          <K.CommandGroup heading="Mostrador">
            <K.CommandItem onSelect={notify}>Abrir caja</K.CommandItem>
            <K.CommandItem onSelect={notify}>Revisar pedido</K.CommandItem>
          </K.CommandGroup>
        </K.CommandList>
      </K.Command>
    ),
  },
  "context-menu": {
    name: "ContextMenu",
    description: "Acciones con clic derecho",
    render: () => (
      <K.ContextMenu>
        <K.ContextMenuTrigger className="block border border-dashed border-border p-6 rounded-lg">
          Clic derecho sobre el producto
        </K.ContextMenuTrigger>
        <K.ContextMenuContent>
          <K.ContextMenuItem onSelect={notify}>
            Consultar lote
          </K.ContextMenuItem>
          <K.ContextMenuSeparator />
          <K.ContextMenuCheckboxItem>Destacado</K.ContextMenuCheckboxItem>
        </K.ContextMenuContent>
      </K.ContextMenu>
    ),
  },
  "date-picker": {
    name: "DatePicker",
    description: "Fecha, rango, mes y año",
    render: DateDemo,
  },
  dialog: {
    name: "Dialog",
    description: "Ventana modal con foco y cierre",
    render: () => (
      <K.Dialog>
        <K.DialogTrigger asChild>
          <K.Button variant="outline">Abrir diálogo</K.Button>
        </K.DialogTrigger>
        <K.DialogContent>
          <K.DialogHeader>
            <K.DialogTitle>Confirmar recepción</K.DialogTitle>
            <K.DialogDescription>
              Se han recibido todos los productos del pedido.
            </K.DialogDescription>
          </K.DialogHeader>
          <K.DialogFooter>
            <K.DialogClose asChild>
              <K.Button>Entendido</K.Button>
            </K.DialogClose>
          </K.DialogFooter>
        </K.DialogContent>
      </K.Dialog>
    ),
  },
  direction: {
    name: "Direction",
    description: "Soporte de lectura RTL",
    render: () => (
      <K.DirectionProvider dir="rtl">
        <div dir="rtl">
          <K.Tabs defaultValue="one">
            <K.TabsList>
              <K.TabsTrigger value="one">الأول</K.TabsTrigger>
              <K.TabsTrigger value="two">الثاني</K.TabsTrigger>
            </K.TabsList>
            <K.TabsContent value="one">صيدلية · Farmacia</K.TabsContent>
            <K.TabsContent value="two">مخزون · Inventario</K.TabsContent>
          </K.Tabs>
        </div>
      </K.DirectionProvider>
    ),
  },
  drawer: {
    name: "Drawer",
    description: "Panel inferior adaptable",
    render: () => (
      <K.Drawer>
        <K.DrawerTrigger asChild>
          <K.Button variant="outline">Abrir drawer</K.Button>
        </K.DrawerTrigger>
        <K.DrawerContent>
          <K.DrawerHeader>
            <K.DrawerTitle>Resumen de caja</K.DrawerTitle>
            <K.DrawerDescription>
              Revisión del turno de demostración.
            </K.DrawerDescription>
          </K.DrawerHeader>
          <K.DrawerFooter>
            <K.DrawerClose asChild>
              <K.Button>Cerrar resumen</K.Button>
            </K.DrawerClose>
          </K.DrawerFooter>
        </K.DrawerContent>
      </K.Drawer>
    ),
  },
  "dropdown-menu": {
    name: "DropdownMenu",
    description: "Menú de acciones y selección",
    render: () => (
      <K.DropdownMenu>
        <K.DropdownMenuTrigger asChild>
          <K.Button variant="outline">Acciones del producto</K.Button>
        </K.DropdownMenuTrigger>
        <K.DropdownMenuContent>
          <K.DropdownMenuLabel>Producto</K.DropdownMenuLabel>
          <K.DropdownMenuItem onSelect={notify}>
            Duplicar ficha
          </K.DropdownMenuItem>
          <K.DropdownMenuSeparator />
          <K.DropdownMenuCheckboxItem>
            Mostrar en destacados
          </K.DropdownMenuCheckboxItem>
        </K.DropdownMenuContent>
      </K.DropdownMenu>
    ),
  },
  empty: {
    name: "Empty",
    description: "Estado sin resultados",
    render: () => (
      <K.Empty>
        <K.EmptyHeader>
          <K.EmptyIcon>
            <Search />
          </K.EmptyIcon>
          <K.EmptyTitle>Sin pedidos pendientes</K.EmptyTitle>
          <K.EmptyDescription>
            Todo listo para la próxima entrega.
          </K.EmptyDescription>
        </K.EmptyHeader>
      </K.Empty>
    ),
  },
  field: {
    name: "Field",
    description: "Etiqueta, ayuda y error accesibles",
    render: () => (
      <K.Field>
        <K.FieldLabel htmlFor="lab-field">Código de producto</K.FieldLabel>
        <K.Input
          id="lab-field"
          aria-invalid
          aria-describedby="lab-error"
          defaultValue="84"
        />
        <K.FieldDescription>
          El código debe tener seis cifras.
        </K.FieldDescription>
        <K.FieldError id="lab-error">
          Ejemplo de validación: código incompleto.
        </K.FieldError>
      </K.Field>
    ),
  },
  "hover-card": {
    name: "HoverCard",
    description: "Información contextual al pasar el cursor",
    render: () => (
      <K.HoverCard>
        <K.HoverCardTrigger asChild>
          <a href="/clientes" className="text-primary underline">
            Ana, farmacéutica
          </a>
        </K.HoverCardTrigger>
        <K.HoverCardContent>
          Responsable del turno de mañana.
        </K.HoverCardContent>
      </K.HoverCard>
    ),
  },
  input: {
    name: "Input",
    description: "Texto, máscara y estado desactivado",
    render: () => (
      <div className="grid gap-3">
        <K.Input
          aria-label="Nombre de producto de prueba"
          placeholder="Nombre del producto"
        />
        <K.Input
          aria-label="Teléfono con máscara"
          mask="000 000 000"
          placeholder="600 000 000"
        />
        <K.Input
          aria-label="Campo desactivado"
          disabled
          placeholder="Solo lectura"
        />
      </div>
    ),
  },
  "input-group": {
    name: "InputGroup",
    description: "Campos con prefijos y acciones",
    render: () => (
      <K.InputGroup>
        <K.InputGroupAddon>
          <Search size={16} />
        </K.InputGroupAddon>
        <K.Input aria-label="Búsqueda agrupada" placeholder="Código nacional" />
        <K.InputGroupButton onClick={notify}>Buscar</K.InputGroupButton>
      </K.InputGroup>
    ),
  },
  "input-otp": {
    name: "InputOTP",
    description: "Introducción de códigos",
    render: () => (
      <K.InputOTP maxLength={4} aria-label="Código de verificación">
        <K.InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <K.InputOTPSlot key={index} index={index} />
          ))}
        </K.InputOTPGroup>
      </K.InputOTP>
    ),
  },
  item: {
    name: "Item",
    description: "Filas de contenido",
    render: () => (
      <K.Item>
        <K.ItemMedia>
          <FileText size={20} />
        </K.ItemMedia>
        <K.ItemContent>
          <K.ItemTitle>Pedido semanal</K.ItemTitle>
          <K.ItemDescription>
            Proveedor habitual · 12 referencias
          </K.ItemDescription>
        </K.ItemContent>
        <K.ItemActions>
          <K.Button
            variant="ghost"
            size="icon"
            aria-label="Revisar pedido semanal"
            onClick={notify}
          >
            <Check size={16} />
          </K.Button>
        </K.ItemActions>
      </K.Item>
    ),
  },
  kbd: {
    name: "Kbd",
    description: "Indicaciones de teclado",
    render: () => (
      <p className="muted">
        Usa <K.Kbd>Tab</K.Kbd> para avanzar y <K.Kbd>Esc</K.Kbd> para cerrar.
      </p>
    ),
  },
  label: {
    name: "Label",
    description: "Etiquetas asociadas a controles",
    render: () => (
      <div className="grid gap-2">
        <K.Label htmlFor="lab-label">Nombre del proveedor</K.Label>
        <K.Input id="lab-label" placeholder="Distribuidora Oliva" />
      </div>
    ),
  },
  marker: {
    name: "Marker",
    description: "Separadores de actividad",
    render: () => (
      <K.Marker variant="separator">
        <K.MarkerIcon>
          <Check />
        </K.MarkerIcon>
        <K.MarkerContent>Hoy · Apertura de caja</K.MarkerContent>
      </K.Marker>
    ),
  },
  menubar: {
    name: "Menubar",
    description: "Navegación entre menús con teclado",
    render: () => (
      <K.Menubar>
        <K.MenubarMenu>
          <K.MenubarTrigger>Archivo</K.MenubarTrigger>
          <K.MenubarContent>
            <K.MenubarItem onSelect={notify}>Nuevo pedido</K.MenubarItem>
            <K.MenubarItem onSelect={notify}>Exportar</K.MenubarItem>
          </K.MenubarContent>
        </K.MenubarMenu>
        <K.MenubarMenu>
          <K.MenubarTrigger>Vista</K.MenubarTrigger>
          <K.MenubarContent>
            <K.MenubarCheckboxItem>Vista compacta</K.MenubarCheckboxItem>
          </K.MenubarContent>
        </K.MenubarMenu>
      </K.Menubar>
    ),
  },
  message: {
    name: "Message",
    description: "Mensajes del equipo",
    render: () => (
      <K.Message>
        <K.MessageContent>
          <K.MessageHeader>Ana · Mostrador</K.MessageHeader>
          <K.Bubble>
            <K.BubbleContent>
              La recepción del pedido ha terminado.
            </K.BubbleContent>
          </K.Bubble>
          <K.MessageFooter>Hace un momento</K.MessageFooter>
        </K.MessageContent>
      </K.Message>
    ),
  },
  "message-scroller": {
    name: "MessageScroller",
    description: "Conversaciones con desplazamiento",
    render: () => (
      <K.MessageScroller className="h-40">
        <K.MessageGroup>
          {Array.from({ length: 8 }, (_, i) => (
            <K.Message key={i}>
              <K.MessageContent>
                <K.Bubble>
                  <K.BubbleContent>
                    Actualización del pedido {i + 1}
                  </K.BubbleContent>
                </K.Bubble>
              </K.MessageContent>
            </K.Message>
          ))}
        </K.MessageGroup>
      </K.MessageScroller>
    ),
  },
  "navigation-menu": {
    name: "NavigationMenu",
    description: "Enlaces y panel de navegación",
    render: () => (
      <K.NavigationMenu>
        <K.NavigationMenuList>
          <K.NavigationMenuItem>
            <K.NavigationMenuTrigger>Tienda</K.NavigationMenuTrigger>
            <K.NavigationMenuContent className="p-5">
              <K.NavigationMenuLink asChild>
                <Link href="/inventario">Ir al inventario</Link>
              </K.NavigationMenuLink>
            </K.NavigationMenuContent>
          </K.NavigationMenuItem>
        </K.NavigationMenuList>
      </K.NavigationMenu>
    ),
  },
  pagination: {
    name: "Pagination",
    description: "Cambio de página controlado",
    render: PaginationDemo,
  },
  popover: {
    name: "Popover",
    description: "Panel contextual",
    render: () => (
      <K.Popover>
        <K.PopoverTrigger asChild>
          <K.Button variant="outline">Ver horario</K.Button>
        </K.PopoverTrigger>
        <K.PopoverContent className="relative pr-12">
          <strong>Horario de tienda</strong>
          <p className="muted">Lunes a sábado · 09:00–21:00</p>
          <K.PopoverClose asChild>
            <K.Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 text-muted-foreground"
              aria-label="Cerrar horario"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </K.Button>
          </K.PopoverClose>
        </K.PopoverContent>
      </K.Popover>
    ),
  },
  progress: {
    name: "Progress",
    description: "Avance de una tarea",
    render: () => (
      <div className="grid gap-3">
        <span className="muted">Recepción del pedido · 65 %</span>
        <K.Progress value={65} aria-label="Recepción del pedido" />
      </div>
    ),
  },
  questionnaire: {
    name: "Questionnaire",
    description: "Formulario guiado de dos pasos",
    render: () => (
      <K.Questionnaire
        questions={[
          {
            id: "shift",
            title: "¿Qué turno vas a abrir?",
            options: [
              { label: "Mañana", value: "morning" },
              { label: "Tarde", value: "afternoon" },
            ],
          },
          {
            id: "notes",
            title: "Notas del turno",
            type: "freeform",
            optional: true,
          },
        ]}
        onComplete={() => K.toast.success("Cuestionario completado")}
      />
    ),
  },
  "radio-group": {
    name: "RadioGroup",
    description: "Elección de una única opción",
    render: () => (
      <K.RadioGroup defaultValue="card" aria-label="Método de pago de prueba">
        <K.Label className="flex gap-3">
          <K.RadioGroupItem value="card" /> Tarjeta
        </K.Label>
        <K.Label className="flex gap-3">
          <K.RadioGroupItem value="cash" /> Efectivo
        </K.Label>
      </K.RadioGroup>
    ),
  },
  resizable: {
    name: "Resizable",
    description: "Paneles ajustables con ratón o teclado",
    render: () => (
      <K.ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border border-border"
      >
        <K.ResizablePanel defaultSize={50} minSize={20}>
          <div className="p-6">Catálogo</div>
        </K.ResizablePanel>
        <K.ResizableHandle withHandle />
        <K.ResizablePanel defaultSize={50} minSize={20}>
          <div className="p-6">Ticket</div>
        </K.ResizablePanel>
      </K.ResizablePanelGroup>
    ),
  },
  "scroll-area": {
    name: "ScrollArea",
    description: "Desplazamiento estándar y virtualizado",
    render: () => (
      <div className="grid gap-4">
        <K.ScrollArea className="h-24 rounded border border-border">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="p-2 text-xs">
              Lote {i + 1} · Recibido
            </p>
          ))}
        </K.ScrollArea>
        <K.VirtualScrollArea
          className="h-24 rounded border border-border"
          items={Array.from({ length: 100 }, (_, i) => `Referencia ${i + 1}`)}
          estimateSize={() => 34}
          renderItem={(item) => <div className="p-2 text-xs">{item}</div>}
        />
      </div>
    ),
  },
  select: {
    name: "Select",
    description: "Selección, creación y carga asíncrona",
    render: () => (
      <div className="grid gap-3">
        <K.Select
          instanceId="lab-select"
          aria-label="Categoría de prueba"
          options={options}
          placeholder="Seleccionar categoría"
        />
        <K.CreatableSelect
          instanceId="lab-creatable"
          aria-label="Crear etiqueta"
          options={options}
          placeholder="Crear etiqueta"
        />
        <K.AsyncSelect
          instanceId="lab-async"
          aria-label="Buscar categoría"
          defaultOptions
          loadOptions={async (query) =>
            options.filter((o) =>
              o.label.toLowerCase().includes(query.toLowerCase()),
            )
          }
          placeholder="Buscar categoría"
        />
      </div>
    ),
  },
  separator: {
    name: "Separator",
    description: "Separación visual y semántica",
    render: () => (
      <div className="grid gap-4">
        <span>Turno de mañana</span>
        <K.Separator />
        <span>Turno de tarde</span>
      </div>
    ),
  },
  sheet: {
    name: "Sheet",
    description: "Panel lateral de detalle",
    render: () => (
      <K.Sheet>
        <K.SheetTrigger asChild>
          <K.Button variant="outline">Abrir ficha</K.Button>
        </K.SheetTrigger>
        <K.SheetContent>
          <K.SheetHeader>
            <K.SheetTitle>Ficha del proveedor</K.SheetTitle>
            <K.SheetDescription>
              Distribuidora Oliva · Datos de prueba.
            </K.SheetDescription>
          </K.SheetHeader>
          <K.SheetFooter>
            <K.SheetClose asChild>
              <K.Button>Cerrar ficha</K.Button>
            </K.SheetClose>
          </K.SheetFooter>
        </K.SheetContent>
      </K.Sheet>
    ),
  },
  skeleton: {
    name: "Skeleton",
    description: "Reserva de espacio durante la carga",
    render: () => (
      <div className="flex gap-4">
        <K.Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 grid gap-3">
          <K.Skeleton className="h-4 w-3/4" />
          <K.Skeleton className="h-4 w-full" />
        </div>
      </div>
    ),
  },
  slider: {
    name: "Slider",
    description: "Ajuste de un valor numérico",
    render: SliderDemo,
  },
  spinner: {
    name: "Spinner",
    description: "Indicador de actividad",
    render: () => (
      <div className="flex gap-3 items-center">
        <K.Spinner />
        <span className="muted">Ejemplo de carga</span>
      </div>
    ),
  },
  switch: {
    name: "Switch",
    description: "Activar y desactivar preferencias",
    render: () => (
      <K.Label className="flex gap-3 items-center">
        <K.Switch defaultChecked /> Alertas de reposición
      </K.Label>
    ),
  },
  table: {
    name: "Table",
    description: "Tabla simple y DataTable interactiva",
    render: () => (
      <div className="grid gap-4">
        <K.Table>
          <K.TableCaption>Stock de ejemplo</K.TableCaption>
          <K.TableHeader>
            <K.TableRow>
              <K.TableHead>Producto</K.TableHead>
              <K.TableHead>Stock</K.TableHead>
            </K.TableRow>
          </K.TableHeader>
          <K.TableBody>
            <K.TableRow>
              <K.TableCell>Crema hidratante</K.TableCell>
              <K.TableCell>28</K.TableCell>
            </K.TableRow>
          </K.TableBody>
        </K.Table>
        <K.DataTable
          advanced
          searchable
          selectable
          paginated
          pageSize={2}
          filters={[
            {
              columnId: "status",
              type: "select",
              label: "Estado",
              placeholder: "Todos los estados",
              options: [
                { label: "Activo", value: "active" },
                { label: "Pausado", value: "paused" },
              ],
            },
            {
              columnId: "needsRestock",
              type: "switch",
              label: "Solo para reponer",
              description:
                "Activado: muestra productos que necesitan reposición. Desactivado: muestra todos.",
            },
          ]}
          columns={[
            { accessorKey: "name", header: "Producto" },
            { accessorKey: "stock", header: "Stock" },
            {
              accessorKey: "status",
              header: "Estado",
              cell: ({ getValue }) =>
                getValue() === "active" ? "Activo" : "Pausado",
            },
            {
              accessorKey: "needsRestock",
              header: "Reposición",
              cell: ({ getValue }) => (getValue() ? "Necesaria" : "Al día"),
            },
          ]}
          data={[
            {
              name: "Protector solar",
              stock: 42,
              status: "active",
              needsRestock: false,
            },
            {
              name: "Gel de manos",
              stock: 65,
              status: "paused",
              needsRestock: false,
            },
            {
              name: "Apósitos",
              stock: 8,
              status: "active",
              needsRestock: true,
            },
          ]}
        />
      </div>
    ),
  },
  tabs: {
    name: "Tabs",
    description: "Contenido organizado en pestañas",
    render: () => (
      <K.Tabs defaultValue="details">
        <K.TabsList>
          <K.TabsTrigger value="details">Detalles</K.TabsTrigger>
          <K.TabsTrigger value="stock">Stock</K.TabsTrigger>
        </K.TabsList>
        <K.TabsContent value="details">Protector solar · Helia</K.TabsContent>
        <K.TabsContent value="stock">42 unidades disponibles</K.TabsContent>
      </K.Tabs>
    ),
  },
  textarea: {
    name: "Textarea",
    description: "Notas con varias líneas",
    render: () => (
      <K.Textarea
        aria-label="Notas del pedido"
        placeholder="Añade una nota al pedido…"
      />
    ),
  },
  toast: {
    name: "Toast",
    description: "Notificaciones con Sonner",
    render: () => (
      <div className="flex flex-wrap gap-2">
        <K.Button
          onClick={() => K.toast.success("Pedido recibido correctamente")}
        >
          Mostrar éxito
        </K.Button>
        <K.Button
          variant="outline"
          onClick={() =>
            K.toast.error("No se pudo guardar el pedido de prueba")
          }
        >
          Mostrar error
        </K.Button>
      </div>
    ),
  },
  toggle: {
    name: "Toggle",
    description: "Acción con estado seleccionado",
    render: () => (
      <K.Toggle aria-label="Favorito">
        {(pressed) => (
          <>
            {pressed ? <Check size={16} aria-hidden="true" /> : <Heart size={16} aria-hidden="true" />}
            {pressed ? "En favoritos" : "Favorito"}
          </>
        )}
      </K.Toggle>
    ),
  },
  "toggle-group": {
    name: "ToggleGroup",
    description: "Selección entre opciones visuales",
    render: () => (
      <K.ToggleGroup type="single" defaultValue="day">
        <K.ToggleGroupItem value="day">Día</K.ToggleGroupItem>
        <K.ToggleGroupItem value="week">Semana</K.ToggleGroupItem>
        <K.ToggleGroupItem value="month">Mes</K.ToggleGroupItem>
      </K.ToggleGroup>
    ),
  },
  tooltip: {
    name: "Tooltip",
    description: "Ayuda mediante cursor o foco",
    render: () => (
      <K.Tooltip>
        <K.TooltipTrigger asChild>
          <K.Button variant="outline">Pasar el cursor</K.Button>
        </K.TooltipTrigger>
        <K.TooltipContent>Recibir unidades en el almacén</K.TooltipContent>
      </K.Tooltip>
    ),
  },
  typography: {
    name: "Typography",
    description: "Jerarquía, párrafos y textos de apoyo",
    render: () => (
      <div>
        <K.TypographyH2 className="text-xl">
          Cuidar es lo primero.
        </K.TypographyH2>
        <K.TypographyP>Una farmacia cercana, cada día.</K.TypographyP>
        <K.TypographyMuted>Oliva · Tu equipo de confianza.</K.TypographyMuted>
        <K.TypographyInlineCode>stock: 42</K.TypographyInlineCode>
      </div>
    ),
  },
};

export function ComponentLab() {
  const [query, setQuery] = useState("");
  const filtered = Object.entries(examples).filter(([, example]) =>
    `${example.name} ${example.description}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="KIVORA UI × NEXT.JS"
        title="Laboratorio de componentes"
        description="Prueba cada familia de la librería dentro de una aplicación real."
      >
        <K.Badge variant="secondary">
          {Object.keys(examples).length} familias
        </K.Badge>
      </PageHeading>
      <K.Alert>
        <K.AlertTitle>Un espacio para explorar</K.AlertTitle>
        <K.AlertDescription>
          Los controles de esta página son ejemplos independientes. Prueba el
          teclado, los estados, las ventanas y la vista móvil.
        </K.AlertDescription>
      </K.Alert>
      <div className="lab-toolbar">
        <K.Input
          aria-label="Buscar componentes"
          placeholder="Buscar componente…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <K.Badge variant="outline">{filtered.length} resultados</K.Badge>
      </div>
      <div className="lab-grid">
        {filtered.map(([id, example]) => (
          <section key={id} id={id} data-component={id} className="lab-example">
            <h2>{example.name}</h2>
            <p className="lab-description">{example.description}</p>
            <div className="lab-preview">
              <example.render />
            </div>
          </section>
        ))}
      </div>
      {!filtered.length && (
        <K.Empty>
          <K.EmptyTitle>No hay coincidencias</K.EmptyTitle>
          <K.EmptyDescription>
            Prueba con otro nombre de componente.
          </K.EmptyDescription>
        </K.Empty>
      )}
      <section className="lab-example mt-5" data-component="provider">
        <h2>Provider y hooks</h2>
        <ThemeDemo />
      </section>
    </>
  );
}
