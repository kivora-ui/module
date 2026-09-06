"""Check the label and indicator belong to the same selectable radio option."""
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
ui.tap('Ajustes')
ui.tap('Ver componentes')
ui.tap('Buscar componentes')
ui.adb('shell', 'input', 'text', 'RadioGroup')
ui.adb('shell', 'input', 'keyevent', '66')

def press(label, fraction):
    option = ui.find(label, clickable=True)
    x1, y1, x2, y2 = map(int, re.findall(r'\d+', option.get('bounds')))
    ui.adb('shell', 'input', 'tap', str(int(x1 + (x2-x1)*fraction)), str((y1+y2)//2))
    time.sleep(.3)
    assert ui.find(label, clickable=True).get('checked') == 'true'

# The right half is well outside the indicator, on the label/row hit area.
press('Entrega a domicilio', .7)
assert ui.find('Recogida en farmacia', clickable=True).get('checked') == 'false'
ui.find('Seleccionado: Domicilio')
press('Entrega a domicilio', .7)  # Selected radios must not toggle off.
press('Recogida en farmacia', .025)
assert ui.find('Entrega a domicilio', clickable=True).get('checked') == 'false'
ui.find('Seleccionado: Recogida')
press('Entrega a domicilio', .025)
press('Recogida en farmacia', .7)
print('OK: radio label, indicator, exclusive selection and repeated selection.')
