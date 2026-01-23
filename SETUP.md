# Documento Tecnico - Setup Progetto Sito Web

## 📋 Panoramica Progetto

Questo documento descrive l'architettura tecnica e le configurazioni necessarie per creare un sito web professionale one-page con le stesse tecnologie utilizzate nel progetto Antonio Balestra.

---

## 🛠️ Stack Tecnologico

### Framework e Librerie Principali

- **Next.js 14.2.15** - Framework React con App Router
- **React 18.3.1** - Libreria UI
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4.1** - Styling utility-first
- **Framer Motion 11.11.7** - Animazioni fluide
- **React Icons 5.3.0** - Libreria icone

### Dev Dependencies

- **ESLint 8** + **eslint-config-next** - Linting
- **PostCSS 8** - CSS processing
- **Autoprefixer 10** - CSS vendor prefixes

---

## 📁 Struttura del Progetto

```
nome-progetto/
├── public/
│   └── images/
│       ├── gallery/         # Immagini galleria/servizi
│       ├── hero/           # Immagini hero section
│       └── logos/          # Loghi partner/certificazioni
├── src/
│   ├── app/
│   │   ├── globals.css     # Stili globali
│   │   ├── layout.tsx      # Layout principale
│   │   └── page.tsx        # Homepage (one-page)
│   └── components/
│       ├── Header.tsx      # Navigazione principale
│       ├── Hero.tsx        # Sezione hero
│       ├── About.tsx       # Chi siamo
│       ├── Services.tsx    # Servizi offerti
│       ├── Pathologies.tsx # (opzionale) Specializzazioni
│       ├── Method.tsx      # (opzionale) Metodologia
│       ├── Testimonials.tsx # Recensioni
│       ├── Contact.tsx     # Form contatti
│       └── Footer.tsx      # Footer con info
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Setup Iniziale

### 1. Creazione Progetto

```bash
npx create-next-app@14.2.15 nome-progetto
```

Selezionare durante l'installazione:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ❌ src/ directory (la creeremo manualmente)
- ❌ import alias (lo configureremo dopo)

### 2. Installazione Dipendenze Aggiuntive

```bash
npm install framer-motion@^11.11.7 react-icons@^5.3.0
```

---

## ⚙️ Configurazioni

### package.json

```json
{
  "name": "nome-progetto",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.11.7",
    "react-icons": "^5.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "14.2.15",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10.0.1"
  }
}
```

### next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Per deploy statico (es. Netlify, Vercel)
  images: {
    unoptimized: true,   // Necessario con output: 'export'
  },
  trailingSlash: true,   // URL con trailing slash
};

export default nextConfig;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "forceConsistentCasingInFileNames": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]  // Import alias per componenti
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personalizza i colori del brand del cliente
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',   // Colore principale
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',   // Colore secondario
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

### postcss.config.mjs

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

---

## 📄 File Base da Creare

### src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nome Cliente - Descrizione Breve",
  description: "Descrizione del servizio offerto dal cliente",
  keywords: "keyword1, keyword2, keyword3",
  authors: [{ name: "Nome Cliente" }],
  openGraph: {
    title: "Nome Cliente - Descrizione Breve",
    description: "Descrizione del servizio offerto",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### src/app/page.tsx

```tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
```

### src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

---

## 🎨 Pattern dei Componenti

Ogni componente segue questa struttura base:

```tsx
'use client';

import { motion } from 'framer-motion';
import { IconName } from 'react-icons/fa'; // o altre famiglie

export default function ComponentName() {
  return (
    <section id="nome-section" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contenuto componente */}
          <h2 className="text-4xl font-bold text-center mb-12">
            Titolo Sezione
          </h2>
          {/* ... */}
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 🎯 Componenti Standard da Implementare

### 1. Header.tsx
- Logo
- Navigazione mobile/desktop con hamburger menu
- Smooth scroll alle sezioni
- Sticky header con background al scroll

### 2. Hero.tsx
- Immagine di sfondo o video
- Titolo principale + sottotitolo
- CTA button
- Animazioni entrance con Framer Motion

### 3. About.tsx
- Presentazione del cliente/azienda
- Immagine + testo
- Animazioni fade-in al scroll

### 4. Services.tsx
- Griglia di card con servizi
- Icone da React Icons
- Hover effects
- Layout responsive (grid 1-2-3 colonne)

### 5. Testimonials.tsx
- Card recensioni con stars
- Carosello o griglia statica
- Foto + nome + testo recensione

### 6. Contact.tsx
- Form di contatto (nome, email, messaggio)
- Informazioni di contatto (tel, email, indirizzo)
- Mappa Google Maps (opzionale)
- Validazione client-side

### 7. Footer.tsx
- Links rapidi
- Social media icons
- Copyright e P.IVA
- Privacy policy e cookie policy links

---

## 🎭 Animazioni con Framer Motion

### Pattern Base

```tsx
// Fade in dal basso
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
```

---

## 🎨 Sistema di Design

### Colori
- Definire 2 palette: **primary** e **secondary**
- Usare le shade da 50 a 900 di Tailwind
- Mantenere contrasto WCAG AA

### Tipografia
- Font principale: **Inter** (Google Fonts)
- Headings: font-bold
- Body: font-normal
- Scale: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

### Spacing
- Sezioni: py-20 (mobile) / py-24 (desktop)
- Container: max-w-7xl mx-auto px-4
- Gap elementi: gap-8 / gap-12

### Responsive
- Mobile first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## 🌐 SEO e Metadata

Nel file `layout.tsx` configurare:
- **title**: Titolo SEO (50-60 caratteri)
- **description**: Meta description (150-160 caratteri)
- **keywords**: Parole chiave separate da virgola
- **openGraph**: Per social sharing
- **lang="it"**: Lingua italiana

---

## 📦 Build e Deploy

### Build Locale

```bash
npm run dev      # Development (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
```

### Deploy Statico

Il progetto è configurato con `output: 'export'` per deploy su:
- **Vercel** (consigliato)
- **Netlify**
- **GitHub Pages**
- Hosting statico qualsiasi

Dopo il build, la cartella `out/` contiene il sito statico pronto.

---

## ✅ Checklist Implementazione

### Setup Iniziale
- [ ] Creare progetto Next.js con create-next-app
- [ ] Installare framer-motion e react-icons
- [ ] Configurare tutti i file config (next, tailwind, ts)
- [ ] Creare struttura cartelle src/app e src/components
- [ ] Creare cartelle public/images/

### Componenti Base
- [ ] Header con navigazione
- [ ] Hero con CTA
- [ ] About con presentazione
- [ ] Services con grid card
- [ ] Testimonials con recensioni
- [ ] Contact con form
- [ ] Footer completo

### Contenuti
- [ ] Sostituire tutti i testi placeholder con contenuti reali
- [ ] Aggiungere immagini del cliente in public/images/
- [ ] Configurare palette colori brand nel tailwind.config
- [ ] Aggiungere metadata SEO nel layout.tsx

### Testing
- [ ] Test responsive su mobile/tablet/desktop
- [ ] Test smooth scroll navigazione
- [ ] Test form contatti
- [ ] Test animazioni Framer Motion
- [ ] Test build production

### Pre-Deploy
- [ ] Ottimizzare immagini (WebP, dimensioni corrette)
- [ ] Verificare metadata OpenGraph
- [ ] Aggiungere favicon e app icons
- [ ] Test performance Lighthouse (>90)

---

## 🔧 Troubleshooting Comuni

### Errore "Module not found @/components"
✅ Verificare `paths` in tsconfig.json

### Immagini non visualizzate in production
✅ Usare `unoptimized: true` in next.config.mjs

### Animazioni non funzionano
✅ Aggiungere `'use client'` all'inizio dei componenti con Framer Motion

### Smooth scroll non funziona
✅ Aggiungere `scroll-behavior: smooth` in globals.css

---

## 📚 Risorse Utili

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📝 Note Finali

Questo setup è ottimizzato per:
- ✅ Siti one-page professionali
- ✅ Landing pages
- ✅ Siti vetrina per professionisti/aziende
- ✅ Portfolio
- ✅ Deploy statico veloce

**Tempi stimati implementazione:**
- Setup tecnico: 1-2 ore
- Sviluppo componenti base: 4-6 ore
- Personalizzazione contenuti: 2-4 ore
- Testing e ottimizzazione: 2-3 ore

**Totale: 9-15 ore** (in base alla complessità dei contenuti)

---

*Documento creato il 23 Gennaio 2026*
*Basato sul progetto Antonio Balestra*
