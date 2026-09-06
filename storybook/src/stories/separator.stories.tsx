import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@kivora/nextjs";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Kivora UI</h4>
        <p className="text-sm text-muted-foreground">Component primitives.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <span>Components</span>
        <span>Tokens</span>
      </div>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  )
};
