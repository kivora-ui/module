import type { Meta, StoryObj } from "@storybook/react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Grid2X2, Italic, List, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@kivora/nextjs";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  args: {
    type: "single",
    attached: true,
    orientation: "horizontal"
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"]
    },
    attached: {
      control: "boolean"
    }
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-center justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  render: ({ attached, orientation }) => (
    <ToggleGroup
      type="single"
      defaultValue="center"
      attached={attached}
      orientation={orientation}
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" size="icon" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" size="icon" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" size="icon" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
};

export const Multiple: Story = {
  render: ({ attached, orientation }) => (
    <ToggleGroup
      type="multiple"
      defaultValue={["bold"]}
      attached={attached}
      orientation={orientation}
      aria-label="Text formatting"
    >
      <ToggleGroupItem value="bold" size="icon" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" size="icon" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" size="icon" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
};

export const ViewSwitcher: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="grid" aria-label="View mode">
      <ToggleGroupItem value="list">
        <List className="h-4 w-4" />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Grid2X2 className="h-4 w-4" />
        Grid
      </ToggleGroupItem>
    </ToggleGroup>
  )
};

export const Detached: Story = {
  render: () => (
    <ToggleGroup type="single" attached={false} defaultValue="week" aria-label="Calendar range">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  )
};

