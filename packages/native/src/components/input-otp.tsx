import * as React from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  type TextInputProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";
import { styledView } from "../lib/primitives";
const Context = React.createContext({ value: "", focused: false });
export interface InputOTPProps extends Omit<
  TextInputProps,
  "onChange" | "children"
> {
  maxLength: number;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  containerClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}
export function InputOTP({
  value,
  defaultValue = "",
  onChange,
  onChangeText,
  onComplete,
  maxLength,
  children,
  disabled,
  containerClassName,
  ...props
}: InputOTPProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<React.ComponentRef<typeof TextInput>>(null);
  const current = value ?? internal;
  const length = Math.max(1, maxLength);
  return (
    <Context.Provider value={{ value: current, focused }}>
      <Pressable
        accessible={false}
        disabled={disabled}
        onPress={() => ref.current?.focus()}
        className={cn(
          "relative flex-row flex-wrap gap-2",
          disabled && "opacity-50",
          containerClassName,
        )}
      >
        <TextInput
          {...props}
          ref={ref}
          value={current}
          editable={!disabled}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          maxLength={length}
          accessibilityLabel={
            props.accessibilityLabel ?? "Código de verificación"
          }
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.02,
          }}
          onChangeText={(raw) => {
            const next = raw.replace(/\D/g, "").slice(0, length);
            if (value === undefined) setInternal(next);
            onChange?.(next);
            onChangeText?.(next);
            if (next.length === length && next !== current) onComplete?.(next);
          }}
        />
        <View
          pointerEvents="none"
          accessible={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          className="flex-row flex-wrap gap-2"
        >
          {children ??
            Array.from({ length }, (_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
        </View>
      </Pressable>
    </Context.Provider>
  );
}
export type InputOTPGroupProps = ViewProps;
export const InputOTPGroup: ReturnType<typeof styledView> = styledView(
  "InputOTPGroup",
  "flex-row flex-wrap gap-1",
);
export interface InputOTPSlotProps extends ViewProps {
  index: number;
}
export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const { value, focused } = React.useContext(Context);
  return (
    <View
      {...props}
      className={cn(
        "h-12 w-10 items-center justify-center rounded border border-input bg-background",
        focused && index === value.length && "border-ring",
        className,
      )}
    >
      <Text className="text-xl text-foreground">{value[index] ?? ""}</Text>
    </View>
  );
}
export type InputOTPSeparatorProps = ViewProps;
export function InputOTPSeparator(props: InputOTPSeparatorProps) {
  return (
    <View {...props} className="justify-center">
      <Text className="text-foreground">–</Text>
    </View>
  );
}
