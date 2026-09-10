import { chromium } from '@playwright/test';

// This measures requestAnimationFrame cadence, not physical display presentation.
// Use a production Storybook build and a foreground, otherwise idle browser.
const baseURL = process.env.ANIMATION_BENCH_URL ?? 'http://localhost:6007';
const browser = await chromium.launch({
  channel: process.env.ANIMATION_BENCH_CHANNEL ?? 'chrome',
  headless: process.env.ANIMATION_BENCH_HEADED !== '1',
});
const results = [];
try {
  const page = await browser.newPage({ reducedMotion: 'no-preference', viewport: { width: 1280, height: 800 } });
  const session = await page.context().newCDPSession(page);
  for (const cpuRate of [1, 4]) {
    await session.send('Emulation.setCPUThrottlingRate', { rate: cpuRate });
    for (const story of ['animations-text--letters-up', 'animations-text--words-scale', 'components-animation--loaders', 'components-animation--vector']) {
      await page.goto(`${baseURL}/iframe.html?id=${story}&viewMode=story`);
      const button = page.getByRole('button', { name: 'Repetir animación' });
      await button.waitFor();
      await page.evaluate(() => document.fonts.ready);
      await button.click();
      await page.waitForTimeout(2000);
      const sample = await page.evaluate(async () => {
        const intervals = [];
        const longTasks = [];
        const observer = new PerformanceObserver(list => longTasks.push(...list.getEntries().map(entry => entry.duration)));
        observer.observe({ type: 'longtask' });
        let previous = performance.now();
        const start = previous;
        [...document.querySelectorAll('button')].find(button => button.textContent.includes('Repetir animación')).click();
        let browserAnimations = [];
        await new Promise(resolve => {
          function frame(now) {
            intervals.push(now - previous);
            previous = now;
            if (!browserAnimations.length && now - start > 100) {
              browserAnimations = document.getAnimations().filter(animation => {
                const target = animation.effect?.target;
                return target && !target.closest('button');
              }).map(animation => Object.keys(animation.effect.getKeyframes()[0]).filter(key => !['offset', 'easing', 'composite', 'computedOffset'].includes(key)));
            }
            if (now - start < 2000) requestAnimationFrame(frame);
            else resolve();
          }
          requestAnimationFrame(frame);
        });
        observer.disconnect();
        const sorted = [...intervals].sort((a, b) => a - b);
        return {
          rafFps: Number((1000 * intervals.length / intervals.reduce((a, b) => a + b, 0)).toFixed(1)),
          p95FrameMs: Number(sorted[Math.ceil(sorted.length * 0.95) - 1].toFixed(2)),
          maxFrameMs: Number(sorted.at(-1).toFixed(2)),
          framesOver33ms: intervals.filter(ms => ms > 1000 / 30 + 1).length,
          longTasks: longTasks.length,
          browserAnimationProperties: [...new Set(browserAnimations.flat())],
        };
      });
      results.push({ story, cpuRate, ...sample });
    }
  }
  console.log(JSON.stringify({ browser: browser.version(), baseURL, metric: 'Main-thread rAF cadence; not presented GPU frames or a device FPS guarantee', results }, null, 2));
} finally {
  await browser.close();
}
