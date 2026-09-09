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
import { ExpansionIndicator } from "./expansion-indicator";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedContent = Animated.View;

type AccordionType = "single" | "multiple";

interface AccordionContextValue {
  collapsible?: boolean;
  disabled?: boolean;
  isOpen: (value: string) => boolean;
  toggle: (value: string) => void;
  type: AccordionType;
}

interface AccordionItemContextValue {
  disabled?: boolean;
  value: string;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);
const AccordionItemContext =
  React.createContext<AccordionItemContextValue | null>(null);

export interface AccordionProps extends Omit<ViewProps, "onChange"> {
  collapsible?: boolean;
  defaultValue?: string | string[];
  disabled?: boolean;
  onValueChange?: (value: string | string[]) => void;
  type?: AccordionType;
  value?: string | string[];
}

const normalizeValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value : value ? [value] : [];

export const Accordion: React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, AccordionProps>(
  (
    {
      children,
      collapsible = false,
      defaultValue,
      disabled,
      onValueChange,
      type = "single",
      value,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(() =>
      normalizeValue(defaultValue),
    );
    const openValues = React.useMemo(
      () => (value === undefined ? internalValue : normalizeValue(value)),
      [value, internalValue],
    );

    const setOpenValues = React.useCallback(
      (nextValues: string[]) => {
        if (
          nextValues.length === openValues.length &&
          nextValues.every((item, i) => item === openValues[i])
        )
          return;
        if (value === undefined) {
          setInternalValue(nextValues);
        }
        onValueChange?.(type === "single" ? (nextValues[0] ?? "") : nextValues);
      },
      [openValues, value, onValueChange, type],
    );

    const context = React.useMemo<AccordionContextValue>(
      () => ({
        collapsible,
        disabled,
        isOpen: (itemValue) => openValues.includes(itemValue),
        toggle: (itemValue) => {
          if (type === "multiple") {
            setOpenValues(
              openValues.includes(itemValue)
                ? openValues.filter(
                    (currentValue) => currentValue !== itemValue,
                  )
                : [...openValues, itemValue],
            );
            return;
          }

          setOpenValues(
            openValues.includes(itemValue) && collapsible ? [] : [itemValue],
          );
        },
        type,
      }),
      [collapsible, disabled, openValues, type, setOpenValues],
    );

    return (
      <AccordionContext.Provider value={context}>
        <View ref={ref} {...props}>
          {children}
        </View>
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

export interface AccordionItemProps extends ViewProps {
  disabled?: boolean;
  value: string;
}

export const AccordionItem: React.ForwardRefExoticComponent<
  AccordionItemProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, AccordionItemProps>(
  ({ children, className, disabled, value, ...props }, ref) => (
    <AccordionItemContext.Provider value={{ disabled, value }}>
      <View
        ref={ref}
        className={cn("border-b border-border", className)}
        {...props}
      >
        {children}
      </View>
    </AccordionItemContext.Provider>
  ),
);
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps extends Omit<
  PressableProps,
  "children"
> {
  children?: React.ReactNode;
  textClassName?: string;
}

export const AccordionTrigger: React.ForwardRefExoticComponent<
  AccordionTriggerProps &
    React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  AccordionTriggerProps
>(({ children, className, disabled, textClassName, ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);
  const isDisabled = disabled || item?.disabled || accordion?.disabled;
  const isOpen = item ? accordion?.isOpen(item.value) : false;

  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityState={{ expanded: !!isOpen, disabled: !!isDisabled }}
      className={cn(
        "flex-row items-center justify-between py-4",
        isDisabled && "opacity-50",
        className,
      )}
      disabled={isDisabled}
      onPress={() => item && accordion?.toggle(item.value)}
      {...props}
    >
      <Text
        className={cn(
          "flex-1 text-sm font-medium text-foreground",
          textClassName,
        )}
      >
        {children}
      </Text>
      <View className="ml-4"><ExpansionIndicator open={!!isOpen} /></View>
    </Pressable>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps extends ViewProps {
  textClassName?: string;
}

export const AccordionContent: React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, AccordionContentProps>(
  ({ children, className, textClassName, ...props }, ref) => {
    const accordion = React.useContext(AccordionContext);
    const item = React.useContext(AccordionItemContext);

    const isOpen = !!item && !!accordion?.isOpen(item.value);
    const [contentHeight, setContentHeight] = React.useState(0);
    const height = useSharedValue(0);

    React.useLayoutEffect(() => {
      height.value = withTiming(isOpen ? contentHeight : 0, {
        duration: 320,
        easing: Easing.inOut(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      });
    }, [isOpen, contentHeight, height]);

    const animatedStyle = useAnimatedStyle(() => ({ height: height.value }));

    return (
      <AnimatedContent
        style={[{ overflow: "hidden" }, animatedStyle]}
        pointerEvents={isOpen ? "auto" : "none"}
        accessibilityElementsHidden={!isOpen}
        importantForAccessibility={isOpen ? "auto" : "no-hide-descendants"}
      >
        {/* Measure independently of the animated height, including padding and
            dynamic children. Keep mounted so closing and rapid reversals work. */}
        <View
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
          onLayout={(event) =>
            setContentHeight(event.nativeEvent.layout.height)
          }
        >
          <View ref={ref} className={cn("pb-4", className)} {...props}>
            {typeof children === "string" ? (
              <Text
                className={cn("text-sm text-muted-foreground", textClassName)}
              >
                {children}
              </Text>
            ) : (
              children
            )}
          </View>
        </View>
      </AnimatedContent>
    );
  },
);
AccordionContent.displayName = "AccordionContent";
