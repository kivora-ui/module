import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "./dialog";

describe("Dialog", () => {
  it("opens dialog content from the trigger", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Confirmar cambios</DialogTitle>
          <DialogDescription>Esta accion se puede revisar despues.</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Open" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Confirmar cambios")).toBeInTheDocument();
  });
});
