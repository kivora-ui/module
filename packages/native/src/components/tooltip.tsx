import * as React from "react";
import {
  Text,
  type TextProps,
  type PressableProps,
} from "react-native";
import { cn } from "@kivora/theme";
import { Popover, PopoverTrigger, PopoverContent, type PopoverContentProps } from "./popover";

const TooltipContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export interface TooltipProviderProps {
  children?: React.ReactNode;
}

export interface TooltipProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface TooltipTriggerProps extends Omit<PressableProps, "children"> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface TooltipContentProps extends TextProps, Pick<PopoverContentProps,
  "side" | "align" | "sideOffset" | "alignOffset" | "avoidCollisions" | "collisionPadding"> {
  children?: React.ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

export function Tooltip({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
}: TooltipProps) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const current = open ?? internal;
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (open === undefined) setInternal(next);
      onOpenChange?.(next);
    },
    [open, onOpenChange],
  );
  React.useEffect(() => {
    if (!current) return;
    const timer = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(timer);
  }, [current, setOpen]);
  return (
    <TooltipContext.Provider value={{ open: current, setOpen }}>
      <Popover open={current} onOpenChange={setOpen}>{children}</Popover>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  asChild,
  children,
  className,
  ...props
}: TooltipTriggerProps) {
  const context = React.useContext(TooltipContext);
  const longPressed = React.useRef(false);
  const child = asChild ? React.Children.only(children) as React.ReactElement<PressableProps> : null;
  return (
    <PopoverTrigger
      asChild={asChild}
      accessibilityRole="button"
      className={className ?? (asChild ? child?.props.className : "min-h-12 justify-center")}
      {...props}
      onPressIn={(event) => {
        longPressed.current = false;
        child?.props.onPressIn?.(event);
        props.onPressIn?.(event);
      }}
      onPress={(event) => {
        props.onPress?.(event);
        if (longPressed.current) event.preventDefault();
      }}
      onLongPress={(event) => {
        longPressed.current = true;
        child?.props.onLongPress?.(event);
        props.onLongPress?.(event);
        if (!event.defaultPrevented) context?.setOpen(true);
      }}
    >
      {children}
    </PopoverTrigger>
  );
}

export function TooltipContent({ className, side = "top", align, sideOffset = 6,
  alignOffset, avoidCollisions, collisionPadding, ...props }: TooltipContentProps) {
  return (
    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}
      avoidCollisions={avoidCollisions} collisionPadding={collisionPadding}
      className="w-auto rounded-md border-primary bg-primary px-3 py-1.5 shadow-md">
    <Text
      accessibilityLiveRegion="polite"
      className={cn("max-w-xs text-xs text-primary-foreground", className)}
      {...props}
    />
    </PopoverContent>
  );
}
