import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const css = read('../dist/styles.css');
const pkg = JSON.parse(read('../package.json'));
assert.doesNotMatch(css, /@(import|tailwind|source|theme|apply|custom-variant)\b/, 'Published CSS must not need a Tailwind compiler');
assert.doesNotMatch(css, /node_modules|\.pnpm|\/Volumes\//, 'Published CSS must not contain workspace asset paths');
for (const name of ['.bg-primary', '.text-foreground', '.rounded-md', '.fixed', '.border-input']) {
  assert.ok(css.includes(name), `Missing component styles: ${name}`);
}
assert.ok(css.includes('var(--radix-navigation-menu-viewport-width)'), 'Arbitrary component utilities must be included');
assert.doesNotMatch(css, /@layer (base|utilities|components)\b/, 'Compiled layers must not be reprocessed by consumer Tailwind plugins');
assert.ok(css.includes('data:font/woff;base64,'), 'Carousel assets must be self-contained');
for (const name of ['tailwindcss', '@tailwindcss/postcss', 'postcss']) {
  assert.equal(pkg.peerDependencies?.[name], undefined);
  assert.equal(pkg.dependencies?.[name], undefined);
  assert.ok(pkg.devDependencies[name]);
}
assert.equal(pkg.exports['./styles.css'], './dist/styles.css');
assert.match(read('../dist/tailwind.css'), /@source "\.\/"/);
console.log('Styles verified: compiled utilities, portable assets, no consumer build dependencies');
