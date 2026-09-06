"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@kivora/theme";

export type MenubarProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;

export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center gap-1 rounded-md border border-border/70 bg-background p-1 shadow-sm", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

export const MenubarMenu: React.FC<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>> =
  MenubarPrimitive.Menu;
export const MenubarGroup: React.FC<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Group>> =
  MenubarPrimitive.Group;
export const MenubarPortal: React.FC<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Portal>> =
  MenubarPrimitive.Portal;
export const MenubarRadioGroup: React.FC<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioGroup>> =
  MenubarPrimitive.RadioGroup;
export const MenubarSub: React.FC<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Sub>> =
  MenubarPrimitive.Sub;

export type MenubarTriggerProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-8 select-none items-center rounded-sm px-3 text-sm font-medium outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export interface MenubarContentProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> {}

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(({ align = "start", children, className, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      asChild
      sideOffset={sideOffset}
      {...props}
    >
      <motion.div
        className={cn(
          "z-50 min-w-52 overflow-hidden rounded-md border border-border/70 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, y: -4, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-menubar-content-transform-origin)" }}
        transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MenubarPrimitive.Content>
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

export interface MenubarItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  inset?: boolean;
}

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItemProps
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

export interface MenubarCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> {}

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemProps
>(({ checked, children, className, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

export interface MenubarRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> {}

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemProps
>(({ children, className, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

export interface MenubarLabelProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> {
  inset?: boolean;
}

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabelProps
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

export interface MenubarSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> {}

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border/70", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

export const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-normal text-muted-foreground", className)} {...props} />
);
MenubarShortcut.displayName = "MenubarShortcut";

export interface MenubarSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> {
  inset?: boolean;
}

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(({ children, className, inset, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

export interface MenubarSubContentProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> {}

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ children, className, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.SubContent ref={ref} asChild sideOffset={sideOffset} {...props}>
      <motion.div
        className={cn(
          "z-50 min-w-44 overflow-hidden rounded-md border border-border/70 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, x: -4, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -4, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-menubar-content-transform-origin)" }}
        transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MenubarPrimitive.SubContent>
  </MenubarPrimitive.Portal>
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
