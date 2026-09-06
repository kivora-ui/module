// @vitest-environment jsdom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from "./command";

beforeAll(() => {
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn()
  }));
  Element.prototype.scrollIntoView = vi.fn();
});

describe("Command", () => {
  it("renders command input, groups, items and shortcuts", () => {
    render(
      <Command>
        <CommandInput placeholder="Search command" />
        <CommandList>
          <CommandEmpty>No command found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem value="archive">Archive</CommandItem>
            <CommandItem value="duplicate">
              Duplicate
              <CommandShortcut>Cmd+D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByPlaceholderText("Search command")).toBeInTheDocument();
    expect(screen.getByText("Archive")).toBeInTheDocument();
    expect(screen.getByText("Cmd+D")).toHaveClass("ml-auto");
  });

  it("opens command dialog from the trigger and keyboard shortcut", async () => {
    render(
      <CommandDialog trigger={<button type="button">Open command</button>}>
        <CommandInput placeholder="Search command" />
        <CommandList>
          <CommandItem value="archive">Archive</CommandItem>
        </CommandList>
      </CommandDialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open command" }));
    expect(screen.getByPlaceholderText("Search command")).toBeInTheDocument();

    fireEvent.keyDown(window, { ctrlKey: true, key: "k" });
    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Search command")).not.toBeInTheDocument();
    });

    fireEvent.keyDown(window, { ctrlKey: true, key: "k" });
    expect(screen.getByPlaceholderText("Search command")).toBeInTheDocument();
  });
});
