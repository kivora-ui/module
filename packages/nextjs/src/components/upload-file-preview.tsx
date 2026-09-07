"use client";
import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from './button';
import type { UploadMessages } from '@kivora/upload';

export function UploadFilePreview({ file, messages: t, onClose }: {
  file: { name?: string; type: string; data: unknown; preview?: string; uploadURL?: string };
  messages: UploadMessages;
  onClose: () => void;
}) {
  const [url, setUrl] = React.useState<string>();
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    const local = file.data instanceof Blob ? URL.createObjectURL(file.data) : undefined;
    setUrl(local ?? file.uploadURL ?? file.preview);
    setFailed(false);
    return () => { if (local) URL.revokeObjectURL(local); };
  }, [file.data, file.uploadURL, file.preview]);
  return <Dialog.Root open onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
      <Dialog.Content aria-describedby={undefined} onPointerDownOutside={event => event.preventDefault()}
        className="fixed left-1/2 top-1/2 z-[60] w-[calc(100vw-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background p-4 text-foreground shadow-2xl">
        <div className="mb-4 flex items-center gap-3">
          <Dialog.Title className="min-w-0 flex-1 truncate text-sm font-medium" title={file.name}>{t.preview}: {file.name}</Dialog.Title>
          <Dialog.Close asChild><Button type="button" variant="ghost" size="icon" aria-label={t.close}><X size={20} /></Button></Dialog.Close>
        </div>
        {url && !failed ? file.type.startsWith('video/')
          ? <video src={url} controls playsInline className="max-h-[70dvh] w-full rounded-md" onError={() => setFailed(true)} />
          : <img src={url} alt={file.name ?? t.preview} className="max-h-[70dvh] w-full rounded-md object-contain" onError={() => setFailed(true)} />
          : <p role="status" className="p-8 text-center text-muted-foreground">{t.error}</p>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
