import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@kivora/nextjs";
import * as React from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    "aria-label": "Email",
    placeholder: "correo@kivora.dev"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"]
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "number"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: "correo-sin-arroba"
  }
};
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "No editable"
  }
};

export const PhoneMask: Story = {
  args: {
    "aria-label": "Telefono",
    mask: "+34 000 000 000",
    placeholder: "+34 600 000 000"
  }
};

export const CardMask: Story = {
  args: {
    "aria-label": "Tarjeta",
    inputMode: "numeric",
    mask: "0000 0000 0000 0000",
    placeholder: "4242 4242 4242 4242"
  }
};

export const DateMask: Story = {
  args: {
    "aria-label": "Fecha",
    inputMode: "numeric",
    lazy: false,
    mask: "00/00/0000",
    placeholderChar: "_"
  }
};

export const CustomPattern: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div className="grid w-80 gap-2">
        <Input
          aria-label="Codigo de proyecto"
          definitions={{
            A: /[A-Z]/,
            0: /[0-9]/
          }}
          mask="AAA-0000"
          placeholder="KIV-0001"
          unmask
          onAccept={(nextValue) => setValue(nextValue)}
        />
        <p className="text-xs text-muted-foreground">Valor sin mascara: {value || "Sin valor"}</p>
      </div>
    );
  }
};
