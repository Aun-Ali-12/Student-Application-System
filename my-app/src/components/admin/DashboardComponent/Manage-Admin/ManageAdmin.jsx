"use client";
import { useEffect } from "react";
import { AdminCard } from "./AdminCard";
import { ManageAdmin } from "@/hooks/Dashboard/Manage-Admin/ManageAdmin";
import { AdminForm } from "./AdminForm";

export default function ManageAdmins() {
  const {
    campuses,
    adminForm,
    error,
    success,
    loading,
    CreateAdmin,
    isCreateAdmin,
    setIsCreateAdmin,
    showAdmins,
    formRef,
    editData,
    editMode,
    setEditMode,
    admins,
    loadAdmins,
    loadCampus,
    handleChange,
    handleEdit,
    handleDel,
    handleManageAdmins,
    resetEditData,
  } = ManageAdmin();

  useEffect(() => {
    loadCampus();
    loadAdmins();
  }, []);

  useEffect(() => {
    if (editMode && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [editMode]);

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Admins</h1>
            <p className="text-sm text-gray-500 mt-1">
              Create, edit or remove campus admins
            </p>
          </div>
          {/* Create/Edit form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <AdminForm
              editMode={editMode}
              setEditMode={setEditMode}
              editData={editData}
              CreateAdmin={CreateAdmin}
              isCreateAdmin={isCreateAdmin}
              setIsCreateAdmin={setIsCreateAdmin}
              formRef={formRef}
              handleChange={handleChange}
              adminForm={adminForm}
              campuses={campuses}
              error={error}
              success={success}
              loading={loading}
              resetEditData={resetEditData}
            />
          </div>

          {/* Admins table */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-gray-900">
                Campus Admins
              </h2>
              <button
                onClick={handleManageAdmins}
                className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
              >
                {showAdmins ? "Hide" : "Show Admins"}
              </button>
            </div>

            {showAdmins && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8F9FF] border-b border-gray-200">
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Name
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Campus
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {admins.map((a) => (
                      <AdminCard
                        key={a.admin_id}
                        data={a}
                        handleDel={handleDel}
                        handleEdit={handleEdit}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
