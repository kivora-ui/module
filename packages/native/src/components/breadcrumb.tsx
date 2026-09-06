import * as React from "react";
import {
  Linking,
  Pressable,
  Text,
  type PressableProps,
  type ViewProps,
  type TextProps,
} from "react-native";
import { styledView, styledText } from "../lib/primitives";
export type BreadcrumbProps = ViewProps;
export const Breadcrumb: ReturnType<typeof styledView> = styledView(
  "Breadcrumb",
  "",
);
export const BreadcrumbList: ReturnType<typeof styledView> = styledView(
  "BreadcrumbList",
  "flex-row flex-wrap items-center gap-2",
);
export const BreadcrumbItem: ReturnType<typeof styledView> = styledView(
  "BreadcrumbItem",
  "flex-row items-center",
);
export const BreadcrumbPage: ReturnType<typeof styledText> = styledText(
  "BreadcrumbPage",
  "font-semibold",
);
export interface BreadcrumbLinkProps extends PressableProps {
  href?: string;
}
export function BreadcrumbLink({
  href,
  children,
  onPress,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <Pressable
      {...props}
      accessibilityRole="link"
      className="min-h-12 justify-center"
      onPress={(e) => {
        onPress?.(e);
        if (href && !onPress) void Linking.openURL(href);
      }}
    >
      {typeof children === "string" ? (
        <Text className="text-base text-muted-foreground">{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
export type BreadcrumbSeparatorProps = TextProps;
export function BreadcrumbSeparator(props: TextProps) {
  return (
    <Text
      accessibilityElementsHidden
      importantForAccessibility="no"
      className="text-muted-foreground"
      {...props}
    >
      /
    </Text>
  );
}
export function BreadcrumbEllipsis() {
  return <Text className="text-muted-foreground">…</Text>;
}
