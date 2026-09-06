"""Physical-device regression checks for fractional slides, calendar pages and notifications."""
import importlib.util
import re
import sys
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('keyboard', Path(__file__).with_name('keyboard-smoke.py'))
k = importlib.util.module_from_spec(spec)
spec.loader.exec_module(k)
ui = k.ui
output = Path(__file__).resolve().parent.parent / 'build' / 'native-component-checks'
output.mkdir(exist_ok=True)

def capture(name):
    (output / (name + '.png')).write_bytes(ui.adb('exec-out', 'screencap', '-p'))

def start(query):
    ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
    ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
    time.sleep(3)
    k.gallery(query)

case = sys.argv[1]
if case == 'calendar':
    start('DatePicker')
    k.tap('Fecha de recepción', scroll=True)
    k.tap('Seleccionar mes')
    k.tap('Seleccionar año')
    k.tap('Años anteriores')
    k.tap('2012')
    k.tap('febrero')
    k.tap('29 de febrero de 2012', scroll=True)
    k.tap('Aplicar', scroll=True)
    assert any('2012' in (n.get('content-desc', '') + n.get('text', '')) for n in ui.nodes())
    capture('calendar-selected')
    print('PASS: year paging, month selection, leap day and Apply', flush=True)
elif case == 'carousel':
    start('Carousel')
    k.find('Gasas estériles', scroll=True)
    capture('carousel-fractional')
    k.tap('Ir a diapositiva 3', scroll=True)
    k.find('3 / 3')
    assert k.find('Siguiente diapositiva').get('enabled') == 'false'
    k.find('Protector solar', scroll=True)
    capture('carousel-last')
    k.tap('Ir a diapositiva 1', scroll=True)
    k.find('1 / 3')
    print('PASS: fractional carousel reaches last slide and returns', flush=True)
elif case == 'code':
    start('Code')
    k.find('Compartir código', scroll=True)
    capture('code-highlight')
    print('CAPTURE: native highlighted code', flush=True)
elif case == 'toast':
    start('Toast')
    k.tap('Mostrar notificación', scroll=True)
    time.sleep(1)
    # Accept only this app's OS notification prompt when present.
    buttons = [n for n in ui.nodes() if n.get('resource-id', '').endswith('permission_allow_button')]
    if buttons:
        x1, y1, x2, y2 = k.bounds(buttons[0])
        ui.adb('shell', 'input', 'tap', str((x1+x2)//2), str((y1+y2)//2))
    k.find('Notificación enviada al sistema.', scroll=True)
    data = ui.adb('shell', 'dumpsys', 'notification', '--noredact').decode(errors='replace')
    blocks = re.split(r'(?=NotificationRecord\()', data)
    assert any('pkg=' + ui.PACKAGE in block and 'Pedido guardado' in block for block in blocks), 'Missing OS notification'
    # View the native shade to verify the app notification, without interacting with other notices.
    ui.adb('shell', 'cmd', 'statusbar', 'expand-notifications')
    time.sleep(1)
    ui.find('Pedido guardado')
    capture('notification-system')
    ui.adb('shell', 'cmd', 'statusbar', 'collapse')
    print('PASS: notification delivered to Android system tray', flush=True)
else:
    raise ValueError(case)
