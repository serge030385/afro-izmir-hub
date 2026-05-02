import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "cuisine-camerounaise-izmir";

export const metadata = createLocalSeoMetadata(slug);

export default function CuisineCamerounaiseIzmirPage() {
  return <LocalSeoPageShell slug={slug} />;
}
