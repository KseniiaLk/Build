import type { Locale } from "./config";

export const routeKeys = ["home", "services", "about", "contact"] as const;

export type RouteKey = (typeof routeKeys)[number];

export const publicSegments: Record<Locale, Record<RouteKey, string>> = {
  sv: {
    home: "",
    services: "tjanster",
    about: "om-oss",
    contact: "kontakt",
  },
  en: {
    home: "",
    services: "services",
    about: "about",
    contact: "contact",
  },
};

/** Internal App Router folder names (always English). */
export const internalSegments: Record<Exclude<RouteKey, "home">, string> = {
  services: "services",
  about: "about",
  contact: "contact",
};

export function pathFor(locale: Locale, route: RouteKey = "home") {
  const segment = publicSegments[locale][route];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getRouteFromSegment(segment: string | undefined): RouteKey {
  if (!segment) return "home";

  for (const locale of Object.keys(publicSegments) as Locale[]) {
    for (const route of routeKeys) {
      if (publicSegments[locale][route] === segment) {
        return route;
      }
    }
  }

  if (segment in internalSegments) {
    return segment as Exclude<RouteKey, "home">;
  }

  return "home";
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  const segment = parts[1];
  const route = getRouteFromSegment(segment);
  return pathFor(nextLocale, route);
}

export function getInternalPathname(locale: Locale, route: RouteKey) {
  if (route === "home") return `/${locale}`;
  return `/${locale}/${internalSegments[route]}`;
}
