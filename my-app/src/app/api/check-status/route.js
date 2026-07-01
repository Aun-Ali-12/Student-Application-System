import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(request) {
  try {
    //destructuring request and extracting cnic from it (request is coming from frontend)
    const { cnic } = await request.json();
    console.log(cnic, "cnic");

    //cnic validation
    if (!cnic) {
      return Response.json(
        { error: "Enter your cnic to check your application status." },
        { status: 400 },
      );
    }

    //fetching status from std table
    const { data, error } = await supabase
      .from("students")
      .select("full_name, status, course")
      .eq("cnic", cnic)
      .single();

    if (error || !data) {
      return Response.json({ error: { error } }, { status: 404 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "something went wrong" }, { status: 500 });
  }
}
