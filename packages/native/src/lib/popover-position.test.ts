import { expect, it } from "vitest";
import { positionPopover } from "./popover-position";
const area = { x: 8, y: 32, width: 344, height: 680 };
const anchor = { x: 120, y: 200, width: 80, height: 40 };
const content = { width: 200, height: 100 };
it("centers below the anchor with the same default gap as web", () => {
  expect(positionPopover(anchor, content, area)).toEqual({ x: 60, y: 248, side: "bottom" });
});
it("supports start/end alignment, offsets and RTL", () => {
  expect(positionPopover(anchor, content, area, "bottom", "start", 12, 3).x).toBe(123);
  expect(positionPopover(anchor, content, area, "top", "end", 12, 0, false).x).toBe(0);
  expect(positionPopover(anchor, content, area, "bottom", "start", 8, 0, false, true).x).toBe(0);
});
it("flips above a trigger near the bottom", () => {
  expect(positionPopover({ ...anchor, y: 650 }, content, area)).toMatchObject({ y: 542, side: "top" });
});
it("keeps a popover within the visible area when the keyboard covers its trigger", () => {
  expect(positionPopover({ ...anchor, y: 650 }, content, { ...area, height: 280 })).toMatchObject({ y: 212, side: "top" });
});
it("supports horizontal placement and flips away from screen edges", () => {
  expect(positionPopover(anchor, { width: 80, height: 100 }, area, "right")).toEqual({ x: 208, y: 170, side: "right" });
  expect(positionPopover({ ...anchor, x: 280 }, content, area, "right").side).toBe("left");
});
it("can disable collision handling explicitly", () => {
  expect(positionPopover({ ...anchor, y: 650 }, content, area, "bottom", "center", 8, 0, false).y).toBe(698);
});
