import { SideNav } from "@/components/DashboardComponent/Navbar/SideNav";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";

export default async function AdminLayout({ children }) {
  const { profile } = await getAdminData();
  return (
    <>
      <div className="flex">
        <SideNav role={profile.role} />
        <main>{children}</main>
      </div>
    </>
  );
}
