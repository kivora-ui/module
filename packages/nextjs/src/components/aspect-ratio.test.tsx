// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AspectRatio } from "./aspect-ratio";

describe("AspectRatio", () => {
  it("uses a 16:9 ratio by default", () => {
    render(<AspectRatio data-testid="ratio" />);

    expect(screen.getByTestId("ratio")).toHaveStyle({ aspectRatio: "1.7777777777777777" });
  });

  it("supports a custom ratio", () => {
    render(<AspectRatio ratio={4 / 3} data-testid="ratio" />);

    expect(screen.getByTestId("ratio")).toHaveAttribute("data-ratio", "1.3333333333333333");
    expect(screen.getByTestId("ratio")).toHaveStyle({ aspectRatio: "1.3333333333333333" });
  });

  it("can render as a child component", () => {
    render(
      <AspectRatio asChild ratio={1}>
        <section data-testid="ratio">Square</section>
      </AspectRatio>
    );

    expect(screen.getByTestId("ratio").tagName).toBe("SECTION");
    expect(screen.getByTestId("ratio")).toHaveStyle({ aspectRatio: "1" });
  });
});
