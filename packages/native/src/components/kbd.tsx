import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type KbdProps = TextProps;
export const Kbd: ReturnType<typeof styledText> = styledText(
  "Kbd",
  "self-start rounded border border-border bg-muted px-2 py-1 font-mono text-sm",
);
