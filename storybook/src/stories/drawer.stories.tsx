import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Field,
  FieldContent,
  FieldLabel,
  Input,
  Select
} from "@kivora/nextjs";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-center justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit workspace</DrawerTitle>
          <DrawerDescription>Update the workspace name and billing plan.</DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4">
          <Field>
            <FieldLabel htmlFor="drawer-name">Name</FieldLabel>
            <FieldContent>
              <Input id="drawer-name" defaultValue="Kivora Studio" />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel htmlFor="drawer-plan">Plan</FieldLabel>
            <FieldContent>
              <Select
                inputId="drawer-plan"
                defaultValue={{ label: "Team", value: "team" }}
                options={[
                  { label: "Starter", value: "starter" },
                  { label: "Team", value: "team" },
                  { label: "Enterprise", value: "enterprise" }
                ]}
              />
            </FieldContent>
          </Field>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
};

export const WithoutHandle: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open compact drawer</Button>
      </DrawerTrigger>
      <DrawerContent showHandle={false}>
        <DrawerHeader>
          <DrawerTitle>Compact panel</DrawerTitle>
          <DrawerDescription>This drawer hides the drag handle affordance.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
};
