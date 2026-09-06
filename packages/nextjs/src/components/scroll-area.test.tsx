// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { ScrollArea, ScrollBar, VirtualScrollArea } from "./scroll-area";

describe("ScrollArea", () => {
  const originalResizeObserver = globalThis.ResizeObserver;

  beforeAll(() => {
    globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      unobserve: vi.fn()
    }));
  });

  afterAll(() => {
    globalThis.ResizeObserver = originalResizeObserver;
  });

  it("renders scrollable content", () => {
    render(
      <ScrollArea className="h-24 w-40" data-testid="scroll-area">
        <div>Activity feed</div>
      </ScrollArea>
    );

    expect(screen.getByTestId("scroll-area")).toHaveClass("overflow-hidden");
    expect(screen.getByText("Activity feed")).toBeInTheDocument();
  });

  it("passes classes to the viewport", () => {
    render(
      <ScrollArea viewportClassName="p-4">
        <div>Viewport content</div>
      </ScrollArea>
    );

    expect(screen.getByText("Viewport content").closest("[data-radix-scroll-area-viewport]")).toHaveClass("p-4");
  });

  it("supports horizontal scrollbar styling", () => {
    render(
      <ScrollArea type="always">
        <div className="w-[40rem]">Wide content</div>
        <ScrollBar orientation="horizontal" data-testid="scrollbar" />
      </ScrollArea>
    );

    expect(screen.getByTestId("scrollbar")).toHaveClass("h-2.5", "flex-col");
  });

  it("renders virtualized items with TanStack Virtual", () => {
    render(
      <VirtualScrollArea
        className="h-64"
        estimateSize={() => 36}
        initialRect={{ height: 256, width: 320 }}
        items={["Deploy", "Invoice", "Member"]}
        renderItem={(item) => <div>{item}</div>}
      />
    );

    expect(screen.getByText("Deploy")).toBeInTheDocument();
    expect(screen.getByText("Invoice")).toBeInTheDocument();
    expect(screen.getByText("Member")).toBeInTheDocument();
  });

  it("supports horizontal virtualized items", () => {
    render(
      <VirtualScrollArea
        className="h-20 w-64"
        estimateSize={() => 120}
        horizontal
        initialRect={{ height: 80, width: 256 }}
        items={["Backlog", "Active", "Done"]}
        renderItem={(item) => <div>{item}</div>}
      />
    );

    expect(screen.getByText("Backlog")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
