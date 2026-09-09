"use client";
import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Uppy, { type Meta, type Body } from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import Tus from '@uppy/tus';
import RemoteSources, { type RemoteSourcesOptions } from '@uppy/remote-sources';
import Webcam from '@uppy/webcam';
import Audio from '@uppy/audio';
import ScreenCapture from '@uppy/screen-capture';
import ImageEditor from '@uppy/image-editor';
import GoogleDrivePicker from '@uppy/google-drive-picker';
import GooglePhotosPicker from '@uppy/google-photos-picker';
import Webdav from '@uppy/webdav';
import ImageGenerator, { type ImageGeneratorOptions } from '@uppy/image-generator';
import en from '@uppy/locales/lib/en_US';
import es from '@uppy/locales/lib/es_ES';
import { X, UploadCloud } from 'lucide-react';
import { getUploadMessages, type UploadController } from '@kivora/upload';
import { Button } from './button';
import { UploadDashboardControls } from './upload-dashboard-controls';
import { protectUploadErrorMessages, uploadLogger } from './upload-errors';
import type { FileUploadProps } from './file-upload';

export interface UploadDashboardOptions {
  audio?: boolean;
  screenCapture?: boolean;
  imageEditor?: boolean;
  companion?: RemoteSourcesOptions & { webdav?: boolean };
  googleDrivePicker?: ConstructorParameters<typeof GoogleDrivePicker>[1];
  googlePhotosPicker?: ConstructorParameters<typeof GooglePhotosPicker>[1];
  imageGenerator?: ImageGeneratorOptions;
  /** A full Uppy locale pack, for languages other than the bundled EN/ES. */
  uppyLocale?: typeof en;
}
type Session = { uppy: Uppy<Meta, Body>; element: HTMLDivElement };
const sessions = new WeakMap<UploadController, Session>();
const spanish = { ...es, strings: { ...es.strings,
  pluginNameScreenCapture: 'Pantalla', startCapturing: 'Comenzar captura de pantalla', stopCapturing: 'Detener captura',
  streamActive: 'Captura activa', streamPassive: 'Captura inactiva', micDisabled: 'Acceso al micrófono denegado',
  recording: 'Grabando', takeScreenshot: 'Capturar imagen', discardMediaFile: 'Descartar captura',
  generateImage: 'Generar imagen', generateImagePlaceholder: 'Describe la imagen que quieres crear',
  generating1: 'Generando imagen…', generating2: 'Generando imagen…', generating3: 'Generando imagen…',
  generating4: 'Generando imagen…', generating5: 'Generando imagen…',
} };

function getSession(controller: UploadController, config: UploadDashboardOptions): Session {
  const existing = sessions.get(controller);
  if (existing) return existing;
  const options = controller.getOptions();
  if (options.createTask) throw new Error('The web dashboard requires a Tus endpoint. Custom upload tasks are supported by simple mode.');
  const element = document.createElement('div');
  const uppy = new Uppy<Meta, Body>({ autoProceed: false, logger: uploadLogger, restrictions: {
    maxNumberOfFiles: options.maxFiles ?? 10,
    maxFileSize: options.maxFileSize ?? 50 * 1024 * 1024,
    allowedFileTypes: options.accept ?? null,
  } });
  protectUploadErrorMessages(uppy);
  try {
    uppy.use(Tus, { endpoint: options.endpoint, headers: options.headers, retryDelays: [1000, 3000, 5000], storeFingerprintForResuming: false });
    uppy.use(Dashboard, { target: element, inline: true, width: '100%', height: 490, proudlyDisplayPoweredByUppy: false,
      hideUploadButton: true, hidePauseResumeButton: true, hideProgressAfterFinish: false,
      hideProgressDetails: false, singleFileFullScreen: false, doneButtonHandler: null, theme: 'auto' });
    if (config.imageEditor !== false) uppy.use(ImageEditor, { target: uppy.getPlugin('Dashboard')! });
    if (config.companion) {
      const { webdav, ...remote } = config.companion;
      uppy.use(RemoteSources, remote);
      if (webdav) uppy.use(Webdav, { companionUrl: remote.companionUrl, companionHeaders: remote.companionHeaders });
    }
    if (config.googleDrivePicker) uppy.use(GoogleDrivePicker, config.googleDrivePicker);
    if (config.googlePhotosPicker) uppy.use(GooglePhotosPicker, config.googlePhotosPicker);
    if (config.imageGenerator) uppy.use(ImageGenerator, config.imageGenerator);
    uppy.on('upload-success', (file, response) => {
      if (file) options.onComplete?.({ id: file.id, name: file.name ?? '', size: file.size ?? 0, type: file.type,
        status: 'success', progress: 100, url: response.uploadURL });
    });
  } catch (error) { uppy.destroy(); throw error; }
  const session = { uppy, element };
  sessions.set(controller, session);
  controller.onDispose(() => { uppy.destroy(); element.remove(); sessions.delete(controller); });
  return session;
}

const defaultConfig: UploadDashboardOptions = {};
function DashboardPanel({ controller, locale, messages, camera = true, dashboard = defaultConfig, sources = [], accept }: FileUploadProps) {
  const target = React.useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState('');
  const [selected, setSelected] = React.useState<string>();
  const [busy, setBusy] = React.useState(false);
  const sessionRef = React.useRef<Session | null>(null);
  const [engine, setEngine] = React.useState<Session['uppy']>();
  const t = getUploadMessages({ locale, messages });
  const tRef = React.useRef(t); tRef.current = t;
  React.useEffect(() => {
    let session: Session;
    try {
      session = getSession(controller, dashboard);
      sessionRef.current = session;
      setEngine(session.uppy);
      const { uppy, element } = session;
      target.current?.append(element);
      for (const [id, enabled] of [['Webcam', camera], ['Audio', dashboard.audio !== false], ['ScreenCapture', dashboard.screenCapture !== false]] as const) {
        const plugin = uppy.getPlugin(id);
        if (!enabled && plugin) uppy.removePlugin(plugin);
      }
      if (camera && !uppy.getPlugin('Webcam')) uppy.use(Webcam, { modes: ['picture', 'video-audio'], showVideoSourceDropdown: true });
      if (dashboard.audio !== false && !uppy.getPlugin('Audio')) uppy.use(Audio);
      if (dashboard.screenCapture !== false && !uppy.getPlugin('ScreenCapture')) uppy.use(ScreenCapture);
      // Source permissions are requested only after the user opens that source.
      return () => {
        uppy.getPlugin('Dashboard')?.hideAllPanels();
        uppy.emit('dashboard:modal-closed');
        element.remove();
      };
    } catch { setError(tRef.current.selectionError); }
  }, [controller, camera, dashboard]);
  React.useEffect(() => {
    const uppy = sessionRef.current?.uppy;
    if (!uppy) return;
    uppy.setOptions({ locale: dashboard.uppyLocale ?? (locale?.toLowerCase().startsWith('es') ? spanish : en) });
    const restrictions = controller.getOptions().accept;
    // UI accept is a picker hint; controller restrictions remain authoritative.
    const picker = target.current?.querySelector<HTMLInputElement>('input[type="file"]');
    if (picker && accept && !restrictions?.length) picker.accept = accept;
  }, [locale, dashboard.uppyLocale, controller, accept]);
  React.useEffect(() => {
    const update = () => sessionRef.current?.uppy.getPlugin('Dashboard')?.setOptions({ theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' });
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [controller]);
  const addFiles = (files: Parameters<UploadController['add']>[0]) => {
    try {
      const uppy = sessionRef.current?.uppy;
      if (!uppy) return;
      for (const file of files) {
        if (!(file.data instanceof Blob)) throw new Error('A web source must return Blob data');
        uppy.addFile({ name: file.name, type: file.type, data: file.data, source: selected });
      }
      setSelected(undefined); setError('');
    } catch { setError(t.selectionError); }
  };
  const source = sources.find(source => source.id === selected);
  return <>
    {sources.length > 0 && <div className="flex flex-wrap gap-2 px-6 pb-3">{sources.map(source => <Button type="button" key={source.id} variant="outline" onClick={() => setSelected(source.id)}>{source.icon}{source.label}</Button>)}</div>}
    {source && <section className="grid gap-3 border-y border-border p-6" aria-label={source.label}>
      <Button type="button" variant="ghost" onClick={() => setSelected(undefined)}>{t.back}</Button>
      {source.description && <p>{source.description}</p>}
      {source.render ? source.render({ addFiles, close: () => setSelected(undefined), messages: t }) : <Button disabled={busy || !source.pickFiles} onClick={async () => {
        setBusy(true); try { if (source.pickFiles) addFiles(await source.pickFiles()); } catch { setError(t.selectionError); } finally { setBusy(false); }
      }}>{busy ? t.loading : t.open}</Button>}
    </section>}
    {error && <p role="alert" className="px-6 text-destructive">{error}</p>}
    <div ref={target} className="kivora-upload-dashboard min-w-0" />
    <UploadDashboardControls target={target} label={t.sources} uppy={engine} messages={t} locale={locale} />
  </>;
}

export function UploadDashboard(props: FileUploadProps) {
  const [open, setOpen] = React.useState(false);
  const t = getUploadMessages(props);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild><Button type="button"><UploadCloud size={18} aria-hidden="true" />{t.choose}</Button></Dialog.Trigger>
    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/35 backdrop-blur-sm" />
      <Dialog.Content onPointerDownOutside={event => event.preventDefault()} onInteractOutside={event => event.preventDefault()}
        className="fixed left-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100vw-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-background pt-10 text-foreground shadow-2xl">
        <Dialog.Title className="sr-only">{t.title}</Dialog.Title>
        <Dialog.Description className="sr-only">{t.reviewHint}</Dialog.Description>
        <Dialog.Close asChild><Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1" data-upload-modal-close aria-label={t.close}><X size={20} /></Button></Dialog.Close>
        <DashboardPanel {...props} />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
