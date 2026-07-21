"use client";
import { useState } from "react";
import { IconEye, IconEyeOff, IconLock, IconMail } from "@tabler/icons-react";
import { useLogin } from "@/hooks/useLogin";

//Login form component:
export function LoginForm() {
  const { form, loading, error, handleChange, handleSubmit } = useLogin();
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="min-h-screen bg-[#F8F9FF] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-[#EEEDFE] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <IconLock size={26} className="text-[#5B4FCF]" />
          </div>
          <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-4">
            Admin Portal
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to access your admin dashboard.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 mb-1.5"
              >
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconMail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@smit.edu.pk"
                  required
                  className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="pass"
                className="block text-xs font-medium text-gray-700 mb-1.5"
              >
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconLock size={16} className="text-gray-400" />
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  id="pass"
                  name="pass"
                  value={form.pass}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-200 rounded-lg pl-9 pr-10 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
                {/* Show/hide toggle */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPass ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-gray-100 pt-1" />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Not an admin?{" "}
          <a href="/" className="text-[#5B4FCF] font-medium hover:underline">
            Go to Home
          </a>
        </p>
      </div>
    </section>
  );
}
