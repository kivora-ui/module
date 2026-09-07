import { Platform } from 'react-native';
import { setConfig } from '@kesha-antonov/react-native-background-downloader';
import { createOfflineDownloadManager, type OfflineDownloadManager } from '@kivora/native';

let manager: OfflineDownloadManager | undefined;

export function getPlayerDownloads() {
  if (!manager) {
    const nativeCompletion = Platform.OS === 'android' && Number(Platform.Version) >= 36;
    setConfig({
      showNotificationsEnabled: true,
      showCompletionNotification: nativeCompletion,
      progressInterval: 500,
      progressMinBytes: 0,
      notificationsGrouping: {
        enabled: false,
        texts: {
          downloadTitle: 'Descarga de vídeo',
          downloadStarting: 'Preparando descarga…',
          downloadProgress: 'Descargando… {progress}%',
          downloadFinished: 'Descarga completada',
          groupTitle: 'Descargas',
        },
      },
    });
    manager = createOfflineDownloadManager(undefined, nativeCompletion ? () => {} : undefined);
  }
  return manager;
}
