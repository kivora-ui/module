import type { ViewProps, TextProps } from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type MessageProps = ViewProps;
export const Message: ReturnType<typeof styledView> = styledView(
  "Message",
  "flex-row gap-3",
);
export type MessageGroupProps = ViewProps;
export const MessageGroup: ReturnType<typeof styledView> = styledView(
  "MessageGroup",
  "gap-4",
);
export type MessageHeaderProps = ViewProps;
export const MessageHeader: ReturnType<typeof styledView> = styledView(
  "MessageHeader",
  "flex-row items-center gap-2",
);
export type MessageContentProps = ViewProps;
export const MessageContent: ReturnType<typeof styledView> = styledView(
  "MessageContent",
  "flex-1 gap-2",
);
export type MessageFooterProps = ViewProps;
export const MessageFooter: ReturnType<typeof styledView> = styledView(
  "MessageFooter",
  "flex-row gap-2",
);
export { Avatar as MessageAvatar } from "./avatar";
export type MessageAvatarProps = ViewProps;
