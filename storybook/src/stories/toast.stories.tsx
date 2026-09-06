import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toaster, toast } from "@kivora/nextjs";

const meta = {
  title: "Components/Toast",
  component: Toaster,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toaster richColors closeButton />
      <Button variant="outline" onClick={() => toast("Workspace synced")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Deployment finished")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("A new version is available")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Storage almost full")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Payment failed")}>
        Error
      </Button>
    </div>
  )
};
