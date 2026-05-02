import type { Metadata } from "next";
import { AnnouncementsExplorer } from "@/components/AnnouncementsExplorer";
import { FatouShopCard } from "@/components/FatouShopCard";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { PublishAnnouncementLink } from "@/components/PublishAnnouncementLink";

export const metadata: Metadata = {
  title: "Annonces",
  description: "Annonces locales a Izmir : logement, jobs, transport, services, promotions et offres sponsorisees.",
};

export default function AnnouncementsPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navAnnouncements"
        titleKey="announcementsIntroTitle"
        descriptionKey="announcementsIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard className="mb-8" />
          <div className="mb-6 flex justify-end">
            <PublishAnnouncementLink />
          </div>
          <AnnouncementsExplorer />
        </div>
      </section>
    </>
  );
}
