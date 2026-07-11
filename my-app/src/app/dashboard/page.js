import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import Dashboard from "@/components/DashboardComponent/ClientDashboard/ClientDashboard";
import { useStudent } from "@/ContextApi/StudentData";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  console.log(user);

  //fetching admin profile data
  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("name, role, campus_id, campuses(name) ")
    .eq("admin_id", user.id)
    .single();

  //if super admin
  let students;
  if (profile.role === "super_admin") {
    const { data } = await supabase
      .from("students")
      .select("*, campuses(name)");
    students = data || [];
  } else {
    const { data, error } = await supabase
      .from("students")
      .select("*, campuses(name)")
      .eq("campus_id", profile.campus_id);

    students = data || [];
  }

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
