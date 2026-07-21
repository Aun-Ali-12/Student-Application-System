"use client";

export function Pagination({
  currentPage,
  setCurrentpage,
  totalPages,
  totalItems,
  setTotalItems,
  PaginatedData,
}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
        {/* Items per page */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Show</span>
          <select
            value={totalItems}
            onChange={(e) => {
              const value = e.target.value;
              setTotalItems(value === "all" ? "all" : Number(value));
              setCurrentpage(1);
            }}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent bg-white transition"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value="all">All</option>
          </select>
          <span className="text-xs text-gray-500">entries</span>
        </div>

        {/* Page info */}
        <p className="text-xs text-gray-500">
          {totalItems === "all" || PaginatedData.length < totalItems
            ? `Showing all ${PaginatedData.length} entries`
            : `Page ${currentPage} of ${totalPages} — ${PaginatedData.length} entries`}
        </p>

        {/* Prev / pages / Next */}
        {totalItems !== "all" && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentpage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] hover:border-[#5B4FCF] disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentpage(page)}
                className={`w-8 h-8 text-sm rounded-lg transition
            ${
              currentPage === page
                ? "bg-[#5B4FCF] text-white"
                : "border border-gray-200 text-gray-600 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] hover:border-[#5B4FCF]"
            }
          `}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentpage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] hover:border-[#5B4FCF] disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
