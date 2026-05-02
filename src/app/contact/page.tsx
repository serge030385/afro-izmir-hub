import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactAside } from "@/components/ContactAside";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Afro Izmir Hub par formulaire, email, WhatsApp ou reseaux sociaux.",
};

export default function ContactPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navContact"
        titleKey="contactIntroTitle"
        descriptionKey="contactIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm />
          <ContactAside />
        </div>
      </section>
    </>
  );
}
