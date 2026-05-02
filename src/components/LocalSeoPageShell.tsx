import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { LocalSeoPageContent } from "@/components/LocalSeoPageContent";
import { breadcrumbJsonLd, getLocalSeoPage } from "@/lib/local-seo";

export function LocalSeoPageShell({ slug }: { slug: string }) {
  const page = getLocalSeoPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(page)} />
      <LocalSeoPageContent page={page} />
    </>
  );
}
