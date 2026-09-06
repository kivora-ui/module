import * as React from "react";
import { cn } from "@kivora/theme";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animate = true, className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "rounded-md bg-muted",
        animate && "animate-pulse",
        className
      )}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";
