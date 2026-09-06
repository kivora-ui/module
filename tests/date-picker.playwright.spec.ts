import { expect, test } from "@playwright/test";

const storybookUrl = process.env.STORYBOOK_URL ?? "http://localhost:6006";

const stories = [
  "components-date-picker--default",
  "components-date-picker--range-with-presets",
  "components-date-picker--range-two-months",
  "components-date-picker--with-time",
  "components-date-picker--month-picker",
  "components-date-picker--year-picker",
  "components-date-picker--select-month-before-date",
  "components-date-picker--select-year-before-range"
];

for (const story of stories) {
  test(`${story} opens without layout collapse`, async ({ page }) => {
    await page.goto(`${storybookUrl}/iframe.html?id=${story}`);
    await page.getByRole("button").first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const box = await dialog.boundingBox();
    expect(box?.width).toBeGreaterThan(250);
    expect(box?.height).toBeGreaterThan(250);
  });
}

test("with time keeps a compact panel and clamps invalid values", async ({ page }) => {
  await page.goto(`${storybookUrl}/iframe.html?id=components-date-picker--with-time`);
  await page.getByRole("button").first().click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveCSS("width", "320px");

  await page.getByLabel("Hours").fill("43");
  await page.getByLabel("Minutes").fill("99");

  await expect(page.getByLabel("Hours")).toHaveValue("12");
  await expect(page.getByLabel("Minutes")).toHaveValue("59");
});

test("completed range starts a new selection", async ({ page }) => {
  await page.goto(`${storybookUrl}/iframe.html?id=components-date-picker--range-with-presets`);
  await page.getByRole("button").first().click();

  const savedLabel = await page.getByRole("button").first().textContent();
  await page.getByRole("button", { name: /Saturday, August 15th, 2026/ }).click();

  await expect(page.getByRole("dialog").getByText("Aug 15, 2026 ->")).toBeVisible();
  await expect(page.getByRole("button").first()).toHaveText(savedLabel!);
  await expect(page.getByRole("button", { name: "Apply", exact: true })).toBeDisabled();
});
