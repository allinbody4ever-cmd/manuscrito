# Manuscrito — v1.0.0

Copia de la primera versión compartida en ChatGPT Sites, sin las mejoras posteriores solicitadas de escritura y fondos.

## Ejecutar en tu computadora

Instala Python 3, abre una terminal en la carpeta descomprimida y ejecuta:

```bash
python -m http.server 8000 --directory dist
```

Abre http://localhost:8000 en el navegador. No abras index.html directamente: la importación de PDF utiliza módulos y un worker.

## Publicar

Sube README.md y la carpeta dist completa a tu repositorio público. Para un alojamiento estático utiliza dist como directorio público; no requiere compilación ni claves de API. Para GitHub Pages publica el contenido de dist en la raíz de la rama elegida para Pages.

## Funciones

- Importación de PDF con texto seleccionable y TXT.
- Caveat, Kalam y Patrick Hand; importación de fuente propia.
- Papel blanco, rayado, cuadriculado y punteado; tonos de papel.
- Tamaño A4 y Carta, tinta, tamaño y variación de escritura.
- Fondo de escritorio o solo papel.
- PNG por hoja y PDF completo; guardar y abrir proyecto JSON.

El procesamiento ocurre en el navegador. PDF escaneado requiere OCR externo. Tablas, fórmulas e imágenes no conservan su composición original; revisar el texto importado. Importación PDF/TXT: 30 MB; texto importado: 150 000 caracteres.

## Dependencias y licencias

PDF.js de Mozilla (Apache-2.0) y las fuentes Caveat, Kalam y Patrick Hand (SIL Open Font License 1.1) se distribuyen junto con la aplicación. Sus textos de licencia y avisos de copyright están incluidos en `LICENSES/`.

Esta entrega conserva los archivos de la versión disponible, sin credenciales, historial Git ni configuración privada de ChatGPT Sites. No se ha completado una comprobación visual en PC y celular.
