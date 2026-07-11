import { useStudent } from "@/ContextApi/StudentData";
import { useState } from "react";

export function usePagination() {
  const { filteredData } = useStudent();
  const [currentPage, setCurrentpage] = useState(1);
  const totalItems = 10;

  const PaginatedData = filteredData.slice(
    (currentPage - 1) * totalItems,
    currentPage * totalItems,
  );
  const totalPages = Math.ceil(filteredData.length / totalItems);

  return{currentPage, setCurrentpage, totalItems, PaginatedData, totalPages}
}
