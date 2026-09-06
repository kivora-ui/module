"""Check the release tooltip floats above its trigger and dismisses automatically."""
import importlib.util
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('keyboard', Path(__file__).with_name('keyboard-smoke.py'))
k = importlib.util.module_from_spec(spec)
spec.loader.exec_module(k)
ui = k.ui
ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
time.sleep(3)
k.gallery('Tooltip')
label = 'Stock m\u00ednimo'
trigger = k.bounds(k.find(label, scroll=True))
x, y = (trigger[0]+trigger[2])//2, (trigger[1]+trigger[3])//2
ui.adb('shell', 'input', 'tap', str(x), str(y))
time.sleep(.4)
(k.output / 'tooltip-floating.png').write_bytes(ui.adb('exec-out', 'screencap', '-p'))
nodes = ui.nodes()
content = next(n for n in nodes if n.get('text') == 'Umbral utilizado para los avisos de reposici\u00f3n.')
left, top, right, bottom = k.bounds(content)
assert bottom < trigger[1], 'Tooltip did not float above its trigger'
assert 0 <= left < right <= k.width and top > 0, 'Tooltip outside viewport'
time.sleep(5)
assert not any(n.get('text') == content.get('text') for n in ui.nodes()), 'Tooltip did not close'
assert k.bounds(k.find(label)) == trigger, 'Tooltip shifted page layout'
print('PASS: floating tooltip, viewport bounds, automatic dismissal, unchanged trigger position', flush=True)
