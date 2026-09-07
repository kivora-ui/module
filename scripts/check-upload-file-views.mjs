import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch();
try {
 const page = await browser.newPage();
 await page.goto('http://127.0.0.1:3000/componentes');
 await page.getByRole('textbox',{name:'Buscar componentes'}).fill('FileUpload');
 await page.getByRole('button',{name:'Seleccionar archivos',exact:true}).click();
 let transfers = 0;
 page.on('request', request => { if(request.url().startsWith('http://127.0.0.1:1080/')) transfers++; });
 const data = await page.evaluate(() => {const c=document.createElement('canvas'); c.width=100;c.height=100; const ctx=c.getContext('2d');ctx.fillStyle='#345abc';ctx.fillRect(0,0,100,100);return c.toDataURL().split(',')[1];});
 await page.locator('.uppy-Dashboard input[type=file]').first().setInputFiles([{name:'image-a.png',mimeType:'image/png',buffer:Buffer.from(data,'base64')},{name:'image-b.png',mimeType:'image/png',buffer:Buffer.from(data,'base64')}]);
 await expect(page.locator('[data-upload-view] [role=listitem]')).toHaveCount(2);
 await expect(page.locator('[data-upload-view] img')).toHaveCount(2);
 await page.getByRole('button',{name:'Vista previa del archivo: image-a.png',exact:true}).click();
 const preview = page.getByRole('dialog').last();
 await expect(preview.getByRole('img')).toBeVisible();
 await expect.poll(() => preview.getByRole('img').evaluate(img => img.naturalWidth)).toBe(100);
 await preview.getByRole('button',{name:'Cerrar',exact:true}).click();
 await expect(page.locator('[data-upload-view]')).toBeVisible();
 for (const width of [1100, 375, 320]) {
  await page.setViewportSize({width,height:900});
  for (const view of ['grid','list']) {
   await page.locator('[data-upload-actions] [aria-pressed]').nth(view === 'grid' ? 0 : 1).click();
   const card = page.locator('[data-upload-view] [role=listitem]').first();
   const heading = card.locator('.kivora-upload-file-heading');
   const title = await heading.locator('[title]').first().boundingBox();
   const remove = await card.getByRole('button',{name:/^Eliminar:/}).boundingBox();
   expect(Math.abs((title.y + title.height / 2) - (remove.y + remove.height / 2))).toBeLessThan(2);
   expect(remove.x).toBeGreaterThanOrEqual(title.x + title.width);
   expect(await page.getByRole('dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
   await expect(page.getByRole('dialog')).not.toContainText('\uFFFD');
   await page.screenshot({path:`example/app/build/upload-layout-${view}-${width}.png`});
  }
 }
 await page.getByRole('button',{name:'Editar imagen: image-a.png',exact:true}).click();
 await expect(page.locator('[data-uppy-panelType="FileEditor"]')).toBeVisible();
 await page.locator('[data-upload-actions]').getByRole('button',{name:'Cancelar',exact:true}).click();
 await expect(page.locator('[data-upload-view]')).toBeVisible();
 await expect(page.locator('[data-upload-view] [role=status]').first()).toContainText('Preparado');
 await page.waitForTimeout(800);
 expect(transfers).toBe(0);
 await page.locator('[data-upload-view] [role=listitem]').first().getByRole('button',{name:/^Eliminar:/}).click();
 await expect(page.locator('[data-upload-view] [role=listitem]')).toHaveCount(1);
 await page.getByRole('button',{name:'Limpiar todo',exact:true}).click();
 await expect(page.locator('[data-upload-view]')).toHaveCount(0);
 expect(transfers).toBe(0);
 await page.locator('.uppy-Dashboard input[type=file]').first().setInputFiles({name:'approved.png',mimeType:'image/png',buffer:Buffer.from(data,'base64')});
 await page.getByRole('dialog').locator('[data-upload-modal-close]').click();
 await page.getByRole('button',{name:'Seleccionar archivos',exact:true}).click();
 await expect(page.locator('[data-upload-view] [role=status]')).toContainText('Preparado');
 expect(transfers).toBe(0);
 await page.getByRole('button',{name:'Subir',exact:true}).click();
 await expect(page.locator('[data-upload-view] [role=status]')).toContainText('Completado', {timeout:15000});
 expect(transfers).toBeGreaterThan(0);
 await page.getByRole('button',{name:'approved.png',exact:true}).click();
 await expect(page.getByRole('dialog').last().getByRole('img')).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(page.locator('[data-upload-view]')).toBeVisible();
 console.log('PASS preview, editing, remove, clear all, pending across reopen, no network before explicit upload');
} finally { await browser.close(); }
