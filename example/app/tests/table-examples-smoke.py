"""Exercise the composed native table examples without changing pharmacy data."""
import importlib.util
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)
ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
time.sleep(4)

def example(query):
    ui.tap('Ajustes')
    ui.tap('Ver componentes')
    ui.tap('Buscar componentes')
    ui.adb('shell', 'input', 'text', query.replace(' ', '%s'))
    ui.adb('shell', 'input', 'keyevent', '66')

example('Buscar y filtrar')
ui.tap('Buscar en la tabla')
ui.adb('shell', 'input', 'text', 'termometro')
ui.adb('shell', 'input', 'keyevent', '66')
ui.find('1 de 6 productos')
ui.tap('Buscar en la tabla')
ui.adb('shell', 'input', 'keyevent', '123')
ui.adb('shell', 'input', 'keyevent', *(['67'] * 10))
ui.adb('shell', 'input', 'keyevent', '66')
ui.tap('Ordenar tabla', scroll=True)
ui.tap('Mayor stock')
ui.find('6 de 6 productos')
ui.tap('Filtros de tabla', scroll=True)
ui.tap('Estado del producto')
ui.tap('Activos')
ui.tap('Botiquín')
ui.tap('Solo poco stock (5 o menos)', scroll=True)
ui.tap('Ver 1 resultados', scroll=True)
ui.find('1 de 6 productos')
ui.find('Termómetro digital')

example('simple')
ui.tap('Gasas estériles', scroll=True)
assert ui.find('Gasas estériles', clickable=True).get('checked') == 'true'
ui.tap('Termómetro digital', scroll=True)
assert ui.find('Termómetro digital', clickable=True).get('checked') == 'true'
ui.find('1 seleccionados', partial=True, scroll=True)

example('Marca productos')
ui.tap('Seleccionar visibles (0/6)', scroll=True)
ui.find('6 seleccionados', partial=True, scroll=True)
ui.tap('Preparar reposición', scroll=True)
ui.find('Lista de reposición preparada: 6 productos (ejemplo).', scroll=True)
ui.tap('Limpiar selección', scroll=True)
ui.find('0 seleccionados', partial=True)
print('OK: search, ordering, combined filters, single selection and bulk selection/action.')
