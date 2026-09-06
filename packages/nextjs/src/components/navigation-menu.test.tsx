// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "./navigation-menu";

describe("NavigationMenu", () => {
  it("renders menu trigger and content", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink href="/app">App</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
