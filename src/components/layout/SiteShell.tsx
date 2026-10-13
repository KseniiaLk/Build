import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
  dict: Dictionary;
  headerVariant?: "overlay" | "solid";
};

export function SiteShell({
  children,
  locale,
  dict,
  headerVariant = "solid",
}: SiteShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f2f2f0] text-[#202020]">
      <Header locale={locale} dict={dict} variant={headerVariant} />
      {children}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
