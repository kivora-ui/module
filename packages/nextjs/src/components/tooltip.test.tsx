import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

beforeAll(() => {
  globalThis.ResizeObserver = class ResizeObserver {
    disconnect = vi.fn();
    observe = vi.fn();
    unobserve = vi.fn();
  };
});

describe("Tooltip", () => {
  it("renders content when open", () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>Guardar</Button>
          </TooltipTrigger>
          <TooltipContent>Guarda los cambios</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByRole("tooltip")).toHaveTextContent("Guarda los cambios");
  });

  it("supports size, variant, and arrow", () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>Eliminar</Button>
          </TooltipTrigger>
          <TooltipContent showArrow size="lg" variant="destructive">
            Esta accion no se puede deshacer
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByRole("tooltip")).toHaveAttribute("data-size", "lg");
    expect(screen.getByRole("tooltip")).toHaveAttribute("data-variant", "destructive");
    expect(screen.getByRole("tooltip")).toHaveClass("bg-destructive");
  });
});
