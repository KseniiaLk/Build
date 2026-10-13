import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import {
  getInternalPathname,
  getRouteFromSegment,
  internalSegments,
  pathFor,
  publicSegments,
} from "@/i18n/paths";

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  return (
    locales.find((locale) => header.toLowerCase().includes(locale)) ??
    defaultLocale
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];

  if (!isLocale(maybeLocale ?? "")) {
    const locale = preferredLocale(request);
    const route = getRouteFromSegment(parts[0]);
    const url = request.nextUrl.clone();
    url.pathname = pathFor(locale, route);
    return NextResponse.redirect(url);
  }

  const locale = maybeLocale as Locale;
  const segment = parts[1];

  if (!segment) {
    return NextResponse.next();
  }

  const route = getRouteFromSegment(segment);
  if (route === "home") {
    return NextResponse.next();
  }

  const canonicalSegment = publicSegments[locale][route];
  const internalSegment = internalSegments[route];

  // /en/om-oss → /en/about, /sv/about → /sv/om-oss
  if (segment !== canonicalSegment) {
    const url = request.nextUrl.clone();
    url.pathname = pathFor(locale, route);
    return NextResponse.redirect(url);
  }

  // /sv/om-oss → rewrite to /sv/about (App Router folder)
  if (canonicalSegment !== internalSegment) {
    const url = request.nextUrl.clone();
    url.pathname = getInternalPathname(locale, route);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
