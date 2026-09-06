// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toggle } from "./toggle";

describe("Toggle", () => {
  it("updates text and icon with its internal state and keyboard", async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Favorite">{pressed => <><span data-testid="icon">{pressed ? "check" : "heart"}</span>{pressed ? "Saved" : "Save"}</>}</Toggle>);
    const button = screen.getByRole("button", { name: "Favorite" });
    expect(button).toHaveTextContent("Save");
    expect(screen.getByTestId("icon")).toHaveTextContent("heart");
    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(button).toHaveTextContent("Saved");
    expect(screen.getByTestId("icon")).toHaveTextContent("check");
    await user.keyboard(" ");
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByTestId("icon")).toHaveTextContent("heart");
  });

  it("uses the controlled state until the parent updates it", async () => {
    const change = vi.fn();
    const content = (pressed: boolean) => pressed ? "Enabled" : "Disabled";
    const { rerender } = render(<Toggle pressed={false} onPressedChange={change}>{content}</Toggle>);
    await userEvent.click(screen.getByRole("button"));
    expect(change).toHaveBeenCalledWith(true);
    expect(screen.getByRole("button")).toHaveTextContent("Disabled");
    rerender(<Toggle pressed={true} onPressedChange={change}>{content}</Toggle>);
    expect(screen.getByRole("button")).toHaveTextContent("Enabled");
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("honors defaultPressed and disabled without firing changes", async () => {
    const change = vi.fn();
    render(<Toggle defaultPressed disabled onPressedChange={change}>{pressed => pressed ? "Enabled" : "Disabled"}</Toggle>);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("Enabled");
    expect(change).not.toHaveBeenCalled();
  });
  it("renders as a pressed toggle button", () => {
    render(<Toggle pressed>Bold</Toggle>);

    expect(screen.getByRole("button", { name: "Bold" })).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onPressedChange when toggled", async () => {
    const onPressedChange = vi.fn();

    render(<Toggle onPressedChange={onPressedChange}>Preview</Toggle>);

    await userEvent.click(screen.getByRole("button", { name: "Preview" }));

    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  it("supports outline and icon styling", () => {
    render(
      <Toggle variant="outline" size="icon" aria-label="Mute">
        M
      </Toggle>
    );

    expect(screen.getByRole("button", { name: "Mute" })).toHaveClass("border-border/70", "h-10", "w-10");
  });
});
