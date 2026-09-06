import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from "@kivora/nextjs";
import type { DialogAnimation } from "@kivora/nextjs";

interface DialogStoryArgs {
  animation: DialogAnimation;
}

const meta: Meta<DialogStoryArgs> = {
  title: "Components/Dialog",
  args: {
    animation: "scale"
  },
  argTypes: {
    animation: {
      control: "select",
      options: ["scale", "slide-up", "slide-down", "fade"]
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
type Story = StoryObj<DialogStoryArgs>;

export const Default: Story = {
  render: ({ animation }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent animation={animation}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile details.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Marina Costa" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@marina" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};

export const Confirmation: Story = {
  render: ({ animation }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete project</Button>
      </DialogTrigger>
      <DialogContent animation={animation}>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. The project and its drafts will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
