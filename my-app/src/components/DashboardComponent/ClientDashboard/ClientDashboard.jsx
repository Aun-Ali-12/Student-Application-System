"use client";

import { StudentDataTable } from "./StudentCard";
import { useEffect } from "react";
import { useStudent } from "@/ContextApi/StudentData";
import { ManageDashboard } from "@/hooks/Dashboard/useManageDashboard";
import { useEdit } from "@/ContextApi/Edit";
import { useStudentForm } from "@/hooks/StudentForm";
import { FormUI } from "@/components/Form";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import { usePagination } from "@/hooks/Dashboard/usePagination";

export default function Dashboard({ studentData, role, campusName }) {
  //data from students context
  const { setData } = useStudent();

  //temporary handllogout from manage dashbaord hook
  const { handleLogOut } = ManageDashboard();

  //useStudenForm hook used for Editform ui component:
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();

  //useEdit context
  const { isEdit } = useEdit();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  //paginated data
  const {
    PaginatedData,
    currentPage,
    setCurrentpage,
    totalItems,
    setTotalItems,
    totalPages,
  } = usePagination();

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

      {/* filter component */}
      <Filters />

      {/* table structure to render student data  */}
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
          {PaginatedData && PaginatedData.length === 0 ? (
            <tr>
              <td colSpan={8}>No data found!</td>
            </tr>
          ) : (
            PaginatedData.map((d) => <StudentDataTable key={d.id} data={d} />)
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentpage={setCurrentpage}
        totalItems={totalItems}
        setTotalItems={setTotalItems}
        totalPages={totalPages}
        PaginatedData={PaginatedData}
      />

      {/* on edit mode  */}
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
