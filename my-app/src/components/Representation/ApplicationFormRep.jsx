"use client";

import { FormUI } from "../Form";
import { useStudentForm } from "@/hooks/StudentForm";
import { Navbar } from "../public/Navbar/Navbar";
import { Footer } from "../public/Footer/Footer";

function Form() {
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();
  return (
    <>
      <Navbar />
      <FormUI
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        campuses={campuses}
        loading={loading}
      />
      <Footer />
    </>
  );
}
export default Form;
