import ManageAdmins from "@/components/admin/DashboardComponent/ManageAdmin";
import ClientCampus from "@/components/admin/DashboardComponent/ManageCampuses";

export default function ManageCampus() {
  return (
    <>
      <ClientCampus />
      <ManageAdmins />
    </>
  );
}
