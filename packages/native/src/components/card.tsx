import * as React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export const Card: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("gap-1.5 rounded-xl border border-border/70 bg-card p-6", className)} {...props} />
));
Card.displayName = "Card";

export const CardHeader: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("gap-1.5", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("text-lg font-semibold text-card-foreground", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("flex-row items-center", className)} {...props} />
));
CardFooter.displayName = "CardFooter";
