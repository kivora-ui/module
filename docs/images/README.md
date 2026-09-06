# Capturas de Kivora

Capturas reales de Farmacia Oliva, tomadas el 5 de septiembre de 2026. Los datos mostrados pertenecen a los ejemplos locales; web y Android tienen almacenes independientes.

| Archivo | Origen | Tamaño |
| --- | --- | --- |
| `web-desktop.png` | Next.js, `/`, tema oscuro | 1440 × 1000 |
| `web-mobile.png` | Next.js, `/`, tema claro, viewport móvil | 390 × 844 |
| `web-tablet.png` | Next.js, `/tablet`, tema oscuro | 1180 × 820 |
| `native-android.png` | App React Native, Inicio, emulador Android, tema oscuro | 1080 × 2400 |

## Actualizar la web

Desde la raíz del repositorio, con las dependencias y el navegador Chromium de Playwright instalados:

```sh
pnpm exec playwright install chromium
pnpm dev:web
```

En otra terminal:

```sh
node scripts/capture-readme.mjs
```

El script abre contextos nuevos con datos de demostración, elige el tema y espera a que terminen las animaciones y las notificaciones. Oculta únicamente la interfaz de desarrollo de Next.js para la captura. No retoca el contenido de la aplicación.

## Actualizar Android

Arranca la app con `pnpm dev:app` y `pnpm android:app`. Abre **Inicio** en tema oscuro, cierra el teclado y cualquier panel. Con un único dispositivo conectado, ejecuta desde la raíz:

```sh
python -c "import os, pathlib, subprocess; adb = pathlib.Path(os.environ['ANDROID_HOME']) / 'platform-tools' / 'adb'; pathlib.Path('docs/images/native-android.png').write_bytes(subprocess.check_output([str(adb), 'exec-out', 'screencap', '-p']))"
```

En Windows, usa `adb.exe` en lugar de `adb` en el comando anterior. Si hay varios dispositivos, añade `'-s', 'ID_DEL_DISPOSITIVO'` entre `str(adb)` y `'exec-out'`. La escritura binaria evita que PowerShell convierta los bytes de la imagen en texto. No es necesario borrar los datos de la app.

## Dónde se muestran

El [README principal](../../README.md) referencia estos archivos mediante rutas relativas, por lo que las capturas quedan versionadas con el código. Los README de npm son independientes y enlazan los módulos mediante sus páginas de paquete. Cuando el repositorio tenga una URL pública se podrá añadir también un enlace directo a esta galería desde npm.
