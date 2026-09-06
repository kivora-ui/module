import * as React from "react";
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { ButtonSize, ButtonVariant } from "@kivora/theme";

// react-native-reanimated's generated prop types for `style` trigger TS2589
// ("Type instantiation is excessively deep and possibly infinite") on this
// exact typescript/react-native/reanimated version combination — cast to a
// plain, non-recursive component type so TS never has to resolve them.
const AnimatedPressable = Animated.createAnimatedComponent(
  Pressable,
) as unknown as React.ComponentType<
  PressableProps & { style?: StyleProp<ViewStyle> } & React.RefAttributes<
      React.ComponentRef<typeof Pressable>
    >
>;

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary",
  destructive: "bg-destructive",
  outline: "border border-input bg-background",
  secondary: "bg-secondary",
  ghost: "bg-transparent",
  link: "bg-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

const buttonVariants = cva(
  "flex-row items-center justify-center gap-2 rounded-md",
  {
    variants: { variant: variantClasses, size: sizeClasses },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends
    Omit<PressableProps, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  accessibilityLabel?: string;
}

// Explicit return type: once AnimatedPressable is cast above, TS can no
// longer portably infer Button's type without referencing a non-exported
// react-native internal type (TS2742) - name it explicitly instead.
export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<React.ComponentRef<typeof Pressable>>
> = React.forwardRef<React.ComponentRef<typeof Pressable>, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled,
      accessibilityLabel,
      children,
      ...props
    },
    ref,
  ) => {
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    return (
      <AnimatedPressable
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled: !!disabled }}
        disabled={disabled}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        onPressIn={() => {
          scale.value = withTiming(0.97, {
            duration: 100,
            reduceMotion: ReduceMotion.System,
          });
        }}
        onPressOut={() => {
          scale.value = withTiming(1, {
            duration: 100,
            reduceMotion: ReduceMotion.System,
          });
        }}
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled && "opacity-50",
        )}
        style={animatedStyle}
        {...props}
      >
        {children}
      </AnimatedPressable>
    );
  },
);
Button.displayName = "Button";
