import * as React from "react";
import Animated, {
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const SelectionView: typeof Animated.View = Animated.View;

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
