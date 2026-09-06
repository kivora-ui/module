"use client";

import * as React from "react";
import { cn } from "@kivora/theme";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  attached?: boolean;
  orientation?: "horizontal" | "vertical";
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ attached = true, className, orientation = "horizontal", role = "group", ...props }, ref) => (
    <div
      ref={ref}
      role={role}
      data-attached={attached}
      data-orientation={orientation}
      className={cn(
        "inline-flex",
        orientation === "horizontal" && "flex-row",
        orientation === "vertical" && "flex-col",
        !attached && "gap-2",
        attached &&
          orientation === "horizontal" &&
          "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:focus-visible]:relative [&>*:focus-visible]:z-10",
        attached &&
          orientation === "vertical" &&
          "[&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:focus-visible]:relative [&>*:focus-visible]:z-10",
        className
      )}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";
