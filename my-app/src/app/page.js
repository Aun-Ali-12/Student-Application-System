import Form from "@/components/ApplicationForm";
import supabase from "@/lib/supabase";
import StatusPage from "./status/page";


export default function Home() {
  console.log(supabase);
  return (
    <>
      <Form />
      <StatusPage/>
    </>
  );
}
