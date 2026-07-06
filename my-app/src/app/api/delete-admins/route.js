import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    console.log(id);

    //delete from auth table:
    const { error } = await supabase.auth.admin.deleteUser(id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    //delete from admin profile table:
    const { data: adminProfiles, error: adminProfileError } = await supabase
      .from("admin_profiles")
      .delete()
      .eq("admin_id", id)
      .select();

    if (adminProfileError) {
      return NextResponse.json(
        { error: adminProfileError.message },
        { status: 500 },
      );
    }

    if (!adminProfiles || adminProfiles.length === 0) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(
      { success: "Admin has been successfully deleted" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 },
    );
  }
}
