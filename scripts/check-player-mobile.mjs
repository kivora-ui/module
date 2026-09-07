import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch({channel:'chrome'});
try {
 const page = await browser.newPage({viewport:{width:1280,height:900}});
 page.setDefaultTimeout(7000);
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 await page.goto(`${process.env.PLAYER_BASE_URL ?? 'http://127.0.0.1:3001'}/player`);
 await page.getByRole('combobox',{name:'Formato',exact:true}).locator('..').click();
 await page.getByRole('option',{name:'Flower · MP4',exact:true}).click();
 const player=page.locator('[data-player-phase]').first();
 await expect(player).toHaveAttribute('data-player-phase','content',{timeout:30000});
 
 for (const width of [320,390,650]) {
  await page.setViewportSize({width,height:844});
  await expect(player).toHaveAttribute('data-mobile','true');
  for(const name of ['Compacto','Cine','Series','Clásico']) {
   await page.getByRole('button',{name,exact:true}).click();
   await expect(page.getByRole('dialog')).toHaveCount(0);
   const r=await player.boundingBox(); expect(Math.abs(r.width/r.height-16/9)).toBeLessThan(.01);
   expect(await player.evaluate(e=>e.scrollWidth<=e.clientWidth+1)).toBe(true);
   await expect(player.getByRole('button',{name:'Reproducir',exact:true})).toBeVisible();
  }
  await player.screenshot({path:`/tmp/kivora-web-mobile-${width}.png`});
  await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
  const dialog=page.getByRole('dialog').first();await expect(dialog).toBeVisible();
  await dialog.getByRole('tab',{name:'Velocidad',exact:true}).click();
  await dialog.getByRole('radio',{name:'1.5×',exact:true}).click();
  await expect(player.locator('video').first()).toHaveJSProperty('playbackRate',1.5);
  await dialog.getByRole('button',{name:'Cerrar',exact:true}).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  const r2=await player.boundingBox();expect(Math.abs(r2.width/r2.height-16/9)).toBeLessThan(.01);
  await player.getByRole('button',{name:'Episodios',exact:true}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(player.locator('.kivora-player-central-play')).toHaveCount(0);
  await page.getByRole('dialog').getByRole('button',{name:'Cerrar',exact:true}).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await player.getByRole('button',{name:'Reproducir',exact:true}).click();
  await expect.poll(()=>player.locator('video').first().evaluate(e=>e.currentTime)).toBeGreaterThan(0);
  await player.getByRole('button',{name:'Pausar',exact:true}).click();
  console.log('PASS 16:9, all variants, settings, episodes, playback',width);
 }
 await page.setViewportSize({width:390,height:480});
 await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
 const shortDialog=page.getByRole('dialog');
 await shortDialog.getByRole('tab',{name:'Velocidad',exact:true}).click();
 const panel=shortDialog.locator('.kivora-player-settings-panel[data-state="active"]');
 expect(await panel.evaluate(e=>e.scrollHeight>e.clientHeight)).toBe(true);
 const lastRate=shortDialog.getByRole('radio',{name:'2×',exact:true});
 await lastRate.scrollIntoViewIfNeeded();
 expect(await panel.evaluate(e=>e.scrollTop)).toBeGreaterThan(0);
 await lastRate.click();
 await expect(lastRate).toHaveAttribute('aria-checked','true');
 await shortDialog.getByRole('button',{name:'Cerrar',exact:true}).click();
 console.log('PASS short viewport settings scroll');
 await page.setViewportSize({width:1280,height:900});
 await page.getByRole('button',{name:'Series',exact:true}).click();
 await expect(player).not.toHaveAttribute('data-mobile','true');
 await expect(player.locator('.kivora-player-queue')).toBeVisible();
 await expect(player.locator('.kivora-player-central-play')).toHaveCount(0);
 console.log('PASS desktop queue and controls');
 expect(errors).toEqual([]);
} finally {await browser.close();}
