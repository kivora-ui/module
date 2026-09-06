export interface PopoverRect { x: number; y: number; width: number; height: number }
export type PopoverSide = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

export function positionPopover(anchor: PopoverRect, content: Pick<PopoverRect, "width" | "height">,
  area: PopoverRect, side: PopoverSide = "bottom", align: PopoverAlign = "center",
  sideOffset = 8, alignOffset = 0, avoidCollisions = true, rtl = false) {
  const space = { top: anchor.y - area.y, bottom: area.y + area.height - anchor.y - anchor.height,
    left: anchor.x - area.x, right: area.x + area.width - anchor.x - anchor.width };
  const opposite = { top: "bottom", bottom: "top", left: "right", right: "left" } as const;
  const vertical = side === "top" || side === "bottom";
  const size = vertical ? content.height : content.width;
  if (avoidCollisions && space[side] < size + sideOffset && space[opposite[side]] > space[side]) side = opposite[side];
  const alignment = vertical && rtl && align !== "center" ? (align === "start" ? "end" : "start") : align;
  const cross = alignment === "start" ? 0 : alignment === "end" ? 1 : 0.5;
  let x = vertical ? anchor.x + (anchor.width - content.width) * cross + alignOffset
    : side === "left" ? anchor.x - content.width - sideOffset : anchor.x + anchor.width + sideOffset;
  let y = !vertical ? anchor.y + (anchor.height - content.height) * cross + alignOffset
    : side === "top" ? anchor.y - content.height - sideOffset : anchor.y + anchor.height + sideOffset;
  if (avoidCollisions) {
    x = Math.max(area.x, Math.min(x, area.x + area.width - content.width));
    y = Math.max(area.y, Math.min(y, area.y + area.height - content.height));
  }
  return { x, y, side };
}
