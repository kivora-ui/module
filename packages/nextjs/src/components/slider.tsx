"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@kivora/theme";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  formatValue?: (value: number, index: number, values: number[]) => React.ReactNode;
  rangeClassName?: string;
  showValue?: boolean;
  thumbClassName?: string;
  valueLabelClassName?: string;
  trackClassName?: string;
}

export const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      formatValue = (currentValue) => currentValue,
      max = 100,
      min = 0,
      onValueChange,
      rangeClassName,
      showValue = false,
      thumbClassName,
      trackClassName,
      value,
      valueLabelClassName,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? [min]);
    const currentValue = value ?? internalValue;
    const numericMax = typeof max === "number" ? max : 100;
    const numericMin = typeof min === "number" ? min : 0;

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          showValue && "pt-7",
          className
        )}
        max={max}
        min={min}
        value={value}
        defaultValue={defaultValue}
        onValueChange={(nextValue) => {
          if (value === undefined) {
            setInternalValue(nextValue);
          }
          onValueChange?.(nextValue);
        }}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
            trackClassName
          )}
        >
          <SliderPrimitive.Range className={cn("absolute h-full bg-primary", rangeClassName)} />
        </SliderPrimitive.Track>
        {currentValue.map((thumbValue, index) => {
          const percentage =
            numericMax > numericMin
              ? Math.min(100, Math.max(0, ((thumbValue - numericMin) / (numericMax - numericMin)) * 100))
              : 0;

          return (
            <SliderPrimitive.Thumb
              key={index}
              aria-label={props['aria-label']}
              aria-labelledby={props['aria-labelledby']}
              className={cn(
                "relative block h-5 w-5 rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                thumbClassName
              )}
            >
              {showValue ? (
                <span
                  className={cn(
                    "pointer-events-none absolute bottom-full left-1/2 mb-2 min-w-8 -translate-x-1/2 rounded-md border border-border bg-popover px-2 py-1 text-center text-xs font-medium text-popover-foreground shadow-sm",
                    percentage <= 8 && "left-0 translate-x-0",
                    percentage >= 92 && "left-auto right-0 translate-x-0",
                    valueLabelClassName
                  )}
                >
                  {formatValue(thumbValue, index, currentValue)}
                </span>
              ) : null}
            </SliderPrimitive.Thumb>
          );
        })}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;
