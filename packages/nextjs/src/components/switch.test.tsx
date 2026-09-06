// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Label } from "./label";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders with an accessible name", () => {
    render(
      <div>
        <Switch id="notifications" />
        <Label htmlFor="notifications">Notificaciones</Label>
      </div>
    );

    expect(screen.getByRole("switch", { name: "Notificaciones" })).toBeInTheDocument();
  });

  it("toggles when pressed", async () => {
    render(<Switch aria-label="Activar" />);
    const control = screen.getByRole("switch", { name: "Activar" });

    await userEvent.click(control);

    expect(control).toBeChecked();
  });

  it("calls onCheckedChange with the next value", async () => {
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Activar" onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("switch", { name: "Activar" }));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("is disabled when disabled is set", async () => {
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Activar" disabled onCheckedChange={onCheckedChange} />);
    const control = screen.getByRole("switch", { name: "Activar" });

    expect(control).toBeDisabled();
    await userEvent.click(control);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});
