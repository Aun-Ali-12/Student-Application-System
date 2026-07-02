import { createClient } from "@/lib/ClientSupabase";
const supabase = createClient();

export async function LoginAuth(email, pass) {
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

export async function LogOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
  }
}
