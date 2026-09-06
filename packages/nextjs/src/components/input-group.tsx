"use client";

import * as React from "react";
import { cn } from "@kivora/theme";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  size?: "sm" | "default" | "lg";
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, invalid, size = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="input-group"
      aria-invalid={invalid}
      data-size={size}
      className={cn(
        "group flex w-full items-stretch overflow-hidden rounded-md border border-input bg-background text-sm shadow-sm transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background aria-invalid:border-destructive aria-invalid:focus-within:ring-destructive",
        size === "sm" && "h-9",
        size === "default" && "h-10",
        size === "lg" && "h-11",
        "[&_input]:h-full [&_input]:min-w-0 [&_input]:flex-1 [&_input]:border-0 [&_input]:py-0 [&_input]:shadow-none [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0",
        "[&_input:not(:first-child)]:rounded-l-none [&_input:not(:last-child)]:rounded-r-none",
        className
      )}
      {...props}
    />
  )
);
InputGroup.displayName = "InputGroup";

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
}

export const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, side = "left", ...props }, ref) => (
    <div
      ref={ref}
      data-side={side}
      className={cn(
        "flex min-w-10 shrink-0 items-center justify-center gap-2 self-stretch px-3 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4",
        side === "left" && "border-r border-border/70",
        side === "right" && "border-l border-border/70",
        className
      )}
      {...props}
    />
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

export interface InputGroupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  side?: "left" | "right";
}

export const InputGroupButton = React.forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ className, side = "right", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      data-side={side}
      className={cn(
        "inline-flex min-w-10 shrink-0 items-center justify-center gap-2 self-stretch px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:h-4 [&>svg]:w-4",
        side === "left" && "border-r border-border/70",
        side === "right" && "border-l border-border/70",
        className
      )}
      {...props}
    />
  )
);
InputGroupButton.displayName = "InputGroupButton";
