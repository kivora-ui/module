// @vitest-environment jsdom

import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("selects and removes independent dates in multiple mode", () => {
    function Demo() {
      const [dates, setDates] = React.useState<Date[] | undefined>([]);
      return (
        <Calendar
          mode="multiple"
          month={new Date(2026, 8, 1)}
          selected={dates}
          onSelect={setDates}
        />
      );
    }
    render(<Demo />);
    const day = (n: number) =>
      document.querySelector<HTMLButtonElement>(
        `[data-day="2026-09-0${n}"] button`,
      )!;
    fireEvent.click(day(3));
    fireEvent.click(day(5));
    expect(day(3).closest("td")).toHaveAttribute("aria-selected", "true");
    expect(day(5).closest("td")).toHaveAttribute("aria-selected", "true");
    fireEvent.click(day(3));
    expect(day(3).closest("td")).not.toHaveAttribute("aria-selected", "true");
    expect(day(5).closest("td")).toHaveAttribute("aria-selected", "true");
  });

  it("prevents selection of disabled days and constrains month navigation", () => {
    const change = vi.fn();
    render(
      <Calendar
        mode="single"
        month={new Date(2026, 8, 1)}
        startMonth={new Date(2026, 8, 1)}
        endMonth={new Date(2026, 8, 1)}
        disabled={{ before: new Date(2026, 8, 4) }}
        onSelect={change}
      />,
    );
    const disabled = document.querySelector<HTMLButtonElement>(
      '[data-day="2026-09-03"] button',
    )!;
    expect(disabled).toBeDisabled();
    fireEvent.click(disabled);
    expect(change).not.toHaveBeenCalled();
    expect(document.querySelector(".rdp-button_previous")).toHaveAttribute("aria-disabled", "true");
    expect(document.querySelector(".rdp-button_next")).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(document.querySelector(".rdp-button_previous")!);
    fireEvent.click(document.querySelector(".rdp-button_next")!);
    expect(screen.getByText("September 2026")).toBeInTheDocument();
  });
  it("renders a calendar grid", () => {
    render(<Calendar month={new Date(2026, 8, 1)} />);

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("September 2026")).toBeInTheDocument();
  });

  it("supports selected single day styling", () => {
    render(
      <Calendar
        mode="single"
        month={new Date(2026, 8, 1)}
        selected={new Date(2026, 8, 4)}
      />,
    );

    const selectedDay = screen.getByRole("button", {
      name: /Friday, September 4th, 2026, selected/i,
    });

    expect(selectedDay.closest("td")).toHaveClass("rdp-selected");
  });

  it("merges custom class names", () => {
    render(
      <Calendar
        mode="single"
        month={new Date(2026, 8, 1)}
        classNames={{ day_button: "custom-day" }}
      />,
    );

    expect(
      screen.getByRole("button", { name: /Tuesday, September 1st, 2026/i }),
    ).toHaveClass("custom-day");
  });
});
