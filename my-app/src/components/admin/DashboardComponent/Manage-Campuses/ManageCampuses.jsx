"use client";
import { ManageCampus } from "@/hooks/Dashboard/Manage-Campus/ManageCampus";
import CampusForm from "./CampusForm";
import { useEffect } from "react";
export default function ClientCampus() {
  const {
    isEdit,
    setIsEdit,
    addCampus,
    editVal,
    isAdded,
    loadCampuses,
    isShow,
    setIsShow,
    campuses,
    newCampus,
    isDelete,
    handleChange,
    handleDelete,
    handleEdit,
    formRef,
  } = ManageCampus();

  useEffect(() => {
    if (isEdit && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isEdit]);
  return (
    <>
      <div className="space-y-6 mt-20 md:mt-10">
        {/* campus form component  */}
        <div className="flex flex-col gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <CampusForm
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            addCampus={addCampus}
            editVal={editVal}
            isAdded={isAdded}
            loadCampuses={loadCampuses}
            isShow={isShow}
            setIsShow={setIsShow}
            campuses={campuses}
            newCampus={newCampus}
            isDelete={isDelete}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            formRef={formRef}
          />
        </div>
      </div>
    </>
  );
}
