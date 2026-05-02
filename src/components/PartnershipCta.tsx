"use client";

import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE_CONFIG } from "@/lib/data";

export function PartnershipCta() {
  const { t } = useTranslation();
  const message = {
    fr: "Bonjour Afro Izmir Hub, je souhaite discuter d'un partenariat.",
    en: "Hello Afro Izmir Hub, I would like to discuss a partnership.",
    tr: "Merhaba Afro Izmir Hub, partnerlik hakkında görüşmek istiyorum.",
  };

  return (
    <section className="bg-[#0b0b08] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight">{t("readyPartner")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            {t("partnerCtaDescription")} Contact : {SITE_CONFIG.whatsappDisplay}.
          </p>
        </div>
        <WhatsAppLink variant="light" message={message} className="shrink-0">
          {t("discussWhatsApp")}
        </WhatsAppLink>
      </div>
    </section>
  );
}
