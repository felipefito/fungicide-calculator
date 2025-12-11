import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadora de Fungicidas | Fito Agrícola",
  description:
    "Simule e compare a eficiência de produtos e programas de manejo de fungicidas na soja — em segundos. Monte e compare programas com mais de 400 fungicidas.",
  keywords: [
    "fungicidas",
    "calculadora",
    "soja",
    "manejo",
    "agricultura",
    "agrícola",
    "fito",
  ],
  authors: [{ name: "José Alencar", url: "https://instagram.com/josedealencar.jr" }],
  creator: "Fito Consultoria Agrícola Ltda",
  publisher: "Fito Consultoria Agrícola Ltda",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://calculadoradefungicidas.com.br",
    title: "Calculadora de Fungicidas | Fito Agrícola",
    description:
      "Monte e compare programas de fungicidas na soja — em segundos. Mais de 400 fungicidas disponíveis.",
    siteName: "Calculadora de Fungicidas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Fungicidas | Fito Agrícola",
    description:
      "Monte e compare programas de fungicidas na soja — em segundos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
