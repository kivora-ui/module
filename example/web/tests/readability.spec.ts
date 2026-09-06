import { test, expect } from "@playwright/test";

test("desktop typography stays readable on large screens", async ({ page }) => {
  for (const width of [1440, 1920]) {
    await page.setViewportSize({ width, height: 1080 });
    await page.goto("/inventario");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    for (const selector of [".nav-link", ".table-primary"]) {
      const size = await page
        .locator(selector)
        .first()
        .evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      expect(size).toBeGreaterThanOrEqual(width >= 1600 ? 17 : 16);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

test("search text fits its group in light and dark tablet layouts", async ({
  page,
}) => {
  await page.goto("/tablet");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.addStyleTag({ content: "* { transition: none !important; }" });
  for (const width of [768, 1024, 1920]) {
    await page.setViewportSize({ width, height: 1080 });
    for (const dark of [false, true]) {
      await page.evaluate(
        (dark) => document.documentElement.classList.toggle("dark", dark),
        dark,
      );
      const input = page.getByRole("textbox", { name: "Buscar productos" });
      await input.fill("gypq 847001");
      await input.focus();
      const metrics = await input.evaluate((el) => {
        const group = el.closest('[data-slot="input-group"]')!;
        const field = el.getBoundingClientRect();
        const box = group.getBoundingClientRect();
        const style = getComputedStyle(el);
        const groupStyle = getComputedStyle(group);
        const probe = document.createElement("span");
        probe.style.color = groupStyle.getPropertyValue(
          "--tw-ring-offset-color",
        );
        group.append(probe);
        const offsetColor = getComputedStyle(probe).color;
        probe.remove();
        return {
          top: field.top - box.top,
          bottom: box.bottom - field.bottom,
          contentHeight:
            field.height -
            parseFloat(style.paddingTop) -
            parseFloat(style.paddingBottom),
          lineHeight: parseFloat(style.lineHeight),
          offsetColor,
          background: groupStyle.backgroundColor,
        };
      });
      expect(metrics.top).toBeGreaterThanOrEqual(0);
      expect(metrics.bottom).toBeGreaterThanOrEqual(0);
      expect(Math.abs(metrics.top - metrics.bottom)).toBeLessThanOrEqual(1);
      expect(metrics.contentHeight).toBeGreaterThanOrEqual(metrics.lineHeight);
      expect(metrics.offsetColor).toBe(metrics.background);
    }
  }
});

test("component examples wrap at tablet width", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/componentes");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
