package com.kivora.upload
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.ViewManager
class KivoraUploadPackage : ReactPackage {
 override fun createNativeModules(context: ReactApplicationContext): List<NativeModule> = listOf(KivoraUploadModule(context))
 override fun createViewManagers(context: ReactApplicationContext): List<ViewManager<*, *>> = emptyList()
}
