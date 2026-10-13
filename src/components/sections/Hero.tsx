import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1682681857663-7a5cf876ad1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=86&w=1800";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative flex min-h-[760px] items-end bg-[#272727]">
      <Image
        className="object-cover opacity-55"
        src={HERO_IMAGE}
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute bottom-0 right-0 h-52 w-24 bg-[#d5222a] max-md:hidden" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 text-white lg:px-12 lg:pb-28">
        <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.26em] text-white/75">
          <span className="h-px w-12 bg-[#ef3038]" /> {dict.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl font-heading text-[clamp(4.25rem,9vw,8.5rem)] font-bold uppercase leading-[0.78] tracking-[-0.035em]">
          {dict.hero.titleLine1}
          <br />
          <span className="text-[#ef3038]">{dict.hero.titleLine2}</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center">
          <Link
            className="group flex w-fit items-center gap-10 bg-[#d5222a] px-7 py-5 text-sm font-bold transition hover:bg-[#b9141b]"
            href={pathFor(locale, "contact")}
          >
            {dict.hero.cta}{" "}
            <span className="text-xl transition group-hover:translate-x-1">
              →
            </span>
          </Link>
          <p className="max-w-sm border-l border-white/30 pl-5 text-sm leading-6 text-white/75">
            {dict.hero.text}
          </p>
        </div>
      </div>
    </section>
  );
}
