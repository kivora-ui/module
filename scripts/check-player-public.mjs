import { chromium, expect } from '@playwright/test';

// Opt-in network smoke test: publishers may change their public demo services.
// Chrome's installed CDM is used; bundled Chromium may not include Widevine.
const browser = await chromium.launch({ channel: process.env.KIVORA_BROWSER ?? 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 960 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    const url = new URL(response.url());
    if (url.hostname.includes('licensing')) console.log('License response:', url.hostname, response.status());
  });
  await page.goto('http://127.0.0.1:3000/player');
  const player = page.locator('[data-player-phase]').first();
  const drm = await page.evaluate(async () => {
    const supported = {};
    for (const system of ['com.widevine.alpha', 'com.microsoft.playready']) {
      try {
        await navigator.requestMediaKeySystemAccess(system, [{
          initDataTypes: ['cenc'],
          videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.42E01E"' }],
          audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"' }],
        }]);
        supported[system] = true;
      } catch { supported[system] = false; }
    }
    return supported;
  });
  console.log('Browser DRM capability:', drm);
  for (const [id, label, protectedMedia] of [
    ['sintel-public', 'Sintel · DASH', false],
    ['angel-hls-public', 'Angel One · HLS', false],
    ['flower-mp4-public', 'Flower · MP4', false],
    ['angel-widevine-public', 'Angel One · Widevine', true],
    ['tears-drm-public', 'Tears of Steel · Widevine / PlayReady', true],
  ]) {
    if (process.env.KIVORA_SOURCE && process.env.KIVORA_SOURCE !== id) continue;
    const canPlayDrm = drm['com.widevine.alpha'] || (id === 'tears-drm-public' && drm['com.microsoft.playready']);
    if (protectedMedia && !canPlayDrm) { console.log('SKIP CDM unavailable:', label); continue; }
    await page.getByRole('combobox', { name: 'Formato', exact: true }).locator('..').click();
    await page.getByRole('option', { name: label, exact: true }).click();
    await expect(player).toHaveAttribute('data-player-source', id);
    await expect(player).toHaveAttribute('data-player-phase', 'content', { timeout: 45000 });
    await player.getByRole('button', { name: 'Reproducir', exact: true }).last().click();
    try {
      await expect.poll(() => player.locator('video').first().evaluate(video => video.currentTime), { timeout: 20000 }).toBeGreaterThan(1);
    } catch (error) {
      console.log('Playback diagnostic:', await player.locator('video').first().evaluate(video => ({
        paused: video.paused, readyState: video.readyState, error: video.error?.message,
        encrypted: !!video.mediaKeys, decodedFrames: video.getVideoPlaybackQuality().totalVideoFrames,
        buffered: Array.from({length: video.buffered.length}, (_, index) => [video.buffered.start(index), video.buffered.end(index)]),
      })));
      throw error;
    }
    if (protectedMedia) await expect.poll(() => player.locator('video').first().evaluate(video => !!video.mediaKeys)).toBe(true);
    await player.getByRole('button', { name: 'Pausar', exact: true }).click();
    console.log('PASS', label);
  }
  expect(errors).toEqual([]);
} finally { await browser.close(); }
