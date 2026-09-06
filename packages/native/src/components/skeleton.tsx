import * as React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export interface SkeletonProps extends ViewProps {
  animate?: boolean;
}

export const Skeleton: React.ForwardRefExoticComponent<
  SkeletonProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, SkeletonProps>(
  ({ animate = true, className, ...props }, ref) => (
    <View
      ref={ref}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      className={cn("rounded-md bg-muted", animate && "opacity-70", className)}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";
