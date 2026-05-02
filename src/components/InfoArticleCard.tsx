"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import type { BlogPost } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export function InfoArticleCard({ post }: { post: BlogPost }) {
  const { language, t, tx } = useTranslation();

  return (
    <Link
      href={`/infos-utiles/${post.slug}`}
      className="group block rounded-lg border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
      aria-label={`${t("read")} ${tx(post.title)}`}
    >
      <Badge variant="green">{tx(post.category)}</Badge>
      <h2 className="mt-5 text-xl font-black tracking-tight text-zinc-950">{tx(post.title)}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{tx(post.excerpt)}</p>
      <div className="mt-5 grid gap-2 text-sm font-semibold text-zinc-600">
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-emerald-800" aria-hidden="true" />
          {tx(post.readingTime)}
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-red-950" aria-hidden="true" />
          {t("updatedOn")} {formatDate(post.updatedAt, language)}
        </span>
      </div>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-red-950 transition group-hover:text-emerald-800">
        {t("read")}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
