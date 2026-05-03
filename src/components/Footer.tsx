"use client";

import Link from "next/link";
import { Camera, Mail, MapPin, Music2, Phone, Users } from "lucide-react";
import { SITE_CONFIG, navLinks } from "@/lib/data";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { useTranslation } from "@/components/LanguageProvider";

export function Footer() {
  const { t, tx } = useTranslation();
  const message = {
    fr: "Bonjour Afro Izmir Hub, je souhaite obtenir des informations.",
    en: "Hello Afro Izmir Hub, I would like more information.",
    tr: "Merhaba Afro Izmir Hub, bilgi almak istiyorum.",
  };

  return (
    <footer className="border-t border-white/10 bg-[#0b0b08] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber-300 text-sm font-black text-zinc-950">
              AIH
            </span>
            <div>
              <p className="font-black">{SITE_CONFIG.name}</p>
              <p className="text-sm text-zinc-300">{tx(SITE_CONFIG.tagline)}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-300" aria-hidden="true" />
              {tx(SITE_CONFIG.city)}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${SITE_CONFIG.email}`}>
              <Mail className="h-4 w-4 text-amber-300" aria-hidden="true" />
              {SITE_CONFIG.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-300" aria-hidden="true" />
              {SITE_CONFIG.whatsappDisplay}
            </span>
          </div>
          <WhatsAppLink className="mt-6" variant="light" message={message} />
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-amber-300">{t("navigation")}</p>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-amber-300">{t("socialNetworks")}</p>
          <div className="flex gap-3">
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-zinc-200 transition hover:bg-white hover:text-zinc-950"
              aria-label="Instagram"
            >
              <Camera className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-zinc-200 transition hover:bg-white hover:text-zinc-950"
              aria-label="Facebook Afro Izmir Hub"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-zinc-200 transition hover:bg-white hover:text-zinc-950"
              aria-label="TikTok"
            >
              <Music2 className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-400">
            {tx(SITE_CONFIG.tagline)}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        © 2026 {SITE_CONFIG.name}. {t("copyright")}
      </div>
    </footer>
  );
}
