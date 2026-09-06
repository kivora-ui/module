// @vitest-environment jsdom

import { render, screen, within } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { DatePicker } from "./date-picker";

// Keep these tests focused on date state; real portals, focus, animation and
// layout are exercised by example/web/tests/date-picker.spec.ts.
vi.mock("./popover", () => {
  const Context = React.createContext({
    open: false,
    onOpenChange: (_open: boolean) => {},
  });
  return {
    Popover: ({
      children,
      open,
      onOpenChange,
    }: React.PropsWithChildren<{
      open: boolean;
      onOpenChange: (open: boolean) => void;
    }>) => (
      <Context.Provider value={{ open, onOpenChange }}>
        {children}
      </Context.Provider>
    ),
    PopoverTrigger: ({
      children,
    }: {
      children: React.ReactElement<{ onClick?: () => void }>;
    }) => {
      const context = React.useContext(Context);
      return React.cloneElement(children, {
        onClick: () => context.onOpenChange(!context.open),
      });
    },
    PopoverContent: ({ children }: React.PropsWithChildren) => {
      const context = React.useContext(Context);
      return context.open ? (
        <div
          role="dialog"
          onKeyDown={(event) => {
            if (event.key === "Escape") context.onOpenChange(false);
          }}
        >
          {children}
        </div>
      ) : null;
    },
  };
});

describe("DatePicker", () => {
  it.each([0, 12, 23])("edits and saves hour %i in 24-hour format", (hour) => {
    const change = vi.fn();
    render(<DatePicker withTime timeFormat="24h" defaultValue={new Date(2026, 8, 3, hour, 45)} onValueChange={change} />);
    open();
    expect(screen.queryByLabelText("Period")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Hours")).toHaveValue(String(hour).padStart(2, "0"));
    fireEvent.click(screen.getByRole("button", { name: "Apply" }));
    expect(change.mock.calls[0]![0].getHours()).toBe(hour);
    expect(screen.getByRole("button")).toHaveTextContent(`${String(hour).padStart(2, "0")}:45`);
  });

  it("preserves the selected time when the hour format changes", () => {
    const date = new Date(2026, 8, 3, 23, 45);
    const { rerender } = render(<DatePicker withTime timeFormat="12h" value={date} />);
    open();
    expect(screen.getByLabelText("Hours")).toHaveValue("11");
    rerender(<DatePicker withTime timeFormat="24h" value={date} />);
    expect(screen.getByLabelText("Hours")).toHaveValue("23");
    expect(screen.queryByLabelText("Period")).not.toBeInTheDocument();
    rerender(<DatePicker withTime timeFormat="12h" value={date} />);
    expect(screen.getByLabelText("Hours")).toHaveValue("11");
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.getByRole("button")).toHaveTextContent("11:45 PM");
  });
  const initial = new Date(2026, 8, 1);
  const open = () => fireEvent.click(screen.getAllByRole("button")[0]!);
  const day = (n: number) =>
    document.querySelector<HTMLButtonElement>(
      `[data-day="2026-09-${String(n).padStart(2, "0")}"]:not([data-outside]) button`,
    )!;

  it("publishes immediately when the range footer is disabled", () => {
    const change = vi.fn();
    render(
      <DatePicker
        mode="range"
        showFooter={false}
        defaultValue={{ from: initial, to: initial }}
        onValueChange={change}
      />,
    );
    open();
    fireEvent.click(day(3));
    expect(change).toHaveBeenLastCalledWith({
      from: new Date(2026, 8, 3),
      to: undefined,
    });
    fireEvent.click(day(10));
    expect(change).toHaveBeenLastCalledWith({
      from: new Date(2026, 8, 3),
      to: new Date(2026, 8, 10),
    });
  });

  it("navigates year blocks and months before selecting a day", () => {
    const change = vi.fn();
    render(
      <DatePicker
        defaultValue={initial}
        startView="year"
        onValueChange={change}
      />,
    );
    open();
    fireEvent.click(screen.getByRole("button", { name: "Next years" }));
    fireEvent.click(screen.getByRole("button", { name: "Previous years" }));
    fireEvent.click(
      within(screen.getByRole("dialog")).getByRole("button", { name: "2024" }),
    );
    fireEvent.click(screen.getByRole("button", { name: "Feb" }));
    fireEvent.click(
      document.querySelector<HTMLButtonElement>(
        '[data-day="2024-02-29"]:not([data-outside]) button',
      )!,
    );
    expect(change).toHaveBeenLastCalledWith(new Date(2024, 1, 29));
  });

  it.each([
    [3, 10],
    [10, 3],
    [3, 3],
  ])("applies exact range endpoints %i and %i", (first, last) => {
    const change = vi.fn();
    render(
      <DatePicker
        mode="range"
        defaultValue={{ from: initial }}
        onValueChange={change}
      />,
    );
    open();
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    fireEvent.click(day(first));
    expect(day(first).closest("td")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("button", { name: "Apply" })).toBeDisabled();
    fireEvent.click(day(last));
    expect(day(last).closest("td")).toHaveAttribute("aria-selected", "true");
    expect(change).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Apply" }));
    expect(change).toHaveBeenLastCalledWith({
      from: new Date(2026, 8, Math.min(first, last)),
      to: new Date(2026, 8, Math.max(first, last)),
    });
  });

  it("cancels draft selections and only clears after applying", () => {
    const change = vi.fn();
    render(
      <DatePicker
        mode="range"
        defaultValue={{ from: initial, to: new Date(2026, 8, 5) }}
        onValueChange={change}
      />,
    );
    open();
    fireEvent.click(day(10));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(change).not.toHaveBeenCalled();
    expect(screen.getByRole("button")).toHaveTextContent(
      "Sep 01, 2026 -> Sep 05, 2026",
    );
    open();
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    fireEvent.click(screen.getByRole("button", { name: "Apply" }));
    expect(change).toHaveBeenLastCalledWith(undefined);
    expect(screen.getByRole("button")).toHaveTextContent("Select range");
  });

  it("supports controlled resets to undefined", () => {
    function Demo() {
      const [date, setDate] = React.useState<Date | undefined>(initial);
      return (
        <>
          <DatePicker
            value={date}
            onValueChange={(next) => setDate(next as Date | undefined)}
          />
          <button onClick={() => setDate(undefined)}>Reset</button>
        </>
      );
    }
    render(<Demo />);
    open();
    fireEvent.click(day(3));
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(
      screen.getByRole("button", { name: "Select date" }),
    ).toBeInTheDocument();
  });

  it("does not mutate a controlled empty value without parent acceptance", () => {
    const change = vi.fn();
    render(
      <DatePicker
        value={undefined}
        defaultValue={initial}
        onValueChange={change}
      />,
    );
    expect(screen.getByRole("button")).toHaveTextContent("Select date");
    open();
    fireEvent.click(
      document.querySelector<HTMLButtonElement>(
        ".rdp-day:not(.rdp-outside) button",
      )!,
    );
    expect(change).toHaveBeenCalledOnce();
    expect(screen.getByRole("button")).toHaveTextContent("Select date");
  });

  it("reopens on the externally updated date and time", () => {
    const { rerender } = render(<DatePicker value={initial} withTime />);
    rerender(<DatePicker value={new Date(2028, 1, 29, 15, 45)} withTime />);
    open();
    expect(
      screen.getByRole("button", { name: "February 2028" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Hours")).toHaveValue("03");
    expect(screen.getByLabelText("Minutes")).toHaveValue("45");
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
  });

  it("stages presets, navigates to their month and discards with Escape", () => {
    const change = vi.fn();
    render(
      <DatePicker
        mode="range"
        onValueChange={change}
        presets={[
          {
            label: "Leap days",
            value: { from: new Date(2024, 1, 28), to: new Date(2024, 2, 2) },
          },
        ]}
      />,
    );
    open();
    fireEvent.click(screen.getByRole("button", { name: "Leap days" }));
    expect(screen.getByText("February 2024")).toBeInTheDocument();
    expect(
      document.querySelector('[data-day="2024-02-29"]:not([data-outside])'),
    ).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(change).not.toHaveBeenCalled();
  });

  it("disabled pickers cannot open", () => {
    render(<DatePicker disabled />);
    open();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("renders placeholder when empty", () => {
    render(<DatePicker placeholder="Pick deadline" />);

    expect(
      screen.getByRole("button", { name: /pick deadline/i }),
    ).toBeInTheDocument();
  });

  it("formats selected date", () => {
    render(<DatePicker value={new Date(2026, 0, 20)} />);

    expect(screen.getByRole("button")).toHaveTextContent("Jan 20, 2026");
  });

  it("formats selected ranges", () => {
    render(
      <DatePicker
        mode="range"
        value={{ from: new Date(2026, 7, 12), to: new Date(2026, 7, 19) }}
      />,
    );

    expect(screen.getByRole("button")).toHaveTextContent(
      "Aug 12, 2026 -> Aug 19, 2026",
    );
  });

  it("supports month selection", async () => {
    render(<DatePicker mode="month" value={new Date(2026, 1, 1)} />);

    expect(screen.getByRole("button")).toHaveTextContent("February 2026");

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button", { name: "Feb" })).toHaveClass(
      "bg-primary",
    );
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
  });

  it("supports year selection", () => {
    render(<DatePicker mode="year" value={new Date(2026, 0, 1)} />);

    expect(screen.getByRole("button")).toHaveTextContent("2026");

    fireEvent.click(screen.getByRole("button"));

    expect(
      within(screen.getByRole("dialog")).getByRole("button", { name: "2026" }),
    ).toHaveClass("bg-primary");
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
  });

  it("can start from the month picker before selecting a date", () => {
    render(<DatePicker startView="month" />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button", { name: "Jan" })).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
  });

  it("formats dates with time", () => {
    render(<DatePicker value={new Date(2026, 7, 12, 15, 30)} withTime />);

    expect(screen.getByRole("button")).toHaveTextContent("03:30 PM");
  });
});
