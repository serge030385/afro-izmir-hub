import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/lib/data";
import { localSeoPages } from "@/lib/local-seo";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "",
  "/services",
  "/annuaire",
  "/annonces",
  "/bons-plans",
  "/infos-utiles",
  "/partenariat",
  "/contact",
  "/publier",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...localSeoPages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.slug === "fatoushop" ? 0.95 : 0.9,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}${service.href ?? `/services/${service.slug}`}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: ["restaurants-africains", "boutiques-africaines", "consultation-medicale-en-ligne"].includes(service.slug) ? 0.85 : 0.65,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/infos-utiles/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: ["produits-africains-izmir", "restaurants-africains-izmir"].includes(post.slug) ? 0.85 : 0.6,
    })),
  ];
}
