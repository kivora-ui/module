import * as React from "react";
import {
  Pressable,
  Text,
  View,
  type PressableProps,
  type TextProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";
import { useAnimatedStyle } from "react-native-reanimated";
import { SelectionView, useSelectionProgress } from "./selection-motion";

interface TabsContextValue {
  value?: string;
  setValue: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs: React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, TabsProps>(
  ({ value, defaultValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = value ?? internalValue;

    const context = React.useMemo<TabsContextValue>(
      () => ({
        value: currentValue,
        setValue: (nextValue) => {
          if (nextValue === currentValue) return;
          if (value === undefined) setInternalValue(nextValue);
          onValueChange?.(nextValue);
        },
      }),
      [currentValue, onValueChange, value],
    );

    return (
      <TabsContext.Provider value={context}>
        <View ref={ref} {...props}>
          {children}
        </View>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

export const TabsList: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("w-full flex-row rounded-md bg-muted p-1", className)}
      {...props}
    />
  ),
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps extends Omit<PressableProps, "children"> {
  value: string;
  children?: React.ReactNode;
  textClassName?: string;
}

export const TabsTrigger: React.ForwardRefExoticComponent<
  TabsTriggerProps & React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, TabsTriggerProps>(
  ({ className, textClassName, value, children, disabled, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const isActive = context?.value === value;
    const progress = useSelectionProgress(isActive);
    const backgroundStyle = useAnimatedStyle(() => ({
      opacity: progress.value,
    }));

    return (
      <Pressable
        ref={ref}
        accessibilityRole="tab"
        accessibilityState={{ selected: isActive, disabled: !!disabled }}
        disabled={disabled}
        className={cn(
          "min-w-0 flex-1 items-center justify-center rounded-sm px-3 py-1.5",
          disabled && "opacity-50",
          className,
        )}
        onPress={() => context?.setValue(value)}
        {...props}
      >
        <SelectionView
          pointerEvents="none"
          className="absolute inset-0 rounded-sm bg-background"
          style={backgroundStyle}
        />
        <Text
          className={cn(
            "text-center text-sm font-medium text-muted-foreground",
            isActive && "text-foreground",
            textClassName,
          )}
        >
          {children}
        </Text>
      </Pressable>
    );
  },
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps extends ViewProps {
  value: string;
}

export const TabsContent: React.ForwardRefExoticComponent<
  TabsContentProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (context?.value !== value) return null;
    return <View ref={ref} className={cn("mt-2", className)} {...props} />;
  },
);
TabsContent.displayName = "TabsContent";
