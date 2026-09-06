import * as React from "react";
import { cn } from "@kivora/theme";

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, size = "md", ...props }, ref) => (
    <div
      ref={ref}
      data-size={size}
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-md border border-dashed border-border/70 bg-background text-center",
        size === "sm" && "min-h-40 gap-3 p-6",
        size === "md" && "min-h-56 gap-4 p-8",
        size === "lg" && "min-h-72 gap-5 p-10",
        className
      )}
      {...props}
    />
  )
);
Empty.displayName = "Empty";

export const EmptyHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col items-center gap-2", className)} {...props} />
  )
);
EmptyHeader.displayName = "EmptyHeader";

export const EmptyIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-md bg-muted text-muted-foreground [&>svg]:h-6 [&>svg]:w-6",
        className
      )}
      {...props}
    />
  )
);
EmptyIcon.displayName = "EmptyIcon";

export const EmptyTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-base font-semibold leading-none tracking-normal", className)} {...props} />
  )
);
EmptyTitle.displayName = "EmptyTitle";

export const EmptyDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("max-w-sm text-sm leading-relaxed text-muted-foreground", className)} {...props} />
  )
);
EmptyDescription.displayName = "EmptyDescription";

export const EmptyContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex w-full max-w-sm flex-col items-center gap-3", className)} {...props} />
  )
);
EmptyContent.displayName = "EmptyContent";

export const EmptyFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-wrap items-center justify-center gap-2", className)} {...props} />
  )
);
EmptyFooter.displayName = "EmptyFooter";
