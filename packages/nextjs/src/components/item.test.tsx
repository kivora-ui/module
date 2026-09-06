// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle
} from "./item";

describe("Item", () => {
  it("renders item content, media, and actions", () => {
    render(
      <Item>
        <ItemMedia variant="icon">K</ItemMedia>
        <ItemContent>
          <ItemTitle>Workspace synced</ItemTitle>
          <ItemDescription>All members have the latest permissions.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <button type="button">View</button>
        </ItemActions>
      </Item>
    );

    expect(screen.getByText("Workspace synced")).toBeInTheDocument();
    expect(screen.getByText("All members have the latest permissions.")).toHaveClass("text-muted-foreground");
    expect(screen.getByRole("button", { name: "View" })).toBeInTheDocument();
  });

  it("supports outline styling", () => {
    render(<Item variant="outline" data-testid="item" />);

    expect(screen.getByTestId("item")).toHaveClass("border-border/70", "shadow-sm");
  });

  it("supports asChild composition", () => {
    render(
      <Item asChild>
        <a href="/settings">Settings</a>
      </Item>
    );

    expect(screen.getByRole("link", { name: "Settings" })).toHaveAttribute("href", "/settings");
  });

  it("renders grouped items with soft dividers", () => {
    render(
      <ItemGroup data-testid="group">
        <Item>First</Item>
        <Item>Second</Item>
      </ItemGroup>
    );

    expect(screen.getByTestId("group")).toHaveClass("divide-border/70");
    expect(screen.getByText("First")).toBeInTheDocument();
  });
});
