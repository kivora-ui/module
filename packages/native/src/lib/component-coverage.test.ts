import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { it, expect } from "vitest";

it("exports supported native families and keeps a gallery example", () => {
  const web = readdirSync(resolve("../nextjs/src/components")).filter(name => name.endsWith(".tsx") && !name.includes(".test."));
  const native = readdirSync(resolve("src/components"));
  const exports = readFileSync(resolve("src/index.ts"), "utf8");
  const examples = readFileSync(resolve("../../example/app/src/component-screen.tsx"), "utf8") + readFileSync(resolve("../../example/app/src/extended-component-examples.tsx"), "utf8");
  const desktopOnly = ["dropdown-menu.tsx", "resizable.tsx", "command.tsx", "context-menu.tsx", "navigation-menu.tsx"];
  for (const file of desktopOnly) {
    expect(native).not.toContain(file);
    expect(exports).not.toContain(`./components/${file.slice(0, -4)}`);
  }
  for (const file of web.filter(file => !desktopOnly.includes(file))) {
    expect(native, file).toContain(file);
    expect(exports, file).toContain(`./components/${file.slice(0, -4)}`);
    // A JSX example prevents satisfying coverage with an unused export only.
    const name = file.slice(0, -4).split("-").map(word => word[0]?.toUpperCase() + word.slice(1)).join("");
    const alias: Record<string, string> = { Chart: "ChartContainer", Direction: "DirectionProvider", InputOtp: "InputOTP", Resizable: "ResizablePanelGroup", Toast: "toast", Typography: "TypographyH2" };
    expect(examples, file).toContain(`K.${alias[name] ?? name}`);
  }
});
