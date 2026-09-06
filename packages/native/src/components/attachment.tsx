import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type AttachmentProps = ViewProps;
export const Attachment: ReturnType<typeof styledView> = styledView(
  "Attachment",
  "flex-row items-center gap-3 rounded-xl border border-border p-3",
);
export type AttachmentMediaProps = ViewProps;
export const AttachmentMedia: ReturnType<typeof styledView> = styledView(
  "AttachmentMedia",
  "h-12 w-12 items-center justify-center rounded-lg bg-muted",
);
export type AttachmentContentProps = ViewProps;
export const AttachmentContent: ReturnType<typeof styledView> = styledView(
  "AttachmentContent",
  "flex-1 gap-1",
);
export type AttachmentActionsProps = ViewProps;
export const AttachmentActions: ReturnType<typeof styledView> = styledView(
  "AttachmentActions",
  "flex-row gap-2",
);
export type AttachmentTitleProps = TextProps;
export const AttachmentTitle: ReturnType<typeof styledText> = styledText(
  "AttachmentTitle",
  "font-semibold",
);
export type AttachmentDescriptionProps = TextProps;
export const AttachmentDescription: ReturnType<typeof styledText> = styledText(
  "AttachmentDescription",
  "text-sm text-muted-foreground",
);
export { Progress as AttachmentProgress } from "./progress";
export type { ProgressProps as AttachmentProgressProps } from "./progress";
