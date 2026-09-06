import type { Meta, StoryObj } from "@storybook/react";
import { Eye, Mail, Search, Send, SlidersHorizontal } from "lucide-react";
import { Input, InputGroup, InputGroupAddon, InputGroupButton, Select } from "@kivora/nextjs";
import type { SelectOption } from "@kivora/nextjs";
import * as React from "react";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  args: {
    size: "default",
    invalid: false
  },
  argTypes: {
    invalid: { control: "boolean" },
    size: { control: "radio", options: ["sm", "default", "lg"] }
  }
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const phonePrefixOptions: SelectOption[] = [
  { label: "ES +34", value: "+34", description: "Espana" },
  { label: "US +1", value: "+1", description: "United States" },
  { label: "UK +44", value: "+44", description: "United Kingdom" },
  { label: "FR +33", value: "+33", description: "France" }
];

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args} className="max-w-sm">
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
      <Input aria-label="Email" placeholder="correo@kivora.dev" size={args.size} />
    </InputGroup>
  )
};

export const PrefixAndSuffix: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>https://</InputGroupAddon>
      <Input aria-label="Workspace domain" placeholder="workspace" />
      <InputGroupAddon side="right">.kivora.dev</InputGroupAddon>
    </InputGroup>
  )
};

export const SearchBar: Story = {
  render: () => (
    <InputGroup className="max-w-xl">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <Input aria-label="Search" placeholder="Search records..." type="search" />
      <InputGroupButton aria-label="Filters">
        <SlidersHorizontal />
      </InputGroupButton>
    </InputGroup>
  )
};

export const PhonePrefix: Story = {
  render: () => {
    const [prefix, setPrefix] = React.useState<SelectOption | null>(phonePrefixOptions[0]!);
    const menuPortalTarget = typeof document === "undefined" ? undefined : document.body;

    return (
      <div className="grid w-full max-w-sm gap-2">
        <InputGroup>
          <div className="w-32 shrink-0 border-r border-border/70">
            <Select
              aria-label="Phone prefix"
              classNames={{
                dropdownIndicator: () => "pr-2",
                menu: () => "w-56",
                valueContainer: () => "pl-3"
              }}
              menuPortalTarget={menuPortalTarget}
              menuPosition="fixed"
              mobileSheetTitle="Selecciona prefijo"
              options={phonePrefixOptions}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 60 }) }}
              triggerClassName="h-full min-h-0 rounded-none border-0 bg-transparent px-0 shadow-none focus-within:ring-0"
              value={prefix}
              onChange={(option) => setPrefix(option as SelectOption | null)}
            />
          </div>
          <Input
            aria-label="Phone number"
            inputMode="numeric"
            mask="000 000 000"
            placeholder="600 000 000"
          />
        </InputGroup>
        <p className="text-xs text-muted-foreground">
          Valor final: {prefix?.value ?? ""} 600 000 000
        </p>
      </div>
    );
  }
};

export const WithAction: Story = {
  render: () => (
    <InputGroup className="max-w-md">
      <Input aria-label="Invite email" placeholder="teammate@company.com" type="email" />
      <InputGroupButton>
        <Send />
        Invite
      </InputGroupButton>
    </InputGroup>
  )
};

export const Password: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <Input aria-label="Password" placeholder="Password" type="password" />
      <InputGroupButton aria-label="Show password">
        <Eye />
      </InputGroupButton>
    </InputGroup>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      {(["sm", "default", "lg"] as const).map((size) => (
        <InputGroup key={size} size={size}>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <Input aria-label={`${size} search`} placeholder={`${size} search`} size={size} />
        </InputGroup>
      ))}
    </div>
  )
};
