import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type ItemProps = ViewProps;
export const Item: ReturnType<typeof styledView> = styledView(
  "Item",
  "flex-row items-center gap-3 rounded-xl border border-border p-4",
);
export type ItemGroupProps = ViewProps;
export const ItemGroup: ReturnType<typeof styledView> = styledView(
  "ItemGroup",
  "gap-3",
);
export type ItemContentProps = ViewProps;
export const ItemContent: ReturnType<typeof styledView> = styledView(
  "ItemContent",
  "flex-1 gap-1",
);
export type ItemHeaderProps = ViewProps;
export const ItemHeader: ReturnType<typeof styledView> = styledView(
  "ItemHeader",
  "flex-row justify-between gap-2",
);
export type ItemFooterProps = ViewProps;
export const ItemFooter: ReturnType<typeof styledView> = styledView(
  "ItemFooter",
  "flex-row gap-2",
);
export type ItemActionsProps = ViewProps;
export const ItemActions: ReturnType<typeof styledView> = styledView(
  "ItemActions",
  "flex-row gap-2",
);
export type ItemMediaProps = ViewProps;
export const ItemMedia: ReturnType<typeof styledView> = styledView(
  "ItemMedia",
  "h-12 w-12 items-center justify-center rounded-lg bg-muted",
);
export type ItemTitleProps = TextProps;
export const ItemTitle: ReturnType<typeof styledText> = styledText(
  "ItemTitle",
  "font-semibold",
);
export type ItemDescriptionProps = TextProps;
export const ItemDescription: ReturnType<typeof styledText> = styledText(
  "ItemDescription",
  "text-muted-foreground",
);
