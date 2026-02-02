import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravasonicos - Rock Latino | El Sonido que Vibra",
  description: "Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. Guitarras distorsionadas y letras que golpean directo al corazón.",
  keywords: "Ravasonicos, Rock Latino, Rock años 90, banda rock, música latina, conciertos, tour",
  authors: [{ name: "Ravasonicos" }],
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
    type: "website",
    locale: "es_ES",
    siteName: "Ravasonicos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravasonicos - Rock Latino",
    description: "El Sonido que Vibra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-sans antialiased w-full overflow-x-hidden">
        <main className="w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
