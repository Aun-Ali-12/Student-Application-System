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
    const { error } = await supabase.from("students").insert({
      full_name: form.full_name,
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

//Updates Student in students table
export async function UpdateStudents(editData) {
  try {
    const { data, error } = await supabase
      .from("students")
      .update({
        full_name: editData.full_name,
        cnic: editData.cnic,
        email: editData.email,
        phone: editData.phone,
        course: editData.course,
        campus_id: editData.campus_id,
      })
      .eq("id", editData.id)
      .select();
    if (error) {
      console.log(error.message);
      return { error: error.message };
    }
    console.log(data, "data from update student");
    return { success: true };
  } catch (err) {
    // console.log("error in updating students", err);
    return { error: "something wen't wrong!" };
  }
}
