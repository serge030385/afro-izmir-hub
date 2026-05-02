"use client";

import { CalendarDays, MapPin, Tag } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { categoryLabels, type Announcement } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const { language, t, tx } = useTranslation();
  const message = {
    fr: `Bonjour, je vous contacte depuis Afro Izmir Hub pour l'annonce : ${tx(announcement.title)}.`,
    en: `Hello, I am contacting you from Afro Izmir Hub about the listing: ${tx(announcement.title)}.`,
    tr: `Merhaba, Afro Izmir Hub üzerinden şu ilan için iletişime geçiyorum: ${tx(announcement.title)}.`,
  };

  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black tracking-tight text-zinc-950">{tx(announcement.title)}</h3>
          <p className="mt-1 text-sm font-semibold text-emerald-800">{tx(categoryLabels[announcement.category])}</p>
        </div>
        {announcement.badge ? (
          <Badge variant={announcement.badge === "Urgent" ? "red" : "gold"}>
            {announcement.badge === "Urgent" ? t("urgent") : t("sponsored")}
          </Badge>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-600">{tx(announcement.description)}</p>
      <div className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700 sm:grid-cols-3">
        <span className="inline-flex items-center gap-2">
          <Tag className="h-4 w-4 text-amber-700" aria-hidden="true" />
          {tx(announcement.price)}
        </span>
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-red-900" aria-hidden="true" />
          {tx(announcement.city)}
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-emerald-800" aria-hidden="true" />
          {formatDate(announcement.date, language)}
        </span>
      </div>
      <div className="mt-5">
        <WhatsAppLink phone={announcement.whatsapp} message={message} className="w-full sm:w-auto" />
      </div>
    </article>
  );
}
