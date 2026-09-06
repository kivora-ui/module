"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

const bubbleVariants = cva(
  "rounded-lg border border-border/70 px-4 py-3 text-sm shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-muted/50 text-foreground",
        primary: "border-primary/20 bg-primary text-primary-foreground",
        outline: "bg-background",
        ghost: "border-transparent bg-transparent shadow-none"
      }
    },
    defaultVariants: { variant: "default" }
  }
);

export interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {}

export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(bubbleVariants({ variant, className }))} {...props} />
  )
);
Bubble.displayName = "Bubble";

export interface BubbleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BubbleContent = React.forwardRef<HTMLDivElement, BubbleContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2 leading-6", className)} {...props} />
  )
);
BubbleContent.displayName = "BubbleContent";
