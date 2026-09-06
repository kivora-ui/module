import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar, type DateRange } from "@kivora/nextjs";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  decorators: [
    (Story) => (
      <div className="flex min-h-96 items-center justify-center p-8">
        <div className="rounded-md border border-border/70 bg-background shadow-sm">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Single: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 8, 4));

    return (
      <Calendar
        mode="single"
        month={new Date(2026, 8, 1)}
        selected={date}
        onSelect={setDate}
      />
    );
  }
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2026, 8, 8),
      to: new Date(2026, 8, 12)
    });

    return (
      <Calendar
        mode="range"
        month={new Date(2026, 8, 1)}
        selected={range}
        onSelect={setRange}
      />
    );
  }
};

export const MultipleMonths: Story = {
  render: () => (
    <Calendar
      mode="range"
      month={new Date(2026, 8, 1)}
      numberOfMonths={2}
      selected={{ from: new Date(2026, 8, 18), to: new Date(2026, 9, 6) }}
      className="max-w-full"
    />
  )
};

export const DisabledDates: Story = {
  render: () => (
    <Calendar
      mode="single"
      month={new Date(2026, 8, 1)}
      selected={new Date(2026, 8, 15)}
      disabled={[{ before: new Date(2026, 8, 8) }, { dayOfWeek: [0, 6] }]}
    />
  )
};
