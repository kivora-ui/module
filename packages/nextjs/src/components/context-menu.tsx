"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@kivora/theme";

export type ContextMenuProps = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root>;

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export interface ContextMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {}

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content ref={ref} asChild {...props}>
      <motion.div
        className={cn(
          "z-50 min-w-52 overflow-hidden rounded-md border border-border/70 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-context-menu-content-transform-origin)" }}
        transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </ContextMenuPrimitive.Content>
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export interface ContextMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
}

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

export interface ContextMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {}

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ checked, children, className, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

export interface ContextMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {}

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemProps
>(({ children, className, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

export interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

export interface ContextMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {}

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

export const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-normal text-muted-foreground", className)} {...props} />
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

export const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ children, className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

export interface ContextMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {}

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.SubContent ref={ref} asChild {...props}>
      <motion.div
        className={cn(
          "z-50 min-w-44 overflow-hidden rounded-md border border-border/70 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-context-menu-content-transform-origin)" }}
        transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </ContextMenuPrimitive.SubContent>
  </ContextMenuPrimitive.Portal>
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
