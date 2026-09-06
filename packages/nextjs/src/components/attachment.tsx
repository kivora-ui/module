"use client";

import * as React from "react";
import { FileIcon } from "lucide-react";
import { cn } from "@kivora/theme";

export interface AttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number;
}

export const Attachment = React.forwardRef<HTMLDivElement, AttachmentProps>(
  ({ className, progress, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative flex min-w-0 items-center gap-3 rounded-md border border-border/70 bg-background p-3 shadow-sm", className)}
      data-uploading={typeof progress === "number" && progress < 100}
      {...props}
    />
  )
);
Attachment.displayName = "Attachment";

export interface AttachmentMediaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AttachmentMedia = React.forwardRef<HTMLDivElement, AttachmentMediaProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground", className)}
      {...props}
    >
      {children ?? <FileIcon className="h-5 w-5" />}
    </div>
  )
);
AttachmentMedia.displayName = "AttachmentMedia";

export interface AttachmentContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AttachmentContent = React.forwardRef<HTMLDivElement, AttachmentContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex min-w-0 flex-1 flex-col gap-1", className)} {...props} />
  )
);
AttachmentContent.displayName = "AttachmentContent";

export interface AttachmentTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AttachmentTitle = React.forwardRef<HTMLDivElement, AttachmentTitleProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("truncate text-sm font-medium leading-5", className)} {...props} />
  )
);
AttachmentTitle.displayName = "AttachmentTitle";

export interface AttachmentDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AttachmentDescription = React.forwardRef<HTMLDivElement, AttachmentDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("truncate text-xs leading-4 text-muted-foreground", className)} {...props} />
  )
);
AttachmentDescription.displayName = "AttachmentDescription";

export interface AttachmentActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AttachmentActions = React.forwardRef<HTMLDivElement, AttachmentActionsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("ml-auto flex shrink-0 items-center gap-1", className)} {...props} />
  )
);
AttachmentActions.displayName = "AttachmentActions";

export interface AttachmentProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export const AttachmentProgress = React.forwardRef<HTMLDivElement, AttachmentProgressProps>(
  ({ className, value = 0, ...props }, ref) => (
    <div ref={ref} className={cn("mt-1 h-1 shrink-0 overflow-hidden rounded-full bg-muted", className)} {...props}>
      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
);
AttachmentProgress.displayName = "AttachmentProgress";
