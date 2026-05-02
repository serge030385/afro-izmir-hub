"use client";

import { CalendarCheck, Store } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { categoryLabels, type Deal } from "@/lib/data";

export function DealCard({ deal }: { deal: Deal }) {
  const { t, tx } = useTranslation();
  const message = {
    fr: `Bonjour, je viens depuis Afro Izmir Hub pour profiter du bon plan : ${tx(deal.title)}.`,
    en: `Hello, I come from Afro Izmir Hub for the deal: ${tx(deal.title)}.`,
    tr: `Merhaba, Afro Izmir Hub üzerinden şu fırsat için geliyorum: ${tx(deal.title)}.`,
  };

  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <Badge variant="gold">{tx(deal.value)}</Badge>
        <Badge variant="green">{tx(categoryLabels[deal.category])}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-black tracking-tight text-zinc-950">{tx(deal.title)}</h3>
      <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
        <Store className="h-4 w-4" aria-hidden="true" />
        {deal.partner}
      </p>
      <p className="mt-4 text-sm leading-6 text-zinc-600">{tx(deal.description)}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700">
        <CalendarCheck className="h-4 w-4 text-red-900" aria-hidden="true" />
        {t("valid")} : {tx(deal.validUntil)}
      </p>
      <div className="mt-5">
        <WhatsAppLink phone={deal.whatsapp} message={message} className="w-full sm:w-auto" />
      </div>
    </article>
  );
}
