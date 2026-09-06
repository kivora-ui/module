import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@kivora/nextjs";

const meta = {
  title: "Components/Navigation Menu",
  component: NavigationMenu,
  parameters: { layout: "centered" }
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[420px] gap-2 p-4 md:grid-cols-2">
              <NavigationMenuLink className="rounded-md p-3 text-sm hover:bg-accent" href="#">
                <div className="font-medium">Dashboard</div>
                <p className="mt-1 text-muted-foreground">Operational metrics and workflows.</p>
              </NavigationMenuLink>
              <NavigationMenuLink className="rounded-md p-3 text-sm hover:bg-accent" href="#">
                <div className="font-medium">Automations</div>
                <p className="mt-1 text-muted-foreground">Recurring actions and alerts.</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="inline-flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-accent" href="#">
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
};
