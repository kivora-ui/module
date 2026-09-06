import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@kivora/theme";

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  )
);
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("inline-flex", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

const paginationLinkClassName =
  "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  isActive?: boolean;
}

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationLinkClassName,
        isActive ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "border border-input bg-background",
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

export interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, isActive, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationLinkClassName,
        isActive ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "border border-input bg-background",
        className
      )}
      {...props}
    />
  )
);
PaginationButton.displayName = "PaginationButton";

export interface PaginationPreviousProps extends PaginationLinkProps {
  label?: string;
}

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationPreviousProps>(
  ({ children, className, label = "Previous", ...props }, ref) => (
    <PaginationLink ref={ref} aria-label={label} className={cn("pl-2.5", className)} {...props}>
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      {children ?? label}
    </PaginationLink>
  )
);
PaginationPrevious.displayName = "PaginationPrevious";

export interface PaginationNextProps extends PaginationLinkProps {
  label?: string;
}

export const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationNextProps>(
  ({ children, className, label = "Next", ...props }, ref) => (
    <PaginationLink ref={ref} aria-label={label} className={cn("pr-2.5", className)} {...props}>
      {children ?? label}
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    </PaginationLink>
  )
);
PaginationNext.displayName = "PaginationNext";

export const PaginationEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn("flex h-9 min-w-9 items-center justify-center text-muted-foreground", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
);
PaginationEllipsis.displayName = "PaginationEllipsis";
