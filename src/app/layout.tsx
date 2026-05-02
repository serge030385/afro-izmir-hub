import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Afro Izmir Hub | Services africains a Izmir",
    template: "%s | Afro Izmir Hub",
  },
  description:
    "Plateforme francophone pour trouver services, annonces, professionnels, bons plans et partenaires africains a Izmir et en Turquie.",
  keywords: [
    "Afro Izmir Hub",
    "FatouShop",
    "boutique africaine Izmir",
    "produits africains Izmir",
    "restaurant camerounais Izmir",
    "cuisine camerounaise Izmir",
    "nourriture africaine Turquie",
    "plats camerounais Izmir",
    "Africains Izmir",
    "services africains Turquie",
    "annonces Izmir",
    "restaurants africains",
  ],
  metadataBase: new URL("https://afroizmirhub.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Afro Izmir Hub",
    description: "Tout pour la communaute africaine a Izmir : services, annonces, partenaires et bons plans.",
    type: "website",
    locale: "fr_FR",
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
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
