import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { PublishSidebar } from "@/components/PublishSidebar";
import { PublishAdForm } from "@/components/PublishAdForm";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Publier une annonce",
  description: "Formulaire WhatsApp pour publier rapidement une annonce sur Afro Izmir Hub.",
};

export default function PublishPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="publish"
        titleKey="publishIntroTitle"
        descriptionKey="publishIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PublishAdForm />
          <PublishSidebar />
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingPlans />
        </div>
      </section>
    </>
  );
}
