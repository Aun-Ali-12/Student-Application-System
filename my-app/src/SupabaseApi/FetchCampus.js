import { createClient } from "@/lib/ClientSupabase";
const supabase = createClient();

//Fetch Campus
export async function FetchCampus() {
  try {
    const { data, error } = await supabase.from("campuses").select("id, name");
    if (error) {
      console.log(error.message);
      return { error: error.message };
    }
    return { data };
  } catch (err) {
    console.log("error in fetch campus", err);
    return { error: err };
  }
}

//Insert Student in students table
export async function InsertStudents(form) {
  try {
    const { data, error } = await supabase.from("students").insert({
      full_name: form.name,
      cnic: form.cnic,
      email: form.email,
      phone: form.phone,
      course: form.course,
      campus_id: form.campus_id,
    });
    if (error) {
      console.log(error.message);
      return { error: error.message };
    }
    return { success: true };
  } catch (err) {
    console.log("error in insert students", err);
    return { error: "something wen't wrong!" };
  }
}
