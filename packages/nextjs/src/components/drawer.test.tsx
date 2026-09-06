// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "./drawer";

describe("Drawer", () => {
  it("opens drawer content from the trigger", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Refine the current table.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open drawer" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("supports default open content and footer", () => {
    render(
      <Drawer defaultOpen>
        <DrawerContent>
          <DrawerFooter>Actions</DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByText("Actions")).toHaveClass("mt-auto");
  });

  it("closes with DrawerClose", () => {
    const onOpenChange = vi.fn();

    render(
      <Drawer defaultOpen onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerClose>Done</DrawerClose>
        </DrawerContent>
      </Drawer>
    );

    fireEvent.click(screen.getByRole("button", { name: "Done" }));

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
