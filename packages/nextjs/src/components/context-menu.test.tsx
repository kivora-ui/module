// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@radix-ui/react-context-menu", async () => {
  const React = await import("react");

  const Root = ({ children }: { children?: React.ReactNode }) => React.createElement("div", null, children);
  const Trigger = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ children, ...props }, ref) => React.createElement("span", { ref, ...props }, children)
  );
  const Portal = ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children);
  const Content = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean; forceMount?: boolean }
  >(({ asChild, children, forceMount: _forceMount, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, { ...props, ref } as React.HTMLAttributes<HTMLDivElement>);
    }
    return React.createElement("div", { ref, ...props }, children);
  });
  const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => React.createElement("div", { ref, role: "menuitem", ...props }, children)
  );
  const CheckboxItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }>(
    ({ children, checked, ...props }, ref) =>
      React.createElement("div", { ref, "aria-checked": checked, role: "menuitemcheckbox", ...props }, children)
  );
  const Label = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => React.createElement("div", { ref, ...props })
  );
  const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => React.createElement("div", { ref, role: "separator", ...props })
  );
  const ItemIndicator = ({ children }: { children?: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children);

  return {
    CheckboxItem,
    Content,
    Group: "div",
    Item,
    ItemIndicator,
    Label,
    Portal,
    RadioGroup: Root,
    RadioItem: Item,
    Root,
    Separator,
    Sub: Root,
    SubContent: Content,
    SubTrigger: Item,
    Trigger
  };
});

vi.mock("motion/react", async () => {
  const React = await import("react");

  return {
    motion: {
      div: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ children, ...props }, ref) => React.createElement("div", { ref, ...props }, children)
      )
    }
  };
});

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "./context-menu";

describe("ContextMenu", () => {
  it("renders trigger and default open content", () => {
    render(
      <ContextMenu modal={false}>
        <ContextMenuTrigger>Right click area</ContextMenuTrigger>
        <ContextMenuContent forceMount>
          <ContextMenuLabel>Document</ContextMenuLabel>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>Show details</ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    expect(screen.getByText("Right click area")).toBeInTheDocument();
    expect(screen.getByText("Rename")).toHaveClass("min-h-9");
    expect(screen.getByText("Show details")).toBeInTheDocument();
  });
});
