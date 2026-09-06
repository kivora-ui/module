"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@kivora/theme";
import { Dialog, DialogContent, DialogTrigger, type DialogProps } from "./dialog";

export interface CommandProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {}

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

export interface CommandDialogProps extends DialogProps {
  children?: React.ReactNode;
  commandClassName?: string;
  contentClassName?: string;
  shortcut?: boolean;
  shortcutKey?: string;
  trigger?: React.ReactNode;
}

export function CommandDialog({
  children,
  commandClassName,
  contentClassName,
  defaultOpen = false,
  onOpenChange,
  open,
  shortcut = true,
  shortcutKey = "k",
  trigger,
  ...props
}: CommandDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;
  const currentOpenRef = React.useRef(currentOpen);

  React.useEffect(() => {
    currentOpenRef.current = currentOpen;
  }, [currentOpen]);

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open]
  );

  React.useEffect(() => {
    if (!shortcut) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.key.toLowerCase() !== shortcutKey.toLowerCase()) {
        return;
      }

      if (!event.metaKey && !event.ctrlKey) {
        return;
      }

      event.preventDefault();
      setOpen(!currentOpenRef.current);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setOpen, shortcut, shortcutKey]);

  return (
    <Dialog open={currentOpen} onOpenChange={setOpen} {...props}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent className={cn("overflow-hidden p-0 shadow-lg", contentClassName)}>
        <Command className={cn("[&_[cmdk-group-heading]]:px-2", commandClassName)}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

export interface CommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {}

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => (
  <div className="flex h-11 items-center border-b border-border/70 px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

export interface CommandListProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-80 overflow-y-auto overflow-x-hidden p-1", className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

export interface CommandEmptyProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {}

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty ref={ref} className={cn("py-6 text-center text-sm text-muted-foreground", className)} {...props} />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export interface CommandGroupProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {}

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

export interface CommandSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {}

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export interface CommandItemProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

export const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-normal text-muted-foreground", className)} {...props} />
);
CommandShortcut.displayName = "CommandShortcut";
