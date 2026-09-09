import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import spawn from 'cross-spawn';
import semver from 'semver';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'builds/release');
const packages = ['theme', 'codes', 'upload', 'native', 'nextjs', 'init'];
const json = file => JSON.parse(readFileSync(file, 'utf8'));
const digest = file => createHash('sha256').update(readFileSync(file)).digest('hex');

function run(command, args, cwd = root) {
  const result = spawn.sync(command, args, { cwd, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')}\n${result.stdout}\n${result.stderr}`);
  return result.stdout;
}

export function validateManifest(manifest, files) {
  for (const section of ['dependencies', 'optionalDependencies', 'peerDependencies', 'devDependencies']) {
    for (const [name, version] of Object.entries(manifest[section] ?? {})) {
      if (/^(workspace|file|link):/.test(version)) throw new Error(`${manifest.name}: unresolved protocol in ${section}.${name}: ${version}`);
      if (name.startsWith('@kivora/') && !semver.validRange(version)) throw new Error(`${manifest.name}: invalid internal version ${name}@${version}`);
    }
  }
  function target(value) {
    if (typeof value === 'string') {
      if (!files.includes(`package/${value.replace(/^\.\//, '')}`)) throw new Error(`${manifest.name}: missing ${value}`);
    } else if (value) for (const child of Object.values(value)) target(child);
  }
  for (const key of ['main', 'module', 'types', 'react-native', 'exports', 'bin']) target(manifest[key]);
}

export function inspectArchive(archive) {
  const files = run('tar', ['-tzf', archive]).trim().split(/\r?\n/);
  const manifest = JSON.parse(run('tar', ['-xOf', archive, 'package/package.json']));
  validateManifest(manifest, files);
  const resources = {
    '@kivora/native': ['KivoraNative.podspec', 'react-native.config.cjs', 'android/build.gradle', 'android/src/main/AndroidManifest.xml', 'android/src/main/java/com/kivora/upload/KivoraUploadPackage.kt', 'ios/KivoraUploadModule.swift', 'ios/KivoraUploadModuleBridge.m', 'ios/KivoraAudioModule.swift', 'ios/KivoraAudioModuleBridge.m'],
    '@kivora/codes': ['dist/LICENSE.bwip-js'],
    '@kivora/theme': ['dist/tailwind.css'],
    '@kivora/nextjs': ['dist/styles.css'],
  };
  for (const file of resources[manifest.name] ?? []) if (!files.includes(`package/${file}`)) throw new Error(`${manifest.name}: missing resource ${file}`);
  if (files.some(file => /(?:^|\/)(?:node_modules|\.settings|\.gradle)\//.test(file) || /\.test\.[cm]?[jt]sx?$/.test(file))) throw new Error(`${manifest.name}: development files in tarball`);
  return { name: manifest.name, version: manifest.version, file: relative(output, archive), sha256: digest(archive), files: files.length, dependencies: manifest.dependencies ?? {} };
}

function pack() {
  mkdirSync(output, { recursive: true });
  const receipts = [];
  for (const name of packages) {
    const directory = resolve(root, 'packages', name);
    const pkg = json(resolve(directory, 'package.json'));
    run('pnpm', ['pack', '--pack-destination', output], directory);
    const archive = resolve(output, `kivora-${name}-${pkg.version}.tgz`);
    const receipt = inspectArchive(archive);
    receipts.push(receipt);
    console.log(`${receipt.name}@${receipt.version}: ${receipt.files} files, sha256 ${receipt.sha256}`);
  }
  for (const receipt of receipts) {
    for (const [name, version] of Object.entries(receipt.dependencies)) {
      if (!name.startsWith('@kivora/')) continue;
      const candidate = receipts.find(item => item.name === name);
      if (!candidate || !semver.satisfies(candidate.version, version)) throw new Error(`${receipt.name}: no matching candidate for ${name}@${version}`);
    }
  }
  writeFileSync(resolve(output, 'manifest.json'), JSON.stringify(receipts, null, 2) + '\n');
}

function publish(name) {
  if (!packages.includes(name)) throw new Error('Specify a package: ' + packages.join(', '));
  const receipt = json(resolve(output, 'manifest.json')).find(item => item.name === `@kivora/${name}`);
  const pkg = json(resolve(root, 'packages', name, 'package.json'));
  const archive = resolve(output, `kivora-${name}-${pkg.version}.tgz`);
  const current = inspectArchive(archive);
  if (current.sha256 !== receipt.sha256 || current.version !== pkg.version) throw new Error('Release changed; run pnpm release:prepare and validate again.');
  for (const [dependency, version] of Object.entries(current.dependencies)) {
    if (dependency.startsWith('@kivora/')) run('npm', ['view', `${dependency}@${version}`, 'version', '--registry=https://registry.npmjs.org']);
  }
  console.log(run('npm', ['publish', archive, '--access', 'public', '--registry=https://registry.npmjs.org']));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [command, name] = process.argv.slice(2);
  if (command === 'pack') pack();
  else if (command === 'publish') publish(name);
  else if (command === 'guard') throw new Error('Directory publishing is disabled. Use pnpm release:prepare, validate the tarballs, then pnpm publish:<package>.');
  else throw new Error('Usage: node scripts/release.mjs pack|publish <package>|guard');
}
