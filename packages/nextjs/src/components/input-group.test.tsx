// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";
import { InputGroup, InputGroupAddon, InputGroupButton } from "./input-group";

describe("InputGroup", () => {
  it("renders grouped input content", () => {
    render(
      <InputGroup>
        <InputGroupAddon>@</InputGroupAddon>
        <Input aria-label="Username" />
      </InputGroup>
    );

    expect(screen.getByText("@")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("supports invalid and size state", () => {
    render(<InputGroup invalid size="lg" data-testid="group" />);

    expect(screen.getByTestId("group")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByTestId("group")).toHaveAttribute("data-size", "lg");
    expect(screen.getByTestId("group")).toHaveClass("h-11");
  });

  it("renders button addons with button type by default", () => {
    render(<InputGroupButton>Search</InputGroupButton>);

    expect(screen.getByRole("button", { name: "Search" })).toHaveAttribute("type", "button");
  });
});
