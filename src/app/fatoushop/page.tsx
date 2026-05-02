import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "fatoushop";

export const metadata = createLocalSeoMetadata(slug);

export default function FatouShopSeoPage() {
  return <LocalSeoPageShell slug={slug} />;
}
