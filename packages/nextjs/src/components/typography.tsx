import * as React from "react";
import { cn } from "@kivora/theme";

export type TypographyProps<TElement extends HTMLElement = HTMLElement> =
  React.HTMLAttributes<TElement>;

export const TypographyH1 = React.forwardRef<HTMLHeadingElement, TypographyProps<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1 ref={ref} className={cn("scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl", className)} {...props} />
  )
);
TypographyH1.displayName = "TypographyH1";

export const TypographyH2 = React.forwardRef<HTMLHeadingElement, TypographyProps<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("scroll-m-20 border-b border-border/70 pb-2 text-3xl font-semibold tracking-normal", className)} {...props} />
  )
);
TypographyH2.displayName = "TypographyH2";

export const TypographyH3 = React.forwardRef<HTMLHeadingElement, TypographyProps<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("scroll-m-20 text-2xl font-semibold tracking-normal", className)} {...props} />
  )
);
TypographyH3.displayName = "TypographyH3";

export const TypographyH4 = React.forwardRef<HTMLHeadingElement, TypographyProps<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn("scroll-m-20 text-xl font-semibold tracking-normal", className)} {...props} />
  )
);
TypographyH4.displayName = "TypographyH4";

export const TypographyP = React.forwardRef<HTMLParagraphElement, TypographyProps<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
  )
);
TypographyP.displayName = "TypographyP";

export const TypographyBlockquote = React.forwardRef<HTMLQuoteElement, TypographyProps<HTMLQuoteElement>>(
  ({ className, ...props }, ref) => (
    <blockquote ref={ref} className={cn("mt-6 border-l-2 border-border/70 pl-6 italic text-muted-foreground", className)} {...props} />
  )
);
TypographyBlockquote.displayName = "TypographyBlockquote";

export const TypographyList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
  )
);
TypographyList.displayName = "TypographyList";

export const TypographyInlineCode = React.forwardRef<HTMLElement, TypographyProps<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code ref={ref} className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props} />
  )
);
TypographyInlineCode.displayName = "TypographyInlineCode";

export const TypographyLead = React.forwardRef<HTMLParagraphElement, TypographyProps<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xl leading-8 text-muted-foreground", className)} {...props} />
  )
);
TypographyLead.displayName = "TypographyLead";

export const TypographyLarge = React.forwardRef<HTMLDivElement, TypographyProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  )
);
TypographyLarge.displayName = "TypographyLarge";

export const TypographySmall = React.forwardRef<HTMLElement, TypographyProps<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small ref={ref} className={cn("text-sm font-medium leading-none", className)} {...props} />
  )
);
TypographySmall.displayName = "TypographySmall";

export const TypographyMuted = React.forwardRef<HTMLParagraphElement, TypographyProps<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
TypographyMuted.displayName = "TypographyMuted";
