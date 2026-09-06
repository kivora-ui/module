"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { useVirtualizer, type VirtualizerOptions } from "@tanstack/react-virtual";
import { cn } from "@kivora/theme";

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  viewportClassName?: string;
}

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, viewportClassName, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={cn("h-full w-full rounded-[inherit]", viewportClassName)}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none rounded-full p-px transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border/80 hover:bg-muted-foreground/45" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export interface VirtualScrollAreaProps<TItem>
  extends Omit<ScrollAreaProps, "children"> {
  estimateSize: VirtualizerOptions<HTMLDivElement, Element>["estimateSize"];
  getItemKey?: VirtualizerOptions<HTMLDivElement, Element>["getItemKey"];
  horizontal?: boolean;
  initialRect?: VirtualizerOptions<HTMLDivElement, Element>["initialRect"];
  items: TItem[];
  itemClassName?: string | ((item: TItem, index: number) => string | undefined);
  measureItems?: boolean;
  overscan?: number;
  renderItem: (item: TItem, index: number) => React.ReactNode;
}

export function VirtualScrollArea<TItem>({
  className,
  estimateSize,
  getItemKey,
  horizontal = false,
  initialRect,
  items,
  itemClassName,
  measureItems = false,
  overscan = 6,
  renderItem,
  viewportClassName,
  ...props
}: VirtualScrollAreaProps<TItem>) {
  const [viewportElement, setViewportElement] = React.useState<HTMLDivElement | null>(null);
  const observeElementRect = React.useMemo<
    VirtualizerOptions<HTMLDivElement, Element>["observeElementRect"] | undefined
  >(
    () =>
      initialRect
        ? (_instance, callback) => {
            callback(initialRect);
          }
        : undefined,
    [initialRect]
  );
  const virtualizer = useVirtualizer({
    count: items.length,
    estimateSize,
    getItemKey,
    getScrollElement: () => viewportElement,
    horizontal,
    initialRect,
    ...(observeElementRect ? { observeElementRect } : {}),
    overscan
  });
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={setViewportElement}
        className={cn(
          "h-full w-full rounded-[inherit]",
          horizontal && "[&>div]:h-full",
          viewportClassName
        )}
      >
        <div
          className={cn("relative", horizontal && "h-full")}
          style={
            horizontal
              ? { height: "100%", width: `${virtualizer.getTotalSize()}px` }
              : { height: `${virtualizer.getTotalSize()}px`, width: "100%" }
          }
        >
          {virtualItems.map((virtualItem) => {
            const item = items[virtualItem.index];
            if (item === undefined) {
              return null;
            }
            const resolvedItemClassName =
              typeof itemClassName === "function"
                ? itemClassName(item, virtualItem.index)
                : itemClassName;

            return (
              <div
                key={virtualItem.key}
                ref={measureItems ? virtualizer.measureElement : undefined}
                data-index={virtualItem.index}
                className={cn("absolute left-0 top-0", resolvedItemClassName)}
                style={
                  horizontal
                    ? {
                        height: "100%",
                        transform: `translateX(${virtualItem.start}px)`,
                        width: `${virtualItem.size}px`
                      }
                    : {
                        height: `${virtualItem.size}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                        width: "100%"
                      }
                }
              >
                {renderItem(item, virtualItem.index)}
              </div>
            );
          })}
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
