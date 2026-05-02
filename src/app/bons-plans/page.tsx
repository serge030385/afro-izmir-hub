import type { Metadata } from "next";
import { DealCard } from "@/components/DealCard";
import { FatouShopCard } from "@/components/FatouShopCard";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { deals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bons plans",
  description: "Reductions, offres partenaires et promotions locales pour la communaute africaine a Izmir.",
};

export default function DealsPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navDeals"
        titleKey="dealsIntroTitle"
        descriptionKey="dealsIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard className="mb-8" />
          <div className="grid gap-5 lg:grid-cols-3">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
