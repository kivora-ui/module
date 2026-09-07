"use client";
import * as React from 'react';
import { Button } from './button';
import { Select } from './select';
import { Progress } from './progress';
import { UploadFilePreview } from './upload-file-preview';
import type Uppy from '@uppy/core';
import type { Meta, Body } from '@uppy/core';
import type Dashboard from '@uppy/dashboard';
import type { UploadMessages } from '@kivora/upload';
import { LayoutGrid, List, Plus, File, CircleCheck, CircleAlert, LoaderCircle, Pencil, Clock, CirclePause, Trash2, RotateCcw } from 'lucide-react';

type NativeSelect = { element: HTMLSelectElement; label: string; value: string; disabled: boolean; options: { value: string; label: string; isDisabled: boolean }[] };
/** Keep Uppy responsible for device changes, with Kivora controls outside its Preact tree. */
export function UploadDashboardControls({ target, label, uppy, messages: t }: { target: React.RefObject<HTMLDivElement | null>; label: string; uppy?: Uppy<Meta, Body>; messages: UploadMessages }) {
  const [state, setState] = React.useState<{ selects: NativeSelect[]; cancel?: HTMLButtonElement; cancelLabel: string }>({ selects: [], cancelLabel: '' });
  const id = React.useId();
  const [previewId, setPreviewId] = React.useState<string>();
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [files, setFiles] = React.useState(() => uppy?.getFiles() ?? []);
  const [panel, setPanel] = React.useState(false);
  const [addMore, setAddMore] = React.useState<HTMLButtonElement | null>(null);
  React.useEffect(() => {
    if (!uppy) return;
    const update = () => setFiles(uppy.getFiles());
    update(); uppy.on('state-update', update);
    return () => { uppy.off('state-update', update); };
  }, [uppy]);
  const [starting, setStarting] = React.useState(false);
  const [uploadError, setUploadError] = React.useState(false);
  const active = files.some(file => !!file.progress.uploadStarted && !file.progress.uploadComplete && !file.error);
  const pending = files.some(file => !file.progress.uploadStarted && !file.error);
  const previewFile = files.find(file => file.id === previewId);
  const showFiles = files.length > 0 && !panel;
  React.useEffect(() => {
    if (target.current) target.current.style.display = showFiles ? 'none' : '';
    return () => { if (target.current) target.current.style.display = ''; };
  }, [showFiles, target]);
  React.useEffect(() => {
    const root = target.current;
    if (!root) return;
    root.dataset.kivoraControls = 'true';
    const update = () => {
      setPanel(!!root.querySelector('[data-uppy-panelType]:not([aria-hidden="true"])'));
      setAddMore(root.querySelector<HTMLButtonElement>('.uppy-DashboardContent-addMore'));
      const selects = Array.from(root.querySelectorAll<HTMLSelectElement>('select')).filter(element => !element.closest('[aria-hidden="true"]')).map(element => ({
        element, label: element.getAttribute('aria-label') || label, value: element.value, disabled: element.disabled,
        options: Array.from(element.options).map(option => ({ value: option.value, label: option.label, isDisabled: option.disabled })),
      }));
      const headerCancel = Array.from(root.querySelectorAll<HTMLButtonElement>('.uppy-DashboardContent-back')).filter(element => !element.closest('[aria-hidden="true"]')).at(-1);
      // The metadata editor already provides its own bottom action row.
      const cancel = headerCancel?.closest('.uppy-Dashboard-FileCard') ? undefined : headerCancel;
      const cancelLabel = cancel?.textContent?.trim() ?? '';
      setState(previous => previous.cancel === cancel && previous.cancelLabel === cancelLabel && previous.selects.length === selects.length && previous.selects.every((item, index) => {
        const next = selects[index];
        return !!next && item.element === next.element && item.value === next.value && item.disabled === next.disabled && item.label === next.label && JSON.stringify(item.options) === JSON.stringify(next.options);
      }) ? previous : { selects, cancel, cancelLabel });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { childList: true, subtree: true, attributes: true, characterData: true });
    root.addEventListener('change', update);
    return () => { observer.disconnect(); root.removeEventListener('change', update); delete root.dataset.kivoraControls; };
  }, [target, label]);
  if (!showFiles && !state.selects.length && !state.cancel) return null;
  return <>
    {previewFile && <UploadFilePreview file={previewFile} messages={t} onClose={() => setPreviewId(undefined)} />}
    {showFiles && <div data-upload-view={view} className="kivora-upload-files" role="list">
      {files.map(file => {
        const visual = file.type?.startsWith('image/') || file.type?.startsWith('video/');
        const complete = !!file.progress.uploadComplete;
        const failed = !!file.error;
        const progress = file.progress.percentage ?? 0;
        const started = !!file.progress.uploadStarted;
        const status = failed ? t.error : complete ? t.success : file.isPaused ? t.paused : started ? t.uploading : t.ready;
        const Icon = failed ? CircleAlert : complete ? CircleCheck : file.isPaused ? CirclePause : started ? LoaderCircle : Clock;
        return <article role="listitem" className="kivora-upload-file" key={file.id}>
          <div className="kivora-upload-thumbnail">
            {visual && <button type="button" className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${t.preview}: ${file.name}`} onClick={() => setPreviewId(file.id)} />}
            {file.preview ? <img src={file.preview} alt="" /> : <File aria-hidden="true" size={32} />}
            <Icon aria-label={status} className={failed ? 'text-red-600' : complete ? 'text-green-600' : !started ? 'text-muted-foreground' : file.isPaused ? 'text-amber-600' : 'text-blue-600 motion-safe:animate-spin'} size={20} />
          </div>
          <div className="kivora-upload-file-info">
            <div className="kivora-upload-file-heading">
            <div className="min-w-0 flex-1 truncate text-sm font-medium" title={file.name}>{visual ? <button type="button" className="block w-full truncate text-left hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setPreviewId(file.id)}>{file.name}</button> : file.name}</div>
          <div className="kivora-upload-file-actions">
            {!started && file.type?.startsWith('image/') && uppy?.getPlugin('ImageEditor') && <Button size="icon" className="h-8 w-8 shrink-0" variant="ghost" aria-label={`${t.edit}: ${file.name}`} onClick={() => uppy.getPlugin<Dashboard<Meta, Body>>('Dashboard')?.openFileEditor(file)}><Pencil size={16} /></Button>}
            {failed && <Button size="icon" className="h-8 w-8 shrink-0" variant="ghost" aria-label={`${t.retry}: ${file.name}`} title={t.retry} onClick={() => { void uppy?.retryUpload(file.id).catch(() => {}); }}><RotateCcw size={16} /></Button>}
            <Button size="icon" className="h-8 w-8 shrink-0" variant="ghost" aria-label={`${started && !complete && !failed ? t.cancel : t.remove}: ${file.name}`} title={started && !complete && !failed ? t.cancel : t.remove} onClick={() => uppy?.removeFile(file.id)}><Trash2 size={16} /></Button>
          </div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground" role="status">{status}{' \u00b7 '}{file.size == null ? '' : file.size < 1024 ? `${file.size} B` : file.size < 1048576 ? `${(file.size / 1024).toFixed(1)} KB` : `${(file.size / 1048576).toFixed(1)} MB`}{started && !complete && !failed ? ` \u00b7 ${progress}%` : ''}</div>
            {(view === 'list' || (started && !complete)) && <Progress aria-label={file.name} max={100} value={complete ? 100 : progress} size="sm" className="mt-2" indicatorClassName={failed ? 'bg-destructive motion-reduce:transition-none' : 'motion-reduce:transition-none'} />}
            {failed && <p className="mt-1 text-xs text-destructive">{String(file.error)}</p>}
          </div>

        </article>;
      })}
    </div>}
    <footer data-upload-actions className="sticky bottom-0 z-10 flex flex-wrap items-center justify-end gap-3 bg-background px-4 pb-4 pt-2">
    {showFiles && <div className="mr-auto flex gap-1" role="group" aria-label={`${t.grid} / ${t.list}`}>
      <Button size="icon" variant={view === 'grid' ? 'secondary' : 'ghost'} aria-label={t.grid} aria-pressed={view === 'grid'} onClick={() => setView('grid')}><LayoutGrid size={18} /></Button>
      <Button size="icon" variant={view === 'list' ? 'secondary' : 'ghost'} aria-label={t.list} aria-pressed={view === 'list'} onClick={() => setView('list')}><List size={18} /></Button>
    </div>}
    {state.selects.map((item, index) => <Select key={index} instanceId={`${id}-${index}`} inputId={`${id}-${index}`} aria-label={item.label} mobileSheetTitle={item.label}
      className="min-w-0 flex-1 basis-52" isSearchable={false} menuPlacement="auto" maxMenuHeight={200} isDisabled={item.disabled} options={item.options}
      value={item.options.find(option => option.value === item.value) ?? null}
      onChange={option => {
        if (!option || !item.element.isConnected) return;
        item.element.value = option.value;
        item.element.dispatchEvent(new Event('change', { bubbles: true }));
      }} />)}
    {state.cancel && !showFiles && <Button type="button" variant="outline" onClick={() => state.cancel?.click()}>{state.cancelLabel}</Button>}
    {showFiles && <Button type="button" variant="ghost" onClick={() => { uppy?.cancelAll(); setUploadError(false); }}>{t.clearAll}</Button>}
    {showFiles && addMore && <Button type="button" variant="outline" onClick={() => addMore.click()}><Plus size={16} />{t.addMore}</Button>}
    {showFiles && pending && <Button type="button" disabled={starting || active} onClick={async () => {
      setStarting(true); setUploadError(false);
      try { await uppy?.upload(); } catch { setUploadError(true); } finally { setStarting(false); }
    }}>{t.startUpload}</Button>}
  </footer>
  {uploadError && <p role="alert" className="px-4 pb-3 text-sm text-destructive">{t.selectionError}</p>}
  </>;
}
