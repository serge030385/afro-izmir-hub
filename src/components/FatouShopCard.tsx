"use client";

import { ExternalLink, MessageCircle, ShoppingBag, Store, Utensils } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { FATOUSHOP_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

type FatouShopCardProps = {
  className?: string;
  compact?: boolean;
};

export function FatouShopCard({ className, compact = false }: FatouShopCardProps) {
  const { t, tx } = useTranslation();

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-black/10 bg-[#0b0b08] text-white shadow-sm",
        compact ? "p-5" : "p-5 sm:p-7",
        className,
      )}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold">{t("fatouShopRecommended")}</Badge>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-black text-emerald-100">
              <Store className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
              Izmir
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-amber-300 text-zinc-950">
              <ShoppingBag className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className={cn("font-black tracking-tight", compact ? "text-2xl" : "text-3xl")}>
                {FATOUSHOP_CONFIG.name}
              </h2>
              <p className="mt-1 flex items-start gap-2 text-sm font-bold leading-5 text-emerald-200">
                <Utensils className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {tx(FATOUSHOP_CONFIG.shortDescription)}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-200 sm:text-base">
            {tx(FATOUSHOP_CONFIG.description)}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-64 lg:grid-cols-1">
          <a
            href={FATOUSHOP_CONFIG.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
            aria-label={t("openFatouShop")}
          >
            {t("orderOnFatouShop")}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={FATOUSHOP_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-emerald-50"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("orderViaWhatsApp")}
          </a>
        </div>
      </div>
    </article>
  );
}
