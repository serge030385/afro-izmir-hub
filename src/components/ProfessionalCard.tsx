"use client";

import { MapPin, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { categoryLabels, type Professional } from "@/lib/data";

export function ProfessionalCard({ professional }: { professional: Professional }) {
  const { t, tx } = useTranslation();
  const message = {
    fr: `Bonjour ${professional.name}, je viens depuis Afro Izmir Hub et je souhaite vous contacter.`,
    en: `Hello ${professional.name}, I come from Afro Izmir Hub and would like to contact you.`,
    tr: `Merhaba ${professional.name}, Afro Izmir Hub’dan geliyorum ve sizinle iletişime geçmek istiyorum.`,
  };

  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black tracking-tight text-zinc-950">{professional.name}</h3>
          <p className="mt-1 text-sm font-semibold text-emerald-800">{tx(categoryLabels[professional.category])}</p>
        </div>
        {professional.badge ? (
          <Badge variant={professional.badge === "Premium" ? "gold" : "green"}>
            <ShieldCheck className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            {professional.badge === "Premium" ? t("premium") : t("partner")}
          </Badge>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-600">{tx(professional.description)}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-700">
        <MapPin className="h-4 w-4 text-red-900" aria-hidden="true" />
        {tx(professional.city)}
      </div>
      <div className="mt-5">
        <WhatsAppLink phone={professional.whatsapp} message={message} className="w-full sm:w-auto" />
      </div>
    </article>
  );
}
