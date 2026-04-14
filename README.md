# El Templo Digital de Alana

Portfolio digital y tienda de arte multidisciplinar de **Alana Zarzairaeta** — artista Argentina radicada en Porto.

Pintura, fluid art, ilustración, tatuajes y mucho más. Una ventana a su universo creativo.


---

## Inicio rápido

### Requisitos
- Node.js 18+ (`node --version` para verificar)
- npm (incluido con Node.js)

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000 en el navegador
```

### Variables de entorno

Crear un archivo `.env.local` en la raíz con:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
```

### Build de producción

```bash
npm run build     # Compilar para producción
npm start         # Ejecutar build localmente
npm run lint      # Linting con ESLint
npx tsc --noEmit  # Verificar tipos TypeScript
```

---

## Estructura del proyecto

```
El-templo-digital-de-Alana/
├── public/
│   └── images/
│       ├── logo/                  # Logo de Alana
│       ├── qr/                    # QR Instagram
│       └── portfolio/
│           ├── figurativo/        # Obras figurativas
│           ├── fluid-art/         # Fluid art / acrílico
│           └── acuarela/          # Acuarelas
├── src/
│   ├── app/
│   │   ├── [locale]/              # Rutas internacionalizadas (es/pt/en)
│   │   │   ├── layout.tsx         # Layout con fuentes y providers
│   │   │   ├── page.tsx           # Home page
│   │   │   ├── about/             # Sobre mí
│   │   │   ├── gift-packs/        # Tienda (obras)
│   │   │   ├── contact/           # Contacto
│   │   │   ├── portfolio/         # Portfolio completo
│   │   │   └── checkout/          # Proceso de pago
│   │   ├── api/                   # API Routes (contacto, pagos)
│   │   └── globals.css            # Estilos globales y variables CSS
│   ├── components/
│   │   ├── Header.tsx             # Header con logo y nav
│   │   ├── HeroSection.tsx        # Hero con parallax y obra de fondo
│   │   ├── PortfolioSection.tsx   # Grid masonry con obras
│   │   ├── AboutSection.tsx       # Sección sobre Alana + CV
│   │   ├── Footer.tsx             # Footer negro con QR Instagram
│   │   └── WhatsAppButton.tsx     # Botón flotante WhatsApp
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── es.json            # Español (principal)
│   │   │   ├── pt.json            # Portugués
│   │   │   └── en.json            # Inglés
│   │   ├── routing.ts             # Configuración de rutas i18n
│   │   └── request.ts             # next-intl server config
│   ├── context/
│   │   └── CartContext.tsx        # Estado global del carrito
│   └── lib/
│       ├── supabase/              # Cliente y consultas Supabase
│       ├── constants.ts           # Constantes del proyecto
│       └── utils.ts              # Funciones utilitarias
├── tailwind.config.ts             # Tailwind con tipografías y colores custom
├── tsconfig.json                  # TypeScript strict mode
└── next.config.js                 # Configuración Next.js
```

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Lenguaje | TypeScript 5 (strict mode) |
| Estilos | Tailwind CSS 3 |
| Animaciones | Framer Motion |
| i18n | next-intl (ES / PT / EN) |
| Base de datos | Supabase (PostgreSQL) |
| Pagos | Stripe + Ifthenpay (MB WAY / Multibanco) |
| Email | Resend |
| Deploy | Vercel |

---

## Diseño

### Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `alana-white` | `#FFFFFF` | Fondos principales |
| `alana-black` | `#000000` | Textos y detalles |
| `alana-grey` | `#F0EEED` | Fondos de secciones (referencia Canva) |

### Tipografías

- **`font-heading`** → `Helvetica LT Ultra Compressed` (local) — títulos y nav en caps
- **`font-sans`** → `Cormorant Garamond` (Google Fonts) — textos e itálicas editoriales

### Estética

Minimalista editorial. Blanco, negro y gris beige. Grandes formatos tipográficos.  
Inspirado directamente en el portfolio Canva de Alana.

---

## Internacionalización

El sitio está disponible en 3 idiomas accesibles desde `/es`, `/pt`, `/en`.  
Los textos se gestionan en `src/i18n/messages/`.

---

## Contacto

- **WhatsApp:** +351 968 493 165
- **Email:** zarzairaetaalana@gmail.com
- **Instagram:** [@alanazarzairaeta](https://www.instagram.com/alanazarzairaeta/)
- **YouTube:** [@alanazarzairaeta](https://www.youtube.com/@alanazarzairaeta)
- **TikTok:** [@alanazarzairaeta](https://www.tiktok.com/@alanazarzairaeta)

---

## Despliegue en Vercel

1. Importar el repositorio desde el dashboard de Vercel
2. Agregar las variables de entorno (ver sección anterior)
3. Framework detectado automáticamente como **Next.js**
4. Cada push a `main` genera un deploy automático ✨

---

© 2025 Alana Zarzairaeta — Todos los derechos reservados.
