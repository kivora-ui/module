import { describe, it, expect } from "vitest";
import { dayKey, monthDays, selectRange } from "./calendar";

describe("native calendar dates", () => {
  it("keeps local days and leap years without UTC parsing", () => {
    const days = monthDays(new Date(2024, 1, 1));
    expect(days).toHaveLength(42);
    expect(days[0]?.getDay()).toBe(1);
    expect(days.filter(d => d.getMonth() === 1)).toHaveLength(29);
    expect(dayKey(new Date(2026, 8, 3, 23, 59))).toBe(dayKey(new Date(2026, 8, 3)));
  });
  it("supports Sunday as the first weekday", () => {
    expect(monthDays(new Date(2026, 8, 1), 0)[0]?.getDay()).toBe(0);
  });
  it("selects both endpoints, reverses earlier clicks and restarts a complete range", () => {
    const a = new Date(2026, 8, 30), b = new Date(2026, 9, 3), c = new Date(2026, 9, 10);
    expect(selectRange(undefined, a)).toEqual({ from: a });
    expect(selectRange({ from: a }, b)).toEqual({ from: a, to: b });
    expect(selectRange({ from: b }, a)).toEqual({ from: a, to: b });
    expect(selectRange({ from: a, to: b }, c)).toEqual({ from: c });
    expect(selectRange({ from: a }, a)).toEqual({ from: a, to: a });
  });
  it("includes adjacent-month days without shifting the month", () => {
    const days = monthDays(new Date(2026, 8, 1));
    expect(days[0]).toEqual(new Date(2026, 7, 31));
    expect(days[3]).toEqual(new Date(2026, 8, 3));
  });
});
