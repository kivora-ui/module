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
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger
} from "./menu";

describe("Menu", () => {
  it("renders content when controlled open", () => {
    render(
      <Menu open>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Account</MenuItem>
        </MenuContent>
      </Menu>
    );

    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("supports default open content", () => {
    render(
      <Menu defaultOpen>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent>
          <MenuLabel>Workspace</MenuLabel>
        </MenuContent>
      </Menu>
    );

    expect(screen.getByText("Workspace")).toBeInTheDocument();
  });

  it("calls item selection handlers", () => {
    const onSelect = vi.fn();

    render(
      <Menu defaultOpen>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={onSelect}>Invite member</MenuItem>
        </MenuContent>
      </Menu>
    );

    fireEvent.click(screen.getByText("Invite member"));

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("renders checkbox, radio, separator and shortcut affordances", () => {
    render(
      <Menu defaultOpen>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked>Show toolbar</MenuCheckboxItem>
          <MenuSeparator data-testid="separator" />
          <MenuRadioGroup value="comfortable">
            <MenuRadioItem value="comfortable">Comfortable</MenuRadioItem>
          </MenuRadioGroup>
          <MenuItem>
            Command palette
            <MenuShortcut>Ctrl K</MenuShortcut>
          </MenuItem>
        </MenuContent>
      </Menu>
    );

    expect(screen.getByText("Show toolbar")).toBeInTheDocument();
    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByText("Comfortable")).toBeInTheDocument();
    expect(screen.getByText("Ctrl K")).toBeInTheDocument();
  });

  it("applies custom classes to content", () => {
    render(
      <Menu defaultOpen>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent className="w-64">Content</MenuContent>
      </Menu>
    );

    expect(screen.getByText("Content")).toHaveClass("w-64");
  });
});
