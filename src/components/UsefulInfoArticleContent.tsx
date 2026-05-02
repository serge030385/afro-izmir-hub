"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, MessageCircle, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/Badge";
import { FatouShopCard } from "@/components/FatouShopCard";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import type { BlogPost, ServiceItem } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type UsefulInfoArticleContentProps = {
  post: BlogPost;
  relatedServices: ServiceItem[];
  relatedArticles: BlogPost[];
};

export function UsefulInfoArticleContent({ post, relatedServices, relatedArticles }: UsefulInfoArticleContentProps) {
  const { language, t, tx } = useTranslation();
  const showFatouShop = ["produits-africains-izmir", "restaurants-africains-izmir"].includes(post.slug);

  return (
    <>
      <section className="bg-[#0b0b08] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/infos-utiles" className="inline-flex items-center gap-2 text-sm font-bold text-amber-200 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("backInfo")}
          </Link>
          <div className="mt-8">
            <Badge variant="gold">{tx(post.category)}</Badge>
            <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">{tx(post.title)}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">{tx(post.excerpt)}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                <Clock className="h-4 w-4 text-amber-300" aria-hidden="true" />
                {tx(post.readingTime)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-amber-300" aria-hidden="true" />
                {t("updatedOn")} {formatDate(post.updatedAt, language)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{t("summary")}</p>
            <nav className="mt-4 grid gap-2" aria-label={t("summary")}>
              {post.contentSections.map((section, index) => (
                <a
                  key={`${post.slug}-summary-${index}`}
                  href={`#section-${index + 1}`}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-amber-50 hover:text-zinc-950"
                >
                  {tx(section.heading)}
                </a>
              ))}
              <a href="#conseils" className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-amber-50 hover:text-zinc-950">
                {t("usefulTips")}
              </a>
              <a href="#verification" className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-amber-50 hover:text-zinc-950">
                {t("beforeActing")}
              </a>
            </nav>
          </aside>

          <div className="min-w-0">
            <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-8">
              <div className="grid gap-10">
                {post.contentSections.map((section, index) => (
                  <section key={`${post.slug}-section-${index}`} id={`section-${index + 1}`} className="scroll-mt-28">
                    <h2 className="text-2xl font-black tracking-tight text-zinc-950">{tx(section.heading)}</h2>
                    <div className="mt-4 grid gap-4">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={`${post.slug}-paragraph-${index}-${paragraphIndex}`} className="text-base leading-8 text-zinc-700">
                          {tx(paragraph)}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            {showFatouShop ? <FatouShopCard className="mt-8" /> : null}

            <section id="conseils" className="mt-8 scroll-mt-28 rounded-lg border border-emerald-700/20 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("usefulTips")}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {post.usefulTips.map((tip, index) => (
                  <p key={`${post.slug}-tip-${index}`} className="flex gap-3 rounded-lg bg-emerald-50 p-4 text-sm font-semibold leading-6 text-zinc-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    {tx(tip)}
                  </p>
                ))}
              </div>
            </section>

            <section id="verification" className="mt-8 scroll-mt-28 rounded-lg border border-red-950/20 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("beforeActing")}</h2>
              <div className="mt-5 grid gap-3">
                {post.warnings.map((warning, index) => (
                  <p key={`${post.slug}-warning-${index}`} className="flex gap-3 rounded-lg bg-red-50 p-4 text-sm font-semibold leading-6 text-zinc-800">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-950" aria-hidden="true" />
                    {tx(warning)}
                  </p>
                ))}
              </div>
              <p className="mt-5 rounded-lg border border-amber-500/30 bg-amber-50 p-4 text-sm font-bold leading-6 text-zinc-800">
                {t("rulesNote")}
              </p>
            </section>

            <section className="mt-8 rounded-lg bg-[#0b0b08] p-5 text-white shadow-sm sm:p-6">
              <div className="max-w-3xl">
                <MessageCircle className="h-7 w-7 text-amber-300" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-black tracking-tight">{t("usefulContact")}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{t("usefulContactDescription")}</p>
              </div>
              <WhatsAppLink message={post.ctaWhatsappMessage} variant="light" className="mt-6 w-full sm:w-auto">
                {post.ctaLabel ? tx(post.ctaLabel) : t("askRecommendation")}
              </WhatsAppLink>
            </section>

            {relatedServices.length > 0 ? (
              <section className="mt-8 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("relatedServices")}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-lg border border-black/10 p-4 transition hover:border-emerald-700/30 hover:bg-amber-50"
                    >
                      <p className="font-black text-zinc-950">{tx(service.title)}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(service.shortDescription)}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-red-950 group-hover:text-emerald-800">
                        {t("seeService")}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedArticles.length > 0 ? (
              <section className="mt-8 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("relatedArticles")}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/infos-utiles/${article.slug}`}
                      className="group rounded-lg border border-black/10 p-4 transition hover:border-emerald-700/30 hover:bg-amber-50"
                    >
                      <Badge variant="green">{tx(article.category)}</Badge>
                      <p className="mt-4 font-black text-zinc-950">{tx(article.title)}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(article.excerpt)}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-red-950 group-hover:text-emerald-800">
                        {t("read")}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
