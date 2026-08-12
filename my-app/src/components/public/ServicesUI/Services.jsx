import { useServices } from "@/hooks/UI/Services/useServices";
import { IconCheck, IconClock, IconUsers } from "@tabler/icons-react";

export function Services() {
  const { services, perks } = useServices();
  return (
    <main className="bg-[#F8F9FF]">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-5">
            Our Courses
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Free IT Courses <br />
            <span className="text-[#5B4FCF]">For Everyone</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Choose from our range of industry-relevant courses designed to get
            you job-ready in months, not years.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 cursor-pointer">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition"
                >
                  <div className="w-10 h-10 bg-[#EEEDFE] rounded-[10px] flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-[#5B4FCF]" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
              All Courses
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
              Pick Your Path
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              All courses are free, practical and taught by industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                      style={{ background: s.tint }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {s.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <IconClock size={11} /> {s.duration}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <IconUsers size={11} /> {s.students}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-5 cursor-pointer">
                    {s.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <IconCheck
                          size={13}
                          className="text-[#5B4FCF] shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/form"
                    className="block text-center text-sm font-medium text-white bg-[#5B4FCF] px-5 py-2.5 rounded-full hover:bg-[#7B6FDF] transition"
                  >
                    Apply Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-2xl px-10 py-16 text-center text-white"
            style={{ background: "linear-gradient(135deg, #5B4FCF, #7B6FDF)" }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Course to Pick?
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
              Our counselors are here to help you choose the right path for your
              career goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#5B4FCF] font-semibold px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition"
            >
              Talk to a Counselor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
