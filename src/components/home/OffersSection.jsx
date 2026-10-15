
import offers from "../../data/offers";

export default function OffersSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-[#fff7e8] px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d9a441]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#7d2027]"
          >
            Something delicious awaits
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 font-serif text-3xl font-bold text-[#30221e] sm:text-4xl lg:text-5xl"
          >
            Special Offers & Deals
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-4 max-w-xl leading-7 text-[#766861]"
          >
            Great pizza tastes even better with a little extra happiness.
            Explore our special promotions.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer, index) => {
            const isBurgundy = offer.theme === "burgundy";

            return (
              <article
                key={offer.id}
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                data-aos-duration="850"
                className={`group relative isolate overflow-hidden rounded-3xl p-7 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl sm:p-10 ${
                  isBurgundy
                    ? "bg-[#7d2027] text-white hover:shadow-[#7d2027]/20"
                    : "bg-[#d9a441] text-[#30221e] hover:shadow-[#d9a441]/25"
                }`}
              >
                {/* Decorative Circle */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full border-[24px] border-white/10 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-12"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-16 -z-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-150"
                />

                <div className="relative z-10 flex flex-col items-start">
                  {/* Offer Label */}
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider transition-transform duration-300 group-hover:scale-105 ${
                      isBurgundy
                        ? "bg-white/15 text-white"
                        : "bg-black/10 text-[#30221e]"
                    }`}
                  >
                    <span aria-hidden="true" className="text-[#d9a441]">
                      ✦
                    </span>
                    {offer.label}
                  </span>

                  <div className="mt-6 flex w-full items-start justify-between gap-4">
                    <div>
                      <h3 className="max-w-sm font-serif text-2xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                        {offer.title}
                      </h3>

                      <p
                        className={`mt-4 max-w-sm text-sm leading-7 ${
                          isBurgundy
                            ? "text-white/80"
                            : "text-[#30221e]/80"
                        }`}
                      >
                        {offer.description}
                      </p>
                    </div>

                    {/* Animated Emoji */}
                    <span
                      className="shrink-0 text-4xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 sm:text-5xl"
                      aria-hidden="true"
                    >
                      {offer.emoji}
                    </span>
                  </div>

                  {/* Discount Box */}
                  <div
                    className={`mt-7 rounded-xl border border-dashed px-4 py-3 transition-all duration-300 group-hover:scale-[1.03] ${
                      isBurgundy
                        ? "border-white/50 bg-white/10 group-hover:bg-white/15"
                        : "border-[#30221e]/40 bg-white/20 group-hover:bg-white/30"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider">
                      Featured offer
                    </p>

                    <p className="mt-1 text-2xl font-extrabold">
                      {offer.discount}
                    </p>
                  </div>

                  {/* Code and CTA */}
                  <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs opacity-75">Offer code</p>

                      <p className="mt-1 font-mono text-lg font-bold tracking-widest">
                        {offer.code}
                      </p>
                    </div>

                    <a
                      href="#menu"
                      className={`group/button inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent active:translate-y-0 ${
                        isBurgundy
                          ? "bg-[#d9a441] text-[#30221e] hover:bg-[#efc36b]"
                          : "bg-[#7d2027] text-white hover:bg-[#59171d]"
                      }`}
                    >
                      Explore Menu
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Gold Accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white/70 transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#766861]">
          Sample promotional designs. Confirm actual discounts and terms
          before publishing.
        </p>
      </div>
    </section>
  );
}
