import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@kivora/nextjs";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"]
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 }
    }
  },
  args: {
    size: "default",
    value: 56
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => (
    <div className="w-96 max-w-full space-y-2">
      <Progress {...args} />
      <p className="text-sm text-muted-foreground">{args.value ?? 0}% completado</p>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="w-96 max-w-full space-y-5">
      <Progress size="sm" value={32} />
      <Progress value={56} />
      <Progress size="lg" value={82} />
    </div>
  )
};

export const Status: Story = {
  render: () => (
    <div className="w-96 max-w-full space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Storage</span>
          <span className="text-muted-foreground">42%</span>
        </div>
        <Progress value={42} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Errors</span>
          <span className="text-muted-foreground">78%</span>
        </div>
        <Progress indicatorClassName="bg-destructive" value={78} />
      </div>
    </div>
  )
};

export const CustomMax: Story = {
  render: () => (
    <div className="w-96 max-w-full space-y-2">
      <Progress max={250} value={175} />
      <p className="text-sm text-muted-foreground">175 de 250 tareas</p>
    </div>
  )
};
