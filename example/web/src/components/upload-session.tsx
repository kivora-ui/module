"use client";
import { UploadController, FileUploadStatus } from '@kivora/nextjs';
let session: UploadController | undefined;
export function getUploadSession() {
  return session ??= new UploadController({ endpoint: 'http://127.0.0.1:1080/files', maxFiles: 20,
  });
}
export function UploadSessionStatus() { return <FileUploadStatus controller={getUploadSession()} />; }
