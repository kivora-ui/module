# Checkbox, Switch y RadioGroup nativos

Usa `label` para que el texto y el indicador sean un único control pulsable y accesible:

```tsx
<Checkbox label="Producto revisado" checked={reviewed} onCheckedChange={setReviewed} />
<Switch label="Avisos de poco stock" checked={alerts} onCheckedChange={setAlerts} />
<RadioGroup value={delivery} onValueChange={setDelivery}>
  <RadioGroupItem value="store" label="Recogida en farmacia" />
  <RadioGroupItem value="delivery" label="Entrega a domicilio" />
</RadioGroup>
```

La fila tiene una altura mínima de 48 y admite texto en varias líneas. `disabled` desactiva toda la fila. `accessibilityLabel` permite proporcionar un nombre estable si cambia el texto visible.

`className` personaliza el indicador, `containerClassName` la zona pulsable y `labelClassName` el texto. Sin `label`, se conserva el control compacto. `defaultChecked` permite uso no controlado.

Las transiciones de 120 ms animan la marca y el fondo del checkbox y el desplazamiento y fondo del switch. Se inician en `useLayoutEffect`, sin esperar a los efectos posteriores al pintado, y respetan la preferencia de movimiento reducido del sistema.

RadioGroupItem admite las mismas propiedades de etiqueta y estilos. El grupo usa `value`/`onValueChange` o `defaultValue` para uso no controlado. Pulsar una opción seleccionada no la desmarca; `disabled` en el grupo desactiva todas sus opciones. Evita colocar la etiqueta en un Text hermano: ese texto queda fuera del área pulsable.

En la galería, estos ejemplos mantienen el estado local para que una pulsación no vuelva a renderizar los demás ejemplos. La selección se conserva al buscar y volver a mostrar el componente. Los controles siguen cambiando al completar la pulsación, no al apoyar el dedo durante un desplazamiento.
