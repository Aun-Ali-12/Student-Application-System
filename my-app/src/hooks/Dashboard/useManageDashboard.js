"use client";

import {
  DelStd,
  UpdateStudentStatus,
} from "@/SupabaseApi/Dashboard/ManageApplication";
import { useStudent } from "@/ContextApi/StudentData";
import { LogOut } from "@/SupabaseApi/Login";

export function ManageDashboard() {
  const { setData } = useStudent();
  //Logout func
  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      alert("Logout failed, please try again");
      return;
    }
    alert("logging out");
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
    alert("Status update successfully!");
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
    alert("Application deleted successfully");
  };
  return { handleLogOut, UpdateStatus, handleDel };
}
