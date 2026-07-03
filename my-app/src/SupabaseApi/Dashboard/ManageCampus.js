import { createClient } from "@/lib/ClientSupabase";

const supabase = createClient();

export async function AddCampus(campusField) {
  try {
    const { error } = await supabase
      .from("campuses")
      .insert({ name: campusField });

    if (error) {
      return { error: error.message };
    }
    return { success: "Campus has been added!" };
  } catch (err) {
    return { catchError: "something went wrong" };
  }
}

export async function DeleteCampus(id) {
  try {
    const error = await supabase.from("campuses").delete().eq("id", id);

    if (!error) {
      return { error: error.message };
    }
    return { success: true };
  } catch (err) {
    return { error: "something went wrong" };
  }
}

export async function UpdateCampus(id, name) {
  try {
    const { data, error } = await supabase
      .from("campuses")
      .update({ name: name })
      .eq("id", id);

    if (error) {
      return { error: error.message };
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
}
