import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const money = (amount) =>
    `₹${Number(amount || 0).toLocaleString("en-IN")}`;

export default function Cart() {
    const {
        cartItems,
        itemCount,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    return (
<main className="min-h-screen bg-[#fff7e8] px-4 pt-4 pb-10 sm:px-6 sm:pt-5 lg:pt-6 lg:pb-12">            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-32 top-32 -z-0 h-80 w-80 rounded-full bg-[#d9a441]/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 top-[600px] -z-0 h-80 w-80 rounded-full bg-[#7d2027]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Page heading */}
                <motion.header
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-10 md:mb-14"
                >
                    <div className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#7d2027]">
                        <span className="h-0.5 w-8 bg-[#d9a441]" />
                        Crust & Co. · Made with love
                    </div>

                    <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                        Your Cart<span className="text-[#7d2027]">.</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#766861] sm:text-base">
                        Your favourite pizzas are waiting for you.
                        Review your order and get ready for a delicious experience.
                    </p>
                </motion.header>

                {cartItems.length === 0 ? (
                    /* Empty cart */
                    <motion.section
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-3xl border border-[#7d2027]/10 bg-white/80 px-5 py-16 text-center shadow-xl shadow-[#30221e]/5 sm:py-24"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0], rotate: [0, -4, 4, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#7d2027]/10 text-5xl"
                        >
                            🍕
                        </motion.div>

                        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                            Your cart is hungry!
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#766861]">
                            You haven't added any pizzas yet. Explore our menu and find
                            something delicious.
                        </p>

                        <Link
                            to="/menu"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#7d2027] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#7d2027]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#59171d] hover:shadow-xl"
                        >
                            Explore Our Menu <span>→</span>
                        </Link>
                    </motion.section>
                ) : (
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-10">
                        {/* Cart items */}
                        <section>
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                                        Your Favourites
                                    </h2>
                                    <p className="mt-2 text-sm text-[#766861]">
                                        {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={clearCart}
                                    className="rounded-full border border-[#7d2027]/20 px-4 py-2.5 text-xs font-bold text-[#7d2027] transition hover:border-[#7d2027] hover:bg-[#7d2027] hover:text-white sm:text-sm"
                                >
                                    Clear Cart
                                </button>
                            </div>

                            <div className="space-y-5">
                                <AnimatePresence initial={false}>
                                    {cartItems.map((pizza) => (
                                        <motion.article
                                            key={pizza.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -25, height: 0 }}
                                            transition={{ duration: 0.28 }}
                                            className="group rounded-3xl border border-[#7d2027]/10 bg-white/90 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d9a441]/70 hover:shadow-xl hover:shadow-[#30221e]/5 sm:p-5"
                                        >
                                            <div className="flex flex-col gap-5 sm:flex-row">
                                                {/* Pizza image */}
                                                <div className="relative h-52 shrink-0 overflow-hidden rounded-2xl bg-[#f1e4d2] sm:h-44 sm:w-44">
                                                    {pizza.image ? (
                                                        <img
                                                            src={pizza.image}
                                                            alt={pizza.name}
                                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center text-6xl">
                                                            🍕
                                                        </div>
                                                    )}

                                                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#7d2027] shadow">
                                                        Freshly made
                                                    </span>
                                                </div>

                                                {/* Pizza information */}
                                                <div className="flex min-w-0 flex-1 flex-col">
                                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7d2027]">
                                                        {pizza.category || "Pizza"}
                                                    </span>

                                                    <h3 className="mt-2 break-words font-serif text-2xl font-bold sm:text-3xl">
                                                        {pizza.name}
                                                    </h3>

                                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#766861]">
                                                        {pizza.description ||
                                                            "Delicious pizza prepared with fresh ingredients."}
                                                    </p>

                                                    <p className="mt-3 text-lg font-extrabold text-[#7d2027]">
                                                        {money(pizza.price)}
                                                        <span className="ml-1 text-xs font-medium text-[#766861]">
                                                            / pizza
                                                        </span>
                                                    </p>

                                                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
                                                        {/* Quantity */}
                                                        <div className="flex items-center overflow-hidden rounded-full border border-[#7d2027]/15 bg-[#fff7e8]">
                                                            <button
                                                                type="button"
                                                                aria-label={`Decrease ${pizza.name} quantity`}
                                                                onClick={() => decreaseQuantity(pizza.id)}
                                                                className="flex h-10 w-10 items-center justify-center text-xl font-semibold transition hover:bg-[#7d2027] hover:text-white"
                                                            >
                                                                −
                                                            </button>

                                                            <span className="min-w-9 text-center text-sm font-extrabold">
                                                                {pizza.quantity}
                                                            </span>

                                                            <button
                                                                type="button"
                                                                aria-label={`Increase ${pizza.name} quantity`}
                                                                onClick={() => increaseQuantity(pizza.id)}
                                                                className="flex h-10 w-10 items-center justify-center text-xl font-semibold transition hover:bg-[#7d2027] hover:text-white"
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => removeFromCart(pizza.id)}
                                                            className="inline-flex items-center gap-2 text-xs font-bold text-[#766861] transition hover:text-red-700 sm:text-sm"
                                                        >
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.7"
                                                                className="h-4 w-4"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3" />
                                                            </svg>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Item subtotal */}
                                                <div className="flex items-center justify-between border-t border-[#7d2027]/10 pt-4 sm:min-w-28 sm:flex-col sm:items-end sm:border-0 sm:pt-1">
                                                    <span className="text-xs text-[#766861]">
                                                        Item total
                                                    </span>
                                                    <span className="text-lg font-extrabold sm:mt-2 sm:text-xl">
                                                        {money(Number(pizza.price) * pizza.quantity)}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/menu"
                                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7d2027] transition hover:gap-4"
                            >
                                <span>←</span> Continue Shopping
                            </Link>
                        </section>

                        {/* Order summary */}
                        <motion.aside
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="rounded-3xl bg-[#59171d] p-6 text-white shadow-2xl shadow-[#59171d]/20 sm:p-8 lg:sticky lg:top-28"
                        >
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#f0c66e]">
                                A delicious choice
                            </span>

                            <h2 className="mt-3 font-serif text-3xl font-bold">
                                Order Summary
                            </h2>

                            <p className="mt-2 text-sm text-white/65">
                                Your order, your favourites.
                            </p>

                            <div className="my-7 border-t border-dashed border-white/20" />

                            <div className="space-y-5">
                                <div className="flex items-center justify-between gap-3 text-sm">
                                    <span className="text-white/70">
                                        Items ({itemCount})
                                    </span>
                                    <span className="font-bold">{money(totalPrice)}</span>
                                </div>

                                <div className="flex items-start justify-between gap-3 text-sm">
                                    <span className="text-white/70">Delivery charges</span>
                                    <span className="text-right text-xs font-semibold text-[#f0c66e]">
                                        Calculated at checkout
                                    </span>
                                </div>
                            </div>

                            <div className="my-7 border-t border-dashed border-white/20" />

                            <div className="flex items-end justify-between gap-3">
                                <div>
                                    <p className="text-sm text-white/70">Subtotal</p>
                                    <p className="mt-1 text-xs text-white/50">
                                        Before delivery charges
                                    </p>
                                </div>

                                <motion.span
                                    key={totalPrice}
                                    initial={{ scale: 1.12 }}
                                    animate={{ scale: 1 }}
                                    className="font-serif text-3xl font-bold text-[#f0c66e]"
                                >
                                    {money(totalPrice)}
                                </motion.span>
                            </div>


                            
<Link
  to="/checkout"
  className="mt-6 block w-full rounded-full bg-[#d9a441] px-6 py-4 text-center font-bold text-[#30221e] shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#c18b2c] hover:shadow-lg"
>
  Proceed to Checkout →
</Link>



                            <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-white/65">
                                <span className="text-[#f0c66e]">✦</span>
                                Freshly made. Always delicious.
                            </div>
                        </motion.aside>
                    </div>
                )}
            </div>
        </main>
    );
}
