import { chromium, expect } from '@playwright/test';
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 950 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:3000/player');
  await page.getByRole('button', { name: 'Clásico', exact: true }).click();
  await page.getByRole('combobox', { name: 'Formato', exact: true }).locator('..').click();
  await page.getByRole('option', { name: 'MP4', exact: true }).click();
  const player = page.locator('[data-player-phase]').first();
  await expect(player).toHaveAttribute('data-player-phase', 'content');
  await page.getByRole('combobox', { name: 'Anuncios', exact: true }).locator('..').click();
  await page.getByRole('option', { name: 'Pre-roll + mid-roll', exact: true }).click();
  await expect(player).toHaveAttribute('data-player-phase', 'content');
  await player.getByRole('button', { name: 'Reproducir', exact: true }).last().click();
  await expect(player).toHaveAttribute('data-player-phase', 'ad');
  await player.getByRole('button', { name: 'Saltar anuncio', exact: true }).click();
  await expect(player).toHaveAttribute('data-player-phase', 'content');
  const timeline = player.getByRole('slider', { name: 'Posición de reproducción', exact: true });
  const track = await timeline.locator('..').boundingBox();
  await page.mouse.click(track.x + track.width * 0.5, track.y + track.height / 2);
  await expect(player).toHaveAttribute('data-player-phase', 'ad', { timeout: 10000 });
  await player.getByRole('button', { name: 'Saltar anuncio', exact: true }).click();
  await expect(player).toHaveAttribute('data-player-phase', 'content');
  console.log('PASS skip pre-roll, seek across mid-roll and resume');
  await player.getByRole('button', { name: 'Pausar', exact: true }).click();

  let fail = true;
  await page.route('**/player-fixtures/retry.mp4', route => fail
    ? route.fulfill({ status: 200, contentType: 'video/mp4', body: 'invalid video' })
    : route.fulfill({ status: 200, contentType: 'video/mp4', path: 'example/web/public/player-fixtures/sample.mp4' }));
  await page.getByText('Probar un stream / DRM', { exact: true }).click();
  await page.getByLabel('URL del vídeo', { exact: true }).fill('http://127.0.0.1:3000/player-fixtures/retry.mp4');
  await page.getByRole('button', { name: 'Cargar stream', exact: true }).click();
  await expect(player).toHaveAttribute('data-player-phase', 'error', { timeout: 15000 });
  fail = false;
  await player.getByRole('button', { name: 'Reintentar', exact: true }).click();
  await expect(player).toHaveAttribute('data-player-phase', 'content');
  console.log('PASS playback error and retry');

  for (const width of [375, 320]) {
    await page.setViewportSize({ width, height: 850 });
    await player.scrollIntoViewIfNeeded();
    expect(await player.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
    await player.getByRole('button', { name: 'Ajustes de reproducción', exact: true }).click();
    await player.getByRole('combobox', { name: 'Velocidad', exact: true }).locator('..').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button', { name: '1.5×', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(player.locator('video').first()).toHaveJSProperty('playbackRate', 1.5);
    expect(await player.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
    await player.screenshot({ path: `example/app/build/player-${width}.png` });
    await player.getByRole('button', { name: 'Ajustes de reproducción', exact: true }).click();
    console.log('PASS responsive controls and mobile settings', width);
  }
  await page.getByRole('button', { name: 'Activar modo oscuro', exact: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await player.getByRole('button', { name: 'Ajustes de reproducción', exact: true }).click();
  await player.screenshot({ path: 'example/app/build/player-dark.png' });
  expect(errors).toEqual([]);
} finally { await browser.close(); }
