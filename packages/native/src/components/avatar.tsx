import * as React from "react";
import { Image, Text, View, type ImageProps, type TextProps, type ViewProps } from "react-native";
import { cn } from "@kivora/theme";

export const Avatar: React.ForwardRefExoticComponent<
  ViewProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, ViewProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("relative h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
));
Avatar.displayName = "Avatar";

export const AvatarImage: React.ForwardRefExoticComponent<
  ImageProps & React.RefAttributes<React.ComponentRef<typeof Image>>
> = React.forwardRef<React.ComponentRef<typeof Image>, ImageProps>(({ className, ...props }, ref) => (
  <Image ref={ref} className={cn("h-full w-full", className)} {...props} />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<React.ComponentRef<typeof Text>>
> = React.forwardRef<React.ComponentRef<typeof Text>, TextProps>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground", className)}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
