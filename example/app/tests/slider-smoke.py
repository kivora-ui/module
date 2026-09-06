"""Verify slider gestures and compact value labels on a real Android screen."""
import importlib.util
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('keyboard', Path(__file__).with_name('keyboard-smoke.py'))
k = importlib.util.module_from_spec(spec)
spec.loader.exec_module(k)
k.ui.adb('shell', 'am', 'force-stop', k.ui.PACKAGE)
k.ui.adb('shell', 'am', 'start', '-n', k.ui.PACKAGE + '/.MainActivity')
time.sleep(3)
k.gallery('Slider')


def point(fraction):
    x1, y1, x2, y2 = k.bounds(k.find('Progreso de ejemplo', scroll=True))
    inset = 10 * k.density
    return str(round(x1 + inset + (x2-x1-2*inset)*fraction)), str(round(y2-24*k.density))


def check(value):
    label = k.find(f'{value} %')
    x1, y1, x2, y2 = k.bounds(label)
    sx1, _, sx2, _ = k.bounds(k.find('Progreso de ejemplo'))
    assert y2-y1 <= 40*k.density, 'Value label is stretched vertically'
    assert sx1-1 <= x1 < x2 <= sx2+1, 'Value label extends outside the slider'
    center = sx1 + 10*k.density + (sx2-sx1-20*k.density)*value/100
    expected_left = max(sx1, min(sx2-(x2-x1), center-(x2-x1)/2))
    assert abs(x1-expected_left) <= 3*k.density, 'Value label does not follow its thumb'
    print('PASS slider:', value, 'label bounds:', (x1, y1, x2, y2), flush=True)


for value in [80, 20]:
    k.ui.adb('shell', 'input', 'tap', *point(value/100))
    check(value)
k.ui.adb('shell', 'input', 'swipe', *point(.2), *point(.9), '700')
check(90)
for value in [0, 100]:
    k.ui.adb('shell', 'input', 'tap', *point(value/100))
    check(value)
k.tap('Reiniciar progreso')
check(0)
k.screenshot('slider')
print('PASS: drag, tap, extremes, reset and label geometry', flush=True)
