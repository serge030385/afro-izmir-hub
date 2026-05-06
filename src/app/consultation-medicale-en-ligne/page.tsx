import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MedicalConsultationPageContent } from "@/components/MedicalConsultationPageContent";
import { SITE_CONFIG } from "@/lib/data";
import { medicalContent } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: medicalContent.seoTitle.fr,
  description: medicalContent.seoDescription.fr,
  keywords: medicalContent.seoKeywords.map((keyword) => keyword.fr),
  alternates: {
    canonical: "/consultation-medicale-en-ligne",
  },
  openGraph: {
    title: medicalContent.seoTitle.fr,
    description: medicalContent.seoDescription.fr,
    url: absoluteUrl("/consultation-medicale-en-ligne"),
    siteName: "Afro Izmir Hub",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: medicalContent.seoTitle.fr,
    description: medicalContent.seoDescription.fr,
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
        name: medicalContent.title.fr,
        item: absoluteUrl("/consultation-medicale-en-ligne"),
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: medicalContent.jsonLdServiceName.fr,
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
