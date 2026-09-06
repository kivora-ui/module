"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@kivora/theme";

export const Tabs = TabsPrimitive.Root;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "underline" | "pills";
}

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, fullWidth, size = "md", variant = "default", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-size={size}
    data-variant={variant}
    className={cn(
      "inline-flex items-center justify-center text-muted-foreground data-[orientation=vertical]:items-stretch",
      fullWidth && "grid w-full auto-cols-fr grid-flow-col data-[orientation=vertical]:auto-rows-fr data-[orientation=vertical]:grid-flow-row",
      variant === "default" && "h-10 rounded-md bg-muted p-1",
      variant === "pills" && "gap-1 rounded-lg border border-border/70 bg-background p-1 shadow-sm",
      variant === "underline" &&
        "mb-3 gap-4 border-b border-border/70 data-[orientation=vertical]:mb-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-1 data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r data-[orientation=vertical]:pr-3",
      size === "sm" && variant !== "underline" && "h-9",
      size === "lg" && variant !== "underline" && "h-11",
      variant !== "underline" && "data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "underline" | "pills";
}

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, size = "md", variant = "default", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-size={size}
    data-variant={variant}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      size === "sm" && "px-2.5 py-1 text-xs",
      size === "md" && "px-3 py-1.5",
      size === "lg" && "px-4 py-2",
      variant === "default" &&
        "rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      variant === "pills" &&
        "rounded-md hover:bg-muted/70 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",
      variant === "underline" &&
        "-mb-px border-b-2 border-transparent px-0 pb-2 pt-1 text-muted-foreground hover:text-foreground data-[orientation=vertical]:-mr-[2px] data-[orientation=vertical]:mb-0 data-[orientation=vertical]:w-[calc(100%+2px)] data-[orientation=vertical]:justify-start data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:px-3 data-[orientation=vertical]:py-2 data-[state=active]:border-primary data-[state=active]:text-foreground",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[orientation=vertical]:mt-0",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
