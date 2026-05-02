"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  defaultLanguage,
  getLocalized,
  isSupportedLanguage,
  translations,
  type Language,
  type LocalizedText,
  type TranslationKey,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  tx: (text: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem("afro-izmir-language");
    if (stored && isSupportedLanguage(stored)) {
      const timeout = window.setTimeout(() => setLanguageState(stored), 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    function setLanguage(nextLanguage: Language) {
      setLanguageState(nextLanguage);
      window.localStorage.setItem("afro-izmir-language", nextLanguage);
      document.documentElement.lang = nextLanguage;
    }

    return {
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? translations[defaultLanguage][key],
      tx: (text) => getLocalized(text, language),
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return {
    language: context.language,
    setLanguage: context.setLanguage,
  };
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used inside LanguageProvider");
  }
  return context;
}
