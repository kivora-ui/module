"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@kivora/theme";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  invalid?: boolean;
}

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, invalid, "aria-invalid": ariaInvalid, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    aria-invalid={ariaInvalid ?? invalid}
    className={cn(
      "aspect-square h-4 w-4 rounded-full border border-primary bg-background shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
