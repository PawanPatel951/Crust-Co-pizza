
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fff7e8]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 animate-pulse rounded-full bg-[#d9a441]/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#7d2027]/5 blur-3xl" />

      <div className="mx-auto grid min-h-[600px] max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20 lg:gap-14">
        {/* Left Content */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-center md:text-left"
        >
          <span className="mb-5 inline-flex animate-[fadeInUp_0.8s_ease-out] items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#d9a441]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7d2027] sm:text-sm">
            <span aria-hidden="true" className="text-[#d9a441]">
              ✦
            </span>
            Freshly baked, always loved
          </span>

          <h1 className="animate-[fadeInUp_0.9s_ease-out] font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#30221e] sm:text-5xl lg:text-6xl xl:text-7xl">
            A Slice of
            <span className="mt-2 block text-[#7d2027]">
              Happiness.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#766861] sm:text-lg md:mx-0"
          >
            Handcrafted with fresh ingredients, rich flavours, and
            a perfectly golden crust. Your next favourite pizza
            is waiting at Crust & Co.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
           
<a
  href="/menu"
  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#7d2027] px-7 py-4 font-bold text-white shadow-lg shadow-[#7d2027]/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#59171d] hover:shadow-xl hover:shadow-[#7d2027]/25 focus:outline-none focus:ring-2 focus:ring-[#d9a441] focus:ring-offset-2 active:translate-y-0"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>

  Add to Cart

  <span
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-x-1.5"
  >
    →
  </span>
</a>


            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-[#7d2027]/25 px-7 py-4 font-bold text-[#7d2027] transition-all duration-300 hover:-translate-y-1 hover:border-[#7d2027] hover:bg-[#7d2027]/5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#d9a441] focus:ring-offset-2"
            >
              Our Story
            </a>
          </div>

          {/* Highlights */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-[#eadfce] pt-6 md:justify-start"
          >
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <p className="font-serif text-2xl font-bold text-[#7d2027]">
                100%
              </p>
              <p className="text-xs font-medium text-[#766861]">
                Fresh Ingredients
              </p>
            </div>

            <div className="hidden h-10 w-px bg-[#eadfce] sm:block" />

            <div className="transition-transform duration-300 hover:-translate-y-1">
              <p className="font-serif text-2xl font-bold text-[#7d2027]">
                Made
              </p>
              <p className="text-xs font-medium text-[#766861]">
                With Passion
              </p>
            </div>
          </div>
        </div>

        {/* Right Pizza Image */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute inset-5 animate-pulse rounded-full bg-[#d9a441]/20 blur-3xl" />

          {/* Floating Pizza */}
          <div className="relative animate-float-pizza">
            <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white shadow-2xl shadow-[#7d2027]/10 ring-1 ring-[#eadfce] transition-transform duration-700 hover:rotate-2">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
                alt="Freshly baked artisan pizza topped with delicious ingredients"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Floating Love Badge */}
          <div className="absolute -bottom-2 left-0 animate-[fadeInUp_1s_ease-out] rounded-2xl border border-[#eadfce] bg-white px-5 py-4 shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:bottom-6 sm:-left-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#766861]">
              The perfect bite
            </p>
            <p className="mt-1 font-serif text-lg font-bold text-[#7d2027]">
              Made with love ♥
            </p>
          </div>

          {/* Fresh Daily Badge */}
          <div className="absolute -right-1 top-5 flex h-16 w-16 animate-[fadeInUp_1.2s_ease-out] items-center justify-center rounded-full bg-[#d9a441] text-center text-xs font-extrabold uppercase leading-tight text-[#30221e] shadow-lg transition-transform duration-300 hover:rotate-12 hover:scale-110 sm:-right-3 sm:top-10">
            <span>
              Fresh
              <br />
              Daily
            </span>
          </div>

          {/* Decorative Dots */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 bottom-20 grid grid-cols-3 gap-2 opacity-60 sm:-right-8"
          >
            {Array.from({ length: 9 }, (_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-[#d9a441]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
