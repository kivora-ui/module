import type * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AsyncSelect, CreatableSelect, Label, Select } from "@kivora/nextjs";
import type { SelectOption } from "@kivora/nextjs";

const workspaceOptions: SelectOption[] = [
  { label: "Personal", value: "personal", description: "Private workspace" },
  { label: "Team", value: "team", description: "Shared with collaborators" },
  { label: "Enterprise", value: "enterprise", description: "Advanced permissions" }
];

const timezoneOptions = [
  {
    label: "Europe",
    options: [
      { label: "Madrid", value: "madrid" },
      { label: "London", value: "london" },
      { label: "Berlin", value: "berlin" }
    ]
  },
  {
    label: "Americas",
    options: [
      { label: "New York", value: "new-york" },
      { label: "Los Angeles", value: "los-angeles" },
      { label: "Mexico City", value: "mexico-city" }
    ]
  }
];

const memberOptions: SelectOption[] = [
  { label: "Ana Gomez", value: "ana", description: "Design lead" },
  { label: "Bruno Martin", value: "bruno", description: "Frontend" },
  { label: "Lucia Ramos", value: "lucia", description: "Product" },
  { label: "Mateo Silva", value: "mateo", description: "Backend" },
  { label: "Nora Vidal", value: "nora", description: "QA" }
];

const statusOptions: SelectOption[] = [
  { label: "Backlog", value: "backlog" },
  { label: "In progress", value: "in-progress" },
  { label: "Blocked", value: "blocked", isDisabled: true },
  { label: "Done", value: "done" }
];

const MultiSelectControl = Select as React.ComponentType<React.ComponentProps<typeof Select> & { isMulti: true }>;

const meta: Meta = {
  title: "Components/Select",
  decorators: [
    (Story) => (
      <div className="flex min-h-96 items-start justify-center p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="workspace">Workspace</Label>
      <Select inputId="workspace" options={workspaceOptions} defaultValue={workspaceOptions[1]} />
    </div>
  )
};

export const Searchable: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="assignee">Assignee</Label>
      <Select
        inputId="assignee"
        options={memberOptions}
        placeholder="Search members"
        isClearable
        noOptionsMessage={({ inputValue }) => `No members found for "${inputValue}"`}
      />
    </div>
  )
};

export const MultiSelect: Story = {
  render: () => (
    <div className="grid w-96 gap-2">
      <Label htmlFor="collaborators">Collaborators</Label>
      <MultiSelectControl
        inputId="collaborators"
        isMulti
        options={memberOptions}
        defaultValue={[memberOptions[0]!, memberOptions[2]!]}
        placeholder="Add collaborators"
      />
    </div>
  )
};

export const Grouped: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="timezone">Timezone</Label>
      <Select inputId="timezone" options={timezoneOptions} placeholder="Choose timezone" />
    </div>
  )
};

export const MobileBottomSheet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => (
    <div className="grid w-full max-w-80 gap-2">
      <Label htmlFor="mobile-workspace">Workspace</Label>
      <Select
        inputId="mobile-workspace"
        options={workspaceOptions}
        defaultValue={workspaceOptions[1]}
        mobileSheetTitle="Choose workspace"
      />
    </div>
  )
};

export const Creatable: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="tag">Tag</Label>
      <CreatableSelect
        inputId="tag"
        isClearable
        mobileSheetTitle="Choose tag"
        options={[
          { label: "Marketing", value: "marketing" },
          { label: "Product", value: "product" },
          { label: "Operations", value: "operations" }
        ]}
        placeholder="Create or choose a tag"
      />
    </div>
  )
};

export const AsyncLoading: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="repository">Repository</Label>
      <AsyncSelect
        inputId="repository"
        cacheOptions
        defaultOptions
        mobileSheetTitle="Choose repository"
        loadOptions={(inputValue) =>
          new Promise<SelectOption[]>((resolve) => {
            window.setTimeout(() => {
              resolve(
                [
                  { label: "kivora-web", value: "kivora-web" },
                  { label: "kivora-api", value: "kivora-api" },
                  { label: "design-system", value: "design-system" },
                  { label: "mobile-app", value: "mobile-app" }
                ].filter((option) =>
                  option.label.toLowerCase().includes(inputValue.toLowerCase())
                )
              );
            }, 500);
          })
        }
        placeholder="Search repositories"
      />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-6">
      <div className="grid gap-2">
        <Label htmlFor="clearable-status">Clearable</Label>
        <Select
          inputId="clearable-status"
          isClearable
          options={statusOptions}
          defaultValue={statusOptions[1]}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="disabled-status">Disabled</Label>
        <Select
          inputId="disabled-status"
          isDisabled
          options={statusOptions}
          value={statusOptions[1]}
        />
      </div>
    </div>
  )
};

export const PortalMenu: Story = {
  render: () => (
    <div className="grid h-40 w-80 content-start gap-2 overflow-hidden rounded-md border border-border/70 p-4">
      <Label htmlFor="portal-select">Portal menu</Label>
      <Select
        inputId="portal-select"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        options={memberOptions}
        placeholder="Open outside clipping"
      />
    </div>
  )
};
