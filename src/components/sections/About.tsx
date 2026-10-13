import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";

type AboutProps = {
  locale: Locale;
  dict: Dictionary;
  showMoreLink?: boolean;
};

export function About({ locale, dict, showMoreLink = true }: AboutProps) {
  return (
    <section id="about" className="bg-[#242424] text-white">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden bg-[#1a1a1a]">
          <Image
            className="object-cover object-[center_20%]"
            src={company.founderImage}
            alt={`${dict.founder.name}, ${dict.founder.role}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-0 right-0 bg-[#d5222a] p-8 lg:p-10">
            <strong className="block font-heading text-5xl">100%</strong>
            <span className="text-xs uppercase tracking-[0.2em]">
              {dict.about.badge}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-20 lg:px-20">
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 className="section-title max-w-xl">
            {dict.about.titleLine1}
            <br />
            {dict.about.titleLine2}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/60">
            {dict.about.text}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/15 pt-8">
            <div>
              <b className="font-heading text-3xl">{dict.about.value1}</b>
              <span className="mt-1 block text-xs text-white/45">
                {dict.about.value1Text}
              </span>
            </div>
            <div>
              <b className="font-heading text-3xl">{dict.about.value2}</b>
              <span className="mt-1 block text-xs text-white/45">
                {dict.about.value2Text}
              </span>
            </div>
          </div>
          {showMoreLink ? (
            <Link
              href={pathFor(locale, "about")}
              className="group mt-10 inline-flex w-fit items-center gap-4 text-sm font-bold transition hover:text-[#ff3b42]"
            >
              {dict.about.more}
              <span className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
