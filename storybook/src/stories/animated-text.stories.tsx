import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedText } from "@kivora/nextjs";
import { AnimationPreview } from "../components/animation-preview";

const meta = {
  title: "Animations/Text",
  component: AnimatedText,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Texto animado por letras o palabras. Cambia el texto, el efecto y los tiempos en Controls. Usa Repetir animación para volver a ver la entrada." } },
  },
  args: {
    children: "Ideas en movimiento",
    split: "characters",
    preset: "fade-up",
    duration: 500,
    stagger: 65,
    delay: 0,
    disabled: false,
    className: "text-4xl font-semibold tracking-tight",
  },
  argTypes: {
    children: { control: "text", description: "Texto que se anima." },
    split: { control: "inline-radio", options: ["characters", "words"] },
    preset: { control: "select", options: ["fade", "fade-up", "fade-down", "scale"] },
    duration: { control: { type: "range", min: 100, max: 2000, step: 50 } },
    stagger: { control: { type: "range", min: 0, max: 500, step: 10 } },
    delay: { control: { type: "range", min: 0, max: 2000, step: 100 } },
    disabled: { control: "boolean" },
  },
  render: args => (
    <AnimationPreview settings={JSON.stringify(args)}>
      <AnimatedText {...args} />
    </AnimationPreview>
  ),
} satisfies Meta<typeof AnimatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LettersUp: Story = { name: "Letras · desde abajo" };
export const LettersDown: Story = {
  name: "Letras · desde arriba",
  args: { children: "Todo empieza aquí", preset: "fade-down" },
};
export const LettersFade: Story = {
  name: "Letras · aparición progresiva",
  args: { children: "Poco a poco, cobra vida", preset: "fade" },
};
export const LettersScale: Story = {
  name: "Letras · escala",
  args: { children: "Hazlo extraordinario", preset: "scale" },
};
export const WordsUp: Story = {
  name: "Palabras · desde abajo",
  args: { children: "Convierte tus ideas en experiencias", split: "words", stagger: 150 },
};
export const WordsDown: Story = {
  name: "Palabras · desde arriba",
  args: { children: "Una nueva forma de crear", split: "words", preset: "fade-down", stagger: 150 },
};
export const WordsFade: Story = {
  name: "Palabras · aparición progresiva",
  args: { children: "Diseña. Construye. Comparte.", split: "words", preset: "fade", stagger: 200 },
};
export const WordsScale: Story = {
  name: "Palabras · escala",
  args: { children: "Pequeños detalles. Grandes experiencias.", split: "words", preset: "scale", stagger: 150 },
};
export const Paragraph: Story = {
  name: "Párrafo en varias líneas",
  args: {
    children: "Cada detalle cuenta.\nDale movimiento a tus ideas con entradas suaves, palabra a palabra.",
    split: "words",
    stagger: 80,
    className: "text-xl leading-relaxed",
  },
};
export const Hero: Story = {
  name: "Composición · título y subtítulo",
  render: args => (
    <AnimationPreview settings={JSON.stringify(args)}>
      <div className="grid gap-5 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Kivora Motion</p>
        <h1><AnimatedText {...args} /></h1>
        <p className="text-lg text-muted-foreground">
          <AnimatedText split="words" preset="fade" delay={1200} stagger={100} disabled={args.disabled}>
            Una misma idea. En tu web y en tu app.
          </AnimatedText>
        </p>
      </div>
    </AnimationPreview>
  ),
};
export const Static: Story = {
  name: "Movimiento desactivado",
  args: { disabled: true, children: "El contenido sigue siendo legible" },
};
