import { beforeEach, expect, it, vi } from "vitest";
const native = vi.hoisted(() => ({
  requestPermission: vi.fn(), createChannel: vi.fn(), displayNotification: vi.fn(),
  cancelDisplayedNotifications: vi.fn(), cancelNotification: vi.fn(), openNotificationSettings: vi.fn(),
}));
vi.mock("react-native", () => ({ Platform: { OS: "android" } }));
vi.mock("@notifee/react-native", () => ({ default: native, AndroidImportance: { HIGH: 4 }, AuthorizationStatus: { DENIED: 0 } }));
import { toast } from "./toast";
beforeEach(() => {
  vi.clearAllMocks();
  native.requestPermission.mockResolvedValue({ authorizationStatus: 1 });
  native.createChannel.mockResolvedValue("kivora-local");
  native.displayNotification.mockResolvedValue("notice-1");
});
it("creates an OS notification after permission and retains it until dismissal", async () => {
  toast.configure({ smallIcon: "ic_notification" });
  expect(await toast.success("Saved", { description: "Details" })).toBe("notice-1");
  expect(native.createChannel).toHaveBeenCalledWith(expect.objectContaining({ importance: 4 }));
  const notification = native.displayNotification.mock.calls[0]![0];
  // Notifee generates an ID only when the property is absent (undefined is invalid).
  expect(notification).not.toHaveProperty("id");
  expect(notification).toMatchObject({ title: "Saved", body: "Details", android: { smallIcon: "ic_notification", pressAction: { id: "default" } } });
  expect(notification.android.timeoutAfter).toBeUndefined();
  await toast.dismiss("notice-1");
  expect(native.cancelNotification).toHaveBeenCalledWith("notice-1");
});
it("does not claim delivery when permission is denied", async () => {
  native.requestPermission.mockResolvedValue({ authorizationStatus: 0 });
  expect(await toast("Saved")).toBeUndefined();
  expect(native.displayNotification).not.toHaveBeenCalled();
  expect(native.createChannel).not.toHaveBeenCalled();
});
it("propagates delivery failures to the caller", async () => {
  native.displayNotification.mockRejectedValueOnce(new Error("unavailable"));
  await expect(toast("Saved")).rejects.toThrow("unavailable");
});
