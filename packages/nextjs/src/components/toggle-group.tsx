"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@kivora/theme";
import { toggleVariants, type ToggleProps } from "./toggle";

export type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  attached?: boolean;
};

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ attached = true, className, orientation = "horizontal", ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    orientation={orientation}
    data-attached={attached}
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
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    Pick<ToggleProps, "variant" | "size"> {}

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant = "outline", size, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
