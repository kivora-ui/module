import { NativeModules, Platform } from 'react-native';
import { UploadController, type UploadFile, type UploadOptions, type UploadTask } from '@kivora/upload';
interface Record { id: string; uri: string; name: string; type: string; size: number; status: string; progress: number; url?: string; error?: string; }
interface Bridge { enqueue(input: object): Promise<string>; list(): Promise<Record[]>; cancel(id: string): Promise<void>; }
/** Native persisted uploads; restore recent jobs when the application starts. */
export async function createBackgroundUploadController(options: Omit<UploadOptions, 'createTask' | 'onComplete'>): Promise<UploadController> {
  const bridge = NativeModules.KivoraUpload as Bridge | undefined;
  if ((Platform.OS !== 'android' && Platform.OS !== 'ios') || !bridge) throw new Error('Native background upload module is unavailable. Rebuild the native application.');
  const controller = new UploadController({ ...options, createTask: (file, config) => {
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let jobId: Promise<string> | undefined;
    const task: UploadTask = {
      canPause: false,
      url: config.uploadUrl ?? null,
      start() {
        if (!('uri' in file.data)) { config.onError(new Error('Background uploads require a local file URI.')); return; }
        jobId = file.taskId ? Promise.resolve(file.taskId) : bridge.enqueue({ uri: file.data.uri, name: file.name, type: file.type, endpoint: config.endpoint, headers: config.headers ?? {} });
        const poll = async () => {
          try {
            const id = await jobId!;
            file.taskId = id;
            if (stopped) return;
            const record = (await bridge.list()).find(record => record.id === id);
            if (stopped) return;
            if (!record) throw new Error('Upload task was not found.');
            if (record.url) { task.url = record.url; config.onUploadUrlAvailable(); }
            config.onProgress(record.progress, 100);
            if (record.status === 'success') { config.onSuccess(); return; }
            if (record.status === 'canceled') { config.onCancel(); return; }
            if (record.status === 'error') { config.onError(new Error(record.error ?? 'Upload failed')); return; }
            timer = setTimeout(() => { void poll(); }, 750);
          } catch (error) { if (!stopped) config.onError(error instanceof Error ? error : new Error(String(error))); }
        };
        void poll();
      },
      async abort() { stopped = true; clearTimeout(timer); if (jobId) await bridge.cancel(await jobId); },
    };
    return task;
  } });
  const records = await bridge.list();
  const files: UploadFile[] = records.filter(record => record.status !== 'canceled').map(record => ({ taskId: record.id, name: record.name, size: record.size, type: record.type, data: { uri: record.uri, name: record.name, type: record.type } }));
  // History does not consume the selection limit on application restoration.
  for (const file of files.slice(-(options.maxFiles ?? 10))) controller.add([file]);
  return controller;
}
