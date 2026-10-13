"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pathFor } from "@/i18n/paths";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
  variant?: "overlay" | "solid";
};

export function Header({ locale, dict, variant = "solid" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isOverlay = variant === "overlay";

  const navItems = [
    { href: pathFor(locale, "services"), label: dict.nav.services },
    { href: pathFor(locale, "about"), label: dict.nav.about },
  ];
  const contactHref = pathFor(locale, "contact");

  return (
    <header
      className={
        isOverlay
          ? "absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white"
          : "relative z-30 border-b border-white/10 bg-[#1e1e1e] text-white"
      }
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          href={pathFor(locale)}
          className="flex items-center gap-3"
          aria-label={dict.nav.homeAria}
        >
          <span className="grid h-10 w-10 place-items-center bg-[#d5222a] font-heading text-2xl font-bold">
            V
          </span>
          <span className="leading-none">
            <b className="font-heading text-xl tracking-[0.08em]">
              {company.name}
            </b>
            <small className="mt-1 block text-[9px] tracking-[0.28em] text-white/70">
              {company.tagline}
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="transition hover:text-[#ff3b42]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
          <Link
            className="border border-white/50 px-5 py-3 transition hover:border-[#d5222a] hover:bg-[#d5222a]"
            href={contactHref}
          >
            {dict.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="grid h-11 w-11 place-content-center gap-1.5 border border-white/40"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={dict.nav.openMenu}
            aria-expanded={menuOpen}
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="grid gap-4 border-t border-white/20 bg-[#202020] px-6 py-6 text-sm font-semibold lg:hidden">
          {[...navItems, { href: contactHref, label: dict.nav.contact }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
