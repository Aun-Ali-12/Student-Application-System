"use client";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PublicMobileNav } from "./Mobile";
import { IconMenu2, IconX, IconSchool } from "@tabler/icons-react";

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
    <>
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
              onClick={() => router.push("/login")}
              className="text-sm capitalize font-medium text-gray-700 border border-gray-200 px-5 py-2 rounded-full hover:bg-gray-50 transition"
            >
              login as admin
            </button>
            <button
              onClick={() => router.push("/form")}
              className="text-sm font-medium text-white bg-[#5B4FCF] px-5 py-2 rounded-full hover:bg-[#7B6FDF] transition"
            >
              Apply Now
            </button>
          </div>

          {/* Toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
            >
              {open ? (
                <IconX size={18} className="text-gray-700" />
              ) : (
                <IconMenu2 size={18} className="text-gray-700" />
              )}
            </button>
          </div>
          {/* Mobile menu */}
          {open && <PublicMobileNav open={open} setOpen={setOpen} />}
        </div>
      </header>
    </>
  );
}
