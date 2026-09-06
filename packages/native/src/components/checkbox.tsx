import * as React from "react";
import { Text, Pressable, View, type PressableProps } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import { cn } from "@kivora/theme";
import Check from "lucide-react-native/icons/check";
import { useKivoraTheme } from "../provider";
import { SelectionView, useSelectionProgress } from "./selection-motion";

export interface CheckboxProps extends Omit<PressableProps, "onPress"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Makes the label and indicator one accessible, pressable control. */
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

export const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, CheckboxProps>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      disabled,
      onCheckedChange,
      label,
      labelClassName,
      containerClassName,
      accessibilityLabel,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const isChecked = checked ?? internalChecked;
    const { resolvedColorMode } = useKivoraTheme();
    const progress = useSelectionProgress(isChecked);
    const background = useAnimatedStyle(() => ({ opacity: progress.value }));
    const mark = useAnimatedStyle(() => ({
      opacity: progress.value,
      transform: [{ scale: 0.7 + 0.3 * progress.value }],
    }));
    const controlClass = cn(
      "h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-md border border-input bg-background",
      isChecked && "border-primary",
      className,
    );
    const indicator = (
      <>
        <SelectionView
          pointerEvents="none"
          className="absolute inset-0 bg-primary"
          style={background}
        />
        <SelectionView pointerEvents="none" style={mark}>
          <Check size={14} strokeWidth={2.5}
            color={resolvedColorMode === "dark" ? "#171717" : "#fafafa"}
            accessible={false} />
        </SelectionView>
      </>
    );
    return (
      <Pressable
        ref={ref}
        hitSlop={14}
        {...props}
        accessibilityRole="checkbox"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ checked: isChecked, disabled: !!disabled }}
        disabled={disabled}
        className={cn(
          label !== undefined
            ? "min-h-12 flex-row items-center gap-3"
            : controlClass,
          containerClassName,
          disabled && "opacity-50",
        )}
        onPress={() => {
          const next = !isChecked;
          if (checked === undefined) setInternalChecked(next);
          onCheckedChange?.(next);
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
Checkbox.displayName = "Checkbox";
