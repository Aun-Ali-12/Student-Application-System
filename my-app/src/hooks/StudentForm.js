"use client";

import { useEdit } from "@/ContextApi/Edit";
import { useStudent } from "@/ContextApi/StudentData";
import {
  FetchCampus,
  InsertStudents,
  UpdateStudents,
} from "@/SupabaseApi/FetchCampus";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
          Swal.fire({
            title: "Error!",
            text: "Cnic already in use, try any other.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
          return;
        }
        setForm({
          full_name: "",
          cnic: "",
          email: "",
          phone: "",
          course: "",
          campus_id: "",
        });
        Swal.fire({
          title: "Success!",
          text: "Data successfully submitted.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }

      //If edit mode? then
      if (isEdit) {
        const response = await UpdateStudents(editData);
        if (!response.success) {
          Swal.fire({
            title: "Error!",
            text: response.error,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          return;
        }
        setData((prev) =>
          prev.map((s) => (s.id === editData.id ? { ...s, ...editData } : s)),
        );
        resetEdit();
        setIsEdit(false);
        Swal.fire({
          title: "Success!",
          text: "Save changes successfully updated.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return { form, campuses, loading, handleChange, handleSubmit };
}
