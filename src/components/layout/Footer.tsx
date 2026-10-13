import Link from "next/link";
import { company } from "@/data/company";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const navItems = [
    { href: pathFor(locale, "services"), label: dict.nav.services },
    { href: pathFor(locale, "about"), label: dict.nav.about },
    { href: pathFor(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <footer className="bg-[#1e1e1e] px-6 py-12 text-white lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
        <div>
          <Link href={pathFor(locale)}>
            <b className="font-heading text-3xl tracking-wide">{company.name}</b>
          </Link>
          <p className="mt-2 text-xs tracking-[0.22em] text-white/45">
            {company.tagline}
          </p>
          <nav className="mt-6 flex flex-wrap gap-5 text-sm text-white/55">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grid gap-2 text-sm text-white/65 md:text-right">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={company.phoneHref}>{company.phone}</a>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1400px] justify-between text-[11px] text-white/35">
        <span>
          © {company.year} {company.legalName}
        </span>
        <span>
          {dict.footer.org} {company.orgNumber}
        </span>
      </div>
    </footer>
  );
}
