# Cómo cargar el contenido del sitio

Todo el contenido editable vive en `src/content/`. No hace falta tocar
componentes: los campos vacíos simplemente no se muestran.

| Qué | Archivo |
| --- | --- |
| Statement (es / en / pt) | `src/content/statement.ts` |
| Imágenes del carrusel de la home, retrato e imagen de cierre | `src/content/home.ts` |
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

1. **Carpeta «Carrusel»** — las imágenes del carrusel de la home y el retrato de
   «sobre la artista» usan obra ya publicada como reemplazo temporal. Subí los
   archivos a `public/images/carrusel/` y cambiá los `src` en
   `src/content/home.ts`.
2. **Descripciones del portfolio** (página 5 del documento) — cargar en
   `description` de cada categoría en `src/content/portfolio.ts`. Mientras estén
   vacías, la página no muestra párrafo.
3. **Fichas de obra** — los títulos y las medidas que estaban en los nombres de
   archivo ya están cargados; falta año, técnica y descripción de cada pieza en
   `src/content/artworks.ts`.
4. **Exhibiciones** — están los años y las ciudades de seis de las nueve. Faltan
   título y sede de todas, y los datos de las tres últimas (`pendiente-1` a
   `pendiente-3`). Una exhibición se publica cuando tiene año y ciudad.
5. **Tienda** — despublicada a propósito: `GIFT_PACKS` en `src/lib/constants.ts`
   está vacío y `/shop` muestra un aviso de «en preparación». Para reabrirla,
   cargá las piezas reales con su precio.
6. **Blog** — página creada y vacía, a la espera de las entradas.

## Notas

- La frase de colaboración está cargada como «I am open to **exciting**
  projects…»; el documento la trae como «exiting», que parece un error de tipeo.
  Si hay que dejarla literal, se cambia en `src/content/site.ts`.
- El alta al newsletter llega por email al correo de Alana: todavía no hay base
  de suscriptores ni proveedor de mailing conectado.
