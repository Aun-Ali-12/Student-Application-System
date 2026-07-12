import { useStudent } from "@/ContextApi/StudentData";
import { useEffect, useState } from "react";

export function usePagination() {
  const { filteredData } = useStudent();
  const [currentPage, setCurrentpage] = useState(1);
  const [totalItems, setTotalItems] = useState(10);

  useEffect(() => {
    setCurrentpage(1);
  }, [filteredData]);

  //total items == all show filter data else paginated data
  const PaginatedData =
    totalItems === "all"
      ? filteredData
      : filteredData.slice(
          (currentPage - 1) * totalItems,
          currentPage * totalItems,
        );

  //total items === all then show 1
  const totalPages =
    totalItems === "all" ? 1 : Math.ceil(filteredData.length / totalItems);

  return {
    currentPage,
    setCurrentpage,
    totalItems,
    setTotalItems,
    PaginatedData,
    totalPages,
  };
}
