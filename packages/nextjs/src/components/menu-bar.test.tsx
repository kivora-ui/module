// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@radix-ui/react-menubar", async () => {
  const React = await import("react");

  const Root = ({ children }: { children?: React.ReactNode }) => React.createElement("div", null, children);
  const Menu = ({ children }: { children?: React.ReactNode; value?: string }) =>
    React.createElement(React.Fragment, null, children);
  const Trigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => React.createElement("button", { ref, role: "menuitem", type: "button", ...props }, children)
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
  const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => React.createElement("div", { ref, role: "menuitem", ...props }, children)
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
    Menu,
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
  MenuDropdown,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger
} from "./menu";

describe("Menu", () => {
  it("renders open menu content", () => {
    render(
      <Menu variant="bar" defaultValue="file">
        <MenuDropdown value="file">
          <MenuTrigger>File</MenuTrigger>
          <MenuContent forceMount>
            <MenuItem>New project</MenuItem>
          </MenuContent>
        </MenuDropdown>
      </Menu>
    );

    expect(screen.getByRole("menuitem", { name: "File" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "New project" })).toBeInTheDocument();
  });

  it("renders checkbox and radio indicators", () => {
    render(
      <Menu variant="bar" defaultValue="view">
        <MenuDropdown value="view">
          <MenuTrigger>View</MenuTrigger>
          <MenuContent forceMount>
            <MenuCheckboxItem checked>Sidebar</MenuCheckboxItem>
            <MenuRadioGroup value="comfortable">
              <MenuRadioItem value="compact">Compact</MenuRadioItem>
              <MenuRadioItem value="comfortable">Comfortable</MenuRadioItem>
            </MenuRadioGroup>
          </MenuContent>
        </MenuDropdown>
      </Menu>
    );

    expect(screen.getByRole("menuitemcheckbox", { name: "Sidebar" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("menuitemradio", { name: "Comfortable" })).toBeInTheDocument();
  });

  it("supports separators and shortcuts", () => {
    render(
      <Menu variant="bar" defaultValue="edit">
        <MenuDropdown value="edit">
          <MenuTrigger>Edit</MenuTrigger>
          <MenuContent forceMount>
            <MenuItem>
              Undo <MenuShortcut>Ctrl Z</MenuShortcut>
            </MenuItem>
            <MenuSeparator data-testid="separator" />
          </MenuContent>
        </MenuDropdown>
      </Menu>
    );

    expect(screen.getByText("Ctrl Z")).toHaveClass("text-muted-foreground");
    expect(screen.getByTestId("separator")).toHaveClass("bg-border");
  });
});
