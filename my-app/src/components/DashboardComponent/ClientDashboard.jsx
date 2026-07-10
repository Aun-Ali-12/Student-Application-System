"use client";

import { StudentDataTable } from "./StudentCard";
import { useEffect, useState } from "react";
import { useStudent } from "@/ContextApi/StudentData";
import { ManageDashboard } from "@/hooks/Dashboard/useManageDashboard";

export default function Dashboard({ studentData, role, campusName }) {
  const { setData } = useStudent();
  const { handleLogOut, UpdateStatus, handleDel } = ManageDashboard();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  return (
    <>
      <StudentDataTable
        UpdateStatus={UpdateStatus}
        handleDel={handleDel}
        handleLogOut={handleLogOut}
        campusName={campusName}
        role={role}
      />
    </>
  );
}
