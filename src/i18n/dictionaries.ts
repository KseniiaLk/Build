import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    services: string;
    about: string;
    contact: string;
    openMenu: string;
    homeAria: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    cta: string;
    text: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    items: { number: string; title: string; text: string }[];
  };
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
    badge: string;
    value1: string;
    value1Text: string;
    value2: string;
    value2Text: string;
    more: string;
    imageAlt: string;
  };
  founder: {
    eyebrow: string;
    homeTitle: string;
    pageTitle: string;
    name: string;
    role: string;
    bio: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { number: string; title: string; text: string }[];
  };
  contactBand: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  pages: {
    about: { eyebrow: string; title: string; text: string };
    services: { eyebrow: string; title: string; text: string };
    contact: {
      eyebrow: string;
      title: string;
      text: string;
      sideEyebrow: string;
      sideTitle: string;
      sideText: string;
      email: string;
      phone: string;
      cta: string;
    };
  };
  footer: {
    org: string;
  };
};

const sv: Dictionary = {
  meta: {
    homeTitle: "Valdor Entreprenad AB",
    homeDescription:
      "Pålitlig byggentreprenad med hög finish, tydlig kommunikation och ansvar från idé till färdigt resultat.",
    servicesTitle: "Tjänster | Valdor Entreprenad AB",
    servicesDescription:
      "Nybyggnation, renovering, tillbyggnad, kök & badrum, tak & fasad och markarbete — allt inom bygg.",
    aboutTitle: "Om oss | Valdor Entreprenad AB",
    aboutDescription:
      "Lär känna Valdor Entreprenad AB — raka besked, starkt hantverk och ansvar från idé till färdigt resultat.",
    contactTitle: "Kontakt | Valdor Entreprenad AB",
    contactDescription:
      "Kontakta Valdor Entreprenad AB för kostnadsfri offert och rådgivning kring ditt byggprojekt.",
  },
  nav: {
    services: "Tjänster",
    about: "Om oss",
    contact: "Kontakta oss",
    openMenu: "Öppna meny",
    homeAria: "Valdor startsida",
  },
  hero: {
    eyebrow: "Byggt för att hålla",
    titleLine1: "Vi bygger",
    titleLine2: "din vision.",
    cta: "Starta ditt projekt",
    text: "Pålitlig byggentreprenad med hög finish, tydlig kommunikation och ansvar från idé till färdigt resultat.",
    imageAlt: "Modern villa med samtida arkitektur",
  },
  services: {
    eyebrow: "Våra tjänster",
    title: "Allt inom bygg.",
    text: "Oavsett om du planerar nytt, bygger om eller behöver hjälp med en specifik del ser vi till att arbetet blir rätt utfört.",
    items: [
      {
        number: "01",
        title: "Nybyggnation",
        text: "Kompletta husprojekt från grundarbete till sista detalj, med en trygg kontakt genom hela bygget.",
      },
      {
        number: "02",
        title: "Renovering",
        text: "Genomtänkta renoveringar av villor, lägenheter och lokaler med respekt för befintliga material.",
      },
      {
        number: "03",
        title: "Tillbyggnad",
        text: "Mer plats för livet. Vi bygger ut och anpassar fastigheten efter dina nya behov.",
      },
      {
        number: "04",
        title: "Kök & badrum",
        text: "Funktionella rum med hållbara ytskikt, noggrant utförande och kvalitet i varje anslutning.",
      },
      {
        number: "05",
        title: "Tak & fasad",
        text: "Täta, energieffektiva lösningar som skyddar huset och ger det ett starkare uttryck.",
      },
      {
        number: "06",
        title: "Markarbete",
        text: "Schaktning, dränering, plattläggning och förberedelser för en stabil grund.",
      },
    ],
  },
  about: {
    eyebrow: "Valdor Entreprenad AB",
    titleLine1: "Raka besked.",
    titleLine2: "Starkt hantverk.",
    text: "För oss handlar ett lyckat bygge lika mycket om förtroende som om precision. Vi planerar noggrant, håller dig uppdaterad och lämnar inget åt slumpen.",
    badge: "Engagemang",
    value1: "TRYGGT",
    value1Text: "Ansvar hela vägen",
    value2: "LOKALT",
    value2Text: "Nära våra kunder",
    more: "Läs mer om oss",
    imageAlt: "Modern byggnad i betong",
  },
  founder: {
    eyebrow: "Möt oss",
    homeTitle: "Personen bakom bygget.",
    pageTitle: "Ansvar från start till mål.",
    name: "Grundare",
    role: "Valdor Entreprenad AB",
    bio: "Med engagemang för riktigt hantverk och tydlig dialog leder vi varje projekt från första samtal till slutbesiktning.",
  },
  process: {
    eyebrow: "Så arbetar vi",
    title: "En enkel väg framåt.",
    steps: [
      {
        number: "01",
        title: "Vi lyssnar",
        text: "Vi går igenom dina idéer, behov, tidsram och budget på plats eller per telefon.",
      },
      {
        number: "02",
        title: "Vi planerar",
        text: "Du får ett tydligt upplägg och offert. Vi samordnar material och alla yrkesgrupper.",
      },
      {
        number: "03",
        title: "Vi bygger",
        text: "Arbetet utförs effektivt och noggrant, med löpande dialog fram till slutkontroll.",
      },
    ],
  },
  contactBand: {
    eyebrow: "Har du ett projekt på gång?",
    title: "Låt oss bygga det.",
    cta: "Begär kostnadsfri offert",
  },
  pages: {
    about: {
      eyebrow: "Om oss",
      title: "Raka besked. Starkt hantverk.",
      text: "Vi bygger med precision, håller dig uppdaterad och tar ansvar hela vägen — från första idé till slutkontroll.",
    },
    services: {
      eyebrow: "Våra tjänster",
      title: "Allt inom bygg.",
      text: "Oavsett om du planerar nytt, bygger om eller behöver hjälp med en specifik del ser vi till att arbetet blir rätt utfört.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Låt oss bygga det.",
      text: "Berätta om ditt projekt — vi återkommer med raka besked och en tydlig plan framåt.",
      sideEyebrow: "Hör av dig",
      sideTitle: "Vi tar samtalet vidare.",
      sideText:
        "Ring eller mejla så går vi igenom dina idéer, tidsram och budget. Du får en kostnadsfri offert utan förpliktelser.",
      email: "E-post",
      phone: "Telefon",
      cta: "Begär kostnadsfri offert",
    },
  },
  footer: {
    org: "Org.nr",
  },
};

const en: Dictionary = {
  meta: {
    homeTitle: "Valdor Entreprenad AB",
    homeDescription:
      "Reliable construction contracting with a high finish, clear communication and accountability from idea to completed result.",
    servicesTitle: "Services | Valdor Entreprenad AB",
    servicesDescription:
      "New builds, renovations, extensions, kitchens & bathrooms, roofs & facades and groundwork — everything in construction.",
    aboutTitle: "About us | Valdor Entreprenad AB",
    aboutDescription:
      "Get to know Valdor Entreprenad AB — straight answers, strong craftsmanship and ownership from idea to finished result.",
    contactTitle: "Contact | Valdor Entreprenad AB",
    contactDescription:
      "Contact Valdor Entreprenad AB for a free quote and advice on your construction project.",
  },
  nav: {
    services: "Services",
    about: "About us",
    contact: "Contact us",
    openMenu: "Open menu",
    homeAria: "Valdor home",
  },
  hero: {
    eyebrow: "Built to last",
    titleLine1: "We build",
    titleLine2: "your vision.",
    cta: "Start your project",
    text: "Reliable construction contracting with a high finish, clear communication and accountability from idea to completed result.",
    imageAlt: "Modern villa with contemporary architecture",
  },
  services: {
    eyebrow: "Our services",
    title: "Everything in construction.",
    text: "Whether you are planning something new, renovating or need help with a specific part, we make sure the work is done right.",
    items: [
      {
        number: "01",
        title: "New builds",
        text: "Complete house projects from groundwork to the final detail, with one trusted contact throughout the build.",
      },
      {
        number: "02",
        title: "Renovation",
        text: "Thoughtful renovations of houses, apartments and commercial spaces with respect for existing materials.",
      },
      {
        number: "03",
        title: "Extensions",
        text: "More space for life. We extend and adapt the property to your new needs.",
      },
      {
        number: "04",
        title: "Kitchen & bathroom",
        text: "Functional rooms with durable finishes, careful craftsmanship and quality in every connection.",
      },
      {
        number: "05",
        title: "Roof & facade",
        text: "Tight, energy-efficient solutions that protect the house and give it a stronger expression.",
      },
      {
        number: "06",
        title: "Groundwork",
        text: "Excavation, drainage, paving and preparation for a stable foundation.",
      },
    ],
  },
  about: {
    eyebrow: "Valdor Entreprenad AB",
    titleLine1: "Straight answers.",
    titleLine2: "Strong craft.",
    text: "For us, a successful build is as much about trust as precision. We plan carefully, keep you updated and leave nothing to chance.",
    badge: "Commitment",
    value1: "SECURE",
    value1Text: "Responsibility all the way",
    value2: "LOCAL",
    value2Text: "Close to our clients",
    more: "Read more about us",
    imageAlt: "Modern concrete building",
  },
  founder: {
    eyebrow: "Meet us",
    homeTitle: "The person behind the build.",
    pageTitle: "Ownership from start to finish.",
    name: "Founder",
    role: "Valdor Entreprenad AB",
    bio: "With a commitment to real craftsmanship and clear dialogue, we lead every project from the first conversation to final inspection.",
  },
  process: {
    eyebrow: "How we work",
    title: "A simple path forward.",
    steps: [
      {
        number: "01",
        title: "We listen",
        text: "We go through your ideas, needs, timeline and budget on site or by phone.",
      },
      {
        number: "02",
        title: "We plan",
        text: "You get a clear outline and quote. We coordinate materials and all trades.",
      },
      {
        number: "03",
        title: "We build",
        text: "The work is carried out efficiently and carefully, with ongoing dialogue through final inspection.",
      },
    ],
  },
  contactBand: {
    eyebrow: "Got a project underway?",
    title: "Let’s build it.",
    cta: "Request a free quote",
  },
  pages: {
    about: {
      eyebrow: "About us",
      title: "Straight answers. Strong craft.",
      text: "We build with precision, keep you updated and take responsibility all the way — from the first idea to final inspection.",
    },
    services: {
      eyebrow: "Our services",
      title: "Everything in construction.",
      text: "Whether you are planning something new, renovating or need help with a specific part, we make sure the work is done right.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build it.",
      text: "Tell us about your project — we will get back with straight answers and a clear plan forward.",
      sideEyebrow: "Get in touch",
      sideTitle: "Let’s continue the conversation.",
      sideText:
        "Call or email and we will go through your ideas, timeline and budget. You get a free quote with no obligation.",
      email: "Email",
      phone: "Phone",
      cta: "Request a free quote",
    },
  },
  footer: {
    org: "Org. no.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  sv,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
