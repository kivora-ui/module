import type { Meta, StoryObj } from "@storybook/react";
import { Label, RadioGroup, RadioGroupItem } from "@kivora/nextjs";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {
    defaultValue: "team"
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const plans = [
  { label: "Personal", value: "personal", description: "Para proyectos individuales" },
  { label: "Team", value: "team", description: "Para colaborar con tu equipo" },
  { label: "Enterprise", value: "enterprise", description: "Controles avanzados y soporte" }
];

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Plan" className="w-80">
      {plans.map((plan) => (
        <div key={plan.value} className="flex items-start gap-3 rounded-md p-2">
          <RadioGroupItem id={plan.value} value={plan.value} />
          <div className="grid gap-1 leading-none">
            <Label htmlFor={plan.value}>{plan.label}</Label>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Billing cycle" className="flex gap-4">
      {["monthly", "yearly"].map((value) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem id={value} value={value} />
          <Label htmlFor={value}>{value === "monthly" ? "Monthly" : "Yearly"}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
  args: {
    defaultValue: "monthly"
  }
};

export const Invalid: Story = {
  render: () => (
    <RadioGroup aria-label="Plan" className="w-80">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="invalid-plan" invalid value="team" />
        <Label htmlFor="invalid-plan">Team</Label>
      </div>
    </RadioGroup>
  )
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup aria-label="Plan" defaultValue="team" disabled className="w-80">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="disabled-plan" value="team" />
        <Label htmlFor="disabled-plan">Team</Label>
      </div>
    </RadioGroup>
  )
};
