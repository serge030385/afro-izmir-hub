"use client";

import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";

export function PublishSidebar() {
  const { t } = useTranslation();

  return (
    <aside className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
      <Badge variant="gold">{t("featuredPlacement")}</Badge>
      <h2 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{t("publishHighlightTitle")}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{t("publishHighlightDescription")}</p>
      <div className="mt-6 grid gap-3 text-sm font-semibold text-zinc-700">
        <span>{t("urgentBadgeBenefit")}</span>
        <span>{t("sponsoredBadgeBenefit")}</span>
        <span>{t("whatsappDirectBenefit")}</span>
      </div>
    </aside>
  );
}
