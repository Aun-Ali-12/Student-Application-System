import ManageAdmins from "@/components/admin/DashboardComponent/ManageAdmin";
import ClientCampus from "@/components/admin/DashboardComponent/ManageCampuses";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";
import { redirect } from "next/navigation";

export default async function ManageCampus({ role }) {
  const { profile } = await getAdminData();

  if (profile.role !== "super_admin") {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="m-10 md:m-2 space-y-6">
        <ClientCampus />
        <ManageAdmins />
      </div>
    </>
  );
}
