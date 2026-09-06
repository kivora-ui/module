"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@kivora/theme";

export type ResizablePanelGroupProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.PanelGroup
>;

export const ResizablePanelGroup = ({
  className,
  ...props
}: ResizablePanelGroupProps) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

export const ResizablePanel = ResizablePrimitive.Panel;

export interface ResizableHandleProps
  extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}

export function ResizableHandle({ className, withHandle, ...props }: ResizableHandleProps) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      className={cn(
        "group relative flex w-px items-center justify-center bg-border/80 transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-3 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
        className
      )}
      {...props}
    >
      {withHandle ? (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border/70 bg-background shadow-sm group-data-[panel-group-direction=vertical]:h-3 group-data-[panel-group-direction=vertical]:w-4">
          <GripVertical className="h-3 w-3 text-muted-foreground group-data-[panel-group-direction=vertical]:rotate-90" />
        </div>
      ) : null}
    </ResizablePrimitive.PanelResizeHandle>
  );
}
ResizableHandle.displayName = "ResizableHandle";
