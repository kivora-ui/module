"""Pulsa la zona de texto, fuera del indicador, y comprueba un único cambio."""
import importlib.util
import re
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)
ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
time.sleep(4)

def toggle_text(label, fraction):
    before = ui.find(label)
    x1, y1, x2, y2 = map(int, re.findall(r'\d+', before.get('bounds')))
    ui.adb('shell', 'input', 'tap', str(int(x1 + (x2-x1)*fraction)), str((y1+y2)//2))
    time.sleep(1)
    after = ui.find(label)
    assert after.get('checked') != before.get('checked'), (label, before, after)
    ui.adb('shell', 'input', 'tap', str(int(x1 + (x2-x1)*fraction)), str((y1+y2)//2))
    time.sleep(1)
    assert ui.find(label).get('checked') == before.get('checked')

ui.tap('Ajustes')
ui.tap('Ver componentes')
ui.tap('Buscar componentes')
ui.adb('shell', 'input', 'text', 'Checkbox')
toggle_text('Producto revisado', 0.7)
ui.tap('Producto revisado')
ui.tap('Buscar componentes')
ui.adb('shell', 'input', 'keyevent', '123')
ui.adb('shell', 'input', 'keyevent', *(['67'] * 8))
ui.adb('shell', 'input', 'text', 'Switch')
toggle_text('Avisos de ejemplo', 0.25)
ui.tap('Buscar componentes')
ui.adb('shell', 'input', 'keyevent', '123')
ui.adb('shell', 'input', 'keyevent', *(['67'] * 6))
ui.adb('shell', 'input', 'text', 'Checkbox')
assert ui.find('Producto revisado').get('checked') == 'true'
ui.tap('Producto revisado')
ui.tap('Volver a Ajustes')
toggle_text('Modo oscuro', 0.25)
print('OK: texto de checkbox, switch y ajuste de tema; un cambio por pulsacion.')
