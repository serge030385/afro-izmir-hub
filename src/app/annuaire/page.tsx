import type { Metadata } from "next";
import { DirectoryExplorer } from "@/components/DirectoryExplorer";
import { FatouShopCard } from "@/components/FatouShopCard";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Annuaire",
  description: "Annuaire de professionnels africains et partenaires a Izmir avec contact WhatsApp direct.",
};

export default function DirectoryPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navDirectory"
        titleKey="directoryIntroTitle"
        descriptionKey="directoryIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard className="mb-8" />
          <DirectoryExplorer />
        </div>
      </section>
    </>
  );
}
