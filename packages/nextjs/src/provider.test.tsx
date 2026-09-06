// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KivoraProvider, useKivoraTheme } from "./provider";

function Probe() {
  const { resolvedColorMode } = useKivoraTheme();
  return <span>{resolvedColorMode}</span>;
}

describe("KivoraProvider", () => {
  it("resolves an explicit dark colorMode and applies the dark class", () => {
    render(
      <KivoraProvider colorMode="dark">
        <Probe />
      </KivoraProvider>
    );
    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("sets data-theme when a custom theme name is passed", () => {
    render(
      <KivoraProvider colorMode="light" theme="child">
        <Probe />
      </KivoraProvider>
    );
    expect(document.documentElement.getAttribute("data-theme")).toBe("child");
  });

  it("throws when useKivoraTheme is used outside a KivoraProvider", () => {
    function Broken() {
      useKivoraTheme();
      return null;
    }
    expect(() => render(<Broken />)).toThrow(/KivoraProvider/);
  });
});
