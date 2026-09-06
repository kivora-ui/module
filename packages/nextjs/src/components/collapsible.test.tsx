// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

describe("Collapsible", () => {
  it("opens content from the trigger", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
        <CollapsibleContent>Hidden details</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.queryByText("Hidden details")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Toggle details" }));

    expect(screen.getByText("Hidden details")).toBeInTheDocument();
  });

  it("supports default open content", () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
        <CollapsibleContent>Visible details</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByText("Visible details")).toBeInTheDocument();
  });

  it("calls onOpenChange when toggled", () => {
    const onOpenChange = vi.fn();

    render(
      <Collapsible onOpenChange={onOpenChange}>
        <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
        <CollapsibleContent>Hidden details</CollapsibleContent>
      </Collapsible>
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle details" }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("applies custom classes to content", () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
        <CollapsibleContent className="rounded-md">Visible details</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByText("Visible details")).toHaveClass("rounded-md");
  });
});
