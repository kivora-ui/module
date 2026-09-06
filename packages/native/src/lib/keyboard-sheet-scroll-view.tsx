import * as React from "react";
import { type ScrollViewProps } from "react-native";
import {
  createBottomSheetScrollableComponent,
  SCROLLABLE_TYPE,
} from "@gorhom/bottom-sheet";
import { KeyboardScrollView } from "../components/keyboard-scroll-view";
import Animated from "react-native-reanimated";

// Let Gorhom coordinate gestures and sizing; KeyboardAwareScrollView keeps the
// focused field visible, including fields near the end of a long sheet.
const ScrollView = createBottomSheetScrollableComponent(
  SCROLLABLE_TYPE.SCROLLVIEW,
  Animated.createAnimatedComponent(KeyboardScrollView),
);

export const KeyboardSheetScrollView = React.memo(ScrollView) as unknown as
  React.ComponentType<ScrollViewProps & { bottomOffset?: number }>;
