import { test, expect, type Page } from "@playwright/test";

async function expectCalendarAlignedWithTime(page: Page) {
  const dimensions = await page.getByRole("dialog").evaluate(dialog => {
    const grid = dialog.querySelector('[role="grid"]')!.getBoundingClientRect();
    const input = dialog.querySelector('[aria-label="Hours"]')!.getBoundingClientRect();
    const row = dialog.querySelector('[aria-label="Hours"]')!.parentElement!.parentElement!;
    const box = row.getBoundingClientRect();
    const style = getComputedStyle(row);
    return { left: grid.left, right: grid.right, inputLeft: input.left, rowRight: box.right - parseFloat(style.paddingRight) };
  });
  expect(Math.abs(dimensions.left - dimensions.inputLeft)).toBeLessThanOrEqual(1);
  expect(Math.abs(dimensions.right - dimensions.rowRight)).toBeLessThanOrEqual(1);
}

test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date(2026, 8, 5, 12));
  await page.goto("/componentes");
  await page.getByLabel("Buscar componentes").fill("DatePicker");
  await page.addStyleTag({ content: "* { transition: none !important; }" });
});

test("24-hour time supports midnight and 23:59 without AM/PM", async ({ page }) => {
  const trigger = page.locator("#date-picker").getByRole("button", { name: "Fecha y hora (24 h)", exact: true });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await dialog.locator('[data-day="2026-09-03"] button').click();
  await expect(dialog.getByRole("combobox", { name: "Period" })).toHaveCount(0);
  await expectCalendarAlignedWithTime(page);
  const hours = dialog.getByRole("textbox", { name: "Hours", exact: true });
  const minutes = dialog.getByRole("textbox", { name: "Minutes", exact: true });
  await hours.fill("00"); await minutes.fill("00");
  await expect(dialog.getByRole("button", { name: "Decrease hours", exact: true })).toBeDisabled();
  await dialog.getByRole("button", { name: "Apply", exact: true }).click();
  const saved = page.locator("#date-picker").getByRole("button", { name: /03 sept 2026, 00:00/ });
  await expect(saved).toBeVisible();
  await saved.click();
  await expect(hours).toHaveValue("00");
  await hours.fill("99"); await minutes.fill("59");
  await expect(hours).toHaveValue("23");
  await expect(dialog.getByRole("button", { name: "Increase hours", exact: true })).toBeDisabled();
  await dialog.getByRole("button", { name: "Apply", exact: true }).click();
  await expect(page.locator("#date-picker").getByRole("button", { name: /03 sept 2026, 23:59/ })).toBeVisible();
});

test("single dates support keyboard navigation and outside-month days", async ({ page }) => {
  const trigger = page.locator("#date-picker").getByRole("button").first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await dialog.locator('[data-day="2026-09-03"] button').focus();
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator('[data-day="2026-09-04"] button')).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveText("04 sept 2026");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.locator('[data-day="2026-08-31"] button').click();
  await expect(trigger).toHaveText("31 ago 2026");
});

test("range endpoints and middle paint the actual selected days in both themes", async ({
  page,
}, info) => {
  const example = page.locator("#date-picker");
  for (const dark of [false, true]) {
    await page.evaluate(
      (dark) => document.documentElement.classList.toggle("dark", dark),
      dark,
    );
    await example.getByRole("button", { name: "Periodo de ventas" }).click();
    const dialog = page.getByRole("dialog");
    const day = (date: string) =>
      dialog.locator(`[data-day="${date}"]:not([data-outside])`);
    const today = day("2026-09-05").getByRole("button");
    const todayStyle = await today.evaluate(el => ({
      background: getComputedStyle(el).backgroundColor,
      dot: getComputedStyle(el, "::after").content,
    }));
    expect(todayStyle.background).not.toBe("rgba(0, 0, 0, 0)");
    expect(todayStyle.dot).toBe("none");
    await day("2026-09-03").getByRole("button").click();
    await expect(day("2026-09-03")).toHaveAttribute("aria-selected", "true");
    await expect(dialog.getByRole("button", { name: "Apply" })).toBeDisabled();
    await day("2026-09-10").getByRole("button").click();
    await page.mouse.move(0, 0);
    for (const date of ["2026-09-03", "2026-09-10"]) {
      await expect(day(date)).toHaveAttribute("aria-selected", "true");
      const colors = await day(date)
        .getByRole("button")
        .evaluate((el) => {
          const style = getComputedStyle(el);
          const probe = document.createElement("span");
          probe.style.color = "var(--color-primary)";
          el.append(probe);
          const primary = getComputedStyle(probe).color;
          probe.remove();
          return {
            background: style.backgroundColor,
            primary,
            text: style.color,
          };
        });
      expect(colors.background).toBe(colors.primary);
      expect(colors.background).not.toBe(todayStyle.background);
      expect(colors.text).not.toBe(colors.background);
    }
    await expect(day("2026-09-04")).toHaveClass(/rdp-range_middle/);
    await expect(day("2026-09-04").getByRole("button")).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0)",
    );
    await expect(day("2026-09-02")).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(day("2026-09-11")).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
    await dialog.screenshot({
      path: info.outputPath(`range-${dark ? "dark" : "light"}.png`),
    });
    await dialog.getByRole("button", { name: "Cancel" }).click();
    await expect(
      example.getByRole("button", { name: "Periodo de ventas" }),
    ).toBeVisible();
  }
});

test("range navigation, reverse selection, one-day ranges, presets and clear", async ({
  page,
}) => {
  const trigger = page.locator("#date-picker").getByRole("button").nth(1);
  await trigger.click();
  const dialog = page.getByRole("dialog");
  const day = (date: string) =>
    dialog.locator(`[data-day="${date}"]:not([data-outside]) button`);
  await dialog.getByRole("button", { name: "Next month", exact: true }).click();
  await day("2026-10-03").click();
  await dialog
    .getByRole("button", { name: "Previous month", exact: true })
    .click();
  await day("2026-09-30").click();
  for (const dark of [false, true]) {
    await page.evaluate(dark => document.documentElement.classList.toggle("dark", dark), dark);
    for (const date of ["2026-09-30", "2026-10-01", "2026-10-03"]) {
      const outside = dialog.locator(`[data-day="${date}"][data-outside]`);
      await expect(outside).toHaveAttribute("aria-selected", "true");
      await expect(outside).toHaveCSS("opacity", "0.45");
      await expect(dialog.locator(`[data-day="${date}"]:not([data-outside])`)).toHaveCSS("opacity", "1");
    }
  }
  await dialog.getByRole("button", { name: "Apply" }).click();
  await expect(trigger).toHaveText("30 sept 2026 -> 03 oct 2026");
  await trigger.click();
  await day("2026-09-03").click();
  await day("2026-09-03").click();
  await dialog.getByRole("button", { name: "Apply" }).click();
  await expect(trigger).toHaveText("03 sept 2026 -> 03 sept 2026");
  await trigger.click();
  await dialog
    .getByRole("button", { name: "Last 7 days", exact: true })
    .click();
  await expect(
    dialog.locator('[data-day="2026-08-30"]:not([data-outside])'),
  ).toHaveAttribute("aria-selected", "true");
  await expect(
    dialog.locator('[data-day="2026-09-05"]:not([data-outside])'),
  ).toHaveAttribute("aria-selected", "true");
  await dialog.getByRole("button", { name: "Apply" }).click();
  await expect(trigger).toHaveText("30 ago 2026 -> 05 sept 2026");
  await trigger.click();
  await dialog.getByRole("button", { name: "Clear", exact: true }).click();
  await expect(dialog.locator('[aria-selected="true"]')).toHaveCount(0);
  await dialog.getByRole("button", { name: "Apply" }).click();
  await expect(trigger).toHaveText("Periodo de ventas");
});

test("time editing clamps values and Cancel or Escape preserves the saved value", async ({
  page,
}) => {
  const trigger = page.locator("#date-picker").getByRole("button").last();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expectCalendarAlignedWithTime(page);
  await dialog.locator('[data-day="2026-09-03"] button').click();
  await dialog.getByRole("textbox", { name: "Hours", exact: true }).fill("11");
  await dialog.getByRole("button", { name: "Increase hours", exact: true }).click();
  await expect(dialog.getByRole("textbox", { name: "Hours", exact: true })).toHaveValue("12");
  await expect(dialog.getByRole("button", { name: "Increase hours", exact: true })).toBeDisabled();
  await dialog.getByRole("button", { name: "Decrease hours", exact: true }).click();
  await dialog
    .getByRole("textbox", { name: "Minutes", exact: true })
    .fill("45");
  await dialog.getByRole("button", { name: "Increase minutes", exact: true }).click();
  await expect(dialog.getByRole("textbox", { name: "Minutes", exact: true })).toHaveValue("46");
  await dialog.getByRole("textbox", { name: "Minutes", exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(dialog.getByRole("textbox", { name: "Minutes", exact: true })).toHaveValue("45");
  await dialog.getByRole("combobox", { name: "Period" }).click();
  if (page.viewportSize()!.width < 768) {
    await page
      .getByRole("dialog", { name: "Options", exact: true })
      .getByRole("button", { name: "PM", exact: true })
      .click();
  } else {
    await page.getByRole("option", { name: "PM", exact: true }).click();
  }
  await dialog.getByRole("button", { name: "Apply" }).click();
  await expect(trigger).toContainText("11:45");
  const saved = await trigger.textContent();
  await trigger.click();
  await dialog
    .getByRole("textbox", { name: "Minutes", exact: true })
    .fill("99");
  await expect(
    dialog.getByRole("textbox", { name: "Minutes", exact: true }),
  ).toHaveValue("59");
  await dialog.getByRole("button", { name: "Cancel" }).click();
  await expect(trigger).toHaveText(saved!);
  await trigger.click();
  await expect(
    dialog.getByRole("textbox", { name: "Minutes", exact: true }),
  ).toHaveValue("45");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toHaveText(saved!);
});
