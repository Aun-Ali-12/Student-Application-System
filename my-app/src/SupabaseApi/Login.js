import supabase from "@/lib/supabase";

export default async function LoginAuth(email, pass) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    return { success: false, error: "Something went wrong" };
  }
}
