"use client";
import { createContext, useContext, useState } from "react";

const EditContext = createContext();
export const EditProvider = ({ children }) => {
  const [editData, setEditData] = useState({
    id: null,
    full_name: "",
    cnic: "",
    email: "",
    phone: "",
    course: "",
    campus_id: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const resetEdit = () =>
    setEditData({
      id: null,
      full_name: "",
      cnic: "",
      email: "",
      phone: "",
      course: "",
      campus_id: "",
    });

  const handleEditStd = (data) => {
    setIsEdit(true);
    setEditData({
      id: data.id,
      full_name: data.full_name,
      cnic: data.cnic,
      email: data.email,
      phone: data.phone,
      course: data.course,
      campus_id: data.campus_id || "",
    });
  };
  return (
    <EditContext.Provider
      value={{
        editData,
        setEditData,
        isEdit,
        setIsEdit,
        handleEditStd,
        resetEdit,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};
export const useEdit = () => useContext(EditContext);
