"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { categories, categoryLabels, SITE_CONFIG, type Category } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";

type PublishForm = {
  name: string;
  phone: string;
  category: Category;
  title: string;
  description: string;
  price: string;
  city: string;
};

const initialForm: PublishForm = {
  name: "",
  phone: "",
  category: categories[0],
  title: "",
  description: "",
  price: "",
  city: "Izmir",
};

export function PublishAdForm() {
  const [form, setForm] = useState<PublishForm>(initialForm);
  const { language, t, tx } = useTranslation();

  function updateField<Key extends keyof PublishForm>(name: Key, value: PublishForm[Key]) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const intro = {
      fr: "Bonjour Afro Izmir Hub, je souhaite publier une annonce.",
      en: "Hello Afro Izmir Hub, I would like to publish a listing.",
      tr: "Merhaba Afro Izmir Hub, bir ilan yayınlamak istiyorum.",
    };

    const labels = {
      fr: {
        name: "Nom",
        whatsapp: "WhatsApp",
        category: "Catégorie",
        title: "Titre",
        description: "Description",
        price: "Prix",
        city: "Ville",
      },
      en: {
        name: "Name",
        whatsapp: "WhatsApp",
        category: "Category",
        title: "Title",
        description: "Description",
        price: "Price",
        city: "City",
      },
      tr: {
        name: "Ad",
        whatsapp: "WhatsApp",
        category: "Kategori",
        title: "Başlık",
        description: "Açıklama",
        price: "Fiyat",
        city: "Şehir",
      },
    };

    const currentLabels = labels[language];
    const message = [
      intro[language],
      "",
      `${currentLabels.name} : ${form.name}`,
      `${currentLabels.whatsapp} : ${form.phone}`,
      `${currentLabels.category} : ${tx(categoryLabels[form.category])}`,
      `${currentLabels.title} : ${form.title}`,
      `${currentLabels.description} : ${form.description}`,
      `${currentLabels.price} : ${form.price}`,
      `${currentLabels.city} : ${form.city}`,
    ].join("\n");

    window.open(createWhatsAppUrl(SITE_CONFIG.whatsappNumber, message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-zinc-900">
          {t("name")}
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
            placeholder={t("placeholderName")}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-zinc-900">
          {t("whatsappPhone")}
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
            placeholder="+90..."
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-zinc-900">
          {t("category")}
          <select
            required
            value={form.category}
            onChange={(event) => updateField("category", event.target.value as Category)}
            className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {tx(categoryLabels[category])}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-zinc-900">
          {t("city")}
          <input
            required
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
            placeholder="Izmir"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        {t("title")}
        <input
          required
          value={form.title}
          onChange={(event) => updateField("title", event.target.value)}
          className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder={t("placeholderPublishTitle")}
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        {t("description")}
        <textarea
          required
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          rows={5}
          className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder={t("placeholderPublishDescription")}
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        {t("price")}
        <input
          required
          value={form.price}
          onChange={(event) => updateField("price", event.target.value)}
          className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder={t("placeholderPublishPrice")}
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {t("sendWhatsApp")}
      </button>
    </form>
  );
}
