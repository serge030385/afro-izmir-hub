"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";
import { useTranslation } from "@/components/LanguageProvider";
import { navLinks, SITE_CONFIG } from "@/lib/data";

export function Header() {
  const { t, tx } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Afro Izmir Hub accueil">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0b0b08] text-sm font-black text-amber-300">
            AIH
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-zinc-950">{SITE_CONFIG.name}</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 sm:block">
              {tx(SITE_CONFIG.city)}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-amber-50 hover:text-zinc-950"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/publier"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-900"
          >
            {t("publish")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
