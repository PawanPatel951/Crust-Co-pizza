
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PizzaCard from "../components/pizza/PizzaCard";
import pizzas from "../data/pizzas";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(pizzas.map((pizza) => pizza.category).filter(Boolean)),
  ];

  const filteredPizzas = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return pizzas.filter((pizza) => {
      const matchesCategory =
        activeCategory === "All" || pizza.category === activeCategory;

      const matchesSearch = pizza.name
        .toLowerCase()
        .includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand px-5 py-16 text-center text-white md:py-24">
        {/* Back to Home */}
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6 md:left-10 md:top-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-gold hover:bg-gold hover:text-ink sm:px-5 sm:py-3"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
        </div>

        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div
          className="relative mx-auto max-w-3xl pt-12"
          data-aos="fade-up"
        >
          <span className="mb-5 inline-block rounded-full border border-gold/50 px-4 py-2 text-sm text-gold">
            FRESH • HANDCRAFTED • DELICIOUS
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Our Pizza <span className="text-gold">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
            Discover your favourites, made with delicious ingredients and
            plenty of love.
          </p>

          <a
            href="#all-pizzas"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-bold text-ink transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            Explore Pizzas
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* All Pizzas */}
      <section
        id="all-pizzas"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand">
            Made for pizza lovers
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Find Your Perfect Slice
          </h2>

          <p className="mt-3 text-ink/65">
            Choose a pizza and explore our menu.
          </p>
        </div>

        {/* Search */}
        <div
          className="mx-auto mb-7 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <label htmlFor="pizza-search" className="sr-only">
            Search pizzas
          </label>

          <input
            id="pizza-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search your favourite pizza..."
            className="w-full rounded-2xl border border-brand/15 bg-white px-5 py-4 text-ink outline-none transition placeholder:text-ink/45 focus:border-brand focus:ring-4 focus:ring-brand/10"
          />
        </div>

        {/* Category Filters */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? "border-brand bg-brand text-white shadow-lg shadow-brand/20"
                  : "border-brand/15 bg-white text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-5 text-sm text-ink/60" aria-live="polite">
          Showing {filteredPizzas.length}{" "}
          {filteredPizzas.length === 1 ? "pizza" : "pizzas"}
        </p>

        {/* Pizza Cards */}
        {filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPizzas.map((pizza, index) => (
              <div
                key={pizza.id ?? pizza.name}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 80, 400)}
                className="min-w-0"
              >
                <PizzaCard pizza={pizza} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="rounded-3xl border border-brand/10 bg-white px-6 py-16 text-center"
            data-aos="fade-up"
          >
            <span className="text-5xl" aria-hidden="true">
              🍕
            </span>

            <h3 className="mt-4 font-display text-2xl font-bold text-ink">
              No pizzas found
            </h3>

            <p className="mt-2 text-ink/65">
              Try another search or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-brand-dark"
            >
              Show All Pizzas
            </button>
          </div>
        )}

        {/* Back link at bottom */}
        <div className="mt-14 text-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-semibold text-brand transition hover:text-brand-dark"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
