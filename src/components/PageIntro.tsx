import { Badge } from "@/components/Badge";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-black/10 bg-[#0b0b08] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Badge variant="gold">{eyebrow}</Badge>
        <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
