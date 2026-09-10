import type { Meta, StoryObj } from "@storybook/react";
import { Animation, AnimatedText, AnimatedPath, AnimatedLoader } from "@kivora/nextjs";
import { AnimationPreview } from "../components/animation-preview";

const meta: Meta<typeof Animation> = {
  title: "Components/Animation",
  component: Animation,
  tags: ["autodocs"],
  args: { preset: "fade-up", duration: 600, delay: 0, disabled: false },
  argTypes: {
    preset: { control: "select", options: ["fade", "fade-up", "fade-down", "scale"] },
    duration: { control: { type: "range", min: 100, max: 2000, step: 50 } },
  },
  decorators: [(Story, context) => (
    <AnimationPreview settings={JSON.stringify(context.args)}><Story /></AnimationPreview>
  )],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Elements: Story = {
  args: { children: <div className="rounded-xl bg-primary p-8 text-primary-foreground"><strong>Una tarjeta en movimiento</strong><p>Fade, desplazamiento y escala.</p></div> },
};
export const Scale: Story = { args: { ...Elements.args, preset: "scale" } };
export const Fade: Story = { args: { ...Elements.args, preset: "fade" } };
export const FromAbove: Story = { args: { ...Elements.args, preset: "fade-down" } };
export const Text: Story = {
  parameters: { docs: { description: { story: "Más ejemplos en Animations → Text: letras, palabras, párrafos y títulos compuestos." } } },
  render: args => <AnimatedText {...args} className="text-4xl font-semibold" split="characters">Ideas en movimiento</AnimatedText>,
};
export const Vector: Story = {
  render: args => <AnimatedPath {...args} size={96} d="M5 12 L10 17 L20 7" label="Completado" />,
};
export const Wave: Story = {
  render: args => <AnimatedPath {...args} size={160} viewBox="0 0 100 50" d="M5 25 Q20 0 35 25 T65 25 T95 25" label="Onda" />,
};
export const Loaders: Story = {
  render: args => <><AnimatedLoader duration={args.duration} disabled={args.disabled} size={12} /><AnimatedLoader duration={args.duration} variant="bars" disabled={args.disabled} size={12} /></>,
};
