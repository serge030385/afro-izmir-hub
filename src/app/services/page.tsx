import type { Metadata } from "next";
import { FatouShopCard } from "@/components/FatouShopCard";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { ServicesExplorer } from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services",
  description: "Categories de services utiles pour Africains a Izmir : restaurants, logement, etudiants, visa, transport, jobs et plus.",
};

export default function ServicesPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navServices"
        titleKey="servicesIntroTitle"
        descriptionKey="servicesIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard className="mb-8" />
          <ServicesExplorer />
        </div>
      </section>
    </>
  );
}
