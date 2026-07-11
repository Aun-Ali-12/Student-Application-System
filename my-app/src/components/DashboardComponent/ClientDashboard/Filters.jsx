import { useStudent } from "@/ContextApi/StudentData";
import { useStudentForm } from "@/hooks/StudentForm";
import { useEffect } from "react";

export const Filters = () => {
  const { filters, setFilters } = useStudent();
  const { campuses } = useStudentForm();
  useEffect(() => {
    console.log(campuses);
  }, []);

  return (
    <>
      {/* filter drop down  */}
      <label htmlFor="Statusfilter">Status|||</label>
      {/* status wise record */}
      <select
        name="Statusfilter"
        id="Statusfilter"
        value={filters.status}
        onChange={(e) => {
          setFilters((prev) => ({ ...prev, status: e.target.value }));
        }}
      >
        <option value="">All</option>
        <option value="pending">pending</option>
        <option value="accepted">accepted</option>
        <option value="rejected">rejected</option>
      </select>
      {/* Courses wise record */}
      <label htmlFor="Statusfilter">Courses|||</label>
      <select
        name="Coursefilter"
        id="Coursefilter"
        value={filters.course}
        onChange={(e) => {
          setFilters((prev) => ({ ...prev, course: e.target.value }));
        }}
      >
        <option value="">All</option>
        <option value="ai and chatbot development">
          ai and chatbot development
        </option>
        <option value="web and app development">web and app development</option>
        <option value="digital marketing">digital marketing</option>
      </select>
      {/* Campuses wise record */}
      <label htmlFor="Campuses">Campuses|||</label>
      <select
        name="Campuses"
        id="Campuses"
        value={filters.campus_id}
        onChange={(e) => {
          setFilters((prev) => ({ ...prev, campus_id: e.target.value }));
        }}
      >
        <option value="">Campuses</option>
        {campuses &&
          campuses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
      </select>
      {/* search bar */}
      <label htmlFor="search-std">Search by cnic</label>
      <input
        type="search"
        name="search-std"
        id="search-std"
        placeholder="Search by cnic"
        value={filters.search}
        onChange={(e) => {
          setFilters((prev) => ({ ...prev, search: e.target.value }));
        }}
      />
    </>
  );
};
