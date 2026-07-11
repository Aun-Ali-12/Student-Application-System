"use client";
import { createContext, useContext, useState } from "react";

const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    campus_id: "",
    course: "",
    search: "",
  });

  const filteredData = data.filter((s) => {
    if (filters.status && s.status !== filters.status) return false;
    if (filters.course && s.course !== filters.course) return false;
    if (Number(filters.campus_id) && s.campus_id !== Number(filters.campus_id))
      return false;
    if (filters.search && !s.cnic.includes(filters.search)) return false;
    return true;
  });
  return (
    <StudentContext.Provider
      value={{ data, setData, filters, setFilters, filteredData }}
    >
      {children}
    </StudentContext.Provider>
  );
};
export const useStudent = () => useContext(StudentContext);
