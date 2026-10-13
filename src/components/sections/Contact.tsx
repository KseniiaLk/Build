import Link from "next/link";
import { company } from "@/data/company";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactProps = {
  dict: Dictionary;
  ctaHref?: string;
};

export function Contact({ dict, ctaHref }: ContactProps) {
  const href = ctaHref ?? `mailto:${company.email}`;
  const isExternal = href.startsWith("mailto:");

  const ctaClassName =
    "group flex min-w-fit items-center justify-between gap-14 border border-white/45 px-7 py-5 text-sm font-bold transition hover:bg-white hover:text-[#d5222a]";

  return (
    <section id="contact" className="bg-[#d5222a] text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-20 lg:flex-row lg:items-center lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
            {dict.contactBand.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-none md:text-7xl">
            {dict.contactBand.title}
          </h2>
        </div>
        {isExternal ? (
          <a href={href} className={ctaClassName}>
            {dict.contactBand.cta}{" "}
            <span className="text-xl transition group-hover:translate-x-1">
              →
            </span>
          </a>
        ) : (
          <Link href={href} className={ctaClassName}>
            {dict.contactBand.cta}{" "}
            <span className="text-xl transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
