import { expect, test } from '@playwright/test';
const docsUrl = process.env.DOCS_URL ?? 'http://localhost:3000';

test('Menu supports dropdown actions and keyboard navigation across a bar', async ({ page }) => {
  await page.goto(`${docsUrl}/docs/componentes/menu`);
  const preview = page.getByTestId('live-preview');
  await preview.getByRole('button', { name: 'Acciones' }).click();
  await expect(page.getByRole('menuitem', { name: 'Nuevo proyecto' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Exportar (no disponible)' })).toBeDisabled();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Barra de menús', exact: true }).click();
  const file = preview.getByRole('menuitem', { name: 'Archivo', exact: true });
  await file.focus();
  await file.press('ArrowDown');
  await expect(page.getByRole('menuitem', { name: 'Nuevo', exact: true })).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('menuitem', { name: 'Copiar', exact: true })).toBeVisible();
  await page.getByRole('menuitem', { name: 'Copiar', exact: true }).click();
  await expect(page.getByRole('menu')).not.toBeVisible();
});

test('ScrollArea virtualized renders a window and reaches the last item', async ({ page }) => {
  await page.goto(`${docsUrl}/docs/componentes/scroll-area`);
  await page.getByRole('button', { name: 'Lista virtualizada', exact: true }).click();
  const preview = page.getByTestId('live-preview');
  await expect(preview.getByText('Proyecto 1', { exact: true })).toBeVisible();
  expect(await preview.locator('[data-index]').count()).toBeLessThan(50);
  await preview.locator('[data-radix-scroll-area-viewport]').evaluate(el => { el.scrollTop = el.scrollHeight; });
  await expect(preview.getByText('Proyecto 1000', { exact: true })).toBeVisible();
  expect(await preview.locator('[data-index]').count()).toBeLessThan(50);
});

test('Barcode renders QR and removed component pages are absent', async ({ page }) => {
  await page.goto(`${docsUrl}/docs/componentes/barcode`);
  await page.getByRole('button', { name: 'Código QR', exact: true }).click();
  await expect(page.getByTestId('live-preview').getByRole('img', { name: 'qrcode code' })).toBeVisible();
  for (const slug of ['collapsible', 'qr-code', 'dropdown-menu', 'menubar', 'virtual-scroll-area']) {
    const response = await page.goto(`${docsUrl}/docs/componentes/${slug}`);
    expect(response?.status()).toBe(404);
  }
});
