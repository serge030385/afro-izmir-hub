"use client";

import { supportedLanguages, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/LanguageProvider";

const labels: Record<Language, string> = {
  fr: "FR",
  en: "EN",
  tr: "TR",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useTranslation();

  return (
    <div className={cn("inline-flex rounded-lg border border-black/10 bg-white p-1 shadow-sm", className)} aria-label="Language selector">
      {supportedLanguages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={cn(
            "min-h-8 rounded-md px-2.5 text-xs font-black transition",
            language === item ? "bg-[#0b0b08] text-amber-300" : "text-zinc-600 hover:bg-amber-50 hover:text-zinc-950",
          )}
          aria-pressed={language === item}
        >
          {labels[item]}
        </button>
      ))}
    </div>
  );
}
