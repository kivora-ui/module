// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

describe("ToggleGroup", () => {
  it("renders a single-selection toggle group", () => {
    render(
      <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <ToggleGroupItem value="left" aria-label="Align left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          Center
        </ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByRole("radiogroup", { name: "Text alignment" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Align center" })).toHaveAttribute("aria-checked", "true");
  });

  it("calls onValueChange when selecting an item", async () => {
    const onValueChange = vi.fn();

    render(
      <ToggleGroup type="single" onValueChange={onValueChange}>
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      </ToggleGroup>
    );

    await userEvent.click(screen.getByRole("radio", { name: "Grid" }));

    expect(onValueChange).toHaveBeenCalledWith("grid");
  });

  it("supports multiple selection", () => {
    render(
      <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByRole("button", { name: "Bold" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Italic" })).toHaveAttribute("aria-pressed", "true");
  });

  it("supports vertical attached layout", () => {
    render(
      <ToggleGroup type="single" orientation="vertical" attached>
        <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
        <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByRole("radiogroup")).toHaveClass("flex-col");
  });
});
