// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

describe("Avatar", () => {
  it("renders a fallback", () => {
    render(
      <Avatar>
        <AvatarFallback>KV</AvatarFallback>
      </Avatar>
    );

    expect(screen.getByText("KV")).toBeInTheDocument();
  });

  it("keeps fallback content available before the image is loaded", () => {
    render(
      <Avatar>
        <AvatarImage src="/avatar.png" alt="Brimo" />
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
    );

    expect(screen.getByText("BR")).toBeInTheDocument();
  });

  it("passes custom classes through", () => {
    render(<Avatar className="h-12 w-12" data-testid="avatar" />);
    expect(screen.getByTestId("avatar")).toHaveClass("h-12", "w-12");
  });
});
