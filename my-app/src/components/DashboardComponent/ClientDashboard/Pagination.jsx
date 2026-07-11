"use client";

import { usePagination } from "@/hooks/Dashboard/usePagination";

export function Pagination() {
  const { currentPage, setCurrentpage, totalItems, PaginatedData, totalPages } =
    usePagination();
  return (
    <>
      Pagination
      <button
        onChange={() => {
          setCurrentpage(prev - 1);
        }}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onChange={() => {
            setCurrentpage(page);
          }}
        >
          {page}
        </button>
      ))}
      <button
        onChange={() => {
          setCurrentpage(prev + 1);
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </>
  );
}
