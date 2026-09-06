import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, type DatePickerProps, type DatePickerValue } from "@kivora/nextjs";
import { es } from "date-fns/locale";
import * as React from "react";

const meta = {
  title: "Components/Date Picker",
  component: DatePicker,
  parameters: { layout: "centered" },
  args: {
    placeholder: "Select date"
  },
  argTypes: {
    localeCode: {
      control: "select",
      options: ["en", "es", "fr", "de"]
    },
    mode: {
      control: "select",
      options: ["single", "range", "month", "year"]
    },
    startView: {
      control: "select",
      options: ["calendar", "month", "year"]
    }
  }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDatePicker({ value, ...props }: DatePickerProps) {
  const [selectedValue, setSelectedValue] = React.useState<DatePickerValue>(value);

  return <DatePicker {...props} value={selectedValue} onValueChange={setSelectedValue} />;
}

export const Default: Story = {};

export const Selected: Story = {
  args: {
    value: new Date(2026, 0, 20)
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const RangeWithPresets: Story = {
  args: {
    mode: "range",
    value: { from: new Date(2026, 7, 12), to: new Date(2026, 7, 19) }
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const RangeTwoMonths: Story = {
  args: {
    mode: "range",
    numberOfMonths: 2,
    showPresets: false,
    value: { from: new Date(2026, 7, 12), to: new Date(2026, 7, 19) }
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const WithTime: Story = {
  args: {
    value: new Date(2026, 7, 12, 10, 0),
    withTime: true
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const MonthPicker: Story = {
  args: {
    mode: "month",
    value: new Date(2026, 0, 1)
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const YearPicker: Story = {
  args: {
    mode: "year",
    value: new Date(2026, 0, 1)
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const SelectMonthBeforeDate: Story = {
  args: {
    startView: "month"
  }
};

export const SelectYearBeforeRange: Story = {
  args: {
    mode: "range",
    startView: "year",
    value: { from: new Date(2026, 7, 12), to: new Date(2026, 7, 19) }
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const Spanish: Story = {
  args: {
    locale: es,
    localeCode: "es",
    mode: "range",
    value: { from: new Date(2026, 7, 12), to: new Date(2026, 7, 19) }
  },
  render: (args) => <InteractiveDatePicker {...args} />
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
