import * as React from "react";
import {
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from "react-native";
import { RevealMotion } from "./reveal-motion";

interface CollapsibleContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(
  null,
);

export interface CollapsibleProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function Collapsible({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  const context = React.useMemo<CollapsibleContextValue>(
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
    <CollapsibleContext.Provider value={context}>
      {children}
    </CollapsibleContext.Provider>
  );
}

export interface CollapsibleTriggerProps extends PressableProps {
  asChild?: boolean;
}

export const CollapsibleTrigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps &
    React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  CollapsibleTriggerProps
>(({ disabled, onPress, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);

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
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export interface CollapsibleContentProps extends ViewProps {
  forceMount?: boolean;
}

export const CollapsibleContent: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, CollapsibleContentProps>(
  ({ forceMount, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext);
    if (forceMount) return <View ref={ref} {...props} />;
    return (
      <RevealMotion open={!!context?.open}>
        <View ref={ref} {...props} />
      </RevealMotion>
    );
  },
);
CollapsibleContent.displayName = "CollapsibleContent";
