import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch();
try {
 for (const width of [1440, 375, 320]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto('http://127.0.0.1:3000/componentes', { timeout: 120000 });
  await page.getByRole('textbox', { name: 'Buscar componentes' }).fill('FileUpload');
  await page.getByText(/^Espa.ol$/).click();
  await page.getByRole('option', {name: 'English', exact: true}).or(page.getByRole('button', {name: 'English', exact: true})).click();
  await page.getByRole('button', { name: 'Simple', exact: true }).click();
  await page.locator('input[type=file]').setInputFiles({ name: 'ChatGPT Image 27 ago 2026_19_53_49_' + 'very-long-name-'.repeat(12) + '.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aF1cAAAAASUVORK5CYII=', 'base64') });
  const card = page.getByRole('article', { name: 'File upload' });
  await expect(card).toBeVisible();
  await page.getByText(/Completed.*100%/).waitFor();
  const bounds = await card.evaluate(card => {
   const rect = card.getBoundingClientRect();
   const title = card.querySelector('p[title]');
   const progress = card.querySelector('[role=progressbar]');
   const bar = progress.getBoundingClientRect();
   return { left: rect.left, right: rect.right, width: rect.width, viewport: innerWidth,
    barLeft: bar.left, barRight: bar.right, scrollWidth: card.scrollWidth, clientWidth: card.clientWidth,
    truncated: title.scrollWidth > title.clientWidth, ellipsis: getComputedStyle(title).textOverflow };
  });
  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(width);
  expect(bounds.barLeft).toBeGreaterThan(bounds.left);
  expect(bounds.barRight).toBeLessThan(bounds.right);
  expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.clientWidth);
  expect(bounds.truncated).toBe(true);
  expect(bounds.ellipsis).toBe('ellipsis');
  await page.screenshot({ path: `example/app/build/toast-layout-${width}.png` });
  console.log('PASS toast bounds, filename ellipsis and progress at', width, 'px');
  await page.close();
 }
} finally { await browser.close(); }
