import * as React from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import { cn } from "@kivora/theme";
import { SelectionView, useSelectionProgress } from "./selection-motion";

export interface SwitchProps extends Omit<PressableProps, "onPress"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Makes the label and indicator one accessible, pressable control. */
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

export const Switch: React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, SwitchProps>(
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
      onLayout,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const isChecked = checked ?? internalChecked;
    const [trackWidth, setTrackWidth] = React.useState(44);
    const [thumbWidth, setThumbWidth] = React.useState(16);
    const progress = useSelectionProgress(isChecked);
    const background = useAnimatedStyle(() => ({ opacity: progress.value }));
    const thumb = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: progress.value * Math.max(0, trackWidth - thumbWidth - 8),
        },
      ],
    }));
    const controlClass = cn(
      "h-6 w-11 shrink-0 justify-center overflow-hidden rounded-full border-2 border-transparent bg-input px-0.5",
      className,
    );
    const indicator = (
      <>
        <SelectionView
          pointerEvents="none"
          className="absolute -inset-0.5 rounded-full bg-primary"
          style={background}
        />
        <SelectionView
          pointerEvents="none"
          onLayout={(event) => setThumbWidth(event.nativeEvent.layout.width)}
          className="h-4 w-4 rounded-full bg-background"
          style={thumb}
        />
      </>
    );
    return (
      <Pressable
        ref={ref}
        {...props}
        accessibilityRole="switch"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ checked: isChecked, disabled: !!disabled }}
        disabled={disabled}
        onLayout={(event) => {
          if (label === undefined)
            setTrackWidth(event.nativeEvent.layout.width);
          onLayout?.(event);
        }}
        className={cn(
          label !== undefined
            ? "min-h-12 flex-row items-center justify-between gap-3"
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
            <Text
              className={cn("flex-1 text-base text-foreground", labelClassName)}
            >
              {label}
            </Text>
            <View
              pointerEvents="none"
              onLayout={(event) =>
                setTrackWidth(event.nativeEvent.layout.width)
              }
              className={controlClass}
            >
              {indicator}
            </View>
          </>
        ) : (
          indicator
        )}
      </Pressable>
    );
  },
);
Switch.displayName = "Switch";
