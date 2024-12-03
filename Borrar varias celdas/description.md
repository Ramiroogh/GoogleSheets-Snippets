# Eliminar varias celdas por Iteración

Este enfoque no solo hará que el código sea más legible, sino también más fácil de mantener y modificar.
* forEach

Aquí tienes un ejemplo refactorizado:

```javascript
// Función genérica para limpiar un rango de celdas
function limpiarCeldas(hoja, rango) {
  hoja.getRange(rango).clearContent();
}

// Callback para limpiar celdas
function borrarCeldasEnEVentas() {
  const hojaEVentas = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('E.Ventas');

  // Lista de rangos a limpiar
  const rangosACleanear = [
    'A5:A32', // Celdas de Nombre de Producto
    'E33',    // Celda de Precio del Envio
    'D2',     // Celda de nombre del cliente
    'I2',     // Celda de la Fecha
    'E5:E32'  // Celdas de cantidad de productos
  ];

  // Iterar sobre los rangos y limpiarlos
  rangosACleanear.forEach(rango => limpiarCeldas(hojaEVentas, rango));
}
```

### Ventajas del enfoque:
1. **Reutilización**: La función `limpiarCeldas` puede reutilizarse en otras partes del código o en diferentes hojas.
2. **Legibilidad**: Separar la lógica genérica de la específica facilita comprender qué hace cada parte.
3. **Escalabilidad**: Si necesitas agregar más rangos, solo tienes que añadirlos a la lista `rangosACleanear`.

### Cómo funciona:
- La función `limpiarCeldas` se encarga de recibir una hoja y un rango como parámetros, limpiando su contenido.
- `rangosACleanear` es una lista que contiene todos los rangos a limpiar.
- Usamos `forEach` para iterar sobre la lista de rangos y aplicar la función `limpiarCeldas` a cada uno.