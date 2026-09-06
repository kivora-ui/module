// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";

describe("ButtonGroup", () => {
  it("renders with a group role by default", () => {
    render(
      <ButtonGroup aria-label="Text alignment">
        <Button>Left</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );

    expect(screen.getByRole("group", { name: "Text alignment" })).toBeInTheDocument();
  });

  it("supports vertical orientation", () => {
    render(<ButtonGroup orientation="vertical" data-testid="group" />);

    expect(screen.getByTestId("group")).toHaveAttribute("data-orientation", "vertical");
    expect(screen.getByTestId("group")).toHaveClass("flex-col");
  });

  it("supports detached buttons", () => {
    render(<ButtonGroup attached={false} data-testid="group" />);

    expect(screen.getByTestId("group")).toHaveAttribute("data-attached", "false");
    expect(screen.getByTestId("group")).toHaveClass("gap-2");
  });
});
