type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="bg-[#242424] pt-28 text-white lg:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-12 lg:pb-20">
        <p className="eyebrow !text-[#ef3038]">{eyebrow}</p>
        <h1 className="section-title max-w-4xl text-white">{title}</h1>
        {text ? (
          <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
