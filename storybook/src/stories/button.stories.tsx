import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@kivora/nextjs";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Disabled: Story = { args: { disabled: true } };
