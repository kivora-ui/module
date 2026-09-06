import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

export const markerVariants = cva("w-full text-sm text-muted-foreground", {
  variants: {
    variant: {
      default: "inline-flex items-center justify-center gap-2",
      border: "flex items-center gap-2 border-b border-border/70 py-2",
      separator:
        "relative flex items-center justify-center text-xs before:mr-3 before:h-px before:flex-1 before:bg-border/70 after:ml-3 after:h-px after:flex-1 after:bg-border/70"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface MarkerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof markerVariants> {
  asChild?: boolean;
}

export const Marker = React.forwardRef<HTMLDivElement, MarkerProps>(
  ({ asChild = false, className, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(markerVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Marker.displayName = "Marker";

export interface MarkerIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const MarkerIcon = React.forwardRef<HTMLSpanElement, MarkerIconProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn("inline-flex shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4", className)}
      {...props}
    />
  )
);
MarkerIcon.displayName = "MarkerIcon";

export interface MarkerContentProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const MarkerContent = React.forwardRef<HTMLSpanElement, MarkerContentProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("min-w-0 truncate", className)} {...props} />
  )
);
MarkerContent.displayName = "MarkerContent";
