import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  Select,
  Textarea
} from "@kivora/nextjs";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  args: {
    orientation: "vertical"
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal", "responsive"]
    }
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-96 items-center justify-center p-8">
        <div className="w-[42rem] max-w-full">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <FieldContent>
        <Input id="name" placeholder="Marta Ruiz" />
        <FieldDescription>This is shown on invoices and workspace invites.</FieldDescription>
      </FieldContent>
    </Field>
  )
};

export const WithError: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" invalid defaultValue="correo-sin-arroba" aria-describedby="email-error" />
        <FieldError id="email-error">Enter a valid email address.</FieldError>
      </FieldContent>
    </Field>
  )
};

export const FormSection: Story = {
  render: () => (
    <FieldSet className="rounded-md border border-border/70 bg-background p-5 shadow-sm">
      <div>
        <FieldLegend>Workspace</FieldLegend>
        <FieldDescription>Configure how this workspace appears to your team.</FieldDescription>
      </div>
      <FieldSeparator />
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="workspace-name">Name</FieldLabel>
          <FieldContent>
            <Input id="workspace-name" defaultValue="Kivora Studio" />
          </FieldContent>
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="workspace-plan">Plan</FieldLabel>
          <FieldContent>
            <Select
              inputId="workspace-plan"
              options={[
                { label: "Starter", value: "starter" },
                { label: "Team", value: "team" },
                { label: "Enterprise", value: "enterprise" }
              ]}
              defaultValue={{ label: "Team", value: "team" }}
            />
            <FieldDescription>Billing limits update immediately after changing plans.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="workspace-notes">Notes</FieldLabel>
          <FieldContent>
            <Textarea id="workspace-notes" autoResize minRows={2} maxRows={5} showCount maxLength={180} />
          </FieldContent>
        </Field>
      </FieldGroup>
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </FieldSet>
  )
};

export const CheckboxField: Story = {
  render: () => (
    <Field className="grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
      <Checkbox id="updates" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="updates">Product updates</FieldLabel>
        <FieldDescription>Receive release notes and account recommendations by email.</FieldDescription>
      </FieldContent>
    </Field>
  )
};
