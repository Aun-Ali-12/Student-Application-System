import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAdminData() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // server component mein set nahi ho sakta — ignore karo
          }
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("role, campus_id, campuses(name)")
    .eq("admin_id", user.id)
    .single();

  let role = profile.role;
  let students;
  if (profile.role === "super_admin") {
    const { data } = await supabase
      .from("students")
      .select("*, campuses(name)");
    students = data || [];
  } else {
    const { data } = await supabase
      .from("students")
      .select("*, campuses(name)")
      .eq("campus_id", profile.campus_id);
    students = data || [];
  }
  return { students, profile };
}
