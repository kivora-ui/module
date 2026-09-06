import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@kivora/nextjs";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Usuario" />
      <AvatarFallback>KV</AvatarFallback>
    </Avatar>
  )
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>KV</AvatarFallback>
    </Avatar>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  )
};
