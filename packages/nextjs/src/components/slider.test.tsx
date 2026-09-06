// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Slider } from "./slider";

beforeAll(() => {
  globalThis.ResizeObserver = class ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  };
});

describe("Slider", () => {
  it("renders with value attributes", () => {
    render(<Slider aria-label="Volume" value={[40]} />);

    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "40");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders multiple thumbs for range values", () => {
    render(<Slider aria-label="Price range" value={[20, 80]} />);

    expect(screen.getAllByRole("slider")).toHaveLength(2);
  });

  it("calls onValueChange from keyboard interaction", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(<Slider aria-label="Volume" defaultValue={[40]} onValueChange={onValueChange} />);
    screen.getByRole("slider").focus();
    await user.keyboard("{ArrowRight}");

    expect(onValueChange).toHaveBeenCalled();
  });

  it("supports custom classes for slots", () => {
    render(
      <Slider
        aria-label="Volume"
        data-testid="slider"
        defaultValue={[40]}
        rangeClassName="bg-destructive"
        thumbClassName="border-destructive"
        trackClassName="bg-muted"
      />
    );

    const slider = screen.getByTestId("slider");
    expect(slider.querySelector("[class*='bg-muted']")).toBeInTheDocument();
    expect(slider.querySelector("[class*='bg-destructive']")).toBeInTheDocument();
    expect(slider.querySelector("[class*='border-destructive']")).toBeInTheDocument();
  });

  it("can show the selected value", () => {
    render(<Slider aria-label="Volume" showValue value={[40]} />);

    expect(screen.getByText("40")).toBeInTheDocument();
  });

  it("formats the selected value", () => {
    render(<Slider aria-label="Volume" formatValue={(value) => `${value}%`} showValue value={[40]} />);

    expect(screen.getByText("40%")).toBeInTheDocument();
  });
});
