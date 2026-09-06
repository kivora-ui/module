// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

describe("Resizable", () => {
  it("renders panels with a handle", () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Sidebar</ResizablePanel>
        <ResizableHandle withHandle data-testid="handle" />
        <ResizablePanel>Content</ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByText("Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByTestId("handle")).toHaveClass("bg-border/80");
  });
});
