"use client";

import { PageIntro } from "@/components/PageIntro";
import { useTranslation } from "@/components/LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

type LocalizedPageIntroProps = {
  eyebrowKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
};

export function LocalizedPageIntro({ eyebrowKey, titleKey, descriptionKey }: LocalizedPageIntroProps) {
  const { t } = useTranslation();

  return <PageIntro eyebrow={t(eyebrowKey)} title={t(titleKey)} description={t(descriptionKey)} />;
}
