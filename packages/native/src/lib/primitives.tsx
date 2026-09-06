import * as React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export function styledView(
  name: string,
  classes: string,
): React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> {
  const Component = React.forwardRef<
    React.ComponentRef<typeof View>,
    ViewProps
  >(({ className, ...props }, ref) => (
    <View ref={ref} {...props} className={cn(classes, className)} />
  ));
  Component.displayName = name;
  return Component;
}
export function styledText(
  name: string,
  classes: string,
): React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> {
  const Component = React.forwardRef<
    React.ComponentRef<typeof Text>,
    TextProps
  >(({ className, ...props }, ref) => (
    <Text
      ref={ref}
      {...props}
      className={cn("text-base text-foreground", classes, className)}
    />
  ));
  Component.displayName = name;
  return Component;
}
