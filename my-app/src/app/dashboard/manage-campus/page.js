import ManageAdmins from "@/components/DashboardComponent/ManageAdmin";
import ClientCampus from "@/components/DashboardComponent/ManageCampuses";

export default function ManageCampus() {
  return (
    <>
      <ClientCampus />
      <ManageAdmins />
    </>
  );
}
