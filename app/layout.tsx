import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravasonicos - Rock Latino | El Sonido que Vibra",
  description: "Ravasonicos funde la potencia de los ritmos latinos con el alma del rock años 90. Guitarras distorsionadas y letras que golpean directo al corazón.",
  keywords: "Ravasonicos, Rock Latino, Rock años 90, banda rock, música latina, conciertos, tour",
  authors: [{ name: "Ravasonicos" }],
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
