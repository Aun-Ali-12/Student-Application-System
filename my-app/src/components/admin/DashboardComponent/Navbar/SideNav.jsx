import Link from "next/link";

export function SideNav({ role }) {
  console.log(role);
  
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      label: "manage",
      href: "/dashboard/manage-campus",
      superAdmin: true,
    },
  ];

  return (
    <>
      <nav className="flex flex-col bg-gray-400 h-screen w-[25vw] text-white">
        Side Navbar
        {navItems.filter((items) => !items.superAdmin || role === "super_admin")
        .map((nav)=>(
          <Link key={nav.label} href={nav.href}>{nav.label}</Link>
        ))
        }
      </nav>
    </>
  );
}
