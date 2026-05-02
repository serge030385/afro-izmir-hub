"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Megaphone, Search, Users } from "lucide-react";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { FatouShopCard } from "@/components/FatouShopCard";
import { useTranslation } from "@/components/LanguageProvider";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { PricingPlans } from "@/components/PricingPlans";
import { SectionHeader } from "@/components/SectionHeader";
import { SeoInternalLinks } from "@/components/SeoInternalLinks";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/Badge";
import { announcements, professionals, services, SITE_CONFIG } from "@/lib/data";

const popularServices = services.filter((service) => service.featured).slice(0, 3);
const latestAnnouncements = announcements.slice(0, 3);
const recommendedBusinesses = professionals
  .filter((professional) => ["Restaurants africains", "Boutiques africaines"].includes(professional.category))
  .slice(0, 3);

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b0b08] text-white">
        <Image
          src="/images/afro-izmir-hero.png"
          alt="Communauté africaine à Izmir avec services, restaurants africains et FatouShop"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,0.98)_0%,rgba(8,8,6,0.82)_38%,rgba(8,8,6,0.28)_72%,rgba(8,8,6,0.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="gold">{t("heroEyebrow")}</Badge>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100">
              {t("heroDescription")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                {t("seeServices")}
              </Link>
              <Link
                href="/publier"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
              >
                <Megaphone className="h-4 w-4" aria-hidden="true" />
                {t("publishAd")}
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                { icon: Users, label: t("localCommunity"), value: "Izmir" },
                { icon: BadgeCheck, label: t("prosPartners"), value: `${professionals.length}+` },
                { icon: ArrowRight, label: t("directContact"), value: "WhatsApp" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <item.icon className="h-5 w-5 text-amber-300" aria-hidden="true" />
                  <p className="mt-3 text-xl font-black">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("popularServices")}
            title={t("popularServicesTitle")}
            description={t("popularServicesDescription")}
            action={{ href: "/services", label: t("allServices") }}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard />
          <SeoInternalLinks className="mt-8" />
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("latestAnnouncements")}
            title={t("latestAnnouncementsTitle")}
            description={t("latestAnnouncementsDescription")}
            action={{ href: "/annonces", label: t("seeAnnouncements") }}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {latestAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f1df] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("homeRecommended")}
            title={t("homeRecommendedTitle")}
            description={t("homeRecommendedDescription")}
            action={{ href: "/annuaire", label: t("exploreDirectory") }}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {recommendedBusinesses.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("monetization")}
            title={t("becomePartnerTitle")}
            description={`${t("becomePartnerDescription")} Contact : ${SITE_CONFIG.whatsappDisplay}.`}
            action={{ href: "/partenariat", label: t("seeOffers") }}
          />
          <PricingPlans />
        </div>
      </section>
    </>
  );
}
