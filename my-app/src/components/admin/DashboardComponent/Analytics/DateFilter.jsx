// src/components/DashboardComponent/Analytics/DateFilter.jsx
"use client";
import { useState } from "react";
import { IconCalendar, IconX } from "@tabler/icons-react";

export function DateFilter({ filters, setFilters }) {
  const [show, setShow] = useState(false);

  const hasFilter = filters.from && filters.to;

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition
          ${
            hasFilter
              ? "bg-[#EEEDFE] text-[#5B4FCF] border-[#5B4FCF]"
              : "text-gray-600 border-gray-200 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] hover:border-[#5B4FCF]"
          }`}
      >
        <IconCalendar size={14} />
        {hasFilter ? `${filters.from} → ${filters.to}` : "Filter by Date"}
      </button>

      {show && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setShow(false)} />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 z-20 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-64">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-700">Date Range</p>
              <button onClick={() => setShow(false)}>
                <IconX
                  size={14}
                  className="text-gray-400 hover:text-gray-600"
                />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">From</label>
                <input
                  type="date"
                  value={filters.from}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, from: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
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
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>

              {hasFilter && (
                <button
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, from: "", to: "" }));
                    setShow(false);
                  }}
                  className="w-full text-xs text-red-500 hover:text-red-600 transition text-center pt-1"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
