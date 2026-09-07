# Descargas en segundo plano + notificación Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hacer que las descargas offline de `@kivora/native` sobrevivan al cierre de la app, se reanuden solas al reabrirla, y notifiquen al usuario cuando terminan.

**Architecture:** Se introduce una interfaz `OfflineTransport` en `offline.ts` que reemplaza el uso directo de `downloadFile`/`stopDownload` de `OfflineFileSystem`. `offline-native.ts` implementa ese transporte con `@kesha-antonov/react-native-background-downloader` (sesiones en background reales en iOS/Android) y reengancha tareas vivas al arrancar. `offline-notifications.ts` (nuevo) dispara una notificación local vía `@notifee/react-native` cuando una descarga termina.

**Tech Stack:** TypeScript, Vitest, React Native, `@kesha-antonov/react-native-background-downloader`, `@notifee/react-native` (ya presente como dependencia opcional).

**Spec:** `docs/superpowers/specs/2026-09-07-background-downloads-design.md`

## Global Constraints

- `OfflineFileSystem` conserva `documentDirectoryPath`, `exists`, `mkdir`, `readFile`, `writeFile`, `unlink`; pierde `downloadFile` y `stopDownload` (se mueven a `OfflineTransport`).
- La API pública existente (`useOfflineDownloads`, `createOfflineDownloadManager`, `OfflineDownloadEntry`, `OfflineUnsupportedError`) no cambia de forma observable para quien ya consume el paquete.
- Ningún archivo fuera de `offline-native.ts` importa `@kesha-antonov/react-native-background-downloader` de forma estática; ningún archivo fuera de `offline-notifications.ts` importa `@notifee/react-native` de forma estática. Ambos usan `require(...)` perezoso dentro de una función, igual que el patrón ya existente para `react-native-fs`.
- `offline.ts` sigue sin importar nada de React Native — testeable en Node puro con Vitest.
- No se soporta descarga de streams segmentados (HLS/DASH) ni DRM sin `OfflineDrmProvider`; eso no cambia en este plan.

---

### Task 1: `OfflineTransport` — refactorizar `OfflineDownloadManager` para usar un transporte inyectado

**Files:**
- Modify: `packages/native/src/components/player/offline.ts`
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Produces: `OfflineTransport` interface (consumida por `offline-native.ts` en Task 4).
- Produces: `OfflineDownloadManager` constructor pasa a `(fs: OfflineFileSystem, transport: OfflineTransport, drmProvider?: OfflineDrmProvider, onDownloadComplete?: (entry: OfflineDownloadEntry) => void)`.

- [ ] **Step 1: Reescribir `offline.test.ts` con un `OfflineTransport` fake**

Sustituye completamente el contenido de `packages/native/src/components/player/offline.test.ts` por:

```ts
import { describe, expect, it } from 'vitest';
import type { DRMType } from 'react-native-video';
import { OfflineDownloadManager, OfflineUnsupportedError, type OfflineFileSystem, type OfflineTransport } from './offline';
import type { OfflineDownloadEntry, PlayerSource } from './types';

function createFakeFileSystem(): OfflineFileSystem & { files: Map<string, string> } {
  const files = new Map<string, string>();
  return {
    files,
    documentDirectoryPath: '/fake/documents',
    exists: async path => files.has(path),
    mkdir: async () => {},
    readFile: async path => {
      const value = files.get(path);
      if (value === undefined) throw new Error('ENOENT: no such file');
      return value;
    },
    writeFile: async (path, contents) => { files.set(path, contents); },
    unlink: async path => {
      if (!files.has(path)) throw new Error('ENOENT: no such file');
      files.delete(path);
    },
  };
}

type FakeJob = { id: string; toFile: string; onProgress: (p: { bytesWritten: number; contentLength: number }) => void; onDone: () => void; onError: (message: string) => void };

/** Fake transport: by default it "succeeds instantly" on `start`, writing the file
 * into the shared `files` map. Tests override `startImpl` to simulate progress,
 * failures, or a never-resolving in-flight job. */
function createFakeTransport(files: Map<string, string>) {
  const stopped: string[] = [];
  const jobs = new Map<string, FakeJob>();
  let startImpl: (job: FakeJob) => void = job => {
    job.onProgress({ bytesWritten: 100, contentLength: 100 });
    files.set(job.toFile, 'fake-mp4-bytes');
    job.onDone();
  };
  const transport: OfflineTransport & { stopped: string[]; setStartImpl: (impl: (job: FakeJob) => void) => void } = {
    stopped,
    setStartImpl: impl => { startImpl = impl; },
    start: ({ id, fromUrl, toFile, onProgress, onDone, onError }) => {
      const job: FakeJob = { id, toFile, onProgress, onDone, onError };
      jobs.set(id, job);
      void fromUrl;
      startImpl(job);
    },
    stop: id => { stopped.push(id); jobs.delete(id); },
    resumeExisting: async () => [],
  };
  return transport;
}

const dashSource: PlayerSource = { id: 'dash', title: 'Sintel', src: 'https://example.com/dash.mpd', mimeType: 'application/dash+xml' };
const hlsSource: PlayerSource = { id: 'hls', title: 'Angel One', src: 'https://example.com/hls.m3u8', mimeType: 'application/x-mpegurl' };
const drmSource: PlayerSource = { id: 'drm-film', title: 'Protected film', src: 'https://example.com/film.mp4', mimeType: 'video/mp4', nativeSource: { drm: { type: 'widevine' as DRMType } } };
const mp4Source: PlayerSource = { id: 'flower', title: 'Flower', src: 'https://example.com/flower.mp4', mimeType: 'video/mp4' };

describe('OfflineDownloadManager — unsupported sources', () => {
  it('rejects DASH sources immediately with reason "segmented-format"', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(dashSource)).rejects.toMatchObject({ reason: 'segmented-format', sourceId: 'dash' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects HLS sources immediately with reason "segmented-format"', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(hlsSource)).rejects.toBeInstanceOf(OfflineUnsupportedError);
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects DRM sources immediately when no drmProvider is configured', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(drmSource)).rejects.toMatchObject({ reason: 'drm', sourceId: 'drm-film' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('does not reject a plain progressive MP4 source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.download(mp4Source)).resolves.toBeUndefined();
  });
});

describe('OfflineDownloadManager — downloading a supported MP4 source', () => {
  it('transitions queued → downloading → downloaded and exposes a playable local source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    const snapshots: string[][] = [];
    manager.subscribe(() => snapshots.push(manager.getSnapshot().map(entry => entry.state)));

    await manager.download(mp4Source);

    expect(snapshots).toContainEqual(['queued']);
    expect(snapshots).toContainEqual(['downloading']);
    expect(snapshots).toContainEqual(['downloaded']);
    const [entry] = manager.getSnapshot();
    expect(entry).toMatchObject({ id: 'flower', state: 'downloaded', progress: 1 });
    expect(entry!.localUri).toContain('flower');
    expect(fs.files.has(entry!.localUri!)).toBe(true);

    const playable = manager.getPlaybackSource('flower');
    expect(playable).toMatchObject({ id: 'flower', title: 'Flower' });
    expect(playable!.src).toBe(`file://${entry!.localUri}`);
  });

  it('reports growing progress while the download is in flight', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => {
      job.onProgress({ bytesWritten: 25, contentLength: 100 });
      job.onProgress({ bytesWritten: 100, contentLength: 100 });
      fs.files.set(job.toFile, 'fake-mp4-bytes');
      job.onDone();
    });
    const manager = new OfflineDownloadManager(fs, transport);
    const progressValues: number[] = [];
    manager.subscribe(() => { progressValues.push(manager.getSnapshot()[0]!.progress); });

    await manager.download(mp4Source);

    expect(progressValues).toContain(0.25);
    expect(progressValues[progressValues.length - 1]).toBe(1);
  });

  it('does not start a second download for an id already downloaded', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    let startCalls = 0;
    const original = transport.start;
    transport.start = options => { startCalls++; original(options); };
    const manager = new OfflineDownloadManager(fs, transport);

    await manager.download(mp4Source);
    await manager.download(mp4Source);

    expect(startCalls).toBe(1);
  });
});

describe('OfflineDownloadManager — download failures', () => {
  it('marks the entry as errored on a transport error, without throwing', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('HTTP 404'));
    const manager = new OfflineDownloadManager(fs, transport);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'HTTP 404' });
  });

  it('marks the entry as errored when the transport reports a network failure', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('network offline'));
    const manager = new OfflineDownloadManager(fs, transport);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'network offline' });
  });

  it('retries a previously errored download', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    let attempt = 0;
    transport.setStartImpl(job => {
      attempt++;
      if (attempt === 1) { job.onError('server error'); return; }
      fs.files.set(job.toFile, 'fake-mp4-bytes');
      job.onDone();
    });
    const manager = new OfflineDownloadManager(fs, transport);

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error' });

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'downloaded' });
  });
});

describe('OfflineDownloadManager — manifest persistence', () => {
  it('persists a downloaded entry and reloads it in a fresh manager instance', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);

    // Simulate an app restart: a brand-new manager over the same file system.
    const restarted = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0)); // let the async manifest load settle
    expect(restarted.getSnapshot()).toMatchObject([{ id: 'flower', state: 'downloaded' }]);
  });

  it('starts empty when no manifest file exists yet', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(manager.getSnapshot()).toEqual([]);
  });
});

describe('OfflineDownloadManager — remove', () => {
  it('deletes the local file and the manifest entry for a downloaded item', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);
    const [entry] = manager.getSnapshot();
    const localUri = entry!.localUri!;

    await manager.remove('flower');

    expect(manager.getSnapshot()).toEqual([]);
    expect(fs.files.has(localUri)).toBe(false);

    const restarted = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(restarted.getSnapshot()).toEqual([]);
  });

  it('cancels an in-flight download job before removing it', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(() => {}); // never calls onDone/onError — stays in flight
    const manager = new OfflineDownloadManager(fs, transport);

    const pending = manager.download(mp4Source);
    await manager.remove('flower');

    expect(transport.stopped).toEqual(['flower']);
    expect(manager.getSnapshot()).toEqual([]);
    void pending; // intentionally left unresolved; the fake job never settles
  });

  it('does not throw when removing an id whose file is already gone', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await manager.download(mp4Source);
    const [entry] = manager.getSnapshot();
    fs.files.delete(entry!.localUri!); // simulate the file having disappeared out-of-band

    await expect(manager.remove('flower')).resolves.toBeUndefined();
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('is a no-op for an id that was never downloaded', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files));
    await expect(manager.remove('does-not-exist')).resolves.toBeUndefined();
  });
});
```

- [ ] **Step 2: Run the tests to confirm they fail on the current (pre-refactor) `offline.ts`**

Run: `pnpm --filter @kivora/native exec vitest run offline.test.ts`
Expected: FAIL — `OfflineTransport` is not exported yet, and `OfflineDownloadManager`'s constructor doesn't accept a second `transport` argument.

- [ ] **Step 3: Add `OfflineTransport` and refactor `OfflineDownloadManager` in `offline.ts`**

Replace the `OfflineFileSystem` interface (remove `downloadFile`/`stopDownload`) and add `OfflineTransport` right after it:

```ts
export interface OfflineFileSystem {
  documentDirectoryPath: string;
  exists(path: string): Promise<boolean>;
  mkdir(path: string): Promise<void>;
  readFile(path: string): Promise<string>;
  writeFile(path: string, contents: string): Promise<void>;
  unlink(path: string): Promise<void>;
}

/** Real background transfer, decoupled from the file-system concerns above so
 * `offline-native.ts` can back it with a library that manages its own OS-level
 * background session instead of `react-native-fs`. */
export interface OfflineTransport {
  /** Starts a new transfer. `id` is the download entry's stable id (`source.id`),
   * used as the job's identity so a later app restart can re-attach to it. */
  start(options: {
    id: string;
    fromUrl: string;
    toFile: string;
    onProgress: (progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: () => void;
    onError: (message: string) => void;
  }): void;
  /** Cancels an in-flight transfer. No-op if `id` has no active job. */
  stop(id: string): void;
  /** Called once when the manager is constructed. Re-attaches the given
   * callbacks to whatever transfers survived an app restart, and returns the
   * ids of the ones it found. */
  resumeExisting(callbacks: {
    onProgress: (id: string, progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: (id: string) => void;
    onError: (id: string, message: string) => void;
  }): Promise<string[]>;
}
```

Now replace the body of `OfflineDownloadManager` (constructor through `remove`) with:

```ts
export class OfflineDownloadManager {
  private state: OfflineDownloadEntry[] = [];
  private listeners = new Set<() => void>();
  private readonly mediaDir: string;
  private readonly manifestPath: string;
  private readonly ready: Promise<void>;

  constructor(
    private fs: OfflineFileSystem,
    private transport: OfflineTransport,
    private drmProvider?: OfflineDrmProvider,
    private onDownloadComplete?: (entry: OfflineDownloadEntry) => void,
  ) {
    this.mediaDir = `${fs.documentDirectoryPath}/kivora-downloads`;
    this.manifestPath = `${this.mediaDir}/manifest.json`;
    this.ready = this.loadManifest().then(() => this.resumeAll());
  }

  getSnapshot = () => this.state;
  getServerSnapshot = () => this.state;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  private patch(next: OfflineDownloadEntry[]) { this.state = next; this.listeners.forEach(listener => listener()); }

  private async loadManifest() {
    try {
      if (await this.fs.exists(this.manifestPath)) {
        const raw = await this.fs.readFile(this.manifestPath);
        this.patch(JSON.parse(raw) as OfflineDownloadEntry[]);
      }
    } catch {
      // Missing or corrupt manifest: start from an empty, recoverable state.
    }
  }

  private async saveManifest() {
    await this.fs.mkdir(this.mediaDir).catch(() => {});
    await this.fs.writeFile(this.manifestPath, JSON.stringify(this.state));
  }

  /** Re-attaches to any transfer that survived an app restart. Any entry left
   * 'downloading' in the manifest that the transport doesn't recognize was
   * lost (OS discarded it, or resume failed) and is marked as errored. */
  private async resumeAll() {
    const pending = this.state.filter(entry => entry.state === 'downloading');
    if (pending.length === 0) return;
    const resumed = await this.transport.resumeExisting({
      onProgress: (id, progress) => this.updateEntry(id, { progress: progress.contentLength > 0 ? progress.bytesWritten / progress.contentLength : 0 }),
      onDone: id => this.handleDone(id),
      onError: (id, message) => this.updateEntry(id, { state: 'error', error: message }),
    });
    const lost = pending.filter(entry => !resumed.includes(entry.id));
    if (lost.length > 0) {
      this.patch(this.state.map(entry => lost.some(l => l.id === entry.id) ? { ...entry, state: 'error', error: 'Download interrupted' } : entry));
      await this.saveManifest();
    }
  }

  private extensionFor(mimeType?: string) {
    return mimeType?.includes('mp4') ? 'mp4' : 'bin';
  }

  private updateEntry(id: string, patch: Partial<OfflineDownloadEntry>) {
    this.patch(this.state.map(entry => entry.id === id ? { ...entry, ...patch } : entry));
  }

  private async handleDone(id: string) {
    const toFile = this.localFileFor(id);
    this.updateEntry(id, { state: 'downloaded', progress: 1, localUri: toFile });
    await this.saveManifest();
    const entry = this.state.find(item => item.id === id);
    if (entry) this.onDownloadComplete?.(entry);
  }

  private localFileFor(id: string): string {
    const entry = this.state.find(item => item.id === id);
    return entry?.localUri ?? `${this.mediaDir}/${id}`;
  }

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0, localUri: toFile }]);
    this.updateEntry(source.id, { state: 'downloading' });

    await new Promise<void>(resolve => {
      this.transport.start({
        id: source.id,
        fromUrl: source.src,
        toFile,
        onProgress: progress => this.updateEntry(source.id, { progress: progress.contentLength > 0 ? progress.bytesWritten / progress.contentLength : 0 }),
        onDone: () => { void this.handleDone(source.id).then(resolve); },
        onError: message => { this.updateEntry(source.id, { state: 'error', error: message }); void this.saveManifest().then(resolve); },
      });
    });
  };

  remove = async (id: string): Promise<void> => {
    await this.ready;
    this.transport.stop(id);
    const entry = this.state.find(item => item.id === id);
    if (entry?.localUri) {
      try { await this.fs.unlink(entry.localUri); } catch { /* already gone: nothing to clean up */ }
    }
    this.patch(this.state.filter(item => item.id !== id));
    await this.saveManifest();
  };

  getPlaybackSource = (id: string): PlayerSource | undefined => {
    const entry = this.state.find(item => item.id === id);
    if (!entry || entry.state !== 'downloaded' || !entry.localUri) return undefined;
    return { ...entry.source, src: `file://${entry.localUri}` };
  };
}
```

Note the entry now stores `localUri` from the moment it's queued (needed so `resumeAll`/`handleDone` know the destination path without re-deriving it), and `remove()` calls `transport.stop(id)` unconditionally (it's a documented no-op when there's no active job, matching the interface contract) instead of tracking job ids itself.

- [ ] **Step 4: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native exec vitest run offline.test.ts`
Expected: PASS — all tests in the rewritten file green.

- [ ] **Step 5: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no errors. If `offline-native.ts` now fails to typecheck (it still calls the old two-argument constructor and references the removed `downloadFile`/`stopDownload`), that's expected — Task 4 fixes it. Confirm the *only* errors are in `offline-native.ts`.

- [ ] **Step 6: Commit**

```bash
git add packages/native/src/components/player/offline.ts packages/native/src/components/player/offline.test.ts
git commit -m "refactor(native): extract OfflineTransport from OfflineFileSystem

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 2: Implementar el transporte real con `@kesha-antonov/react-native-background-downloader`

**Files:**
- Modify: `packages/native/package.json`
- Modify: `packages/native/src/components/player/offline-native.ts`

**Interfaces:**
- Consumes: `OfflineTransport` from Task 1 (`./offline`).
- Produces: `createOfflineDownloadManager(drmProvider?, onDownloadComplete?)` — same exported name, new optional second parameter (used by Task 3).

- [ ] **Step 1: Add the dependency**

In `packages/native/package.json`, add to both `peerDependencies` and `devDependencies` (alongside the existing `react-native-fs` entry):

```json
"@kesha-antonov/react-native-background-downloader": "^4.6.2",
```

Run: `pnpm install`
Expected: lockfile updates, no errors.

- [ ] **Step 2: Replace `offline-native.ts` with the transport-backed implementation**

Replace the full contents of `packages/native/src/components/player/offline-native.ts` with:

```ts
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
```

- [ ] **Step 3: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no errors (the `@kesha-antonov/react-native-background-downloader` import has no bundled types used here beyond the inline shapes above, so this stays type-safe without needing a `@types` package).

- [ ] **Step 4: Run the full test suite**

Run: `pnpm --filter @kivora/native test`
Expected: same 39 passing / 1 pre-existing unrelated failure (`component-coverage.test.ts` re: `upload-camera.tsx`) as before this plan — `offline-native.ts` has no direct tests (same convention as before: native-only wrappers aren't unit-tested).

- [ ] **Step 5: Commit**

```bash
git add packages/native/package.json packages/native/src/components/player/offline-native.ts pnpm-lock.yaml
git commit -m "feat(native): back offline downloads with a real background-session transport

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 3: Notificación de finalización con `@notifee/react-native`

**Files:**
- Create: `packages/native/src/components/player/offline-notifications.ts`
- Modify: `packages/native/src/components/player/offline-native.ts`
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Produces: `notifyDownloadComplete(title: string): Promise<void>` from `offline-notifications.ts`.
- Consumes: `onDownloadComplete` parameter added to `OfflineDownloadManager` in Task 1.

- [ ] **Step 1: Write the failing test for the `onDownloadComplete` callback**

Add to `packages/native/src/components/player/offline.test.ts`, in a new `describe` block at the end of the file:

```ts
describe('OfflineDownloadManager — completion callback', () => {
  it('calls onDownloadComplete exactly once, with the finished entry, on success', async () => {
    const fs = createFakeFileSystem();
    const completed: OfflineDownloadEntry[] = [];
    const manager = new OfflineDownloadManager(fs, createFakeTransport(fs.files), undefined, entry => completed.push(entry));

    await manager.download(mp4Source);

    expect(completed).toHaveLength(1);
    expect(completed[0]).toMatchObject({ id: 'flower', state: 'downloaded' });
  });

  it('does not call onDownloadComplete when the download errors', async () => {
    const fs = createFakeFileSystem();
    const transport = createFakeTransport(fs.files);
    transport.setStartImpl(job => job.onError('network offline'));
    const completed: OfflineDownloadEntry[] = [];
    const manager = new OfflineDownloadManager(fs, transport, undefined, entry => completed.push(entry));

    await manager.download(mp4Source);

    expect(completed).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm --filter @kivora/native exec vitest run offline.test.ts`
Expected: FAIL if `handleDone` doesn't call `onDownloadComplete` yet — but Task 1's `offline.ts` already implements this. Confirm instead that it currently PASSES (Task 1 already added the callback plumbing); this step is a regression check, not new behavior. If it fails, revisit Task 1 Step 3 before continuing.

- [ ] **Step 3: Create `offline-notifications.ts`**

```ts
/** The only file in this package that touches `@notifee/react-native` — lazy
 * `require`, same reasoning as `react-native-fs` and the background-downloader
 * transport: notifee's native module may not be linked in every consumer app,
 * and a failure here must never break the download itself. */
export async function notifyDownloadComplete(title: string): Promise<void> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const notifee = require('@notifee/react-native').default ?? require('@notifee/react-native');
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({ id: 'kivora-downloads', name: 'Descargas' });
    await notifee.displayNotification({
      title: 'Descarga completada',
      body: title,
      android: { channelId, smallIcon: 'ic_launcher' },
    });
  } catch {
    // A missing/unlinked notifee module, or a denied permission, must never
    // break the download flow — the file is already saved either way.
  }
}
```

- [ ] **Step 4: Wire it into `createOfflineDownloadManager`**

In `packages/native/src/components/player/offline-native.ts`, add the import:

```ts
import { notifyDownloadComplete } from './offline-notifications';
```

And change the `createOfflineDownloadManager` signature to default `onDownloadComplete` to a notifee-backed notifier when the caller doesn't supply one:

```ts
export function createOfflineDownloadManager(
  drmProvider?: OfflineDrmProvider,
  onDownloadComplete: (entry: OfflineDownloadEntry) => void = entry => { void notifyDownloadComplete(entry.source.title); },
): OfflineDownloadManager {
  return new OfflineDownloadManager(nativeOfflineFileSystem(), nativeTransport(), drmProvider, onDownloadComplete);
}
```

- [ ] **Step 5: Run the full test suite**

Run: `pnpm --filter @kivora/native test`
Expected: same passing count as Task 2 Step 4 plus the two new tests from Step 1 of this task (41 passing / 1 pre-existing unrelated failure).

- [ ] **Step 6: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add packages/native/src/components/player/offline-notifications.ts packages/native/src/components/player/offline-native.ts packages/native/src/components/player/offline.test.ts
git commit -m "feat(native): notify when an offline download completes

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 4: Documentación — paso de integración iOS y nota de MMKV en Android

**Files:**
- Modify: `docs/native-player.md`

**Interfaces:**
- Consumes: nothing new — this task only documents the behavior built in Tasks 1-3.

- [ ] **Step 1: Update the "Offline downloads" section**

In `docs/native-player.md`, find the existing "## Offline downloads" section (added in the earlier offline-downloads work) and append:

```md
### Background downloads and completion notifications

Downloads started via `useOfflineDownloads`/`createOfflineDownloadManager` continue
after the app is closed and resume automatically the next time it opens — no action
required from the app. This is backed by
[`@kesha-antonov/react-native-background-downloader`](https://github.com/kesha-antonov/react-native-background-downloader),
which uses a real OS-level background session (`URLSession` on iOS,
`WorkManager`/`DownloadManager` on Android) instead of a JS-thread transfer.

A local notification ("Descarga completada") fires automatically via
`@notifee/react-native` when a download finishes; pass your own
`onDownloadComplete` to `createOfflineDownloadManager` to replace or extend that
behavior.

**Android:** on Android 14+, the background-downloader library requires its own
foreground-service notification while a transfer is in progress — this is an
OS requirement, not optional, and is separate from the completion notification
above. The library also pulls in `com.tencent:mmkv-shared` as a native
dependency; if your app already depends on a different MMKV version, pin it
explicitly in your app's `build.gradle` to avoid a version conflict.

**iOS:** background sessions require registering a completion handler in your
app's `AppDelegate`. Add to `AppDelegate.swift` (or the equivalent in
Objective-C):

```swift
func application(_ application: UIApplication, handleEventsForBackgroundURLSession identifier: String, completionHandler: @escaping () -> Void) {
  RNBackgroundDownloader.setCompletionHandlerWithIdentifier(identifier, completionHandler: completionHandler)
}
```

> This iOS integration step is implemented per the library's documented
> requirement but has not been verified on a real iOS device or simulator in
> this environment — the same caveat that already applies to the offline DRM
> extension point. Verify manually on iOS before shipping.
```

- [ ] **Step 2: Commit**

```bash
git add docs/native-player.md
git commit -m "docs(native): document background downloads and the iOS AppDelegate step

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Final Verification

- [ ] Run `pnpm --filter @kivora/native typecheck` — no errors.
- [ ] Run `pnpm --filter @kivora/example-app typecheck` — no errors.
- [ ] Run `pnpm --filter @kivora/native test` — same pre-existing unrelated failure only (`component-coverage.test.ts`), everything else green.
- [ ] Use the `superpowers:finishing-a-development-branch` skill.
