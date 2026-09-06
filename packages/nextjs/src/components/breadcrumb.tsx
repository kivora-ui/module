import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@kivora/theme";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" className={className} {...props}>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  )
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a">>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span ref={ref} aria-current="page" className={cn("font-medium text-foreground", className)} {...props} />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ children, className, ...props }, ref) => (
    <li
      ref={ref}
      aria-hidden="true"
      role="presentation"
      className={cn("inline-flex items-center text-muted-foreground/70 [&>svg]:h-3.5 [&>svg]:w-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-label="More pages"
      role="img"
      className={cn("inline-flex h-6 w-6 items-center justify-center text-muted-foreground", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
    </span>
  )
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
