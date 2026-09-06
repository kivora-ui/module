import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Kbd
} from "@kivora/nextjs";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Kivora launch</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  )
};

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Campaigns</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Q4 acquisition</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  )
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  )
};

export const LongPath: Story = {
  render: () => (
    <div className="w-72 rounded-md border border-border/70 p-4 sm:w-[34rem]">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Organization</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Customer Success</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Enterprise onboarding</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>North America pilot accounts</BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
};

export const InToolbar: Story = {
  render: () => (
    <div className="flex w-[40rem] max-w-full items-center justify-between gap-4 rounded-md border border-border/70 px-4 py-3">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Files</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Design system</BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
        <Kbd size="sm">⌘</Kbd>
        <Kbd size="sm">K</Kbd>
      </div>
    </div>
  )
};
