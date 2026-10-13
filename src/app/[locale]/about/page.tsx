import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout";
import { Contact, Founder, Process } from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = getDictionary(localeParam);

  return (
    <SiteShell locale={localeParam} dict={dict}>
      <main>
        <PageHero
          eyebrow={dict.pages.about.eyebrow}
          title={dict.pages.about.title}
          text={dict.pages.about.text}
        />
        <Founder dict={dict} variant="page" />
        <Process dict={dict} />
        <Contact dict={dict} ctaHref={pathFor(localeParam, "contact")} />
      </main>
    </SiteShell>
  );
}
