import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@kivora/nextjs";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  args: {
    ratio: 16 / 9
  },
  argTypes: {
    ratio: {
      control: "select",
      options: [16 / 9, 4 / 3, 1, 3 / 4, 9 / 16],
      labels: {
        [16 / 9]: "16:9",
        [4 / 3]: "4:3",
        1: "1:1",
        [3 / 4]: "3:4",
        [9 / 16]: "9:16"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[38rem] max-w-full">
      <AspectRatio {...args} className="rounded-md border border-border/70 bg-muted">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
          alt="Modern architecture"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  )
};

export const Ratios: Story = {
  render: () => (
    <div className="grid w-[44rem] max-w-full gap-4 sm:grid-cols-2">
      {[
        ["16:9", 16 / 9],
        ["4:3", 4 / 3],
        ["1:1", 1],
        ["9:16", 9 / 16]
      ].map(([label, ratio]) => (
        <div key={label} className="space-y-2">
          <div className="text-sm font-medium">{label}</div>
          <AspectRatio ratio={ratio as number} className="rounded-md border border-border/70 bg-muted">
            <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
              {label}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  )
};

export const MediaCard: Story = {
  render: () => (
    <article className="w-80 overflow-hidden rounded-md border border-border/70 bg-card shadow-sm">
      <AspectRatio ratio={4 / 3} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
          alt="Workspace"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      <div className="space-y-1 p-4">
        <h3 className="font-medium leading-none">Workspace setup</h3>
        <p className="text-sm text-muted-foreground">A stable frame keeps media lists aligned.</p>
      </div>
    </article>
  )
};
