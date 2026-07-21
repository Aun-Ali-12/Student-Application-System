import { useStudent } from "@/ContextApi/StudentData";
import { useStudentForm } from "@/hooks/StudentForm";
import { exportToCSV } from "@/utility/StudentCSV";
import { IconDownload } from "@tabler/icons-react";

export const Filters = () => {
  const { filters, filteredData, setFilters } = useStudent();
  const { campuses } = useStudentForm();

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-wrap gap-3 items-end">
          {/* Status */}
          <div className="flex flex-col gap-1.5 min-w-[130px]">
            <label className="text-xs font-medium text-gray-500">Status</label>
            <select
              name="Statusfilter"
              id="Statusfilter"
              value={filters.status}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent bg-white transition"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Course */}
          <div className="flex flex-col gap-1.5 min-w-[180px]">
            <label className="text-xs font-medium text-gray-500">Course</label>
            <select
              name="Coursefilter"
              id="Coursefilter"
              value={filters.course}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, course: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent bg-white transition"
            >
              <option value="">All Courses</option>
              <option value="ai and chatbot development">
                AI & Chatbot Dev
              </option>
              <option value="web and app development">Web & App Dev</option>
              <option value="digital marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Campus */}
          <div className="flex flex-col gap-1.5 min-w-[160px]">
            <label className="text-xs font-medium text-gray-500">Campus</label>
            <select
              name="Campuses"
              id="Campuses"
              value={filters.campus_id}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, campus_id: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent bg-white transition"
            >
              <option value="">All Campuses</option>
              {campuses &&
                campuses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex flex-col gap-1.5 min-w-[180px]">
            <label className="text-xs font-medium text-gray-500">
              Search by CNIC
            </label>
            <input
              type="search"
              name="search-std"
              id="search-std"
              placeholder="42101-1234567-1"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
            />
          </div>

          {/* Date from */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">From</label>
            <input
              type="date"
              name="from"
              id="from"
              value={filters.from}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, from: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
            />
          </div>

          {/* Date to */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">To</label>
            <input
              type="date"
              name="to"
              id="to"
              value={filters.to}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, to: e.target.value }))
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
            />
          </div>

          {/* Download CSV */}
          <button
            type="button"
            onClick={() => exportToCSV(filteredData)}
            className="flex items-center gap-2 bg-[#5B4FCF] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#7B6FDF] transition"
          >
            <IconDownload size={16} />
            Export CSV
          </button>
        </div>
      </div>
    </>
  );
};
