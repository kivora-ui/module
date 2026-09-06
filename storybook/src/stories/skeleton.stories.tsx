import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@kivora/nextjs";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    animate: {
      control: "boolean"
    }
  },
  args: {
    animate: true
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} className="h-5 w-48" />
};

export const Profile: Story = {
  render: (args) => (
    <div className="flex w-80 items-center gap-4">
      <Skeleton {...args} className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton {...args} className="h-4 w-3/4" />
        <Skeleton {...args} className="h-4 w-1/2" />
      </div>
    </div>
  )
};

export const Card: Story = {
  render: (args) => (
    <div className="w-80 space-y-4 rounded-md border border-border p-4">
      <Skeleton {...args} className="h-40 w-full" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-4 w-4/5" />
        <Skeleton {...args} className="h-4 w-full" />
        <Skeleton {...args} className="h-4 w-2/3" />
      </div>
    </div>
  )
};

export const Table: Story = {
  render: (args) => (
    <div className="w-[32rem] max-w-full space-y-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="grid grid-cols-[1fr_6rem_5rem] gap-3">
          <Skeleton {...args} className="h-4" />
          <Skeleton {...args} className="h-4" />
          <Skeleton {...args} className="h-4" />
        </div>
      ))}
    </div>
  )
};
