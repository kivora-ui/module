// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DirectionProvider } from "./direction";

describe("DirectionProvider", () => {
  it("applies the direction to the rendered subtree", () => {
    render(
      <DirectionProvider dir="rtl">
        <span>RTL content</span>
      </DirectionProvider>
    );

    expect(screen.getByText("RTL content").parentElement).toHaveAttribute("dir", "rtl");
  });
});
