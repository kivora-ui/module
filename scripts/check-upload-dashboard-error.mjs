import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch();
try {
 const page = await browser.newPage();
 await page.route('http://127.0.0.1:1080/**', route => route.fulfill({status:400,headers:{'Access-Control-Allow-Origin':'*'},body:'Synthetic failure'}));
 await page.goto('http://127.0.0.1:3000/componentes');
 await page.getByRole('textbox',{name:'Buscar componentes'}).fill('FileUpload');
 await page.getByText(/^Espa.ol$/).click();
  await page.getByRole('option', {name: 'English', exact: true}).or(page.getByRole('button', {name: 'English', exact: true})).click();
 await page.getByRole('button',{name:'Choose files',exact:true}).click();
 await page.locator('.uppy-Dashboard input[type=file]').first().setInputFiles({name:'error-fixture.txt',mimeType:'text/plain',buffer:Buffer.from('test')});
 await page.getByRole('button',{name:'Upload',exact:true}).click();
 await expect(page.locator('[data-upload-view] [role=status]').filter({hasText:'Failed'})).toBeVisible({timeout:20000});
 await expect(page.getByRole('dialog')).toBeVisible();
 await expect(page.locator('[data-sonner-toast]')).toHaveCount(0);
 await page.getByRole('dialog').locator('[data-upload-modal-close]').click();
 await page.getByRole('button',{name:'Choose files',exact:true}).click();
 await expect(page.locator('[data-upload-view] [role=status]').filter({hasText:'Failed'})).toBeVisible();
 console.log('PASS upload errors stay in modal, no toast, error retained after reopening');
} finally {await browser.close();}
