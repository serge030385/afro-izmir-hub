"use client";

import { Check, Crown, Handshake, Megaphone } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pricingPlans, SITE_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = {
  Basic: Handshake,
  Premium: Crown,
  Sponsorise: Megaphone,
};

export function PricingPlans() {
  const { t, tx } = useTranslation();

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {pricingPlans.map((plan) => {
        const Icon = icons[plan.name];
        const message = {
          fr: `Bonjour ${SITE_CONFIG.name}, je souhaite devenir partenaire avec l'offre ${tx(plan.label)}.`,
          en: `Hello ${SITE_CONFIG.name}, I would like to become a partner with the ${tx(plan.label)} offer.`,
          tr: `Merhaba ${SITE_CONFIG.name}, ${tx(plan.label)} teklifiyle partner olmak istiyorum.`,
        };

        return (
          <article
            key={plan.name}
            className={cn(
              "rounded-lg border p-6 shadow-sm",
              plan.highlighted
                ? "border-amber-500 bg-[#0b0b08] text-white shadow-xl"
                : "border-black/10 bg-white text-zinc-950",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={cn("grid h-12 w-12 place-items-center rounded-lg", plan.highlighted ? "bg-amber-300 text-zinc-950" : "bg-emerald-50 text-emerald-800")}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              {plan.highlighted ? <Badge variant="gold">{t("recommended")}</Badge> : null}
            </div>
            <h3 className="mt-5 text-2xl font-black">{tx(plan.label)}</h3>
            <p className={cn("mt-2 text-sm leading-6", plan.highlighted ? "text-zinc-300" : "text-zinc-600")}>
              {tx(plan.description)}
            </p>
            <p className="mt-6 text-3xl font-black tracking-tight">{tx(plan.price)}</p>
            <div className="mt-6 grid gap-3">
              {plan.features.map((feature) => (
                <span
                  key={tx(feature)}
                  className={cn("inline-flex items-center gap-2 text-sm font-semibold", plan.highlighted ? "text-zinc-100" : "text-zinc-700")}
                >
                  <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {tx(feature)}
                </span>
              ))}
            </div>
            <WhatsAppLink
              message={message}
              variant={plan.highlighted ? "light" : "primary"}
              className="mt-7 w-full"
            >
              {t("becomePartner")}
            </WhatsAppLink>
          </article>
        );
      })}
    </div>
  );
}
