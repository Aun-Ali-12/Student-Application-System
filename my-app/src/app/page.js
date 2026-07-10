import Form from "@/components/Representation/ApplicationFormRep";
import supabase from "@/lib/supabase";

export default function Home() {
  console.log(supabase);
  return (
    <>
      <Form />
    </>
  );
}
