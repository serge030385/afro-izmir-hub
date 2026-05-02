"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { useTranslation } from "@/components/LanguageProvider";
import { announcements, categories, categoryLabels } from "@/lib/data";

export function AnnouncementsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const { t, tx } = useTranslation();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return announcements.filter((announcement) => {
      const matchesCategory = category === "Toutes" || announcement.category === category;
      const matchesQuery =
        !term ||
        [
          tx(announcement.title),
          tx(announcement.description),
          tx(announcement.price),
          tx(categoryLabels[announcement.category]),
          tx(announcement.city),
          announcement.badge ?? "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesQuery;
    });
  }, [category, query, tx]);

  return (
    <div>
      <div className="mb-8 grid gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm md:grid-cols-[1fr_260px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchAnnouncement")}
            className="min-h-12 w-full rounded-lg border border-black/10 bg-zinc-50 pl-10 pr-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          />
        </label>
        <label className="relative block">
          <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-12 w-full appearance-none rounded-lg border border-black/10 bg-zinc-50 pl-10 pr-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          >
            <option value="Toutes">{t("all")}</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {tx(categoryLabels[item])}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-black/20 bg-white p-8 text-center">
          <p className="font-bold text-zinc-950">{t("noAnnouncement")}</p>
          <p className="mt-2 text-sm text-zinc-600">{t("tryAnother")}</p>
        </div>
      )}
    </div>
  );
}
