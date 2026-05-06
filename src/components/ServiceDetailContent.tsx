"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/Badge";
import { FatouShopCard } from "@/components/FatouShopCard";
import { useTranslation } from "@/components/LanguageProvider";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { FATOUSHOP_CONFIG, SITE_CONFIG, type ServiceItem } from "@/lib/data";

export function ServiceDetailContent({ service }: { service: ServiceItem }) {
  const { t, tx } = useTranslation();
  const serviceTitle = tx(service.title);
  const showFatouShop = ["restaurants-africains", "boutiques-africaines", "evenements"].includes(service.slug);
  const usesFoodWhatsApp = ["restaurants-africains", "boutiques-africaines"].includes(service.slug);
  const serviceWhatsAppPhone = usesFoodWhatsApp ? FATOUSHOP_CONFIG.whatsappNumber : SITE_CONFIG.whatsappNumber;
  const partnerMessages = {
    add: {
      fr: `Bonjour ${SITE_CONFIG.name}, je souhaite ajouter mon contact dans la catégorie ${serviceTitle}.`,
      en: `Hello ${SITE_CONFIG.name}, I would like to add my contact under ${serviceTitle}.`,
      tr: `Merhaba ${SITE_CONFIG.name}, ${serviceTitle} kategorisine iletişimimi eklemek istiyorum.`,
    },
    premium: {
      fr: `Bonjour ${SITE_CONFIG.name}, je souhaite devenir Premium pour le service ${serviceTitle}.`,
      en: `Hello ${SITE_CONFIG.name}, I would like to become Premium for the ${serviceTitle} service.`,
      tr: `Merhaba ${SITE_CONFIG.name}, ${serviceTitle} hizmeti için Premium olmak istiyorum.`,
    },
    sponsor: {
      fr: `Bonjour ${SITE_CONFIG.name}, je souhaite sponsoriser le service ${serviceTitle}.`,
      en: `Hello ${SITE_CONFIG.name}, I would like to sponsor the ${serviceTitle} service.`,
      tr: `Merhaba ${SITE_CONFIG.name}, ${serviceTitle} hizmetine sponsor olmak istiyorum.`,
    },
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b0b08] text-white">
        {service.image ? (
          <Image src={service.image} alt="" fill priority className="object-cover opacity-35" sizes="100vw" />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,0.98)_0%,rgba(8,8,6,0.84)_54%,rgba(8,8,6,0.52)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-amber-200 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("backServices")}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-amber-300 text-zinc-950">
                <ServiceIcon icon={service.icon} className="h-7 w-7" />
              </div>
              <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{serviceTitle}</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-100 sm:text-lg">{tx(service.longDescription)}</p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
              <Badge variant="gold">{t("quickRecommendation")}</Badge>
              <p className="mt-4 text-sm leading-6 text-zinc-200">{t("quickRecommendationDescription")}</p>
              <WhatsAppLink phone={serviceWhatsAppPhone} message={service.whatsappMessage} variant="light" className="mt-5 w-full">
                {t("askRecommendation")}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {showFatouShop ? (
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FatouShopCard />
          </div>
        </section>
      ) : null}

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("serviceWhy")}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <div key={`${service.slug}-benefit-${index}`} className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                  <Check className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-800">{tx(benefit)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-zinc-950">{t("practicalInfo")}</h2>
            <div className="mt-6 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <div className="grid gap-4">
                {service.practicalInfo.map((info, index) => (
                  <p key={`${service.slug}-info-${index}`} className="flex gap-3 text-sm font-semibold leading-6 text-zinc-700">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                    {tx(info)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{t("recommendedContacts")}</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">{t("relatedProfessionals")}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {service.providers.map((provider) => {
              const providerName = typeof provider.name === "string" ? provider.name : tx(provider.name);
              const providerMessage = {
                fr: `Bonjour ${providerName}, je viens depuis Afro Izmir Hub pour le service ${serviceTitle}.`,
                en: `Hello ${providerName}, I come from Afro Izmir Hub for the ${serviceTitle} service.`,
                tr: `Merhaba ${providerName}, Afro Izmir Hub’dan ${serviceTitle} hizmeti için geliyorum.`,
              };

              return (
                <article key={providerName} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-black tracking-tight text-zinc-950">{providerName}</h3>
                    {provider.isPremium ? (
                      <Badge variant="gold">
                        <ShieldCheck className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
                        {t("premium")}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">{tx(provider.description)}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-700">
                    <MapPin className="h-4 w-4 text-red-950" aria-hidden="true" />
                    {tx(provider.city)}
                  </p>
                  <WhatsAppLink phone={provider.whatsapp} message={providerMessage} className="mt-5 w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{t("faq")}</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">{t("frequentQuestions")}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{t("faqDescription")}</p>
          </div>
          <div className="grid gap-4">
            {service.faq.map((item, index) => (
              <article key={`${service.slug}-faq-${index}`} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="font-black tracking-tight text-zinc-950">{tx(item.question)}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{tx(item.answer)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b08] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Badge variant="gold">{t("monetization")}</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight">{t("serviceCtaTitle")}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">{t("serviceCtaDescription")}</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <WhatsAppLink phone={serviceWhatsAppPhone} message={partnerMessages.add} variant="light" className="w-full">
              {t("addMyContact")}
            </WhatsAppLink>
            <WhatsAppLink phone={serviceWhatsAppPhone} message={partnerMessages.premium} className="w-full">
              {t("becomePremium")}
            </WhatsAppLink>
            <WhatsAppLink phone={serviceWhatsAppPhone} message={partnerMessages.sponsor} className="w-full bg-red-950 hover:bg-red-900">
              {t("sponsorService")}
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
