import useCheckStatus from "@/hooks/useCheckStatus";
import Texture from "./textureStyles/Texture";

//Application status checker component
export const ApplicationStatus = () => {
  const { cnic, setCnic, loading, error, result, handleCheck } =
    useCheckStatus();
  return (
    <>
      <section className="min-h-screen bg-[#F8F9FF] flex items-center justify-center py-16 px-4">
        <Texture />
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-4">
              Application Tracker
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Check Your Status
            </h1>
            <p className="text-sm text-gray-500">
              Enter your CNIC number to track your application status.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleCheck} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  CNIC Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="4210112345671 "
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  required
                  maxLength={13}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Checking..." : "Check Status"}
              </button>
            </form>

            {/* Error */}
            {error && (
              <div className="mt-5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="mt-6 border-t border-gray-100 pt-6">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-gray-900">
                    Application Result
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full capitalize
              ${
                result.status === "approved"
                  ? "bg-green-50 text-green-700"
                  : result.status === "rejected"
                    ? "bg-red-50 text-red-700"
                    : "bg-yellow-50 text-yellow-700"
              }
            `}
                  >
                    {result.status}
                  </span>
                </div>

                {/* Info rows */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                    <span className="text-xs text-gray-400">Full Name</span>
                    <span className="text-sm font-medium text-gray-900 capitalize">
                      {result.full_name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                    <span className="text-xs text-gray-400">Course</span>
                    <span className="text-sm font-medium text-gray-900 capitalize">
                      {result.course}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-xs text-gray-400">Status</span>
                    <span
                      className={`text-sm font-semibold capitalize
                ${
                  result.status === "approved"
                    ? "text-green-600"
                    : result.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                }
              `}
                    >
                      {result.status}
                    </span>
                  </div>
                </div>

                {/* Status message */}
                <div
                  className={`mt-5 rounded-xl px-4 py-3 text-xs leading-relaxed
            ${
              result.status === "approved"
                ? "bg-green-50 text-green-700"
                : result.status === "rejected"
                  ? "bg-red-50 text-red-700"
                  : "bg-yellow-50 text-yellow-700"
            }
          `}
                >
                  {result.status === "accepted" &&
                    "🎉 Congratulations! Your application has been approved. Our team will contact you soon with further details."}
                  {result.status === "rejected" &&
                    "Unfortunately your application was not selected this time. You can re-apply in the next batch."}
                  {result.status === "pending" &&
                    "⏳ Your application is under review. Please check back in 24-48 hours."}
                </div>
              </div>
            )}
          </div>

          {/* Bottom link */}
          <p className="text-center text-xs text-gray-400 mt-5">
            Haven't applied yet?{" "}
            <a
              href="/form"
              className="text-[#5B4FCF] font-medium hover:underline"
            >
              Apply Now
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
