import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@kivora/nextjs";
import type { SheetSide } from "@kivora/nextjs";

interface SheetStoryArgs {
  side: SheetSide;
}

const meta: Meta<SheetStoryArgs> = {
  title: "Components/Sheet",
  args: {
    side: "right"
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"]
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
type Story = StoryObj<SheetStoryArgs>;

export const Default: Story = {
  render: ({ side }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Update the public details connected to your workspace.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Marta Ruiz" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-handle">Handle</Label>
            <Input id="sheet-handle" defaultValue="@marta" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
};

export const Navigation: Story = {
  render: ({ side }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open navigation</Button>
      </SheetTrigger>
      <SheetContent side={side} className="w-80">
        <SheetHeader>
          <SheetTitle>Workspace</SheetTitle>
          <SheetDescription>Move between the main product areas.</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-1 py-2">
          {["Overview", "Projects", "Members", "Billing", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
};

export const MobileBottomSheet: Story = {
  args: {
    side: "bottom"
  },
  render: ({ side }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Show options</Button>
      </SheetTrigger>
      <SheetContent side={side} className="rounded-t-xl pb-8">
        <div className="mx-auto h-1 w-10 rounded-full bg-muted-foreground/30" />
        <SheetHeader>
          <SheetTitle>Export report</SheetTitle>
          <SheetDescription>Select the format for the downloaded file.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 py-2">
          {["PDF document", "CSV spreadsheet", "JSON payload"].map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-md border border-border/70 px-4 py-3 text-left text-sm font-medium hover:bg-accent"
            >
              {item}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
};

