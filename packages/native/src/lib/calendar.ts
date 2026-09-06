export interface DateRange {
  from: Date | undefined;
  to?: Date;
}
export function dayKey(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ).getTime();
}
export function monthDays(month: Date, weekStartsOn = 1) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  return Array.from(
    { length: 42 },
    (_, i) => new Date(first.getFullYear(), first.getMonth(), 1 - offset + i),
  );
}
export function selectRange(
  range: DateRange | undefined,
  day: Date,
): DateRange {
  if (!range?.from || range.to) return { from: day };
  return dayKey(day) < dayKey(range.from)
    ? { from: day, to: range.from }
    : { from: range.from, to: day };
}
