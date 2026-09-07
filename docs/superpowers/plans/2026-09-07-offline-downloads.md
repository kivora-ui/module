# Offline Downloads (MP4, sin DRM) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a testable, framework-agnostic offline download manager to `@kivora/native` that can actually download and play back progressive MP4 sources without DRM, while explicitly (not silently) rejecting HLS/DASH and DRM-protected sources it cannot yet handle, with a `drmProvider` extension point for a future native DRM module.

**Architecture:** Mirrors the existing `controller.ts`/`player.tsx` split in this package: a pure, RN-free `OfflineDownloadManager` class (same `subscribe`/`getSnapshot` shape as `PlayerController`, safe to unit-test with a fake in-memory file system) lives in `offline.ts`; the concrete `react-native-fs` wiring lives in a separate `offline-native.ts` so importing/testing the manager never touches a real native module. This is a refinement of the spec's "mock react-native-fs in tests" plan: dependency-injecting an `OfflineFileSystem` interface is simpler and more robust than mocking the native module, and keeps the same tested behaviors.

**Tech Stack:** TypeScript, Vitest, `react-native-fs` (new peer/dev dependency).

**Spec:** `docs/superpowers/specs/2026-09-07-offline-downloads-design.md`

## Global Constraints

- Only progressive (non-segmented) sources without DRM actually download; everything else rejects immediately with `OfflineUnsupportedError` (`reason: 'segmented-format' | 'drm'`) — never a silently-stuck queued entry.
- No UI changes to `Player`/`example/app` in this plan — API/hook only.
- `offline.ts` must not import `react-native-fs` (or any React Native module) so its tests run in plain Node under Vitest, matching `controller.ts`'s existing pattern.
- New dependency `react-native-fs` goes in `peerDependencies` **and** `devDependencies` of `packages/native/package.json`, matching the existing pattern for `react-native-video`/`react-native-orientation-locker`.
- TDD: every task's behavior is covered by a test written before its implementation.

---

### Task 1: Types + `OfflineFileSystem` adapter interface + manager skeleton with unsupported-source rejection

**Files:**
- Modify: `packages/native/src/components/player/types.ts`
- Create: `packages/native/src/components/player/offline.ts`
- Create: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Consumes: `PlayerSource` from `./types` (existing).
- Produces (used by every later task in this plan):
  - `types.ts`: `OfflineDownloadState = 'queued' | 'downloading' | 'paused' | 'downloaded' | 'error'`; `OfflineDownloadEntry { id: string; source: PlayerSource; state: OfflineDownloadState; progress: number; localUri?: string; error?: string }`; `OfflineDrmProvider { acquireLicense(source: PlayerSource): Promise<{ localUri: string }>; releaseLicense(source: PlayerSource): Promise<void> }`.
  - `offline.ts`: `interface OfflineFileSystem { documentDirectoryPath: string; exists(path: string): Promise<boolean>; mkdir(path: string): Promise<void>; readFile(path: string): Promise<string>; writeFile(path: string, contents: string): Promise<void>; unlink(path: string): Promise<void>; downloadFile(options: { fromUrl: string; toFile: string; progress?: (p: { bytesWritten: number; contentLength: number }) => void }): { jobId: number; promise: Promise<{ statusCode: number }> }; stopDownload(jobId: number): void }`; `class OfflineUnsupportedError extends Error { readonly reason: 'segmented-format' | 'drm'; readonly sourceId: string }`; `class OfflineDownloadManager { constructor(fs: OfflineFileSystem, drmProvider?: OfflineDrmProvider); getSnapshot(): OfflineDownloadEntry[]; getServerSnapshot(): OfflineDownloadEntry[]; subscribe(listener: () => void): () => void; download(source: PlayerSource): Promise<void> }`.

- [ ] **Step 1: Add the shared types to `types.ts`**

Add at the end of `packages/native/src/components/player/types.ts`:

```ts
export type OfflineDownloadState = 'queued' | 'downloading' | 'paused' | 'downloaded' | 'error';
export interface OfflineDownloadEntry {
  id: string;
  source: PlayerSource;
  state: OfflineDownloadState;
  progress: number;
  localUri?: string;
  error?: string;
}
export interface OfflineDrmProvider {
  acquireLicense(source: PlayerSource): Promise<{ localUri: string }>;
  releaseLicense(source: PlayerSource): Promise<void>;
}
```

- [ ] **Step 2: Write the failing test for unsupported-source rejection**

Create `packages/native/src/components/player/offline.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { OfflineDownloadManager, OfflineUnsupportedError, type OfflineFileSystem } from './offline';
import type { PlayerSource } from './types';

function createFakeFileSystem(): OfflineFileSystem & { files: Map<string, string> } {
  const files = new Map<string, string>();
  let nextJobId = 1;
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
    downloadFile: ({ toFile, progress }) => {
      const jobId = nextJobId++;
      const promise = (async () => {
        progress?.({ bytesWritten: 100, contentLength: 100 });
        files.set(toFile, 'fake-mp4-bytes');
        return { statusCode: 200 };
      })();
      return { jobId, promise };
    },
    stopDownload: () => {},
  };
}

const dashSource: PlayerSource = { id: 'dash', title: 'Sintel', src: 'https://example.com/dash.mpd', mimeType: 'application/dash+xml' };
const hlsSource: PlayerSource = { id: 'hls', title: 'Angel One', src: 'https://example.com/hls.m3u8', mimeType: 'application/x-mpegurl' };
const drmSource: PlayerSource = { id: 'drm-film', title: 'Protected film', src: 'https://example.com/film.mp4', mimeType: 'video/mp4', nativeSource: { drm: { type: 'widevine' } } };
const mp4Source: PlayerSource = { id: 'flower', title: 'Flower', src: 'https://example.com/flower.mp4', mimeType: 'video/mp4' };

describe('OfflineDownloadManager — unsupported sources', () => {
  it('rejects DASH sources immediately with reason "segmented-format"', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(dashSource)).rejects.toMatchObject({ reason: 'segmented-format', sourceId: 'dash' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects HLS sources immediately with reason "segmented-format"', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(hlsSource)).rejects.toBeInstanceOf(OfflineUnsupportedError);
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('rejects DRM sources immediately when no drmProvider is configured', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(drmSource)).rejects.toMatchObject({ reason: 'drm', sourceId: 'drm-film' });
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('does not reject a plain progressive MP4 source', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.download(mp4Source)).resolves.toBeUndefined();
  });
});
```

- [ ] **Step 3: Run the tests to verify they fail**

Run: `pnpm --filter @kivora/native test`
Expected: FAIL — `Cannot find module './offline'` (the file doesn't exist yet).

- [ ] **Step 4: Implement the manager skeleton with unsupported-source rejection**

Create `packages/native/src/components/player/offline.ts`:

```ts
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
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native test`
Expected: PASS for all 4 tests in `offline.test.ts` (the last one resolves `undefined` because `download` does nothing yet beyond the rejection check — that's fine, Task 2 fills it in and re-asserts against real state).

- [ ] **Step 6: Typecheck and commit**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no errors.

```bash
git add packages/native/src/components/player/types.ts packages/native/src/components/player/offline.ts packages/native/src/components/player/offline.test.ts
git commit -m "feat(native): add OfflineDownloadManager skeleton with unsupported-source rejection

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 2: Successful MP4 download flow (queued → downloading → downloaded)

**Files:**
- Modify: `packages/native/src/components/player/offline.ts`
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Consumes: `OfflineFileSystem`, `OfflineUnsupportedError`, `OfflineDownloadManager` from Task 1.
- Produces: `OfflineDownloadManager.getPlaybackSource(id: string): PlayerSource | undefined` (used by Task 5's exports and any host app UI).

- [ ] **Step 1: Write the failing test for the success path**

Add to `offline.test.ts`:

```ts
describe('OfflineDownloadManager — downloading a supported MP4 source', () => {
  it('transitions queued → downloading → downloaded and exposes a playable local source', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
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
    fs.downloadFile = ({ toFile, progress }) => {
      const promise = (async () => {
        progress?.({ bytesWritten: 25, contentLength: 100 });
        progress?.({ bytesWritten: 100, contentLength: 100 });
        fs.files.set(toFile, 'fake-mp4-bytes');
        return { statusCode: 200 };
      })();
      return { jobId: 1, promise };
    };
    const manager = new OfflineDownloadManager(fs);
    const progressValues: number[] = [];
    manager.subscribe(() => { progressValues.push(manager.getSnapshot()[0]!.progress); });

    await manager.download(mp4Source);

    expect(progressValues).toContain(0.25);
    expect(progressValues[progressValues.length - 1]).toBe(1);
  });

  it('does not start a second download for an id already downloaded', async () => {
    const fs = createFakeFileSystem();
    let downloadCalls = 0;
    const originalDownloadFile = fs.downloadFile;
    fs.downloadFile = options => { downloadCalls++; return originalDownloadFile(options); };
    const manager = new OfflineDownloadManager(fs);

    await manager.download(mp4Source);
    await manager.download(mp4Source);

    expect(downloadCalls).toBe(1);
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm --filter @kivora/native test`
Expected: FAIL — snapshots never contain `['downloading']`/`['downloaded']`, `getPlaybackSource` does not exist.

- [ ] **Step 3: Implement the download flow**

Replace the `download` body and add helpers in `offline.ts`:

```ts
  private extensionFor(mimeType?: string) {
    return mimeType?.includes('mp4') ? 'mp4' : 'bin';
  }

  private updateEntry(id: string, patch: Partial<OfflineDownloadEntry>) {
    this.patch(this.state.map(entry => entry.id === id ? { ...entry, ...patch } : entry));
  }

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const mediaDir = `${this.fs.documentDirectoryPath}/kivora-downloads`;
    const toFile = `${mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0 }]);
    this.updateEntry(source.id, { state: 'downloading' });

    const { promise } = this.fs.downloadFile({
      fromUrl: source.src,
      toFile,
      progress: ({ bytesWritten, contentLength }) => {
        this.updateEntry(source.id, { progress: contentLength > 0 ? bytesWritten / contentLength : 0 });
      },
    });
    try {
      const result = await promise;
      if (result.statusCode >= 200 && result.statusCode < 300) {
        this.updateEntry(source.id, { state: 'downloaded', progress: 1, localUri: toFile });
      } else {
        this.updateEntry(source.id, { state: 'error', error: `HTTP ${result.statusCode}` });
      }
    } catch (error) {
      this.updateEntry(source.id, { state: 'error', error: error instanceof Error ? error.message : String(error) });
    }
  };

  getPlaybackSource = (id: string): PlayerSource | undefined => {
    const entry = this.state.find(item => item.id === id);
    if (!entry || entry.state !== 'downloaded' || !entry.localUri) return undefined;
    return { ...entry.source, src: `file://${entry.localUri}` };
  };
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native test`
Expected: PASS for every test in `offline.test.ts` so far.

- [ ] **Step 5: Typecheck and commit**

Run: `pnpm --filter @kivora/native typecheck`

```bash
git add packages/native/src/components/player/offline.ts packages/native/src/components/player/offline.test.ts
git commit -m "feat(native): download supported MP4 sources with live progress

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 3: Download error handling (network/HTTP failures)

**Files:**
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Consumes: `OfflineDownloadManager.download` from Task 2 (no signature change — this task only adds tests confirming existing error-handling code paths already written in Task 2).

- [ ] **Step 1: Write the failing tests for failure paths**

Add to `offline.test.ts`:

```ts
describe('OfflineDownloadManager — download failures', () => {
  it('marks the entry as errored on a non-2xx HTTP status, without throwing', async () => {
    const fs = createFakeFileSystem();
    fs.downloadFile = () => ({ jobId: 1, promise: Promise.resolve({ statusCode: 404 }) });
    const manager = new OfflineDownloadManager(fs);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'HTTP 404' });
  });

  it('marks the entry as errored when the download promise rejects, without throwing', async () => {
    const fs = createFakeFileSystem();
    fs.downloadFile = () => ({ jobId: 1, promise: Promise.reject(new Error('network offline')) });
    const manager = new OfflineDownloadManager(fs);

    await expect(manager.download(mp4Source)).resolves.toBeUndefined();

    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error', error: 'network offline' });
  });

  it('retries a previously errored download', async () => {
    const fs = createFakeFileSystem();
    let attempt = 0;
    fs.downloadFile = ({ toFile }) => {
      attempt++;
      if (attempt === 1) return { jobId: 1, promise: Promise.resolve({ statusCode: 500 }) };
      fs.files.set(toFile, 'fake-mp4-bytes');
      return { jobId: 2, promise: Promise.resolve({ statusCode: 200 }) };
    };
    const manager = new OfflineDownloadManager(fs);

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'error' });

    await manager.download(mp4Source);
    expect(manager.getSnapshot()[0]).toMatchObject({ state: 'downloaded' });
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm --filter @kivora/native test`
Expected: the retry test fails — `download` currently returns early (`if (existing && existing.state !== 'error') return;`) for a fresh call, which is correct, but confirm the other two pass already (Task 2's implementation already handles both). If any fail, note exactly which assertion and fix in the next step.

- [ ] **Step 3: Fix any gaps found**

If the retry test fails because the entry list still contains the old errored entry with stale fields, ensure the `[...this.state.filter(...), { ...fresh entry... }]` replacement in `download` (Task 2) fully replaces the entry (it already does, since it's a new object literal, not a merge) — no code change expected here; this step exists to confirm it, and to fix anything the test run surfaces.

- [ ] **Step 4: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native test`
Expected: PASS for all tests in `offline.test.ts`.

- [ ] **Step 5: Commit**

```bash
git add packages/native/src/components/player/offline.test.ts
git commit -m "test(native): cover offline download failure and retry paths

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 4: Manifest persistence across restarts

**Files:**
- Modify: `packages/native/src/components/player/offline.ts`
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Consumes: `OfflineFileSystem.readFile`/`writeFile`/`exists`/`mkdir` (already defined in Task 1), `OfflineDownloadManager` constructor (unchanged signature).
- Produces: manifest persisted at `${fs.documentDirectoryPath}/kivora-downloads/manifest.json`, reloaded by any new `OfflineDownloadManager` instance constructed against the same `fs`/`files` map — this is what a real app restart looks like, and what a future "list my downloads on app start" screen relies on.

- [ ] **Step 1: Write the failing test for persistence**

Add to `offline.test.ts`:

```ts
describe('OfflineDownloadManager — manifest persistence', () => {
  it('persists a downloaded entry and reloads it in a fresh manager instance', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
    await manager.download(mp4Source);

    // Simulate an app restart: a brand-new manager over the same file system.
    const restarted = new OfflineDownloadManager(fs);
    await new Promise(resolve => setTimeout(resolve, 0)); // let the async manifest load settle
    expect(restarted.getSnapshot()).toMatchObject([{ id: 'flower', state: 'downloaded' }]);
  });

  it('starts empty when no manifest file exists yet', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(manager.getSnapshot()).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm --filter @kivora/native test`
Expected: FAIL — the restarted manager's snapshot is `[]` because nothing is written/read from `fs` yet.

- [ ] **Step 3: Implement manifest load on construct and save after every state change**

Modify `offline.ts`:

```ts
export class OfflineDownloadManager {
  private state: OfflineDownloadEntry[] = [];
  private listeners = new Set<() => void>();
  private readonly mediaDir: string;
  private readonly manifestPath: string;
  private readonly ready: Promise<void>;

  constructor(private fs: OfflineFileSystem, private drmProvider?: OfflineDrmProvider) {
    this.mediaDir = `${fs.documentDirectoryPath}/kivora-downloads`;
    this.manifestPath = `${this.mediaDir}/manifest.json`;
    this.ready = this.loadManifest();
  }

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
```

Update `download` to wait for `this.ready` before reading/mutating `this.state`, and to persist after every terminal state change:

```ts
  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0 }]);
    this.updateEntry(source.id, { state: 'downloading' });

    const { promise } = this.fs.downloadFile({
      fromUrl: source.src,
      toFile,
      progress: ({ bytesWritten, contentLength }) => {
        this.updateEntry(source.id, { progress: contentLength > 0 ? bytesWritten / contentLength : 0 });
      },
    });
    try {
      const result = await promise;
      if (result.statusCode >= 200 && result.statusCode < 300) {
        this.updateEntry(source.id, { state: 'downloaded', progress: 1, localUri: toFile });
      } else {
        this.updateEntry(source.id, { state: 'error', error: `HTTP ${result.statusCode}` });
      }
    } catch (error) {
      this.updateEntry(source.id, { state: 'error', error: error instanceof Error ? error.message : String(error) });
    }
    await this.saveManifest();
  };
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native test`
Expected: PASS for all tests in `offline.test.ts`.

- [ ] **Step 5: Typecheck and commit**

Run: `pnpm --filter @kivora/native typecheck`

```bash
git add packages/native/src/components/player/offline.ts packages/native/src/components/player/offline.test.ts
git commit -m "feat(native): persist the offline downloads manifest across restarts

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 5: `remove(id)` — cancel/delete a download

**Files:**
- Modify: `packages/native/src/components/player/offline.ts`
- Modify: `packages/native/src/components/player/offline.test.ts`

**Interfaces:**
- Consumes: `OfflineFileSystem.stopDownload`/`unlink` (Task 1), `saveManifest`/`ready` (Task 4).
- Produces: `OfflineDownloadManager.remove(id: string): Promise<void>` (used by Task 6's public exports and any host app UI).

- [ ] **Step 1: Write the failing tests for removal**

Add to `offline.test.ts`:

```ts
describe('OfflineDownloadManager — remove', () => {
  it('deletes the local file and the manifest entry for a downloaded item', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
    await manager.download(mp4Source);
    const [{ localUri }] = manager.getSnapshot();

    await manager.remove('flower');

    expect(manager.getSnapshot()).toEqual([]);
    expect(fs.files.has(localUri!)).toBe(false);

    const restarted = new OfflineDownloadManager(fs);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(restarted.getSnapshot()).toEqual([]);
  });

  it('cancels an in-flight download job before removing it', async () => {
    const fs = createFakeFileSystem();
    let stoppedJobId: number | undefined;
    fs.stopDownload = jobId => { stoppedJobId = jobId; };
    fs.downloadFile = () => ({ jobId: 42, promise: new Promise(() => {}) }); // never resolves
    const manager = new OfflineDownloadManager(fs);

    const pending = manager.download(mp4Source);
    await manager.remove('flower');

    expect(stoppedJobId).toBe(42);
    expect(manager.getSnapshot()).toEqual([]);
    void pending; // intentionally left unresolved; the fake job never settles
  });

  it('does not throw when removing an id whose file is already gone', async () => {
    const fs = createFakeFileSystem();
    const manager = new OfflineDownloadManager(fs);
    await manager.download(mp4Source);
    const [{ localUri }] = manager.getSnapshot();
    fs.files.delete(localUri!); // simulate the file having disappeared out-of-band

    await expect(manager.remove('flower')).resolves.toBeUndefined();
    expect(manager.getSnapshot()).toEqual([]);
  });

  it('is a no-op for an id that was never downloaded', async () => {
    const manager = new OfflineDownloadManager(createFakeFileSystem());
    await expect(manager.remove('does-not-exist')).resolves.toBeUndefined();
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm --filter @kivora/native test`
Expected: FAIL — `manager.remove` does not exist yet.

- [ ] **Step 3: Implement `remove`**

Add a job-tracking map, and replace the whole `download` method in `offline.ts` with this version (identical to Task 4's, plus `jobs` tracking around the existing try/catch):

```ts
  private jobs = new Map<string, number>();

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0 }]);
    this.updateEntry(source.id, { state: 'downloading' });

    const { jobId, promise } = this.fs.downloadFile({
      fromUrl: source.src,
      toFile,
      progress: ({ bytesWritten, contentLength }) => {
        this.updateEntry(source.id, { progress: contentLength > 0 ? bytesWritten / contentLength : 0 });
      },
    });
    this.jobs.set(source.id, jobId);
    try {
      const result = await promise;
      if (result.statusCode >= 200 && result.statusCode < 300) {
        this.updateEntry(source.id, { state: 'downloaded', progress: 1, localUri: toFile });
      } else {
        this.updateEntry(source.id, { state: 'error', error: `HTTP ${result.statusCode}` });
      }
    } catch (error) {
      this.updateEntry(source.id, { state: 'error', error: error instanceof Error ? error.message : String(error) });
    } finally {
      this.jobs.delete(source.id);
    }
    await this.saveManifest();
  };
```

Add the `remove` method:

```ts
  remove = async (id: string): Promise<void> => {
    await this.ready;
    const jobId = this.jobs.get(id);
    if (jobId !== undefined) { this.fs.stopDownload(jobId); this.jobs.delete(id); }
    const entry = this.state.find(item => item.id === id);
    if (entry?.localUri) {
      try { await this.fs.unlink(entry.localUri); } catch { /* already gone: nothing to clean up */ }
    }
    this.patch(this.state.filter(item => item.id !== id));
    await this.saveManifest();
  };
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `pnpm --filter @kivora/native test`
Expected: PASS for all tests in `offline.test.ts`.

- [ ] **Step 5: Typecheck and commit**

Run: `pnpm --filter @kivora/native typecheck`

```bash
git add packages/native/src/components/player/offline.ts packages/native/src/components/player/offline.test.ts
git commit -m "feat(native): support cancelling/removing an offline download

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 6: `useOfflineDownloads` hook, native `react-native-fs` adapter, and public exports

**Files:**
- Create: `packages/native/src/components/player/offline-native.ts`
- Modify: `packages/native/src/components/player/offline.ts`
- Modify: `packages/native/src/index.ts`
- Modify: `packages/native/package.json`
- Modify: `packages/native/README.md` (or `docs/native-player.md`, whichever already documents the player — check which exists before editing)

**Interfaces:**
- Consumes: `OfflineDownloadManager`, `OfflineFileSystem` from Task 1–5.
- Produces (public package API): `useOfflineDownloads(manager: OfflineDownloadManager): OfflineDownloadEntry[]`; `createOfflineDownloadManager(drmProvider?: OfflineDrmProvider): OfflineDownloadManager` from `offline-native.ts`; re-exports from `@kivora/native`'s root `index.ts`.

- [ ] **Step 1: Add the hook to `offline.ts`**

There is no new *behavior* to test here (this is a one-line `useSyncExternalStore` wrapper, exactly like the existing untested `usePlayer` in `player.tsx:31` — same project convention of not unit-testing trivial hook wrappers). Add to `offline.ts`:

```ts
import * as React from 'react';
// ...existing imports/types/class above...

export function useOfflineDownloads(manager: OfflineDownloadManager) {
  return React.useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getServerSnapshot);
}
```

- [ ] **Step 2: Run the full test suite to confirm nothing broke**

Run: `pnpm --filter @kivora/native test`
Expected: PASS — the React import doesn't affect any existing `offline.test.ts` assertion (none of them render anything).

- [ ] **Step 3: Add `react-native-fs` as a dependency**

Modify `packages/native/package.json`: add `"react-native-fs": "^2.20.0"` to both `peerDependencies` and `devDependencies`, alphabetically alongside the existing entries (next to `react-native-orientation-locker`).

Run: `pnpm install`
Expected: lockfile updates, `react-native-fs` resolves under `node_modules/.pnpm/`.

- [ ] **Step 4: Write the native file system adapter**

Create `packages/native/src/components/player/offline-native.ts`:

```ts
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
```

- [ ] **Step 5: Typecheck**

Run: `pnpm --filter @kivora/native typecheck`
Expected: no errors (react-native-fs's bundled types resolve `RNFS.downloadFile`'s `progress` callback and `{ jobId, promise }` shape — if the installed version's type names differ slightly, adjust `offline-native.ts`'s call sites, not `OfflineFileSystem`'s shape in `offline.ts`).

- [ ] **Step 6: Export the public API from the package root**

Modify `packages/native/src/index.ts`, next to the existing player exports (around line 217-220):

```ts
export { OfflineDownloadManager, OfflineUnsupportedError, useOfflineDownloads } from './components/player/offline';
export type { OfflineFileSystem } from './components/player/offline';
export { createOfflineDownloadManager, nativeOfflineFileSystem } from './components/player/offline-native';
export type { OfflineDownloadState, OfflineDownloadEntry, OfflineDrmProvider } from './components/player/types';
```

- [ ] **Step 7: Typecheck the whole package and the example app**

Run: `pnpm --filter @kivora/native typecheck && pnpm --filter @kivora/example-app typecheck`
Expected: no errors.

- [ ] **Step 8: Document the new API**

Check whether `packages/native/README.md` or `docs/native-player.md` is where the player's public API is documented (`grep -rn "usePlayer\|PlayerController" packages/native/README.md docs/native-player.md` to see which file already covers it), then add a short section there, e.g.:

```md
### Offline downloads

`useOfflineDownloads(manager)` + `createOfflineDownloadManager()` (from
`@kivora/native`) download progressive MP4 sources for offline playback and
persist the download registry across app restarts. HLS/DASH sources and any
source with `nativeSource.drm` reject immediately with `OfflineUnsupportedError`
(`reason: 'segmented-format' | 'drm'`) — offline DRM requires a native module
this package does not ship yet; pass a `drmProvider` implementing
`OfflineDrmProvider` once one exists.

```tsx
const [manager] = useState(() => createOfflineDownloadManager());
const downloads = useOfflineDownloads(manager);
// manager.download(source) / manager.remove(id) / manager.getPlaybackSource(id)
```
```

- [ ] **Step 9: Run the full test suite one more time and commit**

Run: `pnpm --filter @kivora/native test`
Expected: PASS.

```bash
git add packages/native/src/components/player/offline.ts packages/native/src/components/player/offline-native.ts packages/native/src/index.ts packages/native/package.json pnpm-lock.yaml packages/native/README.md docs/native-player.md
git commit -m "feat(native): expose offline downloads via useOfflineDownloads and createOfflineDownloadManager

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

(Adjust the `git add` file list in Step 9 to whichever doc file Step 8 actually edited.)
