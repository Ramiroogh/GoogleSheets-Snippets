# Documentación de la implementación de un Modal para SI y NO

Esta función muestra un cuadro de diálogo de confirmación en Google Sheets que permite al usuario elegir entre dos opciones: **Sí** o **No**. Dependiendo de la respuesta del usuario, se ejecuta una acción específica. En este caso, la acción es limpiar celdas mediante un callback llamado `cleanCellsInFacturarServicio`. Este patrón puede adaptarse a cualquier lógica que se requiera después de la confirmación.

* Sirve para agregar una condicion disparadora, al aceptar se ejecuta un callback, caso contrario no ejecuta nada.

---

## Código

```javascript
function cleanAlertYesOrNo() {
    const ui = SpreadsheetApp.getUi(); // Obtener la interfaz de usuario

    // Mostrar el modal de confirmación
    // Se crea la variable y se activa el modal, porque es una VARIABLE EXPRESADA.
    const respuesta = ui.alert(
        "Confirmación",
        "¿Estás seguro de que deseas limpiar la interfaz?",
        ui.ButtonSet.YES_NO
    );

    // Si el usuario confirma, ejecuta el script de borrado
    if (respuesta == ui.Button.YES) {
        
        cleanCellsInFacturarServicio(); // Callback con la lógica de ejecutar una ACCIÓN. ej: limpiar registros
        ui.alert("Éxito", "Los datos han sido borrados exitosamente.", ui.ButtonSet.OK);
    } else {
        ui.alert("Cancelado", "La acción ha sido cancelada. Los datos no han sido borrados.", ui.ButtonSet.OK);
    }
}
```

---

## Descripción de la Función

### Propósito
Mostrar un cuadro de diálogo con opciones **Sí** o **No** para confirmar una acción. En caso de que el usuario elija **Sí**, se ejecuta una acción definida en un callback. Si elige **No**, se muestra un mensaje indicando que la acción fue cancelada.

### Parámetros
La función no recibe parámetros.

---

## Flujo de Ejecución

1. **Obtener la interfaz de usuario:**
   ```javascript
   const ui = SpreadsheetApp.getUi();
   ```
   Se accede al método `getUi` para trabajar con cuadros de diálogo en Google Sheets.

2. **Mostrar el cuadro de diálogo:**
   ```javascript
   const respuesta = ui.alert(
       "Confirmación",
       "¿Estás seguro de que deseas limpiar la interfaz?",
       ui.ButtonSet.YES_NO
   );
   ```
   - Se utiliza el método `ui.alert` para mostrar un cuadro de confirmación con los botones **Sí** y **No**.
   - La respuesta del usuario se almacena en la variable `respuesta`.

3. **Procesar la respuesta:**
   - Si el usuario elige **Sí**:
     ```javascript
     if (respuesta == ui.Button.YES) {
         cleanCellsInFacturarServicio();
         ui.alert("Éxito", "Los datos han sido borrados exitosamente.", ui.ButtonSet.OK);
     }
     ```
     - Se ejecuta la acción definida en el callback `cleanCellsInFacturarServicio`.
     - Se muestra un mensaje indicando que la acción se completó correctamente.

   - Si el usuario elige **No**:
     ```javascript
     else {
         ui.alert("Cancelado", "La acción ha sido cancelada. Los datos no han sido borrados.", ui.ButtonSet.OK);
     }
     ```
     - Se muestra un mensaje indicando que la acción fue cancelada.

---

## Ejemplo de Uso

### Caso de Uso
Limpiar celdas en una hoja de cálculo después de confirmar la acción.

### Implementación del Callback
La función `cleanCellsInFacturarServicio` debe estar previamente definida para ejecutar la acción deseada. Un ejemplo podría ser:

```javascript
function cleanCellsInFacturarServicio() {
    const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Facturar.Servicio');
    hoja.getRange('A1:Z50').clearContent(); // Limpia un rango de ejemplo
}
```

---

## Adaptación

### Ejecución de Otras Acciones
La función es altamente reutilizable. Puedes reemplazar el callback `cleanCellsInFacturarServicio` con cualquier otra acción que necesites ejecutar tras la confirmación, como:

- Enviar un correo electrónico.
- Actualizar valores en una hoja de cálculo.
- Generar reportes.

### Ejemplo Adaptado
```javascript
if (respuesta == ui.Button.YES) {
    enviarCorreoDeConfirmacion(); // Callback para enviar un correo
    ui.alert("Éxito", "El correo ha sido enviado exitosamente.", ui.ButtonSet.OK);
}
```

---

## Ventajas

1. **Flexibilidad:** Permite ejecutar cualquier lógica según la respuesta del usuario.
2. **Interfaz Intuitiva:** Utiliza la API de Google Sheets para mostrar cuadros de diálogo predefinidos.
3. **Reusabilidad:** Fácilmente adaptable a diferentes contextos y casos de uso.

---

## Consideraciones

1. **Experiencia de Usuario:**
   - Asegúrate de que los mensajes en los cuadros de diálogo sean claros y concisos.
   
2. **Manejo de Errores:**
   - Si el callback implica operaciones críticas, considera implementar validaciones adicionales para garantizar su correcta ejecución.

---

Este diseño es ideal para mantener tus scripts organizados y centrados en la interacción con el usuario. 🎯