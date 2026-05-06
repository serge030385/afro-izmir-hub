"use client";

import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Globe2,
  HeartPulse,
  Languages,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { SITE_CONFIG } from "@/lib/data";
import { medicalContent, supportedLanguages, type Language } from "@/lib/i18n";
import { createWhatsAppUrl } from "@/lib/utils";

const offeredServiceIcons = [
  Stethoscope,
  HeartPulse,
  UserRoundCheck,
  CheckCircle2,
  ShieldCheck,
  FileSearch,
  Globe2,
  ClipboardList,
];

const initialForm = {
  name: "",
  phone: "",
  languagePreference: "fr" as Language,
  reason: "",
  slot: "",
  message: "",
};

type FormState = typeof initialForm;

export function MedicalConsultationPageContent() {
  const [form, setForm] = useState<FormState>(initialForm);
  const { t, tx } = useTranslation();

  function updateField<Key extends keyof FormState>(name: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function bookingMessage() {
    return [
      tx(medicalContent.whatsappQuickMessage),
      "",
      `${tx(medicalContent.whatsappLabels.name)} : ${form.name}`,
      `${tx(medicalContent.whatsappLabels.phone)} : ${form.phone}`,
      `${tx(medicalContent.whatsappLabels.language)} : ${tx(medicalContent.languageOptions[form.languagePreference])}`,
      `${tx(medicalContent.whatsappLabels.reason)} : ${form.reason}`,
      `${tx(medicalContent.whatsappLabels.slot)} : ${form.slot}`,
      `${tx(medicalContent.whatsappLabels.message)} : ${form.message}`,
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(createWhatsAppUrl(SITE_CONFIG.whatsappNumber, bookingMessage()), "_blank", "noopener,noreferrer");
  }

  const quickMessage = tx(medicalContent.whatsappQuickMessage);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0b08] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,197,66,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <Badge variant="gold">{tx(medicalContent.heroBadge)}</Badge>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">{tx(medicalContent.title)}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-200">
              {tx(medicalContent.subtitle)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={createWhatsAppUrl(SITE_CONFIG.whatsappNumber, quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
              >
                <CalendarClock className="h-4 w-4" aria-hidden="true" />
                {tx(medicalContent.primaryCta)}
              </a>
              <a
                href={createWhatsAppUrl(SITE_CONFIG.whatsappNumber, quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-50"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {tx(medicalContent.secondaryCta)}
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
            <Stethoscope className="h-10 w-10 text-amber-300" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black tracking-tight">{tx(medicalContent.panelTitle)}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-200">
              {tx(medicalContent.serviceText)}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-950 px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-4 rounded-lg border border-white/20 bg-white/10 p-5">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="text-sm font-bold leading-7">
            {tx(medicalContent.emergencyText)}
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{tx(medicalContent.servicesEyebrow)}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">{tx(medicalContent.servicesTitle)}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {medicalContent.offeredServices.map((title, index) => {
              const Icon = offeredServiceIcons[index] ?? Stethoscope;

              return (
                <article key={tx(title)} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <Icon className="h-6 w-6 text-emerald-800" aria-hidden="true" />
                  <h3 className="mt-4 font-black tracking-tight text-zinc-950">{tx(title)}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{tx(medicalContent.workflowEyebrow)}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">{tx(medicalContent.workflowTitle)}</h2>
            <div className="mt-6 grid gap-3">
              {medicalContent.steps.map((step, index) => (
                <div key={tx(step)} className="flex gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-300 text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-bold leading-6 text-zinc-800">{tx(step)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-emerald-700/20 bg-emerald-50 p-5">
              <Languages className="h-6 w-6 text-emerald-800" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-black tracking-tight text-zinc-950">{tx(medicalContent.languagesTitle)}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">{tx(medicalContent.languagesList)}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{tx(medicalContent.formEyebrow)}</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">{tx(medicalContent.formTitle)}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                {tx(medicalContent.formLabels.name)}
                <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                {tx(medicalContent.formLabels.phone)}
                <input required type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+905376781196" className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                {tx(medicalContent.formLabels.language)}
                <select value={form.languagePreference} onChange={(event) => updateField("languagePreference", event.target.value as Language)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white">
                  {supportedLanguages.map((option) => (
                    <option key={option} value={option}>
                      {tx(medicalContent.languageOptions[option])}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                {tx(medicalContent.formLabels.slot)}
                <input required value={form.slot} onChange={(event) => updateField("slot", event.target.value)} placeholder={tx(medicalContent.formPlaceholders.slot)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
              {tx(medicalContent.formLabels.reason)}
              <input required value={form.reason} onChange={(event) => updateField("reason", event.target.value)} placeholder={tx(medicalContent.formPlaceholders.reason)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
              {tx(medicalContent.formLabels.message)}
              <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={5} className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
            </label>
            <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800 sm:w-auto">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t("bookConsultation")}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{tx(medicalContent.pricingEyebrow)}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">{tx(medicalContent.pricingTitle)}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {tx(medicalContent.pricingNote)}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {medicalContent.prices.map((item) => (
              <article key={tx(item.title)} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black tracking-tight text-zinc-950">{tx(item.title)}</h3>
                <p className="mt-4 text-2xl font-black text-emerald-800">{tx(item.price)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">{t("faq")}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">{t("frequentQuestions")}</h2>
          </div>
          <div className="grid gap-4">
            {medicalContent.faq.map((item) => (
              <article key={tx(item.question)} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="font-black tracking-tight text-zinc-950">{tx(item.question)}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{tx(item.answer)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
