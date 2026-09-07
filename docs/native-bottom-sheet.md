# BottomSheet en React Native

## Teclado en Android

Instala también `react-native-keyboard-controller` (1.22 o posterior compatible) y recompila la aplicación. El panel integra su propio `KeyboardProvider` dentro del modal y combina el desplazamiento de Gorhom con `KeyboardAwareScrollView`. Tanto `BottomSheetInput` como los inputs normales se desplazan al recibir foco, incluso al final de un calendario o formulario largo. Al abrir el panel se oculta el teclado de la pantalla anterior.

En las pantallas normales, envuelve la aplicación en `KeyboardProvider` y usa `KeyboardScrollView` de `@kivora/native` (basado en `KeyboardAwareScrollView`, con espacio para el borde inferior del campo multil?nea). Para FlashList, pásalo mediante `renderScrollComponent` con un componente estable que reenvíe el ref. No combines este desplazamiento con otro `KeyboardAvoidingView` sobre la misma lista.

La integración sigue la [guía de Keyboard Controller para Gorhom y FlashList](https://kirillzyusko.github.io/react-native-keyboard-controller/docs/api/components/keyboard-aware-scroll-view).

`@kivora/native` utiliza [Gorhom Bottom Sheet v5](https://gorhom.dev/react-native-bottom-sheet/) para los paneles inferiores. `Select` utiliza este panel en pantallas de menos de 768 unidades.

La aplicación debe instalar `react-native-gesture-handler` 2.30 o posterior de la rama 2, `react-native-reanimated` y `react-native-safe-area-context`, configurar Reanimated y envolver su raíz en `GestureHandlerRootView`, `SafeAreaProvider` y `KivoraProvider`. Hay que recompilar Android después de instalar las dependencias nativas. `example/app` ya incluye esta configuración.

```tsx
const [open, setOpen] = React.useState(false);
const [note, setNote] = React.useState("");

<BottomSheet open={open} onOpenChange={setOpen}>
  <Text>Nota de reposición</Text>
  <BottomSheetInput value={note} onChangeText={setNote} />
  <Button onPress={() => setOpen(false)}>
    <Text>Cerrar</Text>
  </Button>
</BottomSheet>
```

Mantén el componente montado y controla su visibilidad con `open` para permitir la animación de cierre. El contenido ajusta su altura hasta el 80 % de la pantalla y permite desplazamiento cuando lo supera. Utiliza `BottomSheetInput` para coordinar el teclado con el panel.

El panel se cierra deslizando hacia abajo, pulsando el fondo, con Atrás de Android o cambiando `open`. Gorhom respeta la preferencia del sistema de reducir movimiento. El anfitrión `Modal` conserva los contextos del tema y gestiona Atrás; no requiere `BottomSheetModalProvider`. Los diálogos centrados mantienen su presentación.

En la app: **Ajustes → Ver componentes → BottomSheet**. El ejemplo permite comprobar contenido largo, teclado y cierre sin modificar los datos de la farmacia.

La apertura monta el modal en la misma actualización que `open`, sin esperar a un efecto posterior. La entrada dura 320 ms y la salida 380 ms por defecto, con una curva `Easing.out(Easing.cubic)` que desacelera progresivamente, y conserva la preferencia de reducir movimiento. Al cerrar, el contenido permanece montado hasta terminar la animación. En la galería, el estado del ejemplo está aislado para que abrir el panel o escribir una nota no vuelva a renderizar el resto de ejemplos.

## Ajustar la animación

`animationDuration` controla la entrada y `closingAnimationDuration` la salida en milisegundos (mínimo 1). Por defecto, el cierre dura 60 ms más que la entrada. `animationEasing` controla la curva de ambas transiciones. La configuración de cierre también se usa con el fondo, Atrás de Android y el movimiento final tras soltar un gesto una vez abierto. El arrastre sigue el dedo del usuario.

```tsx
import { Easing } from 'react-native-reanimated';

<BottomSheet
  open={open}
  onOpenChange={setOpen}
  animationDuration={420}
  closingAnimationDuration={480}
  animationEasing={Easing.inOut(Easing.cubic)}
>
  {children}
</BottomSheet>
```

Mantén `<BottomSheet>` en el árbol durante el cierre; desmontarlo con `{open && ...}` impide completar la animación de salida.
