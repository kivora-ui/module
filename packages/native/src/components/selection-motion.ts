import * as React from "react";
import type { ViewProps } from "react-native";
import Animated, {
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Keep the public View type without Reanimated's deeply recursive generated props.
export const SelectionView =
  Animated.View as unknown as React.ComponentType<ViewProps>;

export function useSelectionProgress(checked: boolean) {
  const progress = useSharedValue(checked ? 1 : 0);
  // Synchronize before paint instead of waiting for passive effects after a
  // potentially expensive parent render. The animation itself runs on the UI thread.
  React.useLayoutEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: 120,
      reduceMotion: ReduceMotion.System,
    });
  }, [checked, progress]);
  return progress;
}
