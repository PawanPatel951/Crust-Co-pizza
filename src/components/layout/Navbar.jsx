
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Home", to: "/#home", section: "home" },
  { label: "Menu", to: "/menu", section: "menu" },
  { label: "About", to: "/#about", section: "about" },
  { label: "Contact", to: "/#contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const isMenuPage = location.pathname === "/menu";

  const { itemCount } = useCart();

  // Close mobile menu when the route changes.
  useEffect(() => {
    setIsOpen(false);

    if (isMenuPage) {
      setActiveSection("menu");
    } else if (location.hash) {
      setActiveSection(location.hash.slice(1));
    } else if (location.pathname === "/cart") {
      setActiveSection("");
    }
  }, [location.pathname, location.hash, isMenuPage]);

  // Navbar scroll effect and active section tracking.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sections = ["home", "menu", "about", "contact"];
      let currentSection = "home";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Close mobile menu with Escape.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const openCart = () => {
    setIsOpen(false);
    navigate("/cart");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#7d2027]/10 bg-[#fff7e8]/95 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "py-2 shadow-lg shadow-[#30221e]/10"
          : "py-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 md:gap-4 md:px-8"
      >
        {/* Logo */}
        <Link
          to="/#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Crust and Co. Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7d2027] text-2xl shadow-md transition duration-300 group-hover:rotate-12 group-hover:scale-110 sm:h-11 sm:w-11">
            🍕
          </span>

          <span className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-[#7d2027] sm:text-xl md:text-2xl">
              Crust <span className="text-[#d9a441]">&</span> Co.
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#766861] sm:tracking-[0.22em]">
              Crafted with love
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setActiveSection(link.section)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-full px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#7d2027]"
                    : "text-[#30221e] hover:text-[#7d2027]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left rounded-full bg-[#d9a441] transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Cart button: opens the full cart page */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open shopping cart with ${itemCount} items`}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#7d2027]/20 bg-white text-[#7d2027] transition duration-300 hover:-translate-y-1 hover:border-[#7d2027] hover:bg-[#7d2027] hover:text-white hover:shadow-lg hover:shadow-[#7d2027]/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#fff7e8] bg-[#d9a441] px-1 text-[10px] font-extrabold text-[#30221e] transition-transform duration-200 group-hover:scale-110">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>

          {/* Desktop Order Now */}
          <Link
            to="/menu"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#7d2027] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#59171d] hover:shadow-lg sm:inline-flex"
          >
            Order Now
            <span aria-hidden="true">→</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#7d2027]/15 text-[#7d2027] transition hover:bg-[#7d2027]/5 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "visible max-h-96 border-t border-[#7d2027]/10 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 md:px-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;

            return (
              <Link
                key={link.label}
                to={link.to}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => {
                  setActiveSection(link.section);
                  closeMenu();
                }}
                className={`rounded-xl px-4 py-3 font-semibold transition duration-200 ${
                  isActive
                    ? "bg-[#7d2027] text-white"
                    : "text-[#30221e] hover:bg-[#7d2027]/5 hover:text-[#7d2027]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile cart link */}
          <button
            type="button"
            onClick={openCart}
            className="flex items-center justify-between rounded-xl border border-[#7d2027]/15 px-4 py-3 font-semibold text-[#7d2027] transition hover:bg-[#7d2027]/5 lg:hidden"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true">🛒</span>
              View Cart
            </span>

            <span className="rounded-full bg-[#d9a441] px-2 py-1 text-xs font-extrabold text-[#30221e]">
              {itemCount}
            </span>
          </button>

          <Link
            to="/menu"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#7d2027] px-5 py-3 font-bold text-white transition hover:bg-[#59171d]"
          >
            Order Now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}