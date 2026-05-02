import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "communaute-africaine-izmir";

export const metadata = createLocalSeoMetadata(slug);

export default function CommunauteAfricaineIzmirPage() {
  return <LocalSeoPageShell slug={slug} />;
}
