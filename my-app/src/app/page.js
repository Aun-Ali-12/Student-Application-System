import Form from "@/components/ApplicationForm";
import supabase from "@/lib/supabase";


export default function Home() {
  console.log(supabase);
  return (
    <>
      <Form />
    </>
  );
}
