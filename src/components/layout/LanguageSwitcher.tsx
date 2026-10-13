"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em]">
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 ? <span className="text-white/30">/</span> : null}
          <Link
            href={switchLocalePath(pathname, item)}
            className={
              item === locale
                ? "text-white"
                : "text-white/45 transition hover:text-white"
            }
            hrefLang={item}
            aria-current={item === locale ? "page" : undefined}
          >
            {item.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
