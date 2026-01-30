import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ravasonicos - Rock Latino | El Sonido que Vibra",
  description: "Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. Guitarras distorsionadas y letras que golpean directo al corazón.",
  keywords: "Ravasonicos, Rock Latino, Rock años 90, banda rock, música latina, conciertos, tour",
  authors: [{ name: "Ravasonicos" }],
  icons: {
    icon: [
      { url: '/rapa.png', sizes: '32x32', type: 'image/png' },
      { url: '/rapa.png', sizes: '64x64', type: 'image/png' },
      { url: '/rapa.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: '/rapa.png',
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
    <html lang="es">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
