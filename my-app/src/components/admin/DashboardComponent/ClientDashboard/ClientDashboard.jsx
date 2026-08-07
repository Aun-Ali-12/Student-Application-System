"use client";

import { StudentDataTable } from "./StudentCard";
import { useEffect, useState } from "react";
import { useStudent } from "@/ContextApi/StudentData";
import { useEdit } from "@/ContextApi/Edit";
import { useStudentForm } from "@/hooks/StudentForm";
import { FormUI } from "@/components/Form";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import { usePagination } from "@/hooks/Dashboard/usePagination";
import { DashboardSkeleton } from "@/components/admin/loader/Dashboard/DashboardSkeleton";

export default function Dashboard({ studentData, role, campusName }) {
  //data from students context
  const [load, setLoad] = useState(true);
  const { setData } = useStudent();

  //useStudenForm hook used for Editform ui component:
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();

  //useEdit context
  const { isEdit } = useEdit();

  useEffect(() => {
    if (studentData) {
      setLoad(false);
      setData(studentData || []);
    }
  }, [studentData]);

  //paginated data
  const {
    PaginatedData,
    currentPage,
    setCurrentpage,
    totalItems,
    setTotalItems,
    totalPages,
  } = usePagination();

  if (load) {
    return <DashboardSkeleton />;
  }

  return (
    <>
      <div className="p-1 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1 capitalize">
              {campusName} —{" "}
              <span className="text-[#5B4FCF] font-medium">
                {role?.replace("_", " ")}
              </span>
            </p>
          </div>
        </div>

        {/* Filters */}
        <Filters />

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full text-sm capitalize relative">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-gray-200">
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Name
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    CNIC
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Email
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Phone
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Course
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Campus
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 overflow-visible">
                {PaginatedData && PaginatedData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="text-center py-12 text-sm text-gray-400"
                    >
                      No data found!
                    </td>
                  </tr>
                ) : (
                  PaginatedData.map((d) => (
                    <StudentDataTable key={d.id} data={d} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentpage={setCurrentpage}
          totalItems={totalItems}
          setTotalItems={setTotalItems}
          totalPages={totalPages}
          PaginatedData={PaginatedData}
        />

        {/* Edit form overlay */}
        {isEdit && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <FormUI
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                campuses={campuses}
                loading={loading}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
