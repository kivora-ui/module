import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (['warning', 'error'].includes(message.type())) console.log(message.text().slice(0, 400)); });
  await page.goto('http://127.0.0.1:3000/player');
  const player = page.locator('[data-player-phase]').first();
  await expect(player).toHaveAttribute('data-player-phase', 'content', { timeout: 30000 });
  await player.locator('video').first().evaluate(video => { video.currentTime = 210; });
  await expect.poll(() => player.locator('video').first().evaluate(video => video.readyState)).toBeGreaterThan(2);
  for (const [variant, label] of [['compact', 'Compacto'], ['cinema', 'Cine'], ['series', 'Series']]) {
    const before = await player.locator('video').first().evaluate(video => video.currentTime);
    await page.getByRole('button', {name:label,exact:true}).click();
    await expect(player).toHaveAttribute('data-controls-variant', variant);
    expect(await player.locator('video').first().evaluate(video => video.currentTime)).toBeGreaterThanOrEqual(before - 0.1);
    const seek = player.locator('.kivora-player-seek');
    await seek.hover({ position: { x: (await seek.boundingBox()).width * 0.6, y: 10 } });
    const preview = player.locator('[data-player-preview]');
    await expect(preview.locator('img')).toBeVisible().catch(async error => {
      console.log('Preview:', await preview.count(), await preview.allTextContents());
      console.log(await page.locator('details').last().textContent());
      await player.screenshot({path:'example/app/build/player-overlay-debug.png'});
      throw error;
    });
    await expect.poll(() => preview.locator('img').evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
    await player.screenshot({ path: `example/app/build/player-overlay-${variant}.png` });
    console.log('PASS variant and real seek thumbnail', variant);
  }
  await player.getByRole('button', {name:/02\. Un largo viaje/}).click();
  await expect(player.locator('.kivora-player-episode[aria-current="true"]')).toContainText('02.');
  await expect(player).toHaveAttribute('data-player-phase','content');
  await expect.poll(() => player.locator('video').first().evaluate(video => video.currentTime)).toBeGreaterThan(210);
  await page.getByRole('button', {name:'Compacto',exact:true}).click();
  await page.mouse.move(0,0);
  await expect(player).toHaveAttribute('data-controls-idle','true',{timeout:5000});
  await player.locator('.kivora-player-stage').hover();
  await expect(player).toHaveAttribute('data-controls-idle','false');
  await player.getByRole('button',{name:'Pausar',exact:true}).last().click();
  console.log('PASS episode selection and automatic controls');

  await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
  await player.getByRole('combobox',{name:'Velocidad',exact:true}).locator('..').click();
  await page.getByRole('option',{name:'1.5×',exact:true}).click();
  await expect(player.locator('video').first()).toHaveJSProperty('playbackRate',1.5);
  await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
  for (const width of [375, 320]) {
    await page.setViewportSize({width,height:850});
    for (const label of ['Compacto','Cine','Series']) {
      await page.getByRole('button',{name:label,exact:true}).click();
      expect(await player.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      await player.screenshot({path:`example/app/build/player-overlay-${width}-${label}.png`});
    }
    await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
    await player.getByRole('combobox',{name:'Velocidad',exact:true}).locator('..').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button',{name:'1×',exact:true}).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await player.getByRole('button',{name:'Ajustes de reproducción',exact:true}).click();
    console.log('PASS narrow layouts and settings', width);
  }
  await page.setViewportSize({width:1280,height:960});
  await page.getByRole('combobox',{name:'Formato',exact:true}).locator('..').click();
  await page.getByRole('option',{name:'MP4',exact:true}).click();
  await page.getByRole('button',{name:'Compacto',exact:true}).click();
  await expect(player).toHaveAttribute('data-player-phase','content');
  const seek = player.locator('.kivora-player-seek');
  await seek.hover({position:{x:(await seek.boundingBox()).width * 0.4,y:10}});
  await expect(player.locator('[data-player-preview] img')).toBeVisible();
  await expect(player.locator('[data-player-preview] img')).toHaveAttribute('src', /thumbnails\.jpg/);
  expect(await player.locator('video').first().evaluate(video => video.currentTime)).toBe(0);
  await player.screenshot({path:'example/app/build/player-overlay-sprite.png'});
  const slider = player.getByRole('slider',{name:'Posición de reproducción',exact:true});
  await slider.focus(); await slider.press('ArrowRight');
  await expect(player.locator('[data-player-preview]')).toBeVisible();
  await expect.poll(() => player.locator('video').first().evaluate(video => video.currentTime)).toBeGreaterThan(0);
  await page.keyboard.press('Tab');
  await expect(player.locator('[data-player-preview]')).toHaveCount(0);
  console.log('PASS sprite crop, hover without seeking and keyboard preview');
  await page.getByRole('combobox',{name:'Anuncios',exact:true}).locator('..').click();
  await page.getByRole('option',{name:'Pre-roll + mid-roll',exact:true}).click();
  await expect(player).toHaveAttribute('data-player-phase','content');
  await player.getByRole('button',{name:'Reproducir',exact:true}).last().click();
  await expect(player).toHaveAttribute('data-player-phase','ad');
  await expect(player.locator('[data-player-preview]')).toHaveCount(0);
  await expect(player.getByText('Publicidad · Demo',{exact:true})).toBeVisible();
  await player.getByRole('button',{name:'Saltar anuncio',exact:true}).click();
  await expect(player).toHaveAttribute('data-player-phase','content');
  console.log('PASS ad overlay and skip controls');
  expect(errors).toEqual([]);
} finally { await browser.close(); }
