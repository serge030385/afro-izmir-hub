"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceItem } from "@/lib/data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const { t, tx } = useTranslation();

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block min-h-[390px] overflow-hidden rounded-lg border border-white/10 bg-[#0b0b08] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
      aria-label={`${t("seeDetails")} ${tx(service.title)}`}
    >
      <Image
        src={service.backgroundImage}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,0.56)_0%,rgba(5,5,4,0.70)_45%,rgba(5,5,4,0.94)_100%)]" />
      <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />

      <div className="relative z-10 flex min-h-[350px] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/90 text-emerald-800 shadow-sm backdrop-blur transition group-hover:bg-amber-300 group-hover:text-zinc-950">
            <ServiceIcon icon={service.icon} className="h-6 w-6" />
          </div>
          {service.featured ? <Badge variant="gold">{t("popular")}</Badge> : null}
        </div>

        <div className="mt-auto pt-16">
          <h3 className="text-xl font-black tracking-tight text-white">{tx(service.title)}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-100">{tx(service.shortDescription)}</p>
          <div className="mt-5 grid gap-2">
            {service.highlights.map((highlight) => (
              <span key={tx(highlight)} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100">
                <Check className="h-4 w-4 text-amber-300" aria-hidden="true" />
                {tx(highlight)}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-black text-zinc-950 shadow-sm transition group-hover:bg-amber-300">
            {t("seeDetails")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
