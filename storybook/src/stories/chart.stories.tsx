import type { Meta, StoryObj } from "@storybook/react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@kivora/nextjs";

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj;

export const BarComparison: Story = {
  render: () => (
    <ChartContainer
      className="h-72 w-[620px]"
      config={{
        desktop: { color: "#2563eb", label: "Desktop" },
        mobile: { color: "#16a34a", label: "Mobile" }
      }}
    >
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
};
