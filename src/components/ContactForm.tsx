"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { SITE_CONFIG } from "@/lib/data";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type ContactFormState = typeof initialForm;

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const { language, t } = useTranslation();

  function updateField(name: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const labels = {
      fr: { name: "Nom", email: "Email", whatsapp: "WhatsApp" },
      en: { name: "Name", email: "Email", whatsapp: "WhatsApp" },
      tr: { name: "Ad", email: "E-posta", whatsapp: "WhatsApp" },
    };
    const currentLabels = labels[language];
    const body = [
      `${currentLabels.name} : ${form.name}`,
      `${currentLabels.email} : ${form.email}`,
      `${currentLabels.whatsapp} : ${form.phone}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
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
          {t("email")}
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
            placeholder="vous@email.com"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        WhatsApp
        <input
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder="+90..."
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        {t("subject")}
        <input
          required
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder={t("placeholderSubject")}
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
        {t("message")}
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white"
          placeholder={t("placeholderMessage")}
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-red-950 px-5 py-3 text-sm font-black text-white transition hover:bg-red-900 sm:w-auto"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {t("sendEmail")}
      </button>
    </form>
  );
}
