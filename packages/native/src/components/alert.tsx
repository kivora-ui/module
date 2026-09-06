import * as React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

const alertVariants = cva("w-full rounded-md border px-4 py-3", {
  variants: {
    variant: {
      default: "border-border bg-background",
      destructive: "border-destructive bg-destructive/10",
      success: "border-emerald-500 bg-emerald-500/10",
      warning: "border-amber-500 bg-amber-500/10"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface AlertProps extends ViewProps, VariantProps<typeof alertVariants> {}

export const Alert: React.ForwardRefExoticComponent<
  AlertProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <View
      ref={ref}
      accessibilityRole="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

export interface AlertTitleProps extends TextProps {}

export const AlertTitle: React.ForwardRefExoticComponent<
  AlertTitleProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn("mb-1 font-medium leading-none text-foreground", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

export interface AlertDescriptionProps extends TextProps {}

export const AlertDescription: React.ForwardRefExoticComponent<
  AlertDescriptionProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";
