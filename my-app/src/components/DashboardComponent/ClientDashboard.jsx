"use client";

import { LogOut } from "@/SupabaseApi/Login";
import { StdData } from "./StudentCard";
import {
  DelStd,
  UpdateStudentStatus,
} from "@/SupabaseApi/Dashboard/ManageApplication";
import { useEffect, useState } from "react";
import { useEdit } from "@/ContextApi/Edit";
import { FormUI } from "../Form";
import { useStudentForm } from "@/hooks/StudentForm";
import { useStudent } from "@/ContextApi/StudentData";

export default function Dashboard({ studentData, role, campusName }) {
  const { isEdit } = useEdit();
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();
  const { data, setData } = useStudent();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      alert("Logout failed, please try again");
      return;
    }
    alert("logging out");
    window.location.replace("/login");
  };

  const UpdateStatus = async (newStatus, id) => {
    console.log(status, id);
    const response = await UpdateStudentStatus(newStatus, id);
    if (!response.success) {
      console.log(response.error);
      alert(response.error);
      return;
    }
    console.log(response.success);
    //updating state to render updated data in UI
    setData((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)),
    );
    alert("Status update successfully!");
  };

  const handleDel = async (id) => {
    console.log(id);
    const response = await DelStd(id);
    if (!response.success) {
      alert(error.message);
      return;
    }
    //updating state to render updated data in UI
    setData((prev) => prev.filter((s) => s.id !== id));
    alert("Application deleted successfully");
  };

  return (
    <>
      <div>
        <h1>Dashboard </h1>
        <button type="button" onClick={handleLogOut}>
          logout
        </button>
        <h1 className="capitalize">
          campus name:<span>{campusName}</span> <span>{role}</span>
        </h1>
      </div>

      <table className="capitalize">
        <thead>
          <tr>
            <th>name</th>
            <th>cnic</th>
            <th>email</th>
            <th>phone</th>
            <th>course</th>
            <th>campus</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 ? (
            <tr>
              <td>No data found!</td>
            </tr>
          ) : (
            data.map((d) => (
              <StdData
                key={d.id}
                data={d}
                UpdateStatus={UpdateStatus}
                handleDel={handleDel}
              />
            ))
          )}
        </tbody>
      </table>

      {isEdit ? (
        <FormUI
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          campuses={campuses}
          loading={loading}
        />
      ) : (
        ""
      )}
    </>
  );
}
