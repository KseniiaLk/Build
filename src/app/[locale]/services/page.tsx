import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout";
import { Contact, Services } from "@/components/sections";
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
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = getDictionary(localeParam);

  return (
    <SiteShell locale={localeParam} dict={dict}>
      <main>
        <PageHero
          eyebrow={dict.pages.services.eyebrow}
          title={dict.pages.services.title}
          text={dict.pages.services.text}
        />
        <Services dict={dict} hideIntro />
        <Contact dict={dict} ctaHref={pathFor(localeParam, "contact")} />
      </main>
    </SiteShell>
  );
}
