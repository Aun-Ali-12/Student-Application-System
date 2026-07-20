import { useHomeContent } from "@/hooks/UI/Home/useHomeContent";

export function HowItWorks() {
  const { steps } = useHomeContent();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full">
            Process
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
            How to Apply
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Simple 4-step process to get started with your free IT course.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-[#EEEDFE] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#5B4FCF] font-bold text-sm">
                  {s.num}
                </span>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gray-200" />
              )}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
