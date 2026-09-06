import { RevealMotion } from "./reveal-motion";
import * as React from "react";
import {
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";

interface HoverCardContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HoverCardContext = React.createContext<HoverCardContextValue | null>(
  null,
);

export interface HoverCardProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function HoverCard({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}: HoverCardProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  const context = React.useMemo<HoverCardContextValue>(
    () => ({
      open: currentOpen,
      setOpen: (nextOpen) => {
        if (open === undefined) {
          setInternalOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
      },
    }),
    [currentOpen, onOpenChange, open],
  );

  return (
    <HoverCardContext.Provider value={context}>
      {children}
    </HoverCardContext.Provider>
  );
}

export interface HoverCardTriggerProps extends PressableProps {
  asChild?: boolean;
}

export const HoverCardTrigger: React.ForwardRefExoticComponent<
  HoverCardTriggerProps &
    React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  HoverCardTriggerProps
>(({ disabled, onPress, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);

  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityState={{ expanded: !!context?.open, disabled: !!disabled }}
      disabled={disabled}
      onPress={(event) => {
        context?.setOpen(!context.open);
        onPress?.(event);
      }}
      {...props}
    />
  );
});
HoverCardTrigger.displayName = "HoverCardTrigger";

export interface HoverCardContentProps extends ViewProps {}

export const HoverCardContent: React.ForwardRefExoticComponent<
  HoverCardContentProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, HoverCardContentProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(HoverCardContext);

    return (
      <RevealMotion open={!!context?.open}>
        <View
          ref={ref}
          className={cn(
            "mt-2 w-full rounded-md border border-border bg-popover p-4 shadow-md",
            className,
          )}
          {...props}
        />
      </RevealMotion>
    );
  },
);
HoverCardContent.displayName = "HoverCardContent";
