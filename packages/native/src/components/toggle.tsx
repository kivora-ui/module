import * as React from "react";
import { Pressable, Text, type PressableProps } from "react-native";
import { cn } from "@kivora/theme";
import { useAnimatedStyle } from "react-native-reanimated";
import { SelectionView, useSelectionProgress } from "./selection-motion";
export interface ToggleProps extends Omit<PressableProps, "children"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  children?: React.ReactNode | ((pressed: boolean) => React.ReactNode);
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}
export function Toggle({
  pressed,
  defaultPressed = false,
  onPressedChange,
  children,
  disabled,
  className,
  onPress,
  variant,
  size,
  ...props
}: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultPressed);
  const selected = pressed ?? internal;
  const progress = useSelectionProgress(selected);
  const backgroundStyle = useAnimatedStyle(() => ({ opacity: progress.value }));
  const content =
    typeof children === "function" ? children(selected) : children;
  return (
    <Pressable
      {...props}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled: !!disabled }}
      onPress={(event) => {
        if (pressed === undefined) setInternal(!selected);
        onPressedChange?.(!selected);
        onPress?.(event);
      }}
      className={cn(
        "min-h-12 flex-row items-center justify-center gap-2 rounded-lg px-3",
        variant === "outline" && "border border-border",
        size === "icon" && "w-12",
        disabled && "opacity-50",
        className,
      )}
    >
      <SelectionView
        pointerEvents="none"
        className="absolute inset-0 rounded-lg bg-accent"
        style={backgroundStyle}
      />
      {typeof content === "string" ? (
        <Text className="text-base text-foreground">{content}</Text>
      ) : (
        content
      )}
    </Pressable>
  );
}
