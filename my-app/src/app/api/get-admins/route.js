import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("admin_profiles")
      .select("campuses(name), role, admin_id");

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json({ success: data }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
