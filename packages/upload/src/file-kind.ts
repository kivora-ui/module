export function fileKind(name: string, type: string) {
  const extension = name.split('.').pop()?.toLowerCase() ?? '';
  if (type.startsWith('image/') || /^(png|jpe?g|gif|webp|heic|avif|bmp|svg)$/.test(extension)) return 'image';
  if (type.startsWith('video/') || /^(mp4|mov|mkv|webm|avi)$/.test(extension)) return 'video';
  if (type.startsWith('audio/') || /^(mp3|wav|aac|ogg|m4a|flac)$/.test(extension)) return 'audio';
  if (type === 'application/pdf' || extension === 'pdf') return 'pdf';
  if (/^(zip|rar|7z|gz|tar)$/.test(extension) || /zip|compressed|archive/.test(type)) return 'archive';
  if (/^(csv|xls|xlsx|ods)$/.test(extension) || /spreadsheet|excel/.test(type)) return 'spreadsheet';
  if (type.startsWith('text/') || /^(doc|docx|odt|rtf|txt)$/.test(extension)) return 'document';
  return 'file';
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
