import type { Meta, StoryObj } from "@storybook/react";
import { Label, Switch } from "@kivora/nextjs";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  args: {
    "aria-label": "Activar"
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Notificaciones</Label>
    </div>
  )
};

export const SettingsRow: Story = {
  render: () => (
    <div className="flex w-80 items-center justify-between rounded-md border bg-card p-4">
      <div className="space-y-1">
        <Label htmlFor="marketing">Emails de producto</Label>
        <p className="text-sm text-muted-foreground">Recibe novedades importantes.</p>
      </div>
      <Switch id="marketing" defaultChecked />
    </div>
  )
};
