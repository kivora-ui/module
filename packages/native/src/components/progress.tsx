import * as React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";
import {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SelectionView } from "./selection-motion";

export type ProgressSize = "sm" | "default" | "lg";

const sizeClasses: Record<ProgressSize, string> = {
  sm: "h-2",
  default: "h-3",
  lg: "h-4",
};

export interface ProgressProps extends ViewProps {
  indicatorClassName?: string;
  max?: number;
  size?: ProgressSize;
  value?: number | null;
}

export const Progress: React.ForwardRefExoticComponent<
  ProgressProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ProgressProps>(
  (
    {
      className,
      indicatorClassName,
      max = 100,
      size = "default",
      value,
      ...props
    },
    ref,
  ) => {
    const numericValue = typeof value === "number" ? value : 0;
    const numericMax = max > 0 ? max : 100;
    const percentage = Math.min(
      100,
      Math.max(0, (numericValue / numericMax) * 100),
    );
    const progress = useSharedValue(percentage);
    React.useLayoutEffect(() => {
      progress.value = withTiming(percentage, {
        duration: 120,
        reduceMotion: ReduceMotion.System,
      });
    }, [percentage, progress]);
    const indicatorStyle = useAnimatedStyle(() => ({
      width: `${progress.value}%` as `${number}%`,
    }));

    return (
      <View
        ref={ref}
        accessibilityRole="progressbar"
        accessibilityValue={{ max: numericMax, min: 0, now: numericValue }}
        className={cn(
          "w-full overflow-hidden rounded-full bg-secondary",
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        <SelectionView
          className={cn("h-full rounded-full bg-primary", indicatorClassName)}
          style={indicatorStyle}
        />
      </View>
    );
  },
);
Progress.displayName = "Progress";
