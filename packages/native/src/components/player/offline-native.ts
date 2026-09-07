import RNFS from 'react-native-fs';
import { OfflineDownloadManager, type OfflineFileSystem } from './offline';
import type { OfflineDrmProvider } from './types';

/** The only file in this package that imports `react-native-fs` — everything
 * else (`offline.ts`) stays testable in plain Node. */
export const nativeOfflineFileSystem: OfflineFileSystem = {
  documentDirectoryPath: RNFS.DocumentDirectoryPath,
  exists: path => RNFS.exists(path),
  mkdir: path => RNFS.mkdir(path),
  readFile: path => RNFS.readFile(path),
  writeFile: (path, contents) => RNFS.writeFile(path, contents),
  unlink: path => RNFS.unlink(path),
  downloadFile: options => RNFS.downloadFile(options),
  stopDownload: jobId => RNFS.stopDownload(jobId),
};

export function createOfflineDownloadManager(drmProvider?: OfflineDrmProvider): OfflineDownloadManager {
  return new OfflineDownloadManager(nativeOfflineFileSystem, drmProvider);
}
