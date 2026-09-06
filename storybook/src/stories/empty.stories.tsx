import type { Meta, StoryObj } from "@storybook/react";
import { FileSearch, FolderPlus, Inbox, SearchX } from "lucide-react";
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyFooter,
  EmptyHeader,
  EmptyIcon,
  EmptyTitle,
  Input
} from "@kivora/nextjs";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyIcon>
          <Inbox />
        </EmptyIcon>
        <EmptyTitle>No messages yet</EmptyTitle>
        <EmptyDescription>When a customer replies, the conversation will appear here.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
};

export const WithAction: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyIcon>
          <FolderPlus />
        </EmptyIcon>
        <EmptyTitle>Create your first project</EmptyTitle>
        <EmptyDescription>Projects help you group clients, files, and activity in one place.</EmptyDescription>
      </EmptyHeader>
      <EmptyFooter>
        <Button>New project</Button>
        <Button variant="outline">Import</Button>
      </EmptyFooter>
    </Empty>
  )
};

export const SearchResults: Story = {
  render: () => (
    <Empty size="sm" className="max-w-xl">
      <EmptyHeader>
        <EmptyIcon className="h-10 w-10 [&>svg]:h-5 [&>svg]:w-5">
          <SearchX />
        </EmptyIcon>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Adjust your filters or search for a different customer.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Input placeholder="Search customers..." />
      </EmptyContent>
    </Empty>
  )
};

export const InlineTableState: Story = {
  render: () => (
    <div className="w-[48rem] max-w-full overflow-hidden rounded-md border border-border/70">
      <div className="grid grid-cols-3 border-b border-border/70 bg-muted/50 px-4 py-3 text-sm font-medium">
        <span>Name</span>
        <span>Status</span>
        <span>Updated</span>
      </div>
      <Empty size="sm" className="rounded-none border-0 border-dashed">
        <EmptyHeader>
          <EmptyIcon className="h-10 w-10 [&>svg]:h-5 [&>svg]:w-5">
            <FileSearch />
          </EmptyIcon>
          <EmptyTitle>No records</EmptyTitle>
          <EmptyDescription>There are no records matching the current view.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
};
