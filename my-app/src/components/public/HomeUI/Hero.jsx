import Link from "next/link";
import { useHomeContent } from "../../../hooks/UI/Home/useHomeContent";

export function Hero() {
  const { stats } = useHomeContent();

  return (
    <section className="bg-[#F8F9FF] pt-20 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-5">
              Best Courses in Pakistan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Empowering Youth <br />
              <span className="text-[#5B4FCF]">Through Technology</span>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Saylani Mass IT Training offers free world-class tech courses to
              students across Pakistan. Apply today and start your journey.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/form"
                className="bg-[#5B4FCF] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7B6FDF] transition"
              >
                Apply Now
              </Link>
              <Link
                href="/status"
                className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                Check Status
              </Link>
            </div>
          </div>

          {/* Right — illustration placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-sm h-72 bg-[#EEEDFE] rounded-2xl flex items-center justify-center">
              <video
                src="/assets/hero-animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                width={500}
                height={400}
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl px-8 py-6 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center ${i !== stats.length - 1 ? "border-r border-gray-100" : ""}`}
            >
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
