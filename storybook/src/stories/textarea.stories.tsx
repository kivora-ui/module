import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@kivora/nextjs";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    "aria-label": "Message",
    placeholder: "Describe tu idea..."
  },
  argTypes: {
    autoResize: {
      control: "boolean"
    },
    autoResizeDirection: {
      control: "select",
      options: ["down", "up"]
    },
    maxRows: {
      control: { type: "number", min: 2, max: 12 }
    },
    minRows: {
      control: { type: "number", min: 1, max: 8 }
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"]
    },
    showCount: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const WithValue: Story = {
  args: {
    defaultValue: "Kivora necesita una descripcion clara, breve y facil de revisar."
  }
};
export const WithCounter: Story = {
  args: {
    defaultValue: "Describe una mejora del componente.",
    showCount: true
  }
};
export const WithLimit: Story = {
  args: {
    defaultValue: "Texto con limite",
    maxLength: 120,
    showCount: true
  }
};
export const AutoResize: Story = {
  args: {
    autoResize: true,
    autoResizeDirection: "down",
    maxRows: 5,
    minRows: 1,
    placeholder: "Escribe una respuesta...",
    showCount: true
  }
};
export const ChatComposer: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-lg border border-border/70 bg-card p-3 shadow-sm">
      <Textarea
        aria-label="Message"
        autoResize
        autoResizeDirection="up"
        maxLength={280}
        maxRows={5}
        minRows={1}
        placeholder="Escribe un mensaje..."
        showCount
      />
    </div>
  )
};
export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: "Demasiado corto"
  }
};
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "No editable"
  }
};
