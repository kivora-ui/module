import * as React from 'react';
import { View, Text, Image, Pressable, ScrollView, Modal, useWindowDimensions } from 'react-native';
import { UploadController, fileKind, formatFileSize, type UploadFile } from '@kivora/upload';
import { Button as NativeButton, type ButtonProps } from './button';
import { Progress } from './progress';
import { getUploadMessages, type UploadLocaleOptions, type UploadMessages } from '@kivora/upload';
import { BottomSheet } from './bottom-sheet';
import File from 'lucide-react-native/icons/file';
import FileText from 'lucide-react-native/icons/file-text';
import FileArchive from 'lucide-react-native/icons/file-archive';
import FileSpreadsheet from 'lucide-react-native/icons/file-spreadsheet';
import FileImage from 'lucide-react-native/icons/file-image';
import FileVideo from 'lucide-react-native/icons/file-video-camera';
import FileAudio from 'lucide-react-native/icons/file-music';
import Camera from 'lucide-react-native/icons/camera';
import Images from 'lucide-react-native/icons/images';
import FolderOpen from 'lucide-react-native/icons/folder-open';
import X from 'lucide-react-native/icons/x';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


function Button({ children, ...props }: ButtonProps) {
  return <NativeButton {...props}><Text className={props.variant === 'outline' ? 'text-foreground' : 'text-primary-foreground'}>{children}</Text></NativeButton>;
}

function FilePreview({ file, size = 64 }: { file: UploadFile; size?: number }) {
  const kind = fileKind(file.name, file.type);
  const [failed, setFailed] = React.useState(false);
  const Icon = { image: FileImage, video: FileVideo, audio: FileAudio, pdf: FileText, archive: FileArchive, spreadsheet: FileSpreadsheet, document: FileText, file: File }[kind];
  const uri = 'uri' in file.data ? file.data.uri : undefined;
  React.useEffect(() => setFailed(false), [uri]);
  return <View style={{ width: size, height: size }} className="shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
    {kind === 'image' && uri && !failed ? <Image source={{ uri }} style={{ width: size, height: size }} resizeMode="cover" accessibilityLabel={`Preview of ${file.name}`} onError={() => setFailed(true)} /> : <>
      <Icon size={24} color="#737373" />
      {size >= 64 && <Text className="mt-1 text-[10px] font-semibold uppercase text-muted-foreground">{kind}</Text>}
    </>}
  </View>;
}

function FullScreenPreview({ file, label, closeLabel, onClose }: { file: UploadFile; label: string; closeLabel: string; onClose: () => void }) {
  const insets = useSafeAreaInsets();
  const [failed, setFailed] = React.useState(false);
  const uri = 'uri' in file.data ? file.data.uri : undefined;
  const image = fileKind(file.name, file.type) === 'image';
  return <Modal visible animationType="fade" presentationStyle="fullScreen" onRequestClose={onClose}>
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 }}>
        <Text numberOfLines={1} style={{ color: '#fff', flex: 1 }}>{file.name}</Text>
        <Pressable accessibilityRole="button" accessibilityLabel={closeLabel} onPress={onClose} style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}><X size={24} color="#fff" /></Pressable>
      </View>
      {image && uri && !failed ? <Image source={{ uri }} resizeMode="contain" accessibilityLabel={`${label}: ${file.name}`} style={{ flex: 1, width: '100%' }} onError={() => setFailed(true)} /> : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}><FilePreview file={file} size={160} /><Text style={{ color: '#fff' }}>{formatFileSize(file.size)}</Text></View>}
    </View>
  </Modal>;
}

export interface FileUploadSourceContext { addFiles: (files: UploadFile[]) => void; close: () => void; messages: UploadMessages; }
export interface FileUploadSource {
  id: string;
  label: string;
  icon?: React.ReactNode;
  pickFiles?: () => Promise<UploadFile[]>;
  description?: string;
  render?: (context: FileUploadSourceContext) => React.ReactNode;
}
export interface FileUploadProps extends UploadLocaleOptions {
  controller: UploadController;
  pickFiles: () => Promise<UploadFile[]>;
  /** Opt in to an inline file list instead of relying only on system notifications. */
  showStatus?: boolean;
  variant?: 'simple' | 'advanced';
  sources?: FileUploadSource[];
}
export function FileUpload({ controller, pickFiles, showStatus = false, variant = 'simple', sources = [], locale, messages }: FileUploadProps) {
  const t = getUploadMessages({ locale, messages });
  const [screen, setScreen] = React.useState<string | null>(null);
  const source = sources.find(source => `source:${source.id}` === screen);
  const addFiles = (files: UploadFile[]) => { try { controller.add(files); setError(''); if (files.length) setOpen(false); } catch { setError(t.selectionError); } };
  const items = React.useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
  const [error, setError] = React.useState('');
  const [picking, setPicking] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedPreview, setSelectedPreview] = React.useState<string>();
  const { height } = useWindowDimensions();
  const [gridWidth, setGridWidth] = React.useState(0);
  const previewSize = Math.max(1, (gridWidth - 16) / 3);
  const selectedFile = selectedPreview ? controller.getFile(selectedPreview) : undefined;
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const completed = items.filter(item => item.status === 'success');
  const totalSize = completed.reduce((total, item) => total + item.size, 0);
  const lock = React.useRef(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const select = (picker: () => Promise<UploadFile[]>, fromSheet = false) => {
    if (lock.current) return;
    lock.current = true; setPicking(true); setError(''); setOpen(false);
    const start = () => { void Promise.resolve().then(picker).then(files => controller.add(files)).catch(error => setError(t.selectionError)).finally(() => { lock.current = false; setPicking(false); }); };
    // Allow the sheet's native Modal to dismiss before presenting another picker.
    if (fromSheet) timer.current = setTimeout(start, 420); else start();
  };
  const run = (task: Promise<unknown>) => { void task.catch(error => setError(t.selectionError)); };
  const fileList = <View className="gap-3">
    {items.map(item => <View key={item.id} className="gap-2 rounded-lg border border-border p-3">
      <View className="flex-row items-center gap-3">
        {controller.getFile(item.id) ? <FilePreview file={controller.getFile(item.id)!} /> : <File size={24} color="#737373" />}
        <View className="min-w-0 flex-1 gap-1">
          <Text numberOfLines={1} ellipsizeMode="tail" className="font-semibold text-foreground">{item.name}</Text>
          <Text accessibilityLiveRegion="polite" className="text-sm text-muted-foreground">{t[item.status]} | {Math.round(item.progress)}% | {formatFileSize(item.size)}</Text>
        </View>
      </View>
      <Progress value={item.progress} />
      {item.error && <Text accessibilityRole="alert" className="text-destructive">{item.error}</Text>}
      {item.status !== 'success' && item.status !== 'canceled' && <Button size="sm" variant="outline" onPress={() => run(controller.cancel(item.id))}>{t.cancel}</Button>}
    </View>)}
  </View>;
  return <View className="gap-3">
    <Button disabled={picking} onPress={() => variant === 'advanced' ? (setScreen(null), setOpen(true)) : select(pickFiles)}>{picking ? t.loading : t.choose}</Button>
    {items.length > 0 && <View className="gap-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
        {items.map(item => {
          const file = controller.getFile(item.id);
          return <Pressable key={item.id} accessibilityRole="button" accessibilityLabel={`${t.preview}: ${item.name}`} onPress={() => setPreviewOpen(true)} className="h-10 w-10 overflow-hidden rounded-md bg-muted">
            {file ? <FilePreview file={file} size={40} /> : <View className="h-10 w-10 items-center justify-center"><File size={24} color="#737373" /></View>}
          </Pressable>;
        })}
      </ScrollView>
      <Text accessibilityLiveRegion="polite" className="text-sm font-semibold text-foreground">{t.uploadedFiles}: {completed.length}/{items.length}</Text>
    </View>}
    <BottomSheet open={previewOpen} onOpenChange={setPreviewOpen}>
      <View className="gap-3 p-4">
        <Text accessibilityRole="header" className="text-lg font-semibold text-foreground">{t.preview}</Text>
        <Text className="text-sm text-muted-foreground">{t.uploadedFiles}: {completed.length}/{items.length}{' \u00b7 '}{formatFileSize(totalSize)}</Text>
        <ScrollView style={{ maxHeight: height * 0.55 }} contentContainerStyle={{ paddingBottom: 12 }}>
          <View onLayout={event => setGridWidth(event.nativeEvent.layout.width)} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {gridWidth > 0 && items.map(item => {
              const file = controller.getFile(item.id);
              return <View key={item.id} style={{ width: previewSize, gap: 4 }}>
                <Pressable disabled={!file} accessibilityRole="button" accessibilityLabel={`${t.preview}: ${item.name}`} onPress={() => setSelectedPreview(item.id)}>
                  {file ? <FilePreview file={file} size={previewSize} /> : <View style={{ width: previewSize, height: previewSize }} className="items-center justify-center rounded-md bg-muted"><File size={24} color="#737373" /></View>}
                </Pressable>
                <Text numberOfLines={1} className="text-xs text-foreground">{item.name}</Text>
                <Text numberOfLines={1} className="text-xs text-muted-foreground">{t[item.status]}</Text>
                {item.status !== 'success' && item.status !== 'canceled' && <><Progress value={item.progress} /><Button size="sm" variant="outline" onPress={() => run(controller.cancel(item.id))}>{t.cancel}</Button></>}
              </View>;
            })}
          </View>
        </ScrollView>
        {selectedFile && <FullScreenPreview key={selectedPreview} file={selectedFile} label={t.preview} closeLabel={t.close} onClose={() => setSelectedPreview(undefined)} />}
        <Button variant="outline" onPress={() => setPreviewOpen(false)}>{t.close}</Button>
      </View>
    </BottomSheet>
    <BottomSheet open={open} onOpenChange={setOpen}>
      <View className="gap-3 p-4">
        <Text accessibilityRole="header" className="text-lg font-semibold text-foreground">{source?.label ?? t.title}</Text>
        <Text className="text-muted-foreground">{t.hint}</Text>
        {screen !== null && <Button variant="outline" onPress={() => { setScreen(null); setError(''); }}>{t.back}</Button>}
        {screen === null && <>
          <NativeButton variant="outline" disabled={picking} onPress={() => select(pickFiles, true)}><FolderOpen size={20} color="#737373" /><Text className="text-foreground">{t.files}</Text></NativeButton>
          {sources.map(source => {
            const Icon = source.id === 'camera' ? Camera : ['photos', 'gallery', 'images'].includes(source.id) ? Images : FolderOpen;
            return <NativeButton key={source.id} variant="outline" disabled={picking || (!source.render && !source.pickFiles)} onPress={() => {
              if (source.render) setScreen(`source:${source.id}`);
              else if (source.pickFiles) select(source.pickFiles, true);
            }}>{source.icon ?? <Icon size={20} color="#737373" />}<Text className="text-foreground">{source.label}</Text></NativeButton>;
          })}
        </>}
        {source && <View className="gap-3">
          {source.description && <Text className="text-muted-foreground">{source.description}</Text>}
          {source.render ? source.render({ addFiles, close: () => setOpen(false), messages: t }) : <Button disabled={picking || !source.pickFiles} onPress={() => source.pickFiles && select(source.pickFiles, true)}>{t.open}</Button>}
        </View>}
        {error && <Text accessibilityRole="alert" className="text-destructive">{error}</Text>}

      </View>
    </BottomSheet>
    {error ? <Text accessibilityRole="alert" className="text-destructive">{error}</Text> : null}
    {showStatus && !items.length && <Text className="text-muted-foreground">{t.hint}</Text>}
    {showStatus && fileList}

  </View>;
}
