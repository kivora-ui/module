import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Label } from "@kivora/nextjs";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    "aria-label": "Seleccionar"
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Acepto los terminos</Label>
    </div>
  )
};

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="privacy" aria-invalid="true" className="border-destructive" />
      <Label htmlFor="privacy">Requiere confirmacion</Label>
    </div>
  )
};
