import { AnalyticsRep } from "@/components/admin/DashboardComponent/Analytics/Representation/AnalyticsRep";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";

export default async function Analytics() {
  const { students, profile } = await getAdminData();
  return (
    <>
      <AnalyticsRep studentData={students} role={profile.role} />
    </>
  );
}
