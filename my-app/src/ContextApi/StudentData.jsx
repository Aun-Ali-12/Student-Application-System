"use client";
import { createContext, useContext, useState } from "react";

const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <StudentContext.Provider value={{data, setData}}>{children}</StudentContext.Provider>
  );
};
export const useStudent = () => useContext(StudentContext);
