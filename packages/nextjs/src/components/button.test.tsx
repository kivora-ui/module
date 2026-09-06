// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("renders as a native button with an accessible name", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });

  it("calls onClick when pressed", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Guardar</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is disabled and does not fire onClick when disabled is set", async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Guardar
      </Button>
    );
    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders the child element instead of a button when asChild is set", () => {
    render(
      <Button asChild>
        <a href="/docs">Ver docs</a>
      </Button>
    );
    expect(screen.getByRole("link", { name: "Ver docs" })).toBeInTheDocument();
  });
});
