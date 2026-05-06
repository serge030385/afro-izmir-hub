"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { medicalContent } from "@/lib/i18n";

export function MedicalConsultationCard({ className = "" }: { className?: string }) {
  const { t, tx } = useTranslation();

  return (
    <article className={`rounded-lg border border-emerald-700/20 bg-white p-5 shadow-sm ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-800">
          <Stethoscope className="h-6 w-6" aria-hidden="true" />
        </div>
        <Badge variant="green">{t("navMedical")}</Badge>
      </div>
      <h2 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{tx(medicalContent.cardTitle)}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {tx(medicalContent.cardDescription)}
      </p>
      <Link
        href="/consultation-medicale-en-ligne"
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-800"
      >
        {tx(medicalContent.primaryCta)}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
