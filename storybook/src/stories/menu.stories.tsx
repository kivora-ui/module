import type { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuDropdown,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  Button
} from "@kivora/nextjs";
import { Bell, CreditCard, LogOut, MoreHorizontal, Settings, UserPlus } from "lucide-react";
import * as React from "react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="h-4 w-4" />
          Acciones
        </Button>
      </MenuTrigger>
      <MenuContent align="start" className="w-56">
        <MenuLabel>Workspace</MenuLabel>
        <MenuSeparator />
        <MenuItem>
          <Settings className="h-4 w-4" />
          Ajustes
          <MenuShortcut>Ctrl ,</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <UserPlus className="h-4 w-4" />
          Invitar miembro
        </MenuItem>
        <MenuItem>
          <CreditCard className="h-4 w-4" />
          Facturacion
        </MenuItem>
        <MenuSeparator />
        <MenuItem className="text-destructive focus:text-destructive">
          <LogOut className="h-4 w-4" />
          Cerrar sesion
        </MenuItem>
      </MenuContent>
    </Menu>
  )
};

export const Preferences: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [density, setDensity] = React.useState("comfortable");

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">
            <Bell className="h-4 w-4" />
            Preferencias
          </Button>
        </MenuTrigger>
        <MenuContent align="start" className="w-64">
          <MenuLabel>Visualizacion</MenuLabel>
          <MenuCheckboxItem checked={notifications} onCheckedChange={setNotifications}>
            Notificaciones activas
          </MenuCheckboxItem>
          <MenuCheckboxItem checked>
            Mostrar barra lateral
          </MenuCheckboxItem>
          <MenuSeparator />
          <MenuLabel>Densidad</MenuLabel>
          <MenuRadioGroup value={density} onValueChange={setDensity}>
            <MenuRadioItem value="compact">Compacta</MenuRadioItem>
            <MenuRadioItem value="comfortable">Comoda</MenuRadioItem>
            <MenuRadioItem value="spacious">Espaciada</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  }
};

export const WithSubmenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button>Nuevo</Button>
      </MenuTrigger>
      <MenuContent align="start" className="w-56">
        <MenuGroup>
          <MenuItem>Proyecto</MenuItem>
          <MenuItem>Documento</MenuItem>
          <MenuSub>
            <MenuSubTrigger>Plantilla</MenuSubTrigger>
            <MenuSubContent className="w-48">
              <MenuItem>CRM</MenuItem>
              <MenuItem>Roadmap</MenuItem>
              <MenuItem>Research</MenuItem>
            </MenuSubContent>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem disabled>Importar desde CSV</MenuItem>
      </MenuContent>
    </Menu>
  )
};

export const BarDefault: Story = {
  render: () => (
    <Menu variant="bar">
      <MenuDropdown>
        <MenuTrigger>File</MenuTrigger>
        <MenuContent>
          <MenuItem>
            New project <MenuShortcut>Ctrl N</MenuShortcut>
          </MenuItem>
          <MenuItem>Open...</MenuItem>
          <MenuSeparator />
          <MenuSub>
            <MenuSubTrigger>Import</MenuSubTrigger>
            <MenuSubContent>
              <MenuItem>CSV</MenuItem>
              <MenuItem>JSON</MenuItem>
              <MenuItem>Figma</MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator />
          <MenuItem disabled>Export</MenuItem>
        </MenuContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuTrigger>Edit</MenuTrigger>
        <MenuContent>
          <MenuItem>
            Undo <MenuShortcut>Ctrl Z</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Redo <MenuShortcut>Shift Ctrl Z</MenuShortcut>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuTrigger>View</MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked>Sidebar</MenuCheckboxItem>
          <MenuCheckboxItem>Activity panel</MenuCheckboxItem>
          <MenuSeparator />
          <MenuLabel>Density</MenuLabel>
          <MenuRadioGroup value="comfortable">
            <MenuRadioItem value="compact">Compact</MenuRadioItem>
            <MenuRadioItem value="comfortable">Comfortable</MenuRadioItem>
            <MenuRadioItem value="spacious">Spacious</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </MenuDropdown>
    </Menu>
  )
};

export const BarApplicationMenu: Story = {
  render: () => (
    <Menu variant="bar" className="w-full max-w-2xl justify-start">
      <MenuDropdown>
        <MenuTrigger>Workspace</MenuTrigger>
        <MenuContent className="w-56">
          <MenuLabel>Acme Studio</MenuLabel>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Members</MenuItem>
            <MenuItem>Billing</MenuItem>
          </MenuGroup>
        </MenuContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuTrigger>Reports</MenuTrigger>
        <MenuContent className="w-60">
          <MenuItem>Pipeline</MenuItem>
          <MenuItem>Revenue</MenuItem>
          <MenuItem>Team capacity</MenuItem>
        </MenuContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuTrigger>Help</MenuTrigger>
        <MenuContent align="end" className="w-56">
          <MenuItem>Documentation</MenuItem>
          <MenuItem>Contact support</MenuItem>
          <MenuSeparator />
          <MenuItem>Keyboard shortcuts</MenuItem>
        </MenuContent>
      </MenuDropdown>
    </Menu>
  )
};
