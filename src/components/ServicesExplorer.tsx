"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { ServiceCard } from "@/components/ServiceCard";
import { categories, categoryLabels, services } from "@/lib/data";

export function ServicesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const { t, tx } = useTranslation();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory = category === "Toutes" || service.category === category;
      const matchesQuery =
        !term ||
        [
          tx(service.title),
          tx(service.shortDescription),
          tx(service.longDescription),
          tx(service.city),
          tx(categoryLabels[service.category]),
          ...service.highlights.map(tx),
          ...service.benefits.map(tx),
          ...service.practicalInfo.map(tx),
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
            placeholder={t("searchService")}
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-black/20 bg-white p-8 text-center">
          <p className="font-bold text-zinc-950">{t("noService")}</p>
          <p className="mt-2 text-sm text-zinc-600">{t("tryAnother")}</p>
        </div>
      )}
    </div>
  );
}
