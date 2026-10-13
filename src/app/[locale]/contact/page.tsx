import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/data/company";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = getDictionary(localeParam);

  return (
    <SiteShell locale={localeParam} dict={dict}>
      <main>
        <PageHero
          eyebrow={dict.pages.contact.eyebrow}
          title={dict.pages.contact.title}
          text={dict.pages.contact.text}
        />
        <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-12 border border-[#d3d3cf] bg-white p-8 md:grid-cols-2 lg:p-14">
            <div>
              <p className="eyebrow">{dict.pages.contact.sideEyebrow}</p>
              <h2 className="font-heading text-4xl font-bold uppercase leading-none">
                {dict.pages.contact.sideTitle}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#686868]">
                {dict.pages.contact.sideText}
              </p>
            </div>
            <div className="grid gap-8 self-end">
              <div className="border-t border-[#d3d3cf] pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5222a]">
                  {dict.pages.contact.email}
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 block font-heading text-2xl font-bold uppercase transition hover:text-[#d5222a]"
                >
                  {company.email}
                </a>
              </div>
              <div className="border-t border-[#d3d3cf] pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5222a]">
                  {dict.pages.contact.phone}
                </span>
                <a
                  href={company.phoneHref}
                  className="mt-3 block font-heading text-2xl font-bold uppercase transition hover:text-[#d5222a]"
                >
                  {company.phone}
                </a>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="group mt-2 flex w-fit items-center gap-10 bg-[#d5222a] px-7 py-5 text-sm font-bold text-white transition hover:bg-[#b9141b]"
              >
                {dict.pages.contact.cta}
                <span className="text-xl transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
