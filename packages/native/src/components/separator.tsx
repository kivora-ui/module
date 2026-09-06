import * as React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export interface SeparatorProps extends ViewProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export const Separator: React.ForwardRefExoticComponent<
  SeparatorProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <View
      ref={ref}
      accessibilityRole={decorative ? "none" : "adjustable"}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";
