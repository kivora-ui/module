import { OfflineDownloadManager, type OfflineFileSystem, type OfflineTransport } from './offline';
import type { OfflineDownloadEntry, OfflineDrmProvider } from './types';

/** The only file in this package that touches `react-native-fs` — and even
 * here `require` stays inside the function body. `react-native-fs`'s own JS
 * entry point reads native constants at *import* time and throws if its
 * native module isn't linked yet; a static top-level `import` would run
 * that unconditionally the moment anyone imports `@kivora/native` at all
 * (index.ts re-exports this module), breaking every consumer of the
 * package — not just those using offline downloads. Deferring the require
 * until `createOfflineDownloadManager` actually runs contains that failure
 * to offline-download users only. */
let cachedFs: OfflineFileSystem | undefined;
function nativeOfflineFileSystem(): OfflineFileSystem {
  if (!cachedFs) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const RNFS = require('react-native-fs').default ?? require('react-native-fs');
    cachedFs = {
      documentDirectoryPath: RNFS.DocumentDirectoryPath,
      exists: path => RNFS.exists(path),
      mkdir: path => RNFS.mkdir(path),
      readFile: path => RNFS.readFile(path),
      writeFile: (path, contents) => RNFS.writeFile(path, contents),
      unlink: path => RNFS.unlink(path),
    };
  }
  return cachedFs;
}

/** The only file that touches `@kesha-antonov/react-native-background-downloader` —
 * same lazy-require reasoning as above. This library backs transfers with a real
 * OS-level background session (URLSession on iOS, WorkManager/DownloadManager on
 * Android), so a download survives the app being closed and can be re-attached
 * to after a restart via `checkForExistingDownloads()`. */
let cachedTransport: OfflineTransport | undefined;
function nativeTransport(): OfflineTransport {
  if (!cachedTransport) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const downloader = require('@kesha-antonov/react-native-background-downloader').default
      ?? require('@kesha-antonov/react-native-background-downloader');
    cachedTransport = {
      start: ({ id, fromUrl, toFile, onProgress, onDone, onError }) => {
        downloader
          .download({ id, url: fromUrl, destination: toFile })
          .begin(() => {})
          .progress(({ bytesDownloaded, bytesTotal }: { bytesDownloaded: number; bytesTotal: number }) =>
            onProgress({ bytesWritten: bytesDownloaded, contentLength: bytesTotal }))
          .done(() => onDone())
          .error(({ error }: { error: string }) => onError(error));
      },
      stop: id => {
        downloader.checkForExistingDownloads().then((tasks: Array<{ id: string; stop: () => void }>) => {
          tasks.find(task => task.id === id)?.stop();
        });
      },
      resumeExisting: async ({ onProgress, onDone, onError }) => {
        const tasks: Array<{ id: string; progress: (cb: (p: { bytesDownloaded: number; bytesTotal: number }) => void) => unknown; done: (cb: () => void) => unknown; error: (cb: (e: { error: string }) => void) => unknown }>
          = await downloader.checkForExistingDownloads();
        for (const task of tasks) {
          task.progress(({ bytesDownloaded, bytesTotal }) => onProgress(task.id, { bytesWritten: bytesDownloaded, contentLength: bytesTotal }));
          task.done(() => onDone(task.id));
          task.error(({ error }) => onError(task.id, error));
        }
        return tasks.map(task => task.id);
      },
    };
  }
  return cachedTransport;
}

export function createOfflineDownloadManager(
  drmProvider?: OfflineDrmProvider,
  onDownloadComplete?: (entry: OfflineDownloadEntry) => void,
): OfflineDownloadManager {
  return new OfflineDownloadManager(nativeOfflineFileSystem(), nativeTransport(), drmProvider, onDownloadComplete);
}
