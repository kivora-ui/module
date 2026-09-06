import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button, Spinner } from "@kivora/nextjs";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  args: {
    label: "Loading",
    size: "md",
    variant: "default"
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["default", "muted", "primary", "destructive"] }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args) => <Spinner {...args} />
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="default" />
      <Spinner variant="muted" />
      <Spinner variant="primary" />
      <Spinner variant="destructive" />
    </div>
  )
};

export const InButtons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner size="sm" />
        Saving
      </Button>
      <Button variant="secondary" disabled>
        <Spinner size="sm" variant="muted" />
        Syncing
      </Button>
      <Button variant="outline" size="icon" aria-label="Loading">
        <Spinner size="sm" />
      </Button>
    </div>
  )
};

export const LoadingState: Story = {
  render: () => (
    <div className="w-80 rounded-md border border-border/70 bg-background p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
          <LoaderCircle className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-medium">Importing records</div>
          <div className="text-sm text-muted-foreground">12 of 28 rows processed</div>
        </div>
        <Spinner size="sm" variant="primary" />
      </div>
    </div>
  )
};

export const CompletedState: Story = {
  render: () => (
    <div className="w-80 rounded-md border border-border/70 bg-background p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">Import complete</div>
          <div className="text-sm text-muted-foreground">28 rows are ready to review</div>
        </div>
      </div>
    </div>
  )
};
