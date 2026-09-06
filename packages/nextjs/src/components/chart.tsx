"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@kivora/theme";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
  }
>;

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: ChartConfig;
}

export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ children, className, config = {}, style, ...props }, ref) => {
    const cssVars = Object.fromEntries(
      Object.entries(config)
        .filter(([, item]) => item.color)
        .map(([key, item]) => [`--color-${key}`, item.color])
    ) as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs text-muted-foreground [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-grid_line]:stroke-border/70 [&_.recharts-tooltip-cursor]:stroke-border/70",
          className
        )}
        style={{ ...cssVars, ...style }}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    );
  }
);
ChartContainer.displayName = "ChartContainer";

export interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  formatter?: (value: unknown, name: string) => React.ReactNode;
  label?: React.ReactNode;
  payload?: Array<{ color?: string; dataKey?: string | number; name?: string; value?: unknown }>;
}

export function ChartTooltipContent({
  active,
  className,
  formatter,
  label,
  payload,
  ...props
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className={cn("grid min-w-32 gap-1.5 rounded-md border border-border/70 bg-background px-3 py-2 text-sm shadow-md", className)} {...props}>
      {label ? <div className="font-medium text-foreground">{label}</div> : null}
      <div className="grid gap-1.5">
        {payload.map((item) => {
          const name = String(item.name ?? item.dataKey ?? "");
          return (
            <div key={name} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{name}</span>
              <span className="ml-auto font-medium text-foreground">
                {formatter ? formatter(item.value, name) : String(item.value ?? "")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ChartTooltip = RechartsPrimitive.Tooltip;
export const ChartLegend = RechartsPrimitive.Legend;
