"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

export function PublishAnnouncementLink() {
  const { t } = useTranslation();

  return (
    <Link
      href="/publier"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-950 px-4 py-2 text-sm font-black text-white transition hover:bg-red-900"
    >
      <Megaphone className="h-4 w-4" aria-hidden="true" />
      {t("publishAd")}
    </Link>
  );
}
