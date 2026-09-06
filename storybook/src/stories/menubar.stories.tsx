import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "@kivora/nextjs";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-start justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New project <MenubarShortcut>Ctrl N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Import</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>CSV</MenubarItem>
              <MenubarItem>JSON</MenubarItem>
              <MenubarItem>Figma</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>Export</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>Ctrl Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>Shift Ctrl Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Activity panel</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Density</MenubarLabel>
          <MenubarRadioGroup value="comfortable">
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
            <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
};

export const ApplicationMenu: Story = {
  render: () => (
    <Menubar className="w-full max-w-2xl justify-start">
      <MenubarMenu>
        <MenubarTrigger>Workspace</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarLabel>Acme Studio</MenubarLabel>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Members</MenubarItem>
            <MenubarItem>Billing</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Reports</MenubarTrigger>
        <MenubarContent className="w-60">
          <MenubarItem>Pipeline</MenubarItem>
          <MenubarItem>Revenue</MenubarItem>
          <MenubarItem>Team capacity</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent align="end" className="w-56">
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Contact support</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Keyboard shortcuts</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
};
