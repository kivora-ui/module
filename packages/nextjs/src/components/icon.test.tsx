import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Check, Heart } from "lucide-react";
import { describe, expect, it } from "vitest";
import { Icon } from "./icon";

describe("Icon", () => {
  it("hides decorative icons from assistive technology", () => {
    const { container } = render(<Icon icon={Check} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("exposes labeled icons and forwards SVG props and the ref", () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Icon ref={ref} icon={Heart} label="Favorito" size={32} color="red" strokeWidth={3} className="text-primary" />);
    const icon = screen.getByRole("img", { name: "Favorito" });
    expect(ref.current).toBe(icon);
    expect(icon).toHaveAttribute("width", "32");
    expect(icon).toHaveAttribute("stroke", "red");
    expect(icon).toHaveAttribute("stroke-width", "3");
    expect(icon).toHaveClass("text-primary");
    expect(icon).not.toHaveAttribute("aria-hidden", "true");
  });

  it("accepts standard accessible names", () => {
    render(<Icon icon={Check} aria-label="Completado" />);
    expect(screen.getByRole("img", { name: "Completado" })).not.toHaveAttribute("aria-hidden", "true");
  });
});
