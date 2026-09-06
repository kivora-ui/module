import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Select,
  Separator
} from "@kivora/nextjs";
import type { SelectOption } from "@kivora/nextjs";
import { ChevronDown, Code2, Filter, SlidersHorizontal } from "lucide-react";
import * as React from "react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

const statusOptions: SelectOption[] = [
  { label: "Todos", value: "all" },
  { label: "Activos", value: "active" },
  { label: "Archivados", value: "archived" }
];

const priorityOptions: SelectOption[] = [
  { label: "Cualquiera", value: "any" },
  { label: "Alta", value: "high" },
  { label: "Media", value: "medium" }
];

export const Default: Story = {
  render: () => (
    <Collapsible className="w-96 max-w-full rounded-md border border-border/70 bg-card p-4" defaultOpen>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">Detalles del despliegue</h3>
          <p className="text-sm text-muted-foreground">Estado, region y version activa.</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button
            aria-label="Mostrar detalles"
            className="[&[data-state=open]>svg]:rotate-180"
            size="icon"
            variant="ghost"
          >
            <ChevronDown className="h-4 w-4 transition-transform" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Region</span>
            <span>eu-west-1</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Version</span>
            <Badge variant="secondary">v1.8.2</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Health</span>
            <span>99.98%</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
};

export const FilterPanel: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState<SelectOption | null>(statusOptions[0]!);
    const [priority, setPriority] = React.useState<SelectOption | null>(priorityOptions[0]!);
    const menuPortalTarget = typeof document === "undefined" ? undefined : document.body;

    return (
      <Collapsible
        className="w-[28rem] max-w-full rounded-md border border-border/70 bg-card"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-border/70 bg-muted p-2">
              <Filter className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Filtros avanzados</h3>
              <p className="text-sm text-muted-foreground">
                {open ? "3 filtros disponibles" : "Ocultos para mantener la vista limpia"}
              </p>
            </div>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="outline">{open ? "Ocultar" : "Mostrar"}</Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Separator />
          <div className="grid gap-3 p-4 text-sm">
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-4">
              <label className="text-muted-foreground" htmlFor="collapsible-status">
                Estado
              </label>
              <Select
                inputId="collapsible-status"
                menuPortalTarget={menuPortalTarget}
                menuPosition="fixed"
                mobileSheetTitle="Selecciona estado"
                options={statusOptions}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 60 }) }}
                value={status}
                onChange={(option) => setStatus(option as SelectOption | null)}
              />
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-4">
              <label className="text-muted-foreground" htmlFor="collapsible-priority">
                Prioridad
              </label>
              <Select
                inputId="collapsible-priority"
                menuPortalTarget={menuPortalTarget}
                menuPosition="fixed"
                mobileSheetTitle="Selecciona prioridad"
                options={priorityOptions}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 60 }) }}
                value={priority}
                onChange={(option) => setPriority(option as SelectOption | null)}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
};

export const CodeBlock: Story = {
  render: () => (
    <Collapsible className="w-[32rem] max-w-full rounded-md border border-border/70 bg-card">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <Code2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Payload enviado</span>
        </div>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="ghost">
            Ver JSON
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <pre className="mx-4 mb-4 overflow-auto rounded-md bg-muted p-3 text-xs">
          {`{
  "workspace": "design-system",
  "components": ["button", "select", "dialog"],
  "sync": true
}`}
        </pre>
      </CollapsibleContent>
    </Collapsible>
  )
};

export const SettingsGroup: Story = {
  render: () => (
    <Collapsible className="w-96 max-w-full rounded-md border border-border/70 bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Opciones de sincronizacion</span>
        </div>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="outline">
            Editar
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Sincroniza tokens, estilos base y componentes publicados.</p>
          <p>Los cambios se aplican solo al workspace activo.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
};
