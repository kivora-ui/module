// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { act } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { KivoraProvider, useKivoraTheme } from "./provider";
import { useBreakpoint } from "./hooks/use-breakpoint";

function Probe() {
  const breakpoint = useBreakpoint();
  const { resolvedColorMode } = useKivoraTheme();
  return (
    <span>
      {breakpoint}/{resolvedColorMode}
    </span>
  );
}

describe("SSR hydration", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.documentElement.classList.remove("dark");
  });

  it("keeps the initial HTML stable, then resolves desktop and system dark mode", async () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(1440);
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    const app = (
      <KivoraProvider colorMode="system">
        <Probe />
      </KivoraProvider>
    );
    const container = document.createElement("div");
    container.innerHTML = renderToString(app);
    expect(container.textContent).toBe("mobile/light");
    document.body.append(container);
    const onRecoverableError = vi.fn();
    let root: ReturnType<typeof hydrateRoot>;
    await act(async () => {
      root = hydrateRoot(container, app, { onRecoverableError });
    });
    expect(container.textContent).toBe("desktop/dark");
    expect(onRecoverableError).not.toHaveBeenCalled();
    await act(async () => root.unmount());
    container.remove();
  });
});
