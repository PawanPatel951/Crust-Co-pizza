
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const menuCategories = [
  "Classic Pizzas",
  "Veg Pizzas",
  "Cheese Pizzas",
  "Special Pizzas",
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

export default function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState(null, "", "#home");
  };

  return (
    <footer className="relative overflow-hidden bg-[#241815] text-white">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d9a441]/10 blur-3xl"
      />

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-12">
        {/* Brand */}
        <div data-aos="fade-up" data-aos-delay="0">
          <a
            href="#home"
            className="group inline-flex items-center gap-3"
            aria-label="Crust and Co. home"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9a441] text-2xl shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              🍕
            </span>

            <span>
              <span className="block font-serif text-2xl font-bold">
                Crust <span className="text-[#d9a441]">& Co.</span>
              </span>

              <span className="mt-0.5 block text-xs tracking-[0.18em] text-white/60">
                CRAFTED WITH LOVE
              </span>
            </span>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Every slice tells a story. Discover delicious flavours,
            handcrafted goodness, and little moments of happiness
            with Crust & Co.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a441] hover:bg-[#d9a441] hover:text-[#241815] hover:shadow-[0_8px_20px_rgba(217,164,65,0.15)] focus:outline-none focus:ring-2 focus:ring-[#d9a441]"
              >
                {social.label}
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-serif text-xl font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col items-start gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group/link inline-flex items-center gap-2 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-[#d9a441]"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-0 rounded-full bg-[#d9a441] transition-all duration-300 group-hover/link:w-2"
                />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-serif text-xl font-bold text-white">
            Explore Menu
          </h3>

          <ul className="mt-5 space-y-3">
            {menuCategories.map((category) => (
              <li key={category}>
                <a
                  href="#menu"
                  className="group/category inline-flex items-center gap-2 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-[#d9a441]"
                >
                  <span
                    aria-hidden="true"
                    className="text-[#d9a441] transition-transform duration-300 group-hover/category:rotate-12"
                  >
                    ›
                  </span>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="font-serif text-xl font-bold text-white">
            Get in Touch
          </h3>

          <div className="mt-5 space-y-4 text-sm text-white/65">
            <p className="flex items-start gap-3 transition-colors duration-300 hover:text-white">
              <span
                aria-hidden="true"
                className="text-lg text-[#d9a441]"
              >
                ⌖
              </span>
              <span>24, Food Street, Vaishali Nagar, Jaipur, Rajasthan – 302021</span>
            </p>

            <p className="flex items-start gap-3 transition-colors duration-300 hover:text-white">
              <span
                aria-hidden="true"
                className="text-lg text-[#d9a441]"
              >
                ☎
              </span>
              <span>+91 98765 43210</span>
            </p>

            <p className="flex items-start gap-3 transition-colors duration-300 hover:text-white">
              <span
                aria-hidden="true"
                className="text-lg text-[#d9a441]"
              >
                ✉
              </span>
              <span className="break-all">hello@crustandco.com</span>
            </p>
          </div>

          <a
            href="#contact"
            className="group/contact mt-6 inline-flex items-center gap-2 font-semibold text-[#d9a441] transition-all duration-300 hover:gap-3 focus:outline-none focus:underline"
          >
            Contact Us
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/contact:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left">
          <p className="text-xs leading-6 text-white/50 sm:text-sm">
            © {new Date().getFullYear()} Crust & Co. All rights reserved.
          </p>

          <a
            href="#home"
            onClick={scrollToTop}
            className="group/top inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors duration-300 hover:text-[#d9a441] focus:outline-none focus:underline sm:text-sm"
          >
            Back to Top
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover/top:-translate-y-1"
            >
              ↑
            </span>
          </a>

          <p className="font-serif text-sm italic text-[#d9a441]">
            Crafted with love ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
