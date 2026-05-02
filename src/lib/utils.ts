export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function normalizePhone(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function createWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function formatDate(date: string, language = "fr") {
  const locales: Record<string, string> = {
    fr: "fr-FR",
    en: "en-US",
    tr: "tr-TR",
  };

  return new Intl.DateTimeFormat(locales[language] ?? locales.fr, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export const formatDateFr = formatDate;
