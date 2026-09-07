import { chromium } from '@playwright/test';
const browser = await chromium.launch();
try {
 const page = await browser.newPage();
 await page.goto('https://uppy.io/examples/', { waitUntil: 'domcontentloaded' });
 await page.getByText('Dashboard', { exact: true }).first().waitFor({ timeout: 30000 });
 console.log((await page.locator('body').innerText()).slice(0, 9000));
} finally { await browser.close(); }
