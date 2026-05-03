"use client";

import { Camera, Mail, MapPin, Music2, Phone, Users } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE_CONFIG } from "@/lib/data";

export function ContactAside() {
  const { t, tx } = useTranslation();
  const message = {
    fr: "Bonjour Afro Izmir Hub, je souhaite vous contacter.",
    en: "Hello Afro Izmir Hub, I would like to contact you.",
    tr: "Merhaba Afro Izmir Hub, sizinle iletişime geçmek istiyorum.",
  };

  return (
    <aside className="grid gap-5">
      <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("quickContact")}</h2>
        <div className="mt-5 grid gap-4 text-sm font-semibold text-zinc-700">
          <a className="inline-flex items-center gap-2 hover:text-emerald-800" href={`mailto:${SITE_CONFIG.email}`}>
            <Mail className="h-4 w-4 text-red-950" aria-hidden="true" />
            {SITE_CONFIG.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-950" aria-hidden="true" />
            {SITE_CONFIG.whatsappDisplay}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-950" aria-hidden="true" />
            {tx(SITE_CONFIG.city)}
          </span>
        </div>
        <WhatsAppLink className="mt-6 w-full" message={message} />
      </div>
      <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("socialNetworks")}</h2>
        <div className="mt-5 flex gap-3">
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 text-zinc-800 transition hover:bg-amber-50"
            aria-label="Instagram"
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={SITE_CONFIG.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 text-zinc-800 transition hover:bg-amber-50"
            aria-label="Facebook Afro Izmir Hub"
          >
            <Users className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={SITE_CONFIG.socials.tiktok}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 text-zinc-800 transition hover:bg-amber-50"
            aria-label="TikTok"
          >
            <Music2 className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}
