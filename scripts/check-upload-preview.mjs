import { chromium } from '@playwright/test';
const browser = await chromium.launch();
try {
 const page = await browser.newPage();
 await page.goto('http://127.0.0.1:3000/componentes', { timeout: 120000 });
 await page.getByRole('textbox', { name: 'Buscar componentes' }).fill('FileUpload');
 await page.locator('input[type=file]').setInputFiles([
  { name: 'preview.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aF1cAAAAASUVORK5CYII=', 'base64') },
  { name: 'document.pdf', mimeType: 'application/pdf', buffer: Buffer.from('demo') },
  { name: 'broken.png', mimeType: 'image/png', buffer: Buffer.from('invalid') },
 ]);
 const preview = page.getByRole('img', { name: 'Preview of preview.png' });
 await preview.waitFor();
 await page.waitForFunction(() => Array.from(document.images).some(img => img.alt === 'Preview of preview.png' && img.naturalWidth > 0));
 await page.getByText('pdf', { exact: true }).waitFor();
 await page.getByText('image', { exact: true }).waitFor();
 await page.screenshot({ path: 'example/app/build/file-preview-web.png', fullPage: true });
 console.log('PASS image thumbnail, PDF icon, broken image fallback');
} finally { await browser.close(); }
