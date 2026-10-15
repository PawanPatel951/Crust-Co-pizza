
const highlights = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description:
      "A focus on quality ingredients and delicious flavour combinations.",
  },
  {
    icon: "🍕",
    title: "Handcrafted Pizza",
    description:
      "Every pizza is prepared with care, from the crust to the toppings.",
  },
  {
    icon: "❤️",
    title: "Made with Passion",
    description:
      "Good food, warm moments and memorable slices shared together.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#d9a441]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[40px] border-l-4 border-t-4 border-[#d9a441] transition-all duration-500 group-hover:scale-105"
          />

          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
              alt="Freshly prepared artisan pizza"
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#30221e]/20 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          {/* Floating Brand Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute -bottom-5 -right-3 rounded-2xl bg-[#7d2027] p-5 text-white shadow-xl transition-transform duration-500 hover:-translate-y-2 sm:-right-5 sm:p-6"
          >
            <p className="font-serif text-2xl font-bold">
              Crust & Co.
            </p>

            <p className="mt-1 text-sm text-white/80">
              Crafted with love ♥
            </p>

            <div
              aria-hidden="true"
              className="mt-3 h-1 w-12 rounded-full bg-[#d9a441]"
            />
          </div>
        </div>

        {/* Story */}
        <div className="pt-4 lg:pt-0">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#7d2027]"
          >
            A little about us
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 font-serif text-3xl font-bold leading-tight text-[#30221e] sm:text-4xl lg:text-5xl"
          >
            Good Pizza.
            <span className="block text-[#7d2027]">
              Great Memories.
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 leading-8 text-[#766861]"
          >
            At Crust & Co., we believe pizza is more than a meal.
            It is a reason to gather, share stories and enjoy the
            little moments that make life special.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-4 leading-8 text-[#766861]"
          >
            Our vision is simple: delicious flavours, carefully
            prepared pizzas and a welcoming experience for every
            pizza lover.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-left"
                data-aos-delay={index * 120}
                className="group flex gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:translate-x-2 hover:border-[#eadfce] hover:bg-[#fff7e8]/70"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff7e8] text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7d2027] group-hover:shadow-md">
                  <span className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:grayscale">
                    {item.icon}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#30221e] transition-colors duration-300 group-hover:text-[#7d2027]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#766861]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            data-aos="fade-up"
            data-aos-delay="250"
            href="#contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#7d2027] px-7 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#59171d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#d9a441] focus:ring-offset-2 active:translate-y-0"
          >
            Get in Touch
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
