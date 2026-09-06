"""Prueba las nuevas familias interactivas en el emulador Android abierto."""
import importlib.util
import re
import time
import sys
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)
ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
time.sleep(4)
ui.tap('Ajustes')
ui.tap('Ver componentes')
ui.find('60 ejemplos')
previous = ''

def search(name):
    global previous
    for attempt in range(8):
        nodes = ui.nodes()
        target = next((n for n in nodes if n.get('content-desc') == 'Buscar componentes'), None)
        if target is not None:
            x1,y1,x2,y2 = map(int,re.findall(r'\d+',target.get('bounds')))
            ui.adb('shell','input','tap',str((x1+x2)//2),str((y1+y2)//2))
            break
        ui.adb('shell','input','swipe','540','650','540','1800','300')
    else:
        raise AssertionError('No se encuentra el buscador')
    ui.adb('shell','input','keyevent','123')
    ui.adb('shell','input','keyevent',*(['67']*(len(previous)+2)))
    ui.adb('shell','input','text',name)
    previous = name
    time.sleep(.8)

if '--forms-only' not in sys.argv:
    search('Toggle')
    ui.tap('☆ Añadir a favoritos', scroll=True)
    ui.find('★ Guardado en favoritos')
    search('Pagination')
    ui.tap('Página siguiente', scroll=True)
    ui.find('Página 2 de 3')
    ui.tap('Página anterior')
    ui.find('Página 1 de 3')
    search('Carousel')
    ui.tap('Siguiente diapositiva', scroll=True)
    ui.find('2 / 3')
    search('Drawer')
    ui.tap('Abrir detalle del pedido', scroll=True)
    ui.find('3 cajas pendientes de recepción.')
    ui.tap('Cerrar pedido')
    search('Command')
    ui.tap('Consultar stock', scroll=True)
    ui.find('Consultar stock')
    search('Toast')
    ui.tap('Mostrar notificación', scroll=True)
    ui.find('Pedido guardado')
    ui.tap('Cerrar notificación')
search('Questionnaire')
ui.tap('Sí', scroll=True)
ui.adb('shell', 'input', 'swipe', '540', '1800', '540', '950', '350')
ui.tap('Continuar', scroll=True)
ui.find('Observaciones')
ui.adb('shell', 'input', 'swipe', '540', '1800', '540', '950', '350')
ui.tap('Finalizar', scroll=True)
ui.find('Cuestionario completado')
search('DatePicker')
ui.tap('Periodo de ventas', scroll=True)
ui.tap('3 de septiembre de 2026')
ui.tap('8 de septiembre de 2026')
ui.tap('Aplicar')
ui.find('3 sept 2026 – 8 sept 2026')
ui.tap('3 sept 2026 – 8 sept 2026')
ui.tap('10 de septiembre de 2026')
nodes = ui.nodes()
apply = next(n for n in nodes if 'Aplicar' in [n.get('text'),n.get('content-desc')])
assert apply.get('enabled') == 'false'
ui.tap('Cancelar')
ui.find('3 sept 2026 – 8 sept 2026')
search('InputOTP')
ui.tap('Código de verificación', scroll=True)
ui.adb('shell', 'input', 'text', '123456')
ui.find('Código: 123456')
print('OK: controles, paneles, cuestionario, rango y código OTP.', flush=True)
