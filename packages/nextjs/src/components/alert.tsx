import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

const alertVariants = cva(
  "relative w-full rounded-md border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "border-border/70 bg-background text-foreground",
        destructive:
          "border-destructive/35 bg-destructive/10 text-destructive [&>svg]:text-destructive",
        success: "border-emerald-500/35 bg-emerald-500/10 text-emerald-950 dark:text-emerald-50 [&>svg]:text-emerald-600",
        warning: "border-amber-500/35 bg-amber-500/10 text-amber-950 dark:text-amber-50 [&>svg]:text-amber-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, role = "alert", variant, ...props }, ref) => (
    <div ref={ref} role={role} className={cn(alertVariants({ variant, className }))} {...props} />
  )
);
Alert.displayName = "Alert";

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-normal", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm leading-relaxed text-current/80", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";
