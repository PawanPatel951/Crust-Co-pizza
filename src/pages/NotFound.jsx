
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#fff7e8] px-5 py-16">
      <div className="mx-auto max-w-xl text-center" data-aos="fade-up">
        <div className="mb-5 text-7xl">🍕</div>

        <p className="font-bold uppercase tracking-[0.25em] text-[#7d2027]">
          404 — Page Not Found
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold text-[#30221e] md:text-6xl">
          Oops! Wrong Slice
        </h1>

        <p className="mt-5 leading-7 text-[#766861]">
          Looks like this page is not on our menu. Let's get you back to
          something delicious!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-[#7d2027] px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#59171d]"
          >
            Back to Home
          </Link>

          <Link
            to="/menu"
            className="rounded-full border border-[#7d2027]/30 px-7 py-3 font-bold text-[#7d2027] transition hover:-translate-y-1 hover:bg-[#7d2027] hover:text-white"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
