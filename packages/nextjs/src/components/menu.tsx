"use client";

import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import * as BarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";

type DropdownProps = React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Root>;
export type MenuProps =
  | (DropdownProps & { variant?: "dropdown" })
  | (React.ComponentPropsWithoutRef<typeof BarPrimitive.Root> & { variant: "bar" });
const MenuContext = React.createContext({ variant: "dropdown" as "dropdown" | "bar", open: false });

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  if (props.variant === "bar") {
    const { variant, className, ...rest } = props;
    return <MenuContext.Provider value={{ variant, open: true }}>
      <BarPrimitive.Root ref={ref} className={cn("flex h-10 items-center gap-1 rounded-md border border-border/70 bg-background p-1 shadow-sm", className)} {...rest} />
    </MenuContext.Provider>;
  }
  const { variant, ...rest } = props;
  return <DropdownRoot {...rest} />;
});

function DropdownRoot({ defaultOpen = false, open, onOpenChange, ...props }: DropdownProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;
  return <MenuContext.Provider value={{ variant: "dropdown", open: currentOpen }}>
    <DropdownPrimitive.Root {...props} open={currentOpen} onOpenChange={(nextOpen) => {
      if (open === undefined) setInternalOpen(nextOpen);
      onOpenChange?.(nextOpen);
    }} />
  </MenuContext.Provider>;
}

/** One top-level dropdown inside Menu variant="bar". */
export const MenuDropdown: React.FC<React.ComponentPropsWithoutRef<typeof BarPrimitive.Menu>> = BarPrimitive.Menu;

const RoutedTrigger = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Trigger : DropdownPrimitive.Trigger;
  return <Primitive ref={ref} {...props} />;
});
const RoutedGroup = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Group>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Group>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Group : DropdownPrimitive.Group;
  return <Primitive ref={ref} {...props} />;
});
const RoutedContent = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Content : DropdownPrimitive.Content;
  return <Primitive ref={ref} {...props} />;
});
const RoutedItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Item : DropdownPrimitive.Item;
  return <Primitive ref={ref} {...props} />;
});
const RoutedCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.CheckboxItem : DropdownPrimitive.CheckboxItem;
  return <Primitive ref={ref} {...props} />;
});
const RoutedRadioItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.RadioItem>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.RadioItem : DropdownPrimitive.RadioItem;
  return <Primitive ref={ref} {...props} />;
});
const RoutedLabel = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Label>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Label : DropdownPrimitive.Label;
  return <Primitive ref={ref} {...props} />;
});
const RoutedSeparator = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Separator : DropdownPrimitive.Separator;
  return <Primitive ref={ref} {...props} />;
});
const RoutedSubTrigger = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.SubTrigger>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.SubTrigger : DropdownPrimitive.SubTrigger;
  return <Primitive ref={ref} {...props} />;
});
const RoutedSubContent = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.SubContent : DropdownPrimitive.SubContent;
  return <Primitive ref={ref} {...props} />;
});
const RoutedItemIndicator = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.ItemIndicator>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.ItemIndicator>>((props, ref) => {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.ItemIndicator : DropdownPrimitive.ItemIndicator;
  return <Primitive ref={ref} {...props} />;
});
function RoutedPortal(props: React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Portal>) {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Portal : DropdownPrimitive.Portal;
  return <Primitive {...props} />;
}
function RoutedSub(props: React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Sub>) {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.Sub : DropdownPrimitive.Sub;
  return <Primitive {...props} />;
}
function RoutedRadioGroup(props: React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioGroup>) {
  const { variant } = React.useContext(MenuContext);
  const Primitive = variant === "bar" ? BarPrimitive.RadioGroup : DropdownPrimitive.RadioGroup;
  return <Primitive {...props} />;
}
const MenuPrimitive = { Trigger: RoutedTrigger, Group: RoutedGroup, Content: RoutedContent, Item: RoutedItem, CheckboxItem: RoutedCheckboxItem, RadioItem: RoutedRadioItem, Label: RoutedLabel, Separator: RoutedSeparator, SubTrigger: RoutedSubTrigger, SubContent: RoutedSubContent, ItemIndicator: RoutedItemIndicator, Portal: RoutedPortal, Sub: RoutedSub, RadioGroup: RoutedRadioGroup };

export type MenuTriggerProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger>;
export const MenuTrigger = React.forwardRef<React.ElementRef<typeof MenuPrimitive.Trigger>, MenuTriggerProps>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(MenuContext);
  return <MenuPrimitive.Trigger ref={ref} className={cn(variant === "bar" && "flex h-8 select-none items-center rounded-sm px-3 text-sm font-medium outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent", className)} {...props} />;
});
export const MenuGroup = MenuPrimitive.Group;
export const MenuPortal = MenuPrimitive.Portal;
export const MenuSub = MenuPrimitive.Sub;
export const MenuRadioGroup = MenuPrimitive.RadioGroup;

export interface MenuContentProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content> {}

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  MenuContentProps
>(({ align = "center", children, className, sideOffset = 8, ...props }, ref) => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("MenuContent must be used within Menu");
  }

  return (
    <AnimatePresence>
      {context.open ? (
        <MenuPrimitive.Portal forceMount={context.variant === "dropdown" ? true : undefined}>
          <MenuPrimitive.Content
            ref={ref}
            align={align}
            asChild
            forceMount={context.variant === "dropdown" ? true : undefined}
            sideOffset={sideOffset}
            {...props}
          >
            <motion.div
              className={cn(
                "z-50 min-w-52 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
                className
              )}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              style={{ transformOrigin: "var(--radix-dropdown-menu-content-transform-origin, var(--radix-menubar-content-transform-origin))" }}
              transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </MenuPrimitive.Content>
        </MenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  );
});
MenuContent.displayName = MenuPrimitive.Content.displayName;

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> {
  inset?: boolean;
}

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  MenuItemProps
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenuItem.displayName = MenuPrimitive.Item.displayName;

export interface MenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem> {}

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  MenuCheckboxItemProps
>(({ children, className, checked, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenuPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuPrimitive.CheckboxItem>
));
MenuCheckboxItem.displayName = MenuPrimitive.CheckboxItem.displayName;

export interface MenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem> {}

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  MenuRadioItemProps
>(({ children, className, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenuPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuPrimitive.RadioItem>
));
MenuRadioItem.displayName = MenuPrimitive.RadioItem.displayName;

export interface MenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label> {
  inset?: boolean;
}

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Label>,
  MenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}
    {...props}
  />
));
MenuLabel.displayName = MenuPrimitive.Label.displayName;

export interface MenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator> {}

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  MenuSeparatorProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
MenuSeparator.displayName = MenuPrimitive.Separator.displayName;

export const MenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-normal text-muted-foreground", className)} {...props} />
);
MenuShortcut.displayName = "MenuShortcut";

export interface MenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger> {
  inset?: boolean;
}

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubTrigger>,
  MenuSubTriggerProps
>(({ children, className, inset, ...props }, ref) => (
  <MenuPrimitive.SubTrigger
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
  </MenuPrimitive.SubTrigger>
));
MenuSubTrigger.displayName = MenuPrimitive.SubTrigger.displayName;

export interface MenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent> {}

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubContent>,
  MenuSubContentProps
>(({ children, className, sideOffset = 8, ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.SubContent ref={ref} asChild sideOffset={sideOffset} {...props}>
      <motion.div
        className={cn(
          "z-50 min-w-44 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-dropdown-menu-content-transform-origin, var(--radix-menubar-content-transform-origin))" }}
        transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MenuPrimitive.SubContent>
  </MenuPrimitive.Portal>
));
MenuSubContent.displayName = MenuPrimitive.SubContent.displayName;
