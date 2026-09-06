// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "./sheet";

describe("Sheet", () => {
  it("opens sheet content from the trigger", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open filters</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>Refine the visible records.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Open filters" }));

    expect(screen.getByRole("dialog")).toHaveAccessibleName("Filters");
    expect(screen.getByText("Refine the visible records.")).toBeInTheDocument();
  });

  it("applies side layout classes", () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="bottom">
          <SheetTitle>Mobile options</SheetTitle>
          <SheetDescription>Choose an action.</SheetDescription>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByRole("dialog")).toHaveClass("bottom-0", "border-t");
  });

  it("renders footer actions", () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Account</SheetTitle>
          <SheetDescription>Manage settings.</SheetDescription>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
});

