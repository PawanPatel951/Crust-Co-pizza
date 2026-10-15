
import PizzaGrid from "../pizza/PizzaGrid";

export default function FeaturedPizzas() {
  return (
    <section
      id="menu"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#7d2027]"
            >
              From our oven
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-3 font-serif text-3xl font-bold text-[#30221e] sm:text-4xl lg:text-5xl"
            >
              Our Signature Pizzas
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 max-w-xl text-base leading-7 text-[#766861]"
            >
              Discover handcrafted favourites made with delicious
              toppings, fresh ingredients and a perfectly baked crust.
            </p>
          </div>

         
<a
  href="/menu"
  data-aos="fade-left"
  data-aos-delay="250"
  className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#7d2027]/20 px-5 py-3 font-bold text-[#7d2027] transition-all duration-300 hover:-translate-y-1 hover:border-[#7d2027] hover:bg-[#7d2027] hover:text-white hover:shadow-lg"
>
  View All Pizzas
  <span
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
</a>

        </div>

        {/* Animated Pizza Grid */}
        <div data-aos="fade-up" data-aos-delay="100">
          <PizzaGrid />
        </div>
      </div>
    </section>
  );
}
