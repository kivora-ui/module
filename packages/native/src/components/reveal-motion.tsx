import * as React from "react";
import { View } from "react-native";
import {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SelectionView } from "./selection-motion";

/** Measure natural content independently of the clipped, animated container. */
export function RevealMotion({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const [contentHeight, setContentHeight] = React.useState(0);
  const height = useSharedValue(0);
  React.useLayoutEffect(() => {
    height.value = withTiming(open ? contentHeight : 0, {
      duration: 200,
      reduceMotion: ReduceMotion.System,
    });
  }, [open, contentHeight, height]);
  const style = useAnimatedStyle(() => ({ height: height.value }));
  return (
    <SelectionView
      style={[{ overflow: "hidden" }, style]}
      pointerEvents={open ? "auto" : "none"}
      accessibilityElementsHidden={!open}
      importantForAccessibility={open ? "auto" : "no-hide-descendants"}
    >
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}
      >
        {children}
      </View>
    </SelectionView>
  );
}
