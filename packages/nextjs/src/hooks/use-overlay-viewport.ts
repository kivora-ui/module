"use client";

import * as React from "react";

/** Fixed overlays follow the visible viewport when the mobile keyboard covers the layout viewport. */
export function useOverlayViewport(open: boolean, forwardedRef?: React.ForwardedRef<HTMLDivElement>, clampPosition = false) {
  const element = React.useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = React.useState<{ height: number; top: number; bottom: number } | null>(null);
  const ref = React.useCallback((node: HTMLDivElement | null) => {
    element.current = node;
    if (typeof forwardedRef === "function") return forwardedRef(node);
    if (forwardedRef) forwardedRef.current = node;
  }, [forwardedRef]);

  React.useEffect(() => {
    if (!open) return;
    const viewport = window.visualViewport;
    let frame = 0;
    let scrollFrame = 0;
    const revealInput = () => {
      const host = element.current;
      if (host && clampPosition && (!viewport || viewport.scale === 1)) {
        // Anchored popovers can otherwise remain below the keyboard when their
        // trigger is outside the visual viewport. Preserve Radix's horizontal placement.
        const rect = host.getBoundingClientRect();
        const previous = parseFloat(host.style.getPropertyValue("--kivora-viewport-shift")) || 0;
        const naturalTop = rect.top - previous;
        const visibleTop = (viewport?.offsetTop ?? 0) + 8;
        const visibleBottom = (viewport?.offsetTop ?? 0) + (viewport?.height ?? innerHeight) - 8;
        const targetTop = Math.max(visibleTop, Math.min(naturalTop, visibleBottom - rect.height));
        host.style.setProperty("--kivora-viewport-shift", `${targetTop - naturalTop}px`);
      }
      const input = document.activeElement;
      if (!host || !(input instanceof HTMLElement) || !host.contains(input) ||
          !input.matches("input, textarea, [contenteditable='true']") ||
          (viewport && viewport.scale !== 1)) return;
      const field = input.getBoundingClientRect();
      const panel = host.getBoundingClientRect();
      if (panel.height <= 0) return;
      const top = Math.max(panel.top, viewport?.offsetTop ?? 0) + 12;
      const bottom = Math.min(panel.bottom, (viewport?.offsetTop ?? 0) + (viewport?.height ?? innerHeight)) - 12;
      const delta = field.bottom > bottom ? field.bottom - bottom : field.top < top ? field.top - top : 0;
      if (delta) host.scrollBy({ top: delta, behavior: "instant" });
    };
    const update = () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      frame = requestAnimationFrame(() => {
        // Portals can mount after this effect; attach observers once their node exists.
        if (element.current) resizeObserver?.observe(element.current);
        if (element.current?.parentElement) {
          positionObserver?.observe(element.current.parentElement, { attributes: true, attributeFilter: ["style"] });
        }
        // Do not reposition a panel while the user pinch-zooms it.
        const next = viewport && viewport.scale !== 1 ? null : {
          height: viewport?.height ?? innerHeight,
          top: viewport?.offsetTop ?? 0,
          bottom: Math.max(0, innerHeight - (viewport?.height ?? innerHeight) - (viewport?.offsetTop ?? 0)),
        };
        setBounds(previous => previous?.height === next?.height && previous?.top === next?.top &&
          previous?.bottom === next?.bottom ? previous : next);
        scrollFrame = requestAnimationFrame(revealInput);
      });
    };
    update();
    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    const positionObserver = clampPosition && typeof MutationObserver !== "undefined"
      ? new MutationObserver(update) : null;
    viewport?.addEventListener("resize", update);
    viewport?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    document.addEventListener("focusin", update);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      resizeObserver?.disconnect();
      positionObserver?.disconnect();
      viewport?.removeEventListener("resize", update);
      viewport?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("focusin", update);
    };
  }, [open, clampPosition]);

  const style = bounds ? { "--kivora-viewport-height": `${bounds.height}px` } as React.CSSProperties : undefined;
  return { ref, style, bounds };
}
