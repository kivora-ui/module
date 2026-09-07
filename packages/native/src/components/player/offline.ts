import type { OfflineDownloadEntry, OfflineDrmProvider, PlayerSource } from './types';

/** Minimal file system surface the manager needs; the real implementation
 * lives in `offline-native.ts` so this file never imports react-native-fs
 * and stays testable with a plain in-memory fake. */
export interface OfflineFileSystem {
  documentDirectoryPath: string;
  exists(path: string): Promise<boolean>;
  mkdir(path: string): Promise<void>;
  readFile(path: string): Promise<string>;
  writeFile(path: string, contents: string): Promise<void>;
  unlink(path: string): Promise<void>;
  downloadFile(options: { fromUrl: string; toFile: string; progress?: (progress: { bytesWritten: number; contentLength: number }) => void }): { jobId: number; promise: Promise<{ statusCode: number }> };
  stopDownload(jobId: number): void;
}

export class OfflineUnsupportedError extends Error {
  constructor(public readonly reason: 'segmented-format' | 'drm', public readonly sourceId: string) {
    super(reason === 'drm'
      ? `Offline DRM download is not supported yet (source: ${sourceId})`
      : `Offline download of segmented streams (HLS/DASH) is not supported yet (source: ${sourceId})`);
    this.name = 'OfflineUnsupportedError';
  }
}

function unsupportedReason(source: PlayerSource, hasDrmProvider: boolean): 'segmented-format' | 'drm' | undefined {
  if (source.mimeType?.includes('dash') || source.mimeType?.includes('mpegurl')) return 'segmented-format';
  if (source.nativeSource?.drm && !hasDrmProvider) return 'drm';
  return undefined;
}

/** Downloads progressive (non-segmented), non-DRM sources for offline playback.
 * Mirrors `PlayerController`'s subscribe/getSnapshot shape so it can back a
 * `useSyncExternalStore`-based hook the same way. */
export class OfflineDownloadManager {
  private state: OfflineDownloadEntry[] = [];
  private listeners = new Set<() => void>();

  constructor(private fs: OfflineFileSystem, private drmProvider?: OfflineDrmProvider) {}

  getSnapshot = () => this.state;
  getServerSnapshot = () => this.state;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  private patch(next: OfflineDownloadEntry[]) { this.state = next; this.listeners.forEach(listener => listener()); }

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    // Task 2 adds the real download flow here.
  };
}
