/** The only file in this package that touches `@notifee/react-native` — lazy
 * `require`, same reasoning as `react-native-fs` and the background-downloader
 * transport: notifee's native module may not be linked in every consumer app,
 * and a failure here must never break the download itself. */
export async function notifyDownloadComplete(title: string): Promise<void> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const notifee = require('@notifee/react-native').default ?? require('@notifee/react-native');
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({ id: 'kivora-downloads', name: 'Descargas' });
    await notifee.displayNotification({
      title: 'Descarga completada',
      body: title,
      android: { channelId, smallIcon: 'ic_launcher' },
    });
  } catch {
    // A missing/unlinked notifee module, or a denied permission, must never
    // break the download flow — the file is already saved either way.
  }
}
