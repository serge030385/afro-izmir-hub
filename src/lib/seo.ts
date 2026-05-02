import { FATOUSHOP_CONFIG, SITE_CONFIG } from "@/lib/data";

export const SITE_URL = "https://www.afro-izmir-hub.com";

export const PRIMARY_SEO_TITLE =
  "Afro Izmir Hub | Restaurant africain, produits africains et communauté africaine à Izmir";

export const PRIMARY_SEO_DESCRIPTION =
  "Afro Izmir Hub connecte la communauté africaine à Izmir : restaurants africains, produits africains, FatouShop, cuisine camerounaise, événements, services et bonnes adresses.";

export const SEO_KEYWORDS = [
  "restaurant africain Izmir",
  "boutique africaine Izmir",
  "produits africains Izmir",
  "nourriture africaine Turquie",
  "cuisine camerounaise Izmir",
  "communauté africaine Izmir",
  "Afro Izmir Hub",
  "FatouShop",
  "plats camerounais Izmir",
  "restaurant camerounais Izmir",
  "services afro Izmir",
  "diaspora africaine Izmir",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_URL,
  logo: absoluteUrl("/icon.png"),
  sameAs: [SITE_CONFIG.socials.instagram, SITE_CONFIG.socials.facebook, SITE_CONFIG.socials.tiktok],
  areaServed: {
    "@type": "City",
    name: "Izmir, Turquie",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "FatouShop",
      url: FATOUSHOP_CONFIG.url,
    },
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_URL,
  inLanguage: ["fr-FR", "en-US", "tr-TR"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/services?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  url: SITE_URL,
  telephone: "+905317818795",
  areaServed: "Izmir, Turquie",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Izmir",
    addressCountry: "TR",
  },
  sameAs: [FATOUSHOP_CONFIG.url],
  knowsAbout: SEO_KEYWORDS,
};

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "FatouShop",
  url: FATOUSHOP_CONFIG.url,
  telephone: "+905317818795",
  servesCuisine: ["Cuisine africaine", "Cuisine camerounaise"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Izmir",
    addressCountry: "TR",
  },
  areaServed: "Izmir, Turquie",
  parentOrganization: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_URL,
  },
};
