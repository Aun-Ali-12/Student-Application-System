import { useHomeContent } from "@/hooks/UI/useHomeContent";

export function Features() {
  const { features } = useHomeContent();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
            Our Courses
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
            What We Offer
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Free professional IT courses designed to build real-world skills.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
            >
              <div className="w-10 h-10 bg-[#EEEDFE] rounded-[10px] flex items-center justify-center mb-4 group-hover:bg-[#5B4FCF] transition">
                <i
                  className={`ti ${f.icon} text-[#5B4FCF] group-hover:text-white transition`}
                  style={{ fontSize: 20 }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm font-600 text-gray-900 mb-2">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
