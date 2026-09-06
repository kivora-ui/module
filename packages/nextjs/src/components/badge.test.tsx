// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders its content", () => {
    render(<Badge>Activo</Badge>);
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });

  it("applies the selected variant", () => {
    render(<Badge variant="secondary">Beta</Badge>);
    expect(screen.getByText("Beta")).toHaveClass("bg-secondary");
  });

  it("passes custom classes through", () => {
    render(<Badge className="uppercase">Nuevo</Badge>);
    expect(screen.getByText("Nuevo")).toHaveClass("uppercase");
  });
});
