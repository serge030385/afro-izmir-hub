import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/ServiceDetailContent";
import { getServiceBySlug, services } from "@/lib/data";
import { defaultLanguage, getLocalized } from "@/lib/i18n";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service introuvable",
      description: "Ce service n'existe pas sur Afro Izmir Hub.",
    };
  }

  return {
    title: getLocalized(service.title, defaultLanguage),
    description: getLocalized(service.shortDescription, defaultLanguage),
    openGraph: {
      title: getLocalized(service.title, defaultLanguage),
      description: getLocalized(service.shortDescription, defaultLanguage),
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
