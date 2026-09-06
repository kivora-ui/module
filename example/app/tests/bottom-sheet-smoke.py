"""Check repeated sheet opening, editing, closing and Android back handling."""
import importlib.util
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)
ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
time.sleep(4)
ui.tap('Ajustes')
ui.tap('Ver componentes')
ui.tap('Buscar componentes')
ui.adb('shell', 'input', 'text', 'BottomSheet')
ui.tap('Abrir panel inferior')
ui.tap('Nota del panel')
ui.adb('shell', 'input', 'text', 'Prueba')
ui.tap('Cerrar panel inferior')
assert not any(n.get('content-desc') == 'Nota del panel' for n in ui.nodes())
ui.tap('Abrir panel inferior')
assert ui.find('Nota del panel').get('text') == 'Prueba'
ui.adb('shell', 'input', 'keyevent', '4')
time.sleep(0.5)
assert not any(n.get('content-desc') == 'Nota del panel' for n in ui.nodes())
ui.tap('Abrir panel inferior')
ui.find('Nota del panel')
ui.tap('Cerrar panel inferior')
ui.find('Abrir panel inferior')
print('OK: repeated opening, note persistence, close button and Android back.')
