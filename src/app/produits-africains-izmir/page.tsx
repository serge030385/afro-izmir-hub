import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "produits-africains-izmir";

export const metadata = createLocalSeoMetadata(slug);

export default function ProduitsAfricainsIzmirPage() {
  return <LocalSeoPageShell slug={slug} />;
}
