"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/components/LanguageProvider";
import { navLinks } from "@/lib/data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 bg-white text-zinc-950"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-16 border-b border-black/10 bg-white px-4 py-4 shadow-lg">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold text-zinc-800 transition hover:bg-amber-50"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <LanguageSwitcher className="mt-3 w-fit" />
            <Link
              href="/publier"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-emerald-700 px-3 py-3 text-center text-base font-black text-white"
            >
              {t("publishAd")}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
