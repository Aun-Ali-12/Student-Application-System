import { AnalyticsRep } from "@/components/DashboardComponent/Analytics/Representation/AnalyticsRep";
import { getAdminData } from "@/lib/AuthCheck/getAdminData";

export default async function Analytics() {
  const { students } = await getAdminData();
  return (
    <>
      <AnalyticsRep studentData={students} />
    </>
  );
}
