import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@kivora/nextjs";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    disabled: {
      control: "boolean"
    },
    max: {
      control: { type: "number", min: 1, step: 1 }
    },
    min: {
      control: { type: "number", step: 1 }
    },
    step: {
      control: { type: "number", min: 1, step: 1 }
    },
    showValue: {
      control: "boolean"
    }
  },
  args: {
    defaultValue: [48],
    disabled: false,
    max: 100,
    min: 0,
    showValue: true,
    step: 1
  }
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <div className="w-96 max-w-full space-y-3">
      <Slider {...args} aria-label="Volume" />
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  )
};

export const Range: Story = {
  render: () => (
    <div className="w-96 max-w-full space-y-3">
      <Slider
        aria-label="Price range"
        defaultValue={[24, 72]}
        formatValue={(value) => `${value} EUR`}
        min={0}
        max={100}
        showValue
        step={1}
      />
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Min</span>
        <span>Max</span>
      </div>
    </div>
  )
};

export const Steps: Story = {
  render: () => (
    <div className="w-96 max-w-full space-y-3">
      <Slider
        aria-label="Seats"
        defaultValue={[5]}
        formatValue={(value) => `${value} seats`}
        min={1}
        max={10}
        showValue
        step={1}
      />
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>1 seat</span>
        <span>10 seats</span>
      </div>
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div className="w-96 max-w-full">
      <Slider aria-label="Disabled volume" defaultValue={[64]} disabled showValue />
    </div>
  )
};

export const Custom: Story = {
  render: () => (
    <div className="w-96 max-w-full">
      <Slider
        aria-label="Risk"
        defaultValue={[78]}
        formatValue={(value) => `${value}%`}
        rangeClassName="bg-destructive"
        showValue
        thumbClassName="border-destructive"
        valueLabelClassName="border-destructive text-destructive"
      />
    </div>
  )
};
