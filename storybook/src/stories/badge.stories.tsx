import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@kivora/nextjs";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "Badge"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Beta" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Error" } };
export const Outline: Story = { args: { variant: "outline", children: "Draft" } };

export const Group: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge>Activo</Badge>
      <Badge variant="secondary">Beta</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  )
};
