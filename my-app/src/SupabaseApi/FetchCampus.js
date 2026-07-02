import supabase from "@/lib/supabase";


//Fetch Campus
export async function FetchCampus() {
  try {
    const { data, error } = await supabase.from("campuses").select("id, name");
    if (error) {
      console.log(error.message);
      return null;
    }
    console.log(data);
    return data;
  } catch (err) {
    console.log("error in fetch campus", err);
    return null;
  }
}

//Insert Student in students table
export async function InsertStudents(form) {
  try {
    const { data, error } = await supabase
      .from("students")
      .insert({
        full_name: form.name,
        cnic: form.cnic,
        email: form.email,
        phone: form.phone,
        course: form.course,
        campus_id: form.campus_id,
      })
    if (error) {
      console.log(error.message);
      return null;
    }
    return true;
  } catch (err) {
    console.log("error in insert students", err);
    return null;
  }
}
