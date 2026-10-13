import type { Dictionary } from "@/i18n/dictionaries";

type ProcessProps = {
  dict: Dictionary;
};

export function Process({ dict }: ProcessProps) {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32"
    >
      <p className="eyebrow">{dict.process.eyebrow}</p>
      <h2 className="section-title">{dict.process.title}</h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {dict.process.steps.map((step) => (
          <div key={step.number} className="border-t-2 border-[#292929] pt-6">
            <span className="font-heading text-sm font-bold text-[#d5222a]">
              {step.number}
            </span>
            <h3 className="mt-7 font-heading text-3xl font-bold uppercase">
              {step.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#686868]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
