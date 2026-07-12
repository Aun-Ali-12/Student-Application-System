"use client";

export function Pagination({
  currentPage,
  setCurrentpage,
  totalPages,
  totalItems,
  setTotalItems,
}) {
  return (
    <>
      <div>
        <select
          name=""
          id=""
          value={totalItems}
          onChange={(e) => {
            const value = e.target.value;
            setTotalItems(value === "all" ? "all" : Number(value));
            setCurrentpage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value="all">show all</option>
        </select>
      </div>

      {totalItems !== "all" && (
        <div className="flex gap-2">
          <button
            onClick={() => {
              setCurrentpage((prev) => prev - 1);
            }}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentpage(page);
                }}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setCurrentpage((prev) => prev + 1);
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <p>
            Page {currentPage} out of {totalPages}
          </p>
        </div>
      )}
    </>
  );
}
