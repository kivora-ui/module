import type { Meta, StoryObj } from "@storybook/react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, ListFilter } from "lucide-react";
import { Toggle } from "@kivora/nextjs";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  args: {
    children: "Toggle",
    variant: "default",
    size: "default"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"]
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"]
    }
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-center justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: "Published"
  }
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    "aria-label": "Toggle filters",
    children: <ListFilter className="h-4 w-4" />
  }
};

export const Toolbar: Story = {
  render: () => (
    <div className="inline-flex rounded-md border border-border/70 bg-background p-1 shadow-sm">
      <Toggle size="icon" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="icon" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="icon" aria-label="Align left" pressed>
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle size="icon" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle size="icon" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle size="sm" variant="outline">
        Small
      </Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle size="lg" variant="outline">
        Large
      </Toggle>
    </div>
  )
};

