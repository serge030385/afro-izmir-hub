import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import {
  absoluteUrl,
  localBusinessJsonLd,
  organizationJsonLd,
  PRIMARY_SEO_DESCRIPTION,
  PRIMARY_SEO_TITLE,
  restaurantJsonLd,
  SEO_KEYWORDS,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: PRIMARY_SEO_TITLE,
    template: "%s | Afro Izmir Hub",
  },
  description: PRIMARY_SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: PRIMARY_SEO_TITLE,
    description: PRIMARY_SEO_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: "Afro Izmir Hub",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Afro Izmir Hub - restaurant africain et produits africains à Izmir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PRIMARY_SEO_TITLE,
    description: PRIMARY_SEO_DESCRIPTION,
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={restaurantJsonLd} />
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
