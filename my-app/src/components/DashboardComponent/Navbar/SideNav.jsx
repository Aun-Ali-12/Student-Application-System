import Link from "next/link";

export function SideNav() {
  const navItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      label: "Analytics",
      to: "/dashboard/analytics",
    },
    {
      label: "Manage",
      to: "/dashboard/manage-campus",
    },
  ];

  return (
    <>
      <nav className="flex flex-col bg-gray-400 h-screen w-[25vw] text-white">
        Side Navbar
        {navItems &&
          navItems.map((nav) => (
            <Link key={nav.label} href={nav.to}>
              {nav.label}
            </Link>
          ))}
      </nav>
    </>
  );
}
