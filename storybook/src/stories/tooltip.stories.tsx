import type { Meta, StoryObj } from "@storybook/react";
import { Archive, Bell, HelpCircle, Info, Save, Trash2 } from "lucide-react";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@kivora/nextjs";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={100}>
        <div className="flex min-h-64 items-center justify-center p-8">
          <Story />
        </div>
      </TooltipProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

type PlaygroundStory = StoryObj<{
  showArrow: boolean;
  side: "top" | "right" | "bottom" | "left";
  size: "sm" | "md" | "lg";
  variant: "default" | "secondary" | "destructive";
}>;

export const Default: PlaygroundStory = {
  args: {
    showArrow: true,
    side: "top",
    size: "md",
    variant: "default"
  },
  argTypes: {
    showArrow: { control: "boolean" },
    side: { control: "radio", options: ["top", "right", "bottom", "left"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["default", "secondary", "destructive"] }
  },
  render: ({ showArrow, side, size, variant }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
          Hover me
        </Button>
      </TooltipTrigger>
      <TooltipContent showArrow={showArrow} side={side} size={size} variant={variant}>
        Helpful context for this action
      </TooltipContent>
    </Tooltip>
  )
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 items-center gap-3">
      <span />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Top">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow side="top">Top aligned</TooltipContent>
      </Tooltip>
      <span />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Left">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow side="left">Left aligned</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Center">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow>Default placement</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Right">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow side="right">Right aligned</TooltipContent>
      </Tooltip>
      <span />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Bottom">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow side="bottom">Bottom aligned</TooltipContent>
      </Tooltip>
      <span />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>
            <Save className="h-4 w-4" aria-hidden="true" />
            Save
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow>Save without publishing</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">
            <Archive className="h-4 w-4" aria-hidden="true" />
            Archive
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow variant="secondary">Move to archived items</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Delete
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow variant="destructive">Permanent action</TooltipContent>
      </Tooltip>
    </div>
  )
};

export const IconActions: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-md border border-border/70 bg-background p-1">
      {[
        { icon: Save, label: "Save draft" },
        { icon: Archive, label: "Archive item" },
        { icon: Bell, label: "Notify team" },
        { icon: Trash2, label: "Delete item", destructive: true }
      ].map((item) => (
        <Tooltip key={item.label}>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost" aria-label={item.label}>
              <item.icon className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent showArrow variant={item.destructive ? "destructive" : "secondary"}>
            {item.label}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
};
