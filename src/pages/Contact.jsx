
import { useState } from "react";

const contactDetails = [
  {
    icon: "☎",
    title: "Call Us",
    value: "+91 98765 43210",
    description: "",
  },
  {
    icon: "✉",
    title: "Email Us",
    value: "hello@crustandco.com",
    description: "",
  },
  {
    icon: "⌖",
    title: "Visit Us",
    value: "24, Food Street, Vaishali Nagar, Jaipur, ",
    description: "Rajasthan – 302021",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  const inputClasses =
    "w-full rounded-xl border border-[#e4d8c8] bg-white px-4 py-3.5 text-[#30221e] outline-none transition-all duration-300 placeholder:text-[#a49a91] hover:border-[#d9a441]/70 focus:border-[#7d2027] focus:ring-4 focus:ring-[#7d2027]/10";

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-duration="800"
      className="scroll-mt-24 relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#d9a441]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#7d2027]"
          >
            We'd Love to Hear from You
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 font-serif text-3xl font-bold text-[#30221e] sm:text-4xl lg:text-5xl"
          >
            Let's Talk Pizza!
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-4 max-w-2xl leading-7 text-[#766861]"
          >
            Have a question, suggestion, or just want to say hello?
            Send us a message and let's connect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Contact Information */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="group relative overflow-hidden rounded-3xl bg-[#7d2027] p-7 text-white shadow-lg transition-shadow duration-500 hover:shadow-2xl sm:p-9"
          >
            {/* Decorative Circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5 transition-transform duration-700 group-hover:scale-125"
            />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#f3d18c]">
                Get in Touch
              </span>

              <h3 className="mt-3 font-serif text-3xl font-bold">
                Every great connection starts with a hello.
              </h3>

              <p className="mt-4 leading-7 text-white/75">
                We're always happy to hear from pizza lovers.
                Reach out using the details below.
              </p>

              {/* Contact Details */}
              <div className="mt-9 space-y-7">
                {contactDetails.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                    className="group/item flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:translate-x-1 hover:border-white/10 hover:bg-white/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#f3d18c] transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-white/20">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold">{item.title}</h4>

                      <p className="mt-1 break-words text-white/90">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brand Card */}
              <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-5 transition-all duration-300 hover:border-[#f3d18c]/40 hover:bg-white/10">
                <p className="font-serif text-xl font-bold text-[#f3d18c]">
                  Crust & Co.
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Crafted with love, served with happiness. 🍕
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="rounded-3xl border border-[#eadfce] bg-[#fffaf2] p-6 shadow-sm transition-all duration-500 hover:shadow-xl sm:p-9"
          >
            <h3 className="font-serif text-2xl font-bold text-[#30221e] sm:text-3xl">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#766861]">
              Fill in the details below and share your thoughts with us.
            </p>

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                <span aria-hidden="true" className="text-lg">✓</span>

                <p>
                  <strong>Thank you!</strong> Your message has been
                  recorded in this demo. No email has been sent.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#30221e]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#30221e]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#30221e]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#30221e]"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#7d2027] px-6 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#59171d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7d2027] focus:ring-offset-2 active:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0"
                />

                <span className="relative">Send Message</span>

                <span
                  aria-hidden="true"
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <p className="text-center text-xs leading-5 text-[#766861]">
                Demo form only. Messages are not sent or stored on a server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
