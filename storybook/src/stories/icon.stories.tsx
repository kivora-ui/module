import type { Meta, StoryObj } from "@storybook/react";
import { Check, Heart, Search } from "lucide-react";
import { Button, Icon } from "@kivora/nextjs";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  args: { icon: Check, size: 24, label: "Completado" },
  argTypes: { icon: { control: false }, size: { control: "number" }, color: { control: "color" } }
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
export const Sizes: Story = {
  render: () => <div className="flex items-center gap-4">
    {[16, 24, 32, 48].map(size => <Icon key={size} icon={Heart} size={size} label={`Favorito ${size}`} />)}
  </div>
};
export const Styling: Story = {
  render: () => <div className="flex items-center gap-4">
    <Icon icon={Check} color="#16a34a" label="Completado" />
    <Icon icon={Heart} className="text-destructive" strokeWidth={3} label="Favorito" />
    <Icon icon={Search} className="text-primary" strokeWidth={1} label="Buscar" />
  </div>
};
export const InButton: Story = {
  render: () => <Button><Icon icon={Search} size={16} />Buscar</Button>
};
