import type { Meta, StoryObj } from "@storybook/react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, List, Redo2, Underline, Undo2 } from "lucide-react";
import { Button, ButtonGroup } from "@kivora/nextjs";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: {
    attached: true,
    orientation: "horizontal"
  },
  argTypes: {
    attached: { control: "boolean" },
    orientation: { control: "radio", options: ["horizontal", "vertical"] }
  }
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Text formatting">
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
  )
};

export const IconToolbar: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonGroup aria-label="History">
        <Button variant="outline" size="icon" aria-label="Undo">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Redo">
          <Redo2 className="h-4 w-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Formatting">
        <Button variant="outline" size="icon" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </Button>
      </ButtonGroup>
    </div>
  )
};

export const SegmentedControl: Story = {
  render: () => (
    <ButtonGroup aria-label="Alignment">
      <Button variant="secondary" size="icon" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  )
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" aria-label="View options">
      <Button variant="outline">
        <List className="h-4 w-4" />
        List
      </Button>
      <Button variant="outline">
        <AlignLeft className="h-4 w-4" />
        Details
      </Button>
      <Button variant="outline">
        <AlignCenter className="h-4 w-4" />
        Compact
      </Button>
    </ButtonGroup>
  )
};

export const Detached: Story = {
  render: () => (
    <ButtonGroup attached={false} aria-label="Document actions">
      <Button variant="outline">Preview</Button>
      <Button>Publish</Button>
    </ButtonGroup>
  )
};
