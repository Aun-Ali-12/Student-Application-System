import { createClient } from "@/lib/ClientSupabase";

const supabase = createClient();

export async function UpdateStudentStatus(status, id) {
  try {
    const { data, error } = await supabase
      .from("students")
      .update({ status: status })
      .eq("id", id);

    if (error) {
      console.log(error.message);

      return { error: error.message };
    }
    console.log(data);

    return { success: true };
  } catch (err) {
    return { error: "something wen't wrong!" };
  }
}

export async function DelStd(id) {
  try {
    const { error } = await supabase.from("students").delete().eq("id", id);

    if (error) {
      return { error: error.message };
    }
    return { success: true };
  } catch (err) {
    return { error: "something wen't wrong!" };
  }
}
