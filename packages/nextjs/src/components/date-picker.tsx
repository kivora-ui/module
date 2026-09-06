"use client";

import * as React from "react";
import { CalendarIcon, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import type { DateRange } from "@daypicker/react";
import type { Locale } from "date-fns";
import {
  addMonths,
  addYears,
  endOfMonth,
  endOfYear,
  isBefore,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns";
import { cn } from "@kivora/theme";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Select, type SelectOption } from "./select";
import { Separator } from "./separator";

export type DatePickerMode = "single" | "range" | "month" | "year";
export type DatePickerView = "calendar" | "month" | "year";
export type DatePickerValue = Date | DateRange | undefined;

function TimeInput({ label, value, min, max, onValueChange }: {
  label: string;
  value: string;
  min: number;
  max: number;
  onValueChange: (value: string) => void;
}) {
  const current = value === "" ? min : Number(value);
  function step(delta: number) {
    onValueChange(String(Math.min(max, Math.max(min, current + delta))).padStart(2, "0"));
  }
  return (
    <div className="relative min-w-0">
      <Input
        aria-label={label}
        className="h-10 min-w-0 pr-8"
        inputMode="numeric"
        mask="00"
        value={value}
        onAccept={onValueChange}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            step(event.key === "ArrowUp" ? 1 : -1);
          }
        }}
      />
      <div className="absolute right-1 top-1/2 flex h-8 w-6 -translate-y-1/2 flex-col">
        {([1, -1] as const).map(delta => (
          <button
            key={delta}
            type="button"
            aria-label={`${delta === 1 ? "Increase" : "Decrease"} ${label.toLowerCase()}`}
            disabled={delta === 1 ? current >= max : current <= min}
            className="flex min-h-0 flex-1 items-center justify-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30"
            onClick={() => step(delta)}
          >
            {delta === 1 ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export interface DatePickerPreset {
  label: string;
  value: DateRange;
}

export interface DatePickerProps {
  calendarClassName?: string;
  className?: string;
  defaultValue?: DatePickerValue;
  disabled?: boolean;
  locale?: Locale;
  localeCode?: string;
  mode?: DatePickerMode;
  numberOfMonths?: number;
  onValueChange?: (date: DatePickerValue) => void;
  placeholder?: string;
  presets?: DatePickerPreset[];
  showFooter?: boolean;
  showPresets?: boolean;
  startView?: DatePickerView;
  value?: DatePickerValue;
  withTime?: boolean;
  /** Hour cycle used by both the editor and the formatted value. Defaults to 12h. */
  timeFormat?: "12h" | "24h";
}

const periodOptions: SelectOption[] = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

function getDefaultPresets(now = new Date()): DatePickerPreset[] {
  return [
    { label: "Last 3 days", value: { from: subDays(now, 2), to: now } },
    { label: "Last 7 days", value: { from: subDays(now, 6), to: now } },
    { label: "Last 14 days", value: { from: subDays(now, 13), to: now } },
    { label: "Last 30 days", value: { from: subDays(now, 29), to: now } },
    {
      label: "Last month",
      value: {
        from: startOfMonth(subMonths(now, 1)),
        to: endOfMonth(subMonths(now, 1)),
      },
    },
    { label: "Year to date", value: { from: startOfYear(now), to: now } },
    {
      label: "Last year",
      value: {
        from: startOfYear(subYears(now, 1)),
        to: endOfYear(subYears(now, 1)),
      },
    },
  ];
}

function isRange(value: DatePickerValue): value is DateRange {
  return Boolean(
    value && !(value instanceof Date) && ("from" in value || "to" in value),
  );
}

function formatDate(date: Date, localeCode: string) {
  return new Intl.DateTimeFormat(localeCode, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDateTime(date: Date, localeCode: string, timeFormat: "12h" | "24h") {
  return new Intl.DateTimeFormat(localeCode, {
    day: "2-digit",
    hour: "2-digit",
    hourCycle: timeFormat === "24h" ? "h23" : "h12",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatMonth(date: Date, localeCode: string) {
  return new Intl.DateTimeFormat(localeCode, { month: "short" }).format(date);
}

function formatMonthYear(date: Date, localeCode: string) {
  return new Intl.DateTimeFormat(localeCode, {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatValue(
  value: DatePickerValue,
  mode: DatePickerMode,
  localeCode: string,
  withTime: boolean,
  timeFormat: "12h" | "24h",
) {
  if (!value) {
    return "";
  }

  if (mode === "range" && isRange(value)) {
    if (value.from && value.to) {
      return `${formatDate(value.from, localeCode)} -> ${formatDate(value.to, localeCode)}`;
    }
    return value.from ? `${formatDate(value.from, localeCode)} ->` : "";
  }

  if (value instanceof Date) {
    if (mode === "month") {
      return formatMonthYear(value, localeCode);
    }
    if (mode === "year") {
      return new Intl.DateTimeFormat(localeCode, { year: "numeric" }).format(
        value,
      );
    }
    return withTime
      ? formatDateTime(value, localeCode, timeFormat)
      : formatDate(value, localeCode);
  }

  return "";
}

function getTimeParts(date: Date | undefined, timeFormat: "12h" | "24h") {
  const nextDate = date ?? new Date();
  const hours = nextDate.getHours();
  return {
    hour: String(timeFormat === "24h" ? hours : hours % 12 || 12).padStart(2, "0"),
    minute: String(nextDate.getMinutes()).padStart(2, "0"),
    period: hours >= 12 ? periodOptions[1]! : periodOptions[0]!,
  };
}

interface TimeParts {
  hour: string;
  minute: string;
  period: SelectOption | null;
}

function applyTime(
  date: Date | undefined,
  hour: string,
  minute: string,
  period: SelectOption | null,
  timeFormat: "12h" | "24h",
) {
  if (!date) {
    return undefined;
  }

  const parsedHour = timeFormat === "24h"
    ? Math.min(Math.max(Number(hour) || 0, 0), 23)
    : Math.min(Math.max(Number(hour) || 12, 1), 12);
  const parsedMinute = Math.min(Math.max(Number(minute) || 0, 0), 59);
  const nextDate = new Date(date);
  const periodValue = period?.value ?? "AM";
  nextDate.setHours(
    timeFormat === "24h" ? parsedHour : periodValue === "PM" ? (parsedHour % 12) + 12 : parsedHour % 12,
    parsedMinute,
    0,
    0,
  );
  return nextDate;
}

function normalizeTimePart(value: string, min: number, max: number) {
  const digits = value.replace(/\D/g, "").slice(0, 2);

  if (digits.length < 2) {
    return digits;
  }

  return String(Math.min(Math.max(Number(digits), min), max)).padStart(2, "0");
}

export function DatePicker(props: DatePickerProps) {
  const {
    calendarClassName,
    className,
    defaultValue,
    disabled,
    locale,
    localeCode = locale?.code ?? "en",
    mode = "single",
    numberOfMonths = mode === "range" ? 2 : 1,
    onValueChange,
    placeholder = mode === "range" ? "Select range" : "Select date",
    presets,
    showPresets = mode === "range",
    startView,
    value,
    withTime = false,
    timeFormat = "12h",
    showFooter,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] =
    React.useState<DatePickerValue>(defaultValue);
  const controlled = Object.prototype.hasOwnProperty.call(props, "value");
  const committedValue = controlled ? value : internalValue;
  const shouldShowFooter = showFooter ?? (mode === "range" || withTime);
  const [draftValue, setDraftValue] =
    React.useState<DatePickerValue>(committedValue);
  const selectedValue = open && shouldShowFooter ? draftValue : committedValue;
  const selectedDate =
    selectedValue instanceof Date ? selectedValue : undefined;
  const selectedRange = isRange(selectedValue) ? selectedValue : undefined;
  const [month, setMonth] = React.useState<Date>(
    selectedDate ?? selectedRange?.from ?? new Date(),
  );
  const [view, setView] = React.useState<DatePickerView>(
    () =>
      startView ??
      (mode === "month" ? "month" : mode === "year" ? "year" : "calendar"),
  );
  const [time, setTime] = React.useState<TimeParts>(() =>
    getTimeParts(selectedDate, timeFormat),
  );
  const previousTimeFormat = React.useRef(timeFormat);
  React.useEffect(() => {
    const previous = previousTimeFormat.current;
    if (previous === timeFormat) return;
    previousTimeFormat.current = timeFormat;
    setTime(current => getTimeParts(applyTime(new Date(2000, 0, 1), current.hour, current.minute, current.period, previous), timeFormat));
  }, [timeFormat]);
  const activePresets = presets ?? getDefaultPresets();
  const label =
    formatValue(committedValue, mode, localeCode, withTime, timeFormat) || placeholder;

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setDraftValue(committedValue);
      const date =
        committedValue instanceof Date
          ? committedValue
          : isRange(committedValue)
            ? committedValue.from
            : undefined;
      setMonth(date ?? new Date());
      setTime(getTimeParts(date, timeFormat));
      setView(
        startView ??
          (mode === "month" ? "month" : mode === "year" ? "year" : "calendar"),
      );
    }
    setOpen(nextOpen);
  }

  function publishValue(nextValue: DatePickerValue) {
    if (!controlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  }

  function commitValue(
    nextValue: DatePickerValue,
    close = mode === "single" && !withTime,
  ) {
    if (shouldShowFooter) {
      setDraftValue(nextValue);
      return;
    }
    publishValue(nextValue);
    if (close) {
      setOpen(false);
    }
  }

  function handleSingleSelect(date: Date | undefined) {
    commitValue(
      withTime ? applyTime(date, time.hour, time.minute, time.period, timeFormat) : date,
    );
  }

  function handleRangeDayClick(day: Date) {
    if (!selectedRange?.from || selectedRange.to) {
      commitValue({ from: day, to: undefined }, false);
      return;
    }

    commitValue(
      isBefore(day, selectedRange.from)
        ? { from: day, to: selectedRange.from }
        : { from: selectedRange.from, to: day },
      false,
    );
  }

  function handleTimeChange(partialTime: Partial<TimeParts>) {
    const nextTime = { ...time, ...partialTime };
    if (
      nextTime.hour === time.hour &&
      nextTime.minute === time.minute &&
      nextTime.period?.value === time.period?.value
    )
      return;
    setTime(nextTime);
    if (selectedDate) {
      commitValue(
        applyTime(
          selectedDate,
          nextTime.hour,
          nextTime.minute,
          nextTime.period,
          timeFormat,
        ),
        false,
      );
    }
  }

  function handleHourChange(nextValue: string) {
    handleTimeChange({ hour: normalizeTimePart(nextValue, timeFormat === "24h" ? 0 : 1, timeFormat === "24h" ? 23 : 12) });
  }

  function handleMinuteChange(nextValue: string) {
    handleTimeChange({ minute: normalizeTimePart(nextValue, 0, 59) });
  }

  function handleYearSelect(year: number) {
    const nextMonth = new Date(year, month.getMonth(), 1);
    setMonth(nextMonth);
    if (mode === "year") {
      commitValue(new Date(year, 0, 1), true);
      return;
    }
    setView("month");
  }

  function handleMonthSelect(monthIndex: number) {
    const nextMonth = new Date(month.getFullYear(), monthIndex, 1);
    setMonth(nextMonth);
    if (mode === "month") {
      commitValue(nextMonth, true);
      return;
    }
    setView("calendar");
  }

  function renderMonthPicker() {
    return (
      <div className="w-80 p-3">
        <div className="mb-3 flex h-9 items-center justify-between">
          <Button
            type="button"
            aria-label="Previous year"
            size="icon"
            variant="ghost"
            onClick={() => setMonth(subYears(month, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent"
            onClick={() => setView("year")}
          >
            {month.getFullYear()}
          </button>
          <Button
            type="button"
            aria-label="Next year"
            size="icon"
            variant="ghost"
            onClick={() => setMonth(addYears(month, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, index) => {
            const option = new Date(month.getFullYear(), index, 1);
            const selected =
              selectedDate?.getFullYear() === option.getFullYear() &&
              selectedDate.getMonth() === option.getMonth();

            return (
              <Button
                type="button"
                key={index}
                className="h-11 text-base capitalize"
                variant={selected ? "default" : "outline"}
                onClick={() => handleMonthSelect(index)}
              >
                {formatMonth(option, localeCode)}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  function renderYearPicker() {
    const firstYear = Math.floor(month.getFullYear() / 12) * 12;

    return (
      <div className="w-80 p-3">
        <div className="mb-3 flex h-9 items-center justify-between">
          <Button
            type="button"
            aria-label="Previous years"
            size="icon"
            variant="ghost"
            onClick={() => setMonth(subYears(month, 12))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">
            {firstYear} - {firstYear + 11}
          </div>
          <Button
            type="button"
            aria-label="Next years"
            size="icon"
            variant="ghost"
            onClick={() => setMonth(addYears(month, 12))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, index) => {
            const year = firstYear + index;
            const selected = selectedDate?.getFullYear() === year;

            return (
              <Button
                type="button"
                key={year}
                className="h-11 text-base"
                variant={selected ? "default" : "outline"}
                onClick={() => handleYearSelect(year)}
              >
                {year}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedValue && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
          variant="outline"
        >
          <CalendarIcon className="h-4 w-4" />
          <span className="truncate">{label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn(
          "w-auto max-w-[calc(100vw-2rem)] max-h-[min(calc(var(--kivora-viewport-height,100dvh)*0.8),var(--radix-popover-content-available-height))] overflow-y-auto p-0",
          withTime && mode === "single" && "w-80",
        )}
      >
        <div
          className={cn(
            "flex flex-col sm:flex-row",
            showPresets && "sm:min-w-[36rem]",
          )}
        >
          {showPresets && mode === "range" ? (
            <div className="flex w-full max-w-80 gap-1 overflow-x-auto border-b border-border/70 p-2 sm:block sm:w-36 sm:shrink-0 sm:border-b-0 sm:border-r">
              {activePresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="flex h-9 w-auto shrink-0 items-center rounded-md px-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:w-full"
                  onClick={() => {
                    commitValue(preset.value, false);
                    setMonth(preset.value.from ?? new Date());
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          ) : null}
          <div className={cn("min-w-0", withTime && mode === "single" && "w-full")}>
            {view === "year" ? renderYearPicker() : null}
            {view === "month" ? renderMonthPicker() : null}
            {view === "calendar" ? (
              <div className="relative">
                <div className="pointer-events-none absolute inset-x-3 top-3 z-20 flex items-center justify-between">
                  <Button
                    type="button"
                    aria-label="Previous month"
                    className="pointer-events-auto"
                    size="icon"
                    variant="ghost"
                    onClick={() => setMonth(subMonths(month, 1))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    aria-label="Next month"
                    className="pointer-events-auto"
                    size="icon"
                    variant="ghost"
                    onClick={() => setMonth(addMonths(month, 1))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                {mode === "range" ? (
                  <Calendar
                    className={calendarClassName}
                    classNames={{ nav: "hidden" }}
                    locale={locale}
                    mode="range"
                    month={month}
                    numberOfMonths={numberOfMonths}
                    selected={selectedRange}
                    onSelect={(_range, day) => handleRangeDayClick(day)}
                    onMonthChange={setMonth}
                  />
                ) : (
                  <Calendar
                    autoFocus
                    fullWidth={withTime}
                    className={cn("mx-auto", calendarClassName)}
                    classNames={{
                      caption_label:
                        "rounded-md px-2 py-1 text-sm font-medium capitalize transition-colors hover:bg-accent",
                      nav: "hidden",
                    }}
                    components={{
                      CaptionLabel: () => (
                        <button
                          type="button"
                          className="rounded-md px-2 py-1 text-sm font-medium capitalize transition-colors hover:bg-accent"
                          onClick={() => setView("month")}
                        >
                          {formatMonthYear(month, localeCode)}
                        </button>
                      ),
                    }}
                    locale={locale}
                    mode="single"
                    month={month}
                    selected={selectedDate}
                    onMonthChange={setMonth}
                    onSelect={handleSingleSelect}
                  />
                )}
              </div>
            ) : null}
            {withTime && mode === "single" ? (
              <>
                <Separator />
                <div className={cn("grid gap-2 p-3", timeFormat === "24h" ? "grid-cols-2" : "grid-cols-[minmax(0,1fr)_minmax(0,1fr)_4.75rem]")}>
                  <TimeInput
                    label="Hours"
                    min={timeFormat === "24h" ? 0 : 1}
                    max={timeFormat === "24h" ? 23 : 12}
                    value={time.hour}
                    onValueChange={handleHourChange}
                  />
                  <TimeInput
                    label="Minutes"
                    min={0}
                    max={59}
                    value={time.minute}
                    onValueChange={handleMinuteChange}
                  />
                  {timeFormat === "12h" && <Select
                    aria-label="Period"
                    options={periodOptions}
                    triggerClassName="h-10 min-h-10 min-w-0 px-2"
                    value={time.period ?? undefined}
                    onChange={(option) =>
                      handleTimeChange({
                        period: option as SelectOption | null,
                      })
                    }
                  />}
                </div>
              </>
            ) : null}
            {shouldShowFooter ? (
              <>
                <Separator />
                <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 truncate text-sm text-muted-foreground">
                    {formatValue(selectedValue, mode, localeCode, withTime, timeFormat) ||
                      placeholder}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setDraftValue(undefined)}
                    >
                      Clear
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      disabled={
                        mode === "range" &&
                        Boolean(selectedRange?.from && !selectedRange.to)
                      }
                      onClick={() => {
                        publishValue(draftValue);
                        setOpen(false);
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
