package com.kivora.upload
import android.content.Context
import android.net.Uri
import androidx.work.*
import com.facebook.react.bridge.*
import java.io.File
import java.util.UUID
import org.json.JSONObject

internal object Records {
 fun prefs(c: Context) = c.getSharedPreferences("kivora-uploads", Context.MODE_PRIVATE)
 @Synchronized fun get(c: Context, id: String): JSONObject = JSONObject(prefs(c).getString(id, "{}")!!)
 @Synchronized fun save(c: Context, id: String, value: JSONObject) { prefs(c).edit().putString(id, value.toString()).commit() }
 @Synchronized fun update(c: Context, id: String, state: String, progress: Int? = null, url: String? = null, error: String? = null) {
  val value = get(c, id)
  if (value.optString("status") == "canceled" && state != "canceled") return
  value.put("status", state)
  if (progress != null) value.put("progress", progress)
  if (url != null) value.put("url", url)
  if (error != null) value.put("error", error)
  save(c, id, value)
 }
}
class KivoraUploadModule(private val ctx: ReactApplicationContext) : ReactContextBaseJavaModule(ctx) {
 override fun getName() = "KivoraUpload"
 @ReactMethod fun enqueue(input: ReadableMap, promise: Promise) {
  val values = input.toHashMap()
  Thread {
   try {
    val request = OneTimeWorkRequestBuilder<KivoraUploadWorker>().setConstraints(Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build()).build()
    val id = request.id.toString()
    val dir = File(ctx.filesDir, "kivora-uploads").apply { mkdirs() }
    val file = File(dir, id)
    ctx.contentResolver.openInputStream(Uri.parse(values["uri"] as String))!!.use { source -> file.outputStream().use { source.copyTo(it) } }
    val record = JSONObject(values).put("id", id).put("uri", Uri.fromFile(file).toString()).put("size", file.length()).put("status", "uploading").put("progress", 0)
    Records.save(ctx, id, record)
    WorkManager.getInstance(ctx).enqueue(request).result.get()
    promise.resolve(id)
   } catch (error: Exception) { promise.reject("UPLOAD_START", error) }
  }.start()
 }
 @ReactMethod fun list(promise: Promise) {
  Thread { try {
   val result = Arguments.createArray()
   Records.prefs(ctx).all.keys.forEach { id ->
    val info = WorkManager.getInstance(ctx).getWorkInfoById(UUID.fromString(id)).get()
    if (info?.state == WorkInfo.State.CANCELLED) Records.update(ctx, id, "canceled")
    val value = Records.get(ctx, id)
    val map = Arguments.createMap()
    listOf("id", "uri", "name", "type", "status", "url", "error").forEach { map.putString(it, value.optString(it)) }
    map.putDouble("size", value.optDouble("size", 0.0)); map.putDouble("progress", value.optDouble("progress", 0.0))
    result.pushMap(map)
   }
   promise.resolve(result)
  } catch (error: Exception) { promise.reject("UPLOAD_LIST", error) } }.start()
 }
 @ReactMethod fun cancel(id: String, promise: Promise) {
  Records.update(ctx, id, "canceled")
  WorkManager.getInstance(ctx).cancelWorkById(UUID.fromString(id))
  promise.resolve(null)
 }
}
