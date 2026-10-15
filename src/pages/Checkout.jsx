import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const { cartItems, totalPrice, clearCart } = useCart();

  const [isPlacing, setIsPlacing] = useState(false);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [pincodeMessage, setPincodeMessage] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const [errors, setErrors] = useState({});

  const deliveryCharge = totalPrice >= 499 ? 0 : 40;
  const grandTotal = totalPrice + deliveryCharge;

  // Automatically look up City and State from the Indian PIN code.
  useEffect(() => {
    if (!/^\d{6}$/.test(formData.pincode)) {
      setIsLookingUp(false);
      setPincodeMessage("");
      setPincodeStatus("");

      setFormData((previous) => ({
        ...previous,
        city: "",
        state: "",
      }));

      return;
    }

    const controller = new AbortController();

    const lookupPincode = async () => {
      setIsLookingUp(true);
      setPincodeMessage("Finding your city and state...");
      setPincodeStatus("loading");

      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${formData.pincode}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to look up this PIN code.");
        }

        const result = await response.json();
        const postOffices = result?.[0]?.PostOffice;

        if (
          result?.[0]?.Status === "Success" &&
          Array.isArray(postOffices) &&
          postOffices.length > 0
        ) {
          const office = postOffices[0];

          setFormData((previous) => ({
            ...previous,
            city: office.District || "",
            state: office.State || "",
          }));

          setErrors((previous) => ({
            ...previous,
            city: "",
            state: "",
            pincode: "",
          }));

          setPincodeMessage(
            `Location found: ${office.District}, ${office.State}`
          );
          setPincodeStatus("success");
        } else {
          setFormData((previous) => ({
            ...previous,
            city: "",
            state: "",
          }));

          setPincodeMessage(
            "PIN code not found. Please check the 6 digits."
          );
          setPincodeStatus("error");
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setPincodeMessage(
            "Could not look up the PIN code. Please try again."
          );
          setPincodeStatus("error");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLookingUp(false);
        }
      }
    };

    const timeoutId = window.setTimeout(lookupPincode, 400);

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [formData.pincode]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: name === "pincode" ? value.replace(/\D/g, "").slice(0, 6) : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    if (name === "pincode") {
      setPincodeMessage("");
      setPincodeStatus("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isPlacing || isLookingUp) return;

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your delivery address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter a valid PIN code to find your city.";
    }

    if (!formData.state.trim()) {
      newErrors.state = "Please enter a valid PIN code to find your state.";
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit PIN code.";
    }

    if (cartItems.length === 0) {
      navigate("/menu");
      return;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Save an order snapshot before clearing the cart.
    const orderNumber = `CC-${Date.now().toString().slice(-8)}`;

    const order = {
      orderNumber,
      items: cartItems.map((item) => ({ ...item })),
      customer: {
        name: formData.name.trim(),
        phone: formData.phone,
        email: formData.email.trim(),
      },
      paymentMethod: formData.paymentMethod,
      address: `${formData.address.trim()}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
      subtotal: totalPrice,
      deliveryCharge,
      total: grandTotal,
    };

    setIsPlacing(true);

    // Short animation before moving to the confirmation page.
    window.setTimeout(() => {
      clearCart();

      navigate("/order-success", {
        state: { order },
      });
    }, 1200);
  };

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#fff7e8] px-5 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-5 text-7xl"
          >
            🍕
          </motion.div>

          <h1 className="text-3xl font-black text-[#30221e]">
            Your Cart Is Empty
          </h1>

          <p className="mt-3 text-[#766861]">
            Add some delicious pizzas before checkout.
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-flex rounded-full bg-[#7d2027] px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#59171d] hover:shadow-lg"
          >
            Explore Menu →
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff7e8] px-4 pb-12 pt-5 sm:px-6 sm:pt-7 lg:pb-16 lg:pt-9">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/cart"
          className="mb-6 inline-flex items-center gap-2 font-semibold text-[#7d2027] transition hover:-translate-x-1 hover:text-[#59171d]"
        >
          <span aria-hidden="true">←</span> Back to Cart
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-8">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.25em] text-[#d9a441]">
              Almost There!
            </p>

            <h1 className="text-4xl font-black tracking-tight text-[#30221e] sm:text-5xl">
              Checkout
              <span className="text-[#7d2027]">.</span>
            </h1>

            <p className="mt-3 text-[#766861]">
              Enter your delivery details and get ready for delicious pizza.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3"
          >
            {/* Delivery details */}
            <section className="rounded-3xl border border-[#7d2027]/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8 lg:col-span-2">
              <div className="mb-7 flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7d2027]/10 text-xl"
                >
                  📍
                </motion.span>

                <div>
                  <h2 className="text-xl font-extrabold text-[#30221e]">
                    Delivery Information
                  </h2>
                  <p className="mt-1 text-sm text-[#766861]">
                    Tell us where to deliver your order.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full name */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#30221e]">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#30221e]">
                    Mobile Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#30221e]">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="mb-2 block text-sm font-bold text-[#30221e]">
                    Delivery Address *
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House number, street, landmark..."
                    autoComplete="street-address"
                    className="w-full resize-y rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>

                {/* PIN code */}
                <div className="sm:col-span-2">
                  <label htmlFor="pincode" className="mb-2 block text-sm font-bold text-[#30221e]">
                    PIN Code *
                  </label>

                  <div className="relative">
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter 6-digit PIN code"
                      autoComplete="postal-code"
                      className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 pr-12 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                    />

                    {isLookingUp && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-[#d9a441]/30 border-t-[#7d2027]"
                      />
                    )}

                    {!isLookingUp && pincodeStatus === "success" && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-green-600">
                        ✓
                      </span>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {pincodeMessage && (
                      <motion.p
                        key={pincodeMessage}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-2 text-sm ${
                          pincodeStatus === "success"
                            ? "text-green-700"
                            : pincodeStatus === "error"
                              ? "text-red-600"
                              : "text-[#766861]"
                        }`}
                      >
                        {pincodeMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {errors.pincode && (
                    <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-bold text-[#30221e]">
                    City / District *
                  </label>

                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Auto-filled from PIN code"
                    autoComplete="address-level2"
                    className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="mb-2 block text-sm font-bold text-[#30221e]">
                    State *
                  </label>

                  <input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Auto-filled from PIN code"
                    autoComplete="address-level1"
                    className="w-full rounded-xl border border-[#7d2027]/15 bg-[#fff7e8]/50 px-4 py-3 text-[#30221e] outline-none transition focus:border-[#7d2027] focus:ring-2 focus:ring-[#7d2027]/10"
                  />

                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                  )}
                </div>
              </div>

              {/* Payment */}
              <div className="mt-9 border-t border-[#7d2027]/10 pt-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d9a441]/20 text-xl">
                    💳
                  </span>

                  <div>
                    <h2 className="text-xl font-extrabold text-[#30221e]">
                      Payment Method
                    </h2>
                    <p className="mt-1 text-sm text-[#766861]">
                      Choose how you want to pay.
                    </p>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#7d2027]/20 bg-[#fff7e8]/60 p-4 transition hover:border-[#7d2027] hover:shadow-sm">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={formData.paymentMethod === "Cash on Delivery"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#7d2027]"
                  />

                  <span className="flex-1">
                    <span className="block font-bold text-[#30221e]">
                      Cash on Delivery
                    </span>
                    <span className="mt-1 block text-sm text-[#766861]">
                      Pay when your order arrives.
                    </span>
                  </span>

                  <span className="text-2xl" aria-hidden="true">💵</span>
                </label>
              </div>
            </section>

            {/* Order summary */}
            <aside className="rounded-3xl border border-[#7d2027]/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7 lg:sticky lg:top-28">
              <h2 className="text-xl font-extrabold text-[#30221e]">
                Order Summary
              </h2>

              <p className="mt-1 text-sm text-[#766861]">
                {cartItems.reduce((count, item) => count + item.quantity, 0)} items in your cart
              </p>

              <div className="my-6 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="flex gap-3"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#fff7e8]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 font-bold text-[#30221e]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-[#766861]">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 font-bold text-[#7d2027]">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3 border-t border-dashed border-[#7d2027]/20 pt-5 text-sm">
                <div className="flex justify-between gap-3 text-[#766861]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#30221e]">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-[#766861]">
                  <span>Delivery</span>
                  <span className="font-semibold text-[#30221e]">
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge.toFixed(2)}`}
                  </span>
                </div>

                {deliveryCharge === 0 && (
                  <p className="text-xs font-medium text-green-700">
                    🎉 You qualify for free delivery!
                  </p>
                )}

                <div className="flex justify-between gap-3 border-t border-[#7d2027]/10 pt-4 text-base">
                  <span className="font-extrabold text-[#30221e]">
                    Total
                  </span>
                  <span className="text-xl font-black text-[#7d2027]">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Animated Place Order button */}
              <motion.button
                type="submit"
                disabled={isPlacing || isLookingUp}
                whileHover={!isPlacing ? { scale: 1.025, y: -3 } : {}}
                whileTap={!isPlacing ? { scale: 0.97 } : {}}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className={`group relative mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-5 py-4 font-extrabold text-white shadow-lg transition-colors duration-300 ${
                  isPlacing
                    ? "cursor-wait bg-[#59171d]"
                    : "bg-[#7d2027] hover:bg-[#59171d] hover:shadow-xl hover:shadow-[#7d2027]/25"
                }`}
              >
                {!isPlacing && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "250%" }}
                    transition={{ duration: 0.7 }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-white/20"
                  />
                )}

                {isPlacing ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white"
                    />
                    <span>Placing Your Order...</span>
                  </>
                ) : (
                  <>
                    <motion.span
                      animate={{ y: [0, -3, 0], rotate: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      🍕
                    </motion.span>

                    <span>Place Order</span>

                    <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
                      ₹{grandTotal.toFixed(2)}
                    </span>

                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </motion.button>

              {isLookingUp && (
                <p className="mt-3 text-center text-xs text-[#766861]">
                  Please wait while we look up your PIN code.
                </p>
              )}

              <p className="mt-4 text-center text-xs leading-relaxed text-[#766861]">
                🔒 Your delivery details will be included with your order.
              </p>

              <Link
                to="/menu"
                className="mt-5 block text-center text-sm font-bold text-[#7d2027] transition hover:text-[#59171d]"
              >
                + Add More Pizzas
              </Link>
            </aside>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
