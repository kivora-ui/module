import { chromium, expect } from '@playwright/test';

// Run against the example's development server: node tests/filter-panels.mjs
const browser = await chromium.launch();
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto('http://127.0.0.1:3000/componentes');
    await page.getByLabel('Buscar componentes').fill('DataTable');
    const example = page.locator('#table');
    await example.getByRole('button', { name: 'Filters', exact: true }).click();
    const panel = page.getByRole('dialog', { name: 'Filters', exact: true });
    await expect(panel).toBeVisible();
    if (width < 768) {
      await expect(panel).toHaveClass(/bottom-0/);
      await expect.poll(async () => Math.round((await panel.boundingBox()).width)).toBe(width);
    } else {
      await expect(panel).not.toHaveClass(/bottom-0/);
    }
    await panel.getByText('Todos los estados', { exact: true }).click();
    if (width < 768) {
      await page.getByRole('dialog', { name: 'Estado', exact: true }).getByRole('button', { name: 'Activo', exact: true }).click();
    } else {
      await page.getByRole('option', { name: 'Activo', exact: true }).click();
    }
    await panel.getByRole('switch', { name: 'Solo para reponer' }).click();
    if (width < 768) await panel.getByRole('button', { name: 'Show results' }).click();
    else await page.keyboard.press('Escape');
    await expect(panel).toHaveCount(0);
    await expect(example.getByRole('cell', { name: 'Apósitos', exact: true })).toBeVisible();
    await expect(example.getByRole('cell', { name: 'Protector solar', exact: true })).toHaveCount(0);
    await example.getByRole('button', { name: /Filters/ }).click();
    await expect(panel.getByRole('switch', { name: 'Solo para reponer' })).toBeChecked();
    await page.keyboard.press('Escape');
    await expect(panel).toHaveCount(0);
    console.log(`OK: filters, nested select and state at ${width}px`);
    await page.close();
  }
} finally {
  await browser.close();
}
