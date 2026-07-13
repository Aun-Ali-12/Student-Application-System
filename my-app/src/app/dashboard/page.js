import Dashboard from "@/components/DashboardComponent/ClientDashboard/ClientDashboard";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";

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
