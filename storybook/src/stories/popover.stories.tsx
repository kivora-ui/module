import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays, Filter } from "lucide-react";
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Select
} from "@kivora/nextjs";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <div className="flex min-h-80 items-center justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-4">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Filtros</h4>
          <p className="text-sm text-muted-foreground">Ajusta el listado visible.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="popover-search">Buscar</Label>
          <Input id="popover-search" placeholder="Nombre o email" />
        </div>
        <div className="flex justify-end">
          <PopoverClose asChild>
            <Button size="sm">Aplicar</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
};

export const DatePickerShell: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarDays className="h-4 w-4" />
          Seleccionar fecha
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 space-y-3">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Rango</h4>
          <p className="text-sm text-muted-foreground">Selecciona una ventana de trabajo.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="from">Desde</Label>
            <Input id="from" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">Hasta</Label>
            <Input id="to" type="date" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
};

export const WithSelect: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Estado</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 overflow-visible space-y-3">
        <Label>Estado</Label>
        <Select
          options={[
            { label: "Activo", value: "active" },
            { label: "Pausado", value: "paused" },
            { label: "Archivado", value: "archived" }
          ]}
          placeholder="Selecciona estado"
        />
      </PopoverContent>
    </Popover>
  )
};
