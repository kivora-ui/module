"""State and accessibility checks for animated native controls (not an FPS benchmark)."""
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
previous = ''

def search(name):
    global previous
    ui.tap('Buscar componentes')
    ui.adb('shell', 'input', 'keyevent', '123')
    ui.adb('shell', 'input', 'keyevent', *(['67'] * (len(previous) + 2)))
    ui.adb('shell', 'input', 'text', name)
    # Submit the single-line search to hide Android's floating handwriting
    # toolbar, which can cover the small radio hit targets on the left.
    ui.adb('shell', 'input', 'keyevent', '66')
    previous = name
    time.sleep(.5)

search('Accordion')
ui.tap('Entrega del pedido', partial=True)
ui.find('Recogida en farmacia de 09:00 a 21:00.')
ui.tap('Entrega del pedido', partial=True)
assert not any(n.get('text') == 'Recogida en farmacia de 09:00 a 21:00.' for n in ui.nodes())
search('Collapsible')
ui.tap('Ver instrucciones')
ui.find('Comprueba las unidades', partial=True)
ui.tap('Ver instrucciones')
assert not any('Comprueba las unidades' in n.get('text', '') for n in ui.nodes())
search('Popover')
ui.tap('Ver horario')
ui.tap('Cerrar horario')
assert not any(n.get('content-desc') == 'Cerrar horario' for n in ui.nodes())
search('RadioGroup')
ui.tap('Entrega a domicilio')
assert ui.find('Entrega a domicilio', clickable=True).get('checked') == 'true'
ui.find('Seleccionado: Domicilio')
search('Tabs')
ui.tap('Pedidos')
ui.find('2 pedidos pendientes.')
ui.tap('Stock')
ui.find('24 unidades disponibles.')
search('Slider')
slider = ui.find('Progreso de ejemplo')
x1, y1, x2, y2 = map(int, re.findall(r'\d+', slider.get('bounds')))
ui.adb('shell', 'input', 'swipe', str((x1+x2)//2), str((y1+y2)//2), str(x2-30), str((y1+y2)//2), '400')
ui.find('100 %')
ui.tap('Reiniciar progreso')
ui.find('0 %')
print('OK: accordion, collapsible, popover, radio, tabs, slider and progress.')
