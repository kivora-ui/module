// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "./popover";

describe("Popover", () => {
  it("opens content from the trigger", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open filters</PopoverTrigger>
        <PopoverContent>Filter content</PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open filters" }));

    expect(screen.getByText("Filter content")).toBeInTheDocument();
  });

  it("supports default open content", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open filters</PopoverTrigger>
        <PopoverContent>Filter content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText("Filter content")).toBeInTheDocument();
  });

  it("closes with PopoverClose", async () => {
    const onOpenChange = vi.fn();

    render(
      <Popover defaultOpen onOpenChange={onOpenChange}>
        <PopoverTrigger>Open filters</PopoverTrigger>
        <PopoverContent>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("applies custom classes to content", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open filters</PopoverTrigger>
        <PopoverContent className="w-96">Filter content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText("Filter content")).toHaveClass("w-96");
  });
});
