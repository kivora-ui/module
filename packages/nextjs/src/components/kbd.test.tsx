// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Kbd } from "./kbd";

describe("Kbd", () => {
  it("renders a keyboard key", () => {
    render(<Kbd>⌘</Kbd>);

    expect(screen.getByText("⌘").tagName).toBe("KBD");
  });

  it("supports sizes and variants", () => {
    render(
      <Kbd size="lg" variant="solid">
        Enter
      </Kbd>
    );

    const key = screen.getByText("Enter");
    expect(key).toHaveClass("h-7");
    expect(key).toHaveClass("bg-foreground");
  });

  it("merges custom classes", () => {
    render(<Kbd className="uppercase">esc</Kbd>);

    expect(screen.getByText("esc")).toHaveClass("uppercase");
  });
});
