// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  it("renders with an accessible name", () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  });

  it("accepts typed values", async () => {
    render(<Input aria-label="Nombre" />);
    const input = screen.getByRole("textbox", { name: "Nombre" });

    await userEvent.type(input, "Kivora");

    expect(input).toHaveValue("Kivora");
  });

  it("marks the field as invalid", () => {
    render(<Input aria-label="Email" invalid />);
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInvalid();
  });

  it("is disabled when disabled is set", () => {
    render(<Input aria-label="Email" disabled />);
    expect(screen.getByRole("textbox", { name: "Email" })).toBeDisabled();
  });

  it("formats values with a mask", async () => {
    render(<Input aria-label="Phone" mask="+34 000 000 000" />);
    const input = screen.getByRole("textbox", { name: "Phone" });

    await userEvent.type(input, "612345678");

    expect(input).toHaveValue("+34 612 345 678");
  });

  it("emits unmasked values when unmask is enabled", async () => {
    const handleAccept = vi.fn();
    render(<Input aria-label="Card" mask="0000 0000 0000 0000" unmask onAccept={handleAccept} />);
    const input = screen.getByRole("textbox", { name: "Card" });

    await userEvent.type(input, "4242424242424242");

    expect(input).toHaveValue("4242 4242 4242 4242");
    expect(handleAccept).toHaveBeenLastCalledWith("4242424242424242", expect.anything(), expect.anything());
  });
});
