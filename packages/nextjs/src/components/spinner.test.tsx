import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("renders an accessible loading status", () => {
    render(<Spinner label="Loading invoices" />);

    expect(screen.getByRole("status", { name: "Loading invoices" })).toBeInTheDocument();
  });

  it("supports sizes and variants", () => {
    render(<Spinner size="lg" variant="primary" />);

    const spinner = screen.getByRole("status", { name: "Loading" });
    expect(spinner).toHaveAttribute("data-size", "lg");
    expect(spinner).toHaveAttribute("data-variant", "primary");
    expect(spinner).toHaveClass("text-primary");
  });

  it("merges custom classes", () => {
    render(<Spinner className="opacity-50" />);

    expect(screen.getByRole("status", { name: "Loading" })).toHaveClass("opacity-50");
  });
});
