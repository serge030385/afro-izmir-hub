import { LocalSeoPageShell } from "@/components/LocalSeoPageShell";
import { createLocalSeoMetadata } from "@/lib/local-seo-metadata";

const slug = "restaurant-africain-izmir";

export const metadata = createLocalSeoMetadata(slug);

export default function RestaurantAfricainIzmirPage() {
  return <LocalSeoPageShell slug={slug} />;
}
