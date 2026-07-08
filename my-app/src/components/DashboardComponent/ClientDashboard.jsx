"use client";

import { LogOut } from "@/SupabaseApi/Login";
import { StdData } from "./StudentCard";
import {
  DelStd,
  UpdateStudentStatus,
} from "@/SupabaseApi/Dashboard/ManageApplication";
import { useEffect, useState } from "react";
import { FormUI } from "../Form";

export default function Dashboard({ data, role, campusName }) {
  const [students, setStudents] = useState(data); //student data getting from server component
  const [editData, setEditData] = useState({
    id: null,
    full_name: "",
    email: "",
    course: "",
    cnic: "",
    campus_id: null,
  });
  const [isEdit, setIsEdit] = useState(false);

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
    setStudents((prev) =>
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
    setStudents((prev) => prev.filter((s) => s.id !== id));
    alert("Application deleted successfully");
  };

  const handleEdit = (data) => {
    console.log(data);
    setIsEdit(true);
    setEditData({
      id: data.id,
      full_name: data.full_name,
      email: data.email,
      course: data.course,
      cnic: data.cnic,
      campus_id: data.campus_id,
    });
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
          {students && students.length === 0 ? (
            <p>No data found!</p>
          ) : (
            students.map((d) => (
              <StdData
                key={d.id}
                data={d}
                UpdateStatus={UpdateStatus}
                handleDel={handleDel}
                handleEdit={handleEdit}
              />
            ))
          )}
        </tbody>
      </table>

      {/* {isEdit ? <FormUI editData={editData} isEdit={isEdit} /> : ""} */}
    </>
  );
}
