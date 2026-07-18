import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const navItems = [
    {
      label: "home",
      to: "/",
    },
    {
      label: "about",
      to: "/about",
    },
    {
      label: "services",
      to: "/services",
    },
    {
      label: "contact us",
      to: "/contact",
    },
  ];
  return (
    <>
      <header className="flex justify-between bg-gray-100 h-[10vh]">
        <div>Hello</div>
        {/* navigation bar  */}
        <nav>
          Side Navbar
          {navItems &&
            navItems.map((nav) => (
              <Link key={nav.label} href={nav.to}>
                {nav.label}
              </Link>
            ))}
        </nav>
        <div>
          <button
            onClick={() => {
              router.push("/status");
            }}
          >
            Track
          </button>
          <button
            onClick={() => {
              router.push("/form");
            }}
          >
            Apply now
          </button>
        </div>
      </header>
    </>
  );
}
