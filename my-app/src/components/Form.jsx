import { useEdit } from "@/ContextApi/Edit";

export const FormUI = ({
  form,
  handleChange,
  handleSubmit,
  campuses,
  loading,
}) => {
  const { editData, isEdit, setIsEdit, resetEdit } = useEdit();
  return (
    <>
      <section className="min-h-screen bg-[#F8F9FF] flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-4">
              {isEdit ? "Edit Application" : "Apply Now"}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEdit ? "Update Your Application" : "Start Your Tech Journey"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEdit
                ? "Update your details below and save changes."
                : "Fill in your details to apply for a free SMIT course."}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={isEdit ? editData.full_name : form.full_name}
                  onChange={handleChange}
                  placeholder="Muhammad Ali"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>

              {/* CNIC */}
              <div>
                <label
                  htmlFor="cnic"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  CNIC <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  value={isEdit ? editData.cnic : form.cnic}
                  onChange={handleChange}
                  placeholder="42101-1234567-1"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={isEdit ? editData.email : form.email}
                    onChange={handleChange}
                    placeholder="ali@gmail.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={isEdit ? editData.phone : form.phone}
                    onChange={handleChange}
                    placeholder="03001234567"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Select Course <span className="text-red-400">*</span>
                </label>
                <select
                  name="course"
                  id="course"
                  value={isEdit ? editData.course : form.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition bg-white"
                >
                  <option value="">Select your course</option>
                  <option value="ai and chatbot development">
                    AI and Chatbot Development
                  </option>
                  <option value="web and app development">
                    Web and App Development
                  </option>
                  <option value="digital marketing">Digital Marketing</option>
                </select>
              </div>

              {/* Campus */}
              <div>
                <label
                  htmlFor="campus"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Select Campus <span className="text-red-400">*</span>
                </label>
                <select
                  name="campus_id"
                  id="campus"
                  value={isEdit ? editData.campus_id : form.campus_id}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition bg-white"
                >
                  <option value="">Select your campus</option>
                  {campuses &&
                    campuses.map((val) => (
                      <option key={val.id} value={val.id}>
                        {val.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-1" />

              {/* Buttons */}
              {isEdit ? (
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Updating..." : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEdit(false);
                      resetEdit();
                    }}
                    className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium py-3 rounded-full hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </form>
          </div>

          {/* Bottom link */}
          {!isEdit && (
            <p className="text-center text-xs text-gray-400 mt-5">
              Already applied?{" "}
              <a
                href="/status"
                className="text-[#5B4FCF] font-medium hover:underline"
              >
                Check your application status
              </a>
            </p>
          )}
        </div>
      </section>
    </>
  );
};
