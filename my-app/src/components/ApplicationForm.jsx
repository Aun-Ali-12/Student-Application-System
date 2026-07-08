"use client";

import { FetchCampus, InsertStudents } from "@/SupabaseApi/FetchCampus";

import { useEffect, useState } from "react";
import { FormUI } from "./Form";

function Form() {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    email: "",
    phone: "",
    course: "",
    campus_id: "",
  });
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCampus() {
      const response = await FetchCampus();
      setCampuses(response.data || []);
    }
    loadCampus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await InsertStudents(form);
      if (!response.success) {
        alert("User already exists with this cnic");
        return;
      }
      alert("Data is submitted");
      setForm({
        name: "",
        cnic: "",
        email: "",
        phone: "",
        course: "",
        campus_id: "",
      });
    } catch (err) {
      console.log("didn't get the response from function", err);
    } finally {
      setLoading(false);
    }
  };

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
