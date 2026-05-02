"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localSeoLinks } from "@/lib/local-seo";
import { cn } from "@/lib/utils";

export function SeoInternalLinks({ className, currentSlug }: { className?: string; currentSlug?: string }) {
  return (
    <nav className={cn("rounded-lg border border-black/10 bg-white p-5 shadow-sm", className)} aria-label="Liens SEO locaux">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Pages locales utiles</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/"
          className="group inline-flex items-center justify-between gap-3 rounded-lg bg-amber-50 px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-100"
        >
          Accueil Afro Izmir Hub
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        {localSeoLinks
          .filter((link) => link.href !== `/${currentSlug}`)
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group inline-flex items-center justify-between gap-3 rounded-lg bg-zinc-50 px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-50"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
      </div>
    </nav>
  );
}
