import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { PartnershipCta } from "@/components/PartnershipCta";
import { PartnershipHighlights } from "@/components/PartnershipHighlights";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Partenariat",
  description: "Offres partenaires Basic, Premium et Sponsorise pour gagner en visibilite sur Afro Izmir Hub.",
};

export default function PartnershipPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navPartnership"
        titleKey="partnershipIntroTitle"
        descriptionKey="partnershipIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingPlans />
        </div>
      </section>
      <PartnershipHighlights />
      <PartnershipCta />
    </>
  );
}
