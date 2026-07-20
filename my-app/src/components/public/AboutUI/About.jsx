import { useAbout } from "@/hooks/UI/About/useAbout";
import { IconTrophy, IconSchool } from "@tabler/icons-react";

export function About() {
  const { stats, values, team } = useAbout();
  return (
    <main className="bg-[#F8F9FF]">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-5">
            About SMIT
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Transforming Lives Through <br />
            <span className="text-[#5B4FCF]">Technology Education</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Saylani Mass IT Training (SMIT) is Pakistan's largest free IT
            training program, dedicated to empowering youth with modern tech
            skills.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[#F8F9FF] border border-gray-200 rounded-xl p-5"
              >
                <div className="text-2xl font-bold text-[#5B4FCF]">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
              What Drives Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Everything we do is driven by our commitment to accessible,
              quality education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="w-11 h-11 bg-[#EEEDFE] rounded-[10px] flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#5B4FCF]" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                Started with a Dream, <br /> Built a Movement
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                SMIT was founded with a simple belief — that every Pakistani
                youth deserves access to world-class tech education, regardless
                of their financial background.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                What started as a small initiative has grown into a nationwide
                program spanning 15+ campuses, training thousands of students in
                cutting-edge technologies.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EEEDFE] rounded-full flex items-center justify-center">
                  <IconTrophy size={18} className="text-[#5B4FCF]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Award Winning Program
                  </div>
                  <div className="text-xs text-gray-500">
                    Recognized nationally for impact in tech education
                  </div>
                </div>
              </div>
            </div>

            {/* Right — illustration */}
            <div className="bg-[#EEEDFE] rounded-2xl h-72 flex items-center justify-center">
              <IconSchool size={80} className="text-[#5B4FCF] opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
              The Team
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
              Meet Our Team
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Dedicated professionals committed to your learning success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-[#EEEDFE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#5B4FCF] font-bold text-sm">
                    {t.initial}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {t.name}
                </h3>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-2xl px-10 py-16 text-center text-white"
            style={{ background: "linear-gradient(135deg, #5B4FCF, #7B6FDF)" }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join SMIT?</h2>
            <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
              Take the first step towards your tech career today.
            </p>

            <a
              href="/#apply"
              className="inline-block bg-white text-[#5B4FCF] font-semibold px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
