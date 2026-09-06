import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
import * as React from "react";
import { Text } from "react-native";
export interface FieldErrorProps extends TextProps {
  errors?: Array<{ message?: string } | undefined>;
}
export function FieldError({ errors, children, ...props }: FieldErrorProps) {
  const message =
    children ??
    [...new Set(errors?.map((e) => e?.message).filter(Boolean))].join(". ");
  return message ? (
    <Text
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      {...props}
      className="text-sm text-destructive"
    >
      {message}
    </Text>
  ) : null;
}
export type FieldProps = ViewProps;
export const Field: ReturnType<typeof styledView> = styledView(
  "Field",
  "gap-2",
);
export type FieldSetProps = ViewProps;
export const FieldSet: ReturnType<typeof styledView> = styledView(
  "FieldSet",
  "gap-4",
);
export type FieldGroupProps = ViewProps;
export const FieldGroup: ReturnType<typeof styledView> = styledView(
  "FieldGroup",
  "gap-4",
);
export type FieldContentProps = ViewProps;
export const FieldContent: ReturnType<typeof styledView> = styledView(
  "FieldContent",
  "flex-1 gap-1",
);
export type FieldLabelProps = TextProps;
export const FieldLabel: ReturnType<typeof styledText> = styledText(
  "FieldLabel",
  "font-medium",
);
export type FieldLegendProps = TextProps;
export const FieldLegend: ReturnType<typeof styledText> = styledText(
  "FieldLegend",
  "text-lg font-semibold",
);
export type FieldDescriptionProps = TextProps;
export const FieldDescription: ReturnType<typeof styledText> = styledText(
  "FieldDescription",
  "text-sm text-muted-foreground",
);
export { Separator as FieldSeparator } from "./separator";
export type { SeparatorProps as FieldSeparatorProps } from "./separator";
