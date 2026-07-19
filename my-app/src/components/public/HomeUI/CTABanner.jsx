import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl px-10 py-16 text-center text-white"
          style={{ background: "linear-gradient(135deg, #5B4FCF, #7B6FDF)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
            Join thousands of students who have transformed their careers
            through SMIT's free IT courses.
          </p>
          <Link
            href="/#apply"
            className="inline-block bg-white text-[#5B4FCF] font-semibold px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
