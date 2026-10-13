import type { Dictionary } from "@/i18n/dictionaries";

type ServicesProps = {
  dict: Dictionary;
  hideIntro?: boolean;
};

export function Services({ dict, hideIntro = false }: ServicesProps) {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32"
    >
      {!hideIntro && (
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{dict.services.eyebrow}</p>
            <h2 className="section-title">{dict.services.title}</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#686868]">
            {dict.services.text}
          </p>
        </div>
      )}
      <div className="grid border-l border-t border-[#d3d3cf] md:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((service) => (
          <article
            key={service.number}
            className="service-card group border-b border-r border-[#d3d3cf] p-8 lg:p-10"
          >
            <span className="font-heading text-sm font-bold text-[#d5222a]">
              {service.number}
            </span>
            <div className="mt-14">
              <h3 className="font-heading text-3xl font-bold uppercase">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#6a6a6a]">
                {service.text}
              </p>
            </div>
            <span className="mt-9 block text-2xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
