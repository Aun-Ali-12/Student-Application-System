import ManageAdmins from "@/components/admin/DashboardComponent/ManageAdmin";
import ClientCampus from "@/components/admin/DashboardComponent/ManageCampuses";

export default function ManageCampus() {
  return (
    <>
      <div className="m-10 md:m-2 space-y-6">
        <ClientCampus />
        <ManageAdmins />
      </div>
    </>
  );
}
