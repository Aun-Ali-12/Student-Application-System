"use client";

import { useEdit } from "@/ContextApi/Edit";
import { useStudent } from "@/ContextApi/StudentData";
import {
  FetchCampus,
  InsertStudents,
  UpdateStudents,
} from "@/SupabaseApi/FetchCampus";
import { useEffect, useState } from "react";

export function useStudentForm() {
  const [form, setForm] = useState({
    full_name: "",
    cnic: "",
    email: "",
    phone: "",
    course: "",
    campus_id: "",
  });
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isEdit, setIsEdit, editData, setEditData, resetEdit } = useEdit();
  const { setData } = useStudent();

  useEffect(() => {
    async function loadCampus() {
      const response = await FetchCampus();
      setCampuses(response.data || []);
    }
    loadCampus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isEdit) {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
    if (!isEdit) {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // if not edit mode? then
      if (!isEdit) {
        const response = await InsertStudents(form);
        if (!response.success) {
          alert("User already exists with this cnic");
          return;
        }
        alert("Data is submitted");
        setForm({
          full_name: "",
          cnic: "",
          email: "",
          phone: "",
          course: "",
          campus_id: "",
        });
      }

      //If edit mode? then
      if (isEdit) {
        const response = await UpdateStudents(editData);
        if (!response.success) {
          alert(response.error);
          return;
        }
        alert("Updated");
        setData((prev) =>
          prev.map((s) => (s.id === editData.id ? { ...s, ...editData } : s)),
        );
        resetEdit();
        setIsEdit(false);
      }
    } catch (err) {
      console.log("didn't get the response from function", err);
    } finally {
      setLoading(false);
    }
  };

  return { form, campuses, loading, handleChange, handleSubmit };
}
