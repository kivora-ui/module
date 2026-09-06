# Oliva · Dashboard farmacéutico

Aplicación de ejemplo de `@kivora/nextjs`, con Next.js App Router, React, TypeScript y Tailwind CSS 4. Consume los exports públicos de los paquetes compilados del workspace: no utiliza alias al código fuente de Kivora.

## Arrancar

Desde la raíz del repositorio, con Node.js 20.9 o superior y pnpm 9:

```sh
pnpm install
pnpm dev:web
```

Abre http://127.0.0.1:3000. El comando compila primero `@kivora/theme` y `@kivora/nextjs`. Después de modificar la librería, vuelve a compilarla o reinicia `pnpm dev:web`.

## Páginas

| Ruta | Qué probar |
| --- | --- |
| `/` | Métricas derivadas de las ventas, gráfico de 7/30 días, favoritos, stock y exportación CSV. |
| `/tpv` | Buscar por nombre, marca o código; filtrar categorías; añadir/quitar cantidades; vaciar ticket; elegir cliente; cobro simulado con tarjeta o efectivo; cambio; recibo. |
| `/tablet` | Mostrador táctil sin barra lateral: venta, consulta y recepción de stock, últimos tickets; botones grandes y distribución horizontal/vertical. El ticket en curso se conserva al cambiar de tarea dentro de la página. |
| `/inventario` | Búsqueda, ordenación, filtros y paginación de DataTable; stock bajo y agotados; recepción de unidades. |
| `/ventas` | Historial, filtro por forma de pago, detalle del ticket en Sheet y exportación del resultado. |
| `/clientes` | Agenda, búsqueda, registro de clientes y resumen de sus compras. |
| `/ajustes` | Nombre y dirección, modo oscuro, alertas y mensaje del ticket. |
| `/componentes` | Un ejemplo montado de cada familia pública, con controles interactivos, providers y hooks. |

El dashboard utiliza la fecha de la última venta como jornada de referencia para que los datos iniciales sigan siendo útiles. Los nuevos tickets usan la fecha real. Los importes se almacenan como céntimos enteros.

## Datos de demostración

El estado compartido persiste en `localStorage`, bajo `kivora-pharmacy-v1`. El cobro registra un ticket y descuenta stock en una sola actualización. La app impide cantidades superiores a las existencias y pagos en efectivo insuficientes. Los cambios se comparten entre rutas de la misma pestaña.

Para reiniciar los datos, elimina esa clave en las herramientas del navegador y recarga. Si el almacenamiento no está disponible, los cambios se mantienen en memoria durante la sesión. No hay backend, sincronización entre pestañas, autenticación, pagos reales, facturación fiscal ni gestión de recetas. Los datos y productos son ficticios; el ejemplo permite validar la UI, no operar una farmacia real.

## Validación

```sh
# Compilación de producción con SSR y comprobación de tipos
pnpm build:web

# Instalar el navegador una vez
pnpm --filter @kivora/example-web exec playwright install chromium

# Compila y ejecuta las pruebas contra Next.js en producción, puerto 3017
pnpm test:web

# Repetir solo las pruebas sobre la última compilación
pnpm --filter @kivora/example-web test:e2e

# Suite de la librería, incluida la regresión de hidratación
pnpm --filter @kivora/nextjs test
```

Playwright comprueba las ocho rutas en Chromium de escritorio y móvil, errores de consola/hidratación, desbordamiento horizontal, navegación, cobros, stock, persistencia, clientes, tema y exportación. La cobertura del laboratorio se contrasta con todos los archivos de `packages/nextjs/src/components`: añadir una familia sin ejemplo hace fallar la prueba. Se prueban además las interacciones representativas de sus controles. Esto no equivale a probar cada combinación de props, cada navegador o todos los estados de accesibilidad.

Los informes, trazas de fallos y capturas se guardan en `playwright-report/` y `test-results/` (ignorados por Git). Para ver el informe: `pnpm --filter @kivora/example-web exec playwright show-report`.

## Estructura

- `src/app`: layouts de servidor, rutas, estilos y estados de error/carga.
- `src/components`: shell, páginas interactivas, laboratorio y provider de datos.
- `src/lib/data.ts`: contratos de dominio, semillas y formato monetario.
- `tests/pharmacy.spec.ts`: pruebas de integración con Next.js real.

Los límites `"use client"` están en las entradas interactivas del ejemplo; el layout y las rutas siguen siendo Server Components. Tailwind importa `@kivora/nextjs/styles.css` y escanea explícitamente el `dist` de la librería para generar sus utilidades.

- `tests/tablet.spec.ts`: flujos tactiles, ticket conservado entre tareas, reposicion y controles de al menos 44 px en horizontal y vertical.
