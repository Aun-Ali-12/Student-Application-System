import Dashboard from "@/components/admin/DashboardComponent/ClientDashboard/ClientDashboard";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";
import ManageCampus from "./manage-campus/page";

export default async function DashboardPage() {
  const { students, profile } = await getAdminData();
  return (
    <>
      <Dashboard
        studentData={students}
        role={profile.role}
        campusName={profile.campuses?.name || "All Campuses"}
      />
    </>
  );
}
