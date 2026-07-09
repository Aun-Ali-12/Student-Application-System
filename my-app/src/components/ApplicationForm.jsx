"use client";

import { FormUI } from "./Form";
import { useStudentForm } from "@/hooks/StudentForm";

function Form() {
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();
  return (
    <>
      <FormUI
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        campuses={campuses}
        loading={loading}
      />
    </>
  );
}
export default Form;
