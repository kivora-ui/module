// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders with an accessible name", () => {
    render(<Textarea aria-label="Message" />);
    expect(screen.getByRole("textbox", { name: "Message" })).toBeInTheDocument();
  });

  it("accepts typed values", async () => {
    render(<Textarea aria-label="Message" />);
    const textarea = screen.getByRole("textbox", { name: "Message" });

    await userEvent.type(textarea, "Hola Kivora");

    expect(textarea).toHaveValue("Hola Kivora");
  });

  it("marks the field as invalid", () => {
    render(<Textarea aria-label="Message" invalid />);
    expect(screen.getByRole("textbox", { name: "Message" })).toBeInvalid();
  });

  it("is disabled when disabled is set", () => {
    render(<Textarea aria-label="Message" disabled />);
    expect(screen.getByRole("textbox", { name: "Message" })).toBeDisabled();
  });

  it("shows a character counter with a limit", async () => {
    render(<Textarea aria-label="Message" maxLength={12} showCount />);
    const textarea = screen.getByRole("textbox", { name: "Message" });

    expect(screen.getByText("0/12")).toBeInTheDocument();

    await userEvent.type(textarea, "Hola Kivora");

    expect(screen.getByText("11/12")).toBeInTheDocument();
  });

  it("shows a character counter without a limit", async () => {
    render(<Textarea aria-label="Message" showCount />);
    const textarea = screen.getByRole("textbox", { name: "Message" });

    await userEvent.type(textarea, "Hola");

    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("disables manual resize when auto resize is enabled", () => {
    render(<Textarea aria-label="Message" autoResize />);
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveClass("min-h-0", "resize-none");
  });

  it("can anchor auto resize growth upward", () => {
    render(<Textarea aria-label="Message" autoResize autoResizeDirection="up" showCount />);
    expect(screen.getByRole("textbox", { name: "Message" }).parentElement).toHaveClass(
      "flex-col-reverse"
    );
  });
});
