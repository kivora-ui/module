import type { Meta, StoryObj } from "@storybook/react";
import { Questionnaire } from "@kivora/nextjs";

const meta: Meta<typeof Questionnaire> = {
  title: "Components/Questionnaire",
  component: Questionnaire,
  decorators: [
    (Story) => (
      <div className="flex w-[640px] max-w-full justify-center">
        <Story />
      </div>
    )
  ],
  parameters: { layout: "centered" },
  args: {
    questions: [
      {
        id: "next",
        title: "What should the agent build next?",
        description: "Choose a direction or describe another task.",
        options: [
          { label: "Tool call timeline", value: "timeline", description: "Show what the agent ran and what came back." },
          { label: "Approval checkpoints", value: "approval", description: "Ask before sensitive or destructive actions." },
          { label: "Sub-agent handoffs", value: "handoffs", description: "Make delegated work and results easier to follow." }
        ]
      },
      {
        id: "channels",
        title: "Which channels matter?",
        type: "multiple",
        options: [
          { label: "Storybook", value: "storybook" },
          { label: "Unit tests", value: "tests" },
          { label: "Documentation", value: "docs" }
        ]
      },
      {
        id: "notes",
        title: "Anything else?",
        type: "freeform",
        optional: true,
        placeholder: "Add extra direction..."
      }
    ]
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
