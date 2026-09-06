# Carrusel nativo

El carrusel utiliza `react-native-reanimated-carousel` 4.0.3 con Reanimated y Gesture Handler. Mantiene la composición `Carousel`, `CarouselContent`, `CarouselItem` y los cuatro controles de web. Las tarjetas del ejemplo muestran productos, precios de demostración y existencias.

```tsx
<Carousel settings={{ infinite: true, dots: true, speed: 300, autoplaySpeed: 3000 }}>
  <CarouselContent height={280}>
    {products.map(product => <CarouselItem key={product.id}>{/* tarjeta */}</CarouselItem>)}
  </CarouselContent>
  <CarouselControls>
    <CarouselPrevious />
    <CarouselNext />
    <CarouselPlay />
    <CarouselPause />
  </CarouselControls>
</Carousel>
```

## Funciones compartidas

- Deslizamiento táctil, anterior/siguiente y puntos pulsables.
- `infinite`, incluidos los gestos al pasar del último elemento al primero.
- `autoplay`, `autoplaySpeed`, reproducción y pausa. Se suspende al pasar la app a segundo plano o activar reducir movimiento.
- `dots`, `arrows`, `initialSlide`, `speed`, `slidesToShow`, `slidesToScroll` para controles y reproducción.
- `orientation="vertical"` o `settings.vertical`; altura explícita en CarouselContent.
- `swipe`, `draggable`, `touchMove`, `afterChange` y `onIndexChange`.
- `opts` como alias de configuración; `settings` tiene prioridad. `responsive` aplica la configuración del menor breakpoint que contenga el ancho de pantalla.
- API estable por `setApi`: `slickNext`, `slickPrev`, `slickGoTo`, `slickPlay`, `slickPause`, además de los métodos nativos anteriores `scrollNext`, `scrollPrev`, `scrollTo` y `selectedScrollSnap`.

La selección se notifica al terminar el movimiento. Las diapositivas no visibles se ocultan de accesibilidad. El recorrido finito limita el desplazamiento para no dejar espacios vacíos al mostrar varias tarjetas. Las transiciones se ejecutan mediante Reanimated; no se actualiza React en cada fotograma.

## Diferencias de plataforma

Se comparten las funciones anteriores, no toda la API de react-slick: propiedades DOM/CSS, hover, sincronización `asNavFor`, filas de Slick, `centerMode`, `fade`, `adaptiveHeight`, `beforeChange` y renderizadores específicos de Slick no están expuestos. El tamaño nativo se define mediante `CarouselContent.height` y el ancho disponible; ajusta la altura si el contenido o la escala de texto necesitan más espacio.

En Android: **Ajustes → Ver componentes → Carousel**. El selector permite probar una tarjeta, dos tarjetas y orientación vertical. «Repetir en bucle» permite contrastar límites finitos e infinitos.

Prueba: `python -X utf8 example/app/tests/carousel-smoke.py`.
