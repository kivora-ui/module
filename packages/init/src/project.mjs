import { existsSync, readFileSync, writeFileSync, mkdirSync, lstatSync, realpathSync, unlinkSync } from 'node:fs';
import { resolve, dirname, relative, join, isAbsolute } from 'node:path';
import { randomUUID } from 'node:crypto';
import spawn from 'cross-spawn';
import semver from 'semver';
import ts from 'typescript';
import { arrayWith, babelConfig, parse, setConfig, wrapEntry } from './transforms.mjs';
import { colors, nativeProvider, provider, webProvider } from './templates.mjs';

const lockfiles = { 'pnpm-lock.yaml': 'pnpm', 'package-lock.json': 'npm', 'npm-shrinkwrap.json': 'npm', 'yarn.lock': 'yarn', 'bun.lock': 'bun', 'bun.lockb': 'bun' };
const read = file => readFileSync(file, 'utf8');
const json = file => JSON.parse(read(file).replace(/^\uFEFF/, ''));
const deps = pkg => ({ ...pkg.devDependencies, ...pkg.dependencies });

export function detectFramework(pkg) {
  const all = deps(pkg);
  const found = [all.next && 'nextjs', (all['react-native'] || all.expo) && 'native'].filter(Boolean);
  return found.length === 1 ? found[0] : undefined;
}

export function inspectProject(cwd) {
  const root = realpathSync(resolve(cwd));
  if (!existsSync(join(root, 'package.json'))) throw new Error('Ejecuta init dentro de una aplicación existente con package.json (o usa --cwd).');
  return { root, pkg: json(join(root, 'package.json')) };
}

export function packageManager(root, override) {
  let directory = root;
  while (true) {
    const manifest = existsSync(join(directory, 'package.json')) ? json(join(directory, 'package.json')) : {};
    const declared = manifest.packageManager?.split('@')[0];
    const managers = [...new Set(Object.entries(lockfiles).filter(([file]) => existsSync(join(directory, file))).map(([, manager]) => manager))];
    if (declared && !['npm', 'pnpm', 'yarn', 'bun'].includes(declared)) throw new Error(`Gestor no soportado: ${declared}`);
    if (override && ((declared && declared !== override) || managers.some(m => m !== override))) throw new Error('El gestor indicado no coincide con packageManager/lockfile. No se mezclarán gestores.');
    if (managers.length > 1 || (declared && managers.some(m => m !== declared))) throw new Error(`Gestores en conflicto en ${directory}; conserva el lockfile correcto antes de continuar.`);
    if (declared || managers.length) return { name: override ?? declared ?? managers[0], root: directory };
    if (dirname(directory) === directory) return { name: override ?? 'npm', root };
    directory = dirname(directory);
  }
}

export function createPlan(root, framework, managerOverride) {
  const pkg = json(join(root, 'package.json'));
  const all = deps(pkg);
  const manager = packageManager(root, managerOverride);
  const files = new Map();
  const runtime = [];
  const dev = [];
  const notes = [];
  function requireRange(name, range, required = false) {
    const current = all[name];
    if (!current) {
      if (required) throw new Error(`Falta ${name}: init configura una aplicación existente; no crea ni migra el framework.`);
      return;
    }
    if (!semver.validRange(current) || !semver.subset(current, range)) throw new Error(`${name}@${current} no está dentro de ${range}. No se cambiará su versión automáticamente.`);
  }
  function dependency(name, version, development = false) {
    if (!all[name]) (development ? dev : runtime).push(`${name}@${version}`);
  }
  function safe(file) {
    const target = resolve(root, file);
    if (relative(root, target).startsWith('..') || isAbsolute(relative(root, target))) throw new Error(`Ruta fuera del proyecto: ${file}`);
    let part = target;
    while (part !== root) {
      if (existsSync(part) && lstatSync(part).isSymbolicLink()) throw new Error(`No se modifican enlaces simbólicos: ${file}`);
      part = dirname(part);
    }
    return target;
  }
  function change(file, content, createOnly = false) {
    const target = safe(file);
    const before = existsSync(target) ? read(target) : null;
    if (before === content) return;
    if (before !== null && createOnly) throw new Error(`${file} ya existe con contenido diferente. Se conserva; resuelve el conflicto antes de continuar.`);
    files.set(file, { before, after: content });
  }
  function config(base, fallback, initial, transform) {
    const candidates = ['js', 'cjs', 'mjs', 'ts', 'cts', 'mts', 'json'].map(ext => `${base}.${ext}`).filter(f => existsSync(join(root, f)));
    if (candidates.length > 1) throw new Error(`Hay varias configuraciones ${base}: ${candidates.join(', ')}`);
    const file = candidates[0] ?? fallback;
    safe(file);
    try {
      const content = transform(candidates.length ? read(join(root, file)) : initial, file);
      parse(content, file);
      change(file, content);
    } catch (error) { throw new Error(`${file}: ${error.message}`); }
  }
  function findEntry(candidates) {
    const found = candidates.filter(file => existsSync(join(root, file)));
    if (found.length !== 1) throw new Error(`No se puede elegir una entrada única. Entradas soportadas: ${candidates.join(', ')}.`);
    return found[0];
  }
  const extensions = ['tsx', 'jsx', 'js'];
  requireRange('react', '>=18', true);
  if (framework === 'nextjs') {
    requireRange('next', '>=13', true);
    requireRange('react-dom', '>=18', true);
    requireRange('@kivora/nextjs', '>=0.2.0');
    dependency('@kivora/nextjs', 'latest');
    const candidates = ['app/layout', 'src/app/layout', 'pages/_app', 'src/pages/_app'].flatMap(base => extensions.map(ext => `${base}.${ext}`));
    // Both routers can coexist; each root gets its own integration.
    const entries = candidates.filter(file => existsSync(join(root, file)));
    if (!entries.length || new Set(entries.map(f => f.replace(/\.[^.]+$/, ''))).size !== entries.length) throw new Error('No se encontró un layout de App Router o pages/_app único por router.');
    config('next.config', 'next.config.mjs', 'export default {};\n', text => setConfig(text, ['transpilePackages'], arrayWith(["'@kivora/nextjs'", "'@kivora/theme'"])));
    for (const entry of entries) {
      const directory = dirname(entry);
      const typed = entry.endsWith('.tsx');
      change(`${directory}/kivora-provider.${typed ? 'tsx' : 'jsx'}`, provider(webProvider, typed), true);
      change(`${directory}/kivora.css`, '@import "@kivora/nextjs/styles.css";\n', true);
      let content = wrapEntry(read(safe(entry)), entry, entry.includes('/layout.') ? 'app' : 'component', './kivora-provider');
      const ast = parse(content, entry);
      if (!ast.statements.some(s => ts.isImportDeclaration(s) && s.moduleSpecifier.text === './kivora.css')) {
        const at = ast.statements.find(ts.isImportDeclaration)?.getStart(ast) ?? 0;
        content = content.slice(0, at) + "import './kivora.css';\n" + content.slice(at);
      }
      change(entry, content);
    }
  } else if (framework === 'native') {
    if (all.expo) throw new Error('Expo requiere una receta propia (SDK y development build). Esta versión de init soporta React Native Community CLI; consulta @kivora/native/README.md.');
    requireRange('react-native', '>=0.85.3 <0.86', true);
    requireRange('react', '>=19.2 <20', true);
    const versions = {
      nativewind: ['4.2.6', '>=4.2.6 <5'],
      'react-native-reanimated': ['4.3.0', '>=4.3.0 <4.4'],
      'react-native-worklets': ['0.8.3', '>=0.8.3 <0.9'],
      'react-native-gesture-handler': ['^2.30.0', '>=2.30 <3'],
      'react-native-safe-area-context': ['^5.5.2', '>=5.5.2 <6'],
      'react-native-svg': ['^15.15.1', '>=15.15.1 <16'],
      'react-native-keyboard-controller': ['^1.22.0', '>=1.22 <2'],
      '@notifee/react-native': ['^9.1.8', '>=9.1.8 <10'],
    };
    for (const [name, [version, range]] of Object.entries(versions)) { requireRange(name, range); dependency(name, version); }
    requireRange('tailwindcss', '>=3.4.17 <4');
    requireRange('@react-native/babel-preset', '>=0.85 <0.86', true);
    requireRange('@react-native/metro-config', '>=0.85 <0.86', true);
    dependency('@kivora/native', 'latest');
    dependency('tailwindcss', '3.4.19', true);
    const entry = findEntry(['App', 'src/App'].flatMap(base => extensions.map(ext => `${base}.${ext}`)));
    const directory = dirname(entry);
    const typed = entry.endsWith('.tsx');
    let css = `${directory === '.' ? '' : directory + '/'}kivora.css`;
    let nativeWindDetected = false;
    // Reuse an existing NativeWind input instead of creating a second CSS pipeline.
    for (const name of ['metro.config.js', 'metro.config.cjs']) {
      if (!existsSync(join(root, name))) continue;
      const source = parse(read(safe(name)));
      const calls = [];
      function visit(node) {
        if (ts.isCallExpression(node) && /(?:^|\.)withNativeWind$/.test(node.expression.getText(source))) calls.push(node);
        ts.forEachChild(node, visit);
      }
      visit(source);
      if (calls.length > 1) throw new Error('Metro contiene varias llamadas withNativeWind. Requiere revisión manual.');
      if (calls.length === 1) {
        nativeWindDetected = true;
        const options = calls[0].arguments[1];
        const input = options && ts.isObjectLiteralExpression(options) && options.properties.find(p => p.name?.getText(source).replaceAll(/["']/g, '') === 'input');
        if (!input || !ts.isPropertyAssignment(input) || !ts.isStringLiteral(input.initializer)) throw new Error('Metro: input de NativeWind dinámico o ausente.');
        css = relative(root, safe(input.initializer.text)).replaceAll('\\', '/');
        if (!css.endsWith('.css')) throw new Error('Metro: input de NativeWind debe ser un archivo CSS.');
      }
    }
    let cssImport = relative(join(root, directory), join(root, css)).replaceAll('\\', '/');
    if (!cssImport.startsWith('.')) cssImport = './' + cssImport;
    change(`${directory}/kivora-provider.${typed ? 'tsx' : 'jsx'}`, provider(nativeProvider.replace('./kivora.css', cssImport), typed), true);
    const currentCss = existsSync(safe(css)) ? read(safe(css)) : '';
    const missingDirectives = ['base', 'components', 'utilities'].filter(name => !new RegExp(`@tailwind\\s+${name}\\s*;`).test(currentCss));
    const directives = missingDirectives.map(name => `@tailwind ${name};\n`).join('');
    change(css, directives + currentCss);
    if (typed) change('kivora-nativewind.d.ts', '/// <reference types="nativewind/types" />\n', true);
    const commonjs = pkg.type === 'module' ? 'cjs' : 'js';
    if (pkg.babel || ['.babelrc', '.babelrc.json', '.babelrc.js', '.babelrc.cjs'].some(f => existsSync(join(root, f)))) throw new Error('Babel usa una configuración alternativa; unifícala en babel.config antes de continuar.');
    config('babel.config', `babel.config.${commonjs}`, "module.exports = { presets: ['module:@react-native/babel-preset'] };\n", (text, file) => {
      if (/\.(mjs|mts|ts)$/.test(file) || (file.endsWith('.js') && pkg.type === 'module')) throw new Error('Esta receta Babel requiere CommonJS (.cjs en proyectos ESM).');
      return babelConfig(text);
    });
    config('metro.config', `metro.config.${commonjs}`, "const { getDefaultConfig } = require('@react-native/metro-config');\nmodule.exports = getDefaultConfig(__dirname);\n", (text, file) => {
      if (file.endsWith('.mjs') || file.endsWith('.ts') || (file.endsWith('.js') && pkg.type === 'module')) throw new Error('Metro debe usar CommonJS para esta receta.');
      if (text.includes('withNativeWind')) {
        // The input was inspected above; the existing Metro configuration is preserved.
        if (nativeWindDetected) return text;
        throw new Error('Metro importa NativeWind pero no se encontró una llamada reconocible.');
      }
      const source = parse(text);
      const assignments = source.statements.filter(s => ts.isExpressionStatement(s) && ts.isBinaryExpression(s.expression) && s.expression.left.getText(source) === 'module.exports');
      if (assignments.length !== 1) throw new Error('Metro necesita una única asignación module.exports.');
      const expr = assignments[0].expression.right;
      let value = expr;
      if (ts.isIdentifier(value)) {
        const identifier = value.text;
        value = source.statements.filter(ts.isVariableStatement).flatMap(s => [...s.declarationList.declarations]).find(d => d.name.getText(source) === identifier)?.initializer;
      }
      if (!value || !(ts.isObjectLiteralExpression(value) || (ts.isCallExpression(value) && ['getDefaultConfig', 'mergeConfig'].includes(value.expression.getText(source))))) throw new Error('Metro exporta una configuración dinámica no reconocida; requiere revisión manual.');
      return text.slice(0, expr.getStart(source)) + `require('nativewind/metro').withNativeWind(${expr.getText(source)}, { input: './${css}', inlineRem: 16 })` + text.slice(expr.end);
    });
    config('tailwind.config', `tailwind.config.${commonjs}`, 'module.exports = {};\n', (text, file) => {
      if (/\.(mjs|mts|ts)$/.test(file) || (file.endsWith('.js') && pkg.type === 'module')) throw new Error('Esta receta Tailwind requiere CommonJS (.cjs en proyectos ESM).');
      text = setConfig(text, ['content'], arrayWith(["'./App.{js,jsx,ts,tsx}'", "'./src/**/*.{js,jsx,ts,tsx}'", "'./node_modules/@kivora/native/src/**/*.{ts,tsx}'"]));
      text = setConfig(text, ['presets'], arrayWith(["require('nativewind/preset')"]));
      text = setConfig(text, ['darkMode'], node => {
        if (node && !["'class'", '"class"'].includes(node.getText())) throw new Error('NativeWind necesita darkMode class; se conserva tu estrategia actual.');
        return "'class'";
      });
      for (const name of colors) text = setConfig(text, ['theme', 'extend', 'colors', name], node => node?.getText() ?? JSON.stringify(`rgb(var(--${name}) / <alpha-value>)`));
      return text;
    });
    change(entry, wrapEntry(read(safe(entry)), entry, 'component', './kivora-provider'));
    const manifest = 'android/app/src/main/AndroidManifest.xml';
    if (existsSync(join(root, manifest))) {
      let xml = read(safe(manifest));
      if (!xml.includes('android.permission.POST_NOTIFICATIONS')) {
        if (!/<manifest\b[^>]*>/.test(xml)) throw new Error('AndroidManifest.xml no reconocido.');
        xml = xml.replace(/<manifest\b[^>]*>/, match => `${match}\n    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />`);
        change(manifest, xml);
      }
    }
    notes.push('Recompila Android. En iOS instala los pods con el procedimiento de tu proyecto y recompila.', 'Para toast, configura un icono de notificación Android existente. iOS y Expo no están validados por esta receta.', 'La receta del repositorio tiene pendiente verificar el parche local de react-native-css-interop; prueba los estilos en una instalación externa.');
  } else throw new Error('Framework inválido: usa nextjs o native.');
  return { root, framework, manager, files, runtime, dev, notes, manifest: read(join(root, 'package.json')) };
}

export function installCommands(plan) {
  const { name } = plan.manager;
  return [[plan.runtime, false], [plan.dev, true]].filter(([packages]) => packages.length).map(([packages, development]) => ({
    command: name,
    args: [name === 'npm' ? 'install' : 'add', ...(development ? ['-D'] : []), ...packages],
  }));
}

export function runInstall(command, args, cwd) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit', shell: false });
    child.on('error', reject);
    child.on('exit', (code, signal) => code === 0 ? resolvePromise() : reject(new Error(`${command} terminó con ${signal ?? code}.`)));
  });
}

export async function applyPlan(plan, { install = true, runner = runInstall } = {}) {
  if (read(join(plan.root, 'package.json')) !== plan.manifest) throw new Error('package.json cambió desde la vista previa. Repite init.');
  for (const directory of [join(plan.root, '.kivora'), join(plan.root, '.kivora/backups')]) {
    if (existsSync(directory) && lstatSync(directory).isSymbolicLink()) throw new Error('El directorio de copias no puede ser un enlace simbólico.');
  }
  // Snapshot manifests and workspace locks too, since the package manager can update them.
  const snapshots = new Map();
  for (const [file, { before }] of plan.files) {
    const target = join(plan.root, file);
    const current = existsSync(target) ? read(target) : null;
    if (current !== before) throw new Error(`${file} cambió desde la vista previa. Repite init.`);
    snapshots.set(target, before === null ? null : readFileSync(target));
  }
  if (install) {
    for (const directory of new Set([plan.root, plan.manager.root])) {
      for (const file of ['package.json', ...Object.keys(lockfiles)]) {
        const target = join(directory, file);
        snapshots.set(target, existsSync(target) ? readFileSync(target) : null);
      }
    }
  }
  if (!plan.files.size && (!install || !installCommands(plan).length)) return null;
  const backup = join(plan.root, '.kivora', 'backups', randomUUID());
  mkdirSync(backup, { recursive: true });
  const index = [];
  let i = 0;
  for (const [target, content] of snapshots) {
    const name = content === null ? null : `${i++}.bak`;
    if (name) writeFileSync(join(backup, name), content, { flag: 'wx' });
    index.push({ path: target, backup: name });
  }
  writeFileSync(join(backup, 'manifest.json'), JSON.stringify(index, null, 2));
  try {
    for (const [file, { after }] of plan.files) {
      mkdirSync(dirname(join(plan.root, file)), { recursive: true });
      writeFileSync(join(plan.root, file), after);
    }
    if (install) for (const { command, args } of installCommands(plan)) await runner(command, args, plan.root);
  } catch (error) {
    const failures = [];
    for (const [target, content] of snapshots) {
      try {
        if (content === null) { if (existsSync(target)) unlinkSync(target); }
        else writeFileSync(target, content);
      } catch { failures.push(target); }
    }
    throw new Error(`${error.message}\n${failures.length ? `No se pudo restaurar: ${failures.join(', ')}` : 'Archivos y lockfiles restaurados.'}\nCopias: ${backup}\nLa instalación puede haber cambiado node_modules o ejecutado scripts; revisa el error y reinstala con tu gestor.`);
  }
  return backup;
}
