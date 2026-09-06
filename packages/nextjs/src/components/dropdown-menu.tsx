"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";

interface DropdownMenuContextValue {
  open: boolean;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(null);

export type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>;

export function DropdownMenu({
  defaultOpen = false,
  open,
  onOpenChange,
  ...props
}: DropdownMenuProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <DropdownMenuContext.Provider value={{ open: currentOpen }}>
      <DropdownMenuPrimitive.Root
        open={currentOpen}
        onOpenChange={(nextOpen) => {
          if (open === undefined) {
            setInternalOpen(nextOpen);
          }
          onOpenChange?.(nextOpen);
        }}
        {...props}
      />
    </DropdownMenuContext.Provider>
  );
}

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {}

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ align = "center", children, className, sideOffset = 8, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu");
  }

  return (
    <AnimatePresence>
      {context.open ? (
        <DropdownMenuPrimitive.Portal forceMount>
          <DropdownMenuPrimitive.Content
            ref={ref}
            align={align}
            asChild
            forceMount
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
              style={{ transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)" }}
              transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  );
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {}

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ children, className, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean;
}

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-normal text-muted-foreground", className)} {...props} />
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ children, className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
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
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ children, className, sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent ref={ref} asChild sideOffset={sideOffset} {...props}>
      <motion.div
        className={cn(
          "z-50 min-w-44 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        style={{ transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)" }}
        transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </DropdownMenuPrimitive.SubContent>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
