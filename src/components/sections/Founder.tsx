import Image from "next/image";
import { company } from "@/data/company";
import type { Dictionary } from "@/i18n/dictionaries";

type FounderProps = {
  dict: Dictionary;
  variant?: "home" | "page";
};

export function Founder({ dict, variant = "page" }: FounderProps) {
  const isHome = variant === "home";

  return (
    <section
      className={
        isHome ? "bg-[#f2f2f0]" : "border-t border-[#d3d3cf] bg-[#f2f2f0]"
      }
    >
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden bg-[#242424] lg:min-h-[640px]">
          <Image
            src={company.founderImage}
            alt={`${dict.founder.name}, ${dict.founder.role}`}
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={!isHome}
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-24">
          <p className="eyebrow">{dict.founder.eyebrow}</p>
          <h2 className="section-title max-w-xl">
            {isHome ? dict.founder.homeTitle : dict.founder.pageTitle}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-[#686868]">
            {dict.founder.bio}
          </p>
          <div className="mt-10 border-t border-[#d3d3cf] pt-8">
            <b className="font-heading text-3xl font-bold uppercase tracking-wide">
              {dict.founder.name}
            </b>
            <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-[#6a6a6a]">
              {dict.founder.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
