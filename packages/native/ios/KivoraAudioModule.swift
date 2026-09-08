import AVFoundation
import Foundation
import React
import react_native_video

@objc(KivoraAudioModule)
final class KivoraAudioModule: RCTEventEmitter {
    private let mainQueue = DispatchQueue.main
    private lazy var playback = KivoraAudioPlaybackPlugin { [weak self] owner in
        self?.sendEvent(withName: "KivoraAudioSleepExpired", body: ["owner": owner])
    }

    override init() {
        super.init()
        mainQueue.async {
            ReactNativeVideoManager.shared.registerPlugin(plugin: self.playback)
        }
    }

    override func supportedEvents() -> [String]! {
        ["KivoraAudioSleepExpired"]
    }

    @objc override static func requiresMainQueueSetup() -> Bool {
        true
    }

    @objc func configure(_ owner: String, uri: String, deadline: NSNumber?, episode: Bool) {
        mainQueue.async {
            self.playback.configure(owner: owner, uri: uri, deadlineMillis: deadline?.doubleValue, episode: episode)
        }
    }

    @objc func clear(_ owner: String) {
        mainQueue.async {
            self.playback.clear(owner: owner)
        }
    }

    override func invalidate() {
        mainQueue.async {
            self.playback.dispose()
            ReactNativeVideoManager.shared.unregisterPlugin(plugin: self.playback)
        }
        super.invalidate()
    }

    override func startObserving() {}
    override func stopObserving() {}
}

private final class KivoraAudioPlaybackPlugin: RNVAVPlayerPlugin {
    private let expired: (String) -> Void
    private var players: [ObjectIdentifier: AVPlayer] = [:]
    private var endObservers: [ObjectIdentifier: NSObjectProtocol] = [:]
    private var owner: String?
    private var uri: String?
    private var deadline: Date?
    private var episode = false
    private var sleepExpired = false
    private var timeout: DispatchWorkItem?

    init(expired: @escaping (String) -> Void) {
        self.expired = expired
        super.init()
    }

    func configure(owner: String, uri: String, deadlineMillis: Double?, episode: Bool) {
        timeout?.cancel()
        self.owner = owner
        self.uri = uri
        self.deadline = deadlineMillis.map { Date(timeIntervalSince1970: $0 / 1000) }
        self.episode = episode
        sleepExpired = false
        scheduleDeadlineIfNeeded()
        checkDeadline()
    }

    func clear(owner: String) {
        guard self.owner == owner else { return }
        timeout?.cancel()
        timeout = nil
        self.owner = nil
        uri = nil
        deadline = nil
        episode = false
        sleepExpired = false
    }

    override func onInstanceCreated(id _: String, player: AVPlayer) {
        let key = ObjectIdentifier(player)
        players[key] = player
        let observer = NotificationCenter.default.addObserver(
            forName: .AVPlayerItemDidPlayToEndTime,
            object: nil,
            queue: .main
        ) { [weak self, weak player] notification in
            guard let self, let player else { return }
            guard self.episode, self.matches(player), notification.object as AnyObject? === player.currentItem else { return }
            self.finish()
        }
        endObservers[key] = observer
        checkDeadline()
    }

    override func onInstanceRemoved(id _: String, player: AVPlayer) {
        let key = ObjectIdentifier(player)
        players.removeValue(forKey: key)
        if let observer = endObservers.removeValue(forKey: key) {
            NotificationCenter.default.removeObserver(observer)
        }
    }

    func dispose() {
        timeout?.cancel()
        timeout = nil
        for observer in endObservers.values {
            NotificationCenter.default.removeObserver(observer)
        }
        endObservers.removeAll()
        players.removeAll()
        owner = nil
        uri = nil
        deadline = nil
        episode = false
        sleepExpired = false
    }

    private func scheduleDeadlineIfNeeded() {
        guard let deadline else { return }
        let delay = max(0, deadline.timeIntervalSinceNow)
        let workItem = DispatchWorkItem { [weak self] in
            self?.checkDeadline()
        }
        timeout = workItem
        DispatchQueue.main.asyncAfter(deadline: .now() + delay, execute: workItem)
    }

    private func matches(_ player: AVPlayer) -> Bool {
        guard let uri else { return false }
        guard let asset = player.currentItem?.asset as? AVURLAsset else { return false }
        return asset.url.absoluteString == uri
    }

    private func checkDeadline() {
        guard let deadline else { return }
        if sleepExpired {
            pauseMatchingPlayers()
            return
        }
        if deadline <= Date() {
            finish()
        }
    }

    private func pauseMatchingPlayers() {
        for player in players.values where matches(player) {
            player.pause()
        }
    }

    private func finish() {
        guard let owner else { return }
        timeout?.cancel()
        timeout = nil
        deadline = nil
        episode = false
        sleepExpired = true
        pauseMatchingPlayers()
        expired(owner)
    }
}
