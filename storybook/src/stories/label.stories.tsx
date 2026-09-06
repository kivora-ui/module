import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label } from "@kivora/nextjs";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: {
    children: "Email"
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="correo@kivora.dev" />
    </div>
  )
};

export const Required: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="required-email">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input id="required-email" placeholder="correo@kivora.dev" required />
    </div>
  )
};
