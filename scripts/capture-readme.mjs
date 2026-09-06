import { chromium, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Start pnpm dev:web first. Each screenshot uses fresh demo data in its own context.
const output = new URL('../docs/images/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
try {
  for (const shot of [
    { name: 'web-desktop', width: 1440, height: 1000, path: '/', dark: true },
    { name: 'web-mobile', width: 390, height: 844, path: '/', dark: false },
    { name: 'web-tablet', width: 1180, height: 820, path: '/tablet', dark: true },
  ]) {
    const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height }, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:3000${shot.path}`);
    await expect(page.getByRole('main')).toBeVisible();
    const toggle = page.getByRole('button', { name: shot.dark ? 'Activar modo oscuro' : 'Activar modo claro', exact: true });
    if (await toggle.count()) await toggle.click();
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(6000); // allow preference toasts and chart transitions to finish
    // Exclude only Next.js developer tooling, not application content.
    await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' });
    await page.screenshot({ path: fileURLToPath(new URL(`${shot.name}.png`, output)), animations: 'disabled' });
    await page.close();
  }
} finally { await browser.close(); }
