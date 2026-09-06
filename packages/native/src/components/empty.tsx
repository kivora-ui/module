import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type EmptyProps = ViewProps;
export const Empty: ReturnType<typeof styledView> = styledView(
  "Empty",
  "items-center gap-4 rounded-xl border border-dashed border-border p-6",
);
export type EmptyHeaderProps = ViewProps;
export const EmptyHeader: ReturnType<typeof styledView> = styledView(
  "EmptyHeader",
  "items-center gap-2",
);
export type EmptyContentProps = ViewProps;
export const EmptyContent: ReturnType<typeof styledView> = styledView(
  "EmptyContent",
  "items-center gap-3",
);
export type EmptyFooterProps = ViewProps;
export const EmptyFooter: ReturnType<typeof styledView> = styledView(
  "EmptyFooter",
  "flex-row flex-wrap gap-2",
);
export type EmptyIconProps = ViewProps;
export const EmptyIcon: ReturnType<typeof styledView> = styledView(
  "EmptyIcon",
  "h-12 w-12 items-center justify-center rounded-xl bg-muted",
);
export type EmptyTitleProps = TextProps;
export const EmptyTitle: ReturnType<typeof styledText> = styledText(
  "EmptyTitle",
  "text-xl font-semibold text-center",
);
export type EmptyDescriptionProps = TextProps;
export const EmptyDescription: ReturnType<typeof styledText> = styledText(
  "EmptyDescription",
  "text-muted-foreground text-center",
);
