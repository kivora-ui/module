import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type BubbleProps = ViewProps;
export const Bubble: ReturnType<typeof styledView> = styledView(
  "Bubble",
  "self-start max-w-full rounded-2xl bg-muted p-3",
);
export type BubbleContentProps = TextProps;
export const BubbleContent: ReturnType<typeof styledText> = styledText(
  "BubbleContent",
  "",
);
