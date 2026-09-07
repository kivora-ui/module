import * as React from "react";
import { View } from "react-native";
import { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SelectionView } from "./selection-motion";

export function ExpansionIndicator({ open }: { open: boolean }) {
  const progress = useSharedValue(open ? 1 : 0);
  React.useLayoutEffect(() => {
    progress.value = withTiming(open ? 1 : 0, {
      duration: 320,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [open, progress]);
  const style = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));
  return (
    <SelectionView accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" className="h-5 w-5 shrink-0 items-center justify-center" style={style}>
      <View className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-muted-foreground" />
    </SelectionView>
  );
}
