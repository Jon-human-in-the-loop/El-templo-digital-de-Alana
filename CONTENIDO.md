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
| Descripción fija del blog | `src/content/blog.ts` |
| Portada de la Galería | `src/content/gallery.ts` |
| Mail de contacto, redes y frases fijas | `src/content/site.ts` |
| Etiquetas de interfaz y menús | `src/i18n/messages/{es,en,pt}.json` |

Los textos por idioma son objetos `{ es, en, pt }`. Si falta una traducción se
usa el español.

## Pendiente de cargar

Estos datos están en el documento y el Canva de Alana, y todavía no están en el
repositorio:

1. **Fichas de obra** — los títulos y las medidas que estaban en los nombres de
   archivo ya están cargados; falta año, técnica, descripción del simbolismo y
   acotaciones de cada pieza en `src/content/artworks.ts`. También faltan los
   nombres, dimensiones y orden que están en el Canva, y las obras nuevas sin
   fotografiar.
2. **Subcategorías** — el machete pide Galería → Originales / Acuarelas / Merch
   y Portfolio → Figurativo / Fluid Art / Acuarelas / Murales. Falta definirlas
   y, para acuarelas y murales, hacen falta fotos: hay una sola acuarela y
   ningún mural.
3. **Dominio** — cuando esté, cambiar `CONTACT_EMAIL` en `src/content/site.ts`
   por el mail asociado al dominio.
4. **Tienda** — despublicada a propósito: `GIFT_PACKS` en `src/lib/constants.ts`
   está vacío y `/shop` muestra un aviso de «en preparación». Para reabrirla,
   cargá las piezas reales con su precio.
5. **Blog** — la descripción fija ya está cargada; faltan las entradas.

## Notas

- La frase de colaboración está cargada como «I am open to **exciting**
  projects…»; el documento la trae como «exiting», que parece un error de tipeo.
  Si hay que dejarla literal, se cambia en `src/content/site.ts`.
- El alta al newsletter llega por email al correo de Alana: todavía no hay base
  de suscriptores ni proveedor de mailing conectado.
