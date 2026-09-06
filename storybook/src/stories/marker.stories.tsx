import type { Meta, StoryObj } from "@storybook/react";
import { BookOpenCheck, GitBranch, RotateCcw, Search, Sparkles } from "lucide-react";
import { Button, Marker, MarkerContent, MarkerIcon, Spinner } from "@kivora/nextjs";

const meta: Meta<typeof Marker> = {
  title: "Components/Marker",
  component: Marker,
  args: {
    variant: "default"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "border", "separator"]
    }
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-center justify-center p-8">
        <div className="w-[34rem] max-w-full space-y-4">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Marker>;

export const Default: Story = {
  render: (args) => (
    <Marker {...args}>
      <MarkerIcon>
        <GitBranch />
      </MarkerIcon>
      <MarkerContent>Switched to release-candidate</MarkerContent>
    </Marker>
  )
};

export const Status: Story = {
  render: () => (
    <Marker role="status">
      <MarkerIcon>
        <Spinner size="sm" />
      </MarkerIcon>
      <MarkerContent>Running tests</MarkerContent>
    </Marker>
  )
};

export const Separator: Story = {
  render: () => (
    <div className="space-y-3">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <Sparkles />
        </MarkerIcon>
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
    </div>
  )
};

export const BorderRows: Story = {
  render: () => (
    <div className="rounded-md border border-border/70 bg-background px-4 shadow-sm">
      <Marker variant="border">
        <MarkerIcon>
          <GitBranch />
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <Search />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
      <Marker variant="border" className="border-b-0">
        <MarkerIcon>
          <BookOpenCheck />
        </MarkerIcon>
        <MarkerContent>Opened implementation notes</MarkerContent>
      </Marker>
    </div>
  )
};

export const LinkAndButton: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Marker asChild className="w-auto">
        <a href="#pull-request">
          <MarkerContent>View the pull request</MarkerContent>
        </a>
      </Marker>
      <Button variant="outline">
        <RotateCcw className="h-4 w-4" />
        Revert this change
      </Button>
    </div>
  )
};
