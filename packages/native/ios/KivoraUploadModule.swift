import Foundation
import React

private struct KivoraUploadRecord: Codable {
    var id: String
    var uri: String
    var name: String
    var type: String
    var size: Int64
    var status: String
    var progress: Double
    var url: String?
    var error: String?
    var endpoint: String
    var headers: [String: String]
    var createdAt: Double
}

private enum KivoraUploadFailure: LocalizedError {
    case invalidInput(String)
    case unsupportedSourceURL(String)
    case missingLocation
    case invalidLocation
    case missingOffset
    case invalidOffset
    case unexpectedFileEnd
    case httpStatus(Int)
    case canceled

    var errorDescription: String? {
        switch self {
        case let .invalidInput(message), let .unsupportedSourceURL(message):
            return message
        case .missingLocation:
            return "Missing upload location"
        case .invalidLocation:
            return "Upload location must use the same origin"
        case .missingOffset:
            return "Missing offset"
        case .invalidOffset:
            return "Invalid offset"
        case .unexpectedFileEnd:
            return "Unexpected file end"
        case let .httpStatus(code):
            return "HTTP \(code)"
        case .canceled:
            return "Canceled"
        }
    }

    var isPermanent: Bool {
        guard case let .httpStatus(code) = self else { return false }
        guard (400 ... 499).contains(code) else { return false }
        return code != 409 && code != 423 && code != 429
    }
}

private final class KivoraUploadStore {
    private let queue = DispatchQueue(label: "com.kivora.upload.store")
    private let url: URL
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()

    init() {
        let base = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first!
        let directory = base.appendingPathComponent("kivora-uploads", isDirectory: true)
        try? FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        url = directory.appendingPathComponent("records.json")
    }

    func fileDirectory() -> URL {
        let base = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first!
        let directory = base.appendingPathComponent("kivora-uploads/files", isDirectory: true)
        try? FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        return directory
    }

    func loadAll() -> [String: KivoraUploadRecord] {
        queue.sync {
            guard let data = try? Data(contentsOf: url), !data.isEmpty else { return [:] }
            return (try? decoder.decode([String: KivoraUploadRecord].self, from: data)) ?? [:]
        }
    }

    func record(id: String) -> KivoraUploadRecord? {
        queue.sync { loadAllUnsafe()[id] }
    }

    @discardableResult
    func save(_ record: KivoraUploadRecord) -> KivoraUploadRecord {
        queue.sync {
            var all = loadAllUnsafe()
            all[record.id] = record
            persist(all)
            return record
        }
    }

    func update(id: String, _ mutate: (inout KivoraUploadRecord) -> Void) {
        queue.sync {
            var all = loadAllUnsafe()
            guard var record = all[id] else { return }
            if record.status == "canceled" {
                let previous = record
                mutate(&record)
                if record.status != "canceled" {
                    all[id] = previous
                    persist(all)
                    return
                }
            } else {
                mutate(&record)
            }
            all[id] = record
            persist(all)
        }
    }

    private func loadAllUnsafe() -> [String: KivoraUploadRecord] {
        guard let data = try? Data(contentsOf: url), !data.isEmpty else { return [:] }
        return (try? decoder.decode([String: KivoraUploadRecord].self, from: data)) ?? [:]
    }

    private func persist(_ records: [String: KivoraUploadRecord]) {
        guard let data = try? encoder.encode(records) else { return }
        try? data.write(to: url, options: .atomic)
    }
}

private final class KivoraUploadCoordinator: NSObject {
    static let shared = KivoraUploadCoordinator()

    private let store = KivoraUploadStore()
    private let queue = DispatchQueue(label: "com.kivora.upload.coordinator")
    private var activeTasks: [String: URLSessionTask] = [:]
    private var attempts: [String: Int] = [:]
    private lazy var session: URLSession = {
        let configuration = URLSessionConfiguration.default
        configuration.waitsForConnectivity = true
        configuration.timeoutIntervalForRequest = 60
        configuration.timeoutIntervalForResource = 60 * 60 * 24
        configuration.httpMaximumConnectionsPerHost = 1
        return URLSession(configuration: configuration)
    }()

    override init() {
        super.init()
        resumePersistedUploads()
    }

    func enqueue(input: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        queue.async {
            do {
                let uri = input["uri"] as? String ?? ""
                let name = input["name"] as? String ?? "file"
                let type = input["type"] as? String ?? "application/octet-stream"
                let endpoint = input["endpoint"] as? String ?? ""
                let headers = input["headers"] as? [String: String] ?? [:]
                if uri.isEmpty || endpoint.isEmpty {
                    throw KivoraUploadFailure.invalidInput("Background uploads require a local file URI and endpoint.")
                }

                let id = UUID().uuidString.lowercased()
                let fileURL = try self.copyToManagedStorage(id: id, uri: uri, preferredName: name)
                let attributes = try FileManager.default.attributesOfItem(atPath: fileURL.path)
                let size = (attributes[.size] as? NSNumber)?.int64Value ?? Int64((try? Data(contentsOf: fileURL).count) ?? 0)
                let record = KivoraUploadRecord(
                    id: id,
                    uri: fileURL.absoluteString,
                    name: name,
                    type: type,
                    size: size,
                    status: "uploading",
                    progress: 0,
                    url: nil,
                    error: nil,
                    endpoint: endpoint,
                    headers: headers,
                    createdAt: Date().timeIntervalSince1970
                )
                self.store.save(record)
                self.start(id: id, resetAttempts: true)
                resolve(id)
            } catch {
                reject("UPLOAD_START", error.localizedDescription, error)
            }
        }
    }

    func list(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        queue.async {
            do {
                let records = self.store.loadAll().values.sorted { $0.createdAt < $1.createdAt }
                for record in records where record.status == "uploading" {
                    self.ensureActive(id: record.id)
                }
                resolve(records.map { self.publicRecord($0) })
            } catch {
                reject("UPLOAD_LIST", error.localizedDescription, error)
            }
        }
    }

    func cancel(id: String, resolve: @escaping RCTPromiseResolveBlock, reject _: @escaping RCTPromiseRejectBlock) {
        queue.async {
            self.store.update(id: id) { record in
                record.status = "canceled"
                record.error = nil
            }
            self.activeTasks[id]?.cancel()
            self.activeTasks[id] = nil
            resolve(nil)
        }
    }

    private func resumePersistedUploads() {
        queue.async {
            let records = self.store.loadAll().values
            for record in records where record.status == "uploading" {
                self.ensureActive(id: record.id)
            }
        }
    }

    private func ensureActive(id: String) {
        guard activeTasks[id] == nil else { return }
        start(id: id, resetAttempts: false)
    }

    private func start(id: String, resetAttempts: Bool) {
        guard let record = store.record(id: id), record.status == "uploading" else { return }
        if resetAttempts { attempts[id] = 0 }
        run(record)
    }

    private func run(_ record: KivoraUploadRecord) {
        do {
            guard let fileURL = URL(string: record.uri), FileManager.default.fileExists(atPath: fileURL.path) else {
                throw KivoraUploadFailure.unsupportedSourceURL("Upload source is unavailable.")
            }
            if record.status == "canceled" { throw KivoraUploadFailure.canceled }
            if let urlString = record.url, !urlString.isEmpty {
                head(record: record, uploadURL: try requiredURL(urlString))
            } else {
                create(record: record, fileURL: fileURL)
            }
        } catch {
            finish(recordId: record.id, error: error)
        }
    }

    private func create(record: KivoraUploadRecord, fileURL: URL) {
        do {
            let endpointURL = try requiredURL(record.endpoint)
            var request = URLRequest(url: endpointURL)
            request.httpMethod = "POST"
            request.setValue("1.0.0", forHTTPHeaderField: "Tus-Resumable")
            request.setValue(String(record.size), forHTTPHeaderField: "Upload-Length")
            request.setValue(uploadMetadata(name: record.name, type: record.type), forHTTPHeaderField: "Upload-Metadata")
            request.httpBody = Data()
            record.headers.forEach { request.setValue($1, forHTTPHeaderField: $0) }

            let task = session.dataTask(with: request) { data, response, error in
                self.queue.async {
                    self.activeTasks[record.id] = nil
                    do {
                        try self.throwIfCanceled(recordId: record.id)
                        let http = try self.httpResponse(response, error: error)
                        guard (200 ... 299).contains(http.statusCode) else { throw KivoraUploadFailure.httpStatus(http.statusCode) }
                        guard let location = http.value(forHTTPHeaderField: "Location") else { throw KivoraUploadFailure.missingLocation }
                        guard let resolved = URL(string: location, relativeTo: endpointURL)?.absoluteURL,
                              resolved.scheme == endpointURL.scheme,
                              resolved.host == endpointURL.host,
                              resolved.port == endpointURL.port else { throw KivoraUploadFailure.invalidLocation }
                        self.store.update(id: record.id) {
                            $0.url = resolved.absoluteString
                            $0.error = nil
                            $0.status = "uploading"
                        }
                        self.head(record: self.store.record(id: record.id) ?? record, uploadURL: resolved)
                    } catch {
                        self.finish(recordId: record.id, error: error, responseData: data)
                    }
                }
            }
            activeTasks[record.id] = task
            task.resume()
        } catch {
            finish(recordId: record.id, error: error)
        }
        _ = fileURL
    }

    private func head(record: KivoraUploadRecord, uploadURL: URL) {
        var request = URLRequest(url: uploadURL)
        request.httpMethod = "HEAD"
        request.setValue("1.0.0", forHTTPHeaderField: "Tus-Resumable")
        record.headers.forEach { request.setValue($1, forHTTPHeaderField: $0) }

        let task = session.dataTask(with: request) { _, response, error in
            self.queue.async {
                self.activeTasks[record.id] = nil
                do {
                    try self.throwIfCanceled(recordId: record.id)
                    let http = try self.httpResponse(response, error: error)
                    guard (200 ... 299).contains(http.statusCode) else { throw KivoraUploadFailure.httpStatus(http.statusCode) }
                    guard let value = http.value(forHTTPHeaderField: "Upload-Offset"), let offset = Int64(value) else {
                        throw KivoraUploadFailure.missingOffset
                    }
                    if offset < 0 || offset > record.size { throw KivoraUploadFailure.invalidOffset }
                    self.patch(record: self.store.record(id: record.id) ?? record, uploadURL: uploadURL, offset: offset)
                } catch {
                    self.finish(recordId: record.id, error: error)
                }
            }
        }
        activeTasks[record.id] = task
        task.resume()
    }

    private func patch(record: KivoraUploadRecord, uploadURL: URL, offset: Int64) {
        do {
            try throwIfCanceled(recordId: record.id)
            guard let fileURL = URL(string: record.uri), FileManager.default.fileExists(atPath: fileURL.path) else {
                throw KivoraUploadFailure.unsupportedSourceURL("Upload source is unavailable.")
            }
            if offset == record.size {
                store.update(id: record.id) {
                    $0.status = "success"
                    $0.progress = 100
                    $0.error = nil
                }
                attempts[record.id] = nil
                return
            }

            let chunkSize = 1024 * 1024
            let handle = try FileHandle(forReadingFrom: fileURL)
            try handle.seek(toOffset: UInt64(offset))
            let remaining = Int(record.size - offset)
            let data = handle.readData(ofLength: min(chunkSize, remaining))
            try handle.close()
            if data.isEmpty { throw KivoraUploadFailure.unexpectedFileEnd }

            var request = URLRequest(url: uploadURL)
            request.httpMethod = "PATCH"
            request.setValue("1.0.0", forHTTPHeaderField: "Tus-Resumable")
            request.setValue("application/offset+octet-stream", forHTTPHeaderField: "Content-Type")
            request.setValue(String(offset), forHTTPHeaderField: "Upload-Offset")
            record.headers.forEach { request.setValue($1, forHTTPHeaderField: $0) }

            let task = session.uploadTask(with: request, from: data) { _, response, error in
                self.queue.async {
                    self.activeTasks[record.id] = nil
                    do {
                        try self.throwIfCanceled(recordId: record.id)
                        let http = try self.httpResponse(response, error: error)
                        guard (200 ... 299).contains(http.statusCode) else { throw KivoraUploadFailure.httpStatus(http.statusCode) }
                        guard let acknowledgedValue = http.value(forHTTPHeaderField: "Upload-Offset"),
                              let acknowledged = Int64(acknowledgedValue) else { throw KivoraUploadFailure.missingOffset }
                        let expected = offset + Int64(data.count)
                        guard acknowledged == expected else { throw KivoraUploadFailure.invalidOffset }
                        let progress = Double(acknowledged) * 100 / Double(max(record.size, 1))
                        self.store.update(id: record.id) {
                            $0.status = "uploading"
                            $0.progress = progress
                            $0.error = nil
                            $0.url = uploadURL.absoluteString
                        }
                        self.patch(record: self.store.record(id: record.id) ?? record, uploadURL: uploadURL, offset: acknowledged)
                    } catch {
                        self.finish(recordId: record.id, error: error)
                    }
                }
            }
            activeTasks[record.id] = task
            task.resume()
        } catch {
            finish(recordId: record.id, error: error)
        }
    }

    private func finish(recordId: String, error: Error, responseData _: Data? = nil) {
        if case KivoraUploadFailure.canceled = error {
            store.update(id: recordId) {
                $0.status = "canceled"
                $0.error = nil
            }
            activeTasks[recordId] = nil
            attempts[recordId] = nil
            return
        }

        if isCanceled(recordId: recordId) {
            store.update(id: recordId) {
                $0.status = "canceled"
                $0.error = nil
            }
            activeTasks[recordId] = nil
            attempts[recordId] = nil
            return
        }

        let currentAttempt = (attempts[recordId] ?? 0) + 1
        attempts[recordId] = currentAttempt
        let failure = error as? KivoraUploadFailure
        if currentAttempt < 5, failure?.isPermanent != true {
            store.update(id: recordId) {
                $0.status = "uploading"
                $0.error = "Waiting to retry"
            }
            let delay = pow(2.0, Double(currentAttempt - 1))
            queue.asyncAfter(deadline: .now() + delay) {
                guard !self.isCanceled(recordId: recordId), self.activeTasks[recordId] == nil,
                      let record = self.store.record(id: recordId), record.status == "uploading" else { return }
                self.run(record)
            }
            return
        }

        store.update(id: recordId) {
            $0.status = "error"
            $0.error = error.localizedDescription.isEmpty ? "Upload failed" : error.localizedDescription
        }
        activeTasks[recordId] = nil
        attempts[recordId] = nil
    }

    private func publicRecord(_ record: KivoraUploadRecord) -> [String: Any] {
        var value: [String: Any] = [
            "id": record.id,
            "uri": record.uri,
            "name": record.name,
            "type": record.type,
            "size": Double(record.size),
            "status": record.status,
            "progress": record.progress,
        ]
        if let url = record.url { value["url"] = url }
        if let error = record.error { value["error"] = error }
        return value
    }

    private func requiredURL(_ string: String) throws -> URL {
        guard let url = URL(string: string) else {
            throw KivoraUploadFailure.invalidInput("Invalid URL: \(string)")
        }
        return url
    }

    private func throwIfCanceled(recordId: String) throws {
        if isCanceled(recordId: recordId) { throw KivoraUploadFailure.canceled }
    }

    private func isCanceled(recordId: String) -> Bool {
        store.record(id: recordId)?.status == "canceled"
    }

    private func httpResponse(_ response: URLResponse?, error: Error?) throws -> HTTPURLResponse {
        if let nsError = error as NSError? {
            if nsError.domain == NSURLErrorDomain, nsError.code == NSURLErrorCancelled {
                throw KivoraUploadFailure.canceled
            }
            throw nsError
        }
        guard let http = response as? HTTPURLResponse else {
            throw KivoraUploadFailure.invalidInput("Upload failed")
        }
        return http
    }

    private func uploadMetadata(name: String, type: String) -> String {
        func encode(_ value: String) -> String {
            Data(value.utf8).base64EncodedString()
        }
        return "filename \(encode(name)),filetype \(encode(type))"
    }

    private func copyToManagedStorage(id: String, uri: String, preferredName: String) throws -> URL {
        guard let sourceURL = URL(string: uri) else {
            throw KivoraUploadFailure.unsupportedSourceURL("Background uploads require a readable local file URI.")
        }
        let ext = ((preferredName as NSString).pathExtension.isEmpty ? sourceURL.pathExtension : (preferredName as NSString).pathExtension)
        let targetName = ext.isEmpty ? id : "\(id).\(ext)"
        let targetURL = store.fileDirectory().appendingPathComponent(targetName)
        try? FileManager.default.removeItem(at: targetURL)

        if sourceURL.isFileURL, FileManager.default.fileExists(atPath: sourceURL.path) {
            do {
                try FileManager.default.copyItem(at: sourceURL, to: targetURL)
                return targetURL
            } catch {
                let data = try Data(contentsOf: sourceURL)
                try data.write(to: targetURL, options: .atomic)
                return targetURL
            }
        }

        if let data = try? Data(contentsOf: sourceURL) {
            try data.write(to: targetURL, options: .atomic)
            return targetURL
        }

        throw KivoraUploadFailure.unsupportedSourceURL("Background uploads require a readable local file URI.")
    }
}

@objc(KivoraUpload)
final class KivoraUpload: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        false
    }

    @objc func enqueue(_ input: NSDictionary, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        KivoraUploadCoordinator.shared.enqueue(input: input, resolve: resolve, reject: reject)
    }

    @objc func list(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        KivoraUploadCoordinator.shared.list(resolve: resolve, reject: reject)
    }

    @objc func cancel(_ id: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        KivoraUploadCoordinator.shared.cancel(id: id, resolve: resolve, reject: reject)
    }
}
