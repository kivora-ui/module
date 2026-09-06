// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import { Label } from "./label";

describe("Label", () => {
  it("associates text with a form control", () => {
    render(
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </div>
    );

    expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email");
  });

  it("passes custom classes through", () => {
    render(<Label className="text-primary">Nombre</Label>);
    expect(screen.getByText("Nombre")).toHaveClass("text-primary");
  });
});
