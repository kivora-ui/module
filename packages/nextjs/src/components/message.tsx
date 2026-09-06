"use client";

import * as React from "react";
import { cn } from "@kivora/theme";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end";
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ align = "start", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full gap-3",
        align === "end" && "flex-row-reverse text-right",
        className
      )}
      data-align={align}
      {...props}
    />
  )
);
Message.displayName = "Message";

export interface MessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageAvatar = React.forwardRef<HTMLDivElement, MessageAvatarProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-auto shrink-0", className)} {...props} />
  )
);
MessageAvatar.displayName = "MessageAvatar";

export interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageContent = React.forwardRef<HTMLDivElement, MessageContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex max-w-[78%] flex-col gap-1.5", className)} {...props} />
  )
);
MessageContent.displayName = "MessageContent";

export interface MessageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageHeader = React.forwardRef<HTMLDivElement, MessageHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2 text-xs text-muted-foreground", className)} {...props} />
  )
);
MessageHeader.displayName = "MessageHeader";

export interface MessageFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageFooter = React.forwardRef<HTMLDivElement, MessageFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2 text-xs text-muted-foreground", className)} {...props} />
  )
);
MessageFooter.displayName = "MessageFooter";

export interface MessageGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageGroup = React.forwardRef<HTMLDivElement, MessageGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
  )
);
MessageGroup.displayName = "MessageGroup";
