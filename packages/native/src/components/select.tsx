import * as React from "react";
import {
  Pressable,
  Text,
  View,
  useWindowDimensions,
  type PressableProps,
  type TextProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";
import ChevronDown from "lucide-react-native/icons/chevron-down";
import { useKivoraTheme } from "../provider";
import { BottomSheet } from "./bottom-sheet";

interface SelectContextValue {
  open: boolean;
  value?: string;
  setOpen: (open: boolean) => void;
  setValue: (value: string) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelect() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within Select");
  }
  return context;
}

export interface SelectProps {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface SelectTriggerProps extends PressableProps {
  children?: React.ReactNode;
}

export interface SelectValueProps extends TextProps {
  placeholder?: string;
  children?: React.ReactNode;
}

export type SelectContentProps = ViewProps;
export type SelectGroupProps = ViewProps;
export type SelectLabelProps = TextProps;
export interface SelectItemProps extends PressableProps {
  value: string;
  children?: React.ReactNode;
}
export type SelectSeparatorProps = ViewProps;

export function Select({
  children,
  defaultValue,
  value,
  onValueChange,
}: SelectProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const currentValue = value ?? internalValue;

  const setValue = React.useCallback(
    (nextValue: string) => {
      if (value === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
      setOpen(false);
    },
    [onValueChange, value],
  );

  const context = React.useMemo(
    () => ({ open, value: currentValue, setOpen, setValue }),
    [open, currentValue, setValue],
  );
  return (
    <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
  );
}

export function SelectTrigger({
  className,
  onPress,
  children,
  ...props
}: SelectTriggerProps) {
  const { open, setOpen } = useSelect();
  const { resolvedColorMode } = useKivoraTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ expanded: open }}
      className={cn(
        "h-10 flex-row items-center justify-between rounded-md border border-input bg-background px-3",
        className,
      )}
      onPress={(event) => {
        onPress?.(event);
        setOpen(!open);
      }}
      {...props}
    >
      {children}
      <View
        pointerEvents="none"
        accessible={false}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={{ flexShrink: 0, opacity: 0.5 }}
      >
        <ChevronDown
          size={16}
          strokeWidth={2}
          color={resolvedColorMode === "dark" ? "#fafafa" : "#171717"}
        />
      </View>
    </Pressable>
  );
}

export function SelectValue({
  className,
  placeholder = "Select option",
  children,
  ...props
}: SelectValueProps) {
  const { value } = useSelect();
  return (
    <Text
      className={cn(
        "text-sm text-foreground",
        !value && "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children ?? value ?? placeholder}
    </Text>
  );
}

export function SelectContent({ className, ...props }: SelectContentProps) {
  const { open, setOpen } = useSelect();
  const { width } = useWindowDimensions();
  const useBottomSheet = width < 768;

  if (useBottomSheet) {
    return (
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        className={cn("gap-0 px-2", className)}
        {...props}
      />
    );
  }

  if (!open) return null;
  return (
    <View
      className={cn("mt-1 rounded-md border bg-popover p-1", className)}
      {...props}
    />
  );
}

export function SelectGroup(props: SelectGroupProps) {
  return <View {...props} />;
}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <Text
      className={cn(
        "px-2 py-1.5 text-sm font-semibold text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function SelectItem({
  value,
  className,
  onPress,
  children,
  ...props
}: SelectItemProps) {
  const select = useSelect();
  const selected = select.value === value;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      className={cn(
        "rounded-sm px-3 py-3 md:px-2 md:py-1.5",
        selected && "bg-accent",
        className,
      )}
      onPress={(event) => {
        onPress?.(event);
        select.setValue(value);
      }}
      {...props}
    >
      {React.Children.map(children, (child) =>
        typeof child === "string" || typeof child === "number" ? (
          <Text className="text-sm text-foreground">{child}</Text>
        ) : child,
      )}
    </Pressable>
  );
}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return <View className={cn("my-1 h-px bg-muted", className)} {...props} />;
}

export function SelectScrollUpButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <>{children}</>;
}

export function SelectScrollDownButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <>{children}</>;
}
