import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(request) {
  try {
    const { name, email, password, campus_id } = await request.json();

    //create admin auth
    const { data: newUser, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        user_metadata: { name: name },
        email_confirm: true,
      });

    if (authError) {
      return Response.json({ error: authError.message, status: 400 });
    }

    //insert user
    const { error } = await supabaseAdmin.from("admin_profiles").insert({
      admin_id: newUser.user.id,
      campus_id: campus_id,
      name: name,
      role: "campus admin",
    });

    if (error) {
      return Response.json({ error: error.message, status: 400 });
    }
    return Response.json({ success: true, status: 200 });
  } catch (err) {
    return Response.json(
      { error: `Something went wrong ${err} ` },
      { status: 500 },
    );
  }
}
