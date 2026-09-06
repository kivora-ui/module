import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { InputSize } from "@kivora/theme";

const sizeClasses: Record<InputSize, string> = {
  default: "h-10 px-3 py-2",
  sm: "h-9 px-3 py-1",
  lg: "h-11 px-4 py-2"
};

const inputVariants = cva(
  "w-full rounded-md border border-input bg-background text-sm text-foreground",
  {
    variants: { size: sizeClasses },
    defaultVariants: { size: "default" }
  }
);

export interface InputProps
  extends Omit<TextInputProps, "accessibilityState">,
    VariantProps<typeof inputVariants> {
  invalid?: boolean;
}

export const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<React.ComponentRef<typeof TextInput>>
> = React.forwardRef<React.ComponentRef<typeof TextInput>, InputProps>(
  ({ className, size, editable, invalid, ...props }, ref) => (
    <TextInput
      ref={ref}
      accessibilityRole="text"
      accessibilityState={{ disabled: editable === false }}
      aria-invalid={invalid}
      editable={editable}
      className={cn(inputVariants({ size, className }), editable === false && "opacity-50", invalid && "border-destructive")}
      placeholderTextColor="rgb(115 115 115)"
      {...props}
    />
  )
);
Input.displayName = "Input";
