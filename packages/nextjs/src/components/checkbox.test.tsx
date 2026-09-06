// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

describe("Checkbox", () => {
  it("renders with an accessible name", () => {
    render(
      <div>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Acepto los terminos</Label>
      </div>
    );

    expect(screen.getByRole("checkbox", { name: "Acepto los terminos" })).toBeInTheDocument();
  });

  it("toggles when pressed", async () => {
    render(<Checkbox aria-label="Seleccionar" />);
    const checkbox = screen.getByRole("checkbox", { name: "Seleccionar" });

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("calls onCheckedChange with the next value", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Seleccionar" onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("checkbox", { name: "Seleccionar" }));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("is disabled when disabled is set", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Seleccionar" disabled onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Seleccionar" });

    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});
