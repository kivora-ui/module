import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@kivora/theme";

export interface ItemGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemGroup = React.forwardRef<HTMLDivElement, ItemGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex w-full flex-col divide-y divide-border/70 rounded-md border border-border/70 bg-background", className)}
      {...props}
    />
  )
);
ItemGroup.displayName = "ItemGroup";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ asChild = false, className, variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          "group/item flex w-full min-w-0 items-start gap-3 rounded-md p-3 text-sm transition-colors",
          variant === "default" && "bg-background",
          variant === "outline" && "border border-border/70 bg-background shadow-sm",
          variant === "ghost" && "hover:bg-accent/60",
          className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = "Item";

export interface ItemHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemHeader = React.forwardRef<HTMLDivElement, ItemHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex min-w-0 items-start gap-3", className)} {...props} />
  )
);
ItemHeader.displayName = "ItemHeader";

export interface ItemMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "icon" | "avatar";
}

export const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "shrink-0 overflow-hidden text-muted-foreground",
        variant === "icon" && "flex h-9 w-9 items-center justify-center rounded-md bg-muted [&>svg]:h-4 [&>svg]:w-4",
        variant === "avatar" && "flex h-10 w-10 items-center justify-center rounded-full bg-muted [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
        className
      )}
      {...props}
    />
  )
);
ItemMedia.displayName = "ItemMedia";

export interface ItemContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemContent = React.forwardRef<HTMLDivElement, ItemContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-w-0 flex-1 space-y-1", className)} {...props} />
  )
);
ItemContent.displayName = "ItemContent";

export interface ItemTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const ItemTitle = React.forwardRef<HTMLHeadingElement, ItemTitleProps>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn("truncate text-sm font-medium leading-none tracking-normal", className)} {...props} />
  )
);
ItemTitle.displayName = "ItemTitle";

export interface ItemDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ItemDescription = React.forwardRef<HTMLParagraphElement, ItemDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("line-clamp-2 text-sm leading-5 text-muted-foreground", className)} {...props} />
  )
);
ItemDescription.displayName = "ItemDescription";

export interface ItemActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemActions = React.forwardRef<HTMLDivElement, ItemActionsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("ml-auto flex shrink-0 items-center gap-2", className)} {...props} />
  )
);
ItemActions.displayName = "ItemActions";

export interface ItemFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemFooter = React.forwardRef<HTMLDivElement, ItemFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground", className)} {...props} />
  )
);
ItemFooter.displayName = "ItemFooter";
