// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock("@radix-ui/react-dropdown-menu", async () => {
  const React = await import("react");

  const Root = ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children);
  const Trigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => React.createElement("button", { ref, type: "button", ...props }, children)
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
  const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { onSelect?: () => void }>(
    ({ children, onSelect, ...props }, ref) =>
      React.createElement("div", { ref, role: "menuitem", onClick: onSelect, ...props }, children)
  );
  const CheckboxItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }>(
    ({ children, checked, ...props }, ref) =>
      React.createElement("div", { ref, "aria-checked": checked, role: "menuitemcheckbox", ...props }, children)
  );
  const RadioItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: string }>(
    ({ children, ...props }, ref) => React.createElement("div", { ref, role: "menuitemradio", ...props }, children)
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
    RadioItem,
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
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    motion: {
      div: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ children, ...props }, ref) => React.createElement("div", { ref, ...props }, children)
      )
    }
  };
});

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "./dropdown-menu";

describe("DropdownMenu", () => {
  it("renders content when controlled open", () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Account</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("supports default open content", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText("Workspace")).toBeInTheDocument();
  });

  it("calls item selection handlers", () => {
    const onSelect = vi.fn();

    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onSelect}>Invite member</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText("Invite member"));

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("renders checkbox, radio, separator and shortcut affordances", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Show toolbar</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator data-testid="separator" />
          <DropdownMenuRadioGroup value="comfortable">
            <DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuItem>
            Command palette
            <DropdownMenuShortcut>Ctrl K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText("Show toolbar")).toBeInTheDocument();
    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByText("Comfortable")).toBeInTheDocument();
    expect(screen.getByText("Ctrl K")).toBeInTheDocument();
  });

  it("applies custom classes to content", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">Content</DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText("Content")).toHaveClass("w-64");
  });
});
