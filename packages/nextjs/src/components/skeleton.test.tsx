// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders as hidden from assistive tech", () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toHaveAttribute("aria-hidden", "true");
  });

  it("animates by default", () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toHaveClass("animate-pulse");
  });

  it("can disable animation", () => {
    render(<Skeleton animate={false} data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).not.toHaveClass("animate-pulse");
  });
});
