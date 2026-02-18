import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ravasonicos.it'),
  title: "Ravasonicos - Rock Latino | El Sonido que Vibra",
  description: "Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. Guitarras distorsionadas y letras que golpean directo al corazón.",
  keywords: "Ravasonicos, Rock Latino, Rock años 90, banda rock, música latina, conciertos, tour, rock alternativo, rock español, rock fusión",
  authors: [{ name: "Ravasonicos" }],
  creator: "Ravasonicos",
  publisher: "Ravasonicos",
  alternates: {
    canonical: 'https://ravasonicos.it',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/rapa.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/images/rapa.webp', sizes: '64x64', type: 'image/webp' },
      { url: '/images/rapa.webp', sizes: '128x128', type: 'image/webp' },
    ],
    apple: '/images/rapa.webp',
  },
  openGraph: {
    title: "Ravasonicos - Rock Latino",
    description: "El Sonido que Vibra. Rock Latino auténtico desde el underground.",
    url: 'https://ravasonicos.it',
    type: "website",
    locale: "es_ES",
    siteName: "Ravasonicos",
    images: [
      {
        url: '/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Ravasonicos - Rock Latino',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravasonicos - Rock Latino",
    description: "El Sonido que Vibra",
    images: ['/images/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Ravasonicos",
    "url": "https://ravasonicos.it",
    "genre": ["Rock Latino", "Alternative Rock", "Rock en Español"],
    "description": "Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. Guitarras distorsionadas y letras que golpean directo al corazón.",
    "image": "https://ravasonicos.it/images/logo.webp",
    "logo": "https://ravasonicos.it/images/logo.webp",
    "foundingLocation": {
      "@type": "Place",
      "name": "España"
    },
    "sameAs": [
      "https://www.facebook.com/ravasonicos/",
      "https://www.instagram.com/ravasonicos",
    ]
  };

  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased w-full overflow-x-hidden">
        <main className="w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
