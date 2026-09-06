import * as React from "react";
import { Pressable, Text, View, type ViewProps } from "react-native";
import {
  dayKey,
  monthDays,
  selectRange,
  type DateRange,
} from "../lib/calendar";
import { cn } from "@kivora/theme";
export type { DateRange } from "../lib/calendar";
export interface CalendarProps extends Omit<ViewProps, "onSelect"> {
  mode?: "single" | "range" | "multiple";
  selected?: Date | DateRange | Date[];
  onSelect?: (value: Date | DateRange | Date[] | undefined) => void;
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  localeCode?: string;
  weekStartsOn?: number;
  showOutsideDays?: boolean;
  disabled?: boolean | Date[] | ((date: Date) => boolean);
  minDate?: Date;
  maxDate?: Date;
}
export function Calendar({
  mode = "single",
  selected,
  onSelect,
  month,
  defaultMonth = new Date(),
  onMonthChange,
  localeCode = "es-ES",
  weekStartsOn = 1,
  showOutsideDays = true,
  disabled,
  minDate,
  maxDate,
  className,
  ...props
}: CalendarProps) {
  const [internalMonth, setMonth] = React.useState(defaultMonth);
  const current = month ?? internalMonth;
  const [view, setView] = React.useState<"days" | "months" | "years">("days");
  const year = current.getFullYear();
  const monthIndex = current.getMonth();
  const yearStart = Math.floor(year / 12) * 12;
  const labels = React.useMemo(() => {
    const dayFormatter = new Intl.DateTimeFormat(localeCode, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const weekdayFormatter = new Intl.DateTimeFormat(localeCode, {
      weekday: "short",
    });
    const start = new Date(year, monthIndex, 1);
    return {
      title: new Intl.DateTimeFormat(localeCode, {
        month: "long",
        year: "numeric",
      }).format(start),
      weekdays: Array.from({ length: 7 }, (_, i) =>
        weekdayFormatter.format(
          new Date(2024, 0, 7 + ((i + weekStartsOn) % 7)),
        ),
      ),
      days: monthDays(start, weekStartsOn).map((day) => ({
        day,
        key: dayKey(day),
        label: dayFormatter.format(day),
      })),
    };
  }, [year, monthIndex, localeCode, weekStartsOn]);
  const todayKey = dayKey(new Date());

  const range =
    selected && !(selected instanceof Date) && !Array.isArray(selected)
      ? selected
      : undefined;
  const isDisabled = (day: Date) =>
    disabled === true ||
    (typeof disabled === "function" && disabled(day)) ||
    (Array.isArray(disabled) &&
      disabled.some((d) => dayKey(d) === dayKey(day))) ||
    !!(minDate && dayKey(day) < dayKey(minDate)) ||
    !!(maxDate && dayKey(day) > dayKey(maxDate));
  const navigate = (next: Date) => {
    if (month === undefined) setMonth(next);
    onMonthChange?.(next);
  };
  const periodDisabled = (start: Date, end: Date) => disabled === true ||
    !!(minDate && dayKey(end) < dayKey(minDate)) || !!(maxDate && dayKey(start) > dayKey(maxDate));
  const move = (delta: number) => navigate(new Date(year, monthIndex + delta * (view === "days" ? 1 : view === "months" ? 12 : 144), 1));
  const canMove = (delta: number) => {
    const start = view === "days" ? new Date(year, monthIndex + delta, 1)
      : new Date((view === "years" ? yearStart : year) + delta * (view === "years" ? 12 : 1), 0, 1);
    const end = view === "days" ? new Date(start.getFullYear(), start.getMonth() + 1, 0)
      : new Date(start.getFullYear() + (view === "years" ? 12 : 1), 0, 0);
    return !periodDisabled(start, end);
  };
  const pick = (day: Date) => {
    if (isDisabled(day)) return;
    if (mode === "range") {
      const next = selectRange(range, day);
      if (
        next.from &&
        next.to &&
        monthDaysBetween(next.from, next.to).some(isDisabled)
      ) {
        onSelect?.({ from: day });
        return;
      }
      onSelect?.(next);
    } else if (mode === "multiple") {
      const list = Array.isArray(selected) ? selected : [];
      onSelect?.(
        list.some((d) => dayKey(d) === dayKey(day))
          ? list.filter((d) => dayKey(d) !== dayKey(day))
          : [...list, day].sort((a, b) => +a - +b),
      );
    } else onSelect?.(day);
  };
  return (
    <View {...props} className={cn("w-full gap-2", className)}>
      <View className="flex-row items-center justify-between">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={view === "days" ? "Mes anterior" : view === "months" ? "Año anterior" : "Años anteriores"}
          disabled={!canMove(-1)}
          accessibilityState={{ disabled: !canMove(-1) }}
          className="h-12 w-12 items-center justify-center"
          onPress={() => move(-1)}
        >
          <Text className="text-2xl text-foreground">‹</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={view === "days" ? "Seleccionar mes" : view === "months" ? "Seleccionar año" : "Volver a los meses"}
          onPress={() => setView(view === "days" ? "months" : view === "months" ? "years" : "months")}
          className="min-h-12 flex-1 items-center justify-center"
        >
          <Text className="text-base font-semibold text-foreground">
            {view === "days" ? labels.title : view === "months" ? year : `${yearStart} – ${yearStart + 11}`}
          </Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={view === "days" ? "Mes siguiente" : view === "months" ? "Año siguiente" : "Años siguientes"}
          disabled={!canMove(1)}
          accessibilityState={{ disabled: !canMove(1) }}
          className="h-12 w-12 items-center justify-center"
          onPress={() => move(1)}
        >
          <Text className="text-2xl text-foreground">›</Text>
        </Pressable>
      </View>
      {view !== "days" ? (
        <View className="flex-row flex-wrap">
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(view === "years" ? yearStart + i : year, view === "years" ? 0 : i, 1);
            const end = new Date(date.getFullYear() + (view === "years" ? 1 : 0), view === "years" ? 0 : i + 1, 0);
            const unavailable = periodDisabled(date, end);
            const active = view === "years" ? date.getFullYear() === year : i === monthIndex;
            const label = view === "years" ? String(yearStart + i) : date.toLocaleDateString(localeCode, { month: "long" });
            return <Pressable key={i} accessibilityRole="button" accessibilityLabel={label}
              accessibilityState={{ disabled: unavailable, selected: active }} disabled={unavailable}
              style={{ width: "33.33%", minHeight: 56, opacity: unavailable ? 0.3 : 1 }}
              className={cn("items-center justify-center rounded-lg", active && "bg-secondary")}
              onPress={() => { navigate(date); setView(view === "years" ? "months" : "days"); }}>
              <Text className="text-base text-foreground">{label}</Text>
            </Pressable>;
          })}
        </View>
      ) : <>
      <View className="flex-row">
        {labels.weekdays.map((label, i) => (
          <Text
            key={i}
            style={{ width: `${100 / 7}%` }}
            className="py-2 text-center text-sm text-muted-foreground"
          >
            {label}
          </Text>
        ))}
      </View>
      <View className="flex-row flex-wrap">
        {labels.days.map(({ day, key, label }) => {
          const outside = day.getMonth() !== current.getMonth(),
            unavailable = isDisabled(day);
          const active =
            selected instanceof Date
              ? dayKey(selected) === key
              : Array.isArray(selected)
                ? selected.some((d) => dayKey(d) === key)
                : !!(
                    (range?.from && dayKey(range.from) === key) ||
                    (range?.to && dayKey(range.to) === key)
                  );
          const within = !!(
            range?.from &&
            range.to &&
            key > dayKey(range.from) &&
            key < dayKey(range.to)
          );
          const today = todayKey === key;
          return (
            <Pressable
              key={key}
              accessibilityRole="button"
              accessibilityLabel={label}
              accessibilityState={{ selected: active, disabled: unavailable }}
              disabled={unavailable || (!showOutsideDays && outside)}
              style={{
                width: `${100 / 7}%`,
                minHeight: 44,
                opacity: outside ? 0.4 : unavailable ? 0.3 : 1,
              }}
              className={cn(
                "items-center justify-center",
                within && "bg-accent",
                active && "rounded-lg bg-primary",
                today &&
                  !active &&
                  !within &&
                  "rounded-lg border border-border bg-secondary",
              )}
              onPress={() => pick(day)}
            >
              <Text
                className={cn(
                  "text-base",
                  active ? "text-primary-foreground" : "text-foreground",
                )}
              >
                {!showOutsideDays && outside ? "" : day.getDate()}
              </Text>
            </Pressable>
          );
        })}
      </View>
      </>}
    </View>
  );
}
function monthDaysBetween(from: Date, to: Date) {
  const days: Date[] = [];
  for (
    let d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    dayKey(d) <= dayKey(to);
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
  )
    days.push(d);
  return days;
}
