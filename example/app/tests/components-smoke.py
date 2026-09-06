"""Comprueba el acceso a componentes desde Ajustes en el emulador abierto."""
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)

ui.tap('Ajustes')
ui.tap('Ver componentes')
ui.find('Buscar componentes')
ui.tap('Probar botón', scroll=True)
ui.find('Pulsaciones: 1', scroll=True)
ui.adb('shell', 'input', 'keyevent', '4')
ui.find('Ver componentes')
ui.tap('Ver componentes')
ui.tap('Volver a Ajustes')
ui.find('Ver componentes')
print('OK: acceso a componentes, ejemplo interactivo y vuelta a Ajustes.')
