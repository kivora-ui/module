import type { ViewProps } from "react-native";
import { styledView } from "../lib/primitives";
export type MenubarProps = ViewProps;
export const Menubar: ReturnType<typeof styledView> = styledView(
  "Menubar",
  "flex-row flex-wrap items-center gap-2 rounded-lg border border-border p-1",
);
export {
  Menu as MenubarMenu,
  MenuTrigger as MenubarTrigger,
  MenuContent as MenubarContent,
  MenuItem as MenubarItem,
  MenuCheckboxItem as MenubarCheckboxItem,
  MenuRadioGroup as MenubarRadioGroup,
  MenuRadioItem as MenubarRadioItem,
  MenuLabel as MenubarLabel,
  MenuGroup as MenubarGroup,
  MenuSeparator as MenubarSeparator,
  MenuShortcut as MenubarShortcut,
  MenuPortal as MenubarPortal,
  Menu as MenubarSub,
  MenuTrigger as MenubarSubTrigger,
  MenuContent as MenubarSubContent,
} from "../lib/menu";
export type {
  MenuTriggerProps as MenubarTriggerProps,
  MenuContentProps as MenubarContentProps,
  MenuItemProps as MenubarItemProps,
  MenuCheckboxItemProps as MenubarCheckboxItemProps,
  MenuRadioItemProps as MenubarRadioItemProps,
  MenuLabelProps as MenubarLabelProps,
  MenuSeparatorProps as MenubarSeparatorProps,
  MenuTriggerProps as MenubarSubTriggerProps,
  MenuContentProps as MenubarSubContentProps,
} from "../lib/menu";
