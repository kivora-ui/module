"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@kivora/theme";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary" | "destructive";
}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ children, className, showArrow, sideOffset = 6, size = "md", variant = "default", ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      data-size={size}
      data-variant={variant}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-w-xs overflow-hidden rounded-md border text-xs shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
        size === "sm" && "px-2 py-1",
        size === "md" && "px-3 py-1.5",
        size === "lg" && "px-3.5 py-2 text-sm",
        variant === "default" && "border-primary bg-primary text-primary-foreground",
        variant === "secondary" && "border-border/70 bg-popover text-popover-foreground",
        variant === "destructive" && "border-destructive bg-destructive text-destructive-foreground",
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <TooltipPrimitive.Arrow
          className={cn(
            "fill-current",
            variant === "default" && "text-primary",
            variant === "secondary" && "text-popover",
            variant === "destructive" && "text-destructive"
          )}
        />
      ) : null}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
