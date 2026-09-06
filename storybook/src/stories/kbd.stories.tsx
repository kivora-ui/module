import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@kivora/nextjs";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  args: {
    children: "⌘K",
    size: "md",
    variant: "default"
  },
  argTypes: {
    children: { control: "text" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["default", "outline", "solid"] }
  }
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd size="sm">Esc</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">Enter</Kbd>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd variant="outline">Shift</Kbd>
      <Kbd variant="solid">K</Kbd>
    </div>
  )
};

export const Shortcut: Story = {
  render: () => (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="ml-2">Open command menu</span>
    </div>
  )
};

export const ShortcutList: Story = {
  render: () => (
    <div className="w-80 divide-y divide-border/70 rounded-md border border-border/70 bg-background">
      {[
        ["Open command menu", ["⌘", "K"]],
        ["Create record", ["C"]],
        ["Close overlay", ["Esc"]]
      ].map(([label, keys]) => (
        <div key={label as string} className="flex items-center justify-between gap-4 px-4 py-3">
          <span className="text-sm">{label}</span>
          <span className="flex items-center gap-1.5">
            {(keys as string[]).map((key) => (
              <Kbd key={key} size="sm">
                {key}
              </Kbd>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
};
