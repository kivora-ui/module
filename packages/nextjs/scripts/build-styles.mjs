import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = join(root, 'src/styles.css');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });
const input = readFileSync(source, 'utf8');
// Only library classes are compiled; consumer utilities belong to their own build.
const compiledInput = input.replace('@import "tailwindcss";', '@import "tailwindcss" source(none);\n@source "./";');
const result = await postcss([tailwind({ base: root, optimize: { minify: true } })])
  .process(compiledInput, { from: source, to: join(dist, 'styles.css'), map: false });
// Tailwind rebases third-party URLs relative to the output. Embed local fonts
// and images so the published CSS never depends on this workspace's paths.
const mimeTypes = { '.gif': 'image/gif', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject' };
// Use private cascade layers so an application's Tailwind plugin does not
// interpret the already-compiled base/utilities as its own source directives.
const output = postcss.parse(result.css);
output.walkAtRules('layer', rule => {
  rule.params = rule.params.split(',').map(name => {
    const layer = name.trim();
    return ['properties', 'theme', 'base', 'components', 'utilities'].includes(layer) ? `kivora-${layer}` : layer;
  }).join(',');
});
const css = output.toString().replace(/url\((['"]?)([^'"\)]+)\1\)/g, (match, _quote, url) => {
  if (/^(data:|https?:|#|\/\/)/.test(url)) return match;
  const [path] = url.split(/[?#]/);
  const mime = mimeTypes[extname(path)];
  if (!mime) throw new Error(`Unsupported stylesheet asset: ${url}`);
  const asset = readFileSync(resolve(dist, path));
  const hash = url.includes('#') ? url.slice(url.indexOf('#')) : '';
  return `url("data:${mime};base64,${asset.toString('base64')}${hash}")`;
});
writeFileSync(join(dist, 'styles.css'), css);
// Optional source entry for applications that generate their own Tailwind utilities.
writeFileSync(join(dist, 'tailwind.css'), `${input}\n@source "./";\n`);
for (const file of ['carousel.css', 'upload-dashboard.css', 'player.css']) {
  copyFileSync(join(root, 'src', file), join(dist, file));
}
console.log(`Built styles.css (${Buffer.byteLength(css)} bytes) and optional tailwind.css`);
