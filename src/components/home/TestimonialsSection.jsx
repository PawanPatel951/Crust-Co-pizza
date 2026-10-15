
import testimonials from "../../data/testimonials";

function Stars({ rating }) {
  return (
    <div
      className="flex gap-1 text-lg text-[#d9a441]"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`inline-block transition-transform duration-300 ${
            index < rating
              ? "group-hover/star:scale-125"
              : "text-[#eadfce]"
          }`}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-[#fff7e8] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#d9a441]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#7d2027]"
          >
            Love from our pizza lovers
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 font-serif text-3xl font-bold text-[#30221e] sm:text-4xl lg:text-5xl"
          >
            What Our Customers Say
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 leading-7 text-[#766861]"
          >
            Great food becomes even more special when shared with
            people who love every slice.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
              className="group relative overflow-hidden rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#d9a441]/60 hover:shadow-[0_20px_45px_rgba(89,23,29,0.12)] sm:p-8"
            >
              {/* Gold Top Accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#d9a441] transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between gap-3">
                <div className="group/star">
                  <Stars rating={item.rating} />
                </div>

                <span
                  className="font-serif text-5xl leading-none text-[#d9a441]/40 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                >
                  “
                </span>
              </div>

              <p className="mt-5 min-h-[120px] leading-7 text-[#766861] transition-colors duration-300 group-hover:text-[#594640]">
                {item.review}
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-[#eadfce] pt-5">
                {/* Reviewer Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7d2027] font-bold text-white ring-2 ring-transparent transition-all duration-300 group-hover:scale-110 group-hover:ring-[#d9a441]/50">
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-bold text-[#30221e] transition-colors duration-300 group-hover:text-[#7d2027]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#766861]">
                    {item.location}
                  </p>
                </div>

                <span
                  className="ml-auto shrink-0 text-xl text-[#7d2027] transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  ♥
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 text-center"
        >
          <p className="font-serif text-lg italic text-[#766861]">
            Every slice is made to bring a little more happiness.{" "}
            <span className="text-[#7d2027]">♥</span>
          </p>
        </div>
      </div>
    </section>
  );
}
