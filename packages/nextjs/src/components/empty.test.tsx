// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Empty, EmptyDescription, EmptyIcon, EmptyTitle } from "./empty";

describe("Empty", () => {
  it("renders content", () => {
    render(
      <Empty>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try another search.</EmptyDescription>
      </Empty>
    );

    expect(screen.getByText("No results")).toBeInTheDocument();
    expect(screen.getByText("Try another search.")).toBeInTheDocument();
  });

  it("supports sizes", () => {
    render(<Empty size="lg" data-testid="empty" />);

    expect(screen.getByTestId("empty")).toHaveAttribute("data-size", "lg");
    expect(screen.getByTestId("empty")).toHaveClass("min-h-72");
  });

  it("marks the icon as decorative", () => {
    render(<EmptyIcon data-testid="icon" />);

    expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
  });
});
