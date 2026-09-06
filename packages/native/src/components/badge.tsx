import * as React from "react";
import { Text, type TextProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { BadgeVariant } from "@kivora/theme";

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  destructive: "border-transparent bg-destructive text-destructive-foreground",
  outline: "border-input text-foreground"
};

const badgeVariants = cva(
  "self-start rounded-md border px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: { variant: variantClasses },
    defaultVariants: { variant: "default" }
  }
);

export interface BadgeProps extends TextProps, VariantProps<typeof badgeVariants> {}

export const Badge: React.ForwardRefExoticComponent<
  BadgeProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <Text ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />
  )
);
Badge.displayName = "Badge";
