import * as React from "react";
import {
  Pressable,
  Text,
  View,
  type PressableProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";
import { useAnimatedStyle } from "react-native-reanimated";
import { SelectionView, useSelectionProgress } from "./selection-motion";

interface RadioGroupContextValue {
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  value?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null,
);

export interface RadioGroupProps extends Omit<ViewProps, "onChange"> {
  defaultValue?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  value?: string;
}

export const RadioGroup: React.ForwardRefExoticComponent<
  RadioGroupProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, RadioGroupProps>(
  (
    { className, defaultValue, disabled, onValueChange, value, ...props },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const selectedValue = value ?? internalValue;

    const context = React.useMemo<RadioGroupContextValue>(
      () => ({
        disabled,
        value: selectedValue,
        onValueChange: (nextValue) => {
          if (value === undefined) {
            setInternalValue(nextValue);
          }
          onValueChange?.(nextValue);
        },
      }),
      [disabled, selectedValue, value, onValueChange],
    );
    return (
      <RadioGroupContext.Provider value={context}>
        <View ref={ref} className={cn("gap-2", className)} {...props} />
      </RadioGroupContext.Provider>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps extends Omit<PressableProps, "onPress"> {
  invalid?: boolean;
  value: string;
  /** Makes the label and indicator one accessible, pressable option. */
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

export const RadioGroupItem: React.ForwardRefExoticComponent<
  RadioGroupItemProps &
    React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, RadioGroupItemProps>(
  (
    {
      className,
      disabled,
      invalid,
      value,
      label,
      labelClassName,
      containerClassName,
      accessibilityLabel,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(RadioGroupContext);
    const isDisabled = disabled || context?.disabled;
    const isChecked = context?.value === value;
    const progress = useSelectionProgress(isChecked);
    const indicatorStyle = useAnimatedStyle(() => ({
      opacity: progress.value,
      transform: [{ scale: 0.7 + progress.value * 0.3 }],
    }));
    const controlClass = cn(
      "h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background",
      invalid && "border-destructive",
      className,
    );
    const indicator = (
      <SelectionView
        pointerEvents="none"
        className="h-2 w-2 rounded-full bg-primary"
        style={indicatorStyle}
      />
    );

    return (
      <Pressable
        ref={ref}
        {...props}
        accessibilityRole="radio"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ checked: isChecked, disabled: !!isDisabled }}
        disabled={isDisabled}
        className={cn(
          label !== undefined
            ? "min-h-12 flex-row items-center gap-3"
            : controlClass,
          containerClassName,
          isDisabled && "opacity-50",
        )}
        onPress={() => {
          if (!isDisabled && !isChecked) context?.onValueChange?.(value);
        }}
      >
        {label !== undefined ? (
          <>
            <View pointerEvents="none" className={controlClass}>
              {indicator}
            </View>
            <Text
              className={cn("flex-1 text-base text-foreground", labelClassName)}
            >
              {label}
            </Text>
          </>
        ) : (
          indicator
        )}
      </Pressable>
    );
  },
);
RadioGroupItem.displayName = "RadioGroupItem";
