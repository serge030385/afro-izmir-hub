import type { Metadata } from "next";
import { FatouShopCard } from "@/components/FatouShopCard";
import { InfoArticleCard } from "@/components/InfoArticleCard";
import { LocalizedPageIntro } from "@/components/LocalizedPageIntro";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Infos utiles",
  description: "Guides pratiques pour vivre, etudier, acheter, se loger et trouver des services africains a Izmir.",
};

export default function UsefulInfoPage() {
  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="navInfo"
        titleKey="infoIntroTitle"
        descriptionKey="infoIntroDescription"
      />
      <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FatouShopCard className="mb-8" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <InfoArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
