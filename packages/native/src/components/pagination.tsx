import * as React from "react";
import { Text, type ViewProps } from "react-native";
import { Button, type ButtonProps } from "./button";
import { styledView } from "../lib/primitives";
export type PaginationProps = ViewProps;
export const Pagination: ReturnType<typeof styledView> = styledView(
  "Pagination",
  "flex-row flex-wrap items-center justify-center gap-2",
);
export const PaginationContent: ReturnType<typeof styledView> = styledView(
  "PaginationContent",
  "flex-row flex-wrap items-center gap-2",
);
export const PaginationItem: ReturnType<typeof styledView> = styledView(
  "PaginationItem",
  "",
);
export interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean;
}
export function PaginationButton({
  isActive,
  children,
  ...props
}: PaginationButtonProps) {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      accessibilityState={{ selected: !!isActive, disabled: !!props.disabled }}
      {...props}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Text className="text-base text-foreground">{children}</Text>
      ) : (
        children
      )}
    </Button>
  );
}
export const PaginationLink = PaginationButton;
export type PaginationLinkProps = PaginationButtonProps;
export type PaginationNextProps = PaginationButtonProps;
export type PaginationPreviousProps = PaginationButtonProps;
export function PaginationNext(props: PaginationNextProps) {
  return (
    <PaginationButton accessibilityLabel="Página siguiente" {...props}>
      {props.children ?? "Siguiente"}
    </PaginationButton>
  );
}
export function PaginationPrevious(props: PaginationPreviousProps) {
  return (
    <PaginationButton accessibilityLabel="Página anterior" {...props}>
      {props.children ?? "Anterior"}
    </PaginationButton>
  );
}
export function PaginationEllipsis() {
  return <Text className="text-foreground">…</Text>;
}
