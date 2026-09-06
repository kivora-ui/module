import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, FileText, Search, Settings, User } from "lucide-react";
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@kivora/nextjs";

const meta = {
  title: "Components/Command",
  component: Command,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

function CommandMenuContent() {
  return (
    <>
      <CommandInput placeholder="Search pages, actions or settings..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem value="calendar">
            <Calendar className="h-4 w-4" />
            Calendar
          </CommandItem>
          <CommandItem value="documents">
            <FileText className="h-4 w-4" />
            Documents
            <CommandShortcut>Cmd+D</CommandShortcut>
          </CommandItem>
          <CommandItem value="profile">
            <User className="h-4 w-4" />
            Profile
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="System">
          <CommandItem value="settings">
            <Settings className="h-4 w-4" />
            Settings
            <CommandShortcut>Cmd+,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  );
}

export const Default: Story = {
  render: () => (
    <Command className="w-[420px] rounded-lg border border-border/70 shadow-sm">
      <CommandMenuContent />
    </Command>
  )
};

export const Dialog: Story = {
  render: () => (
    <CommandDialog
      trigger={
        <Button variant="outline">
          <Search className="h-4 w-4" />
          Open command
          <CommandShortcut className="ml-2">Ctrl/Cmd K</CommandShortcut>
        </Button>
      }
    >
      <CommandMenuContent />
    </CommandDialog>
  )
};
