"use client";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconSchool } from "@tabler/icons-react";

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[10vh] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#5B4FCF] rounded-lg flex items-center justify-center">
            <IconSchool
              className="text-white"
              style={{ fontSize: 16 }}
              aria-hidden="true"
            />
          </div>
          <span className="font-bold text-gray-900 text-lg">SMIT</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((nav) => (
            <Link
              key={nav.label}
              href={nav.to}
              className="text-sm text-gray-500 font-medium hover:text-[#5B4FCF] transition capitalize"
            >
              {nav.label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => router.push("/status")}
            className="text-sm font-medium text-gray-700 border border-gray-200 px-5 py-2 rounded-full hover:bg-gray-50 transition"
          >
            Track Status
          </button>
          <button
            onClick={() => router.push("/form")}
            className="text-sm font-medium text-white bg-[#5B4FCF] px-5 py-2 rounded-full hover:bg-[#7B6FDF] transition"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i
            className={`ti ${open ? "ti-x" : "ti-menu-2"}`}
            style={{ fontSize: 22 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navItems.map((nav) => (
            <Link
              key={nav.label}
              href={nav.to}
              className="text-sm font-medium text-gray-700 hover:text-[#5B4FCF] transition capitalize"
              onClick={() => setOpen(false)}
            >
              {nav.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                router.push("/status");
                setOpen(false);
              }}
              className="text-sm font-medium text-gray-700 border border-gray-200 px-5 py-2 rounded-full hover:bg-gray-50 transition"
            >
              Track Status
            </button>
            <button
              onClick={() => {
                router.push("/form");
                setOpen(false);
              }}
              className="text-sm font-medium text-white bg-[#5B4FCF] px-5 py-2 rounded-full hover:bg-[#7B6FDF] transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
