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