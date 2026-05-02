"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

export default function UsefulInfoNotFound() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fffaf0] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-black/10 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-950">404</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">{t("noArticle")}</h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600">
          {t("tryAnother")}
        </p>
        <Link
          href="/infos-utiles"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("backInfo")}
        </Link>
      </div>
    </section>
  );
}
