import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const confettiPieces = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  x: `${(index * 37) % 100}%`,
  delay: (index % 8) * 0.12,
  duration: 2 + (index % 5) * 0.35,
  rotate: index * 53,
  color: ["#d9a441", "#7d2027", "#f3c969", "#e99a64"][index % 4],
}));

export default function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7e8] px-4 pb-12 pt-6 sm:px-6 sm:pt-10">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-24 h-48 w-48 rounded-full bg-[#d9a441]/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -12, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-[#7d2027]/10 blur-3xl"
        />

        <motion.span
          animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-[7%] top-24 text-3xl opacity-40"
        >
          🍕
        </motion.span>

        <motion.span
          animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-[8%] top-48 text-2xl opacity-40"
        >
          ✨
        </motion.span>

        <motion.span
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-20 left-[10%] text-2xl opacity-40"
        >
          🧀
        </motion.span>
      </div>

      {/* Confetti animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
            {confettiPieces.map((piece) => (
              <motion.span
                key={piece.id}
                initial={{
                  opacity: 0,
                  y: -30,
                  x: 0,
                  rotate: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: ["0vh", "105vh"],
                  x: [
                    "0px",
                    `${piece.id % 2 === 0 ? 45 : -45}px`,
                  ],
                  rotate: piece.rotate,
                  scale: [0.5, 1, 0.8],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: "easeIn",
                }}
                style={{
                  left: piece.x,
                  backgroundColor: piece.color,
                  borderRadius: piece.id % 2 === 0 ? "50%" : "3px",
                  width: piece.id % 3 === 0 ? 10 : 7,
                  height: piece.id % 3 === 0 ? 10 : 13,
                  position: "absolute",
                  top: -20,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-2xl"
      >
        <motion.div
          whileHover={{
            boxShadow: "0 25px 65px rgba(48,34,30,0.12)",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-3xl border border-[#7d2027]/10 bg-white shadow-xl shadow-[#30221e]/5"
        >
          {/* Success header */}
          <div className="relative overflow-hidden bg-[#7d2027] px-6 py-10 text-center text-white sm:px-10">
            {/* Header glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d9a441] blur-3xl"
            />

            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl text-green-600 shadow-[0_0_0_8px_rgba(255,255,255,0.12)]"
            >
              <motion.svg
                viewBox="0 0 52 52"
                className="h-14 w-14"
                fill="none"
              >
                <motion.path
                  d="M14 27 L22 35 L39 17"
                  stroke="#16a34a"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.svg>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="relative mt-7 text-sm font-bold uppercase tracking-[0.3em] text-[#d9a441]"
            >
              Crust & Co.
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="relative mt-2 text-3xl font-black sm:text-4xl"
            >
              Order Placed!
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="ml-2 inline-block"
              >
                🎉
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base"
            >
              Thank you for choosing Crust & Co. Your delicious pizza journey
              is officially on its way!
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75px" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative mx-auto mt-6 h-1 rounded-full bg-[#d9a441]"
            />
          </div>

          <div className="p-5 sm:p-9">
            {/* Order number */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              className="relative overflow-hidden rounded-2xl border border-dashed border-[#d9a441] bg-[#fff7e8] p-5 text-center"
            >
              <motion.div
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />

              <p className="relative text-sm font-semibold text-[#766861]">
                Your Order Number
              </p>

              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, type: "spring" }}
                className="relative mt-2 break-all text-2xl font-black tracking-wider text-[#7d2027]"
              >
                {order?.orderNumber || "DEMO-ORDER"}
              </motion.p>

              <p className="relative mt-2 text-xs text-[#766861]">
                Keep this number for your reference.
              </p>
            </motion.div>

            {/* Order details */}
            {order ? (
              <motion.div variants={itemVariants} className="mt-7">
                <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#30221e]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7d2027]/10">
                    🍕
                  </span>
                  Order Summary
                </h2>

                <div className="mt-4 space-y-3">
                  {order.items?.map((item, index) => (
                    <motion.div
                      key={item.id ?? `${item.name}-${index}`}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.35 + index * 0.12,
                        duration: 0.4,
                      }}
                      whileHover={{
                        x: 4,
                        backgroundColor: "#fff2d9",
                      }}
                      className="flex items-center gap-3 rounded-xl bg-[#fff7e8]/70 p-3"
                    >
                      <motion.img
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-xl object-cover shadow-sm"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-[#30221e]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-[#766861]">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="shrink-0 font-bold text-[#7d2027]">
                        ₹
                        {(
                          Number(item.price) * Number(item.quantity)
                        ).toFixed(2)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Order payment details */}
                <motion.div
                  variants={itemVariants}
                  className="mt-6 space-y-4 border-t border-[#7d2027]/10 pt-5 text-sm"
                >
                  <div className="flex justify-between gap-3">
                    <span className="text-[#766861]">Payment Method</span>
                    <span className="text-right font-semibold text-[#30221e]">
                      {order.paymentMethod || "Cash on Delivery"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-[#766861]">Delivery Address</span>
                    <span className="max-w-[60%] break-words text-right font-semibold text-[#30221e]">
                      {order.address || "Not provided"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 border-t border-[#7d2027]/10 pt-4 text-base">
                    <span className="font-extrabold text-[#30221e]">
                      Order Total
                    </span>

                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 160,
                      }}
                      className="text-xl font-black text-[#7d2027]"
                    >
                      ₹{Number(order.total || 0).toFixed(2)}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                variants={itemVariants}
                className="mt-7 rounded-2xl bg-[#fff7e8] p-5 text-center"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="inline-block text-3xl"
                >
                  🍕
                </motion.span>

                <p className="mt-2 font-semibold text-[#30221e]">
                  Welcome to Crust & Co.!
                </p>

                <p className="mt-2 text-sm leading-6 text-[#766861]">
                  This is the order confirmation page preview. Place an order
                  through checkout to pass its details to this page.
                </p>
              </motion.div>
            )}

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <Link to="/menu" className="group">
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 12px 25px rgba(217,164,65,0.28)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-5 py-4 font-extrabold text-[#30221e] transition-colors duration-300 hover:bg-[#c18b2c]"
                >
                  Order More Pizza
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>

              <Link to="/" className="group">
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    backgroundColor: "#fff7e8",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#7d2027]/20 px-5 py-4 font-bold text-[#7d2027] transition-colors duration-300"
                >
                  <motion.span
                    whileHover={{ x: -3 }}
                    className="inline-block"
                  >
                    ←
                  </motion.span>
                  Back to Home
                </motion.div>
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-center text-xs leading-5 text-[#766861]"
            >
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block text-red-500"
              >
                ❤️
              </motion.span>{" "}
              and lots of cheese by Crust & Co.
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-5 text-center text-xs text-[#766861]"
        >
          Freshly baked happiness, one slice at a time. 🍕
        </motion.p>
      </motion.div>
    </main>
  );
}