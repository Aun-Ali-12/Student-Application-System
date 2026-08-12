import Link from "next/link";
import { IconLogout } from "@tabler/icons-react";

// Mobile Nav Component
export function MobileNav({
  filtered,
  pathname,
  collapsed,
  setMobileOpen,
  handleLogOut,
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Links */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {filtered.map((nav) => {
          const Icon = nav.icon;
          const isActive = pathname === nav.href;

          return (
            <Link
              key={nav.label}
              href={nav.href}
              onClick={() => setMobileOpen(false)}
              title={collapsed ? nav.label : ""}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition
                ${collapsed ? "justify-center" : ""}
                ${isActive ? "bg-white text-[#5B4FCF]" : "text-white/70 hover:bg-white/10 hover:text-white"}
              `}
            >
              <Icon size={20} className="shrink-0" />
              {!collapsed && <span>{nav.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogOut}
          title={collapsed ? "Logout" : ""}
          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-white/70 hover:bg-white/10 hover:text-white transition ${collapsed ? "justify-center" : ""} cursor-pointer`}
        >
          <IconLogout size={20} className="shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
