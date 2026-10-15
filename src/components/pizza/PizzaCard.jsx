import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function PizzaCard({ pizza }) {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const cartItem = cartItems.find((item) => item.id === pizza.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleAddToCart = () => {
    addToCart(pizza);
    setAdded(true);

    // Button text ko kuch der baad normal kar dein
    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <article
      data-aos="zoom-in-up"
      data-aos-duration="700"
      className="group relative overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#d9a441]/70 hover:shadow-[0_20px_45px_rgba(89,23,29,0.16)]"
    >
      {/* Pizza Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4e8d4]">
        <img
          src={pizza.image}
          alt={pizza.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#30221e]/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Bestseller Badge */}
        {pizza.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#7d2027] px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#59171d]">
            {pizza.badge}
          </span>
        )}

        {/* Rating */}
        {pizza.rating != null && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-[#30221e] shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <span className="text-[#d9a441]" aria-hidden="true">
              ★
            </span>
            {pizza.rating}
          </span>
        )}

        {/* Category Label */}
        <span className="absolute bottom-3 left-3 translate-y-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-xs font-bold text-[#59171d] opacity-0 shadow-md backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {pizza.category} Pizza
        </span>
      </div>

      {/* Pizza Details */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-bold text-[#30221e] transition-colors duration-300 group-hover:text-[#7d2027]">
            {pizza.name}
          </h3>

          <span className="shrink-0 rounded-full bg-[#e8f5e9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#28733c]">
            {pizza.category}
          </span>
        </div>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#766861]">
          {pizza.description}
        </p>

        {/* Price & Add to Cart */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eadfce] pt-4">
          <div>
            <span className="block text-xs font-medium text-[#766861]">
              Price
            </span>

            <p className="mt-1 origin-left text-2xl font-extrabold text-[#7d2027] transition-transform duration-300 group-hover:scale-105">
              ₹{Number(pizza.price).toLocaleString("en-IN")}
            </p>

            {quantity > 0 && (
              <span className="mt-1 block text-xs font-semibold text-[#28733c]">
                In cart: {quantity}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`group/button inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d9a441] focus:ring-offset-2 active:translate-y-0 sm:px-4 ${
              added
                ? "bg-[#28733c]"
                : "bg-[#7d2027] hover:bg-[#59171d]"
            }`}
            aria-label={`Add ${pizza.name} to cart`}
          >
            {added ? (
              <>
                <span aria-hidden="true">✓</span>
                Added
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2 2h2l2.6 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 7H5" />
                </svg>

                Add to Cart

                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover/button:translate-x-1"
                >
                  →
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Gold Bottom Accent */}
      <div className="h-1 w-full origin-left scale-x-0 bg-[#d9a441] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}
