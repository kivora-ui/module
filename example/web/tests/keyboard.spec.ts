import { test, expect, type Page, type Locator } from "@playwright/test";

// Desktop browser emulation does not open an OS keyboard. Simulate the visual
// viewport shrinking independently of the layout viewport (Safari/Chrome default).
async function visualViewport(page: Page, height: number, top = 0, scale = 1) {
  await page.evaluate(({ height, top, scale }) => {
    const viewport = window.visualViewport!;
    Object.defineProperties(viewport, {
      height: { configurable: true, value: height },
      offsetTop: { configurable: true, value: top },
      scale: { configurable: true, value: scale },
    });
    viewport.dispatchEvent(new Event("resize"));
    viewport.dispatchEvent(new Event("scroll"));
  }, { height, top, scale });
}

async function withinVisibleViewport(locator: Locator, top: number, bottom: number) {
  await expect.poll(async () => {
    const box = await locator.boundingBox();
    return !!box && box.y >= top - 1 && box.y + box.height <= bottom + 1;
  }).toBe(true);
}

test("customer dialog keeps the focused field and actions reachable with a visual-only keyboard", async ({ page }) => {
  await page.goto("/clientes");
  await page.getByRole("button", { name: "Nuevo cliente", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Nuevo cliente" });
  const phone = dialog.getByLabel("Teléfono", { exact: true });
  await phone.focus();
  const originalHeight = await page.evaluate(() => innerHeight);
  await visualViewport(page, 320, 40);
  await withinVisibleViewport(dialog, 40, 360);
  await withinVisibleViewport(phone, 40, 360);
  expect(await page.evaluate(() => innerHeight)).toBe(originalHeight);
  await dialog.getByRole("button", { name: "Cancelar", exact: true }).scrollIntoViewIfNeeded();
  await withinVisibleViewport(dialog.getByRole("button", { name: "Cancelar", exact: true }), 40, 360);
  await visualViewport(page, originalHeight);
  await withinVisibleViewport(dialog, 0, originalHeight);
  await dialog.getByRole("button", { name: "Cancelar", exact: true }).click();
  await expect(dialog).toHaveCount(0);
});

test("dialog remains scrollable when the browser resizes its layout for the keyboard", async ({ page }) => {
  await page.goto("/clientes");
  await page.getByRole("button", { name: "Nuevo cliente", exact: true }).click();
  await page.setViewportSize({ width: 390, height: 340 });
  const dialog = page.getByRole("dialog", { name: "Nuevo cliente" });
  await dialog.getByLabel("Teléfono", { exact: true }).focus();
  await withinVisibleViewport(dialog, 0, 340);
  await withinVisibleViewport(dialog.getByLabel("Teléfono", { exact: true }), 0, 340);
});

for (const sample of [
  { search: "Drawer", button: "Abrir drawer" },
  { search: "Sheet", button: "Abrir ficha" },
]) {
  test(`${sample.search} stays above the keyboard instead of the layout viewport bottom`, async ({ page }) => {
    await page.goto("/componentes");
    await page.getByRole("textbox", { name: "Buscar componentes", exact: true }).fill(sample.search);
    await page.getByRole("button", { name: sample.button, exact: true }).click();
    await visualViewport(page, 320, 30);
    await withinVisibleViewport(page.getByRole("dialog"), 30, 350);
    await page.getByRole("dialog").getByRole("button", { name: "Close", exact: true }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
}

test("normal form uses browser resizing without disabling zoom", async ({ page }) => {
  await page.goto("/ajustes");
  await page.getByRole("tab", { name: "Tickets", exact: true }).click();
  const viewport = await page.locator('meta[name="viewport"]').getAttribute("content");
  expect(viewport).toContain("interactive-widget=resizes-content");
  expect(viewport).not.toMatch(/user-scalable=no|maximum-scale=1(?:,|$)/);
  await page.setViewportSize({ width: 390, height: 340 });
  const notes = page.getByLabel("Mensaje del ticket", { exact: true });
  await notes.click();
  await withinVisibleViewport(notes, 0, 340);
});

test("date and time popup keeps time inputs reachable in the visual viewport", async ({ page }) => {
  await page.goto("/componentes");
  await page.getByRole("textbox", { name: "Buscar componentes", exact: true }).fill("DatePicker");
  await page.locator("#date-picker").getByRole("button", { name: "Fecha y hora (24 h)", exact: true }).click();
  const dialog = page.getByRole("dialog");
  const minutes = dialog.getByRole("textbox", { name: "Minutes", exact: true });
  await minutes.focus();
  await visualViewport(page, 360);
  await withinVisibleViewport(dialog, 0, 360);
  await withinVisibleViewport(minutes, 0, 360);
});

test("mobile select stays inside the visual viewport when a previous keyboard remains open", async ({ page }, info) => {
  test.skip(info.project.name !== "mobile", "Mobile select uses the bottom sheet");
  await page.goto("/componentes");
  await page.getByRole("textbox", { name: "Buscar componentes", exact: true }).fill("Select");
  await page.locator("#select").getByRole("combobox", { name: "Categoría de prueba", exact: true }).click();
  await visualViewport(page, 320);
  await withinVisibleViewport(page.getByRole("dialog"), 0, 320);
});
