import { OfflineDownloadManager, type OfflineFileSystem, type OfflineTransport } from './offline';
import type { OfflineDownloadEntry, OfflineDrmProvider } from './types';
import { notifyDownloadComplete } from './offline-notifications';

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
 * to after a restart via `getExistingDownloadTasks()`. */
let cachedTransport: OfflineTransport | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jobs = new Map<string, any>();
function nativeTransport(): OfflineTransport {
  if (!cachedTransport) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createDownloadTask, getExistingDownloadTasks, completeHandler } = require('@kesha-antonov/react-native-background-downloader');
    // Tells the native side this transfer is fully handled (iOS background
    // session completion handshake) and drops it from the local job map, so a
    // later remove() doesn't call stop() on a stale/finished task reference.
    const settle = (id: string) => {
      const result = completeHandler(id);
      if (result instanceof Promise) {
        void result.catch(() => {});
      }
      jobs.delete(id);
    };
    cachedTransport = {
      start: ({ id, fromUrl, toFile, onProgress, onDone, onError }) => {
        const task = createDownloadTask({ id, url: fromUrl, destination: toFile });
        jobs.set(id, task);
        task
          .begin(() => {})
          .progress(({ bytesDownloaded, bytesTotal }: { bytesDownloaded: number; bytesTotal: number }) =>
            onProgress({ bytesWritten: bytesDownloaded, contentLength: bytesTotal }))
          // `location` is the library's authoritative final file path (it strips
          // `file://` from `destination` and moves the file there); we assume it
          // matches `toFile`/the manifest-derived path rather than threading it
          // through `OfflineTransport.onDone`, which currently takes no arguments.
          .done(() => {
            settle(id);
            onDone();
          })
          .error(({ error }: { error: string }) => {
            settle(id);
            onError(error);
          });
        task.start();
      },
      stop: id => {
        const task = jobs.get(id);
        if (task) {
          jobs.delete(id);
          void task.stop().catch(() => {});
        }
      },
      resumeExisting: async ({ onProgress, onDone, onError }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const tasks = (await getExistingDownloadTasks()) as Array<{ id: string; state: string; progress: (cb: (p: { bytesDownloaded: number; bytesTotal: number }) => void) => unknown; done: (cb: () => void) => unknown; error: (cb: (e: { error: string }) => void) => unknown; resume: () => Promise<unknown> }>;
        for (const task of tasks) {
          jobs.set(task.id, task);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          task.progress(({ bytesDownloaded, bytesTotal }: { bytesDownloaded: number; bytesTotal: number }) => onProgress(task.id, { bytesWritten: bytesDownloaded, contentLength: bytesTotal }));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          task.done(() => {
            settle(task.id);
            onDone(task.id);
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          task.error(({ error }: { error: string }) => {
            settle(task.id);
            onError(task.id, error);
          });
          // The native event can already have fired before JS re-attached
          // listeners here, so a task can come back already 'DONE' and a
          // fresh `.done()` handler will never see it replay.
          if (task.state === 'DONE') {
            settle(task.id);
            onDone(task.id);
          }
          // Paused tasks (e.g. an iOS transfer interrupted by app
          // termination) are preserved by the library but not auto-resumed —
          // it expects the app to call `resume()` explicitly.
          if (task.state === 'PAUSED') {
            void task.resume().catch(() => {});
          }
        }
        return tasks.map(task => task.id);
      },
    };
  }
  return cachedTransport;
}

export function createOfflineDownloadManager(
  drmProvider?: OfflineDrmProvider,
  onDownloadComplete: (entry: OfflineDownloadEntry) => void = entry => { void notifyDownloadComplete(entry.source.title); },
): OfflineDownloadManager {
  return new OfflineDownloadManager(nativeOfflineFileSystem(), nativeTransport(), drmProvider, onDownloadComplete);
}
