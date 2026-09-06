"""Check real Android IME visibility in the release APK without changing pharmacy data.

Run with an unlocked device showing Farmacia Oliva. ANDROID_SERIAL selects a device.
The keyboard must be enabled (including on an emulator with a hardware keyboard).
"""
import importlib.util
import re
import sys
import time
from pathlib import Path

spec = importlib.util.spec_from_file_location('smoke', Path(__file__).with_name('android-smoke.py'))
ui = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ui)
output = Path(__file__).resolve().parent.parent / 'build' / 'keyboard-checks'
output.mkdir(exist_ok=True)
width, height = map(int, re.findall(r'(\d+)x(\d+)', ui.adb('shell', 'wm', 'size').decode())[-1])
density = int(re.findall(r'\d+', ui.adb('shell', 'wm', 'density').decode())[-1]) / 160


def bounds(node):
    return tuple(map(int, re.findall(r'-?\d+', node.get('bounds', ''))))


def foreground():
    focus = ui.adb('shell', 'dumpsys', 'window').decode(errors='replace')
    current = re.search(r'mCurrentFocus=.*', focus)
    assert current and ui.PACKAGE in current.group(), 'Keep Farmacia Oliva open during the test'


def find(label, scroll=False):
    for _ in range(12 if scroll else 3):
        foreground()
        app_nodes = [n for n in ui.nodes() if n.get('package') == ui.PACKAGE]
        labelled = [n for n in app_nodes if n.get('content-desc') == label]
        for node in labelled or app_nodes:
            x1, y1, x2, y2 = bounds(node)
            if label in (node.get('text'), node.get('content-desc')) and x2 > x1 and y2-y1 >= 20:
                return node
        if scroll:
            ui.adb('shell', 'input', 'swipe', str(width//2), str(int(height*.73)),
                   str(width//2), str(int(height*.53)), '800')
        time.sleep(.5)
    raise AssertionError('Visible control missing: ' + label)


def tap(label, scroll=False):
    x1, y1, x2, y2 = bounds(find(label, scroll))
    ui.adb('shell', 'input', 'tap', str((x1+x2)//2), str((y1+y2)//2))
    time.sleep(.8)
    print('Tap:', label, flush=True)


def hide_keyboard():
    state = ui.adb('shell', 'dumpsys', 'input_method').decode(errors='replace')
    if 'mInputShown=true' in state:
        ui.adb('shell', 'input', 'keyevent', '4')
        time.sleep(.8)


def screenshot(name):
    foreground()
    (output / f'{name}.png').write_bytes(ui.adb('exec-out', 'screencap', '-p'))


def check_input(label, name):
    tap(label, scroll=True)
    time.sleep(1)
    state = ui.adb('shell', 'dumpsys', 'input_method').decode(errors='replace')
    assert 'mInputShown=true' in state, 'Software keyboard did not open'
    nodes = ui.nodes()
    focused = next(n for n in nodes if n.get('package') == ui.PACKAGE
                   and n.get('focused') == 'true' and n.get('content-desc') == label)
    assert focused.get('content-desc') == label, 'Unexpected focused input'
    # Use the IME accessibility window, not keyboard height assumptions for one phone.
    ime = [bounds(n)[1] for n in nodes if 'inputmethod' in n.get('package', '')
           and bounds(n)[3] > bounds(n)[1]]
    if ime:
        top = min(ime)
    else:
        # Some devices omit the IME from uiautomator; window insets still expose it.
        windows = ui.adb('shell', 'dumpsys', 'window').decode(errors='replace')
        frames = re.findall(r'type=ime frame=\[\d+,(\d+)\]\[\d+,\d+\][^\n]*visible=true', windows)
        assert frames, 'Visible keyboard frame unavailable'
        top = min(map(int, frames))
    _, y1, _, y2 = bounds(focused)
    screenshot(name)
    assert y2-y1 >= 32*density, f'{label}: field is clipped ({y2-y1}px)'
    assert y2 <= top-4, f'{label}: bottom={y2}, keyboard top={top}'
    print(f'PASS {label}: bottom={y2}, keyboard top={top}', flush=True)


def gallery(query):
    hide_keyboard()
    tap('Ajustes')
    tap('Ver componentes', scroll=True)
    tap('Buscar componentes')
    if query:
        ui.adb('shell', 'input', 'text', query)
        time.sleep(.8)
    hide_keyboard()


def main():
    ui.adb('shell', 'am', 'force-stop', ui.PACKAGE)
    ui.adb('shell', 'am', 'start', '-n', ui.PACKAGE + '/.MainActivity')
    time.sleep(3)
    cases = sys.argv[1:] or ['input', 'textarea', 'settings', 'date', 'sheet']
    for case in cases:
        if case == 'input':
            gallery('')
            check_input('Nombre de ejemplo', 'gallery-input')
        elif case == 'textarea':
            gallery('Textarea')
            check_input('Notas de ejemplo', 'gallery-textarea')
        elif case == 'settings':
            hide_keyboard()
            tap('Ajustes')
            check_input('Mensaje del ticket', 'settings-input')
        elif case == 'date':
            gallery('DatePicker')
            tap('Fecha de recepción', scroll=True)
            check_input('Horas', 'date-hours')
            check_input('Minutos', 'date-minutes')
            hide_keyboard()
            tap('Cancelar', scroll=True)
        elif case == 'sheet':
            gallery('BottomSheet')
            tap('Abrir panel inferior', scroll=True)
            check_input('Nota del panel', 'sheet-input')
            hide_keyboard()
            tap('Cerrar panel inferior', scroll=True)
        else:
            raise ValueError(case)
    hide_keyboard()
    print('PASS: real keyboard visibility checks', flush=True)


if __name__ == '__main__':
    main()
