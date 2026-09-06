"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-border/70 bg-background shadow-sm hover:bg-accent",
        ghost: "bg-transparent hover:bg-accent"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ToggleProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, "children">,
    VariantProps<typeof toggleVariants> {
  /** Static content or a function that renders content for the current pressed state. */
  children?: React.ReactNode | ((pressed: boolean) => React.ReactNode);
}

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, children, pressed, defaultPressed = false, onPressedChange, ...props }, ref) => {
  const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
  const isPressed = pressed ?? internalPressed;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      pressed={isPressed}
      onPressedChange={(nextPressed) => {
        if (pressed === undefined) setInternalPressed(nextPressed);
        onPressedChange?.(nextPressed);
      }}
      {...props}
    >
      {typeof children === "function" ? children(isPressed) : children}
    </TogglePrimitive.Root>
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;
