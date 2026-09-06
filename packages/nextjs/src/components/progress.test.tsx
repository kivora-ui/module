// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders a progressbar with value attributes", () => {
    render(<Progress value={40} />);
    const progress = screen.getByRole("progressbar");

    expect(progress).toHaveAttribute("aria-valuenow", "40");
    expect(progress).toHaveAttribute("aria-valuemax", "100");
  });

  it("supports custom max values", () => {
    render(<Progress max={200} value={50} />);
    const progress = screen.getByRole("progressbar");

    expect(progress).toHaveAttribute("aria-valuenow", "50");
    expect(progress).toHaveAttribute("aria-valuemax", "200");
  });

  it("supports sizes and custom indicator classes", () => {
    render(
      <Progress
        data-testid="progress"
        indicatorClassName="bg-destructive"
        size="lg"
        value={75}
      />
    );

    expect(screen.getByTestId("progress")).toHaveClass("h-4");
    expect(screen.getByTestId("progress").firstElementChild).toHaveClass("bg-destructive");
  });
});
