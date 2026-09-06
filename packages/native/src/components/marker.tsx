import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type MarkerProps = ViewProps;
export const Marker: ReturnType<typeof styledView> = styledView(
  "Marker",
  "flex-row items-center gap-2 self-start rounded-full bg-muted px-3 py-1",
);
export type MarkerIconProps = ViewProps;
export const MarkerIcon: ReturnType<typeof styledView> = styledView(
  "MarkerIcon",
  "h-5 w-5 items-center justify-center",
);
export type MarkerContentProps = TextProps;
export const MarkerContent: ReturnType<typeof styledText> = styledText(
  "MarkerContent",
  "text-sm font-medium",
);
