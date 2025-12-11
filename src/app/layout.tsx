import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://calculadoradefungicidas.com.br";
const siteName = "Calculadora de Fungicidas";
const siteTitle = "Calculadora de Fungicidas | Compare +400 Fungicidas na Soja";
const siteDescription = "Simule e compare a eficiência de produtos e programas de manejo de fungicidas na soja — em segundos. Monte programas com mais de 400 fungicidas cadastrados. R$ 197,00";

const GTM_ID = "GTM-T823C64K";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "calculadora de fungicidas",
    "fungicidas soja",
    "manejo de fungicidas",
    "programa de fungicidas",
    "eficiência fungicidas",
    "ferrugem asiática",
    "cercospora",
    "mancha alvo",
    "antracnose soja",
    "mofo branco",
    "oídio soja",
    "consultoria agrícola",
    "agricultura de precisão",
    "proteção de lavouras",
    "agrônomo",
    "produtor rural",
    "safra soja",
  ],
  authors: [{ name: "José Alencar", url: "https://instagram.com/josedealencar.jr" }],
  creator: "Fito Consultoria Agrícola Ltda",
  publisher: "Fito Consultoria Agrícola Ltda",

  // Open Graph - WhatsApp, Facebook, Meta Ads
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calculadora de Fungicidas - Compare +400 fungicidas na soja",
        type: "image/png",
      },
    ],
  },

  // Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@josedealencar",
  },

  // Robots e indexação
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificação de propriedade (adicione seus IDs quando tiver)
  verification: {
    // google: "seu-google-site-verification",
    // facebook: "seu-facebook-domain-verification",
  },

  // Ícones
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Categoria do site
  category: "agriculture",

  // Alternates para SEO
  alternates: {
    canonical: siteUrl,
  },

  // Informações adicionais para Ads
  other: {
    "fb:app_id": "", // Adicione seu Facebook App ID se tiver
    "og:price:amount": "197.00",
    "og:price:currency": "BRL",
    "product:price:amount": "197.00",
    "product:price:currency": "BRL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
