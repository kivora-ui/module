import * as React from "react";
import { Platform } from "react-native";
import notifee, { AndroidImportance, AuthorizationStatus } from "@notifee/react-native";

export interface ToastOptions {
  id?: string;
  description?: string;
  data?: Record<string, string>;
  /** Android-only timeout. By default the notification remains in the system tray. */
  duration?: number;
}
export interface ToasterProps {
  channelId?: string;
  channelName?: string;
  /** Android drawable resource, falling back to the app launcher icon. */
  smallIcon?: string;
}
let configuration: Required<ToasterProps> = {
  channelId: "kivora-local", channelName: "Notificaciones", smallIcon: "ic_launcher",
};
function configure(options: ToasterProps) {
  configuration = { ...configuration, ...options };
}
async function show(title: string, options: ToastOptions = {}, kind = "default") {
  const permission = await notifee.requestPermission();
  if (permission.authorizationStatus === AuthorizationStatus.DENIED) return undefined;
  const channelId = Platform.OS === "android" ? await notifee.createChannel({
    id: configuration.channelId, name: configuration.channelName,
    importance: AndroidImportance.HIGH,
  }) : undefined;
  return notifee.displayNotification({
    ...(options.id === undefined ? {} : { id: options.id }),
    title,
    body: options.description,
    data: { ...options.data, kind },
    android: {
      channelId: channelId ?? configuration.channelId,
      smallIcon: configuration.smallIcon,
      pressAction: { id: "default" },
      autoCancel: true,
      ...(Number.isFinite(options.duration) && options.duration! > 0 ? { timeoutAfter: options.duration } : {}),
    },
    ios: { foregroundPresentationOptions: { banner: true, list: true, sound: true, badge: false } },
  });
}
/** Native local notifications. Resolves to the notification ID, or undefined when permission is denied. */
export const toast = Object.assign(show, {
  success: (title: string, options?: ToastOptions) => show(title, options, "success"),
  error: (title: string, options?: ToastOptions) => show(title, options, "error"),
  dismiss: (id?: string) => id === undefined ? notifee.cancelDisplayedNotifications() : notifee.cancelNotification(id),
  requestPermission: () => notifee.requestPermission(),
  openSettings: () => notifee.openNotificationSettings(),
  configure,
});
/** Optional configuration helper; notifications are rendered by the OS, not a React overlay. */
export function Toaster(props: ToasterProps) {
  const { channelId, channelName, smallIcon } = props;
  React.useEffect(() => {
    configure({
      ...(channelId ? { channelId } : {}),
      ...(channelName ? { channelName } : {}),
      ...(smallIcon ? { smallIcon } : {}),
    });
  }, [channelId, channelName, smallIcon]);
  return null;
}
