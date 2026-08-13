"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconMenu2, IconX, IconSchool } from "@tabler/icons-react";

export function PublicMobileNav({ open, setOpen }) {
  const router = useRouter();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#5B4FCF] rounded-lg flex items-center justify-center">
            <IconSchool size={15} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-base">SMIT</span>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition"
        >
          {open ? (
            <IconX size={18} className="text-gray-700" />
          ) : (
            <IconMenu2 size={18} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Spacer — top bar ki height ke barabar */}
      <div className="h-10" />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-14 left-0 z-40 w-[80%] h-screen bg-white border border-gray-200 rounded-bl-2xl shadow-lg transition-all duration-300 overflow-hidden
  ${open ? "opacity-100" : "max-h-0 opacity-0"}
`}
      >
        <div className="flex flex-col items-start justify-between space-y-1">
          {/* Nav links */}
          <div>
            {navItems.map((nav) => (
              <Link
                key={nav.label}
                href={nav.to}
                onClick={() => setOpen(false)}
                className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] transition"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          {/* Divider */}
          <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
            <button
              onClick={() => {
                router.push("/login");
                setOpen(false);
              }}
              className="w-full text-sm font-medium text-gray-700 border border-gray-200 py-2.5 rounded-full hover:bg-gray-50 transition"
            >
              Login as admin
            </button>
            <button
              onClick={() => {
                router.push("/form");
                setOpen(false);
              }}
              className="w-full text-sm font-medium text-white bg-[#5B4FCF] py-2.5 rounded-full hover:bg-[#7B6FDF] transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
