import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type TypographyH1Props = TextProps;
export const TypographyH1: ReturnType<typeof styledText> = styledText(
  "TypographyH1",
  "text-4xl font-bold",
);
export type TypographyH2Props = TextProps;
export const TypographyH2: ReturnType<typeof styledText> = styledText(
  "TypographyH2",
  "text-3xl font-semibold",
);
export type TypographyH3Props = TextProps;
export const TypographyH3: ReturnType<typeof styledText> = styledText(
  "TypographyH3",
  "text-2xl font-semibold",
);
export type TypographyH4Props = TextProps;
export const TypographyH4: ReturnType<typeof styledText> = styledText(
  "TypographyH4",
  "text-xl font-semibold",
);
export type TypographyPProps = TextProps;
export const TypographyP: ReturnType<typeof styledText> = styledText(
  "TypographyP",
  "leading-7",
);
export type TypographyLeadProps = TextProps;
export const TypographyLead: ReturnType<typeof styledText> = styledText(
  "TypographyLead",
  "text-xl text-muted-foreground",
);
export type TypographyLargeProps = TextProps;
export const TypographyLarge: ReturnType<typeof styledText> = styledText(
  "TypographyLarge",
  "text-lg font-semibold",
);
export type TypographySmallProps = TextProps;
export const TypographySmall: ReturnType<typeof styledText> = styledText(
  "TypographySmall",
  "text-sm",
);
export type TypographyMutedProps = TextProps;
export const TypographyMuted: ReturnType<typeof styledText> = styledText(
  "TypographyMuted",
  "text-muted-foreground",
);
export type TypographyInlineCodeProps = TextProps;
export const TypographyInlineCode: ReturnType<typeof styledText> = styledText(
  "TypographyInlineCode",
  "font-mono bg-muted",
);
export type TypographyBlockquoteProps = TextProps;
export const TypographyBlockquote: ReturnType<typeof styledText> = styledText(
  "TypographyBlockquote",
  "border-l-4 border-border pl-4 italic",
);
export type TypographyListProps = ViewProps;
export const TypographyList: ReturnType<typeof styledView> = styledView(
  "TypographyList",
  "gap-2 pl-4",
);
export type TypographyProps = TextProps;
