Google Sheet integration (Apps Script webhook)

Objetivo
- Guardar automáticamente los leads en una Google Sheet gratuita cuando el formulario se envíe.
- Proveer una URL (webhook) a la que la app cliente enviará un POST JSON.

Apps Script: código para recibir POST y añadir fila
1. Crea una nueva Google Sheet y abre `Extensions > Apps Script`.
2. Reemplaza el contenido con este script:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.telefono || '',
      data.plan || '',
      data.pantallas || '',
      data.mensaje || '',
      data.timestamp || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guardar y desplegar:
- Click en `Deploy > New deployment`.
- Tipo: `Web app`.
- Ejecutar como: `Me` (tu cuenta).
- Quién tiene acceso: `Anyone` (o `Anyone, even anonymous` si aparece).
- Deploy y copia la `Web app URL`.

4. Configura la variable en tu proyecto Vite:
- Añade en el fichero `.env` en la raíz del proyecto:

```
VITE_SHEET_WEBHOOK="https://script.google.com/macros/s/XXXXXXXX/exec"
```

- Reinicia el servidor de Vite si está en desarrollo.

5. Comportamiento en la app
- `ContactForm.tsx` enviará un POST JSON al webhook si `import.meta.env.VITE_SHEET_WEBHOOK` está definido.
- Si el webhook falla, la app continúa (no bloqueante).

Notas y seguridad
- `Anyone` de Google Apps Script permite llamadas sin autenticación; si quieres restringir, implementa una validación por token en el script y añade el token en la petición desde la app.
- Google Apps Script tiene límites de cuota; para un volumen bajo/medio funciona bien.

¿Quieres que genere el Apps Script completo en tu cuenta? Necesitaría acceso a tu Google (no lo tengo). Puedo guiarte paso a paso o generar el código e instrucciones (ya hecho arriba).