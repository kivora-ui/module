import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type ButtonGroupProps = ViewProps;
export const ButtonGroup: ReturnType<typeof styledView> = styledView(
  "ButtonGroup",
  "flex-row flex-wrap items-center gap-1",
);
