import * as React from "react";
import { View, type ViewProps } from "react-native";
import { Toggle, type ToggleProps } from "./toggle";
import { cn } from "@kivora/theme";
interface GroupState {
  values: string[];
  change: (value: string) => void;
  disabled?: boolean;
}
const Context = React.createContext<GroupState | null>(null);
export interface ToggleGroupProps extends ViewProps {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}
export function ToggleGroup({
  type = "single",
  value,
  defaultValue = "",
  onValueChange,
  disabled,
  className,
  ...props
}: ToggleGroupProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;
  const values = Array.isArray(current) ? current : current ? [current] : [];
  const change = (item: string) => {
    const next =
      type === "single"
        ? values.includes(item)
          ? ""
          : item
        : values.includes(item)
          ? values.filter((v) => v !== item)
          : [...values, item];
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };
  return (
    <Context.Provider value={{ values, change, disabled }}>
      <View {...props} className={cn("flex-row flex-wrap gap-1", className)} />
    </Context.Provider>
  );
}
export interface ToggleGroupItemProps extends Omit<
  ToggleProps,
  "pressed" | "onPressedChange"
> {
  value: string;
}
export function ToggleGroupItem({
  value,
  disabled,
  ...props
}: ToggleGroupItemProps) {
  const group = React.useContext(Context);
  if (!group) throw new Error("ToggleGroupItem requires ToggleGroup");
  return (
    <Toggle
      {...props}
      disabled={disabled || group.disabled}
      pressed={group.values.includes(value)}
      onPressedChange={() => group.change(value)}
    />
  );
}
