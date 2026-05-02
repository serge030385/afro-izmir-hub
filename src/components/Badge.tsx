import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "border-black/10 bg-white text-zinc-800",
  green: "border-emerald-700/20 bg-emerald-50 text-emerald-800",
  gold: "border-amber-600/25 bg-amber-50 text-amber-800",
  red: "border-red-900/20 bg-red-50 text-red-900",
  dark: "border-white/10 bg-black text-white",
};

type BadgeProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
