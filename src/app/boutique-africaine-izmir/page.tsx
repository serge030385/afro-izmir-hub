import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "boutique-africaine-izmir";

export const metadata = createLocalSeoMetadata(slug);

export default function BoutiqueAfricaineIzmirPage() {
  return <LocalSeoPageShell slug={slug} />;
}
