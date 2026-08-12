"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  IconLayoutDashboard,
  IconUsers,
  IconSchool,
  IconChartBar,
  IconSettings,
  IconChevronLeft,
  IconChevronRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { LogOut } from "@/SupabaseApi/Login";
import { MobileNav } from "./MobNav";
import Swal from "sweetalert2";

export function SideNav({ role }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useRouter();
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: IconLayoutDashboard,
      superAdmin: false,
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: IconChartBar,
      superAdmin: false,
    },
    {
      label: "Manage Campuses",
      href: "/dashboard/manage-campus",
      icon: IconSchool,
      superAdmin: true,
    },
    {
      label: "Manage Admins",
      href: "/dashboard/admins",
      icon: IconUsers,
      superAdmin: true,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: IconSettings,
      superAdmin: false,
    },
  ];

  const filtered = navItems.filter(
    (item) => !item.superAdmin || role === "super_admin",
  );

  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      alert("Something went wrong");
      return;
    }
    Swal.fire({
      title: "Success!",
      text: "Signed out.",
      icon: "success",
      confirmButtonText: "Okay",
    });
    nav.push("/");
  };
  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-[#5B4FCF] flex items-center justify-between px-4 border-b border-white/10">
        <span className="font-bold text-white">SMIT Admin</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white"
        >
          {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden fixed top-14 left-0 bottom-0 z-40 w-64 bg-[#5B4FCF] transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MobileNav
          filtered={filtered}
          pathname={pathname}
          collapsed={false}
          setMobileOpen={setMobileOpen}
          handleLogOut={handleLogOut}
        />
      </div>

      {/* ── Desktop sidebar ── */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 bg-[#5B4FCF] transition-all duration-300 shrink-0 ${collapsed ? "w-[72px]" : "w-[240px]"}`}
      >
        {/* Logo */}
        <div
          className={`flex items-center h-16 px-4 border-b border-white/10 ${collapsed ? "justify-center" : "justify-between"}`}
        >
          {!collapsed && (
            <div className="flex items-center gap-2">
              <IconSchool size={20} className="text-white" />
              <span className="font-bold text-white">SMIT</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-white/10 p-1.5 rounded-lg transition"
          >
            {collapsed ? (
              <IconChevronRight size={18} />
            ) : (
              <IconChevronLeft size={18} />
            )}
          </button>
        </div>

        <MobileNav
          filtered={filtered}
          pathname={pathname}
          collapsed={collapsed}
          setMobileOpen={setMobileOpen}
          handleLogOut={handleLogOut}
        />
      </aside>
    </>
  );
}
