
import { useEffect } from "react";
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
import About from "./pages/About";
import TestimonialsSection from "./components/home/TestimonialsSection";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPizzas />
      <OffersSection />
      <About />
      <TestimonialsSection />
      <Contact />
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

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
