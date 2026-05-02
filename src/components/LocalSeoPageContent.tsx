"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/Badge";
import { FatouShopCard } from "@/components/FatouShopCard";
import { useTranslation } from "@/components/LanguageProvider";
import { MedicalConsultationCard } from "@/components/MedicalConsultationCard";
import { SeoInternalLinks } from "@/components/SeoInternalLinks";
import { FATOUSHOP_CONFIG } from "@/lib/data";
import type { LocalSeoPage } from "@/lib/local-seo";

export function LocalSeoPageContent({ page }: { page: LocalSeoPage }) {
  const { tx } = useTranslation();
  const showMedicalConsultation = page.slug === "communaute-africaine-izmir";

  return (
    <>
      <section className="bg-[#0b0b08] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Badge variant="gold">SEO local Izmir</Badge>
          <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">{tx(page.h1)}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">{tx(page.intro)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={FATOUSHOP_CONFIG.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Commander sur FatouShop
            </a>
            <a
              href={FATOUSHOP_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Commander via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">{tx(page.h2)}</h2>
              <div className="mt-7 grid gap-9">
                {page.sections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="text-xl font-black tracking-tight text-zinc-950">{section.heading}</h3>
                    <div className="mt-4 grid gap-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-zinc-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <FatouShopCard className="mt-8" />
            {showMedicalConsultation ? <MedicalConsultationCard className="mt-8" /> : null}

            <section className="mt-8 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-2xl font-black tracking-tight text-zinc-950">FAQ SEO locale</h2>
              <div className="mt-5 grid gap-4">
                {page.faq.map((item) => (
                  <article key={item.question} className="rounded-lg bg-amber-50 p-4">
                    <h3 className="font-black text-zinc-950">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <SeoInternalLinks className="mt-8" currentSlug={page.slug} />
          </div>

          <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Maillage interne</p>
            <div className="mt-4 grid gap-3">
              {page.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group rounded-lg border border-black/10 px-4 py-3 text-sm font-black text-zinc-950 transition hover:border-emerald-700/30 hover:bg-amber-50"
                >
                  {slug.replaceAll("-", " ")}
                  <ArrowRight className="mt-2 h-4 w-4 text-red-950 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-[#0b0b08] p-4 text-white">
              <p className="text-sm font-black">FatouShop</p>
              <p className="mt-2 text-xs leading-5 text-zinc-300">
                Boutique africaine, restaurant/bar et plats camerounais à Izmir.
              </p>
              <a
                href={FATOUSHOP_CONFIG.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-amber-300"
              >
                Ouvrir FatouShop
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
