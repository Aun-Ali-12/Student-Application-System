import { IconCalendar } from "@tabler/icons-react";

export function DateFilter({ filters, setFilters, show, setShow }) {
  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-[#EEEDFE] hover:text-[#5B4FCF] hover:border-[#5B4FCF] transition"
      >
        <IconCalendar size={14} />
        {filters.from && filters.to
          ? `${filters.from} → ${filters.to}`
          : "Filter by Date"}
      </button>
      {show && (
        <div className="absolute top-full right-0 mt-2 z-20 bg-white border border-gray-200 rounded-xl shadow-lg p-4 min-w-[240px]">
          <p className="text-xs font-medium text-gray-500 mb-3">
            Select Date Range
          </p>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <input
                type="date"
                value={filters.from}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, from: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] transition"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <input
                type="date"
                value={filters.to}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, to: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] transition"
              />
            </div>
            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, from: "", to: "" }));
                setShow(false);
              }}
              className="w-full text-xs text-gray-500 hover:text-red-500 transition text-center pt-1"
            >
              Clear filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
