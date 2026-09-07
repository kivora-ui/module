"use client";
import * as React from 'react';
import { toast } from 'sonner';
import { UploadController, fileKind, formatFileSize, type UploadFile, type UploadItem } from '@kivora/upload';
import { Button } from './button';
import { Progress } from './progress';
import type { UploadDashboardOptions } from './upload-dashboard';
const AdvancedDashboard = React.lazy(() => import('./upload-dashboard').then(module => ({ default: module.UploadDashboard })));
import { getUploadMessages, type UploadLocaleOptions, type UploadMessages } from '@kivora/upload';
import { HardDrive } from 'lucide-react';
import { File, FileText, FileArchive, FileSpreadsheet, FileImage, FileVideo, FileAudio, Clock, LoaderCircle, CircleCheck, CircleAlert, CirclePause, CircleX } from 'lucide-react';


function FilePreview({ file }: { file: UploadFile }) {
  const kind = fileKind(file.name, file.type);
  const [failed, setFailed] = React.useState(false);
  const Icon = { image: FileImage, video: FileVideo, audio: FileAudio, pdf: FileText, archive: FileArchive, spreadsheet: FileSpreadsheet, document: FileText, file: File }[kind];
  const [url, setUrl] = React.useState<string>();
  React.useEffect(() => {
    setFailed(false);
    if (kind !== 'image' || !(file.data instanceof Blob)) return;
    const next = URL.createObjectURL(file.data);
    setUrl(next);
    return () => { URL.revokeObjectURL(next); };
  }, [file.data, kind]);
  return <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground">
    {url && !failed ? <img src={url} alt={`Preview of ${file.name}`} className="h-full w-full object-cover" onError={() => setFailed(true)} /> : <>
      <Icon aria-hidden="true" size={24} />
      <span className="mt-1 text-[10px] font-semibold uppercase">{kind}</span>
    </>}
  </div>;
}

export interface FileUploadSourceContext {
  addFiles: (files: UploadFile[]) => void;
  close: () => void;
  messages: UploadMessages;
}
export interface FileUploadSource {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  pickFiles?: () => Promise<UploadFile[]>;
  render?: (context: FileUploadSourceContext) => React.ReactNode;
}
export interface FileUploadProps extends UploadLocaleOptions {
  controller: UploadController;
  accept?: string;
  showStatus?: boolean;
  variant?: 'simple' | 'advanced';
  sources?: FileUploadSource[];
  camera?: boolean;
  dashboard?: UploadDashboardOptions;
}
export function FileUpload(props: FileUploadProps) {
  const t = getUploadMessages(props);
  return props.variant === 'advanced'
    ? <React.Suspense fallback={<p role="status">{t.loading}</p>}><AdvancedDashboard {...props} /></React.Suspense>
    : <SimpleFileUpload {...props} />;
}
function SimpleFileUpload({ controller, accept, showStatus = true, locale, messages }: FileUploadProps) {
  const t = getUploadMessages({ locale, messages });
  const [error, setError] = React.useState('');
  const input = React.useRef<HTMLInputElement>(null);
  const add = (files: FileList | null) => {
    try { controller.add(Array.from(files ?? []).map(file => ({ name: file.name, size: file.size, type: file.type, data: file }))); setError(''); }
    catch { setError(t.selectionError); }
  };
  return <div className="grid gap-3">
    {showStatus && <FileUploadStatus controller={controller} locale={locale} messages={messages} />}
    <div className="flex min-h-48 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border p-6 text-center" onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); add(event.dataTransfer.files); }}>
      <HardDrive size={32} aria-hidden="true" className="text-muted-foreground" />
      <input ref={input} type="file" multiple accept={accept} aria-label={t.choose} className="sr-only" onChange={event => { add(event.target.files); event.target.value = ''; }} />
      <Button type="button" onClick={() => input.current?.click()}>{t.choose}</Button>
      <p className="text-sm text-muted-foreground">{t.drop}</p>
    </div>
    {error && <p role="alert" className="text-destructive">{error}</p>}
  </div>;
}

const uploadStatusAppearance = {
  ready: { icon: Clock, className: 'text-muted-foreground' },
  uploading: { icon: LoaderCircle, className: 'text-blue-600 dark:text-blue-400' },
  paused: { icon: CirclePause, className: 'text-amber-600 dark:text-amber-400' },
  success: { icon: CircleCheck, className: 'text-emerald-600 dark:text-emerald-400' },
  error: { icon: CircleAlert, className: 'text-destructive' },
  canceled: { icon: CircleX, className: 'text-muted-foreground' },
};

function UploadToast({ controller, item, dismiss, t }: { controller: UploadController; item: UploadItem; dismiss: () => void; t: UploadMessages }) {
  const file = controller.getFile(item.id);
  const appearance = uploadStatusAppearance[item.status];
  const StatusIcon = appearance.icon;
  const terminal = item.status === 'success' || item.status === 'canceled' || item.status === 'error';
  return <article data-upload-id={item.id} aria-label={t.upload} className="grid w-full min-w-0 max-w-full grid-cols-1 gap-2 overflow-hidden rounded-lg border border-border bg-background p-3 text-foreground shadow-lg">
    <div className="flex min-w-0 items-center gap-3">
      {file && <FilePreview file={file} />}
      <div className="min-w-0 flex-1">
        <p title={item.name} className="truncate font-semibold">{item.name}</p>
        <p aria-live="polite" className="flex min-w-0 flex-wrap items-center gap-x-1 gap-y-0.5 text-xs text-muted-foreground">
          <span className={`inline-flex items-center gap-1 ${appearance.className}`}>
            <StatusIcon aria-hidden="true" size={14} className={`shrink-0 ${item.status === 'uploading' ? 'motion-safe:animate-spin' : ''}`} />
            {t[item.status]}
          </span>
          <span>| {Math.round(item.progress)}% | {formatFileSize(item.size)}</span>
        </p>
      </div>
      {terminal && <button type="button" onClick={dismiss} aria-label={t.dismiss} className="shrink-0 rounded p-1 text-muted-foreground">×</button>}
    </div>
    <Progress value={item.progress} />
    {item.error && <p role="alert" className="min-w-0 break-words text-sm text-destructive">{item.error}</p>}
    {!terminal && <Button size="sm" variant="outline" onClick={() => { void controller.cancel(item.id).catch(error => toast.error(String(error))); }}>{t.cancel}</Button>}
  </article>;
}

/** Mount once alongside Toaster in the application shell to survive navigation. */
export function FileUploadStatus({ controller, locale, messages }: { controller: UploadController } & UploadLocaleOptions) {
  const t = React.useMemo(() => getUploadMessages({ locale, messages }), [locale, messages]);
  const items = React.useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
  const prefix = React.useId();
  const previous = React.useRef(new Map<string, UploadItem>());
  const previousMessages = React.useRef(t);
  React.useEffect(() => {
    const languageChanged = previousMessages.current !== t;
    previousMessages.current = t;
    const current = new Set(items.map(item => item.id));
    for (const id of previous.current.keys()) {
      if (!current.has(id)) { toast.dismiss(`${prefix}-${id}`); previous.current.delete(id); }
    }
    for (const item of items) {
      if (!languageChanged && previous.current.get(item.id) === item) continue;
      previous.current.set(item.id, item);
      const id = `${prefix}-${item.id}`;
      toast.custom(() => <UploadToast t={t} controller={controller} item={item} dismiss={() => toast.dismiss(id)} />, {
        id, duration: item.status === 'success' || item.status === 'canceled' ? 5000 : Infinity,
        style: { width: 'var(--width)', maxWidth: 'min(100%, calc(100vw - 32px))', minWidth: 0 },
      });
    }
  }, [controller, items, prefix, t]);
  React.useEffect(() => () => {
    for (const id of previous.current.keys()) toast.dismiss(`${prefix}-${id}`);
    previous.current.clear();
  }, [controller, prefix]);
  return null;
}
