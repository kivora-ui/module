import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Button
} from "@kivora/nextjs";
import { Bell, CreditCard, LogOut, MoreHorizontal, Settings, UserPlus } from "lucide-react";
import * as React from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="h-4 w-4" />
          Acciones
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="h-4 w-4" />
          Ajustes
          <DropdownMenuShortcut>Ctrl ,</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus className="h-4 w-4" />
          Invitar miembro
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="h-4 w-4" />
          Facturacion
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="h-4 w-4" />
          Cerrar sesion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export const Preferences: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [density, setDensity] = React.useState("comfortable");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Bell className="h-4 w-4" />
            Preferencias
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuLabel>Visualizacion</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={notifications} onCheckedChange={setNotifications}>
            Notificaciones activas
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>
            Mostrar barra lateral
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Densidad</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
            <DropdownMenuRadioItem value="compact">Compacta</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="comfortable">Comoda</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="spacious">Espaciada</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Nuevo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>Proyecto</DropdownMenuItem>
          <DropdownMenuItem>Documento</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Plantilla</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>CRM</DropdownMenuItem>
              <DropdownMenuItem>Roadmap</DropdownMenuItem>
              <DropdownMenuItem>Research</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Importar desde CSV</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};
