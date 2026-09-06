import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, Separator, VirtualScrollArea } from "@kivora/nextjs";

const tags = Array.from({ length: 36 }, (_, index) => `v1.${index + 1}.0`);
const columns = ["Product", "Owner", "Status", "Updated", "Plan", "Usage", "Region"];
const events = Array.from({ length: 10000 }, (_, index) => ({
  id: `evt-${index + 1}`,
  level: index % 7 === 0 ? "Warning" : index % 5 === 0 ? "Info" : "Success",
  message: `Workspace event ${index + 1}`,
  timestamp: `10:${String(index % 60).padStart(2, "0")}`
}));

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-center justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-72 rounded-md border border-border/70 bg-background">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium leading-none">Releases</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-2 text-sm">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 max-w-full rounded-md border border-border/70 bg-background">
      <div className="flex w-max gap-3 p-4">
        {columns.map((column) => (
          <div
            key={column}
            className="flex h-24 w-36 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-sm font-medium"
          >
            {column}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
};

export const ContentPanel: Story = {
  render: () => (
    <ScrollArea className="h-80 w-[34rem] max-w-full rounded-md border border-border/70 bg-card">
      <div className="space-y-4 p-5">
        {Array.from({ length: 10 }, (_, index) => (
          <article key={index} className="space-y-1">
            <h4 className="text-sm font-medium">Workspace event {index + 1}</h4>
            <p className="text-sm leading-6 text-muted-foreground">
              Team activity, billing notes, deployment updates, and permission changes stay
              readable inside a contained panel without showing the browser default scrollbar.
            </p>
          </article>
        ))}
      </div>
    </ScrollArea>
  )
};

export const VirtualizedList: Story = {
  render: () => (
    <VirtualScrollArea
      className="h-80 w-[34rem] max-w-full rounded-md border border-border/70 bg-card"
      estimateSize={() => 52}
      getItemKey={(index) => events[index]!.id}
      items={events}
      itemClassName="px-4"
      overscan={8}
      renderItem={(event) => (
        <div className="flex h-full items-center justify-between gap-4 border-b border-border/70">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{event.message}</p>
            <p className="text-xs text-muted-foreground">{event.level}</p>
          </div>
          <time className="shrink-0 text-xs text-muted-foreground">{event.timestamp}</time>
        </div>
      )}
    />
  )
};

export const VirtualizedHorizontal: Story = {
  render: () => (
    <VirtualScrollArea
      className="h-36 w-[34rem] max-w-full rounded-md border border-border/70 bg-background"
      estimateSize={() => 156}
      horizontal
      items={Array.from({ length: 200 }, (_, index) => `Column ${index + 1}`)}
      itemClassName="p-3"
      renderItem={(item) => (
        <div className="flex h-full items-center justify-center rounded-md border border-border/70 bg-muted/40 px-4 text-sm font-medium shadow-sm">
          {item}
        </div>
      )}
    />
  )
};
