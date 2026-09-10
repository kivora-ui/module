import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateManifest } from './release.mjs';

const files = ['package/package.json', 'package/dist/index.js', 'package/dist/index.d.ts', 'package/src/index.ts', 'package/README.md'];
const manifest = { name: '@kivora/native', version: '0.2.1', main: './dist/index.js', types: './dist/index.d.ts', exports: { '.': { types: './dist/index.d.ts', 'react-native': './src/index.ts', default: './dist/index.js' } }, dependencies: { '@kivora/theme': '0.1.0' } };

test('accepts a portable manifest with all exported files', () => {
  assert.doesNotThrow(() => validateManifest(manifest, files));
});

test('rejects unresolved local protocols in every dependency section', () => {
  for (const section of ['dependencies', 'optionalDependencies', 'peerDependencies', 'devDependencies']) {
    for (const version of ['workspace:*', 'file:../theme', 'link:../theme']) {
      assert.throws(() => validateManifest({ ...manifest, [section]: { '@kivora/theme': version } }, files), /protocol/i);
    }
  }
});

test('rejects missing runtime, type and React Native export targets', () => {
  for (const missing of files.slice(1, 4)) assert.throws(() => validateManifest(manifest, files.filter(file => file !== missing)), /missing/i);
});
