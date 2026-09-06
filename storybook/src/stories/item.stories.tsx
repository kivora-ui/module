import type { Meta, StoryObj } from "@storybook/react";
import { BadgeCheck, Bell, ChevronRight, CreditCard, FolderKanban, MoreHorizontal, UserRound } from "lucide-react";
import {
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle
} from "@kivora/nextjs";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  args: {
    variant: "default"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline", "ghost"]
    }
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-center justify-center p-8">
        <div className="w-[34rem] max-w-full">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <BadgeCheck />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Profile verified</ItemTitle>
        <ItemDescription>Your public workspace profile is ready to share with clients.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          View
        </Button>
      </ItemActions>
    </Item>
  )
};

export const Grouped: Story = {
  render: () => (
    <ItemGroup>
      <Item className="rounded-b-none">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Weekly digest and workspace alerts are enabled.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Active</Badge>
        </ItemActions>
      </Item>
      <Item className="rounded-none">
        <ItemMedia variant="icon">
          <CreditCard />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Billing</ItemTitle>
          <ItemDescription>The Pro plan renews on October 12.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="Open billing" size="icon" variant="ghost">
            <ChevronRight />
          </Button>
        </ItemActions>
      </Item>
      <Item className="rounded-t-none">
        <ItemMedia variant="icon">
          <FolderKanban />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Projects</ItemTitle>
          <ItemDescription>Three client projects need review this week.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="Project actions" size="icon" variant="ghost">
            <MoreHorizontal />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Item variant="outline" className="flex-col">
      <ItemHeader className="w-full">
        <ItemMedia variant="avatar">
          <UserRound />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Marta Ruiz</ItemTitle>
          <ItemDescription>Owner at Acme Studio</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Invite</Button>
        </ItemActions>
      </ItemHeader>
      <ItemFooter>
        <span>Last active 4 minutes ago</span>
        <span>Madrid</span>
      </ItemFooter>
    </Item>
  )
};

export const LinkItems: Story = {
  render: () => (
    <ItemGroup>
      {["Account", "Security", "Members"].map((label, index) => (
        <Item key={label} asChild variant="ghost" className={index === 0 ? "rounded-b-none" : index === 2 ? "rounded-t-none" : "rounded-none"}>
          <a href={`#${label.toLowerCase()}`}>
            <ItemContent>
              <ItemTitle>{label}</ItemTitle>
              <ItemDescription>Manage {label.toLowerCase()} preferences.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </ItemActions>
          </a>
        </Item>
      ))}
    </ItemGroup>
  )
};
