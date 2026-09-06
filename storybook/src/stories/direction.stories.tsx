import type { Meta, StoryObj } from "@storybook/react";
import { DirectionProvider, Input, Label } from "@kivora/nextjs";

const meta: Meta<typeof DirectionProvider> = {
  title: "Components/Direction",
  component: DirectionProvider,
  args: {
    dir: "rtl"
  },
  argTypes: {
    dir: {
      control: "radio",
      options: ["ltr", "rtl"]
    }
  },
  parameters: { layout: "centered" }
};

export default meta;
type Story = StoryObj<typeof DirectionProvider>;

export const Default: Story = {
  render: (args) => (
    <DirectionProvider {...args} className="w-[min(92vw,520px)]">
      <div className="grid gap-4 rounded-md border border-border/60 bg-background p-4 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-base font-semibold">Workspace profile</h3>
          <p className="text-sm text-muted-foreground">The text flow, input cursor and alignment follow the selected direction.</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="direction-name">اسم الفريق</Label>
          <Input id="direction-name" defaultValue="Kivora" />
        </div>
        <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 text-sm">
          <span>Current direction</span>
          <strong>{args.dir}</strong>
        </div>
      </div>
    </DirectionProvider>
  )
};
