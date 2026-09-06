// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Bubble, BubbleContent } from "./bubble";

describe("Bubble", () => {
  it("renders variants and content", () => {
    render(
      <Bubble variant="primary">
        <BubbleContent>Hello</BubbleContent>
      </Bubble>
    );

    expect(screen.getByText("Hello").parentElement).toHaveClass("bg-primary");
  });
});
