"""Prueba real por accesibilidad. Requiere la app abierta y crea una venta de ejemplo."""
import os
import re
import subprocess
import time
import xml.etree.ElementTree as ET
from pathlib import Path

ADB = str(Path(os.environ['ANDROID_HOME']) / 'platform-tools' / ('adb.exe' if os.name == 'nt' else 'adb'))
PACKAGE = 'com.kivorapharmacy'

def adb(*args):
    return subprocess.check_output([ADB, *args], timeout=30)

def nodes():
    adb('shell', 'uiautomator', 'dump', '/sdcard/kivora-smoke.xml')
    raw = adb('shell', 'cat', '/sdcard/kivora-smoke.xml')
    return list(ET.fromstring(raw).iter('node'))

def find(label, partial=False, scroll=False, clickable=False):
    for attempt in range(7):
        for node in nodes():
            if clickable and node.get('clickable') != 'true':
                continue
            values = [node.get('text', ''), node.get('content-desc', '')]
            if any(label in value if partial else label == value for value in values):
                return node
        if scroll:
            adb('shell', 'input', 'swipe', '540', '1700', '540', '650', '350')
        time.sleep(1)
    raise AssertionError('No se encuentra: ' + label)

def tap(label, partial=False, scroll=False):
    node = find(label, partial, scroll, clickable=True)
    x1, y1, x2, y2 = map(int, re.findall(r'\d+', node.get('bounds')))
    adb('shell', 'input', 'tap', str((x1+x2)//2), str((y1+y2)//2))
    print('Tap:', label, flush=True)
    time.sleep(0.7)

if __name__ == '__main__':
    tap('Inicio')
    tap('Mostrador')
    tap('Añadir Protector solar SPF 50+')
    tap('Revisar venta', partial=True)
    tap('Forma de pago', scroll=True)
    find('Efectivo')
    tap('Tarjeta')
    tap('Confirmar cobro', partial=True, scroll=True)
    find('Cobro registrado')
    tap('Ventas')
    tap('Ver ticket', scroll=True)
    find('Cobro registrado')
    adb('shell', 'am', 'force-stop', PACKAGE)
    adb('shell', 'am', 'start', '-n', PACKAGE + '/.MainActivity')
    time.sleep(3)
    tap('Ventas')
    find('Ver ticket', scroll=True)
    tap('Inventario')
    tap('Mostrar filtros')
    tap('Categoría')
    find('Higiene')
    tap('Todas las categorías')
    tap('Solo poco stock')
    find('3 productos')
    tap('Solo poco stock')
    tap('Mostrar filtros')
    tap('Recibir unidades', scroll=True)
    find('Unidades recibidas')
    tap('Confirmar entrada', scroll=True)
    tap('Ajustes')
    tap('Modo oscuro')
    find('Activar modo oscuro')
    tap('Modo oscuro')
    tap('Inicio')
    output = Path(__file__).resolve().parent.parent / 'build' / 'android-smoke.png'
    output.parent.mkdir(exist_ok=True)
    output.write_bytes(adb('exec-out', 'screencap', '-p'))
    print('OK: venta, selector, historial, persistencia, filtros, reposicion y temas.')
