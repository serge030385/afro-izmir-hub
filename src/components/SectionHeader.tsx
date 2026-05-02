import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
};

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 text-base leading-7 text-zinc-600">{description}</p> : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:border-emerald-700 hover:text-emerald-800"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
