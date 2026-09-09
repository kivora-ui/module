import assert from 'node:assert/strict';
import { readFileSync, readdirSync, lstatSync, realpathSync, writeFileSync } from 'node:fs';
import { resolve, relative, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import spawn from 'cross-spawn';
import { inspectArchive } from './release.mjs';

const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const root = realpathSync(process.argv[2]);
assert.ok(relative(repository, root).startsWith('..'), 'Use a disposable app outside the monorepo');
const manifest = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
assert.equal(manifest.dependencies['react-native'], '0.87.1');
assert.equal(manifest.dependencies.react, '19.2.3');
assert.ok(!manifest.dependencies['@kivora/native'], 'Use a fresh app without Kivora');
const native = resolve(repository, 'builds/release/kivora-native-0.2.1.tgz');
const init = resolve(repository, 'builds/release/kivora-init-0.2.1.tgz');
inspectArchive(native);
inspectArchive(init);

function run(command, args) {
  const result = spawn.sync(command, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `${command} ${args.join(' ')}`);
}

function snapshot(directory = root, result = {}) {
  for (const name of readdirSync(directory)) {
    if (['node_modules', '.git', 'build', '.gradle', '.kivora'].includes(name)) continue;
    const file = join(directory, name);
    if (lstatSync(file).isDirectory()) snapshot(file, result);
    else result[relative(root, file)] = createHash('sha256').update(readFileSync(file)).digest('hex');
  }
  return result;
}

run('npm', ['install', '--save-dev', '--save-exact', init]);
const cli = join(root, 'node_modules/@kivora/init/src/cli.mjs');
const before = snapshot();
run(process.execPath, [cli, '--cwd', root, '--framework', 'native', '--dry-run']);
assert.deepEqual(snapshot(), before, 'dry-run must preserve consumer files');
const { createPlan, applyPlan } = await import(pathToFileURL(join(root, 'node_modules/@kivora/init/src/project.mjs')));
const plan = createPlan(root, 'native');
plan.runtime = plan.runtime.map(spec => spec === '@kivora/native@0.2.1' ? native : spec);
await applyPlan(plan);
const after = snapshot();
run(process.execPath, [cli, '--cwd', root, '--framework', 'native', '--yes']);
assert.deepEqual(snapshot(), after, 'second initialization must preserve consumer files');
assert.equal(createPlan(root, 'native').files.size, 0);
assert.equal(createPlan(root, 'native').runtime.length, 0);
assert.equal(createPlan(root, 'native').dev.length, 0);
const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'));
const resolutions = {};
for (const name of ['native', 'codes', 'theme', 'upload']) {
  const path = `node_modules/@kivora/${name}`;
  assert.equal(lstatSync(join(root, path)).isSymbolicLink(), false);
  assert.ok(!lock.packages[path].link);
  assert.match(lock.packages[path].resolved, name === 'native' ? /^file:.*\.tgz$/ : /^https:\/\/registry\.npmjs\.org\//);
  resolutions[name] = lock.packages[path];
}
run('npm', ['ls', '--depth=0']);
run(process.execPath, ['node_modules/typescript/bin/tsc', '--noEmit']);
writeFileSync(join(root, 'kivora-release-validation.json'), JSON.stringify({ native: inspectArchive(native), init: inspectArchive(init), resolutions, dryRun: true, idempotent: true, typecheck: true }, null, 2) + '\n');
console.log(`External npm installation, dry-run, repeated initialization and typecheck passed: ${root}`);
