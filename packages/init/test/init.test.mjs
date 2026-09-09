import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';
import { detectFramework, packageManager, createPlan, applyPlan } from '../src/project.mjs';

const cli = fileURLToPath(new URL('../src/cli.mjs', import.meta.url));
const web = { react: '^19.2.0', 'react-dom': '^19.2.0', next: '^15.0.0' };
const native = { react: '19.2.3', 'react-native': '0.85.3', '@react-native/babel-preset': '0.85.3', '@react-native/metro-config': '0.85.3' };
function fixture(t, dependencies = web, files = { 'app/layout.tsx': "import './globals.css';\nexport default function Layout({children}: {children: React.ReactNode}) { return <html><body className='custom'>{children}</body></html>; }" }) {
  const root = mkdtempSync(join(tmpdir(), 'kivora-init-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  put(root, 'package.json', JSON.stringify({ name: 'test-app', private: true, dependencies }));
  for (const [file, content] of Object.entries(files)) put(root, file, content);
  return root;
}
function put(root, file, content) { mkdirSync(dirname(join(root, file)), { recursive: true }); writeFileSync(join(root, file), content); }
function read(root, file) { return readFileSync(join(root, file), 'utf8'); }
function evaluate(text, mocks = {}) {
  const context = { module: { exports: {} }, require: name => mocks[name] ?? {}, __dirname: '/app' };
  vm.runInNewContext(text, context);
  return context.module.exports;
}

test('detects frameworks without choosing arbitrarily in mixed or unknown apps', () => {
  assert.equal(detectFramework({ dependencies: web }), 'nextjs');
  assert.equal(detectFramework({ devDependencies: native }), 'native');
  assert.equal(detectFramework({ dependencies: { ...web, ...native } }), undefined);
  assert.equal(detectFramework({}), undefined);
});

test('web preserves app content, config plugins, user CSS order and is idempotent', async t => {
  const root = fixture(t);
  put(root, 'next.config.ts', "// custom\nconst config = { images: { unoptimized: true }, transpilePackages: ['other'] } satisfies NextConfig;\nexport default config;");
  put(root, 'postcss.config.cjs', "module.exports = { plugins: { autoprefixer: {}, '@tailwindcss/postcss': { optimize: false } } };");
  const plan = createPlan(root, 'nextjs');
  assert.equal(existsSync(join(root, 'app/kivora.css')), false);
  assert.ok(plan.files.get('next.config.ts').after.includes("'other'"));
  assert.ok(plan.files.get('next.config.ts').after.includes('images: { unoptimized: true }'));
  assert.ok(plan.files.get('postcss.config.cjs') === undefined); // Existing compatible config stays byte-identical.
  await applyPlan(plan, { install: false });
  const layout = read(root, 'app/layout.tsx');
  assert.ok(layout.includes("<body className='custom'><KivoraRoot>{children}</KivoraRoot></body>"));
  assert.ok(layout.indexOf("import './kivora.css'") < layout.indexOf("import './globals.css'"));
  assert.equal(createPlan(root, 'nextjs').files.size, 0);
});

test('src/app uses compiled CSS without Tailwind configuration', t => {
  const root = fixture(t, web, { 'src/app/layout.jsx': 'export default function Layout({children}) { return <html><body>{children}</body></html> }' });
  const plan = createPlan(root, 'nextjs');
  assert.equal(plan.files.get('src/app/kivora.css').after, '@import "@kivora/nextjs/styles.css";\n');
  assert.deepEqual(plan.dev, []);
  assert.deepEqual(plan.runtime, ['@kivora/nextjs@latest']);
  assert.ok(!plan.files.has('postcss.config.mjs'));
  assert.ok(plan.files.has('src/app/kivora-provider.jsx'));
});

test('Pages Router wraps the default component only and keeps use client first', async t => {
  const root = fixture(t, web, { 'pages/_app.tsx': "'use client';\nimport './other.css';\nconst App = ({Component,pageProps}) => { const helper = () => { return <span/> }; return <Component {...pageProps}/>; }; export default App;" });
  await applyPlan(createPlan(root, 'nextjs'), { install: false });
  const result = read(root, 'pages/_app.tsx');
  assert.match(result, /^'use client';/);
  assert.ok(result.includes('const helper = () => { return <span/> }'));
  assert.ok(result.includes('<KivoraRoot>{<Component {...pageProps}/>}</KivoraRoot>'));
  assert.ok(result.includes("import './kivora.css'"));
  assert.ok(!read(root, 'pages/kivora-provider.tsx').includes('kivora.css'));
});

test('preserves dependency versions and only installs missing dependencies', t => {
  const root = fixture(t, { ...web, '@kivora/nextjs': '^0.2.0', tailwindcss: '^4.1.0' });
  const plan = createPlan(root, 'nextjs');
  assert.deepEqual(plan.runtime, []);
  assert.deepEqual(plan.dev, []);
});

test('rejects installed versions without precompiled styles', t => {
  const root = fixture(t, { ...web, '@kivora/nextjs': '^0.1.0' });
  const before = read(root, 'app/layout.tsx');
  assert.throws(() => createPlan(root, 'nextjs'), /@kivora\/nextjs.*>=0\.2\.0/);
  assert.equal(read(root, 'app/layout.tsx'), before);
});

test('existing Tailwind and alternative PostCSS configuration are left untouched', t => {
  const root = fixture(t, { ...web, tailwindcss: '^3.4.0' });
  const before = read(root, 'app/layout.tsx');
  put(root, '.postcssrc.json', '{}');
  const plan = createPlan(root, 'nextjs');
  assert.deepEqual(plan.dev, []);
  assert.ok(!plan.files.has('.postcssrc.json'));
  assert.ok(!plan.files.has('postcss.config.mjs'));
  assert.equal(read(root, 'app/layout.tsx'), before);
  assert.equal(existsSync(join(root, 'next.config.mjs')), false);
});

for (const [label, file, content] of [
  ['dynamic config', 'next.config.mjs', 'export default phase => ({})'],
  ['spread config', 'next.config.mjs', 'export default {...base}'],
  ['provider collision', 'app/kivora-provider.tsx', 'user content'],
  ['existing provider', 'app/layout.tsx', "import {KivoraProvider} from '@kivora/nextjs'; export default function L(){return <body><KivoraProvider/></body>}"],
  ['unsupported entry', 'app/layout.tsx', 'export default function L(){ return <main/> }'],
]) test(`${label} aborts with original files intact`, t => {
  const root = fixture(t);
  put(root, file, content);
  assert.throws(() => createPlan(root, 'nextjs'));
  assert.equal(read(root, file), content);
  assert.equal(existsSync(join(root, '.kivora')), false);
});

test('native config preserves Babel plugins, Metro resolver and Tailwind customization', async t => {
  const root = fixture(t, native, {
    'App.tsx': 'export default function App(){return <ExistingApp/>}',
    'babel.config.js': "module.exports = { presets: [['module:@react-native/babel-preset', {custom: true}]], plugins: [['react-native-worklets/plugin', { custom: true }], 'other'] };",
    'metro.config.js': "module.exports = { resolver: { custom: true } };",
    'tailwind.config.js': "module.exports = { content: ['./custom/**'], theme: { extend: { colors: { primary: 'blue' }, spacing: { custom: '7px' } } }, plugins: [] };",
    'android/app/src/main/AndroidManifest.xml': '<manifest xmlns:android="http://schemas.android.com/apk/res/android"><application /></manifest>',
  });
  const plan = createPlan(root, 'native');
  const babel = evaluate(plan.files.get('babel.config.js').after);
  assert.equal(babel.presets[0][1].custom, true);
  assert.equal(babel.presets[0][1].jsxImportSource, 'nativewind');
  assert.equal(babel.plugins[0], 'other');
  assert.equal(babel.plugins.at(-1)[0], 'react-native-worklets/plugin');
  assert.equal(babel.plugins.at(-1)[1].custom, true);
  const metro = evaluate(plan.files.get('metro.config.js').after, { 'nativewind/metro': { withNativeWind: (config, options) => ({ ...config, options }) } });
  assert.equal(metro.resolver.custom, true);
  assert.equal(metro.options.input, './kivora.css');
  const tailwind = evaluate(plan.files.get('tailwind.config.js').after);
  assert.equal(tailwind.theme.extend.colors.primary, 'blue');
  assert.equal(tailwind.theme.extend.spacing.custom, '7px');
  assert.equal(tailwind.content[0], './custom/**');
  assert.ok(tailwind.content.some(p => p.includes('@kivora/native/src')));
  await applyPlan(plan, { install: false });
  assert.match(read(root, 'android/app/src/main/AndroidManifest.xml'), /POST_NOTIFICATIONS/);
  assert.equal(createPlan(root, 'native').files.size, 0);
});

test('native src/App and missing configs are prepared with semantic colors', t => {
  const root = fixture(t, native, { 'src/App.jsx': 'export default () => <ExistingApp/>' });
  const plan = createPlan(root, 'native');
  assert.match(plan.files.get('metro.config.js').after, /\.\/src\/kivora.css/);
  const tw = evaluate(plan.files.get('tailwind.config.js').after);
  assert.equal(tw.theme.extend.colors.background, 'rgb(var(--background) / <alpha-value>)');
  assert.ok(plan.files.get('src/kivora-provider.jsx').after.includes('KeyboardProvider'));
  assert.ok(plan.files.get('src/kivora-provider.jsx').after.includes("'--background'"));
});

test('unsupported native combinations and Expo do not trigger a migration', t => {
  for (const extra of [{ 'react-native': '0.74.0' }, { nativewind: '^5.0.0' }, { expo: '^54.0.0' }, { 'react-native-reanimated': '^3.16.0' }]) {
    const root = fixture(t, { ...native, ...extra }, { 'App.tsx': 'export default () => <App/>' });
    assert.throws(() => createPlan(root, 'native'));
    assert.equal(existsSync(join(root, 'babel.config.js')), false);
  }
});

test('reuses an existing NativeWind CSS input and preserves its customization', async t => {
  const root = fixture(t, native, {
    'src/App.tsx': 'export default function App(){ return <Existing/> }',
    'metro.config.js': "const {withNativeWind} = require('nativewind/metro'); module.exports = withNativeWind({}, {input: './global.css', inlineRem: 14});",
    'global.css': '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n.custom { color: red; }\n',
  });
  const css = read(root, 'global.css');
  const metro = read(root, 'metro.config.js');
  await applyPlan(createPlan(root, 'native'), { install: false });
  assert.equal(read(root, 'global.css'), css);
  assert.equal(read(root, 'metro.config.js'), metro);
  assert.match(read(root, 'src/kivora-provider.tsx'), /import '\.\.\/global.css'/);
  assert.equal(createPlan(root, 'native').files.size, 0);
});

test('manifest edits made after preview are preserved', async t => {
  const root = fixture(t);
  const plan = createPlan(root, 'nextjs');
  put(root, 'package.json', '{"user":"edit"}');
  await assert.rejects(applyPlan(plan), /package.json cambió/);
  assert.equal(read(root, 'package.json'), '{"user":"edit"}');
});

test('detects ancestor workspace manager and rejects conflicting lockfiles', t => {
  const root = fixture(t);
  put(root, 'pnpm-lock.yaml', 'lockfileVersion: 9');
  put(root, 'apps/web/package.json', JSON.stringify({ dependencies: web }));
  assert.equal(packageManager(join(root, 'apps/web')).name, 'pnpm');
  assert.equal(packageManager(join(root, 'apps/web')).root, root);
  assert.throws(() => packageManager(root, 'npm'), /no coincide/);
  put(root, 'yarn.lock', '');
  assert.throws(() => packageManager(root), /conflicto/);
});

test('uses the correct manager arguments with paths containing spaces', async t => {
  const parent = fixture(t);
  const root = join(parent, 'app with spaces');
  put(root, 'package.json', JSON.stringify({ dependencies: web, packageManager: 'pnpm@9.15.0' }));
  put(root, 'app/layout.jsx', 'export default () => <html><body>Hello</body></html>');
  const calls = [];
  await applyPlan(createPlan(root, 'nextjs'), { runner: async (command, args, cwd) => calls.push({ command, args, cwd }) });
  assert.equal(calls[0].command, 'pnpm');
  assert.deepEqual(calls[0].args, ['add', '@kivora/nextjs@latest']);
  assert.equal(calls[0].cwd, root);
  assert.equal(calls.length, 1);
});

test('failed installation restores existing content, manifest and lockfile, removes new files', async t => {
  const root = fixture(t);
  put(root, 'package-lock.json', '{"original":true}');
  const manifest = read(root, 'package.json');
  const entry = read(root, 'app/layout.tsx');
  await assert.rejects(applyPlan(createPlan(root, 'nextjs'), { runner: async () => {
    put(root, 'package.json', '{}');
    put(root, 'package-lock.json', 'changed');
    throw new Error('network failure');
  } }), /restaurados/);
  assert.equal(read(root, 'package.json'), manifest);
  assert.equal(read(root, 'package-lock.json'), '{"original":true}');
  assert.equal(read(root, 'app/layout.tsx'), entry);
  assert.equal(existsSync(join(root, 'app/kivora.css')), false);
});

test('refuses changes made after preview', async t => {
  const root = fixture(t);
  const plan = createPlan(root, 'nextjs');
  put(root, 'app/layout.tsx', 'new user edits');
  await assert.rejects(applyPlan(plan, { install: false }), /cambió/);
  assert.equal(read(root, 'app/layout.tsx'), 'new user edits');
});

test('CLI dry-run never writes files and noninteractive ambiguity fails', t => {
  const root = fixture(t);
  let result = spawnSync(process.execPath, [cli, '--cwd', root, '--dry-run'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Vista previa/);
  assert.equal(existsSync(join(root, '.kivora')), false);
  assert.equal(existsSync(join(root, 'next.config.mjs')), false);
  put(root, 'package.json', '{"dependencies":{}}');
  result = spawnSync(process.execPath, [cli, '--cwd', root, '--yes'], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /--framework/);
});

test('generated TypeScript providers transpile without syntax diagnostics', t => {
  for (const framework of ['nextjs', 'native']) {
    const root = framework === 'nextjs' ? fixture(t) : fixture(t, native, { 'App.tsx': 'export default function App(){return <Existing/>}' });
    for (const [file, { after }] of createPlan(root, framework).files) {
      if (!file.endsWith('.tsx')) continue;
      const result = ts.transpileModule(after, { fileName: file, reportDiagnostics: true, compilerOptions: { jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } });
      assert.equal(result.diagnostics.length, 0, file);
    }
  }
});
