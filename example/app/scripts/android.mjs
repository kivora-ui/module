import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const cwd = fileURLToPath(new URL('../android', import.meta.url));
const windows = process.platform === 'win32';
const result = spawnSync(windows ? 'gradlew.bat' : 'bash', windows ? process.argv.slice(2) : ['./gradlew', ...process.argv.slice(2)], { cwd, stdio: 'inherit', shell: windows });
process.exit(result.status ?? 1);
