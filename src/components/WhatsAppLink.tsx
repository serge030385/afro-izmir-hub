"use client";

import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/lib/data";
import { useTranslation } from "@/components/LanguageProvider";
import type { LocalizedText } from "@/lib/i18n";
import { cn, createWhatsAppUrl } from "@/lib/utils";

type WhatsAppLinkProps = {
  phone?: string;
  message: string | LocalizedText;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "outline";
};

const variants = {
  primary: "bg-emerald-700 text-white hover:bg-emerald-800",
  light: "bg-white text-zinc-950 hover:bg-amber-50",
  outline: "border border-black/10 bg-white text-zinc-950 hover:border-emerald-700 hover:text-emerald-800",
};

export function WhatsAppLink({
  phone = SITE_CONFIG.whatsappNumber,
  message,
  children,
  className,
  variant = "primary",
}: WhatsAppLinkProps) {
  const { t, tx } = useTranslation();
  const translatedMessage = typeof message === "string" ? message : tx(message);

  return (
    <a
      href={createWhatsAppUrl(phone, translatedMessage)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition",
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children ?? t("contactWhatsApp")}
    </a>
  );
}
