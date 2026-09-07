import { OfflineDownloadManager, type OfflineFileSystem } from './offline';
import type { OfflineDrmProvider } from './types';

/** The only file in this package that touches `react-native-fs` — and even
 * here `require` stays inside the function body. `react-native-fs`'s own JS
 * entry point reads native constants at *import* time and throws if its
 * native module isn't linked yet; a static top-level `import` would run
 * that unconditionally the moment anyone imports `@kivora/native` at all
 * (index.ts re-exports this module), breaking every consumer of the
 * package — not just those using offline downloads. Deferring the require
 * until `createOfflineDownloadManager` actually runs contains that failure
 * to offline-download users only. */
let cached: OfflineFileSystem | undefined;
function nativeOfflineFileSystem(): OfflineFileSystem {
  if (!cached) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const RNFS = require('react-native-fs').default ?? require('react-native-fs');
    cached = {
      documentDirectoryPath: RNFS.DocumentDirectoryPath,
      exists: path => RNFS.exists(path),
      mkdir: path => RNFS.mkdir(path),
      readFile: path => RNFS.readFile(path),
      writeFile: (path, contents) => RNFS.writeFile(path, contents),
      unlink: path => RNFS.unlink(path),
      downloadFile: options => RNFS.downloadFile(options),
      stopDownload: jobId => RNFS.stopDownload(jobId),
    };
  }
  return cached;
}

export function createOfflineDownloadManager(drmProvider?: OfflineDrmProvider): OfflineDownloadManager {
  return new OfflineDownloadManager(nativeOfflineFileSystem(), drmProvider);
}
