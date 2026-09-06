// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Marker, MarkerContent, MarkerIcon } from "./marker";

describe("Marker", () => {
  it("renders marker content with an icon", () => {
    render(
      <Marker>
        <MarkerIcon>✓</MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
    );

    expect(screen.getByText("Explored 4 files")).toBeInTheDocument();
    expect(screen.getByText("✓")).toHaveAttribute("aria-hidden", "true");
  });

  it("supports separator variant", () => {
    render(
      <Marker variant="separator" data-testid="marker">
        <MarkerContent>Today</MarkerContent>
      </Marker>
    );

    expect(screen.getByTestId("marker")).toHaveClass("before:bg-border/70", "after:bg-border/70");
  });

  it("supports bordered rows", () => {
    render(<Marker variant="border" data-testid="marker" />);

    expect(screen.getByTestId("marker")).toHaveClass("border-b", "border-border/70");
  });

  it("supports asChild links", () => {
    render(
      <Marker asChild>
        <a href="/pull-request">
          <MarkerContent>View pull request</MarkerContent>
        </a>
      </Marker>
    );

    expect(screen.getByRole("link", { name: "View pull request" })).toHaveAttribute("href", "/pull-request");
  });
});
