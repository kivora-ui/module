import * as React from "react";
import {
  Pressable,
  Text,
  View,
  type PressableProps,
  type ViewProps,
  type TextProps,
} from "react-native";
import { BottomSheet } from "../components/bottom-sheet";
import { Checkbox } from "../components/checkbox";
import { cn } from "@kivora/theme";
import { styledText, styledView } from "./primitives";
const Context = React.createContext<{
  open: boolean;
  change: (open: boolean) => void;
} | null>(null);
function useMenu() {
  const context = React.useContext(Context);
  if (!context) throw new Error("Menu components require a menu root");
  return context;
}
export interface MenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
export function Menu({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: MenuProps) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const context = React.useMemo<{
    open: boolean;
    change: (next: boolean) => void;
  }>(
    () => ({
      open: open ?? internal,
      change: (next) => {
        if (open === undefined) setInternal(next);
        onOpenChange?.(next);
      },
    }),
    [open, internal, onOpenChange],
  );
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
export interface MenuTriggerProps extends PressableProps {
  longPress?: boolean;
  asChild?: boolean;
}
export function MenuTrigger({
  longPress,
  asChild: _asChild,
  onPress,
  onLongPress,
  ...props
}: MenuTriggerProps) {
  const menu = useMenu();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityHint={
        longPress ? "Mantén pulsado para ver las acciones" : undefined
      }
      accessibilityState={{ expanded: menu.open }}
      {...props}
      onPress={(e) => {
        if (!longPress) menu.change(!menu.open);
        onPress?.(e);
      }}
      onLongPress={(e) => {
        if (longPress) menu.change(true);
        onLongPress?.(e);
      }}
    />
  );
}
export type MenuContentProps = ViewProps;
export function MenuContent(props: MenuContentProps) {
  const menu = useMenu();
  return <BottomSheet open={menu.open} onOpenChange={menu.change} {...props} />;
}
export interface MenuItemProps extends Omit<PressableProps, "children"> {
  children?: React.ReactNode;
  onSelect?: () => void;
  closeOnSelect?: boolean;
  inset?: boolean;
}
export function MenuItem({
  children,
  className,
  onPress,
  onSelect,
  disabled,
  closeOnSelect = true,
  inset,
  ...props
}: MenuItemProps) {
  const menu = useMenu();
  return (
    <Pressable
      {...props}
      disabled={disabled}
      accessibilityRole={props.accessibilityRole ?? "button"}
      accessibilityState={{ ...props.accessibilityState, disabled: !!disabled }}
      className={cn(
        "min-h-12 flex-row items-center gap-3 rounded-lg px-3",
        disabled && "opacity-50",
        inset && "pl-8",
        className,
      )}
      onPress={(e) => {
        onSelect?.();
        onPress?.(e);
        if (closeOnSelect) menu.change(false);
      }}
    >
      {typeof children === "string" ? (
        <Text className="text-base text-foreground">{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
export interface MenuCheckboxItemProps extends Omit<MenuItemProps, "onSelect"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
export function MenuCheckboxItem({
  checked = false,
  onCheckedChange,
  children,
  disabled,
  className,
}: MenuCheckboxItemProps) {
  return (
    <View className={cn("min-h-12 flex-row items-center gap-3", className)}>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        label={typeof children === "string" ? children : undefined}
        containerClassName="flex-1"
      />
      {typeof children !== "string" && children}
    </View>
  );
}
const RadioContext = React.createContext({
  value: "",
  change: (_value: string) => {},
});
export interface MenuRadioGroupProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}
export function MenuRadioGroup({
  value,
  defaultValue = "",
  onValueChange,
  ...props
}: MenuRadioGroupProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  return (
    <RadioContext.Provider
      value={{
        value: value ?? internal,
        change: (next) => {
          if (value === undefined) setInternal(next);
          onValueChange?.(next);
        },
      }}
    >
      <View {...props} />
    </RadioContext.Provider>
  );
}
export interface MenuRadioItemProps extends MenuItemProps {
  value: string;
}
export function MenuRadioItem({
  value,
  children,
  onSelect,
  ...props
}: MenuRadioItemProps) {
  const radio = React.useContext(RadioContext);
  return (
    <MenuItem
      {...props}
      accessibilityRole="radio"
      accessibilityState={{ checked: radio.value === value }}
      onSelect={() => {
        radio.change(value);
        onSelect?.();
      }}
    >
      <Text className="text-foreground">
        {radio.value === value ? "●" : "○"}
      </Text>
      {typeof children === "string" ? (
        <Text className="text-foreground">{children}</Text>
      ) : (
        children
      )}
    </MenuItem>
  );
}
export const MenuGroup: ReturnType<typeof styledView> = styledView(
  "MenuGroup",
  "gap-1",
);
export const MenuLabel: ReturnType<typeof styledText> = styledText(
  "MenuLabel",
  "px-3 py-2 font-semibold text-muted-foreground",
);
export type MenuLabelProps = TextProps;
export const MenuShortcut: ReturnType<typeof styledText> = styledText(
  "MenuShortcut",
  "ml-auto text-sm text-muted-foreground",
);
export const MenuSeparator: ReturnType<typeof styledView> = styledView(
  "MenuSeparator",
  "my-1 h-px bg-border",
);
export type MenuSeparatorProps = ViewProps;
export function MenuPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
