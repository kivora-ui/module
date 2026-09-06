// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@radix-ui/react-hover-card", async () => {
  const React = await import("react");

  const Root = ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children);
  const Trigger = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ children, ...props }, ref) => React.createElement("a", { ref, ...props }, children)
  );
  const Portal = ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children);
  const Content = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
      align?: string;
      asChild?: boolean;
      forceMount?: boolean;
      sideOffset?: number;
    }
  >(({ align: _align, asChild, children, forceMount: _forceMount, sideOffset: _sideOffset, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, { ...props, ref } as React.HTMLAttributes<HTMLDivElement>);
    }
    return React.createElement("div", { ref, ...props }, children);
  });

  return { Content, Portal, Root, Trigger };
});

vi.mock("motion/react", async () => {
  const React = await import("react");

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    motion: {
      div: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ children, ...props }, ref) => React.createElement("div", { ref, ...props }, children)
      )
    }
  };
});

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

describe("HoverCard", () => {
  it("renders controlled open content", () => {
    render(
      <HoverCard open>
        <HoverCardTrigger href="/team">Team</HoverCardTrigger>
        <HoverCardContent>Preview content</HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText("Preview content")).toBeInTheDocument();
  });

  it("supports default open content", () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>Project</HoverCardTrigger>
        <HoverCardContent>Project preview</HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText("Project preview")).toBeInTheDocument();
  });

  it("hides content when closed", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>User</HoverCardTrigger>
        <HoverCardContent>User preview</HoverCardContent>
      </HoverCard>
    );

    expect(screen.queryByText("User preview")).not.toBeInTheDocument();
  });

  it("applies custom classes to content", () => {
    render(
      <HoverCard open>
        <HoverCardTrigger>Project</HoverCardTrigger>
        <HoverCardContent className="w-96">Wide preview</HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText("Wide preview")).toHaveClass("w-96");
  });
});
