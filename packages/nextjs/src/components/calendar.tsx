"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayPickerProps,
} from "@daypicker/react";
import { cn } from "@kivora/theme";

export type CalendarProps = DayPickerProps & { fullWidth?: boolean };
export type { DateRange } from "@daypicker/react";

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  fullWidth = false,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", fullWidth && "w-full", className)}
      classNames={{
        root: cn(defaultClassNames.root, "text-sm", fullWidth ? "w-full" : "w-fit"),
        months: cn(defaultClassNames.months, "flex flex-col gap-4 sm:flex-row"),
        month: cn(defaultClassNames.month, "space-y-4", fullWidth && "min-w-0 flex-1"),
        month_caption: cn(
          defaultClassNames.month_caption,
          "relative flex h-9 items-center justify-center",
        ),
        caption_label: cn(
          defaultClassNames.caption_label,
          "text-sm font-medium",
        ),
        nav: cn(
          defaultClassNames.nav,
          "absolute inset-x-0 top-0 z-10 flex items-center justify-between",
        ),
        button_previous: cn(
          defaultClassNames.button_previous,
          "inline-flex h-9 w-9 items-center justify-center rounded-md border-0 bg-transparent text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        ),
        button_next: cn(
          defaultClassNames.button_next,
          "inline-flex h-9 w-9 items-center justify-center rounded-md border-0 bg-transparent text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        ),
        month_grid: cn(
          defaultClassNames.month_grid,
          "w-full border-collapse space-y-1",
        ),
        weekdays: cn(defaultClassNames.weekdays, "flex"),
        weekday: cn(
          defaultClassNames.weekday,
          "w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground",
          fullWidth && "w-0 min-w-0 flex-1",
        ),
        week: cn(defaultClassNames.week, "mt-2 flex w-full"),
        day: cn(
          defaultClassNames.day,
          "relative h-9 w-9 shrink-0 p-0 text-center text-sm",
          fullWidth && "w-0 min-w-0 flex-1",
        ),
        day_button: cn(
          defaultClassNames.day_button,
          "flex h-9 w-9 items-center justify-center rounded-md font-normal transition-colors hover:bg-primary/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          fullWidth && "w-full",
        ),
        range_start: cn(
          defaultClassNames.range_start,
          "[&>button]:rounded-r-none [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
        ),
        range_middle: cn(
          defaultClassNames.range_middle,
          "bg-primary/20 text-foreground [&>button:not(:disabled)]:rounded-none [&>button:not(:disabled)]:bg-transparent [&>button:not(:disabled)]:text-foreground [&>button:not(:disabled)]:font-medium [&>button:not(:disabled)]:hover:bg-primary/30",
        ),
        range_end: cn(
          defaultClassNames.range_end,
          "[&>button]:rounded-l-none [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
        ),
        selected: cn(
          defaultClassNames.selected,
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
        ),
        today: cn(
          defaultClassNames.today,
          "[&:not([aria-selected=true])>button]:bg-accent [&:not([aria-selected=true])>button]:text-accent-foreground [&>button]:font-semibold [&>button]:border [&>button]:border-current/25",
        ),
        outside: cn(defaultClassNames.outside, "text-muted-foreground opacity-45"),
        disabled: cn(defaultClassNames.disabled, "text-muted-foreground/35"),
        hidden: cn(defaultClassNames.hidden, "invisible"),
        ...classNames,
      }}
      components={{
        Chevron: ({
          orientation,
          className: chevronClassName,
          ...chevronProps
        }) =>
          orientation === "left" ? (
            <ChevronLeft
              className={cn("h-4 w-4", chevronClassName)}
              {...chevronProps}
            />
          ) : (
            <ChevronRight
              className={cn("h-4 w-4", chevronClassName)}
              {...chevronProps}
            />
          ),
        ...components,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
