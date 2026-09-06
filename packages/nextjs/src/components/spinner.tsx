import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@kivora/theme";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "muted" | "primary" | "destructive";
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, label = "Loading", size = "md", variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      aria-label={label}
      role="status"
      data-size={size}
      data-variant={variant}
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        variant === "default" && "text-current",
        variant === "muted" && "text-muted-foreground",
        variant === "primary" && "text-primary",
        variant === "destructive" && "text-destructive",
        className
      )}
      {...props}
    >
      <LoaderCircle
        aria-hidden="true"
        className={cn(
          "animate-spin",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-5 w-5",
          size === "lg" && "h-6 w-6"
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  )
);
Spinner.displayName = "Spinner";
