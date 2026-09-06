import * as React from "react";
import { cn } from "@kivora/theme";

export interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export const FieldSet = React.forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ className, ...props }, ref) => (
    <fieldset ref={ref} className={cn("grid min-w-0 gap-5", className)} {...props} />
  )
);
FieldSet.displayName = "FieldSet";

export interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {}

export const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, ...props }, ref) => (
    <legend ref={ref} className={cn("mb-1 text-sm font-semibold leading-none tracking-normal", className)} {...props} />
  )
);
FieldLegend.displayName = "FieldLegend";

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("grid min-w-0 gap-4", className)} {...props} />
  )
);
FieldGroup.displayName = "FieldGroup";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "responsive";
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      data-orientation={orientation}
      className={cn(
        "grid min-w-0 gap-2",
        orientation === "horizontal" && "grid-cols-[10rem_minmax(0,1fr)] items-start gap-4",
        orientation === "responsive" && "sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-4",
        className
      )}
      {...props}
    />
  )
);
Field.displayName = "Field";

export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("text-sm font-medium leading-none text-foreground", className)} {...props} />
  )
);
FieldLabel.displayName = "FieldLabel";

export interface FieldContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldContent = React.forwardRef<HTMLDivElement, FieldContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("grid min-w-0 gap-2", className)} {...props} />
  )
);
FieldContent.displayName = "FieldContent";

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-5 text-muted-foreground", className)} {...props} />
  )
);
FieldDescription.displayName = "FieldDescription";

export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm font-medium leading-5 text-destructive", className)} {...props} />
  )
);
FieldError.displayName = "FieldError";

export interface FieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldSeparator = React.forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("h-px w-full bg-border/70", className)} {...props} />
  )
);
FieldSeparator.displayName = "FieldSeparator";
