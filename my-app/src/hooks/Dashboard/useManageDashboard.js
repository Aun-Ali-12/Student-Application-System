"use client";

import {
  DelStd,
  UpdateStudentStatus,
} from "@/SupabaseApi/Dashboard/ManageApplication";
import { useStudent } from "@/ContextApi/StudentData";
import { LogOut } from "@/SupabaseApi/Login";
import Swal from "sweetalert2";

export function ManageDashboard() {
  const { setData } = useStudent();
  //Logout func
  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      alert("Logout failed, please try again");
      return;
    }
    window.location.replace("/login");
  };

  //Updates student status
  const UpdateStatus = async (newStatus, id) => {
    const response = await UpdateStudentStatus(newStatus, id);
    if (!response.success) {
      alert(response.error);
      return;
    }
    //updating state to render updated data in UI
    setData((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)),
    );
    Swal.fire({
      title: "Success!",
      text: "Application status updated successfully!",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const handleDel = async (id) => {
    const response = await DelStd(id);
    if (!response.success) {
      alert(error.message);
      console.log(response);
      return;
    }
    //updating state to render updated data in UI
    setData((prev) => prev.filter((s) => s.id !== id));
    Swal.fire({
      title: "Success!",
      text: "Application successfully deleted!",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };
  return { handleLogOut, UpdateStatus, handleDel };
}
