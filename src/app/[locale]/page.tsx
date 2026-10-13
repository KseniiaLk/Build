import { SiteShell } from "@/components/layout";
import {
  About,
  Contact,
  Hero,
  Process,
  Services,
} from "@/components/sections";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = getDictionary(localeParam);

  return (
    <SiteShell locale={localeParam} dict={dict} headerVariant="overlay">
      <main>
        <Hero locale={localeParam} dict={dict} />
        <Services dict={dict} />
        <About locale={localeParam} dict={dict} />
        <Process dict={dict} />
        <Contact dict={dict} ctaHref={pathFor(localeParam, "contact")} />
      </main>
    </SiteShell>
  );
}
