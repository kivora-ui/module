import * as React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";
import { Menu as DropdownRoot, type MenuProps as DropdownProps } from "../lib/menu";
export type MenuProps = (DropdownProps & { variant?: "dropdown" }) | (ViewProps & { variant: "bar" });
export const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<React.ComponentRef<typeof View>>> = React.forwardRef<React.ComponentRef<typeof View>, MenuProps>(function Menu(props, ref) {
  if (props.variant === "bar") {
    const { variant, className, ...rest } = props;
    return <View ref={ref} className={cn("flex-row flex-wrap items-center gap-2 rounded-lg border border-border p-1", className)} {...rest} />;
  }
  const { variant, ...rest } = props;
  return <DropdownRoot {...rest} />;
});
export {
  Menu as MenuDropdown, MenuTrigger, MenuContent, MenuItem, MenuCheckboxItem,
  MenuRadioGroup, MenuRadioItem, MenuLabel, MenuGroup, MenuSeparator, MenuShortcut, MenuPortal,
  Menu as MenuSub, MenuTrigger as MenuSubTrigger, MenuContent as MenuSubContent,
} from "../lib/menu";
export type {
  MenuTriggerProps, MenuContentProps, MenuItemProps, MenuCheckboxItemProps,
  MenuRadioItemProps, MenuLabelProps, MenuSeparatorProps,
  MenuTriggerProps as MenuSubTriggerProps, MenuContentProps as MenuSubContentProps,
} from "../lib/menu";
