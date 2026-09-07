import { chromium, expect } from '@playwright/test';
import { readFile, readdir } from 'node:fs/promises';
const browser = await chromium.launch();
try {
 const page = await browser.newPage();
 await page.goto('http://127.0.0.1:3000/componentes', { timeout: 120000 });
 await page.getByRole('textbox', { name: 'Buscar componentes' }).fill('FileUpload');
 const session = await page.context().newCDPSession(page);
 await session.send('Network.enable');
 await session.send('Network.emulateNetworkConditions', { offline: false, latency: 100, downloadThroughput: 2 * 1024 * 1024, uploadThroughput: 128 * 1024 });
 const bytes = Buffer.alloc(1024 * 1024, 37);
 const filename = 'a-very-long-file-name-that-must-stay-on-a-single-line-with-ellipsis.txt';
 await page.locator('input[type=file]').setInputFiles({ name: filename, mimeType: 'text/plain', buffer: bytes });
 await expect(page.getByRole('button', { name: 'Upload', exact: true })).toHaveCount(0);
 await expect(page.getByRole('article', { name: 'File upload' })).toBeVisible();
 await expect(page.locator('section[data-component="file-upload"] [data-upload-id]')).toHaveCount(0);
 const title = page.locator('[data-sonner-toaster] p[title]');
 await expect(title).toHaveCSS('text-overflow', 'ellipsis');
 await page.locator('a[href="/inventario"]').first().click();
 await expect(page.getByRole('article', { name: 'File upload' })).toBeVisible();
 await page.getByText(/success.*100%/).waitFor({ timeout: 45000 });
 let found = false;
 for (const name of (await readdir('.uploads')).filter(name => !name.endsWith('.json'))) { if ((await readFile('.uploads/' + name)).equals(bytes)) found = true; }
 if (!found) throw new Error('Server bytes do not match');
 console.log('PASS automatic upload, truncated filename, floating progress across navigation, completion toast and exact bytes');
 await page.screenshot({ path: 'example/app/build/upload-web-complete.png', fullPage: true });
} finally { await browser.close(); }
