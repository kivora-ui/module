import { test, expect } from "@playwright/test";

test("table filters combine global search, state and switches without duplicating search", async ({
  page,
}) => {
  await page.goto("/componentes");
  await page.getByLabel("Buscar componentes").fill("DataTable");
  const example = page.locator("#table");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await example.getByRole("button", { name: "Next", exact: true }).click();
  await example.getByRole("button", { name: "Filters", exact: true }).click();
  const panel = page.getByRole("dialog", { name: "Filters" });
  await expect(panel).toBeVisible();
  if (page.viewportSize()!.width < 768) {
    await expect(panel).toHaveClass(/bottom-0/);
  }
  // A modal sheet hides the background table from the accessibility tree.
  // Read its rows with includeHidden:true while validating immediate filtering.
  await expect(panel.getByRole("textbox")).toHaveCount(0);
  const panelSize = await panel.evaluate(el => ({ scroll: el.scrollHeight, height: el.clientHeight }));
  await panel.getByText("Todos los estados", { exact: true }).click();
  if (page.viewportSize()!.width < 768) {
    await page.getByRole("dialog", { name: "Estado", exact: true }).getByRole("button", { name: "Activo", exact: true }).click();
  } else {
    await expect(page.getByRole("option", { name: "Pausado", exact: true })).toBeVisible();
    expect(await panel.evaluate(el => ({ scroll: el.scrollHeight, height: el.clientHeight }))).toEqual(panelSize);
    expect(await page.getByRole("listbox").evaluate(el => el.closest('[role="dialog"]') === null)).toBe(true);
    await page.getByRole("option", { name: "Activo", exact: true }).click();
  }
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Protector solar", exact: true }),
  ).toBeVisible();
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Gel de manos", exact: true }),
  ).toHaveCount(0);
  await panel
    .getByRole("switch", { name: "Solo para reponer", exact: true })
    .click();
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Apósitos", exact: true }),
  ).toBeVisible();
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Protector solar", exact: true }),
  ).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(panel).toHaveCount(0);
  await example.getByPlaceholder("Search...", { exact: true }).fill("solar");
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "No results.", exact: true }),
  ).toBeVisible();
  await example.getByPlaceholder("Search...", { exact: true }).fill("");
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Apósitos", exact: true }),
  ).toBeVisible();
  await expect(
    example.getByRole("button", { name: "Remove filter Estado", exact: true }),
  ).toContainText("Activo");
  await example.getByRole("button", { name: /Filters/ }).click();
  await expect(
    panel.getByRole("switch", { name: "Solo para reponer", exact: true }),
  ).toBeChecked();
  await panel.getByRole("button", { name: "Clear", exact: true }).click();
  await expect(
    panel.getByRole("switch", { name: "Solo para reponer", exact: true }),
  ).not.toBeChecked();
  await expect(
    panel.getByRole("combobox", { name: "Estado", exact: true }),
  ).toHaveValue("");
  await expect(panel).toContainText("Todos los estados");
  await expect(
    example.getByRole("cell", { includeHidden: true, name: "Gel de manos", exact: true }),
  ).toBeVisible();
  const box = await panel.boundingBox();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(
    page.viewportSize()!.width + 1,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
