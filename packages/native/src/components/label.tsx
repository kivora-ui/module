import * as React from "react";
import { Text, type TextProps } from "react-native";
import { cn } from "@kivora/theme";

export interface LabelProps extends TextProps {}

export const Label: React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn("text-sm font-medium text-foreground", className)} {...props} />
  )
);
Label.displayName = "Label";
