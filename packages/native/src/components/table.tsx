import * as React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export const Table: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("w-full overflow-hidden rounded-lg border border-border/70", className)} {...props} />
));
Table.displayName = "Table";

export const TableHeader: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("border-b border-border/70 bg-muted/40", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

export const TableBody: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={className} {...props} />
));
TableBody.displayName = "TableBody";

export const TableFooter: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("border-t border-border/70 bg-muted/40", className)} {...props} />
));
TableFooter.displayName = "TableFooter";

export const TableRow: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("min-h-12 flex-row items-center border-b border-border/70", className)} {...props} />
));
TableRow.displayName = "TableRow";

export const TableHead: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("flex-1 px-4 py-3 text-sm font-medium text-muted-foreground", className)} {...props} />
));
TableHead.displayName = "TableHead";

export const TableCell: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("flex-1 px-4 py-3 text-sm text-foreground", className)} {...props} />
));
TableCell.displayName = "TableCell";

export const TableCaption: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text ref={ref} className={cn("mt-3 text-center text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";
