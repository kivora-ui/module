import * as React from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { InputSize } from "@kivora/theme";

const sizeClasses: Record<InputSize, string> = {
  default: "min-h-24 px-3 py-2",
  sm: "min-h-20 px-3 py-1.5",
  lg: "min-h-32 px-4 py-3"
};

const textareaVariants = cva("w-full rounded-md border border-input bg-background text-sm text-foreground", {
  variants: { size: sizeClasses },
  defaultVariants: { size: "default" }
});

export interface TextareaProps
  extends Omit<TextInputProps, "accessibilityState" | "multiline" | "onContentSizeChange">,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean;
  autoResizeDirection?: "down" | "up";
  invalid?: boolean;
  maxRows?: number;
  minRows?: number;
  onContentSizeChange?: TextInputProps["onContentSizeChange"];
  showCount?: boolean;
}

export const Textarea: React.ForwardRefExoticComponent<
  TextareaProps & React.RefAttributes<React.ComponentRef<typeof TextInput>>
> = React.forwardRef<React.ComponentRef<typeof TextInput>, TextareaProps>(
  (
    {
      autoResize = false,
      autoResizeDirection = "down",
      className,
      defaultValue,
      editable,
      invalid,
      maxRows = 6,
      maxLength,
      minRows,
      onContentSizeChange,
      onChangeText,
      showCount = false,
      size,
      textAlignVertical = "top",
      value,
      ...props
    },
    ref
  ) => {
    const lineHeight = 20;
    const minimumRows = minRows ?? 1;
    const minHeight = minimumRows * lineHeight + 16;
    const maxHeight = maxRows * lineHeight + 16;
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const [textareaHeight, setTextareaHeight] = React.useState(minHeight);
    const currentValue = value ?? internalValue;
    const count = currentValue.length;

    return (
      <View
        className={cn(
          "w-full gap-1.5",
          autoResize && autoResizeDirection === "up" && "flex-col-reverse"
        )}
      >
        <TextInput
          ref={ref}
          accessibilityRole="text"
          accessibilityState={{ disabled: editable === false }}
          aria-invalid={invalid}
          defaultValue={defaultValue}
          editable={editable}
          maxLength={maxLength}
          multiline
          textAlignVertical={textAlignVertical}
          value={value}
          scrollEnabled={!autoResize || textareaHeight >= maxHeight}
          onContentSizeChange={(event) => {
            if (autoResize) {
              const nextHeight = Math.min(
                Math.max(event.nativeEvent.contentSize.height, minHeight),
                maxHeight
              );
              setTextareaHeight(nextHeight);
            }
            onContentSizeChange?.(event);
          }}
          onChangeText={(nextValue) => {
            if (value === undefined) {
              setInternalValue(nextValue);
            }
            onChangeText?.(nextValue);
          }}
          className={cn(
            textareaVariants({ size, className }),
            autoResize && "min-h-0",
            editable === false && "opacity-50",
            invalid && "border-destructive"
          )}
          style={[autoResize ? { height: textareaHeight } : undefined, props.style]}
          placeholderTextColor="rgb(115 115 115)"
          {...props}
        />
        {showCount ? (
          <Text
            className={cn(
              "text-right text-xs text-muted-foreground",
              maxLength !== undefined && count >= maxLength && "text-destructive"
            )}
          >
            {maxLength === undefined ? count : `${count}/${maxLength}`}
          </Text>
        ) : null}
      </View>
    );
  }
);
Textarea.displayName = "Textarea";
