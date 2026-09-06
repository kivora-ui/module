import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type InputGroupProps = ViewProps;
export const InputGroup: ReturnType<typeof styledView> = styledView(
  "InputGroup",
  "flex-row items-center gap-2 rounded-lg border border-input bg-background px-3",
);
export type InputGroupAddonProps = ViewProps;
export const InputGroupAddon: ReturnType<typeof styledView> = styledView(
  "InputGroupAddon",
  "flex-row items-center justify-center",
);
export { Button as InputGroupButton } from "./button";
export type { ButtonProps as InputGroupButtonProps } from "./button";
