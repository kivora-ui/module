import { chromium, expect } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Extract small stills from the clear Sintel demo, never from encrypted media.
// © copyright Blender Foundation | durian.blender.org — CC BY 3.0.
const output = fileURLToPath(new URL('../example/web/public/player-thumbnails/sintel/', import.meta.url));
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const stamp = seconds => new Date(seconds * 1000).toISOString().slice(11, 23);
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000/player');
  const player = page.locator('[data-player-phase]').first();
  await expect(player).toHaveAttribute('data-player-source', 'sintel-public');
  await expect(player).toHaveAttribute('data-player-phase', 'content', { timeout: 30000 });
  const video = player.locator('video').first();
  const duration = await video.evaluate(video => video.duration);
  let vtt = 'WEBVTT\n\n';
  for (let index = 0; index < 16; index++) {
    const start = duration * index / 16;
    const frameTime = Math.min(duration - 1, start + 3);
    const jpeg = await video.evaluate(async (video, time) => {
      if (video.mediaKeys) throw new Error('Only clear sample media can be captured');
      video.muted = true;
      const ready = new Promise(resolve => video.addEventListener('seeked', resolve, {once:true}));
      video.currentTime = time;
      await ready;
      await video.play();
      await new Promise(resolve => video.requestVideoFrameCallback(resolve));
      video.pause();
      const canvas = document.createElement('canvas'); canvas.width = 320; canvas.height = 180;
      canvas.getContext('2d').drawImage(video, 0, 0, 320, 180);
      return canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
    }, frameTime);
    writeFileSync(`${output}${index}.jpg`, Buffer.from(jpeg, 'base64'));
    vtt += `${stamp(start)} --> ${stamp(duration * (index + 1) / 16)}\n${index}.jpg\n\n`;
    console.log('Captured thumbnail', index + 1, '/ 16');
  }
  writeFileSync(`${output}thumbnails.vtt`, vtt);
  writeFileSync(`${output}ATTRIBUTION.md`, '# Sintel thumbnails\n\n© copyright Blender Foundation | https://durian.blender.org\n\nLicensed under CC BY 3.0: https://creativecommons.org/licenses/by/3.0/\nLicense statement: https://durian.blender.org/sharing/\n\nResized still frames extracted from the public Shaka Sintel DASH sample.\nThese thumbnails were generated with scripts/create-player-thumbnails.mjs.\n');
} finally { await browser.close(); }
