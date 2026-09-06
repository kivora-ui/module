import type { Meta, StoryObj } from "@storybook/react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@kivora/nextjs";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  decorators: [
    (Story) => (
      <div className="flex w-[760px] max-w-full items-center justify-center p-6">
        <Story />
      </div>
    )
  ],
  parameters: { layout: "centered" }
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      className="h-72 w-full rounded-md border border-border/70 bg-background shadow-sm"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={28} minSize={20}>
        <div className="flex h-full flex-col justify-between bg-muted/30 p-4">
          <div>
            <div className="text-sm font-semibold">Sidebar</div>
            <p className="mt-1 text-sm text-muted-foreground">Drag the handle to resize this column.</p>
          </div>
          <div className="rounded-md border border-border/70 bg-background p-3 text-sm">Navigation</div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={72}>
        <div className="grid h-full place-items-center p-6">
          <div className="w-full rounded-md border border-border/70 p-6">
            <div className="text-sm font-semibold">Content</div>
            <p className="mt-1 text-sm text-muted-foreground">
              This panel takes the remaining horizontal space.
            </p>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      className="h-96 w-full rounded-md border border-border/70 bg-background shadow-sm"
      direction="vertical"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full flex-col justify-center bg-muted/30 p-4">
          <div className="text-sm font-semibold">Header Panel</div>
          <p className="mt-1 text-sm text-muted-foreground">Resize vertically from the divider below.</p>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <div className="grid h-full gap-3 p-4">
          <div className="rounded-md border border-border/70 p-4 text-sm font-medium">Body content</div>
          <div className="rounded-md border border-border/70 p-4 text-sm text-muted-foreground">
            The lower panel keeps the remaining vertical space.
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
};
