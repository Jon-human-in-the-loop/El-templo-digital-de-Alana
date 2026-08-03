# Cómo cargar el contenido del sitio

Todo el contenido editable vive en `src/content/`. No hace falta tocar
componentes: los campos vacíos simplemente no se muestran.

| Qué | Archivo |
| --- | --- |
| Statement (es / en / pt) | `src/content/statement.ts` |
| Fotos del carrusel (`public/images/carrucel/`), retrato, fotos del CV e imagen de cierre | `src/content/home.ts` |
| Descripciones de Figurativo y Fluid Art, imágenes de portada | `src/content/portfolio.ts` |
| Fichas de obra (título, año, medidas, técnica, descripción, fotos) | `src/content/artworks.ts` |
| Exhibiciones | `src/content/exhibitions.ts` |
| Frases fijas (cita de la home, colaboraciones, CTA de consultas) | `src/content/site.ts` |
| Etiquetas de interfaz y menús | `src/i18n/messages/{es,en,pt}.json` |

Los textos por idioma son objetos `{ es, en, pt }`. Si falta una traducción se
usa el español.

## Pendiente de cargar

Estos datos están en el documento y el Canva de Alana, y todavía no están en el
repositorio:

1. **Fichas de obra** — los títulos y las medidas que estaban en los nombres de
   archivo ya están cargados; falta año, técnica y descripción de cada pieza en
   `src/content/artworks.ts`.
2. **Exhibiciones** — el documento trae siete con título, fecha, sede y ciudad;
   todavía están cargadas seis entradas con solo año y ciudad en
   `src/content/exhibitions.ts`. Una exhibición se publica cuando tiene año y
   ciudad.
3. **Tienda** — despublicada a propósito: `GIFT_PACKS` en `src/lib/constants.ts`
   está vacío y `/shop` muestra un aviso de «en preparación». Para reabrirla,
   cargá las piezas reales con su precio.
4. **Blog** — página creada y vacía, a la espera de las entradas.

## Notas

- La frase de colaboración está cargada como «I am open to **exciting**
  projects…»; el documento la trae como «exiting», que parece un error de tipeo.
  Si hay que dejarla literal, se cambia en `src/content/site.ts`.
- El alta al newsletter llega por email al correo de Alana: todavía no hay base
  de suscriptores ni proveedor de mailing conectado.
