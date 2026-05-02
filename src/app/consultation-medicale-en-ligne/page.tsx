import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MedicalConsultationPageContent } from "@/components/MedicalConsultationPageContent";
import { SITE_CONFIG } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Consultation médicale en ligne à Izmir | Médecin agréé | Afro Izmir Hub",
  description:
    "Réservez une consultation médicale en ligne avec un médecin agréé depuis Izmir ou ailleurs en Turquie. Service disponible en français, anglais ou turc selon disponibilité.",
  keywords: [
    "consultation médicale en ligne Izmir",
    "médecin en ligne Turquie",
    "médecin francophone Izmir",
    "consultation santé Turquie",
    "médecin agréé Turquie",
    "Afro Izmir Hub médical",
  ],
  alternates: {
    canonical: "/consultation-medicale-en-ligne",
  },
  openGraph: {
    title: "Consultation médicale en ligne à Izmir | Médecin agréé | Afro Izmir Hub",
    description:
      "Réservez une consultation médicale en ligne avec un médecin agréé depuis Izmir ou ailleurs en Turquie. Service disponible en français, anglais ou turc selon disponibilité.",
    url: absoluteUrl("/consultation-medicale-en-ligne"),
    siteName: "Afro Izmir Hub",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultation médicale en ligne à Izmir | Médecin agréé | Afro Izmir Hub",
    description:
      "Réservez une consultation médicale en ligne avec un médecin agréé depuis Izmir ou ailleurs en Turquie. Service disponible en français, anglais ou turc selon disponibilité.",
  },
};

export default function OnlineMedicalConsultationPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Consultation médicale en ligne",
        item: absoluteUrl("/consultation-medicale-en-ligne"),
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Consultation médicale en ligne - Afro Izmir Hub",
    url: absoluteUrl("/consultation-medicale-en-ligne"),
    telephone: SITE_CONFIG.whatsappNumber,
    areaServed: "Izmir, Turquie",
    medicalSpecialty: "PrimaryCare",
    availableLanguage: ["French", "English", "Turkish"],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <MedicalConsultationPageContent />
    </>
  );
}
