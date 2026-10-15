import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturedPizzas from "./components/home/FeaturedPizzas";
import OffersSection from "./components/home/OffersSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import Footer from "./components/layout/Footer";

// Load below-the-fold sections separately
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Load other pages only when needed
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div
      className="flex min-h-[45vh] items-center justify-center bg-[#fff7e8]"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d9a441]/30 border-t-[#7d2027]" />
        <p className="text-sm font-semibold text-[#766861]">
          Preparing something delicious...
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPizzas />
      <OffersSection />

      <Suspense fallback={<div className="min-h-24" />}>
        <About />
      </Suspense>

      <TestimonialsSection />

      <Suspense fallback={<div className="min-h-24" />}>
        <Contact />
      </Suspense>
    </main>
  );
}

// Handle section links when navigating between pages.
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = decodeURIComponent(hash.slice(1));

      const frame = requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollHandler />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
