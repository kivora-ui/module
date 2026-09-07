package com.kivora.upload
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.Manifest
import android.content.pm.PackageManager
import android.content.pm.ServiceInfo
import android.net.Uri
import android.os.Build
import android.util.Base64
import androidx.core.app.NotificationCompat
import androidx.work.*
import java.io.File
import java.io.RandomAccessFile
import java.io.IOException
import java.util.concurrent.TimeUnit
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class KivoraUploadWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
 private val ctx = applicationContext
 private val key = id.toString()
 private val manager = ctx.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
 private val client = OkHttpClient.Builder().followRedirects(false).connectTimeout(30, TimeUnit.SECONDS).readTimeout(60, TimeUnit.SECONDS).build()
 @Volatile private var activeCall: Call? = null
 private fun notification(name: String, progress: Int, complete: Boolean = false, failed: Boolean = false): android.app.Notification {
  if (Build.VERSION.SDK_INT >= 26) manager.createNotificationChannel(NotificationChannel("kivora-uploads", ctx.getString(com.kivora.upload.R.string.kivora_upload_channel), NotificationManager.IMPORTANCE_DEFAULT))
  val builder = NotificationCompat.Builder(ctx, "kivora-uploads")
   .setSmallIcon(android.R.drawable.stat_sys_upload).setContentTitle(ctx.getString(if (failed) R.string.kivora_upload_failed else if (complete) R.string.kivora_upload_complete else R.string.kivora_upload_active))
   .setContentText(name).setOnlyAlertOnce(!complete).setOngoing(!complete).setAutoCancel(complete)
   .setForegroundServiceBehavior(NotificationCompat.FOREGROUND_SERVICE_IMMEDIATE)
  if (!complete) builder.setSubText("$progress%")
  if (!complete) builder.setProgress(100, progress, false).addAction(android.R.drawable.ic_delete, ctx.getString(R.string.kivora_upload_cancel), WorkManager.getInstance(ctx).createCancelPendingIntent(id))
  return builder.build()
 }
 private fun completedNotification(name: String, failed: Boolean = false) {
  if (Build.VERSION.SDK_INT < 33 || ctx.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED) {
   manager.notify(key.hashCode() xor 0x40000000, notification(name, 100, complete = true, failed = failed))
  }
 }
 private suspend fun foreground(name: String, progress: Int) {
  val note = notification(name, progress)
  setForeground(if (Build.VERSION.SDK_INT >= 29) ForegroundInfo(key.hashCode(), note, ServiceInfo.FOREGROUND_SERVICE_TYPE_DATA_SYNC) else ForegroundInfo(key.hashCode(), note))
 }
 override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
  val record = Records.get(ctx, key)
  val name = record.optString("name", "File")
  try {
   if (record.optString("status") == "canceled") return@withContext Result.failure()
   foreground(name, record.optInt("progress"))
   val file = File(Uri.parse(record.getString("uri")).path!!)
   val endpoint = record.getString("endpoint")
   val headers = record.optJSONObject("headers")
   fun request(url: String, method: String, body: RequestBody? = null, extra: Map<String, String> = emptyMap()): Response {
    if (isStopped || Records.get(ctx, key).optString("status") == "canceled") throw IOException("Canceled")
    val builder = Request.Builder().url(url).method(method, body).header("Tus-Resumable", "1.0.0")
    headers?.keys()?.forEach { builder.header(it, headers.getString(it)) }
    extra.forEach { (k,v) -> builder.header(k,v) }
    val call = client.newCall(builder.build()); activeCall = call
    val response = call.execute()
    if (!response.isSuccessful) { val code = response.code; response.close(); throw IOException("HTTP $code") }
    return response
   }
   var url = record.optString("url")
   if (url.isEmpty()) {
    fun encode(value: String) = Base64.encodeToString(value.toByteArray(Charsets.UTF_8), Base64.NO_WRAP)
    request(endpoint, "POST", ByteArray(0).toRequestBody(), mapOf("Upload-Length" to file.length().toString(), "Upload-Metadata" to "filename ${encode(name)},filetype ${encode(record.optString("type"))}")).use { response ->
     val target = response.request.url.resolve(response.header("Location") ?: throw IOException("Missing upload location")) ?: throw IOException("Invalid upload location")
     if (target.host != response.request.url.host || target.scheme != response.request.url.scheme || target.port != response.request.url.port) throw IOException("Upload location must use the same origin")
     url = target.toString()
    }
    Records.update(ctx, key, "uploading", url = url)
   }
   var offset = request(url, "HEAD").use { it.header("Upload-Offset")?.toLong() ?: throw IOException("Missing offset") }
   if (offset < 0 || offset > file.length()) throw IOException("Invalid offset")
   RandomAccessFile(file, "r").use { input ->
    input.seek(offset)
    val buffer = ByteArray(1024 * 1024)
    while (offset < file.length()) {
     if (isStopped) throw IOException("Stopped")
     val count = input.read(buffer, 0, minOf(buffer.size.toLong(), file.length() - offset).toInt())
     if (count < 0) throw IOException("Unexpected file end")
     request(url, "PATCH", buffer.toRequestBody("application/offset+octet-stream".toMediaType(), 0, count), mapOf("Upload-Offset" to offset.toString())).use { response ->
      val next = response.header("Upload-Offset")?.toLong() ?: throw IOException("Missing offset")
      if (next != offset + count) throw IOException("Invalid acknowledged offset")
      offset = next
     }
     val progress = (offset * 100 / file.length()).toInt()
     Records.update(ctx, key, "uploading", progress)
     foreground(name, progress)
    }
   }
   if (isStopped || Records.get(ctx,key).optString("status") == "canceled") return@withContext Result.failure()
   Records.update(ctx, key, "success", 100)
   completedNotification(name)
   Result.success()
  } catch (error: Exception) {
   if (isStopped || Records.get(ctx,key).optString("status") == "canceled") return@withContext Result.failure()
   val permanent = error.message?.matches(Regex("HTTP 4[0-9]{2}")) == true && error.message != "HTTP 409" && error.message != "HTTP 423" && error.message != "HTTP 429"
   if (runAttemptCount < 4 && !permanent) { Records.update(ctx,key,"uploading",error = "Waiting to retry"); Result.retry() }
   else { Records.update(ctx,key,"error",error = error.message ?: "Upload failed"); completedNotification(name, true); Result.failure() }
  } finally { activeCall = null }
 }
}
