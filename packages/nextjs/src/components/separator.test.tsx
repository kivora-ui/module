// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders decorative by default", () => {
    render(<Separator data-testid="separator" />);
    expect(screen.getByTestId("separator")).toHaveAttribute("role", "none");
  });

  it("renders an accessible separator when decorative is false", () => {
    render(<Separator decorative={false} />);
    expect(screen.getByRole("separator")).toHaveAttribute("data-orientation", "horizontal");
  });

  it("supports vertical orientation", () => {
    render(<Separator decorative={false} orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });
});
