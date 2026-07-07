import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function PUT(request) {
  try {
    const { id, name, email, password, campus_id } = await request.json();

    //authupdate object
    const authUpdates = { email, user_metadata: { name: name } };
    if (password) authUpdates.password = password;

    //auth update function
    const { error: updateAuthErr } = await supabase.auth.admin.updateUserById(
      id,
      authUpdates,
    );

    //error check on authupdate
    if (updateAuthErr) {
      return Response.json({ error: updateAuthErr.message }, { status: 400 });
    }

    //update data in profile admin
    const { error } = await supabase
      .from("admin_profiles")
      .update({ name, campus_id })
      .eq("admin_id", id);

    //error check on table
    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json(
      { success: "Admin updated successfully" },
      { status: 200 },
    );
  } catch (err) {
    return Response.json({ error: "somthing wen't wrong" }, { status: 500 });
  }
}
