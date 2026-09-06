"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@kivora/theme";

export type ProgressSize = "sm" | "default" | "lg";

const sizeClasses: Record<ProgressSize, string> = {
  sm: "h-2",
  default: "h-3",
  lg: "h-4"
};

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
  size?: ProgressSize;
}

export const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, indicatorClassName, max = 100, size = "default", value, ...props }, ref) => {
  const numericValue = typeof value === "number" ? value : 0;
  const numericMax = typeof max === "number" && max > 0 ? max : 100;
  const percentage = Math.min(100, Math.max(0, (numericValue / numericMax) * 100));

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-full bg-secondary",
        sizeClasses[size],
        className
      )}
      max={max}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 rounded-full bg-primary transition-transform duration-300 ease-out",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;
