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
import { createWhatsAppUrl } from "@/lib/utils";

const offeredServices = [
  { icon: Stethoscope, title: "Médecine générale" },
  { icon: HeartPulse, title: "Conseil santé" },
  { icon: UserRoundCheck, title: "Avis médical initial" },
  { icon: CheckCircle2, title: "Suivi simple" },
  { icon: ShieldCheck, title: "Orientation vers spécialiste" },
  { icon: FileSearch, title: "Explication de résultats médicaux simples" },
  { icon: Globe2, title: "Aide à comprendre le système médical en Turquie" },
  { icon: ClipboardList, title: "Préparation à une visite médicale" },
];

const steps = [
  "Envoyez un message WhatsApp",
  "Expliquez brièvement votre besoin",
  "Choisissez un créneau disponible",
  "Consultez en ligne avec un médecin agréé",
  "Recevez des recommandations et les prochaines étapes",
];

const prices = [
  { title: "Consultation courte", price: "Prix à définir" },
  { title: "Consultation standard", price: "Prix à définir" },
  { title: "Accompagnement médical", price: "Prix à définir" },
];

const faq = [
  {
    question: "Qui réalise la consultation ?",
    answer: "La consultation est réalisée par un médecin agréé, selon les disponibilités confirmées lors de la réservation.",
  },
  {
    question: "Est-ce un vrai médecin ?",
    answer: "Oui, le service est prévu pour vous orienter avec un médecin agréé. Les détails pratiques sont confirmés avant le rendez-vous.",
  },
  {
    question: "Est-ce disponible en français ?",
    answer: "Le service peut être disponible en français, anglais ou turc selon la disponibilité du médecin.",
  },
  {
    question: "Puis-je consulter depuis une autre ville en Turquie ?",
    answer: "Oui, la consultation se fait en ligne et peut être demandée depuis Izmir ou ailleurs en Turquie.",
  },
  {
    question: "Est-ce adapté aux urgences ?",
    answer: "Non. En cas d’urgence médicale ou situation critique, appelez immédiatement le 112 en Turquie.",
  },
  {
    question: "Comment réserver une consultation ?",
    answer: "Remplissez le formulaire ou cliquez sur WhatsApp, puis envoyez votre demande avec la langue souhaitée et le créneau préféré.",
  },
  {
    question: "Puis-je recevoir une ordonnance ?",
    answer: "Les possibilités d’ordonnance dépendent du cadre légal, du type de consultation et de l’évaluation du médecin.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  language: "Français",
  reason: "",
  slot: "",
  message: "",
};

type FormState = typeof initialForm;

export function MedicalConsultationPageContent() {
  const [form, setForm] = useState<FormState>(initialForm);
  const { t } = useTranslation();

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function bookingMessage() {
    return [
      "Bonjour Afro Izmir Hub, je souhaite réserver une consultation médicale en ligne.",
      "",
      `Nom : ${form.name}`,
      `Téléphone WhatsApp : ${form.phone}`,
      `Langue souhaitée : ${form.language}`,
      `Motif de consultation : ${form.reason}`,
      `Créneau souhaité : ${form.slot}`,
      `Message complémentaire : ${form.message}`,
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(createWhatsAppUrl(SITE_CONFIG.whatsappNumber, bookingMessage()), "_blank", "noopener,noreferrer");
  }

  const quickMessage = "Bonjour Afro Izmir Hub, je souhaite réserver une consultation médicale en ligne.";

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0b08] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,197,66,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <Badge variant="gold">Médecin agréé • En ligne • Turquie</Badge>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">Consultation médicale en ligne</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-200">
              Parlez à un médecin agréé depuis Izmir ou ailleurs en Turquie.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={createWhatsAppUrl(SITE_CONFIG.whatsappNumber, quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
              >
                <CalendarClock className="h-4 w-4" aria-hidden="true" />
                Réserver une consultation
              </a>
              <a
                href={createWhatsAppUrl(SITE_CONFIG.whatsappNumber, quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-50"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contacter via WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
            <Stethoscope className="h-10 w-10 text-amber-300" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black tracking-tight">Orientation médicale professionnelle</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-200">
              Afro Izmir Hub propose un service de consultation médicale en ligne avec un médecin agréé. Ce service permet
              aux personnes vivant à Izmir ou ailleurs en Turquie d’obtenir une orientation médicale professionnelle, en
              français, anglais ou turc selon disponibilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-950 px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-4 rounded-lg border border-white/20 bg-white/10 p-5">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="text-sm font-bold leading-7">
            Ce service ne remplace pas les urgences médicales. En cas d’urgence, douleur intense, difficulté à respirer,
            perte de connaissance, accident grave ou situation critique, appelez immédiatement le 112 en Turquie.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Services proposés</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Une aide claire avant, pendant ou après un rendez-vous</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offeredServices.map((item) => (
              <article key={item.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <item.icon className="h-6 w-6 text-emerald-800" aria-hidden="true" />
                <h3 className="mt-4 font-black tracking-tight text-zinc-950">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Fonctionnement</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Réserver en quelques étapes</h2>
            <div className="mt-6 grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-300 text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-bold leading-6 text-zinc-800">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-emerald-700/20 bg-emerald-50 p-5">
              <Languages className="h-6 w-6 text-emerald-800" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-black tracking-tight text-zinc-950">Langues disponibles</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">Français • Anglais • Turc</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Formulaire de réservation</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">Envoyer la demande sur WhatsApp</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                Nom
                <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                Téléphone WhatsApp
                <input required type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+905317818795" className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                Langue souhaitée
                <select value={form.language} onChange={(event) => updateField("language", event.target.value)} className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white">
                  <option>Français</option>
                  <option>Anglais</option>
                  <option>Turc</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-900">
                Créneau souhaité
                <input required value={form.slot} onChange={(event) => updateField("slot", event.target.value)} placeholder="Ex : demain après-midi" className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
              Motif de consultation
              <input required value={form.reason} onChange={(event) => updateField("reason", event.target.value)} placeholder="Décrivez brièvement le besoin" className="min-h-12 rounded-lg border border-black/10 bg-zinc-50 px-3 text-sm font-semibold outline-none transition focus:border-emerald-700 focus:bg-white" />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-900">
              Message complémentaire
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
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">Tarifs</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Prix faciles à modifier</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Les tarifs peuvent varier selon le type de consultation, la durée et la disponibilité du médecin.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {prices.map((item) => (
              <article key={item.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-4 text-2xl font-black text-emerald-800">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">FAQ</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Questions fréquentes</h2>
          </div>
          <div className="grid gap-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="font-black tracking-tight text-zinc-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
