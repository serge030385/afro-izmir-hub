"use client";

import { BadgeCheck, Handshake, Megaphone } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

export function PartnershipHighlights() {
  const { t } = useTranslation();
  const items = [
    {
      icon: BadgeCheck,
      title: t("visibleBadge"),
      text: t("visibleBadgeDescription"),
    },
    {
      icon: Megaphone,
      title: t("featuredPlacement"),
      text: t("featuredPlacementDescription"),
    },
    {
      icon: Handshake,
      title: t("directWhatsappLead"),
      text: t("directWhatsappLeadDescription"),
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <item.icon className="h-7 w-7 text-emerald-800" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black tracking-tight text-zinc-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
