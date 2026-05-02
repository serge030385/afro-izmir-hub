import type { Metadata } from "next";
import { getLocalSeoPage } from "@/lib/local-seo";
import { absoluteUrl, SEO_KEYWORDS } from "@/lib/seo";

export function createLocalSeoMetadata(slug: string): Metadata {
  const page = getLocalSeoPage(slug);

  if (!page) {
    return {
      title: "Page locale introuvable | Afro Izmir Hub",
      description: "Page SEO locale introuvable sur Afro Izmir Hub.",
    };
  }

  return {
    title: page.title.fr,
    description: page.description.fr,
    keywords: Array.from(new Set([...page.keywords, ...SEO_KEYWORDS])),
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title.fr,
      description: page.description.fr,
      url: absoluteUrl(`/${page.slug}`),
      siteName: "Afro Izmir Hub",
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title.fr,
      description: page.description.fr,
    },
  };
}
