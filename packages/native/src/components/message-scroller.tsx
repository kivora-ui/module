import { useReducedMotion } from "react-native-reanimated";
import * as React from "react";
import { ScrollView, type ScrollViewProps } from "react-native";
export interface MessageScrollerProps extends ScrollViewProps {
  autoScroll?: boolean;
}
export function MessageScroller({
  autoScroll = true,
  onScroll,
  onContentSizeChange,
  ...props
}: MessageScrollerProps) {
  const ref = React.useRef<React.ComponentRef<typeof ScrollView>>(null);
  const atEnd = React.useRef(true);
  const reducedMotion = useReducedMotion();
  return (
    <ScrollView
      {...props}
      ref={ref}
      scrollEventThrottle={16}
      onScroll={(event) => {
        const { contentOffset, contentSize, layoutMeasurement } =
          event.nativeEvent;
        atEnd.current =
          contentOffset.y + layoutMeasurement.height >= contentSize.height - 48;
        onScroll?.(event);
      }}
      onContentSizeChange={(w, h) => {
        if (autoScroll && atEnd.current)
          ref.current?.scrollToEnd({ animated: !reducedMotion });
        onContentSizeChange?.(w, h);
      }}
    />
  );
}
